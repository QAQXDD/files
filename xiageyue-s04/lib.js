// Shared helpers + paper materials (look adapted from reference_fresnel engine)
import * as THREE from 'three';
export const PAPER='#f6f1e6', PAPER_SH='#d9d0bf', INKS='#2a2622', HER='#fbf8f0', KRAFT='#b9b1a3', KRAFT_FAR='#a39b8d',
  SCARF='#f2c230', SCARF_SH='#d9a514', TAGP='#efe8da', SKY='#5d6470', GLOWC='#eef3ff';
export const SERIF='"LB",Georgia,serif', SERIFI='"LBI",Georgia,serif';
export const CJK='"Noto Serif CJK SC","LB",Georgia,serif';
let seed=7;
export function rseed(s){seed=s;}
export function rnd(a,b){seed=(seed*16807)%2147483647;return a+(seed/2147483647)*(b-a);}
export const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export const ramp=(t,a,b)=>clamp((t-a)/(b-a),0,1);
export function ease(t){t=clamp(t,0,1);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
export function easeOutBack(t,c1=1.5){t=clamp(t,0,1);const c3=c1+1;return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);}
export const sm=x=>{x=clamp(x,0,1);return x*x*(3-2*x);};
export const lerp=(a,b,k)=>a+(b-a)*k;
export function cnv(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
export function noise(g,w,h,amp){const d=g.getImageData(0,0,w,h);for(let i=0;i<d.data.length;i+=4){const n=rnd(-amp,amp);d.data[i]+=n;d.data[i+1]+=n;d.data[i+2]+=n;}g.putImageData(d,0,0);}
export function tex(c,opt={}){const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;if(opt.wrap){t.wrapS=t.wrapT=THREE.RepeatWrapping;}return t;}
export function fc(W,H,fn){const c=cnv(W,H),g=c.getContext('2d');g.lineJoin='round';g.lineCap='round';fn(g,W,H);return c;}
export function deckleRect(g,x0,y0,x1,y1,amp,st=8){const pts=[];for(let x=x0;x<x1;x+=st)pts.push([x,y0+rnd(0,amp)]);for(let y=y0;y<y1;y+=st)pts.push([x1-rnd(0,amp),y]);for(let x=x1;x>x0;x-=st)pts.push([x,y1-rnd(0,amp)]);for(let y=y1;y>y0;y-=st)pts.push([x0+rnd(0,amp),y]);
  g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);g.closePath();}
export function hatchIn(g,pathFn,x0,y0,x1,y1,step,a,ang){g.save();pathFn();g.clip();g.strokeStyle='rgba(42,38,34,'+(a||.4)+')';g.lineWidth=2;const L=(x1-x0)+(y1-y0);
  for(let s=-L;s<L;s+=step){g.beginPath();g.moveTo(x0+s,y1);g.lineTo(x0+s+(y1-y0)*(ang||1),y0);g.stroke();}g.restore();}

// ---- the hatch: reference's three pencil tiers in screen space, but driven by the real lit luminance
// so it works under the spotlight + shadow maps.
export const HATCH={uScale:{value:1},uNight:{value:1},uInkCol:{value:new THREE.Color(0.19,0.17,0.15)}};
const HATCH_DECL=`uniform float uScale;uniform float uNight;uniform vec3 uInkCol;uniform float uInk;uniform float uGrainA;
float hline(float v,float s,float w){float d=abs(mod(v,s)-s*.5);return 1.0-smoothstep(w,w+0.9,d);}
float hh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}`;
const HATCH_CODE=`{vec3 cc=gl_FragColor.rgb;float lum=dot(cc,vec3(0.299,0.587,0.114));
 float sh=lum/max(dot(diffuseColor.rgb,vec3(0.299,0.587,0.114)),0.05);   // how lit this paper is, 0..~1
 vec2 p=gl_FragCoord.xy/uScale;float ink=0.0;
 if(sh<0.62)ink=max(ink,hline(p.x+p.y,6.0,0.35)*0.32);
 if(sh<0.40)ink=max(ink,hline(p.x-p.y,5.0,0.35)*0.42);
 if(sh<0.22)ink=max(ink,hline(p.y,4.0,0.4)*0.5);
 float fade=smoothstep(0.015,0.09,lum);            // in near darkness the pencil disappears with the paper
 cc=mix(cc,uInkCol*min(1.0,lum*2.2),ink*uInk*fade);
 cc*=1.0+(hh(floor(gl_FragCoord.xy))-0.5)*uGrainA; // paper tooth
 gl_FragColor.rgb=cc;}`;
