#!/usr/bin/env python3
"""Contact sheet (接触表) with time labels: sheet.py out.jpg [glob] [cols] [thumbw]
  python3 sheet.py sheet_sec.jpg              # after render.py --every 1
  OUT=fast python3 render.py --range 8 10.5 0.1 && python3 sheet.py sheet_fast.jpg "fast/s_*.jpg" 9 180"""
import sys, glob, os
from PIL import Image, ImageDraw
os.chdir(os.path.dirname(os.path.abspath(__file__)))
out = sys.argv[1]; pat = sys.argv[2] if len(sys.argv) > 2 else 'stills/s_*.jpg'
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 6; tw = int(sys.argv[4]) if len(sys.argv) > 4 else 270
fs = sorted(glob.glob(pat), key=lambda f: float(os.path.basename(f)[2:-4]))
th = tw * 16 // 9; rows = (len(fs) + cols - 1) // cols
S = Image.new('RGB', (cols * (tw + 4), rows * (th + 4)), (20, 20, 20)); d = ImageDraw.Draw(S)
for k, f in enumerate(fs):
    im = Image.open(f).resize((tw, th)); x = (k % cols) * (tw + 4); y = (k // cols) * (th + 4); S.paste(im, (x, y))
    d.rectangle([x, y, x + 52, y + 16], fill=(0, 0, 0)); d.text((x + 3, y + 2), os.path.basename(f)[2:-4], fill=(255, 255, 0))
S.save(out, quality=85); print(out, len(fs))
