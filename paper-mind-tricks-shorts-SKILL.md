---
name: paper-mind-tricks-shorts
description: Make a 60 s vertical (1080x1920, 30 fps) "Paper Mind Tricks" YouTube Short for the Suppose You channel in the paper-craft pop-up style of Shorts #1 to #3 (Bystander Effect, Gaslighting, Foot in the Door). Real-time three.js diorama on an oak desk, paper stick-figure rig, burned-in torn-paper captions, synthesized music and paper foley, -14 LUFS, one captioned MP4.
---

# Paper Mind Tricks Shorts

## 0. What a Short is
- 60.0 s, 1080x1920, 30 fps (1800 frames), H.264 yuv420p MP4, AAC 48 kHz stereo.
- No voiceover and no dialogue. The story is carried by movement, light, expression and 5 to 7 short captions. The tone is quietly ironic and never lectures.
- Deliver ONE file: `sNN_<slug>.mp4` with captions burned in. Make no clean version and no SRT unless the user asks for one; on every Short so far they overrode the brief to say "one captioned file only".
- Everything is generated in code. Nothing photoreal: no photo textures, no realistic humans.
- Style reference: `reference_fresnel.html`, the user's three.js paper pop-up engine, attached to the Bystander project (`/workspace/projects/77ab73c0-1a20-45f2-8878-b899754e17dd/files/uploads/reference_fresnel-cecfa9dc830b.html`). Copy its LOOK and build methods, never its content (lighthouse, book text). If you can't reach it, ask the user to attach it again before rendering.
- Start every new Short by copying the newest engine folder: `/workspace/work/s03` is the most complete (s01 Bystander, s02 Gaslighting, s03 Foot in the Door).

