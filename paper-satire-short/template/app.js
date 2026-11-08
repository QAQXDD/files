// app.js — player shell: tap to play with sound, replay, audio clock drives picture, test hooks.
// Hooks: window.__seek(t), __frame(t,type,q), __duration, __ready, __t (audio-clock time while playing), __wall, __actx.
// URL: ?test=1 (no UI, for capture) ; ?from=SEC (debug: start playback at SEC) ; ?w=&h= (render size, for covers)
import { init } from './main.js';
import './exporter.js';
const TEST = /[?&]test=1/.test(location.search);
const FROM = parseFloat((location.search.match(/[?&]from=([\d.]+)/) || [])[1] || '0') || 0; // debug: start offset
const cv = document.getElementById('gl');
function fit() { const a = cv.width / cv.height; let w = innerWidth, h = innerHeight, ww = h * a; if (ww > w) { ww = w; h = ww / a; } cv.style.width = ww + 'px'; cv.style.height = h + 'px'; }
addEventListener('resize', fit); fit();
(async () => {
  const S = await init(cv); fit();
  let t = 0, playing = false, ctx = null, buf = null, src = null, t0 = 0, raf = 0, wall0 = 0;
  const btn = document.getElementById('tap');
  S.render(0);
  window.__duration = S.DUR;
  window.__seek = (x) => { playing = false; cancelAnimationFrame(raf); if (src) { try { src.stop(); } catch (e) {} src = null; } t = Math.max(0, Math.min(S.DUR - 1 / 60, +x)); S.render(t); return true; };
  window.__setQuality = (o) => S.setQuality(o); window.__gfx = { maxAniso: S.maxAniso, maxTex: S.maxTex, maxSamples: S.maxSamples };
  window.__showPlay = () => { if (!playing) btn.style.display = 'flex'; };
  window.__frame = (x, type = 'image/jpeg', q = 0.9) => { window.__seek(x); return cv.toDataURL(type, q); };
  window.__ready = true;
  if (TEST) { btn.style.display = 'none'; return; }
  async function decode() {
    if (buf) return buf;
    const b64 = window.__AUDIO.split(',')[1], bin = atob(b64), u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    buf = await new Promise((res, rej) => ctx.decodeAudioData(u8.buffer, res, rej)); return buf;
  }
  let from = 0;
  const now = () => from + ((ctx && src) ? ctx.currentTime - t0 : (performance.now() - wall0) / 1000);
  function loop() {
    if (!playing) return;
    const x = now();
    if (x < 0) { raf = requestAnimationFrame(loop); return; }
    if (x >= S.DUR) { playing = false; S.render(S.DUR - 1 / 60); btn.innerHTML = '<span><svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#2b2520" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.6-5.9"/><path d="M20 3.5v5h-5"/></svg></span>'; btn.classList.add('replay'); btn.style.display = 'flex'; return; }
    window.__t = x; window.__wall = from + (performance.now() - wall0) / 1000; window.__actx = ctx ? ctx.state : 'none'; S.render(x); raf = requestAnimationFrame(loop);
  }
  async function play() {
    if (playing) return;
    btn.style.display = 'none'; from = btn.classList.contains('replay') ? 0 : FROM; btn.classList.remove('replay');
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') await ctx.resume();
      const b = await decode();
      src = ctx.createBufferSource(); src.buffer = b; src.connect(ctx.destination);
      t0 = ctx.currentTime + 0.06; src.start(t0, from);
    } catch (e) { console.warn('audio unavailable', e); src = null; }
    wall0 = performance.now(); playing = true; loop();
  }
  btn.addEventListener('click', play);
  btn.addEventListener('touchend', (e) => { e.preventDefault(); play(); }, { passive: false });
})().catch((e) => { console.error(e); document.body.insertAdjacentHTML('beforeend', '<pre style="color:#fff;position:fixed;top:0;left:0;white-space:pre-wrap">' + String(e && e.stack || e) + '</pre>'); });
