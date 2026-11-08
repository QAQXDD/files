// chars.js — cast kit. Faces are drawn with ink on canvas (swappable expressions), bodies are thick cardboard cut-outs:
// legs, torso, two arms and the head are SEPARATE cards on pivot groups (root > tilt > hip > lean > arms/neck > head).
// Expression = a face spec { eyes, look:[x,y], mouth, brow:[l,r], browUp, blush, sweat, tear, soot }; textures are cached per spec.
//   eyes : bean | happy | closed | squint | heart | x | stare | stareS | cross | wide | twitch
//   mouth: flat | smile | grin | laugh | stiff | o | O | pout | tongue | wobble | frown | shout | smug | nerv
// TEMPLATE: makeA / makeB are generic demo characters. Make a NEW cast for every episode (silhouette + one prop = identity).
import * as THREE from 'three';
import { canvas, grain, tex, cutout, setCut, rseed, rnd, INK, fillInk, rrect } from './lib.js';

const PPM = 500;
const SKIN = '#f3cfa9', SKIN_D = '#d9a982';

// ---------------- faces (bean-eye style) ----------------
function heartPath(g, x, y, r) {
  g.beginPath(); g.moveTo(x, y + r * 0.9);
  g.bezierCurveTo(x - r * 1.4, y - r * 0.1, x - r * 0.6, y - r * 1.1, x, y - r * 0.35);
  g.bezierCurveTo(x + r * 0.6, y - r * 1.1, x + r * 1.4, y - r * 0.1, x, y + r * 0.9); g.closePath();
}
export function drawFace(g, cx, cy, s, f, o = {}) {
  const look = f.look || [0, 0];
  const ex = s * (o.eyeX || 0.2), ey = cy, er = s * (o.eyeR || 0.07);
  g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = INK;
  for (const side of [-1, 1]) {
    const x = cx + side * ex, y = ey;
    let e = f.eyes || 'bean';
    if (e === 'twitch') e = side < 0 ? 'stare' : 'stareS';
    g.lineWidth = s * 0.03;
    if (e === 'bean') {
      const px = x + look[0] * er * 0.5, py = y + look[1] * er * 0.5;
      g.beginPath(); g.ellipse(px, py, er * 0.62, er * 0.95, 0, 0, 7); g.fillStyle = INK; g.fill();
      g.beginPath(); g.arc(px - er * 0.2, py - er * 0.35, er * 0.22, 0, 7); g.fillStyle = '#fffaf0'; g.fill();
    } else if (e === 'happy') { g.beginPath(); g.moveTo(x - er, y + er * 0.4); g.quadraticCurveTo(x, y - er * 1.1, x + er, y + er * 0.4); g.stroke(); }
    else if (e === 'closed') { g.beginPath(); g.moveTo(x - er, y - er * 0.1); g.quadraticCurveTo(x, y + er * 0.9, x + er, y - er * 0.1); g.stroke(); }
    else if (e === 'squint') { g.beginPath(); g.moveTo(x - side * er, y - er * 0.7); g.lineTo(x + side * er * 0.8, y); g.lineTo(x - side * er, y + er * 0.7); g.stroke(); }
    else if (e === 'heart') { heartPath(g, x, y, er * 1.25); g.fillStyle = '#e0344a'; g.fill(); g.lineWidth = s * 0.018; g.stroke(); g.beginPath(); g.arc(x - er * 0.4, y - er * 0.3, er * 0.2, 0, 7); g.fillStyle = '#ffe6ea'; g.fill(); }
    else if (e === 'x') { g.lineWidth = s * 0.035; g.beginPath(); g.moveTo(x - er, y - er); g.lineTo(x + er, y + er); g.moveTo(x + er, y - er); g.lineTo(x - er, y + er); g.stroke(); }
    else if (e === 'stare' || e === 'stareS' || e === 'cross' || e === 'wide') {
      const R = e === 'stareS' ? er * 0.95 : e === 'wide' ? er * 1.35 : er * 1.25;
      g.beginPath(); g.arc(x, y, R, 0, 7); g.fillStyle = '#fffaf0'; g.fill(); g.lineWidth = s * 0.02; g.stroke();
      let px = x + look[0] * R * 0.5, py = y + look[1] * R * 0.5, pr = R * 0.28;
      if (e === 'cross') { px = x - side * R * 0.5; py = y - R * 0.15; pr = R * 0.36; }
      if (e === 'wide') pr = R * 0.32;
      g.beginPath(); g.arc(px, py, pr, 0, 7); g.fillStyle = INK; g.fill();
      if (e === 'stareS') { g.strokeStyle = 'rgba(200,40,40,.55)'; g.lineWidth = s * 0.008; for (let k = 0; k < 4; k++) { const a = k * 1.6 + 0.4; g.beginPath(); g.moveTo(x + Math.cos(a) * R * 0.95, y + Math.sin(a) * R * 0.95); g.lineTo(x + Math.cos(a) * R * 0.55, y + Math.sin(a) * R * 0.6); g.stroke(); } g.strokeStyle = INK; }
    }
    // optional lashes
    if (o.lash && (e === 'bean' || e === 'closed' || e === 'happy')) { g.lineWidth = s * 0.02; g.beginPath(); g.moveTo(x + side * er * 0.7, y - er * 0.6); g.lineTo(x + side * er * 1.25, y - er * 1.0); g.stroke(); }
    // brows
    if (f.brow !== null) {
      const b = (f.brow || [0, 0])[side < 0 ? 0 : 1];
      const by = y - er * 1.9 - (f.browUp || 0) * s; const t = Math.tan(b) * er;
      g.lineWidth = s * (o.browW || 0.03);
      g.beginPath(); g.moveTo(x + side * er * 1.1, by - t); g.lineTo(x - side * er * 1.1, by + t); g.stroke();
    }
  }
  if (o.blush !== false) { g.fillStyle = `rgba(232,104,104,${f.blush || 0.32})`; for (const side of [-1, 1]) { g.beginPath(); g.ellipse(cx + side * s * 0.3, cy + s * 0.13, s * 0.075, s * 0.045, 0, 0, 7); g.fill(); } }
  if (o.freckle) { g.fillStyle = 'rgba(150,90,60,.55)'; for (const side of [-1, 1]) for (let k = 0; k < 3; k++) { g.beginPath(); g.arc(cx + side * s * (0.24 + k * 0.035), cy + s * (0.1 + (k % 2) * 0.03), s * 0.009, 0, 7); g.fill(); } }
  // mouth
  const my = cy + s * (o.mouthY || 0.22), mw = s * 0.11, m = f.mouth || 'flat';
  g.strokeStyle = INK; g.lineWidth = s * 0.028; g.beginPath();
  const lip = o.lip || '#5a2a26';
  if (m === 'smile') { g.moveTo(cx - mw, my - 2); g.quadraticCurveTo(cx, my + mw * 0.85, cx + mw, my - 2); g.stroke(); }
  else if (m === 'grin' || m === 'laugh') {
    const k = m === 'laugh' ? 1.4 : 1.15;
    g.moveTo(cx - mw * k, my - mw * 0.2); g.lineTo(cx + mw * k, my - mw * 0.2); g.quadraticCurveTo(cx + mw * k * 0.9, my + mw * k, cx, my + mw * k); g.quadraticCurveTo(cx - mw * k * 0.9, my + mw * k, cx - mw * k, my - mw * 0.2); g.closePath();
    g.fillStyle = lip; g.fill(); g.stroke();
    g.save(); g.clip(); g.fillStyle = '#fffaf0'; g.fillRect(cx - mw * 1.5, my - mw * 0.25, mw * 3, mw * 0.32); g.fillStyle = '#e46a6a'; g.beginPath(); g.ellipse(cx, my + mw * k, mw * 0.6, mw * 0.4, 0, 0, 7); g.fill(); g.restore();
  }
  else if (m === 'stiff') { // rigid frozen grin, all teeth
    rrect(g, cx - mw * 1.45, my - mw * 0.35, mw * 2.9, mw * 0.75, mw * 0.3); g.fillStyle = '#fffaf0'; g.fill(); g.stroke();
    g.beginPath(); for (let p = -3; p <= 3; p++) { g.moveTo(cx + p * mw * 0.4, my - mw * 0.35); g.lineTo(cx + p * mw * 0.4, my + mw * 0.4); } g.moveTo(cx - mw * 1.45, my + 0.02 * mw); g.lineTo(cx + mw * 1.45, my + 0.02 * mw); g.lineWidth = s * 0.012; g.stroke();
    g.lineWidth = s * 0.02; g.beginPath(); g.moveTo(cx - mw * 1.6, my - mw * 0.5); g.lineTo(cx - mw * 1.45, my - mw * 0.1); g.moveTo(cx + mw * 1.6, my - mw * 0.5); g.lineTo(cx + mw * 1.45, my - mw * 0.1); g.stroke();
  }
  else if (m === 'o') { g.ellipse(cx, my + 2, mw * 0.32, mw * 0.42, 0, 0, 7); g.fillStyle = lip; g.fill(); g.stroke(); }
  else if (m === 'O') { g.ellipse(cx, my + 5, mw * 0.6, mw * 0.85, 0, 0, 7); g.fillStyle = lip; g.fill(); g.stroke(); }
  else if (m === 'pout') { g.ellipse(cx + mw * 0.1, my, mw * 0.3, mw * 0.24, 0, 0, 7); g.fillStyle = '#d24c5a'; g.fill(); g.stroke(); g.beginPath(); g.moveTo(cx - mw * 0.1, my); g.lineTo(cx + mw * 0.3, my); g.lineWidth = s * 0.012; g.stroke(); }
  else if (m === 'tongue') { g.moveTo(cx - mw, my); g.quadraticCurveTo(cx, my + mw * 0.3, cx + mw, my - mw * 0.1); g.stroke(); g.beginPath(); g.ellipse(cx + mw * 0.55, my + mw * 0.3, mw * 0.25, mw * 0.32, 0.3, 0, 7); g.fillStyle = '#e46a6a'; g.fill(); g.lineWidth = s * 0.016; g.stroke(); }
  else if (m === 'wobble') { g.moveTo(cx - mw, my); for (let p = 1; p <= 6; p++) g.lineTo(cx - mw + p * mw / 3, my + (p % 2 ? -1 : 1) * mw * 0.2); g.stroke(); }
  else if (m === 'frown') { g.moveTo(cx - mw, my + mw * 0.4); g.quadraticCurveTo(cx, my - mw * 0.45, cx + mw, my + mw * 0.4); g.stroke(); }
  else if (m === 'shout') { g.moveTo(cx - mw * 1.1, my - mw * 0.3); g.lineTo(cx + mw * 1.1, my - mw * 0.3); g.lineTo(cx + mw * 0.7, my + mw * 0.9); g.lineTo(cx - mw * 0.7, my + mw * 0.9); g.closePath(); g.fillStyle = lip; g.fill(); g.stroke(); }
  else if (m === 'smug') { g.moveTo(cx - mw * 0.9, my + 2); g.quadraticCurveTo(cx + mw * 0.2, my + mw * 0.4, cx + mw * 1.1, my - mw * 0.35); g.stroke(); }
  else if (m === 'nerv') { g.moveTo(cx - mw * 0.9, my); g.quadraticCurveTo(cx - mw * 0.45, my - mw * 0.25, cx, my); g.quadraticCurveTo(cx + mw * 0.45, my + mw * 0.25, cx + mw * 0.9, my); g.stroke(); }
  else { g.moveTo(cx - mw * 0.8, my); g.lineTo(cx + mw * 0.8, my); g.stroke(); }
  if (o.lipstick && (m === 'smile' || m === 'smug')) { g.strokeStyle = '#c8303e'; g.lineWidth = s * 0.03; g.stroke(); }
  // soot (黑炭: blown-up / burnt face): grey-black smudges + a few white sparks
  if (f.soot) {
    g.fillStyle = `rgba(30,24,22,${0.55 * f.soot})`;
    for (const [dx, dy, r] of [[-0.25, -0.05, 0.16], [0.22, 0.1, 0.14], [0.02, -0.28, 0.13], [-0.1, 0.3, 0.1]]) { g.beginPath(); g.ellipse(cx + dx * s, cy + dy * s, r * s, r * s * 0.7, dx, 0, 7); g.fill(); }
  }
  // sweat drops (f.sweat = count, grows with stress)
  for (let i = 0; i < (f.sweat || 0); i++) {
    const sx = cx + (i % 2 ? -1 : 1) * s * (0.38 + (i >> 1) * 0.06), sy = cy - s * 0.22 + (i >> 1) * s * 0.12;
    g.beginPath(); g.moveTo(sx, sy - s * 0.08); g.quadraticCurveTo(sx + s * 0.05, sy + s * 0.02, sx, sy + s * 0.045); g.quadraticCurveTo(sx - s * 0.05, sy + s * 0.02, sx, sy - s * 0.08);
    g.fillStyle = '#bfe0f0'; g.fill(); g.strokeStyle = INK; g.lineWidth = s * 0.012; g.stroke();
  }
  if (f.tear) { const sx = cx - ex, sy = ey + er * 1.4; g.beginPath(); g.moveTo(sx, sy); g.quadraticCurveTo(sx - s * 0.03, sy + s * 0.08, sx, sy + s * 0.1); g.quadraticCurveTo(sx + s * 0.03, sy + s * 0.08, sx, sy); g.fillStyle = '#bfe0f0'; g.fill(); g.lineWidth = s * 0.01; g.strokeStyle = INK; g.stroke(); }
}

