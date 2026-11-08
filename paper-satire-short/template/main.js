// main.js — TEMPLATE demo scene, camera, action and post. DETERMINISTIC: render(t) depends only on t (no Math.random,
// no accumulated state between frames), so window.__seek(t) gives the same frame in playback, capture and MP4 export.
// Structure to keep for every episode:
//   init(canvas) -> builds renderer, lights, set, cast, props, post chain; returns { render(t), DUR, setQuality, gfx caps }
//   update(t)    -> poses everything from the beat table T (timeline.json), then camera, lights, post uniforms
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import * as L from './lib.js';
import { makeA, makeB } from './chars.js';
import TL from './timeline.json';
import { buildSet, FONT } from './set.js';

const { rnd, rseed, clamp, ramp, lerp, ease, easeOut, easeIn, sm, easeOutBack, V, canvas, tex, fibres, grain } = L;
// ?w=&h= renders at another size/aspect (native 4:3 cover etc.). Normal playback/export base is 1080x1920.
const _q = new URLSearchParams(location.search);
const W = +(_q.get('w') || 1080), H = +(_q.get('h') || 1920);
const QS = { px: 1 }; // export-only: render pixels per base pixel (keeps hatching line spacing constant at 4K)
const T = TL;
export const DUR = T.DUR;
const PI = Math.PI;
const decay = (d, k) => (d >= 0 ? Math.exp(-d * k) : 0);
const hsh = (a, b = 0) => { const s = Math.sin(a * 127.1 + b * 311.7) * 43758.5453; return s - Math.floor(s); }; // deterministic "random"
// monotone cubic through keyframes [[t,v],...] — smooth camera/prop curves without overshoot
export function pchip(K, t) {
  if (t <= K[0][0]) return K[0][1]; const n = K.length; if (t >= K[n - 1][0]) return K[n - 1][1];
  let i = 0; while (t > K[i + 1][0]) i++;
  const sl = (j) => (K[j + 1][1] - K[j][1]) / (K[j + 1][0] - K[j][0]);
  const tan = (j) => { if (j === 0) return sl(0); if (j === n - 1) return sl(n - 2); const a = sl(j - 1), b = sl(j); return a * b <= 0 ? 0 : 2 / (1 / a + 1 / b); };
  const h = K[i + 1][0] - K[i][0], s = (t - K[i][0]) / h, m0 = tan(i) * h, m1 = tan(i + 1) * h;
  const s2 = s * s, s3 = s2 * s;
  return (2 * s3 - 3 * s2 + 1) * K[i][1] + (s3 - 2 * s2 + s) * m0 + (-2 * s3 + 3 * s2) * K[i + 1][1] + (s3 - s2) * m1;
}

// ---------------- blocking ----------------
const AX = -0.95, BX = 0.95, CZ = 0.2;          // where A and B stand
const PA = V(-0.38, 1.88, CZ + 0.12);         // A's catch/release point (within arm reach)
const PB = V(0.45, 1.5, CZ + 0.12);          // B's catch/release point
const TOSS = T.TOSS, NT = TOSS.length;
const catchT = (i) => (i + 1 < NT ? TOSS[i + 1] - 0.0 : T.CATCH_LAST);
// which toss is in the air / who holds the ball at time t
function rally(t) {
  if (t < TOSS[0]) return { held: 'A' };
  for (let i = 0; i < NT; i++) {
    const t0 = TOSS[i], t1 = i + 1 < NT ? TOSS[i + 1] : T.CATCH_LAST;
    if (t < t1) {
      const fl = Math.min(t1 - t0, 0.62 + 0.0) * 0.82; // flight time; the rest of the interval the ball is held
      const from = i % 2 ? 'B' : 'A', to = i % 2 ? 'A' : 'B';
      if (t < t0 + fl) return { fly: true, i, u: (t - t0) / fl, from, to, iv: t1 - t0 };
      return { held: to, i, since: t - (t0 + fl), next: i + 1 < NT ? TOSS[i + 1] : null };
    }
  }
  return { held: 'A', i: NT - 1 };
}
const BIN = { x: 2.1, z: 0.25, top: 0.66, bottom: 0.14 }; // must match set.js bin

