// Paper split-pin stick figures
import * as THREE from 'three';
import {paperMat,cardGeo,rrShape,edgeMat,fc,tex,INKS,HER,KRAFT,KRAFT_FAR,SCARF,SCARF_SH,rnd,glowSprite,GLOWC,standTab} from './lib.js';

// ---- face layers (swappable cut-out textures) ----
const FS=192;
function layer(fn){return tex(fc(FS,FS,(g)=>{g.strokeStyle=INKS;g.fillStyle=INKS;g.lineCap='round';fn(g,FS/2,FS/2,FS*0.44);}));}
const EX=0.37,EY=-0.02;
export const EYES={
  dot:layer((g,x,y,r)=>{[-1,1].forEach(s=>{g.beginPath();g.arc(x+s*r*EX,y+r*EY,r*0.1,0,7);g.fill();});}),
  wide:layer((g,x,y,r)=>{g.lineWidth=5;[-1,1].forEach(s=>{g.beginPath();g.arc(x+s*r*EX,y+r*EY,r*0.19,0,7);g.fillStyle='#fbf8f0';g.fill();g.stroke();g.fillStyle=INKS;g.beginPath();g.arc(x+s*r*EX,y+r*EY,r*0.075,0,7);g.fill();});}),
  closed:layer((g,x,y,r)=>{g.lineWidth=5;[-1,1].forEach(s=>{g.beginPath();g.arc(x+s*r*EX,y+r*EY-r*0.05,r*0.13,0.2,Math.PI-0.2);g.stroke();});}),
  sideL:layer((g,x,y,r)=>{[-1,1].forEach(s=>{g.beginPath();g.arc(x+s*r*EX-r*0.12,y+r*EY,r*0.1,0,7);g.fill();});}),
  sideR:layer((g,x,y,r)=>{[-1,1].forEach(s=>{g.beginPath();g.arc(x+s*r*EX+r*0.12,y+r*EY,r*0.1,0,7);g.fill();});}),
};
export const BROWS={
  none:layer(()=>{}),
  neutral:layer((g,x,y,r)=>{g.lineWidth=5;[-1,1].forEach(s=>{g.beginPath();g.moveTo(x+s*r*0.2,y-r*0.3);g.lineTo(x+s*r*0.55,y-r*0.3);g.stroke();});}),
  worried:layer((g,x,y,r)=>{g.lineWidth=5.5;[-1,1].forEach(s=>{g.beginPath();g.moveTo(x+s*r*0.16,y-r*0.42);g.lineTo(x+s*r*0.56,y-r*0.28);g.stroke();});}),
  raised:layer((g,x,y,r)=>{g.lineWidth=5;[-1,1].forEach(s=>{g.beginPath();g.arc(x+s*r*EX,y-r*0.28,r*0.2,Math.PI*1.15,Math.PI*1.85);g.stroke();});}),
  flat:layer((g,x,y,r)=>{g.lineWidth=6;[-1,1].forEach(s=>{g.beginPath();g.moveTo(x+s*r*0.18,y-r*0.26);g.lineTo(x+s*r*0.58,y-r*0.26);g.stroke();});}),
};
export const MOUTH={
  none:layer(()=>{}),
  line:layer((g,x,y,r)=>{g.lineWidth=5;g.beginPath();g.moveTo(x-r*0.16,y+r*0.42);g.lineTo(x+r*0.16,y+r*0.42);g.stroke();}),
  o:layer((g,x,y,r)=>{g.lineWidth=5;g.beginPath();g.ellipse(x,y+r*0.45,r*0.1,r*0.13,0,0,7);g.stroke();}),
};
function faceMat(t){const m=new THREE.MeshLambertMaterial({map:t,alphaTest:0.5,transparent:false,side:THREE.FrontSide});return m;}

const BRAD=new THREE.MeshLambertMaterial({color:0x8d877d});
const BRAD_RIM=new THREE.MeshLambertMaterial({color:0x4a453f});
const bradGeo=new THREE.CylinderGeometry(0.11,0.11,0.05,14);bradGeo.rotateX(Math.PI/2);
const bradRimGeo=new THREE.TorusGeometry(0.11,0.02,5,14);
function brad(par,x,y,z){const b=new THREE.Mesh(bradGeo,BRAD);b.position.set(x,y,z);par.add(b);const r=new THREE.Mesh(bradRimGeo,BRAD_RIM);r.position.set(x,y,z+0.026);par.add(r);return b;}

