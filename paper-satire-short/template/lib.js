// lib.js — paper-craft rendering kit: paper textures, pencil-hatching shader, ink outlines, cut-outs with shaped shadows, easing.
import * as THREE from 'three';

export const INK = '#2b2520';
let _seed = 7;
export function rseed(s) { _seed = s; }
export function rnd(a = 0, b = 1) { _seed = (_seed * 16807) % 2147483647; return a + (_seed / 2147483647) * (b - a); }
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const ramp = (t, a, b) => clamp((t - a) / (b - a), 0, 1);
export const lerp = (a, b, k) => a + (b - a) * k;
export const ease = (x) => { x = clamp(x, 0, 1); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
export const easeOut = (x) => { x = clamp(x, 0, 1); return 1 - Math.pow(1 - x, 3); };
export const easeIn = (x) => { x = clamp(x, 0, 1); return x * x * x; };
export const sm = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
export const easeOutBack = (x, s = 1.7) => { x = clamp(x, 0, 1); return 1 + (s + 1) * Math.pow(x - 1, 3) + s * Math.pow(x - 1, 2); };
export const V = (x, y, z) => new THREE.Vector3(x, y, z);

export function canvas(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.lineJoin = 'round'; g.lineCap = 'round';
  draw(g, w, h); return c;
}
export function grain(g, w, h, amt = 6) {
  const d = g.getImageData(0, 0, w, h);
  for (let i = 0; i < d.data.length; i += 4) {
    if (d.data[i + 3] === 0) continue;
    const n = rnd(-amt, amt); d.data[i] += n; d.data[i + 1] += n; d.data[i + 2] += n;
  }
  g.putImageData(d, 0, 0);
}
// paper fibres: short light/dark strokes
export function fibres(g, w, h, n = 400, a = 0.07) {
  for (let i = 0; i < n; i++) {
    const x = rnd(0, w), y = rnd(0, h), l = rnd(3, 12), an = rnd(0, 6.28);
    g.strokeStyle = rnd() < 0.5 ? `rgba(255,250,235,${a})` : `rgba(40,30,20,${a})`;
    g.lineWidth = rnd(0.6, 1.6);
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(an) * l, y + Math.sin(an) * l); g.stroke();
  }
}
export function tex(c, opt = {}) {
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  if (opt.wrap) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  return t;
}
// solid paper surface texture of given color, physical size (w,h) metres
export function paperTex(col, w, h, deco, ppm = 48, gr = 6) {
  const c = canvas(Math.max(16, Math.round(w * ppm)), Math.max(16, Math.round(h * ppm)), (g, W, H) => {
    g.fillStyle = col; g.fillRect(0, 0, W, H);
    if (deco) deco(g, W, H, W / w);
    fibres(g, W, H, Math.round(W * H / 600), 0.06);
    grain(g, W, H, gr);
  });
  return tex(c);
}

// ---------- pencil hatching injected into standard lambert/phong ----------
export const HATCH = { uScale: { value: 1 }, uInkCol: { value: new THREE.Color(0.17, 0.14, 0.12) } };
const H_HEAD = `uniform float uScale;uniform vec3 uInkCol;uniform float uInk;uniform float uGrainA;
float hl(float v,float s,float w){float d=abs(mod(v,s)-s*.5);return 1.0-smoothstep(w,w+1.0,d);}
float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}`;
const H_BODY = `{vec3 cc=gl_FragColor.rgb;float lum=dot(cc,vec3(0.299,0.587,0.114));
 float base=max(dot(diffuseColor.rgb,vec3(0.299,0.587,0.114)),0.05);float sh=lum/base;
 vec2 p=gl_FragCoord.xy/uScale;float wob=hh(floor(p/7.0))*1.5;float ink=0.0;
 if(sh<0.66)ink=max(ink,hl(p.x*0.8+p.y+wob,7.0,0.38)*0.30);
 if(sh<0.44)ink=max(ink,hl(p.x-p.y*0.9+wob,6.0,0.38)*0.40);
 if(sh<0.24)ink=max(ink,hl(p.y+p.x*0.15,4.5,0.45)*0.48);
 float fade=smoothstep(0.012,0.08,lum);
 cc=mix(cc,uInkCol*min(1.0,lum*2.0),ink*uInk*fade);
 cc*=1.0+(hh(floor(gl_FragCoord.xy*0.5/uScale))-0.5)*uGrainA;
 gl_FragColor.rgb=cc;}`;