export async function init(canvasEl) {
  try { await document.fonts.load(`400 80px ${FONT.split(',')[0]}`, '示例DEMO'); } catch (e) {}
  rseed(11);
  const renderer = new THREE.WebGLRenderer({ canvas: canvasEl, antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.setSize(W, H, false);
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NoToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#3b302a');
  scene.fog = new THREE.Fog(0x3b302a, 18, 40);
  const cam = new THREE.PerspectiveCamera(40, W / H, 0.1, 200); scene.add(cam);

  // warm key spot with real shadows (follows the camera's look point), cool hemisphere, soft fill
  const hemi = new THREE.HemisphereLight(0xe8e4ff, 0x5a4a3c, 0.85); scene.add(hemi);
  const key = new THREE.SpotLight(0xffdcae, 2.7, 0, 30 * PI / 180, 0.6, 0);
  key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02;
  key.shadow.camera.near = 4; key.shadow.camera.far = 80; scene.add(key); scene.add(key.target);
  const fill = new THREE.DirectionalLight(0xffc9a0, 0.3); scene.add(fill); scene.add(fill.target);

  const S = buildSet(scene);
  const A = makeA(), B = makeB();
  [A, B].forEach((P) => { scene.add(P.root); P.root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); });

  // ---- the one prop the whole film follows: a crumpled paper ball (jittered icosahedron, flat shaded, inked)
  const bg = new THREE.IcosahedronGeometry(0.11, 1); rseed(5);
  { const p = bg.attributes.position; const m = new Map(); for (let i = 0; i < p.count; i++) { const k = p.getX(i).toFixed(3) + p.getY(i).toFixed(3) + p.getZ(i).toFixed(3); if (!m.has(k)) m.set(k, 1 + rnd(-0.18, 0.12)); const s = m.get(k); p.setXYZ(i, p.getX(i) * s, p.getY(i) * s, p.getZ(i) * s); } bg.computeVertexNormals(); }
  const ballMat = L.paperMat('#f7f3ea'); ballMat.flatShading = true;
  const ball = L.inked(bg, ballMat, { angle: 12 }); scene.add(ball);
  // speed lines behind the ball on the big throw (cut-out card)
  const streakT = tex(canvas(256, 64, (g, Wd, Hd) => { g.strokeStyle = '#2b2520'; g.lineCap = 'round'; for (let k = 0; k < 3; k++) { g.lineWidth = 6 - k; g.beginPath(); g.moveTo(20 + k * 30, 14 + k * 18); g.lineTo(Wd - 20, 14 + k * 18); g.stroke(); } }));
  const streak = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.15), new THREE.MeshBasicMaterial({ map: streakT, transparent: true, depthWrite: false })); scene.add(streak);

  // ---------------- post: bloom (threshold 1.05: only >1.0 emissive things glow) + tilt-shift/paper/vignette/grain ----------------
  const rt = new THREE.WebGLRenderTarget(W, H, { type: THREE.HalfFloatType, samples: 4 });
  const comp = new EffectComposer(renderer, rt); comp.setPixelRatio(1); comp.setSize(W, H);
  comp.addPass(new RenderPass(scene, cam));
  const bloom = new UnrealBloomPass(new THREE.Vector2(W / 2, H / 2), 0.7, 0.5, 1.05); comp.addPass(bloom);
  comp.addPass(new OutputPass());
  const paperOverlay = tex(canvas(512, 512, (g, w, h) => { g.fillStyle = '#808080'; g.fillRect(0, 0, w, h); rseed(9); fibres(g, w, h, 2600, 0.12); grain(g, w, h, 10); }), { wrap: true });
  const fin = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, tPaper: { value: paperOverlay }, uTime: { value: 0 }, uFocus: { value: 0.5 }, uBand: { value: 0.17 }, uAmt: { value: 2.0 }, uFlash: { value: 0 }, uSmear: { value: 0 }, uGQ: { value: 0 }, uGR: { value: new THREE.Vector2(W, H) }, uRes: { value: new THREE.Vector2(W, H) } },
    vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
    // uFocus/uBand/uAmt: tilt-shift (sharp horizontal band, blur grows outside). uSmear: whip-pan smear. uFlash: white flash.
    fragmentShader: `uniform sampler2D tDiffuse;uniform sampler2D tPaper;uniform float uTime;uniform float uFocus;uniform float uBand;uniform float uAmt;uniform float uFlash;uniform float uSmear;uniform float uGQ;uniform vec2 uGR;uniform vec2 uRes;varying vec2 vUv;
    float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     if(uSmear>0.5){vec4 s=vec4(0.0);for(int i=0;i<12;i++){float k=(float(i)/11.0-0.5)*uSmear/uRes.x;s+=texture2D(tDiffuse,vUv+vec2(k,0.0));}c=s/12.0;}
     else{float d=max(0.0,abs(vUv.y-uFocus)-uBand);float r=uAmt*smoothstep(0.0,0.32,d);
     if(r>0.35){vec2 px=vec2(r)/uRes;vec4 s=c*0.2;
      s+=texture2D(tDiffuse,vUv+px*vec2(1.0,0.0))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(-1.0,0.0))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(0.0,1.0))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(0.0,-1.0))*0.1;
      s+=texture2D(tDiffuse,vUv+px*vec2(0.7,0.7))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(-0.7,0.7))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(0.7,-0.7))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(-0.7,-0.7))*0.1;c=s;}}
     vec3 pp=texture2D(tPaper,vUv*vec2(2.1,3.7)).rgb;c.rgb*=1.0+(pp.r-0.5)*0.16;
     vec2 q=vUv-0.5;c.rgb*=1.0-0.28*smoothstep(0.25,0.85,length(q*vec2(1.25,1.0)));
     c.rgb=mix(c.rgb,c.rgb*vec3(1.04,1.0,0.93),0.6);if(uGQ>0.5){c.rgb+=(h(floor(vUv*uGR)+0.5+uTime)-0.5)*0.03;}else{c.rgb+=(h(vUv*uRes+uTime)-0.5)*0.03;}
     c.rgb=mix(c.rgb,vec3(1.0,0.98,0.94),uFlash);gl_FragColor=c;}`,
  });
  comp.addPass(fin);

  // =====================================================================
  //                         BALL (pure in t)
  // =====================================================================
  const tmp = new THREE.Vector3();
  const handPos = (P, k) => { P.arms[k].hand.getWorldPosition(tmp); return tmp.clone(); };
  function ballAt(t) {
    // rally: parabola between the two catch points; arc gets flatter as the rally speeds up
    if (t < T.CATCH_LAST) {
      const r = rally(t);
      if (r.fly) {
        const a = r.from === 'A' ? PA : PB, b = r.from === 'A' ? PB : PA, u = r.u;
        const hgt = 0.18 + 0.55 * clamp((r.iv - 0.3) / 0.65, 0, 1);
        return { p: V(lerp(a.x, b.x, u), lerp(a.y, b.y, u) + 4 * hgt * u * (1 - u), lerp(a.z, b.z, u) + 0.15 * Math.sin(PI * u)), spin: u * 9 + r.i * 2 };
      }
      return { p: (r.held === 'A' ? PA : PB).clone(), spin: (r.i || 0) * 2 + 9, held: r.held };
    }
    if (t < T.THROW) return { p: null, held: 'A', spin: 0 }; // follows A's hand during the wind-up
    // the big lob: from the release point to the bin mouth, then drop inside
    const r0 = ballAt.release || PA, t1 = T.LAND - 0.12;
    if (t < t1) {
      const u = (t - T.THROW) / (t1 - T.THROW), top = 3.15;
      const y0 = r0.y, y1 = BIN.top + 0.12;
      // parabola through (0,y0) (1,y1) with apex ~top
      const ym = lerp(y0, y1, u) + 4 * (top - (y0 + y1) / 2) * u * (1 - u);
      return { p: V(lerp(r0.x, BIN.x, easeOut(u) * 0.15 + u * 0.85), ym, lerp(r0.z, BIN.z, u)), spin: (t - T.THROW) * 14, fly: true };
    }
    const u = ramp(t, t1, T.LAND);
    return { p: V(BIN.x, lerp(BIN.top + 0.12, BIN.bottom, easeIn(u)), BIN.z), spin: (t1 - T.THROW) * 14 + u * 2, inBin: t >= T.LAND };
  }

  // =====================================================================
  //                         CAST (pure in t)
  // =====================================================================
  // aim an arm at a world point (2D, in the card plane): rotation so the arm's "down" points at p
  const aim = (P, k, p) => { P.arms[k].piv.getWorldPosition(tmp); return Math.atan2(p.x - tmp.x, -(p.y - tmp.y)); };
  function stressFace(i) { return i < 5 ? 'focus' : i < 11 ? 'strain' : 'panic'; }
  function setCast(t, bs) {
    for (const [P, x, who] of [[A, AX, 'A'], [B, BX, 'B']]) {
      P.pose(); P.root.position.set(x, 0, CZ); P.root.rotation.set(0, 0, 0);
      const r = rally(Math.min(t, T.CATCH_LAST - 1e-3));
      const k = who === 'A' ? 1 : 0;                // arm toward the partner
      const idx = r.i || 0;
      let face = t < 0.6 ? 'focus' : stressFace(idx);
      // idle bounce, faster as the rally speeds up
      const bpm = 5 + idx * 0.5; P.tilt.position.y = 0.025 * Math.abs(Math.sin(t * bpm + (who === 'A' ? 0 : 1)));
      P.lean.rotation.z = (who === 'A' ? -1 : 1) * 0.04;
      P.arms[1 - k].piv.rotation.z = (who === 'A' ? -0.25 : 0.25) + 0.05 * Math.sin(t * 3);
      if (t < T.CATCH_LAST + 0.02) {
        // reach for the ball when it is coming to me or I am holding it; tiny pull-back (anticipation) before each toss
        let target = who === 'A' ? PA : PB;
        const mine = (r.held === who) || (r.fly && r.to === who && r.u > 0.45) || (r.fly && r.from === who && r.u < 0.15);
        if (mine && bs.p) target = bs.p;
        let ang = aim(P, k, target);
        if (r.held === who && r.next != null) { const d = r.next - t; if (d < 0.14) ang += (who === 'A' ? -1 : 1) * 0.45 * Math.sin(PI * (1 - d / 0.14)); }
        if (!mine) ang = lerp(ang, (who === 'A' ? 0.6 : -0.6), 0.4);
        P.arms[k].piv.rotation.z = ang;
        P.face(face, [who === 'A' ? 0.8 : -0.8, -0.5]);
        P.neck.rotation.z = (who === 'A' ? 1 : -1) * 0.05 * Math.sin(t * bpm);
      } else if (who === 'A' && t < T.THROW + 0.35) {
        // WIND-UP: arm swings back and high, body leans back (蓄力) — then snaps forward on THROW
        const kw = sm(ramp(t, T.WIND0, T.THROW - 0.08)), kt = easeOut(ramp(t, T.THROW - 0.08, T.THROW + 0.12));
        P.arms[1].piv.rotation.z = lerp(lerp(aim(P, 1, PA), 3.6, kw), 1.9, kt); // 3.6 rad = back over the head (not down through the floor)
        P.lean.rotation.z = lerp(0.18 * kw, -0.22, kt); P.tilt.rotation.z = lerp(0.08 * kw, -0.06, kt);
        P.face(t < T.THROW ? 'wind' : 'strain', [1, -0.6]);
      } else if (who === 'B' && t < T.LOOK0) {
        // B watches the ball fly over its head, ducking
        const kd = sm(ramp(t, T.THROW, T.THROW + 0.3));
        P.tilt.position.y = -0.06 * kd; P.arms[0].piv.rotation.z = lerp(-0.6, 2.4, kd); P.arms[1].piv.rotation.z = lerp(0.25, -2.4, kd);
        P.face('panic', bs.p ? [clamp((bs.p.x - BX), -1, 1), -1] : [0, -1]);
      } else {
        // aftermath: both stare at the bin; arms drop; at HOME they turn back to each other (loop)
        const kh = sm(ramp(t, T.HOME0, T.HOME0 + 0.8));
        P.arms[k].piv.rotation.z = lerp(who === 'A' ? 1.2 : -0.3, who === 'A' ? 0.3 : -0.3, sm(ramp(t, T.LOOK0, T.LOOK0 + 0.6)));
        P.face(t < T.HOME0 ? (t < T.TROMBONE + 0.2 ? 'stare' : 'flat') : 'focus', t < T.HOME0 ? [1, 0.3] : [who === 'A' ? 0.8 : -0.8, -0.5]);
        P.lean.rotation.z = (who === 'A' ? -1 : 1) * 0.04 * kh;
        if (t > T.TROMBONE && t < T.HOME0) { P.tilt.position.y = -0.04 * sm(ramp(t, T.TROMBONE, T.TROMBONE + 1.2)); P.neck.rotation.z = -0.12 * sm(ramp(t, T.TROMBONE, T.TROMBONE + 1.2)); }
      }
    }
  }

  // =====================================================================
  //                         CAMERA (pure in t)
  // =====================================================================
  const HOME = { pos: V(0.45, 1.95, 7.6), look: V(0.0, 1.5, 0), fov: 40 };
  function camAt(t, bs) {
    let pos, look, fov = 40;
    if (t < T.POP0) {
      // hook: already moving (dolly-in + drift) from frame 0; slow push during the rally; look nudged by the ball
      const k = ease(ramp(t, 0, 2.2)), k2 = sm(ramp(t, 2.2, T.POP0));
      look = V(lerp(0, 0.03, k) + (bs.p ? bs.p.x * 0.12 : 0), lerp(1.5, 1.4, k) + 0.05 * k2, 0);
      pos = V(lerp(0.45, 0.15, k) - 0.1 * k2, lerp(1.95, 1.8, k), lerp(7.6, 6.9, k) - 0.5 * k2);
      fov = 40;
    } else if (t < T.WIND0) {
      // pan right: the bin unfolds out of the floor
      const k = ease(ramp(t, T.POP0, T.POP0 + 0.45)), back = ease(ramp(t, T.POP1, T.WIND0));
      look = V(lerp(lerp(0.0, 1.9, k), -0.5, back), lerp(1.5, 0.9, k * (1 - back)) + 0.6 * back * 0, 0);
      pos = look.clone().add(V(0.25, lerp(0.5, 0.35, k), lerp(7.3, 6.2, k)));
    } else if (t < T.THROW) {
      // push in on the wind-up
      const k = ease(ramp(t, T.WIND0, T.THROW));
      look = V(lerp(-0.5, -1.0, k), lerp(1.5, 1.7, k), CZ); pos = look.clone().add(V(lerp(0.25, 0.7, k), lerp(0.35, 0.1, k), lerp(6.2, 4.6, k)));
    } else if (t < T.LAND) {
      // follow the ball (lagged), pulling back so the bin is in frame before it lands
      const k = ease(ramp(t, T.THROW, T.LAND - 0.3));
      const bp = bs.p || PA;
      look = V(lerp(-1.0, BIN.x - 0.3, k) * 0.6 + bp.x * 0.4, lerp(1.7, bp.y * 0.55 + 0.4, 0.8), lerp(CZ, BIN.z, k));
      pos = look.clone().add(V(lerp(0.7, -0.2, k), lerp(0.1, 0.4, k), lerp(4.6, 5.0, k)));
    } else if (t < T.LOOK0 + 0.3) {
      // landing: close on the bin
      look = V(BIN.x - 0.1, 0.65, BIN.z); pos = look.clone().add(V(-0.35, 0.75, 3.3));
    } else if (t < T.HOME0) {
      // the freeze: wide, everybody + the bin in one frame (定格 ≤ ~8 s; here 2.3 s)
      const k = ease(ramp(t, T.LOOK0 + 0.3, T.LOOK0 + 1.1));
      const l0 = V(BIN.x - 0.1, 0.65, BIN.z), p0 = l0.clone().add(V(-0.35, 0.75, 3.3));
      const l1 = V(0.55, 1.2, 0), p1 = V(0.65, 1.7, 8.4);
      look = l0.lerp(l1, k); pos = p0.lerp(p1, k); fov = lerp(40, 44, k);
    } else {
      // glide back to the exact opening framing (loop seam)
      const k = ease(ramp(t, T.HOME0, T.DUR - 0.05));
      look = V(0.55, 1.2, 0).lerp(HOME.look, k); pos = V(0.65, 1.7, 8.4).lerp(HOME.pos, k); fov = lerp(44, HOME.fov, k);
    }
    return { pos, look, fov };
  }

  // =====================================================================
  //                         UPDATE
  // =====================================================================
  function update(t) {
    t = clamp(t, 0, DUR);
    L.HATCH.uScale.value = QS.px;
    // pop-up bin
    S.popBin(ramp(t, T.POP0, T.POP1), t > T.LAND && t < T.LAND + 0.4 ? 0.05 * decay(t - T.LAND, 8) * Math.sin((t - T.LAND) * 50) : 0);
    // pose cast first (ball follows A's hand during the wind-up)
    let bs = ballAt(t);
    A.root.position.set(AX, 0, CZ); B.root.position.set(BX, 0, CZ); scene.updateMatrixWorld(true);
    setCast(t, bs); scene.updateMatrixWorld(true);
    if (t >= T.CATCH_LAST && t < T.THROW) bs = { p: handPos(A, 1), spin: 0 };
    { // release point = A's hand at THROW (computed by posing at THROW; deterministic)
      if (!ballAt.release) { setCast(T.THROW - 1e-4, { p: null }); scene.updateMatrixWorld(true); ballAt.release = handPos(A, 1); setCast(t, bs); scene.updateMatrixWorld(true); }
      if (t >= T.THROW) bs = ballAt(t);
    }
    ball.position.copy(bs.p); ball.rotation.set(bs.spin * 0.7, bs.spin, bs.spin * 0.3);
    // speed lines on the big throw
    streak.visible = t > T.THROW && t < T.LAND - 0.15;
    // clock: minute hand ticks with the beat table, frozen after LAND
    { let n = 0; for (const x of T.TICKS) if (x <= t) n++; S.minHand.rotation.z = -n * PI / 15; S.hourHand.rotation.z = -1.2 - n * PI / 180; }

    const C0 = camAt(t, bs);
    let C = C0; const _o = window.__camOv; if (_o) C = { pos: V(..._o.pos), look: V(..._o.look), fov: _o.fov || C0.fov };
    let shk = 0;
    { const d = t - T.LAND; if (d > 0 && d < 0.5) shk += decay(d, 10) * 0.03; }
    { const d = t - T.THROW; if (d > 0 && d < 0.3) shk += decay(d, 14) * 0.03; }
    if (_o) shk = 0;
    cam.fov = C.fov; cam.aspect = W / H; cam.updateProjectionMatrix();
    cam.position.copy(C.pos).add(V(Math.sin(t * 61) * shk, Math.cos(t * 53) * shk, 0));
    cam.up.set(0, 1, 0); cam.lookAt(C.look); cam.updateMatrixWorld(true);
    const cp = cam.position;
    // cards slightly turned toward the camera (clamped so they still read as flat paper)
    for (const P of [A, B]) { const p = P.root.position; P.root.rotation.y = clamp(Math.atan2(cp.x - p.x, cp.z - p.z), -0.35, 0.35); }
    if (streak.visible) { streak.position.copy(bs.p).add(V(-0.36, 0.05, -0.02)); streak.quaternion.copy(cam.quaternion); streak.rotation.z += -0.35; streak.material.opacity = 0.8; }
    // key light follows the look point so shadows always fall the same way on screen
    const dir = C.look.clone().sub(cp); const dist = dir.length(); dir.normalize();
    const az = Math.atan2(dir.x, dir.z) + PI;
    const kd = V(-0.45, 0.7, 0.62); kd.applyAxisAngle(V(0, 1, 0), az);
    key.position.copy(C.look).add(kd.multiplyScalar(Math.max(16, dist * 1.3)));
    key.target.position.copy(C.look); key.angle = Math.min(60, 14 + dist * 2.4) * PI / 180; key.shadow.camera.far = Math.max(50, dist * 3.5);
    fill.position.copy(cp).add(V(4, 5, 0)); fill.target.position.copy(C.look);
    // post
    const sp = C.look.clone().project(cam);
    fin.uniforms.uFocus.value = clamp(sp.y * 0.5 + 0.5, 0.25, 0.75);
    const wide = dist > 8;
    fin.uniforms.uBand.value = wide ? 0.24 : 0.17; fin.uniforms.uAmt.value = wide ? 1.6 : 2.0;
    fin.uniforms.uTime.value = Math.floor(t * 12) % 97; // grain changes at 12 fps (film-like, and deterministic)
    let fl = 0; if (t > T.LAND && t < T.LAND + 0.05) fl = 0.18;
    fin.uniforms.uFlash.value = fl;
    fin.uniforms.uSmear.value = 0;
    const po = window.__postOv; if (po) { fin.uniforms.uFlash.value = po.flash || 0; if (po.amt != null) fin.uniforms.uAmt.value = po.amt; if (po.band != null) fin.uniforms.uBand.value = po.band; if (po.focus != null) fin.uniforms.uFocus.value = po.focus; }
  }
  function render(t) { update(t); comp.render(); }

  // ---- export-only quality switch (called by exporter.js; never in normal playback) ----
  const Q0 = { shadow: key.shadow.mapSize.x, samples: rt.samples, aniso: new Map() };
  const setMapsAniso = (a) => scene.traverse((o) => { if (!o.isMesh && !o.isSprite) return; (Array.isArray(o.material) ? o.material : [o.material]).forEach((mt) => { if (!mt) return; for (const k of ['map', 'alphaMap', 'emissiveMap']) { const tx = mt[k]; if (!tx) continue; if (!Q0.aniso.has(tx)) Q0.aniso.set(tx, tx.anisotropy); const v = a == null ? Q0.aniso.get(tx) : Math.max(Q0.aniso.get(tx), a); if (tx.anisotropy !== v) { tx.anisotropy = v; tx.needsUpdate = true; } } }); });
  function setQuality(o) {
    // o = null -> restore playback; else {w, h (render size), outW, outH (encoded size), shadow, samples, aniso}
    const ow = o ? o.w : W, oh = o ? o.h : H;
    QS.px = o ? o.h / H : 1;
    const sh = o ? o.shadow : Q0.shadow;
    if (key.shadow.mapSize.x !== sh) { key.shadow.mapSize.set(sh, sh); if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; } }
    const smp = o ? o.samples : Q0.samples;
    if (comp.renderTarget1.samples !== smp) { comp.renderTarget1.samples = smp; comp.renderTarget1.dispose(); comp.renderTarget2.samples = smp; comp.renderTarget2.dispose(); }
    renderer.setSize(ow, oh, false); comp.setSize(ow, oh);
    bloom.setSize(W, H); // bloom radius is in texels: keep it at the base size so the glow looks the same
    fin.uniforms.uRes.value.set(W, H); // blur radii stay in base pixels
    fin.uniforms.uGQ.value = o ? 1 : 0; fin.uniforms.uGR.value.set(o ? o.outW : W, o ? o.outH : H);
    setMapsAniso(o ? o.aniso : null);
  }
  return { render, DUR, setQuality, maxAniso: renderer.capabilities.getMaxAnisotropy(), maxTex: renderer.capabilities.maxTextureSize, maxSamples: renderer.capabilities.maxSamples };
}
