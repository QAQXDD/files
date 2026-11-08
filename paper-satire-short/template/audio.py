#!/usr/bin/env python3
"""Sound design: every sound is placed from timeline.json (same beat table as the picture) -> out/_premaster.wav.
Then run master.py (-14 LUFS, true peak <= -1 dBTP) and build.py.

Priorities: (1) real CC0/PD recordings from Wikimedia Commons in sfx/ (fetch_commons.py), (2) numpy synthesis fallback.
Craft rules used in this demo (keep them):
- ONE sound line runs through the whole film (here: the wall-clock tick that speeds up with the rally) and is CUT DEAD
  at the punchline together with the music. Silence is the strongest sound.
- every visible hit has a sound on the exact frame (toss/catch pap, landing thud), anticipation gets a rising swish
- ending: precise landing -> metallic echo -> sad trombone in the silence
"""
import json, math, os
import numpy as np
from scipy import signal
import soundfile as sf

os.chdir(os.path.dirname(os.path.abspath(__file__)))
os.makedirs('out', exist_ok=True)
import subprocess, sys
subprocess.run([sys.executable, 'timeline.py'], check=True)  # always regenerate: picture and sound read the same beats
SR = 48000
T = json.load(open('timeline.json'))
DUR = T['DUR']
N = int(DUR * SR) + SR
L = np.zeros(N); R = np.zeros(N)
rng = np.random.default_rng(7)


# ================= mixing helpers =================
def put(x, t, gain=1.0, pan=0.0):
    """Place mono x at time t (s), equal-power pan -1..1."""
    i = int(round(t * SR))
    if i >= N or i + len(x) <= 0:
        return
    j = min(N, i + len(x)); a, b = max(0, -i), j - i
    gl = gain * math.cos((pan + 1) * math.pi / 4) * 1.414
    gr = gain * math.sin((pan + 1) * math.pi / 4) * 1.414
    L[max(i, 0):j] += x[a:b] * gl; R[max(i, 0):j] += x[a:b] * gr


def cut_after(t, fade=0.004):
    """Hard cut of everything already placed, from t on (the 'everything stops' punchline)."""
    i = int(t * SR); k = int(fade * SR)
    ramp_ = np.linspace(1, 0, k)
    for ch in (L, R):
        ch[i:i + k] *= ramp_; ch[i + k:] = 0


def load_sfx(name, mono=True):
    p = f'sfx/{name}.wav'
    if not os.path.exists(p):
        return None
    x, sr = sf.read(p)
    if sr != SR:
        x = signal.resample_poly(x, SR, sr, axis=0)
    return x.mean(1) if (mono and x.ndim > 1) else x


# ================= synthesis kit =================
def tt(d): return np.arange(int(d * SR)) / SR
def noise(d): return rng.standard_normal(int(d * SR))
def env_ad(n, a=0.002, d=0.2):
    t = np.arange(n) / SR; return np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / d)
def bp(x, f, q=4):
    b, a = signal.iirpeak(min(f, SR / 2 - 100) / (SR / 2), q); return signal.lfilter(b, a, x)
def lp(x, f, o=2):
    b, a = signal.butter(o, min(f, SR / 2 - 100) / (SR / 2)); return signal.lfilter(b, a, x)
def hp(x, f, o=2):
    b, a = signal.butter(o, f / (SR / 2), 'high'); return signal.lfilter(b, a, x)
def sweep(f0, f1, d, shape='sin', curve=1.0):
    t = tt(d); f = f0 + (f1 - f0) * (t / d) ** curve; ph = 2 * np.pi * np.cumsum(f) / SR
    return {'sin': np.sin(ph), 'tri': 2 / np.pi * np.arcsin(np.sin(ph)), 'saw': 2 * ((ph / (2 * np.pi)) % 1) - 1, 'sq': np.sign(np.sin(ph))}[shape]
def S(*xs):
    n = max(len(x) for x in xs); o = np.zeros(n)
    for x in xs: o[:len(x)] += x
    return o


def knock(f=420, d=0.25, dec=0.04):
    t = tt(d); return (np.sin(2 * np.pi * f * t) + 0.5 * np.sin(2 * np.pi * f * 2.3 * t)) * np.exp(-t / dec) + bp(noise(d), f * 3, 3) * np.exp(-t / 0.006) * 0.5
def tick(f=3200):
    d = 0.06; t = tt(d); return (np.sin(2 * np.pi * f * t) * np.exp(-t / 0.006) + bp(noise(d), 5000, 3) * np.exp(-t / 0.003)) * 0.6