export function hatchify(m, ink = 1, gr = 0.05) {
  m.onBeforeCompile = (s) => {
    s.uniforms.uScale = HATCH.uScale; s.uniforms.uInkCol = HATCH.uInkCol;
    s.uniforms.uInk = { value: ink }; s.uniforms.uGrainA = { value: gr };
    s.fragmentShader = s.fragmentShader.replace('#include <common>', '#include <common>\n' + H_HEAD)
      .replace('#include <opaque_fragment>', '#include <opaque_fragment>\n' + H_BODY);
  };
  m.customProgramCacheKey = () => 'h' + ink + '_' + gr;
  return m;
}
export function paperMat(col, o = {}) {
  const m = new THREE.MeshLambertMaterial({ color: col, map: o.map || null, side: o.side || THREE.FrontSide,
    emissive: o.emissive || 0, emissiveIntensity: o.ei === undefined ? 1 : o.ei });
  if (o.map && o.alphaTest) m.alphaTest = o.alphaTest;
  if (o.transparent) { m.transparent = true; m.depthWrite = false; }
  if (o.hatch !== false) hatchify(m, o.ink === undefined ? 1 : o.ink, o.grain === undefined ? 0.05 : o.grain);
  return m;
}
export const edgeMat = new THREE.LineBasicMaterial({ color: 0x2b2520, transparent: true, opacity: 0.9 });
export const fineEdge = new THREE.LineBasicMaterial({ color: 0x2b2520, transparent: true, opacity: 0.5 });
// mesh + ink outline
export function inked(geo, mat, o = {}) {
  const g = new THREE.Group();
  const m = new THREE.Mesh(geo, mat && mat.isMaterial ? mat : (Array.isArray(mat) ? mat : paperMat(mat, o)));
  m.castShadow = o.cast !== false; m.receiveShadow = true; g.add(m);
  if (o.edge !== false) { const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, o.angle || 25), o.fine ? fineEdge : edgeMat); g.add(e); g.userData.edge = e; }
  g.userData.mesh = m; return g;
}
export function box(w, h, d, mat, o = {}) { return inked(new THREE.BoxGeometry(w, h, d), mat, o); }

// flat cut-out card with real shaped shadow
export function cutout(t, w, h, o = {}) {
  const tx = t.isTexture ? t : tex(t);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), paperMat(0xffffff, { map: tx, alphaTest: 0.5, side: o.side || THREE.DoubleSide,
    emissive: o.emissive === undefined ? 0x0e0b08 : o.emissive, ink: o.ink === undefined ? 0.7 : o.ink }));
  m.castShadow = o.cast !== false; m.receiveShadow = true;
  m.customDepthMaterial = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: tx, alphaTest: 0.5 });
  m.userData.tex = tx; return m;
}
export function setCut(m, t) { m.material.map = t; m.customDepthMaterial.map = t; }

let _glow = null;
export function glowTex() {
  if (_glow) return _glow;
  _glow = tex(canvas(256, 256, (g) => {
    const r = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.2, 'rgba(255,255,255,.65)');
    r.addColorStop(0.5, 'rgba(255,255,255,.14)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, 256, 256);
  }));
  return _glow;
}
export function glow(col, size, op = 1) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTex(), color: col, transparent: true, blending: THREE.AdditiveBlending,
    depthWrite: false, opacity: op, toneMapped: false, fog: false }));
  s.scale.set(size, size, 1); s.renderOrder = 20; return s;
}
// wobbly hand-cut polygon path
export function wob(g, pts, j = 1.2) {
  g.beginPath(); pts.forEach((p, i) => { const x = p[0] + rnd(-j, j), y = p[1] + rnd(-j, j); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.closePath();
}
export function fillInk(g, col, lw = 6) { g.fillStyle = col; g.fill(); g.strokeStyle = INK; g.lineWidth = lw; g.stroke(); }
export function rrect(g, x, y, w, h, r) {
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath();
}
// corrugated cardboard cut-edge texture (for cross-section faces)
export function corrugTex(w, h, col = '#c9a777', ppm = 80) {
  return tex(canvas(Math.round(w * ppm), Math.max(8, Math.round(h * ppm)), (g, W, H) => {
    g.fillStyle = col; g.fillRect(0, 0, W, H);
    const lw = Math.max(2, H * 0.06);
    g.fillStyle = 'rgba(70,45,20,.25)'; g.fillRect(0, 0, W, lw); g.fillRect(0, H - lw, W, lw);
    g.strokeStyle = 'rgba(80,55,25,.55)'; g.lineWidth = Math.max(1.5, H * 0.05);
    const per = Math.max(6, H * 0.55);
    g.beginPath();
    for (let x = 0; x <= W; x += 2) { const y = H / 2 + Math.sin(x / per * Math.PI * 2) * (H / 2 - lw * 1.4); x ? g.lineTo(x, y) : g.moveTo(x, y); }
    g.stroke(); grain(g, W, H, 7);
  }));
}