## 1. Toolchain and project layout
```
/workspace/work/sNN/
  index.html     two canvases: #gl (WebGL) + #out (2D composite + captions); importmap -> node_modules/three
  lib.js         palette, rnd/ease helpers, canvas helpers, hatch shader, paper materials, cutouts, stand tabs, cards
  figure.js      split-pin stick-figure rig + ink face layers + hats/props on the figure
  captions.js    CAPS list + torn-paper strip renderer (2D, drawn after the 3D frame)
  main.js        scene, sets, characters, props, timeline (state functions), camera, lights, post, render hooks
  render.py      Playwright + headless Chromium (SwiftShader): modes stills | chunk
  boxes.py       projects key objects to 2D boxes every 0.5 s -> safe-area report
  sheet.py       contact sheet of stills with the safe-area rectangle drawn
  round.sh       renders two frame ranges in parallel (ports 8901/8902)
  audio.py       numpy synthesis of music + SFX -> mix_raw.wav
  master.py      gain search + true-peak limiter -> mix_final.wav at -14 LUFS
  fonts libs node_modules pw pylib -> symlinks to /workspace/work/s01 (Libre Baskerville LB/LBI, Chromium, Python libs)
```
- Python needs `sys.path.insert(0,'/workspace/work/s01/pylib')` (numpy, playwright). Browsers live in `PLAYWRIGHT_BROWSERS_PATH=/workspace/work/s01/pw`, and `LD_LIBRARY_PATH` points at `s01/libs/root/usr/lib/aarch64-linux-gnu`. Copy `render.py` and swap the path for the new folder.
- Chromium flags: `--use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist --disable-gpu-sandbox`, viewport 1080x1920.
- main.js exposes `window.renderFrame(f)`, `window.grab(f,type,q)` (returns a dataURL of #out), `window.BOXES(f)` and `window.READY=true`. Rendering is deterministic per frame: `update(t)` derives every value from `t=f/30`. Never let state carry over between frames.

## 2. The paper-craft engine (look rules)
**Renderer:** `antialias`, `preserveDrawingBuffer`, pixelRatio 1, `PCFSoftShadowMap`, `SRGBColorSpace`, no tone mapping. Fog matches the background colour (`Fog(bg, 90, 240)`).

**Materials (lib.js):**
- `paperMat(col,{map,ink,grain})`: MeshLambert with the **hatch shader** injected through `onBeforeCompile`. Screen-space pencil hatching in 3 tiers, driven by how lit the fragment is (lit luminance / albedo luminance): <0.62 diagonal, <0.40 cross, <0.22 horizontal. It fades out in near-darkness, adds paper tooth via per-pixel noise (`grain` ~0.04 to 0.05) and uses ink colour `#2a2622`. Every paper surface uses it.
- `sketch(geo,col)`: mesh plus `EdgesGeometry` ink lines (`edgeMat` #2b2621, opacity 0.92) for box and card edges. Card thickness about 0.06 to 0.12 units, so edges show.
- `cutoutMesh(canvas,w,h)`: canvas texture with `alphaTest 0.5`, DoubleSide, and a matching `customDepthMaterial` (RGBADepthPacking, same map, same alphaTest), so cut-outs cast TRUE shaped shadows. Use it for every flat cut-out: figures' props, signs, flowers, lamp posts, pigeons, dog faces, chart labels.
- `cardTex(W,H,bg,fn)`: deckle-edged card (offset drop shadow, cream fill, 3 px ink outline) with your drawing callback. Use it for signs, tabs, title cards, flags.
- `standTab(parent,x,z,w,h)`: small folded tab behind every standing card or figure.
- Canvas textures: draw with `fc(W,H,fn)`, about 90 to 100 px per world unit, and `noise(g,W,H,amp ±4..6)` for paper grain. House walls take a tiling clapboard texture (white plus faint ink lines, so `material.color` can recolour them, e.g. the walls turning green). Roofs take shingles. Lawns take ink grass ticks.
- `panel(shape,mat,th)`: extruded Shape with holes (doors, windows, kennel arch), UVs in world units, plus ink edges.

**Scale:** 1 world unit = 1 cm. Figures are about 7 units tall. The desk top sits at y=0, and a pop-up book's page surface at about y=1.2 (`GY`).

**Desk and book:** an oak desk box (340x240) with a canvas oak texture (planks, grain waves, knots, flecks, ink plank seams). The set is an open hardcover: two cloth-covered boards plus page blocks plus page sheets with faint printed text lines. Everything pops up from the spread. A sky or backdrop card stands at the back of the spread as a pop-up.

**Pop-up construction:** hinge every part at an edge. Animate with `easeOutBack` from folded (rotation.x = -π/2, or scale.y≈0.001) to standing; fold flat to hide. Tilted pop-up cards lean back (rotation.x negative) to face the camera. Nothing may pass through other paper: check door swing arcs, walking paths and fold-downs.

**Second book (explainer beat):** a closed hardcover at the front-right desk corner. The front board is hinged at the gutter: `hinge.position.y = page top (1.16)`, front pages at local y 0..0.9, the left page sheet at local y≈0 facing down. Rotating `hinge.rotation.z` by π lays the left page level with the right one. If the hinge is put at the board bottom instead, the left page ends up sunk 0.9 units, so don't.

**Desk lamp = the sun:** an articulated card lamp (base, two arms, conical shade, bulb) at the LEFT BACK of the desk (`LAMP_BASE ≈ (-40,0,-34)`). `aimLamp(target, angleDeg, intensity, lift)` yaws the lamp, sets arm angles from `lift` (0 = low sun, 1 = midday), points the shade, and puts the SpotLight (warm `#ffcf8a`, angle 35 to 40°, penumbra 0.6, 2048 shadow map, bias -0.0006, normalBias 0.02) at the bulb. Day passing = fast lift arcs. Evening = low lift plus a warmer colour (#ffbe72). The explainer beat swivels it onto the second book.

**Fill (REQUIRED, review constraint):** DirectionalLight `#f3e6d2` from the camera side (positioned at camera + (4,9,0), targeted at the camera target, no shadows), intensity about 1.3 to 1.5 in day scenes, about 0.35 to 0.5 of the key. HemisphereLight sky #f3e6d2 / ground #8a6a4a at about 0.7 to 0.8 in day scenes and about 0.3 at night. No face may ever go black, including under big cast shadows. The lamp is behind the set, so fronts are backlit and the fill does the face work.

**Day and night:** day background `#ccc4b5`, night `#121010`. Lerp `scene.background` and `fog.color` together. The sky card's `material.color` lerps morning `#e6dccb` to evening `#c9b79c`.

**Colour discipline:** one saturated accent per Short, used only on the story's key objects (S3: safety green `#2fa35a` with shadow `#23804a`; S2: scarf yellow). Everything else stays paper, kraft (#b9b1a3, #a39b8d), charcoal (#6e6660) or ink. No other saturated colours.

**No reflections:** windows are ink-drawn paper panes, never glass. No sparkle.

## 3. Post: bloom, tilt-shift, film finish
- EffectComposer on a HalfFloat render target with 4x MSAA: RenderPass, then UnrealBloom (strength 0.5, radius 0.45, **threshold 1.05**), then OutputPass, then the Finish ShaderPass.
- Bloom only on glowing things: give the bulb an HDR colour (`color.setRGB(2.6,2.4,2.0)`) plus an additive glow sprite. Cream paper (~0.94 luminance) must never cross the threshold. A threshold below 1 blooms the paper.
- Finish shader: a tilt-shift blur band (`uFocus` = projected screen y of the subject, `uBand` 0.13 to 0.17, `uAmt` 1.6 to 2.6 px), a vignette 0.30 (elliptical, smoothstep 0.25 to 0.85), a warm grade `mix(c, c*vec3(1.03,1.0,0.95), 0.6)`, and fine grain 0.014 whose seed changes every 2 frames (`floor(t*30/2)%97`) so it doesn't flicker. Rack focus by moving `uFocus` to a prop for about 0.5 s.

## 4. Camera
- One PerspectiveCamera, **38° vertical FOV** (35 to 40), portrait. The horizontal half-FOV is only about 10.9°: frame width ≈ 0.385 × distance. Work everything out from that.
- `camera.setViewOffset(W,H,55,0,W,H)` in every state shifts the image centre to x≈485, the centre of the safe area.
- Camera states as `{p,t,off}`. `camAt(t)` holds or eases between them with cubic in-out (`ease`), plus CatmullRom curves for swoops. Moves are slow, like a miniature slider. No cuts except the ones the brief marks.
- Typical distances: mid-shot of 2 to 3 figures plus a neighbour about 40 to 44. Wide both-houses shot about 60 to 65. Push-ins for readable props about 20. Explainer book: high 3/4, elevation ~60°, distance ~50.
- Use the safe-area maths before rendering: screen x = 540 + 540·(dx/dz)/tan(10.9°) − 55.

## 5. Character rig (figure.js)
- `makeFigure({color, halo, cap, bowler, hat, bun, apron, vee, eyes, brows, mouth})` builds a flat card figure about 7 units tall. Head is a round card, R=1.35 (≈40% of height). Torso strip 0.46 wide. Thighs and shins, upper arms and forearms are rounded strips, with mitten hand cards. Every joint is pinned with a visible **paper split-pin (brad)**, so limbs are parented and can never separate. A folded base plus a stand tab sit under the feet.
- Hierarchy: root (feet), then tipper, then body, then {limbs, neck (y 4.3), then head (y 1.32)}. `pose(F,{aL,fL,aR,fR,tL,kL,tR,kR,hL,hR,head,headY,nod,neckZ,bob,bx,lean,tip})`. The nod is `neck.rotation.x` (head card tilts on the neck brad, ~0.32 to 0.34 rad, sin pulse). Make nods faster each time for comedic escalation.
- Arm conventions: limbs hang down. `armR` is on +x (the viewer's right), and positive rotation.z swings a hanging strip toward +x. Useful poses: hold mug `aL -0.35, fL 1.9`; sip `aL -0.62, fL 3.05`; hold up a card `aR 2.3 to 2.45, fR 0.25 to 0.35`; shrug `aL -0.55, fL -2.0, aR 0.55, fR 2.0`; knock = `knockPose` (raise plus 4 taps); wave `aL -2.5` with an oscillating `fL`; `walkPose(phase)` for walking.
- Faces are SWAPPABLE INK LAYERS (eyes, brows, mouth planes on the head card). Change expressions by swapping textures, never by morphing. 256 px canvases, brow strokes 10 to 12 px, so brows are at least 5 px on screen even in wide shots.
  - eyes: dot, wide, half, closed (squeezed chevrons), sideL, sideR
  - brows: neutral, raised, worried (inner ends up), knitted, flat, sly, none
  - mouth: line, polite, tight (straight with up-turned ends), wobble, o, smile (the cream-filled printed grin)
- `halo:true` adds a cream underlay to ink strokes so faces read on charcoal kraft figures.
- Accessories ride on the head group: a flat cap (extruded profile, brim ≤1.95 so boxes don't inflate), a bowler, a top hat, a bun. The torso card takes an outlined V cardigan or an apron. Props held in hands (mug, clipboard, sticker, swatch, watering can) are separate scene objects placed each frame at the hand's world position with the figure's yaw (`placeAt`). Never parent them to rotating limbs.
- Keep yaws within about ±0.5 so flat faces stay readable. Walking away = yaw π (the back of a card has no face).
- Side characters reuse the rig (kraft neighbour, charcoal twins) or are single cut-outs with swappable textures (dog: head / nose-only / eyes-only layers for "hiding deeper"; pigeon: two wing frames swapped every 1/14 s while flying, grumpy flat brow, hops on arcs).

## 6. Shot structure for 60 s (the formula all three Shorts used)
| Shot | Time | Job |
|---|---|---|
| 1 Cold open | 0 to 4 | The absurd end state, locked frame, one caption ("He agreed to this."). This frame IS the loop point. |
| 2 Setup | 4 to 12 | A fast transition (page riffle / fold-down) back to the start, then the small first step. Caption at about 8.5 to 11.8. |
| 3 Escalation | 12 to 20 | The bigger ask, the key reaction (rack focus on the earlier small thing), the yes. Caption at about 17 to 19.8. |
| 4 Montage | 20 to 30 | 3 to 4 quick beats, each one bigger, with witnesses reacting more each beat. Caption at about 25.5 to 29.8. |
| 5 The turn | 30 to 38 | A tight or low close-up, the music drops out, physical comedy. Caption at about 34.5 to 37.8. |
| 6 The name | 38 to 46 | CUT to a second pop-up book on the desk at night: the title, the source (author, year) and one simple chart. |
| 7 The flip | 46 to 54 | CUT back to the set: the victim becomes the perpetrator, mirroring shot 2 exactly. Caption at about 51 to 53.8. |
| 8 The loop | 54 to 60 | The character addresses the lens. A prop goes "onto the lens" (a 2D overlay that grows), the camera pulls back, and it settles into exactly the shot-1 framing and state. Caption at about 55 to 57.4. |

- Make the last frame match frame 0: same camera, same poses, same props. Put the poses at both ends of the shot-1 animation (e.g. mug at the lips at f0 and at f1799).
- Lens-sticker trick: draw it in 2D on #out after the composite, blurred with `ctx.filter`. It grows to cover the screen; underneath, the 3D scene snaps to the shot-1 state with the camera close to the big object; the overlay rectangle then lerps to that object's projected rectangle and fades out as the camera eases back to S1.
- Witness gags: a neighbour who keeps pouring water over her shoes, a dog hiding deeper each time, a pigeon displaced by every new object. These give each beat a second reaction.
- The explainer chart: only the numbers the brief gives, spelled exactly. Pop-up title card ≤720 px wide, a source tab, a two-line headline. Bars lie nearly flat (tilted 0.22 rad up from the page) and grow from 0, with labels standing at the bar tips. Percent labels ≥64 px cap height; tabs and headline ≥48 px. Break long tab text over two lines. Space the stacked pop-up cards in depth by about 0.8 × their height, because tilted cards lean back over whatever is behind them.

## 7. Captions (captions.js)
- `CAPS=[{t0,t1,lines:[..]}]`. Sentence case, at most 2 lines, at most 24 characters per line, exact text from the brief. Curly apostrophes go in as `\u2019`.
- Each caption is a torn cream strip `#f6f1e6`: a randomized deckle path, a 1 px ink outline, drop shadow `rgba(0,0,0,.35)` blur 8 offset 3, and faint paper-tooth flecks. Ink text `#2a2622` in **Libre Baskerville Bold 68 px** (≈64 to 72 cap target), line height 86, auto-shrunk if wider than 760 px.
- Centred at **x 485, y 360**. Animation: 8-frame fade plus 6 px slide in, 6-frame fade out.
- Drawn in 2D after the 3D frame, so they're never blurred or graded. Make sure no caption sits over a face: frame shots so faces sit below about y 450.

## 8. Safe area (HARD; YouTube Shorts UI)
- All text and key elements stay fully inside **x 70 to 900, y 220 to 1440**. Nothing important in the top 220 px, the right 180 px or the bottom 480 px. Check outer edges, not centres.
- `BOXES(f)` projects Box3s of the heads, signs, stickers, flags, chart parts and props. Run `boxes.py` every 0.5 s in two parallel workers and list the violations. Box3 includes invisible children (hats, brims), so boxes overestimate; confirm suspicious ones visually.
- In-world text that has to be read: ≥48 px cap height on screen. Compute it as cap units × px/unit, where px/unit = 540/(dz·0.1926). Push the camera in (about distance 20) for small props like stickers.
- Partly visible text at a frame edge counts as a violation. Fix it by reframing, narrowing the lettering on big signs, or keeping the object out of frame.

## 9. Audio (audio.py + master.py)
- Everything is synthesized with numpy at 48 kHz stereo, 60.0 s. No voices.
- Music: one motif per Short (S1/S2 music-box waltz with cello; S3 ukulele/pizzicato at 96 BPM in C, Karplus-Strong plucks with a cache, strums on beats). Add one layer per story step (glockenspiel, then shaker 8ths, then claps on 2 and 4, then whistle) by rendering the motif phase-locked in windows. Drop the music out at the turn (a hard cut with a 30 ms ramp), play the motif once slowed for the explainer, then repeat the shot-2 motif exactly for the flip. The cold open and the last frame share the same hollow chord.
- Paper foley helpers: click, crease, thwip (pop-up), flick (card or flag flip), flutter (wings, pages), riffle, creak (hinges, doors, lamp), thump, tick and scratch (pencil), rip, whoomp, plus S3 additions: two-tap knock, peel (stickers), pat, flump (cardboard billboard), thunk (door on shoe), coo. Place each SFX at its exact event time from main.js. Keep them clearly audible over the music (mix: music × 0.15, SFX × 0.95).
- Mastering: master.py iterates gain plus a 4x-oversampled look-ahead peak limiter (ceiling -4.6 dBFS) until integrated is -14 ±0.15 LUFS.
- **AAC overshoot pitfall:** encoding straight to AAC produced true peaks of +3.6 dBFS from transient clicks. Encode with `-af "highpass=f=30,lowpass=f=15000" -c:a aac -b:a 256k` and re-measure (S3 ended at -14.3 LUFS, TP -3.2). Target: ≤ -1 dBTP.
- A sparse-SFX mix normalized to -14 lifts the music bed to about -16 LUFS rather than -20. Mention that if the brief asks for -20.

## 10. Render and export
- Stills for iteration: `python3 render.py stills 0 6.8 14.8 ...` (≈2 to 3 s per frame), then `python3 sheet.py sheet.jpg stills/*.jpg`, and look at the sheet with read_file.
- Full render: chunks of 240 frames (about 3.5 to 4 s per frame, so ~15 min per chunk), two in parallel per background shell job (the background limit is 1200 s): `./round.sh 0 240 240 480`, then 480/960, 960/1440, 1440/1620/1800. Each chunk pipes JPEG q0.97 frames into `ffmpeg -f image2pipe -c:v mjpeg -i - -c:v libx264 -preset medium -crf 15 -pix_fmt yuv420p -r 30`.
- Concat plus mux: `ffmpeg -f concat -safe 0 -i list.txt -i <audio>`. Chunks come out **yuvj420p** (full range from MJPEG). Re-encode the final: `-c:v libx264 -crf 17 -vf "scale=in_range=full:out_range=tv,format=yuv420p" -color_range tv -movflags +faststart` (~72 MB). Write to /tmp first: `+faststart` straight onto /workspace failed with an I/O error on the trailer.
- Verify with ffprobe: h264 yuv420p, 1080x1920, 30/1, 1800 frames, duration 60.000; aac 48 kHz; ebur128 I ≈ -14, Peak ≤ -1.
- For fixes, re-render only the affected 240-frame chunks and re-concat.

## 11. QA checklist (step through every 0.5 s)
- [ ] Safe area: boxes.py report clean (or only brief camera-move or walk-off crossings), contact sheets checked.
- [ ] Every face readable in every frame (fill on, even under big shadows); brows ≥5 px.
- [ ] No detached limbs or floating parts (everything parented through brads); props follow their hands.
- [ ] The accent colour appears only on the story objects; nothing else saturated; no reflections or sparkle; paper never blooms.
- [ ] In-world text and book text spelled exactly as in the brief; no extra numbers.
- [ ] Captions: exact text, times, ≤2 lines, ≤24 characters, at y 360, not over faces.
- [ ] Pop-ups hinged at edges; no paper passing through paper (door arcs, folds, walking paths).
- [ ] Last frame matches frame 0 (loop).
- [ ] Music cuts where the brief says; no voices; -14 LUFS, TP ≤ -1.
- [ ] 58 to 60 s, 1080x1920, 30 fps, one captioned file. Deliver it with display_file and attach it to the answer, listing any deviations from the brief in a short summary.

## 12. Pitfalls already fixed (don't repeat)
1. Bloom threshold below 1 made cream paper glow. Use 1.05 plus an HDR bulb.
2. Faces went black under big shadows. The camera-side fill and hemisphere light are mandatory.
3. Captions clashing with the action: lay out with the caption at y 360 and the subjects lower.
4. Portrait frames are narrow (~0.385 × distance). Plan positions so the 2 to 3 characters plus a witness span ≤ about 75% of that width; put neighbours closer than real-world spacing.
5. Low fences hide low props (dog, shoe) from mid-height cameras. Keep fences ≤1.7 units and low props ≥3 units behind them.
6. Foreground objects (a DAY flag, a fence) got between the camera and the action in close-ups. Plan close-up camera paths through gaps (a widened gate), place foreground props where no close-up looks, or hide them while out of continuity view.
7. Big lettered signs at frame edges violate the safe area. Keep the lettering narrower than the sign and frame it fully in, or keep it completely out.
8. Doors: work out the swing arc so it misses figures and props. Outward-opening flaps show a crack from the front; inward ones hide the peeking character. Retract wedged props before a door swings through them.
9. Tilted pop-up cards occlude what's behind them. Space them in depth by about 0.8 × height; check that title, source, headline, labels and tabs never overlap.
10. Hidden children (an inactive hat) still enlarge `Box3.setFromObject`, so verify boxes against stills.
11. A book hinge at the wrong height sank the left page. Hinge at the page-top height.
12. MJPEG-to-x264 chunks come out yuvj420p; convert to yuv420p tv range for delivery.
13. AAC encoding raised true peak by several dB; band-limit before encoding and measure the MP4, not the WAV.
14. A patch script that asserts midway writes nothing; re-apply every replacement after a failed assert.
15. Day passing: the lamp's lift arcs plus quick flag or number flips read better than any time-lapse.
16. Push-ins to make small text readable can push side characters' faces against the frame edge. Move them off-frame during the push (walk them in later) or aim the push away from them.