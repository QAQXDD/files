#!/usr/bin/env python3
"""Fetch the title fonts and subset them to the glyphs the film actually uses -> small woff2 to inline in the HTML.

  python3 fonts/make_font.py            # zh: ZCOOL KuaiLe (SIL OFL 1.1)  -> fonts/title.woff2
  python3 fonts/make_font.py en         # en: Luckiest Guy (Apache 2.0)   -> fonts/title_en.woff2

Glyph set = every non-ASCII char found in *.js + project.json + printable ASCII. Re-run after changing prop text.
Needs: pip install fonttools brotli. Licences: fonts/OFL-ZCOOLKuaiLe.txt, fonts/LICENSE-LuckiestGuy.txt (ship them with any
redistributed source; the subset font embedded in the HTML stays under the same licence).
"""
import os, sys, glob, urllib.request
from fontTools import subset
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)
FONTS = {
    'zh': ('ZCOOLKuaiLe-Regular.ttf', 'https://raw.githubusercontent.com/google/fonts/main/ofl/zcoolkuaile/ZCOOLKuaiLe-Regular.ttf', 'title.woff2'),
    'en': ('LuckiestGuy-Regular.ttf', 'https://raw.githubusercontent.com/google/fonts/main/apache/luckiestguy/LuckiestGuy-Regular.ttf', 'title_en.woff2'),
}
lang = sys.argv[1] if len(sys.argv) > 1 else 'zh'
ttf, url, out = FONTS[lang]
src = os.path.join(here, 'src', ttf)
if not os.path.exists(src):
    os.makedirs(os.path.dirname(src), exist_ok=True)
    print('downloading', url); urllib.request.urlretrieve(url, src)
chars = set(chr(c) for c in range(0x20, 0x7f))
for f in glob.glob(os.path.join(root, '*.js')) + [os.path.join(root, 'project.json')]:
    if os.path.basename(f) == 'dist.js':
        continue
    chars |= {ch for ch in open(f, encoding='utf8').read() if ord(ch) > 0x7f}
chars |= set('，。！？、：；“”‘’（）《》…—·￥')
opt = subset.Options(); opt.flavor = 'woff2'; opt.layout_features = ['*']; opt.notdef_outline = True
fnt = subset.load_font(src, opt); s = subset.Subsetter(opt); s.populate(text=''.join(sorted(chars))); s.subset(fnt)
subset.save_font(fnt, os.path.join(here, out), opt)
print(out, os.path.getsize(os.path.join(here, out)), 'bytes,', len(chars), 'chars')
