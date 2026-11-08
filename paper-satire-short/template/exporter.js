// exporter.js — in-page "导出 MP4 / Export MP4": deterministic offline render -> WebCodecs (H.264 + AAC) -> MP4 (mp4-muxer, MIT, inlined).
// Needs from app.js: window.__seek(t), __duration, __AUDIO, __setQuality(o|null), __gfx, __showPlay(); canvas #gl.
// Language comes from <html lang>; the download file name from <meta name="export-name"> (set by build.py from project.json).
import { Muxer, ArrayBufferTarget } from 'mp4-muxer';

const ZH = (document.documentElement.lang || '').startsWith('zh');
const BASE = (document.querySelector('meta[name="export-name"]') || {}).content || 'paper_short';
const L = ZH ? {
  btn: '导出 MP4', title: '导出 MP4 视频', res: '分辨率', fps: '帧率', q: '画质', qs: ['标准', '高（加强画质）', '极高'],
  go: '开始导出', cancel: '取消', close: '关闭', prep: '准备中…', enc: '渲染中', fin: '封装中…', done: '完成，已开始下载。没自动下载的话点下面保存。',
  save: '保存视频', again: '再导出一次', cancelled: '已取消', eta: '剩余约', noenc: '这个浏览器不支持视频编码，请用新版桌面 Chrome 或 Edge 打开。',
  nores: '这个分辨率编不了，请换低一档分辨率。', opus: '注意：浏览器不支持 AAC 编码，音轨用 Opus（MP4 内）。部分播放器可能不认。', noaud: '注意：音频编码不可用，导出的视频没有声音。',
  vp9: '注意：浏览器不支持 H.264 编码，改用 VP9（MP4 内）。', hidden: '页面在后台，渲染会变慢。请把这个标签页留在前台。',
  tip: '逐帧离线渲染，不掉帧、画面和播放完全一致；导出时请把这个标签页留在前台。高画质下 4K 会比较慢。', memerr: '显存不够，请降低分辨率或画质再试。'
} : {
  btn: 'Export MP4', title: 'Export MP4 video', res: 'Resolution', fps: 'Frame rate', q: 'Quality', qs: ['Standard', 'High (enhanced)', 'Ultra'],
  go: 'Start export', cancel: 'Cancel', close: 'Close', prep: 'Preparing…', enc: 'Rendering', fin: 'Finalizing…', done: 'Done. The download has started; if not, save it below.',
  save: 'Save video', again: 'Export again', cancelled: 'Cancelled', eta: 'about', noenc: 'This browser cannot encode video. Open the file in a recent desktop Chrome or Edge.',
  nores: 'Cannot encode at this resolution. Pick a lower one.', opus: 'Note: this browser cannot encode AAC, so the audio track is Opus (in MP4). Some players may not support it.', noaud: 'Note: no audio encoder available; the video will be silent.',
  vp9: 'Note: this browser cannot encode H.264, using VP9 (in MP4) instead.', hidden: 'This tab is in the background, rendering slows down. Keep it in front.',
  tip: 'Rendered offline frame by frame: no dropped frames, identical to playback. Keep this tab in front while exporting. 4K at high quality takes a while.', memerr: 'Out of GPU memory. Lower the resolution or quality and try again.'
};