def paper_pap(g=1.0):
    """crumpled paper ball hitting a palm"""
    d = 0.18; t = tt(d)
    return (bp(noise(d), 1800, 1.0) * np.exp(-t / 0.02) + lp(noise(d), 500) * np.exp(-t / 0.03) * 0.8 + hp(noise(d), 4000) * np.exp(-t / 0.008) * 0.5) * g
def crinkle(d=0.5, dens=60, g=1.0, seed=1):
    r = np.random.default_rng(seed); n = int(d * SR); x = np.zeros(n)
    for _ in range(int(dens * d)):
        i = r.integers(0, max(1, n - 400)); x[i:i + 400] += hp(r.standard_normal(400), 2500) * np.exp(-np.arange(400) / 60) * r.uniform(0.2, 1)
    return x * np.sin(np.pi * np.arange(n) / n) ** 0.5 * g
def whoosh(d=0.5, f0=400, f1=2500, g=1.0):
    x = noise(d); n = len(x); u = np.arange(n) / n; out = np.zeros(n)
    for k, f in enumerate(np.geomspace(f0, f1, 5)):
        out += bp(x, f, 1.5) * np.exp(-((u - k / 4) / 0.3) ** 2)
    return out * np.sin(np.pi * u) ** 1.5 * g
def thud(heavy=1.0):
    d = 0.5; x = sweep(120 * heavy ** -0.2, 42, d, curve=0.35) * env_ad(int(d * SR), 0.001, 0.13)
    x += lp(noise(d), 900) * env_ad(int(d * SR), 0.0005, 0.03) * 0.9
    return x * heavy
def ding(f=2400, d=0.8, dec=0.25):
    t = tt(d); x = sum(np.sin(2 * np.pi * f * k * t + k) * np.exp(-t / (dec / (1 + 0.6 * i))) / (1 + i) for i, k in enumerate([1, 2.76, 5.4]))
    return x * np.minimum(1, t / 0.001)
def metal_ring(f=1850, d=3.0):
    t = tt(d); parts = [(1.0, 1.0, 1.6), (2.76, 0.6, 1.1), (5.40, 0.35, 0.7), (8.93, 0.22, 0.45), (1.003, 0.6, 1.8)]
    return (sum(a * np.sin(2 * np.pi * f * k * t) * np.exp(-t / dd) for k, a, dd in parts) + bp(noise(d), 4200, 4) * np.exp(-t / 0.01) * 0.6) * 0.5
def pluck(f, d=0.35, bright=1.0):  # marimba-ish
    t = tt(d); return (np.sin(2 * np.pi * f * t) + 0.25 * bright * np.sin(2 * np.pi * f * 4.0 * t) * np.exp(-t / 0.02)) * np.exp(-t / (0.09 + 40 / f / 100)) * np.minimum(1, t / 0.002)
def bass(f, d=0.3):
    t = tt(d); x = 2 / np.pi * np.arcsin(np.sin(2 * np.pi * f * t)) + 0.3 * np.sin(4 * np.pi * f * t)
    return lp(x, 900) * np.exp(-t / 0.18) * np.minimum(1, t / 0.004)
def kick(d=0.3):
    t = tt(d); return sweep(130, 45, d, curve=0.3) * np.exp(-t / 0.12) + lp(noise(d), 2000) * np.exp(-t / 0.004) * 0.3
def hat(d=0.05):
    t = tt(d); return hp(noise(d), 7000) * np.exp(-t / 0.012)
def reverb(x, dec=1.2, mix=0.35, seed=3):
    r = np.random.default_rng(seed); n = int(dec * 1.5 * SR); t = np.arange(n) / SR
    ir = r.standard_normal(n) * np.exp(-t / (dec / 6.9)); ir = lp(ir, 3500); ir /= np.sqrt(np.sum(ir ** 2))
    w = signal.fftconvolve(x, ir)[:len(x) + n]; o = np.zeros(len(w)); o[:len(x)] += x * (1 - mix); return o + w * mix
def trombone_note(f0, d, vib=False, slide=0.0):
    t = tt(d); f = f0 * (1 + slide * (t / d))
    if vib: f = f * (1 + 0.025 * np.sin(2 * np.pi * 5.5 * t) * np.minimum(1, t / 0.4))
    ph = 2 * np.pi * np.cumsum(f) / SR
    x = sum(np.sin(k * ph) / k ** 0.9 for k in range(1, 14))
    cut = 500 + 1500 * np.sin(np.pi * np.minimum(1, t / 0.35))
    out = np.zeros_like(x); seg = 512; zi = None
    for k in range(0, len(x), seg):  # time-varying low-pass = "wah" of a muted trombone
        b, a = signal.butter(2, float(cut[min(k, len(cut) - 1)]) / (SR / 2))
        if zi is None: zi = signal.lfilter_zi(b, a) * 0
        out[k:k + seg], zi = signal.lfilter(b, a, x[k:k + seg], zi=zi)
    return out * np.minimum(1, t / 0.04) * np.minimum(1, (d - t) / 0.08) * 0.25
