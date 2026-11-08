// set.js — TEMPLATE demo diorama: one paper room in cross-section (floor + back wall + cut side wall showing corrugated
// board), a window, a wall clock, a wall sign (prop text), and a pop-up waste bin whose flaps unfold from the floor.
// Replace everything here per episode. Keep the habits: physical sizes in metres, every surface a paper texture,
// ink outlines on solids, cut edges show cardboard, props that move are built from hinged cards.
import * as THREE from 'three';
import * as L from './lib.js';
const { canvas, tex, paperTex, paperMat, box, inked, cutout, rnd, rseed, INK, fillInk, rrect, corrugTex } = L;
const PI = Math.PI;
export const FONT = '"DFTitle", "PingFang SC", "Microsoft YaHei", sans-serif';

// paper card with centred text (prop text only: signs, labels, screens)
export function textCard(lines, w, h, bg, fg, o = {}) {
  return paperTex(bg, w, h, (g, W, H) => {
    if (o.border) { g.strokeStyle = o.border; g.lineWidth = H * 0.05; rrect(g, H * 0.06, H * 0.06, W - H * 0.12, H - H * 0.12, H * 0.08); g.stroke(); }
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fg;
    lines.forEach(([t, y, s]) => { g.font = `400 ${H * s}px ${FONT}`; g.fillText(t, W / 2, H * y); });
  }, o.ppm || 200, 4);
}

export const ROOM = { w: 7.2, d: 3.2, h: 5.0, backZ: -1.6, sideX: -3.6 };