const geoCache={};
function stripGeo(w,L){const k=w+'_'+L;if(!geoCache[k]){geoCache[k]=cardGeo(rrShape(w,L+w,w/2,0,-L/2),0.06);}return geoCache[k];}
const matCache={};
function cardMats(col){if(!matCache[col]){const c=new THREE.Color(col);const edge=c.clone().multiplyScalar(0.78);matCache[col]=[paperMat(col,{side:THREE.DoubleSide,ink:0.8}),paperMat(edge.getHex(),{ink:0.5})];}return matCache[col];}
function strip(par,w,L,col,x,y,z){const g=new THREE.Group();g.position.set(x,y,z);par.add(g);const m=new THREE.Mesh(stripGeo(w,L),cardMats(col));m.castShadow=true;m.receiveShadow=true;g.add(m);
  // ink outline: front-face edge
  const e=new THREE.LineSegments(new THREE.EdgesGeometry(stripGeo(w,L),40),edgeMat);g.add(e);return g;}

// head card shape (optionally dog-eared)
function headShape(R,dog){const s=new THREE.Shape();if(!dog){s.absarc(0,0,R,0,Math.PI*2,false);return s;}
  const a0=Math.PI*0.18,a1=Math.PI*0.47;s.moveTo(R*Math.cos(a1),R*Math.sin(a1));s.absarc(0,0,R,a1,a0+Math.PI*2,false);s.lineTo(R*Math.cos(a1),R*Math.sin(a1));return s;}

