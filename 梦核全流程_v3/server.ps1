# Tiny local web server (WebGPU + JS modules do not work from file://).
# Serves this folder on http://localhost:8648/ and opens it in the browser. Close this window to stop.
# v2: survives the browser dropping requests mid-download (page change / door transition) instead of exiting.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$log = Join-Path $root 'server-log.txt'
function Log($m) { try { Add-Content -LiteralPath $log -Value ((Get-Date -Format 'HH:mm:ss') + ' ' + $m) } catch { } }
trap { Log ('FATAL ' + $_.Exception.ToString()); Write-Host $_; exit 1 }
Log 'server start'
$port = 8648
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.IgnoreWriteExceptions = $true
try { $listener.Start() } catch { Write-Host "Port $port is busy. Close the other window first." ; Read-Host 'Press Enter'; exit 2 }
$url = "http://localhost:$port/"
Write-Host "Serving $root at $url  (close this window to stop)"
$chrome = @("$env:ProgramFiles\Google\Chrome\Application\chrome.exe", "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe", "$env:LocalAppData\Google\Chrome\Application\chrome.exe", "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $env:HARK_NO_OPEN) { if ($chrome) { Start-Process $chrome $url } else { Start-Process $url } }
$mime = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.mjs'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.json'='application/json'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.webp'='image/webp'; '.ogg'='audio/ogg'; '.sfx'='text/plain'; '.dat'='text/plain'; '.mp3'='audio/mpeg'; '.glb'='model/gltf-binary'; '.bin'='application/octet-stream'; '.md'='text/plain; charset=utf-8'; '.txt'='text/plain; charset=utf-8'; '.wasm'='application/wasm'; '.svg'='image/svg+xml'; '.ico'='image/x-icon' }
$rootFull = [IO.Path]::GetFullPath($root)
while ($listener.IsListening) {
  try { $ctx = $listener.GetContext() } catch { Log ('GetContext ' + $_.Exception.Message); Start-Sleep -Milliseconds 50; continue }
  $res = $ctx.Response
  try {
    $path = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath)
    if ($path -eq '/' -or $path -eq '') { $path = '/index.html' }
    elseif ($path.EndsWith('/')) { $path = $path + 'index.html' }
    elseif (Test-Path -LiteralPath (Join-Path $rootFull ($path.TrimStart('/') -replace '/', '\')) -PathType Container) { $path = $path + '/index.html' }
    $file = [IO.Path]::GetFullPath((Join-Path $rootFull ($path.TrimStart('/') -replace '/', '\')))
    if ($file.StartsWith($rootFull) -and (Test-Path -LiteralPath $file -PathType Leaf)) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file).ToLower()
      if ($mime.ContainsKey($ext)) { $res.ContentType = $mime[$ext] } else { $res.ContentType = 'application/octet-stream' }
      $res.Headers.Add('Cache-Control', 'no-cache')
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else { $res.StatusCode = 404 }
  } catch {
    Log ('request ' + $ctx.Request.Url.AbsolutePath + ' : ' + $_.Exception.Message)
    try { $res.StatusCode = 500 } catch { }
  } finally {
    try { $res.Close() } catch { try { $res.Abort() } catch { } }
  }
}
