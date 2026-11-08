# 纸艺讽刺短片 · 起步模板 (paper-satire-short template)

A minimal, working starter: one paper room in cross-section, two cardboard characters, a paper ball tossed faster and
faster, a pop-up waste bin, a clock tick that cuts dead at the punchline, sad trombone, camera loops back to frame 0.
**It is a demo of the machinery, not an episode** — replace the set, cast, beats and sounds for every film.

## Quick start (5 commands)

```bash
npm install                                                   # three 0.170.0, mp4-muxer 5.2.2, esbuild 0.24.0
pip install numpy scipy soundfile pyloudnorm Pillow playwright fonttools brotli && python3 -m playwright install chromium
python3 audio.py && python3 master.py                         # sound -> out/demo_paper_ball_audio.wav (-14 LUFS, embedded MP3 <= -1 dBTP)
python3 build.py                                              # -> out/demo_paper_ball.html (single offline file, open it)
python3 render.py --every 1 && python3 sheet.py sheet_sec.jpg # deterministic stills + contact sheet (checks black frames + console errors)
```
Also needs `ffmpeg` on PATH (MP3 embedding). On a headless Linux box without GPU libs: `python3 -m playwright install-deps chromium`.

## More checks
```bash
OUT=fast python3 render.py --range 8.2 10.4 0.1 && python3 sheet.py sheet_fast.jpg "fast/s_*.jpg" 12 150   # fast action at 0.1 s
PHASE=play python3 playtest.py      # 390x844 phone: canvas fit, tap-to-play, audio clock
PHASE=end  python3 playtest.py      # replay button at the end, replay restarts from 0
python3 cover.py covers.json        # native 9:16 + 4:3 covers with paper-cut title -> covers/
python3 fonts/make_font.py [en]     # re-subset the title font after changing prop text (fetches the TTF once)
python3 fetch_commons.py --search "door slam"   # CC0/PD recordings only -> sfx/, logged in sfx/CREDITS.md
```
Open the HTML in desktop Chrome/Edge and use **导出 MP4 / Export MP4** (top right, visible while the play button shows).

## Files
`project.json` config · `timeline.py` beat table → `timeline.json` (shared by picture + sound) · `lib.js` paper-craft kit ·
`chars.js` faces + cardboard rig · `set.js` diorama · `main.js` action/camera/post/export quality · `app.js` player ·
`exporter.js` MP4 export · `shell.html` page template · `audio.py`/`master.py` sound · `build.py` single-file build ·
`render.py`/`sheet.py`/`playtest.py`/`cover.py` capture + checks · `_common.py` paths + headless flags.

## URL / JS hooks
`?test=1` (no UI, for capture) · `?from=SEC` (start playback at SEC) · `?w=1440&h=1080` (render another size) ·
`window.__seek(t)` · `window.__frame(t, 'image/png')` · `window.__duration` · `window.__ready` · `window.__t` (audio-clock time) ·
`window.__camOv = {pos:[..], look:[..], fov}` and `window.__postOv = {amt, band, focus, flash}` (cover framing) ·
`window.__exportMP4({h, fps, q, maxDur})` (programmatic export).

## Licences
three.js — MIT · mp4-muxer — MIT · esbuild — MIT (build only) ·
ZCOOL KuaiLe — SIL OFL 1.1 (`fonts/OFL-ZCOOLKuaiLe.txt`) · Luckiest Guy — Apache 2.0 (`fonts/LICENSE-LuckiestGuy.txt`).
The fonts are embedded as glyph subsets (`fonts/title.woff2`, `fonts/title_en.woff2`); full TTFs are downloaded to `fonts/src/` on demand.
Sounds in this demo are synthesised with numpy (no third-party recordings).