// ---------------------------------------------------------------- helpers
const yieldUI = () => new Promise((r) => { const ch = new MessageChannel(); ch.port1.onmessage = () => r(); ch.port2.postMessage(0); }); // not throttled like setTimeout
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// H.264 level from macroblocks/frame and macroblocks/s (Table A-1)
function avcLevel(w, h, fps) {
  const fs = Math.ceil(w / 16) * Math.ceil(h / 16), mbps = fs * fps;
  const T = [[0x28, 8192, 245760], [0x2a, 8704, 522240], [0x32, 22080, 589824], [0x33, 36864, 983040], [0x34, 36864, 2073600], [0x3c, 139264, 4177920], [0x3d, 139264, 8355840], [0x3e, 139264, 16711680]];
  for (const [l, f, m] of T) if (fs <= f && mbps <= m) return l;
  return 0x3e;
}
const hex = (n) => n.toString(16).padStart(2, '0');
function videoBitrate(oh, fps) { // ~20 Mbps for 1080x1920@60
  const [b30, b60] = oh <= 1920 ? [18e6, 20e6] : oh <= 2560 ? [28e6, 34e6] : [50e6, 64e6];
  return fps >= 50 ? b60 : b30;
}
async function pickVideo(w, h, fps, bitrate) {
  const lv = hex(avcLevel(w, h, fps));
  const tries = [['avc', 'avc1.6400' + lv, 'High'], ['avc', 'avc1.4d00' + lv, 'Main'], ['avc', 'avc1.4200' + lv, 'Baseline'],
    ['vp9', 'vp09.00.' + (h * w * fps > 2.3e8 ? '51' : '41') + '.08', 'VP9']];
  for (const [mux, codec, prof] of tries) {
    const cfg = { codec, width: w, height: h, bitrate, framerate: fps, bitrateMode: 'variable', latencyMode: 'quality' };
    if (mux === 'avc') cfg.avc = { format: 'avc' };
    try { const s = await VideoEncoder.isConfigSupported(cfg); if (s.supported) return { mux, cfg, prof }; } catch (e) {}
    try { const c2 = { ...cfg }; delete c2.bitrateMode; const s = await VideoEncoder.isConfigSupported(c2); if (s.supported) return { mux, cfg: c2, prof }; } catch (e) {}
  }
  return null;
}
async function pickAudio() {
  if (!('AudioEncoder' in window)) return null;
  for (const [mux, codec, br] of [['aac', 'mp4a.40.2', 320000], ['aac', 'mp4a.40.2', 256000], ['aac', 'mp4a.40.2', 192000], ['opus', 'opus', 256000], ['opus', 'opus', 192000]]) {
    const cfg = { codec, sampleRate: 48000, numberOfChannels: 2, bitrate: br };
    try { const s = await AudioEncoder.isConfigSupported(cfg); if (s.supported) return { mux, cfg }; } catch (e) {}
  }
  return null;
}
async function decodeAudio(dur) {
  const b64 = window.__AUDIO.split(',')[1]; if (!b64) return null;
  const bin = atob(b64), u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  // OfflineAudioContext at 48 kHz: decodeAudioData resamples to the context rate (same decoder as playback, so sync matches)
  const oc = new OfflineAudioContext(2, Math.max(1, Math.ceil(dur * 48000)), 48000);
  return await oc.decodeAudioData(u8.buffer);
}

// quality presets: ss = supersample factor (render size / output size), cap = max internal height
const PRESET = [
  { ss: 1, cap: 99999, samples: 4, shadow: 2048, aniso: false }, // 标准: exactly the playback pipeline at output size
  { ss: 2, cap: 3840, samples: 4, shadow: 4096, aniso: true },   // 高
  { ss: 2, cap: 5120, samples: 8, shadow: 4096, aniso: true },   // 极高
];

