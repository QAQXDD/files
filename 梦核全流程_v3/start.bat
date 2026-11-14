@echo off
rem Double-click to open. Starts a local server (port 8648) and opens Chrome or Edge. Keep this window open while playing.
cd /d "%~dp0"
set HARK_NO_OPEN=
:serve
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
if errorlevel 2 goto end
if errorlevel 1 (
  echo Server stopped unexpectedly, restarting...
  set HARK_NO_OPEN=1
  timeout /t 1 /nobreak >nul
  goto serve
)
echo Server stopped, restarting...
set HARK_NO_OPEN=1
goto serve
:end