// ---------------- generic two-sided rig ----------------
function T2(w, h, draw) { return tex(canvas(Math.round(w * PPM), Math.round(h * PPM), (g, W, H) => { draw(g, W, H); grain(g, W, H, 4); })); }
export function rig(spec) {
  const outfits = spec.outfits || ['a'];
  const root = new THREE.Group();
  const tilt = new THREE.Group(); root.add(tilt);
  const hip = new THREE.Group(); hip.position.y = spec.hipY; tilt.add(hip);
  const lean = new THREE.Group(); hip.add(lean);
  const TX = {};
  for (const of of outfits) {
    TX[of] = {
      leg: T2(spec.leg.w, spec.leg.l, (g, W, H) => spec.leg.draw(g, W, H, of)),
      torso: T2(spec.torso.w, spec.torso.h, (g, W, H) => spec.torso.draw(g, W, H, of)),
      torsoB: spec.torso.back ? T2(spec.torso.w, spec.torso.h, (g, W, H) => spec.torso.back(g, W, H, of)) : null,
      arm: [-1, 1].map((side) => T2(spec.arm.w, spec.arm.l, (g, W, H) => spec.arm.draw(g, W, H, side, of))),
    };
  }
  const two = !!spec.torso.back;
  const side1 = two ? THREE.FrontSide : THREE.DoubleSide;
  const legs = [];
  for (const side of [-1, 1]) {
    const p = new THREE.Group(); p.position.set(side * spec.legX, spec.hipY, -0.02); tilt.add(p);
    const m = cutout(TX[outfits[0]].leg, spec.leg.w, spec.leg.l); m.geometry.translate(0, -spec.leg.l / 2, 0); p.add(m);
    legs.push(p); p.userData.m = m;
  }
  const torso = cutout(TX[outfits[0]].torso, spec.torso.w, spec.torso.h, { side: side1 }); torso.position.set(0, spec.torso.h / 2 - spec.torso.drop, 0); lean.add(torso);
  let torsoB = null;
  if (two) { torsoB = cutout(TX[outfits[0]].torsoB, spec.torso.w, spec.torso.h, { side: THREE.FrontSide }); torsoB.rotation.y = Math.PI; torsoB.position.copy(torso.position); torsoB.position.z -= 0.004; lean.add(torsoB); }
  const arms = [];
  for (const side of [-1, 1]) {
    const p = new THREE.Group(); p.position.set(side * spec.shoulderX, spec.shoulderY, 0.03 + (side > 0 ? 0.008 : 0)); lean.add(p);
    const m = cutout(TX[outfits[0]].arm[side < 0 ? 0 : 1], spec.arm.w, spec.arm.l); m.geometry.translate(0, -spec.arm.l / 2 + spec.arm.w * 0.35, 0); p.add(m);
    const hand = new THREE.Group(); hand.position.set(0, -spec.arm.l + spec.arm.w * 0.55, 0.02); p.add(hand);
    p.rotation.z = side * 0.1; arms.push({ piv: p, hand, rest: side * 0.1, m });
  }
  const neck = new THREE.Group(); neck.position.set(0, spec.neckY, 0.05); lean.add(neck);
  const cache = {};
  const hs = spec.head.s, hh = hs * spec.head.hr;
  const faceTex = (f, of) => {
    const k = JSON.stringify(f) + of;
    if (!cache[k]) { rseed(spec.seed || 3); cache[k] = T2(hs, hh, (g, W, H) => spec.head.draw(g, W, H, f, of)); }
    return cache[k];
  };
  const head = cutout(faceTex(spec.faces.n, outfits[0]), hs, hh, { side: side1 }); head.position.set(0, hh / 2 - spec.head.drop, 0); neck.add(head);
  let headB = null;
  if (spec.head.back) { headB = cutout(T2(hs, hh, (g, W, H) => spec.head.back(g, W, H)), hs, hh, { side: THREE.FrontSide }); headB.rotation.y = Math.PI; headB.position.copy(head.position); headB.position.z -= 0.004; neck.add(headB); }
  const top = new THREE.Group(); top.position.set(0, spec.head.top, 0); neck.add(top);
  let cur = '', outfit = outfits[0];
  const P = {
    root, tilt, hip, lean, legs, torso, torsoB, arms, neck, head, headB, top, spec,
    face(name, look) {
      const f = Object.assign({}, spec.faces[name] || spec.faces.n);
      if (look) f.look = [Math.round(look[0] * 4) / 4, Math.round(look[1] * 4) / 4];
      const k = name + '|' + (f.look || '') + outfit;
      if (k === cur) return; cur = k; setCut(head, faceTex(f, outfit));
    },
    outfit(of) {
      if (of === outfit) return; outfit = of; cur = '';
      legs.forEach((l) => setCut(l.userData.m, TX[of].leg)); setCut(torso, TX[of].torso); if (torsoB) setCut(torsoB, TX[of].torsoB);
      arms.forEach((a, i) => setCut(a.m, TX[of].arm[i]));
    },
    pose() {
      tilt.rotation.set(0, 0, 0); tilt.position.set(0, 0, 0); hip.position.y = spec.hipY; lean.rotation.set(0, 0, 0); neck.rotation.set(0, 0, 0);
      legs.forEach((l) => { l.rotation.set(0, 0, 0); l.scale.y = 1; l.position.y = spec.hipY; }); arms.forEach((a) => { a.piv.rotation.set(0, 0, a.rest); });
    },
  };
  return P;
}