// ---------------------------------------------------------------- core export (also a test hook: window.__exportMP4)
async function exportMP4(opt, onP = () => {}, isCancel = () => false, onNote = () => {}) {
  if (!('VideoEncoder' in window) || !('VideoFrame' in window)) throw new Error(L.noenc);
  const fps = opt.fps || 60, OH = opt.h || 1920, OW = Math.round(OH * 9 / 16 / 2) * 2;
  const P = PRESET[opt.q == null ? 1 : opt.q], gfx = window.__gfx || { maxTex: 4096, maxSamples: 4, maxAniso: 1 };
  const DUR = Math.min(window.__duration, opt.maxDur || 1e9);
  let ih = Math.min(OH * P.ss, Math.max(OH, P.cap), gfx.maxTex); ih = Math.max(OH, Math.round(ih / 2) * 2);
  const iw = Math.round(ih * 9 / 16 / 2) * 2;
  const bitrate = opt.bitrate || videoBitrate(OH, fps);
  const V = await pickVideo(OW, OH, fps, bitrate);
  if (!V) throw new Error(L.nores);
  if (V.mux === 'vp9') onNote(L.vp9);
  const A = await pickAudio();
  if (!A) onNote(L.noaud); else if (A.mux === 'opus') onNote(L.opus);
  let abuf = null;
  if (A) { try { abuf = await decodeAudio(DUR); } catch (e) { console.warn('audio decode failed', e); } }

  const target = new ArrayBufferTarget();
  const muxer = new Muxer({
    target, fastStart: 'in-memory', firstTimestampBehavior: 'offset',
    video: { codec: V.mux, width: OW, height: OH, frameRate: fps },
    audio: A && abuf ? { codec: A.mux, numberOfChannels: 2, sampleRate: 48000 } : undefined,
  });
  let encErr = null;
  const venc = new VideoEncoder({ output: (c, m) => muxer.addVideoChunk(c, m), error: (e) => { encErr = e; } });
  venc.configure(V.cfg);

  // ---- audio first (fast): decoded mastered mix -> AAC 48 kHz stereo
  if (A && abuf) {
    const aenc = new AudioEncoder({ output: (c, m) => muxer.addAudioChunk(c, m), error: (e) => { encErr = e; } });
    aenc.configure(A.cfg);
    const n = Math.min(abuf.length, Math.round(DUR * 48000)), ch0 = abuf.getChannelData(0), ch1 = abuf.numberOfChannels > 1 ? abuf.getChannelData(1) : ch0;
    const CH = 4800;
    for (let i = 0; i < n; i += CH) {
      const k = Math.min(CH, n - i), d = new Float32Array(k * 2);
      d.set(ch0.subarray(i, i + k), 0); d.set(ch1.subarray(i, i + k), k);
      const ad = new AudioData({ format: 'f32-planar', sampleRate: 48000, numberOfFrames: k, numberOfChannels: 2, timestamp: Math.round(i * 1e6 / 48000), data: d });
      aenc.encode(ad); ad.close();
      if (aenc.encodeQueueSize > 16) await sleep(1);
    }
    await aenc.flush(); aenc.close();
  }

  // ---- video: switch the renderer to export quality
  const gl = document.getElementById('gl');
  const cv = document.createElement('canvas'); cv.width = OW; cv.height = OH;
  const cx = cv.getContext('2d', { alpha: false }); cx.imageSmoothingEnabled = true; cx.imageSmoothingQuality = 'high';
  const N = Math.max(1, Math.round(DUR * fps)), kf = Math.max(1, Math.round(fps)); // keyframe every 1 s
  let ok = false;
  window.__exporting = true;
  try {
    window.__seek(0);
    window.__setQuality({ w: iw, h: ih, outW: OW, outH: OH, shadow: Math.min(P.shadow, gfx.maxTex), samples: Math.min(iw * ih > 9e6 ? 4 : P.samples, gfx.maxSamples || 4), aniso: P.aniso ? gfx.maxAniso : null });
    const t0 = performance.now();
    for (let f = 0; f < N; f++) {
      if (isCancel()) { try { venc.close(); } catch (e) {} return null; }
      if (encErr) throw encErr;
      window.__seek(f / fps);
      const glc = gl.getContext('webgl2'); if (glc && glc.isContextLost()) throw new Error(L.memerr);
      let frame;
      const ts = Math.round(f * 1e6 / fps), du = Math.round((f + 1) * 1e6 / fps) - ts;
      if (iw === OW && ih === OH) frame = new VideoFrame(gl, { timestamp: ts, duration: du, alpha: 'discard' });
      else { cx.drawImage(gl, 0, 0, iw, ih, 0, 0, OW, OH); frame = new VideoFrame(cv, { timestamp: ts, duration: du, alpha: 'discard' }); }
      venc.encode(frame, { keyFrame: f % kf === 0 }); frame.close();
      while (venc.encodeQueueSize > 3) await sleep(2);
      if (f % 3 === 0 || f === N - 1) { const el = (performance.now() - t0) / 1000; onP((f + 1) / N, el / (f + 1) * (N - f - 1)); await yieldUI(); }
    }
    onP(1, 0, true);
    await venc.flush(); venc.close();
    if (encErr) throw encErr;
    muxer.finalize();
    ok = true;
  } finally {
    window.__exporting = false;
    window.__setQuality(null); window.__seek(0);
    if (!ok) { try { venc.close(); } catch (e) {} }
  }
  const name = `${BASE}_${OW}x${OH}_${fps}fps.mp4`;
  return { blob: new Blob([target.buffer], { type: 'video/mp4' }), name, info: { video: V.cfg.codec, profile: V.prof, audio: A && abuf ? A.cfg.codec + '@' + A.cfg.bitrate : 'none', render: iw + 'x' + ih, out: OW + 'x' + OH, fps, bitrate, frames: N } };
}
window.__exportMP4 = exportMP4;

