#!/usr/bin/env python3
"""Master: out/_premaster.wav -> out/<slug>_audio.wav. Loudness-normalise to -14 LUFS (integrated, BS.1770 via pyloudnorm),
true-peak limit (4x oversampled look-ahead limiter) to -2.0 dBTP: MP3 encoding adds ~0.7 dB of inter-sample overs, so the
192k MP3 embedded in the HTML still lands <= -1 dBTP. Prints a report for the WAV and for a trial MP3 encode."""
import os, json
import numpy as np, soundfile as sf, pyloudnorm as pyln
os.chdir(os.path.dirname(os.path.abspath(__file__)))
OUT = f"out/{json.load(open('project.json', encoding='utf8'))['slug']}_audio.wav"
from scipy import signal
SR = 48000
x, sr = sf.read('out/_premaster.wav'); assert sr == SR
meter = pyln.Meter(SR)
def tp(y):
    up = signal.resample_poly(y, 4, 1, axis=0); return 20 * np.log10(np.max(np.abs(up)) + 1e-12)
def limit(y, ceil_db=-1.5):
    c = 10 ** (ceil_db / 20)
    up = np.max(np.abs(signal.resample_poly(y, 4, 1, axis=0)), axis=1).reshape(-1, 4).max(axis=1)[:len(y)]
    g = np.minimum(1.0, c / np.maximum(up, 1e-9))
    # lookahead 5 ms min-filter, then smooth release 80 ms
    la = int(0.005 * SR)
    from scipy.ndimage import minimum_filter1d
    g = minimum_filter1d(g, size=2 * la + 1)
    a = np.exp(-1 / (0.08 * SR)); out = np.empty_like(g); s = 1.0
    for i in range(len(g)):
        s = g[i] if g[i] < s else a * s + (1 - a) * g[i]; out[i] = s
    return y * out[:, None]
for it in range(4):
    lufs = meter.integrated_loudness(x)
    x = x * 10 ** ((-14.0 - lufs) / 20)
    x = limit(x, -2.0)
lufs = meter.integrated_loudness(x); peak = tp(x)
sf.write(OUT, x, SR, subtype='PCM_16')
y, _ = sf.read(OUT)
print(f'final: {meter.integrated_loudness(y):.2f} LUFS, true peak {tp(y):.2f} dBTP, dur {len(y)/SR:.2f}s')

# check what the HTML will actually carry (build.py embeds a 192k MP3 of this file)
import shutil, subprocess, tempfile
if shutil.which('ffmpeg'):
    with tempfile.TemporaryDirectory() as d:
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', OUT, '-codec:a', 'libmp3lame', '-b:a', '192k', d + '/a.mp3'], check=True)
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', d + '/a.mp3', d + '/a.wav'], check=True)
        z, _ = sf.read(d + '/a.wav')
        p = tp(z)
        print(f'embedded MP3: {meter.integrated_loudness(z):.2f} LUFS, true peak {p:.2f} dBTP', '(OK)' if p <= -1.0 else '(OVER -1 dBTP: lower the limiter ceiling)')