// ================= shared bits =================


// ================= demo cast =================
const SK = '#f3cfa9';
function headPainter(hairCol, hairStyle) {
  return (g, W, H, f) => {
    const s = W * 0.8, cx = W / 2, cy = H * 0.56;
    g.fillStyle = SK_D; g.fillRect(cx - s * 0.1, H * 0.88, s * 0.2, H * 0.12); // neck tab
    for (const sd of [-1, 1]) { g.beginPath(); g.ellipse(cx + sd * s * 0.47, cy + s * 0.05, s * 0.07, s * 0.1, 0, 0, 7); fillInk(g, SK, 5); }
    g.beginPath(); g.ellipse(cx, cy, s * 0.46, s * 0.47, 0, 0, 7); fillInk(g, SK, 7);
    drawFace(g, cx, cy + s * 0.06, s, f);
    // hair cap (one shape per character = readable silhouette)
    g.beginPath();
    if (hairStyle === 'side') { g.moveTo(cx - s * 0.48, cy - s * 0.02); g.quadraticCurveTo(cx - s * 0.52, cy - s * 0.56, cx, cy - s * 0.52); g.quadraticCurveTo(cx + s * 0.5, cy - s * 0.52, cx + s * 0.48, cy - s * 0.05); g.quadraticCurveTo(cx + s * 0.2, cy - s * 0.32, cx - s * 0.2, cy - s * 0.28); g.quadraticCurveTo(cx - s * 0.38, cy - s * 0.22, cx - s * 0.48, cy - s * 0.02); }
    else { for (let k = 0; k < 7; k++) { const a = Math.PI * (1.05 + k * 0.15), r = s * (0.5 + (k % 2) * 0.08); const x = cx + Math.cos(a) * r, y = cy - s * 0.05 + Math.sin(a) * r; k ? g.lineTo(x, y) : g.moveTo(x, y); } g.quadraticCurveTo(cx, cy - s * 0.25, cx - s * 0.47, cy - s * 0.02); }
    g.closePath(); fillInk(g, hairCol, 6);
  };
}
const SK_D = '#d9a982';
const FACES = {
  n: { eyes: 'bean', mouth: 'smile', brow: [-0.1, -0.1] },
  focus: { eyes: 'bean', mouth: 'flat', brow: [0.25, 0.25] },
  strain: { eyes: 'squint', mouth: 'stiff', brow: [0.35, 0.35], sweat: 2 },
  panic: { eyes: 'stare', mouth: 'wobble', brow: [-0.45, -0.45], sweat: 4 },
  wind: { eyes: 'squint', mouth: 'shout', brow: [0.45, 0.45], sweat: 3 },
  stare: { eyes: 'stareS', mouth: 'o', brow: [-0.3, -0.3], sweat: 1 },
  flat: { eyes: 'closed', mouth: 'flat', brow: [0, 0], sweat: 1 },
};
function makeWorker(o) {
  const spec = {
    seed: o.seed, hipY: o.hipY, legX: 0.1,
    leg: { w: 0.17, l: o.hipY, draw(g, W, H) {
      rrect(g, W * 0.14, 4, W * 0.72, H * 0.84, 14); fillInk(g, o.pants, 6);
      g.beginPath(); g.ellipse(W / 2 + 4, H - W * 0.3, W * 0.47, W * 0.26, 0, 0, 7); fillInk(g, '#3a2f2a', 6);
    } },
    torso: { w: o.tw, h: o.th, drop: 0.06, draw(g, W, H) {
      g.beginPath(); g.moveTo(W * 0.2, H * 0.06); g.quadraticCurveTo(W * 0.5, 0, W * 0.8, H * 0.06); g.quadraticCurveTo(W * 0.97, H * 0.12, W * 0.9, H * 0.34); g.lineTo(W * 0.86, H * 0.97); g.lineTo(W * 0.14, H * 0.97); g.lineTo(W * 0.1, H * 0.34); g.quadraticCurveTo(W * 0.03, H * 0.12, W * 0.2, H * 0.06); g.closePath(); fillInk(g, o.shirt, 7);
      if (o.tie) { g.beginPath(); g.moveTo(W * 0.46, H * 0.08); g.lineTo(W * 0.54, H * 0.08); g.lineTo(W * 0.57, H * 0.55); g.lineTo(W * 0.5, H * 0.64); g.lineTo(W * 0.43, H * 0.55); g.closePath(); fillInk(g, o.tie, 4); }
      if (o.badge) { rrect(g, W * 0.6, H * 0.3, W * 0.2, H * 0.16, 6); fillInk(g, '#fffaf0', 4); g.fillStyle = o.badge; g.fillRect(W * 0.62, H * 0.32, W * 0.16, H * 0.04); }
    } },
    arm: { w: 0.14, l: o.al, draw(g, W, H) {
      rrect(g, W * 0.16, 4, W * 0.68, H * 0.8, 16); fillInk(g, o.shirt, 5);
      g.beginPath(); g.ellipse(W / 2, H - W * 0.4, W * 0.34, W * 0.38, 0, 0, 7); fillInk(g, SK, 5);
    } },
    shoulderX: o.tw * 0.42, shoulderY: o.th * 0.84, neckY: o.th * 0.84,
    head: { s: 0.62, hr: 1.0, drop: 0.02, top: 0.6, draw: headPainter(o.hair, o.hairStyle) },
    faces: FACES,
  };
  return rig(spec);
}
// A: tall, blue shirt + tie, side-parted hair
export function makeA() { return makeWorker({ seed: 11, hipY: 0.82, tw: 0.62, th: 0.74, al: 0.62, shirt: '#7fa7d9', pants: '#3e4a66', tie: '#d6453d', hair: '#3a2c26', hairStyle: 'side' }); }
// B: short, orange sweater + ID badge, spiky hair
export function makeB() { return makeWorker({ seed: 23, hipY: 0.6, tw: 0.58, th: 0.64, al: 0.52, shirt: '#f0a04b', pants: '#6b5a48', badge: '#3a7fc1', hair: '#5a3a22', hairStyle: 'spiky' }); }