// ---------------------------------------------------------------- UI (not in ?test=1; never drawn into frames — frames come from the WebGL canvas only)
if (!/[?&]test=1/.test(location.search) && 'VideoEncoder' in window) {
  const css = document.createElement('style');
  css.textContent = `
#xbtn{position:fixed;right:14px;top:14px;z-index:20;font:600 14px/1 -apple-system,system-ui,"PingFang SC","Microsoft YaHei",sans-serif;color:#f4ecd8;background:rgba(43,37,32,.82);border:2px solid #f4ecd8;border-radius:20px;padding:10px 14px;cursor:pointer;user-select:none}
#xpan{position:fixed;inset:0;z-index:30;display:none;align-items:center;justify-content:center;background:rgba(10,8,6,.62);font:15px/1.45 -apple-system,system-ui,"PingFang SC","Microsoft YaHei",sans-serif;color:#2b2520}
#xpan .c{background:#f4ecd8;border:3px solid #2b2520;border-radius:10px;padding:20px 22px;width:min(360px,88vw);box-shadow:6px 6px 0 rgba(0,0,0,.35)}
#xpan h3{margin:0 0 12px;font-size:19px}
#xpan .row{display:flex;gap:8px;align-items:center;margin:9px 0}
#xpan .row b{flex:none;min-width:78px;font-weight:600;white-space:nowrap}
#xpan select{flex:1;font-size:15px;padding:6px;border:2px solid #2b2520;border-radius:6px;background:#fff;color:#2b2520}
#xpan button,#xpan a.b{display:inline-block;font-weight:600;font-size:15px;line-height:1;font-family:inherit;padding:11px 14px;border:2px solid #2b2520;border-radius:8px;background:#2b2520;color:#f4ecd8;cursor:pointer;text-decoration:none;margin:8px 6px 0 0}
#xpan button.g{background:transparent;color:#2b2520}
#xpan .bar{height:12px;border:2px solid #2b2520;border-radius:6px;margin:12px 0 6px;overflow:hidden;background:#fff}
#xpan .bar i{display:block;height:100%;width:0;background:#d6242f}
#xpan small{display:block;opacity:.72;font-size:13px}
#xpan #xnote{color:#a0281f;font-size:13px}`;
  document.head.appendChild(css);
  const btn = document.createElement('div'); btn.id = 'xbtn'; btn.textContent = L.btn; document.body.appendChild(btn);
  const pan = document.createElement('div'); pan.id = 'xpan';
  pan.innerHTML = `<div class="c"><h3>${L.title}</h3>
<div class="row"><b>${L.res}</b><select id="xres"><option value="1920" selected>1080 × 1920</option><option value="2560">1440 × 2560</option><option value="3840">2160 × 3840 (4K)</option></select></div>
<div class="row"><b>${L.fps}</b><select id="xfps"><option value="60" selected>60 fps</option><option value="30">30 fps</option></select></div>
<div class="row"><b>${L.q}</b><select id="xq"><option value="0">${L.qs[0]}</option><option value="1" selected>${L.qs[1]}</option><option value="2">${L.qs[2]}</option></select></div>
<small>${L.tip}</small>
<div class="bar"><i id="xbar"></i></div><div id="xmsg">&nbsp;</div><div id="xnote"></div>
<div id="xact"><button id="xgo">${L.go}</button><button class="g" id="xclose">${L.close}</button></div></div>`;
  document.body.appendChild(pan);
  const $ = (id) => document.getElementById(id);
  // the button only shows while the play/replay overlay is up, so it never sits over the film during playback
  const tap = document.getElementById('tap');
  const sync = () => { btn.style.display = (!tap || tap.style.display !== 'none') && pan.style.display !== 'flex' ? '' : 'none'; };
  if (tap) new MutationObserver(sync).observe(tap, { attributes: true, attributeFilter: ['style'] });
  sync();
  let busy = false, cancel = false, url = null;
  const stop = (e) => e.stopPropagation();
  ['click', 'touchend', 'pointerdown'].forEach((ev) => { btn.addEventListener(ev, stop); pan.addEventListener(ev, stop); });
  btn.addEventListener('click', () => { pan.style.display = 'flex'; sync(); });
  pan.addEventListener('click', (e) => {
    const id = e.target.id;
    if (id === 'xclose') { if (busy) cancel = true; else { pan.style.display = 'none'; sync(); } }
    if (id === 'xgo' && !busy) run();
  });
  document.addEventListener('visibilitychange', () => { if (busy && document.hidden) $('xnote').textContent = L.hidden; });
  const fmt = (s) => { s = Math.max(0, Math.round(s)); const m = Math.floor(s / 60); return m ? `${m}:${String(s % 60).padStart(2, '0')}` : `${s}s`; };
  async function run() {
    busy = true; cancel = false;
    ['xres', 'xfps', 'xq'].forEach((i) => ($(i).disabled = true));
    $('xact').innerHTML = `<button class="g" id="xclose">${L.cancel}</button>`;
    $('xmsg').textContent = L.prep; $('xnote').textContent = ''; $('xbar').style.width = '0';
    try {
      const r = await exportMP4({ h: +$('xres').value, fps: +$('xfps').value, q: +$('xq').value }, (p, eta, fin) => {
        $('xbar').style.width = (p * 100).toFixed(1) + '%';
        $('xmsg').textContent = fin ? L.fin : `${L.enc} ${(p * 100).toFixed(0)}% · ${L.eta} ${fmt(eta)}`;
      }, () => cancel, (n) => { $('xnote').textContent += n + ' '; });
      if (!r) { $('xmsg').textContent = L.cancelled; $('xbar').style.width = '0'; }
      else {
        if (url) URL.revokeObjectURL(url);
        url = URL.createObjectURL(r.blob);
        const a = document.createElement('a'); a.href = url; a.download = r.name; document.body.appendChild(a); a.click(); a.remove();
        $('xmsg').textContent = `${L.done} (${r.name}, ${(r.blob.size / 1048576).toFixed(1)} MB)`;
      }
      $('xact').innerHTML = (r ? `<a class="b" href="${url}" download="${r.name}">${L.save}</a>` : '') + `<button class="g" id="xgo">${r ? L.again : L.go}</button><button class="g" id="xclose">${L.close}</button>`;
    } catch (err) {
      console.error(err);
      const msg = String(err && err.message || err);
      $('xmsg').textContent = /memory|context|allocation/i.test(msg) ? L.memerr : msg;
      $('xact').innerHTML = `<button id="xgo">${L.go}</button><button class="g" id="xclose">${L.close}</button>`;
    } finally {
      busy = false; ['xres', 'xfps', 'xq'].forEach((i) => ($(i).disabled = false));
      if (window.__showPlay) window.__showPlay();
      sync();
    }
  }
}
