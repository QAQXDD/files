#!/usr/bin/env python3
"""Phone-size playtest (390x844, touch): play overlay visible, canvas fits the screen, tap starts playback, picture follows
the AUDIO clock (t vs wall clock), replay button appears at the end and restarts from 0.

  PHASE=play python3 playtest.py   # tap -> sample [t, wall, AudioContext state] every 2 s; writes play_0.png (before tap)
  PHASE=end  python3 playtest.py   # start 1.5 s before the end (?from=), wait for the replay button, tap it; play_2.png
Run the two phases as separate commands: real-time playback with software WebGL (SwiftShader) is slow and starves the
page, and screenshots DURING playback time out. On a GPU machine PHASE=all (default) runs both.
"""
import asyncio, os, json
from playwright.async_api import async_playwright
from _common import URL, CHROME_ARGS, timeline, ROOT
os.chdir(ROOT)
DUR = timeline()['DUR']
PH = os.environ.get('PHASE', 'all')


async def page(br, dpr):
    ctx = await br.new_context(viewport={'width': 390, 'height': 844}, device_scale_factor=dpr, is_mobile=True, has_touch=True)
    pg = await ctx.new_page(); errs = []
    pg.on('console', lambda m: errs.append(m.type + ': ' + m.text) if m.type in ('error', 'warning') else None)
    pg.on('pageerror', lambda e: errs.append('pageerror: ' + str(e)))
    return pg, errs


async def main():
    async with async_playwright() as p:
        br = await p.chromium.launch(args=CHROME_ARGS + ['--autoplay-policy=no-user-gesture-required'])
        if PH in ('all', 'play'):
            pg, errs = await page(br, 2)
            await pg.goto(URL); await pg.wait_for_function('window.__ready===true', timeout=120000)
            box = await pg.evaluate("(()=>{const r=document.getElementById('gl').getBoundingClientRect();return [r.left,r.top,r.width,r.height].map(Math.round)})()")
            print('canvas css box (x,y,w,h)', box, '-> fits 390x844:', box[2] <= 390 and box[3] <= 844, flush=True)
            await pg.screenshot(path='play_0.png')
            await pg.tap('#tap'); await asyncio.sleep(1.0)
            s = []
            for k in range(int(os.environ.get('N', '3'))):
                await asyncio.sleep(2.0)
                s.append(await pg.evaluate('[window.__t, window.__wall, window.__actx]'))
            print('samples [t(audio clock), wall, AudioContext state]:', json.dumps(s), flush=True)
            print('\n'.join(errs) or 'no console errors', flush=True)
        if PH in ('all', 'end'):
            pg, errs = await page(br, 1)
            await pg.goto(URL + f'?from={max(0, DUR - 1.5):.2f}'); await pg.wait_for_function('window.__ready===true', timeout=120000)
            await pg.tap('#tap')
            st = None
            for k in range(20):
                await asyncio.sleep(1.0)
                st = await pg.evaluate("(()=>{const b=document.getElementById('tap');return [b.style.display, b.classList.contains('replay')]})()")
                if st[0] == 'flex': break
            print('end state [overlay display, is replay]:', st, flush=True)
            try: await pg.screenshot(path='play_2.png', timeout=8000)
            except Exception: print('(screenshot skipped: software WebGL compositor busy — fine on a GPU machine)')
            await pg.tap('#tap'); await asyncio.sleep(1.5)
            print('after replay tap t =', await pg.evaluate('window.__t'), '(small = restarted from 0)')
            print('\n'.join(errs) or 'no console errors')
        await br.close()
asyncio.run(main())