def sad_trombone():
    # wah-wah-wah-waaah: Bb3 A3 Ab3 G3 (last long with vibrato)
    o = np.zeros(int(3.2 * SR))
    for k, (f, d, v) in enumerate([(233.08, 0.42, False), (220.0, 0.42, False), (207.65, 0.42, False), (196.0, 1.7, True)]):
        x = trombone_note(f, d, vib=v, slide=-0.02 if v else 0); i = int(k * 0.46 * SR); o[i:i + len(x)] += x
    return reverb(o, 1.0, 0.2)


# ================= placement (demo) =================
TOSS, LAND = T['TOSS'], T['LAND']
# 1) music bed: 120 bpm kick/hat/bass + marimba hook, starts on frame 0 (hook), cut dead at LAND
beat = 0.5
scale = [523.25, 587.33, 659.25, 783.99, 880.0, 783.99, 659.25, 587.33]
t, k = 0.0, 0
while t < LAND + 1:
    put(kick() * 0.45, t)
    if k % 2: put(hat() * 0.12, t, 1.0, 0.3)
    put(hat() * 0.08, t + beat / 2, 1.0, -0.3)
    put(bass([130.81, 130.81, 174.61, 196.0][(k // 4) % 4], 0.3) * 0.45, t + beat / 2)
    t += beat; k += 1
# 2) the sound line: clock ticks (speed up with the rally)
for i, x in enumerate(T['TICKS']):
    put(tick(3200 if i % 2 else 2700) * 0.55, x, 1.0, -0.35)
# 3) rally: every toss leaves with a swish, every catch is a paper "pap" + a rising marimba note
for i, x in enumerate(TOSS):
    pan = -0.4 if i % 2 == 0 else 0.4
    put(whoosh(0.25, 900, 2800, 0.25), x, 1.0, pan)
    nxt = TOSS[i + 1] if i + 1 < len(TOSS) else T['CATCH_LAST']
    fl = min(nxt - x, 0.62) * 0.82  # same flight time as main.js rally()
    put(paper_pap(0.9), x + fl, 1.0, -pan)
    put(pluck(scale[i % 8] * (1 + (i // 8) * 0.12), 0.3) * 0.22, x + fl, 1.0, -pan * 0.5)
# 4) pop-up bin unfolds: paper crinkle + soft knocks per flap
put(crinkle(T['POP1'] - T['POP0'] + 0.1, 90, 0.35), T['POP0'], 1.0, 0.5)
for j in range(4):
    put(knock(300 + 40 * j, 0.15, 0.03) * 0.3, T['POP0'] + (T['POP1'] - T['POP0']) * (0.45 + 0.15 * j), 1.0, 0.5)
# 5) anticipation: rising stretch during the wind-up, big whoosh on the throw
put(sweep(200, 900, T['THROW'] - T['WIND0'], 'saw', 2.0) * np.sin(np.pi * tt(T['THROW'] - T['WIND0']) / (T['THROW'] - T['WIND0'])) ** 0.5 * 0.05, T['WIND0'])
put(whoosh(LAND - T['THROW'], 300, 3200, 0.8), T['THROW'], 1.0, 0.2)
# 6) PUNCHLINE: everything stops on the landing frame
cut_after(LAND)
put(thud(0.8), LAND); put(paper_pap(1.0), LAND)
put(reverb(metal_ring(1650, 2.5) * 0.35, 1.6, 0.4), LAND + 0.01, 1.0, 0.3)   # metallic echo of the bin
put(ding(2637, 1.0, 0.3) * 0.25, T['DING'], 1.0, 0.2)
put(sad_trombone() * 1.1, T['TROMBONE'])
# 7) loop seam: soft room tone + the first marimba note again just before the end, so the restart feels continuous
room = load_sfx('room')  # optional real recording (fetch_commons.py); synthesis fallback below
if room is None:
    room = lp(noise(DUR - T['HOME0']), 300) * 0.02
put(room[:int((DUR - T['HOME0']) * SR)] * np.linspace(0, 1, min(len(room), int((DUR - T['HOME0']) * SR))), T['HOME0'])

x = np.stack([L, R], 1)[:int(DUR * SR)]
sf.write('out/_premaster.wav', x, SR, subtype='FLOAT')
print('premaster', round(len(x) / SR, 2), 's, peak', round(float(np.max(np.abs(x))), 3))
