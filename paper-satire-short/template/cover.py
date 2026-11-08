#!/usr/bin/env python3
"""Covers: render the film's best frame NATIVELY at each aspect (no blurred side bars), then add a paper-cut title.

  python3 cover.py covers.json
covers.json: [{"name": "cover_9x16", "t": 9.2, "w": 1080, "h": 1920, "cam": {"pos": [x,y,z], "look": [x,y,z], "fov": 40},
               "post": {"amt": 1.2, "band": 0.3}, "title": "纸团", "sub": "模板示例", "lang": "zh",
               "title_xy": [540, 380], "sub_xy": [740, 560]}, ...]
- "cam" is optional (default: the film camera at t). For 4:3 (1440x1080) you almost always need a re-framed cam.
- title/sub optional; zh uses ZCOOL KuaiLe, en uses Luckiest Guy (fetched by fonts/make_font.py into fonts/src/).
- writes covers/<name>_raw.png and covers/<name>.jpg + a 200 px thumbnail (check legibility at feed size).
Pick the frame with the clearest pun (the prop + the victim + the hierarchy), never a title-card-like frame.
"""
import sys, os, json, base64, asyncio, subprocess
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from playwright.async_api import async_playwright
from _common import URL, CHROME_ARGS, ROOT
os.chdir(ROOT)
INK = (32, 22, 30, 255)
CREAM = (248, 240, 222, 255)
FONTS = {'zh': 'fonts/src/ZCOOLKuaiLe-Regular.ttf', 'en': 'fonts/src/LuckiestGuy-Regular.ttf'}


def cut_text(text, font_path, fs, fill, ink_w=None, paper_w=None, outer_w=None, tracking=0):
    """Render text as a paper cut-out: ink outline -> cream paper border -> ink rim -> coloured fill. Returns RGBA tile."""
    f = ImageFont.truetype(font_path, fs)
    ink_w = ink_w if ink_w is not None else max(3, round(fs * 0.035))
    paper_w = paper_w if paper_w is not None else round(fs * 0.10)
    outer_w = outer_w if outer_w is not None else paper_w + max(4, round(fs * 0.035))
    # per-char positions (tracking)
    xs, x = [], 0
    for ch in text:
        xs.append(x); x += f.getlength(ch) + tracking * fs
    tw = x - tracking * fs
    asc, desc = f.getmetrics()
    pad = outer_w + 8
    tile = Image.new('RGBA', (int(tw + 2 * pad), int(asc + desc + 2 * pad)), (0, 0, 0, 0))
    d = ImageDraw.Draw(tile)
    def layer(sw, col, fillcol=None):
        for ch, cx in zip(text, xs):
            d.text((pad + cx, pad), ch, font=f, fill=fillcol or col, stroke_width=sw, stroke_fill=col)
    layer(outer_w, INK)
    layer(paper_w, CREAM)
    layer(ink_w, INK)
    layer(0, fill, fill)
    # trim to content
    bb = tile.getbbox(); tile = tile.crop(bb)
    return tile


def strip(text, font_path, fs, bg, fg, padx=0.45, pady=0.22, tracking=0):
    """Text on a torn paper strip (rect with ink border)."""
    f = ImageFont.truetype(font_path, fs)
    xs, x = [], 0
    for ch in text:
        xs.append(x); x += f.getlength(ch) + tracking * fs
    tw = x - tracking * fs
    bb = f.getbbox(text)
    th = bb[3] - bb[1]
    px, py = int(fs * padx), int(fs * pady)
    bw = max(4, round(fs * 0.07))
    w, h = int(tw + 2 * px), int(th + 2 * py)
    tile = Image.new('RGBA', (w + 2 * bw + 4, h + 2 * bw + 4), (0, 0, 0, 0))
    d = ImageDraw.Draw(tile)
    d.rectangle([2, 2, w + 2 * bw + 1, h + 2 * bw + 1], fill=INK)
    d.rectangle([2 + bw, 2 + bw, w + bw + 1, h + bw + 1], fill=bg)
    for ch, cx in zip(text, xs):
        d.text((2 + bw + px + cx, 2 + bw + py - bb[1]), ch, font=f, fill=fg, stroke_width=max(2, round(fs * 0.03)), stroke_fill=INK)
    return tile


def place(base, tile, cx, cy, rot=0.0, shadow=(10, 14), shadow_a=150, blur=4):
    """Paste tile centred at (cx,cy) with rotation and a soft cast shadow."""
    if rot:
        tile = tile.rotate(rot, resample=Image.BICUBIC, expand=True)
    x, y = int(cx - tile.width / 2), int(cy - tile.height / 2)
    a = tile.getchannel('A')
    sh = Image.new('RGBA', tile.size, (10, 6, 14, 0)); sh.putalpha(a.point(lambda v: v * shadow_a // 255))
    sh = sh.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(sh, (x + shadow[0], y + shadow[1]))
    base.alpha_composite(tile, (x, y))
    return (x, y, x + tile.width, y + tile.height)




async def shoot(jobs):
    async with async_playwright() as p:
        br = await p.chromium.launch(args=CHROME_ARGS)
        pg = await br.new_page(viewport={'width': 540, 'height': 960})
        size = None
        for j in jobs:
            if size != (j['w'], j['h']):
                size = (j['w'], j['h'])
                await pg.goto(URL + f"?test=1&w={j['w']}&h={j['h']}")
                await pg.wait_for_function('window.__ready===true', timeout=120000)
            await pg.evaluate('(j)=>{window.__camOv=j.cam||null;window.__postOv=j.post||null;}', j)
            d = await pg.evaluate(f"window.__frame({j['t']},'image/png')")
            open(f"covers/{j['name']}_raw.png", 'wb').write(base64.b64decode(d.split(',')[1]))
        await br.close()


def compose(j):
    im = Image.open(f"covers/{j['name']}_raw.png").convert('RGBA')
    lang = j.get('lang', 'zh'); fp = FONTS[lang]
    if not os.path.exists(fp):
        subprocess.run([sys.executable, 'fonts/make_font.py', lang], check=True)
    k = im.width / 1080
    if j.get('title'):
        place(im, cut_text(j['title'], fp, int(j.get('title_fs', 220) * k), (255, 214, 60, 255), tracking=0.02), *j.get('title_xy', [im.width / 2, im.height * 0.2]), rot=-3)
    if j.get('sub'):
        place(im, strip(j['sub'], fp, int(j.get('sub_fs', 88) * k), (214, 36, 47, 255), (255, 250, 238, 255), tracking=0.05), *j.get('sub_xy', [im.width * 0.68, im.height * 0.3]), rot=-2)
    rgb = im.convert('RGB'); rgb.save(f"covers/{j['name']}.jpg", quality=93, subsampling=0)
    rgb.resize((200, int(200 * rgb.height / rgb.width)), Image.LANCZOS).save(f"covers/{j['name']}_thumb.jpg")
    print('cover', f"covers/{j['name']}.jpg", rgb.size)


if __name__ == '__main__':
    jobs = json.load(open(sys.argv[1] if len(sys.argv) > 1 else 'covers.json', encoding='utf8'))
    os.makedirs('covers', exist_ok=True)
    asyncio.run(shoot(jobs))
    for j in jobs: compose(j)
