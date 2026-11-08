#!/usr/bin/env python3
"""Build: timeline.json -> esbuild bundle -> inline font + audio -> ONE offline HTML (out/<slug>.html).
Config in project.json: slug (file + MP4 name), title, lang (zh-CN | en), font (woff2 path), bg.
Audio: out/<slug>_audio.wav (made by audio.py + master.py) is embedded as 192k MP3. Missing audio -> silent build (still plays)."""
import base64, subprocess, os, json, html, shutil, sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
P = json.load(open('project.json', encoding='utf8'))
os.makedirs('out', exist_ok=True)
subprocess.run([sys.executable, 'timeline.py'], check=True)
esb = os.path.join('node_modules', '.bin', 'esbuild')
if not os.path.exists(esb):
    sys.exit('esbuild not found: run `npm install` first')
subprocess.run([esb, 'app.js', '--bundle', '--format=iife', '--minify', '--target=es2020', '--outfile=dist.js', '--log-level=warning',
                '--alias:three=./node_modules/three/build/three.module.js', '--alias:three/addons=./node_modules/three/examples/jsm',
                '--loader:.json=json'], check=True)
wav = f"out/{P['slug']}_audio.wav"
aud = ''
if os.path.exists(wav) and shutil.which('ffmpeg'):
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', wav, '-codec:a', 'libmp3lame', '-b:a', '192k', 'out/_embed.mp3'], check=True)
    aud = base64.b64encode(open('out/_embed.mp3', 'rb').read()).decode()
else:
    print('note: no', wav, '(run audio.py + master.py) -> building without sound')
b = lambda p: base64.b64encode(open(p, 'rb').read()).decode()
h = open('shell.html', encoding='utf8').read()
js = open('dist.js', encoding='utf8').read().replace('</script', '<\\/script')
for k, v in [('__LANG__', P.get('lang', 'zh-CN')), ('__SLUG__', P['slug']), ('__TITLE__', html.escape(P.get('title', P['slug']))),
             ('__BG__', P.get('bg', '#1b1714')), ('__FONT__', b(P.get('font', 'fonts/title.woff2'))), ('__AUDIO__', aud)]:
    h = h.replace(k, v)
h = h.replace('__JS__', js)  # last: the bundle may contain the other markers as text
out = f"out/{P['slug']}.html"
open(out, 'w', encoding='utf8').write(h)
print(out, round(len(h) / 1e6, 2), 'MB')