/* makeFigure: 7 cm tall card figure. Local +z = the face side. Root at feet; tipper hinge at the ankles. */
export function makeFigure(o={}){
  const col=o.color||KRAFT, R=1.35*1.0;
  const root=new THREE.Group();const tipper=new THREE.Group();tipper.position.y=0.2;root.add(tipper);
  const body=new THREE.Group();tipper.add(body);
  // stand tab base (stays on the ground)
  const base=new THREE.Mesh(new THREE.BoxGeometry(1.5,0.04,0.9),cardMats(col)[1]);base.position.set(0,0.02,-0.3);base.receiveShadow=true;root.add(base);
  const be=new THREE.LineSegments(new THREE.EdgesGeometry(base.geometry),edgeMat);be.position.copy(base.position);root.add(be);
  // legs (behind torso)
  const hipY=2.4, sx=0.16;
  const thighL=strip(body,0.3,1.2,col,-sx,hipY,-0.07), thighR=strip(body,0.3,1.2,col,sx,hipY,-0.07);
  const shinL=strip(thighL,0.28,1.2,col,0,-1.2,-0.065), shinR=strip(thighR,0.28,1.2,col,0,-1.2,-0.065);
  // torso
  const torso=strip(body,0.46,1.95,col,0,4.3,0);
  // arms: upper + forearm, in front
  const shY=4.0, ax=0.2;
  const armL=strip(body,0.27,1.05,col,-ax,shY,0.07), armR=strip(body,0.27,1.05,col,ax,shY,0.07);
  const foreL=strip(armL,0.25,1.0,col,0,-1.05,0.065), foreR=strip(armR,0.25,1.0,col,0,-1.05,0.065);
  // head
  const head=new THREE.Group();head.position.set(0,5.62,0.0);body.add(head);
  const hg=cardGeo(headShape(R,o.dog),0.07);
  const hm=new THREE.Mesh(hg,o.mirror?cardMats(0xcfd0cc):cardMats(col));hm.castShadow=true;hm.receiveShadow=true;head.add(hm);
  head.add(new THREE.LineSegments(new THREE.EdgesGeometry(hg,40),edgeMat));
  if(o.dog){// folded-over corner flap: a triangle folded forward along the chord
    const a0=Math.PI*0.18,a1=Math.PI*0.47;const p0=new THREE.Vector2(R*Math.cos(a0),R*Math.sin(a0)),p1=new THREE.Vector2(R*Math.cos(a1),R*Math.sin(a1));
    const mid=p0.clone().add(p1).multiplyScalar(0.5);const tri=new THREE.Shape();const tip=mid.clone().multiplyScalar(-0.06).add(new THREE.Vector2(0,0));
    // flap: triangle (p0,p1,tipPoint) where tip is the mirror of the cut-off arc point across the chord, folded down onto the face
    const apex=new THREE.Vector2(R*Math.cos((a0+a1)/2),R*Math.sin((a0+a1)/2));const dir=p1.clone().sub(p0).normalize();const n=new THREE.Vector2(-dir.y,dir.x);
    const d=apex.clone().sub(mid).dot(n);const ref=apex.clone().sub(n.clone().multiplyScalar(2*d));
    tri.moveTo(p0.x,p0.y);tri.lineTo(p1.x,p1.y);tri.lineTo(ref.x,ref.y);tri.closePath();
    const fg=new THREE.ShapeGeometry(tri);const flap=new THREE.Mesh(fg,paperMat(new THREE.Color(col).multiplyScalar(0.86).getHex(),{side:THREE.DoubleSide,ink:0.6}));flap.position.z=0.075;flap.castShadow=true;head.add(flap);
    const fl=new THREE.LineSegments(new THREE.EdgesGeometry(fg),edgeMat);fl.position.z=0.08;head.add(fl);
    // and the same flap visible from behind (as a darker notch edge) – the back side shows the folded triangle too
    const flapB=new THREE.Mesh(fg,flap.material);flapB.position.z=-0.075;head.add(flapB);const flb=fl.clone();flb.position.z=-0.08;head.add(flb);
  }
  // face layers
  const face={};
  if(!o.mirror){const pg=new THREE.PlaneGeometry(2*R*FS/(FS*0.88),2*R*FS/(FS*0.88));
    face.eyes=new THREE.Mesh(pg,faceMat(EYES[o.eyes||'dot']));face.eyes.position.z=0.04;head.add(face.eyes);
    face.brows=new THREE.Mesh(pg,faceMat(BROWS[o.brows||'none']));face.brows.position.z=0.042;head.add(face.brows);
    face.mouth=new THREE.Mesh(pg,faceMat(MOUTH[o.mouth||'none']));face.mouth.position.z=0.044;head.add(face.mouth);}
  // brads
  brad(body,-ax,shY,0.12);brad(body,ax,shY,0.12);brad(armL,0,-1.05,0.1);brad(armR,0,-1.05,0.1);
  brad(body,-sx,hipY,0.05);brad(body,sx,hipY,0.05);brad(thighL,0,-1.2,0.045);brad(thighR,0,-1.2,0.045);
  brad(body,0,4.3,0.05);
  // stand tab behind feet (paper prop strut)
  const tab=standTab(root,0,-0.06,0.5,0.9);
  const F={root,tipper,body,head,torso,armL,armR,foreL,foreR,thighL,thighR,shinL,shinR,face,R,col,tab,base,cur:{}};
  if(o.scarf)addScarf(F);
  F.setFace=(e,b,m)=>{if(!F.face.eyes)return;if(e&&F.cur.e!==e){F.face.eyes.material.map=EYES[e];F.face.eyes.material.needsUpdate=true;F.cur.e=e;}
    if(b&&F.cur.b!==b){F.face.brows.material.map=BROWS[b];F.face.brows.material.needsUpdate=true;F.cur.b=b;}
    if(m&&F.cur.m!==m){F.face.mouth.material.map=MOUTH[m];F.face.mouth.material.needsUpdate=true;F.cur.m=m;}};
  return F;
}
// pose: angles in radians, z-rotation in card plane. Positive arm angle swings hand toward +x.
export function pose(F,p){const d=(k,v)=>p[k]===undefined?v:p[k];
  F.armL.rotation.z=d('aL',-0.18);F.foreL.rotation.z=d('fL',0.05);F.armR.rotation.z=d('aR',0.18);F.foreR.rotation.z=d('fR',-0.05);
  F.thighL.rotation.z=d('tL',-0.04);F.shinL.rotation.z=d('kL',0);F.thighR.rotation.z=d('tR',0.04);F.shinR.rotation.z=d('kR',0);
  F.head.rotation.z=d('head',0);F.body.position.y=d('bob',0);F.body.position.x=d('bx',0);F.body.rotation.z=d('lean',0);F.tipper.rotation.x=d('tip',0);if(F.tab)F.tab.visible=Math.abs(d('tip',0))<0.15;
  if(F.scarfTails)F.scarfTails.forEach((t,i)=>{const ph=d('scarfPh',0),amp=d('scarfAmp',0.12);t.forEach((s,j)=>{s.rotation.z=(i?1:-1)*0.05+Math.sin(ph*6.0+j*0.9+i*1.7)*amp*(0.4+j*0.35);s.rotation.x=d('scarfX',0)*(j+1)*0.4;});});
}
// walking pose generator
export function walkPose(ph,amp=1,run=false){const s=Math.sin(ph),c=Math.cos(ph);const A=(run?0.62:0.36)*amp,K=(run?0.9:0.45)*amp;
  return {tL:s*A,tR:-s*A,kL:-Math.max(0,-c)*K,kR:-Math.max(0,c)*K,aL:-0.15-s*A*0.9,aR:0.15-s*A*0.9,fL:run?0.9:0.15,fR:run?-0.9:-0.15,bob:Math.abs(Math.sin(ph))*0.12*amp};}