export function buildSet(scene) {
  const S = {};
  rseed(17);
  // ---- floor: wooden boards drawn on paper
  const floorT = paperTex('#c9a67a', ROOM.w, ROOM.d + 3.6, (g, W, H, ppm) => {
    g.strokeStyle = 'rgba(90,60,30,.45)'; g.lineWidth = 3;
    for (let y = 0; y < H; y += ppm * 0.32) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); for (let x = rnd(0, ppm); x < W; x += ppm * rnd(1.2, 2.2)) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + ppm * 0.32); g.stroke(); } }
  });
  const floor = box(ROOM.w, 0.12, ROOM.d + 3.6, [paperMat('#a8875e'), paperMat('#a8875e'), paperMat(0xffffff, { map: floorT }), paperMat('#a8875e'), paperMat(0xffffff, { map: corrugTex(ROOM.w, 0.12) }), paperMat('#a8875e')]);
  floor.position.set(0, -0.06, ROOM.backZ + (ROOM.d + 3.6) / 2); scene.add(floor);
  // ---- back wall: striped wallpaper + skirting
  const wallT = paperTex('#e8dcc2', ROOM.w, ROOM.h, (g, W, H, ppm) => {
    for (let x = 0; x < W; x += ppm * 0.36) { g.fillStyle = 'rgba(150,170,140,.28)'; g.fillRect(x, 0, ppm * 0.14, H); }
    g.fillStyle = '#9c7a55'; g.fillRect(0, H - ppm * 0.16, W, ppm * 0.16);
  });
  const back = box(ROOM.w, ROOM.h, 0.1, [paperMat('#cbb894'), paperMat('#cbb894'), paperMat(0xffffff, { map: corrugTex(ROOM.w, 0.1) }), paperMat('#cbb894'), paperMat(0xffffff, { map: wallT }), paperMat('#cbb894')]);
  back.position.set(0, ROOM.h / 2, ROOM.backZ - 0.05); scene.add(back);
  // ---- side wall in cross-section: the cut top edge shows corrugated cardboard
  const side = box(0.12, ROOM.h, ROOM.d, [paperMat(0xffffff, { map: wallT }), paperMat('#cbb894'), paperMat(0xffffff, { map: corrugTex(ROOM.d, 0.12) }), paperMat('#cbb894'), paperMat('#cbb894'), paperMat('#cbb894')]);
  side.position.set(ROOM.sideX, ROOM.h / 2, ROOM.backZ + ROOM.d / 2); scene.add(side);
  // ---- window (cut-out hole look: frame card + warm glow behind for bloom)
  const winT = tex(canvas(360, 300, (g, W, H) => {
    const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, '#ffd59a'); gr.addColorStop(1, '#ff9f6b'); g.fillStyle = gr; g.fillRect(20, 20, W - 40, H - 40);
    g.fillStyle = '#e58a5a'; for (let k = 0; k < 5; k++) { const x = 30 + k * 66, h = 60 + (k % 3) * 40; g.fillRect(x, H - 20 - h, 46, h); }
    g.strokeStyle = INK; g.lineWidth = 8; g.strokeRect(20, 20, W - 40, H - 40);
    g.fillStyle = '#f4ecd8'; g.fillRect(W / 2 - 7, 20, 14, H - 40); g.fillRect(20, H / 2 - 7, W - 40, 14); g.lineWidth = 3; g.strokeRect(W / 2 - 7, 20, 14, H - 40); g.strokeRect(20, H / 2 - 7, W - 40, 14);
  }));
  const win = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 1.25), new THREE.MeshBasicMaterial({ map: winT, toneMapped: false, color: new THREE.Color(1.12, 1.08, 1.0) }));
  win.position.set(1.7, 2.45, ROOM.backZ + 0.006); scene.add(win);
  // ---- wall clock: face card + two hand cards (animated in main.js)
  const clockT = tex(canvas(256, 256, (g, W) => {
    g.beginPath(); g.arc(W / 2, W / 2, W * 0.46, 0, 7); fillInk(g, '#fffaf0', 10);
    g.strokeStyle = INK; for (let k = 0; k < 12; k++) { const a = k * PI / 6; g.lineWidth = k % 3 ? 4 : 9; g.beginPath(); g.moveTo(W / 2 + Math.cos(a) * W * 0.36, W / 2 + Math.sin(a) * W * 0.36); g.lineTo(W / 2 + Math.cos(a) * W * 0.42, W / 2 + Math.sin(a) * W * 0.42); g.stroke(); }
  }));
  S.clock = new THREE.Group(); S.clock.position.set(-0.9, 3.0, ROOM.backZ + 0.02); scene.add(S.clock);
  const cf = cutout(clockT, 0.6, 0.6); S.clock.add(cf);
  const handT = tex(canvas(32, 128, (g, W, H) => { rrect(g, 8, 4, W - 16, H - 8, 6); fillInk(g, '#2b2520', 2); }));
  S.hourHand = cutout(handT, 0.035, 0.17); S.hourHand.geometry.translate(0, 0.07, 0); S.hourHand.position.z = 0.01; S.clock.add(S.hourHand);
  S.minHand = cutout(handT, 0.025, 0.25); S.minHand.geometry.translate(0, 0.11, 0); S.minHand.position.z = 0.015; S.clock.add(S.minHand);
  // ---- wall sign: the only on-screen text is a PROP (no captions, no title card)
  const sign = cutout(textCard([['示例 DEMO', 0.52, 0.5]], 1.2, 0.36, '#f6e7b8', '#7a2f22', { border: '#7a2f22' }), 1.2, 0.36);
  sign.position.set(-0.1, 2.35, ROOM.backZ + 0.03); sign.rotation.z = 0.03; scene.add(sign);
  // ---- desk (simple box furniture with ink edges)
  const desk = new THREE.Group(); desk.position.set(-2.55, 0, -0.85); scene.add(desk);
  const top = box(1.3, 0.08, 0.7, '#b98b5e'); top.position.y = 0.74; desk.add(top);
  for (const [x, z] of [[-0.58, -0.28], [0.58, -0.28], [-0.58, 0.28], [0.58, 0.28]]) { const l = box(0.07, 0.72, 0.07, '#8e6a46'); l.position.set(x, 0.36, z); desk.add(l); }
  const paper = box(0.42, 0.18, 0.3, '#f4f0e6'); paper.position.set(0.25, 0.87, 0); desk.add(paper);

  // ---- POP-UP waste bin: four side flaps hinged at the floor, a base, a rim. pop(k) unfolds it (0 = flat, 1 = standing)
  const BIN = { x: 2.1, z: 0.25, w: 0.56, h: 0.62 }; // main.js BIN must match
  const binG = new THREE.Group(); binG.position.set(BIN.x, 0.005, BIN.z); scene.add(binG);
  const flapT = tex(canvas(200, 220, (g, W, H) => { g.fillStyle = '#5f8f7a'; g.fillRect(0, 0, W, H); g.strokeStyle = 'rgba(30,50,40,.45)'; g.lineWidth = 4; for (let x = 18; x < W; x += 26) { g.beginPath(); g.moveTo(x, 10); g.lineTo(x, H - 10); g.stroke(); } g.strokeStyle = INK; g.lineWidth = 8; g.strokeRect(2, 2, W - 4, H - 4); }));
  const base = box(BIN.w, 0.012, BIN.w, '#4f7a66'); binG.add(base);
  const flaps = [];
  for (let k = 0; k < 4; k++) {
    const hinge = new THREE.Group(); hinge.rotation.y = k * PI / 2; binG.add(hinge);
    const arm = new THREE.Group(); arm.position.z = BIN.w / 2; hinge.add(arm); // hinge line on the floor
    const f = cutout(flapT, BIN.w, BIN.h); f.geometry.translate(0, BIN.h / 2, 0); arm.add(f);
    flaps.push(arm);
  }
  const rim = new THREE.Mesh(new THREE.TorusGeometry(BIN.w * 0.72, 0.018, 6, 4), paperMat('#3f6a57')); rim.rotation.set(PI / 2, 0, PI / 4); binG.add(rim);
  S.bin = { g: binG, flaps, rim, ...BIN };
  S.popBin = (k, wob = 0) => {
    // staggered flaps (book-like), slight overshoot, rim appears when all walls are up
    flaps.forEach((a, i) => { const kk = L.easeOutBack(L.clamp(k * 1.25 - i * 0.08, 0, 1), 1.6); a.rotation.x = (1 - kk) * PI / 2 + wob * Math.sin(i * 1.7); });
    rim.visible = k > 0.85; rim.position.y = BIN.h; rim.scale.setScalar(L.clamp((k - 0.85) / 0.15, 0.01, 1));
  };
  S.popBin(0);
  return S;
}
