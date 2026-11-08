#!/usr/bin/env python3
"""Beat sheet (节拍表). The single source of timing: writes timeline.json, read by main.js (picture) and audio.py (sound).

TEMPLATE DEMO (not a real episode): two office workers toss a paper ball back and forth, faster and faster,
until one winds up and lobs it into a waste bin that has just popped up from the floor. Clock ticking runs the
whole way and cuts dead at the landing; ding + sad trombone in the silence; the camera returns to the opening
framing so the film loops.

Rules of thumb kept in this file:
- every beat is a named time in seconds; never hard-code a time in main.js / audio.py, read it from here
- generated sequences (accelerating rallies, crowds) are computed here so picture and sound share them exactly
"""
import json, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))

T = dict(
    # 0-2 s hook: no title card, the ball is already flying and the camera is already moving
    RALLY0=0.25,
    # pop-up prop: the bin unfolds from the floor (props never appear from nowhere)
    POP0=7.6, POP1=8.3,
    # anticipation (蓄力): B pulls the arm back before the big throw
    WIND0=8.45, THROW=9.15,
    LAND=10.15,          # ball drops into the bin: everything (clock tick + bgm) cuts here
    DING=10.55, TROMBONE=10.9,
    LOOK0=10.3,          # both turn to stare at the bin
    HOME0=12.6,          # camera glides back to the opening framing (loop seam)
    DUR=14.0,
)

# accelerating rally (节奏越来越急): interval shrinks every toss
tosses = []
t, iv = T['RALLY0'], 0.95
while t < T['POP0'] + 0.4:
    tosses.append(round(t, 3)); t += iv; iv = max(0.32, iv * 0.86)
T['TOSS'] = tosses            # time each toss LEAVES a hand; it is caught at the next entry
T['CATCH_LAST'] = round(t, 3)  # last catch (by B), then the wind-up

# clock ticks: one per second at first, then tied to the rally, cut at LAND
ticks, t = [], 0.0
while t < T['LAND'] - 0.01:
    ticks.append(round(t, 3)); t += 0.5 if t < T['POP0'] else 0.25
T['TICKS'] = ticks

json.dump(T, open('timeline.json', 'w'), ensure_ascii=False, indent=1)
print('tosses', len(tosses), tosses[-1], 'last catch', T['CATCH_LAST'], 'ticks', len(ticks))