function addScarf(F){const mat=[paperMat(SCARF,{side:THREE.DoubleSide,ink:0.6,grain:0.03}),paperMat(SCARF_SH,{ink:0.4})];
  const band=new THREE.Mesh(cardGeo(rrShape(1.25,0.42,0.08),0.1),mat);band.position.set(0,4.33,0.12);band.castShadow=true;F.body.add(band);
  const bl=new THREE.LineSegments(new THREE.EdgesGeometry(band.geometry,40),edgeMat);bl.position.copy(band.position);F.body.add(bl);
  const back=new THREE.Mesh(cardGeo(rrShape(1.25,0.42,0.08),0.1),mat);back.position.set(0,4.33,-0.12);F.body.add(back);
  // a little fold-knot
  const knot=new THREE.Mesh(cardGeo(rrShape(0.42,0.46,0.1),0.12),mat);knot.position.set(0.32,4.25,0.2);knot.rotation.z=0.5;F.body.add(knot);
  F.scarfTails=[];
  [[0.36,0.1],[0.22,-0.2]].forEach((t,i)=>{let par=new THREE.Group();par.position.set(t[0],4.2,0.24+i*0.03);par.rotation.z=t[1];F.body.add(par);const segs=[];
    for(let j=0;j<3;j++){const s=new THREE.Group();if(j)s.position.y=-0.52;par.add(s);const m=new THREE.Mesh(cardGeo(rrShape(0.3,0.56,0.04,0,-0.26),0.04),mat);m.castShadow=true;s.add(m);
      const e=new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,40),edgeMat);s.add(e);segs.push(s);par=s;}
    F.scarfTails.push(segs);});
}

// paper phone with near-white glow dot (both faces, so the field of dots reads from any side)
export function makePhone(scale=1){const g=new THREE.Group();const m=new THREE.Mesh(cardGeo(rrShape(0.62*scale,1.08*scale,0.1*scale),0.06),[paperMat(0x8e887e,{side:THREE.DoubleSide}),paperMat(0x5e5a54)]);m.castShadow=true;g.add(m);
  g.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry,40),edgeMat));
  const scr=new THREE.Mesh(new THREE.PlaneGeometry(0.46*scale,0.8*scale),new THREE.MeshBasicMaterial({color:GLOWC,toneMapped:false,transparent:true,opacity:0,fog:false}));scr.position.z=0.035;g.add(scr);
  const scr2=scr.clone();scr2.material=scr.material;scr2.position.z=-0.035;scr2.rotation.y=Math.PI;g.add(scr2);
  const gl=glowSprite(GLOWC,2.6*scale,0);g.add(gl);g.userData={scr,gl};
  g.setGlow=(k)=>{scr.material.opacity=k;gl.material.opacity=k*0.85;gl.visible=k>0.01;scr.visible=k>0.01;};g.setGlow(0);return g;}

// small window figure: head + torso + arms only (leaning on the sill)
export function makeWindowFigure(o={}){const col=o.color||KRAFT,R=1.35;
  const root=new THREE.Group();const body=new THREE.Group();root.add(body);
  const torso=strip(body,0.46,1.9,col,0,4.3,0);
  const armL=strip(body,0.27,1.05,col,-0.2,4.0,0.07),armR=strip(body,0.27,1.05,col,0.2,4.0,0.07);
  const foreL=strip(armL,0.25,1.0,col,0,-1.05,0.065),foreR=strip(armR,0.25,1.0,col,0,-1.05,0.065);
  const head=new THREE.Group();head.position.set(0,5.62,0);body.add(head);const hg=cardGeo(headShape(R,false),0.07);const hm=new THREE.Mesh(hg,cardMats(col));hm.castShadow=true;head.add(hm);head.add(new THREE.LineSegments(new THREE.EdgesGeometry(hg,40),edgeMat));
  const pg=new THREE.PlaneGeometry(2*R/0.88,2*R/0.88);const eyes=new THREE.Mesh(pg,faceMat(EYES.dot));eyes.position.z=0.04;head.add(eyes);
  brad(body,-0.2,4.0,0.12);brad(body,0.2,4.0,0.12);
  const F={root,body,head,armL,armR,foreL,foreR,face:{eyes},cur:{e:'dot'},R};
  F.setFace=(e)=>{if(e&&F.cur.e!==e){eyes.material.map=EYES[e];eyes.material.needsUpdate=true;F.cur.e=e;}};
  return F;}
