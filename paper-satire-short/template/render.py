#!/usr/bin/env python3
"""Deterministic stills via window.__frame(t) on ?test=1 (never screenshot real-time playback: it times out / drifts).
usage:  render.py 0 1.5 3          explicit times
        render.py --every 1        every N seconds over the whole film      -> contact sheet of the film
        render.py --range 8 10.5 0.1   fast action at 0.1 s                 -> contact sheet of one beat
env OUT=dir (default stills). Existing frames are skipped, so long renders can be split into chunks (each call < ~2 min).
Prints console errors + a black-frame check."""
import sys, base64, asyncio, os
from playwright.async_api import async_playwright
from _common import URL, CHROME_ARGS, timeline, ROOT
os.chdir(ROOT)
args = sys.argv[1:]; T = timeline()
if args and args[0] == '--every':
    st = float(args[1]); ts = [round(x * st, 2) for x in range(int(T['DUR'] / st) + 1)]
elif args and args[0] == '--range':
    a, b, st = map(float, args[1:4]); ts = []; x = a
    while x <= b + 1e-6: ts.append(round(x, 2)); x += st
else:
    ts = [float(a) for a in args]
ts = [min(t, T['DUR'] - 1 / 60) for t in ts]
async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(args=CHROME_ARGS)
        pg = await br.new_page(viewport={'width': 540, 'height': 960})
        errs = []
        pg.on('console', lambda m: errs.append(m.type + ': ' + m.text) if m.type in ('error', 'warning') else None)
        pg.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
        await pg.goto(URL + '?test=1')
        await pg.wait_for_function('window.__ready===true', timeout=120000)
        OUT = os.environ.get('OUT', 'stills'); os.makedirs(OUT, exist_ok=True)
        dark = []
        for t in ts:
            fn = f'{OUT}/s_{t:06.2f}.jpg'
            if os.path.exists(fn): continue
            d = await pg.evaluate(f'window.__frame({t})')
            open(fn, 'wb').write(base64.b64decode(d.split(',')[1]))
            # black-frame check: mean brightness of a downscaled copy
            m = await pg.evaluate("(()=>{const c=document.createElement('canvas');c.width=36;c.height=64;const g=c.getContext('2d');g.drawImage(document.getElementById('gl'),0,0,36,64);const d=g.getImageData(0,0,36,64).data;let s=0;for(let i=0;i<d.length;i+=4)s+=d[i]+d[i+1]+d[i+2];return s/(d.length/4)/3;})()")
            if m < 12: dark.append((t, round(m, 1)))
        print('rendered', len(ts), '->', OUT)
        print('BLACK/DARK frames:', dark if dark else 'none')
        print('\n'.join(errs[:20]) or 'no console errors')
        await br.close()
asyncio.run(main())