export function hatchify(m,ink=1,grain=0.04){m.onBeforeCompile=sh=>{sh.uniforms.uScale=HATCH.uScale;sh.uniforms.uNight=HATCH.uNight;sh.uniforms.uInkCol=HATCH.uInkCol;sh.uniforms.uInk={value:ink};sh.uniforms.uGrainA={value:grain};
  sh.fragmentShader=sh.fragmentShader.replace('#include <common>','#include <common>\n'+HATCH_DECL).replace('#include <opaque_fragment>','#include <opaque_fragment>\n'+HATCH_CODE);};
  m.customProgramCacheKey=()=>'hatch'+ink+'_'+grain;return m;}
export function paperMat(col,opt={}){const m=new THREE.MeshLambertMaterial({color:col,side:opt.side||THREE.FrontSide,map:opt.map||null,emissive:opt.emissive||0x000000});
  if(opt.map&&opt.alphaTest){m.alphaTest=opt.alphaTest;}
  if(opt.hatch!==false)hatchify(m,opt.ink===undefined?1:opt.ink,opt.grain===undefined?0.05:opt.grain);return m;}
export const edgeMat=new THREE.LineBasicMaterial({color:0x2b2621,transparent:true,opacity:0.92});
export const fineInk=new THREE.LineBasicMaterial({color:0x2b2621,transparent:true,opacity:0.55});
export function sketch(geo,col,thr,opt={}){const g=new THREE.Group();const m=new THREE.Mesh(geo,Array.isArray(col)?col:(col&&col.isMaterial?col:paperMat(col,opt)));m.castShadow=opt.cast!==false;m.receiveShadow=true;g.add(m);
  if(thr!==0){const e=new THREE.LineSegments(new THREE.EdgesGeometry(geo,thr||25),edgeMat);g.add(e);g.userData.edges=e;}g.userData.mesh=m;return g;}
// cut-out card (alpha + matching depth material = true cut-out shadows)
export function cutoutMesh(c,w,h,opt={}){const t=tex(c);const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),paperMat(0xffffff,{map:t,alphaTest:0.5,side:THREE.DoubleSide,emissive:opt.emissive===undefined?0x0e0c0a:opt.emissive,ink:opt.ink===undefined?0.75:opt.ink}));
  m.castShadow=opt.cast!==false;m.receiveShadow=true;m.customDepthMaterial=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:t,alphaTest:0.5});m.userData.tex=t;return m;}
export function standTab(par,x,z,w,h,yaw){const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=yaw||0;par.add(g);h=h||0.32;
  const t=sketch(new THREE.BoxGeometry(w,0.04,h),0xeee7d8,30);t.position.set(0,h*0.5*Math.sin(0.9),-h*0.5*Math.cos(0.9));t.rotation.x=0.9;g.add(t);return g;}
export function rrShape(w,h,r,cx=0,cy=0){const s=new THREE.Shape(),x=cx-w/2,y=cy-h/2;r=Math.min(r,w/2,h/2);s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s;}
export function cardGeo(shape,th=0.06){const g=new THREE.ExtrudeGeometry(shape,{depth:th,bevelEnabled:false,curveSegments:20});g.translate(0,0,-th/2);return g;}
export function glowTex(){const c=cnv(256,256),g=c.getContext('2d'),gr=g.createRadialGradient(128,128,0,128,128,128);
  gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(0.18,'rgba(255,255,255,.7)');gr.addColorStop(0.45,'rgba(255,255,255,.16)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,256,256);return tex(c);}
export const GLOW_TEX=glowTex();
export function glowSprite(col,size,op=1){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:GLOW_TEX,color:col,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,opacity:op,fog:false,toneMapped:false}));s.scale.set(size,size,1);s.renderOrder=20;return s;}
export function cardTex(W,H,bg,fn,amp=4){return fc(W,H,g=>{g.fillStyle='rgba(40,25,10,.22)';deckleRect(g,16,18,W-4,H-4,amp);g.fill();g.fillStyle=bg||'#f6efdf';deckleRect(g,6,6,W-14,H-14,amp);g.fill();g.strokeStyle='rgba(42,38,34,.75)';g.lineWidth=3;g.stroke();if(fn)fn(g,W,H);});}
