// 《下个月》s04 — Paper Mind Tricks Short (60 s, 1080x1920, 30 fps, Chinese captions)
// Built on Grok Bot's paper-mind-tricks-shorts skill + the Bystander s01 engine.
// Only the LOOK and build methods are reused; every scene, character and caption is new.
import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import * as L from './lib.js';
import {makeFigure,pose,walkPose} from './figure.js';
import {drawCaptions} from './captions.js';
const {rnd,rseed,clamp,ramp,ease,easeOutBack,sm,lerp,cnv,fc,tex,noise,paperMat,sketch,cutoutMesh,standTab,edgeMat,INKS,PAPER,KRAFT,KRAFT_FAR,HER,SKY,TAGP,SERIF,CJK,glowSprite}=L;
const W=1080,H=1920,FPS=30,DUR=60;
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const D2R=Math.PI/180;
// one saturated accent, used only on the story's key objects (the slips + the banner)
const ACCENT=0xc23b22, ACCENT_CSS='#c23b22', ACCENT_DK=0x8f2a18;

await document.fonts.load('700 72px LB');await document.fonts.load('italic 400 36px LBI');await document.fonts.load('400 30px LB');
await document.fonts.load('700 72px "Noto Serif CJK SC"');await document.fonts.load('400 56px "Noto Serif CJK SC"');
rseed(11);

const glc=document.getElementById('gl');
const renderer=new THREE.WebGLRenderer({canvas:glc,antialias:true,preserveDrawingBuffer:true});
renderer.setPixelRatio(1);renderer.setSize(W,H,false);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene();
const BG=new THREE.Color('#121010');scene.background=BG.clone();
scene.fog=new THREE.Fog(BG.clone(),70,190);
const camera=new THREE.PerspectiveCamera(38,W/H,0.3,600);camera.layers.set(0);scene.add(camera);

/* ---------------- lights ---------------- */
const hemi=new THREE.HemisphereLight(0xfff1dc,0x3a3028,0.5);scene.add(hemi);hemi.layers.enableAll();
const LAMP_BASE=V(-36,0,-30);
const spot=new THREE.SpotLight(0xffcf8a,3.1,0,35*D2R,0.6,0);spot.castShadow=true;spot.shadow.mapSize.set(2048,2048);spot.shadow.bias=-0.0006;spot.shadow.normalBias=0.02;
spot.shadow.camera.near=8;spot.shadow.camera.far=200;spot.layers.enableAll();scene.add(spot);scene.add(spot.target);
const fill=new THREE.SpotLight(0xffe2b8,1.25,0,20*D2R,1.0,0);fill.position.set(14,48,70);fill.target.position.set(0,2,0);scene.add(fill);scene.add(fill.target);fill.layers.enableAll();

/* ---------------- desk (oak) ---------------- */
function oakTex(){const S=2048,c=cnv(S,S),g=c.getContext('2d');const PL=S/4;
  for(let p=0;p<4;p++){const y0=p*PL,tone=rnd(-8,8);g.fillStyle=`rgb(${168+tone|0},${128+tone|0},${88+tone*0.8|0})`;g.fillRect(0,y0,S,PL);
    for(let i=0;i<260;i++){const yy=y0+rnd(0,PL),ph=rnd(0,6.28),am=rnd(2,9),fq=rnd(0.002,0.006),a=rnd(.05,.18),w=rnd(.6,2.6);g.strokeStyle=`rgba(96,66,40,${a})`;g.lineWidth=w;g.beginPath();
      for(let x=0;x<=S;x+=24){const yv=yy+Math.sin(x*fq+ph)*am;if(x)g.lineTo(x,yv);else g.moveTo(x,yv);}g.stroke();}
    for(let k=0;k<2;k++){const cx=rnd(200,S-200),cy=y0+PL*rnd(0.35,0.65),len=rnd(260,520);for(let r=0;r<9;r++){const sp=6+r*9;g.strokeStyle=`rgba(92,62,36,${rnd(.06,.14)})`;g.lineWidth=rnd(1,2.2);g.beginPath();
      g.moveTo(cx-len-r*30,cy-sp);g.quadraticCurveTo(cx+len*0.2,cy-sp*0.9,cx+len*0.55+r*8,cy);g.quadraticCurveTo(cx+len*0.2,cy+sp*0.9,cx-len-r*30,cy+sp);g.stroke();}}
    for(let i=0;i<5000;i++){g.fillStyle=`rgba(80,54,32,${rnd(.08,.22)})`;g.fillRect(rnd(0,S),y0+rnd(2,PL-2),rnd(3,11),1);}
    g.fillStyle='rgba(60,40,24,.6)';g.fillRect(0,y0,S,3);g.fillStyle='rgba(230,200,160,.25)';g.fillRect(0,y0+3,S,2);}
  noise(g,S,S,4);const t=tex(c,{wrap:true});t.repeat.set(2.2,2.2);return t;}
const deskMat=paperMat(0xffffff,{map:oakTex(),ink:0.5,grain:0.03});
const desk=new THREE.Mesh(new THREE.BoxGeometry(320,3,200),deskMat);desk.position.set(0,-1.5,48-100);desk.receiveShadow=true;scene.add(desk);

/* ---------------- plain paper ground sheet (the site sits on it) ---------------- */
function plainTex(){const S=2048,c=cnv(S,S),g=c.getContext('2d');g.fillStyle=PAPER;g.fillRect(0,0,S,S);noise(g,S,S,5);
  g.strokeStyle='rgba(42,38,34,.75)';g.lineWidth=7;g.strokeRect(40,40,S-80,S-80);g.lineWidth=2;g.strokeRect(62,62,S-124,S-124);
  g.strokeStyle='rgba(42,38,34,.14)';g.lineWidth=2;for(let i=0;i<26;i++){const x=rnd(120,S-120),y=rnd(120,S-120);g.beginPath();g.moveTo(x,y);g.lineTo(x+rnd(-90,90),y+rnd(-8,8));g.stroke();}
  return tex(c);}
const SHEET=46;
const sheet=new THREE.Mesh(new THREE.BoxGeometry(SHEET,0.06,SHEET),[paperMat(0xd9d0bf),paperMat(0xd9d0bf),paperMat(0xffffff,{map:plainTex(),ink:0.6}),paperMat(0xd9d0bf),paperMat(0xd9d0bf),paperMat(0xd9d0bf)]);
sheet.position.set(0,0.03,0);sheet.receiveShadow=true;scene.add(sheet);
{const e=new THREE.LineSegments(new THREE.EdgesGeometry(sheet.geometry),edgeMat);e.position.copy(sheet.position);scene.add(e);}

/* ---------------- desk lamp (articulated paper model) ---------------- */
const lamp=new THREE.Group();lamp.position.copy(LAMP_BASE);scene.add(lamp);
const LP={};
(function(){const base=sketch(new THREE.CylinderGeometry(4.2,4.8,1.2,28),0xe9e1d0,30);base.position.y=0.6;lamp.add(base);
  const yaw=new THREE.Group();yaw.position.y=1.2;lamp.add(yaw);LP.yaw=yaw;
  const a1=new THREE.Group();yaw.add(a1);LP.a1=a1;const arm1=sketch(new THREE.BoxGeometry(0.9,26,0.9),0xe9e1d0,30);arm1.position.y=13;a1.add(arm1);
  const j1=sketch(new THREE.CylinderGeometry(0.9,0.9,1.6,16),0xd9d0bf,30);j1.rotation.z=Math.PI/2;yaw.add(j1);
  const a2=new THREE.Group();a2.position.y=26;a1.add(a2);LP.a2=a2;const arm2=sketch(new THREE.BoxGeometry(0.8,22,0.8),0xe9e1d0,30);arm2.position.y=11;a2.add(arm2);
  const j2=sketch(new THREE.CylinderGeometry(0.8,0.8,1.5,16),0xd9d0bf,30);j2.rotation.z=Math.PI/2;a2.add(j2);
  const shadeP=new THREE.Group();shadeP.position.y=22;a2.add(shadeP);LP.shadeP=shadeP;
  const shade=sketch(new THREE.CylinderGeometry(1.4,6.2,7.5,28,1,true),paperMat(0xe9e1d0,{side:THREE.DoubleSide}),30);shade.rotation.x=Math.PI/2;shade.position.z=3.2;shadeP.add(shade);
  const cap=sketch(new THREE.SphereGeometry(1.5,16,10,0,Math.PI*2,0,Math.PI/2),0xd9d0bf,30);cap.rotation.x=-Math.PI/2;cap.position.z=-0.4;shadeP.add(cap);
  const bulb=new THREE.Mesh(new THREE.SphereGeometry(1.25,16,12),new THREE.MeshBasicMaterial({color:0xfff2d8,toneMapped:false}));bulb.position.z=4.4;shadeP.add(bulb);LP.bulb=bulb;
  const bg=glowSprite(0xffd9a0,9,0.9);bg.position.z=5.2;shadeP.add(bg);LP.glow=bg;})();
const lampTarget=V(0,0,-1);
function aimLamp(target,angleDeg,on){
  const dx=target.x-LAMP_BASE.x,dz=target.z-LAMP_BASE.z;const yaw=Math.atan2(dx,dz);LP.yaw.rotation.y=yaw;
  const dist=Math.hypot(dx,dz);LP.a1.rotation.x=0.18+clamp((dist-55)/120,0,0.35);LP.a2.rotation.x=1.45+clamp((dist-55)/90,0,0.5);
  lamp.updateMatrixWorld(true);const sp=new THREE.Vector3();LP.shadeP.getWorldPosition(sp);
  const m=new THREE.Matrix4().lookAt(target,sp,V(0,1,0));const q=new THREE.Quaternion().setFromRotationMatrix(m);
  const pq=new THREE.Quaternion();LP.shadeP.parent.getWorldQuaternion(pq);LP.shadeP.quaternion.copy(pq.invert().multiply(q));
  lamp.updateMatrixWorld(true);const bp=new THREE.Vector3();LP.bulb.getWorldPosition(bp);spot.position.copy(bp);spot.target.position.copy(target);spot.angle=angleDeg*D2R;
  spot.intensity=on?3.1:0;LP.glow.visible=on;LP.bulb.material.color.set(on?0xfff2d8:0x3a352f);}

/* ---------------- props: pencil + eraser (paper, desaturated) ---------------- */
(function(){const pg=new THREE.Group();const body=sketch(new THREE.CylinderGeometry(0.42,0.42,15,6),0xe6dfd0,30);body.rotation.z=Math.PI/2;pg.add(body);
  const tip=sketch(new THREE.ConeGeometry(0.42,1.8,6),0xd9cdb6,30);tip.rotation.z=-Math.PI/2;tip.position.x=8.4;pg.add(tip);
  const lead=new THREE.Mesh(new THREE.ConeGeometry(0.13,0.5,6),new THREE.MeshBasicMaterial({color:0x2a2622}));lead.rotation.z=-Math.PI/2;lead.position.x=9.4;pg.add(lead);
  const fer=sketch(new THREE.CylinderGeometry(0.45,0.45,1.2,18),0xbdb6aa,30);fer.rotation.z=Math.PI/2;fer.position.x=-8.1;pg.add(fer);
  const er=sketch(new THREE.CylinderGeometry(0.4,0.42,0.9,18),0xcfc6b8,30);er.rotation.z=Math.PI/2;er.position.x=-9.1;pg.add(er);
  pg.position.set(-7.5,0.42,33);pg.rotation.y=0.75;scene.add(pg);
  const e=sketch(new THREE.BoxGeometry(4.2,1.2,2.2),0xefe8da,30);e.position.set(6.5,0.6,27);e.rotation.y=-0.3;scene.add(e);
  const lab=new THREE.Mesh(new THREE.PlaneGeometry(2.6,1.4),paperMat(0xffffff,{map:tex(fc(260,140,g=>{g.fillStyle='#e4dccb';g.fillRect(0,0,260,140);g.strokeStyle=INKS;g.lineWidth=4;g.strokeRect(10,10,240,120);g.fillStyle=INKS;g.font='bold 40px '+SERIF;g.textAlign='center';g.fillText('No. 2',130,86);})),ink:0.4}));
  lab.rotation.x=-Math.PI/2;lab.position.set(0,0.61,0);e.add(lab);})();

/* ---------------- sky backdrop card ---------------- */
(function(){const c=fc(1600,700,g=>{g.fillStyle=SKY;g.fillRect(0,0,1600,700);noise(g,1600,700,6);
  g.strokeStyle='rgba(42,38,34,.35)';g.lineWidth=4;g.strokeRect(6,6,1588,688);
  for(let i=0;i<5;i++){const x=rnd(100,1500),y=rnd(80,330),s=rnd(1.2,2.2);g.save();g.translate(x,y);g.scale(s,s);g.strokeStyle='rgba(30,28,26,.35)';g.lineWidth=2;g.fillStyle='rgba(140,145,152,.25)';
    g.beginPath();g.moveTo(-60,10);g.bezierCurveTo(-70,-14,-40,-26,-26,-10);g.bezierCurveTo(-24,-34,10,-36,14,-12);g.bezierCurveTo(26,-30,58,-20,50,4);g.bezierCurveTo(64,10,56,22,40,20);g.lineTo(-50,20);g.closePath();g.fill();g.stroke();g.restore();}
  for(let i=0;i<40;i++){g.fillStyle='rgba(230,228,220,'+rnd(.2,.5)+')';g.beginPath();g.arc(rnd(20,1580),rnd(20,380),rnd(1,2.5),0,7);g.fill();}});
  const m=cutoutMesh(c,96,42,{cast:false,ink:0.4});m.position.set(0,21,-46);scene.add(m);
  const g=new THREE.Group();scene.add(g);standTab(g,-30,-46.2,4,5);standTab(g,30,-46.2,4,5);})();

/* ================= CONSTRUCTION SITE ================= */
// ---- slip textures (the accent: red slips) ----
function slipTexture(){return tex(fc(240,150,g=>{g.fillStyle=ACCENT_CSS;g.fillRect(0,0,240,150);noise(g,240,150,4);
  g.strokeStyle='rgba(42,38,34,.9)';g.lineWidth=5;g.strokeRect(8,8,224,134);
  g.fillStyle='#f6f1e6';g.font='700 58px '+CJK;g.textAlign='center';g.textBaseline='middle';g.fillText('下个月',120,78);}),{});}
const SLIP_TEX=slipTexture();
function holeTexture(){return tex(fc(720,450,g=>{g.fillStyle='#3a3128';g.fillRect(0,0,720,450);noise(g,720,450,5);
  for(let r=0;r<3;r++)for(let c=0;c<2;c++){const x=40+c*340,y=30+r*140;g.save();g.translate(x+150,y+62);g.rotate((r*0.04+c*0.03-0.05));g.translate(-150,-62);
    g.fillStyle=ACCENT_CSS;g.fillRect(0,0,300,124);g.strokeStyle='rgba(42,38,34,.9)';g.lineWidth=5;g.strokeRect(0,0,300,124);
    g.fillStyle='#f6f1e6';g.font='700 52px '+CJK;g.textAlign='center';g.textBaseline='middle';g.fillText('下个月',150,66);g.restore();}}),{});}
const HOLE_TEX=holeTexture();
function bannerTexture(){return tex(fc(1200,200,g=>{g.fillStyle=ACCENT_CSS;g.fillRect(0,0,1200,200);noise(g,1200,200,4);
  g.strokeStyle='rgba(246,241,230,.85)';g.lineWidth=5;g.strokeRect(14,14,1172,172);
  g.fillStyle='#f6f1e6';g.font='700 118px '+CJK;g.textAlign='center';g.textBaseline='middle';g.fillText('封顶大吉',600,104);}),{});}
const BANNER_TEX=bannerTexture();

/* ---- the wall: 10 cols x 9 rows of paper bricks ---- */
const WALL_Z=-6, BW=3.6, BH=1.5;
const BRICK_COLS=[0xc9bfae,0xb9b1a3,0xd9d0bf,0xcfc6b6];
const bricks=[];
function brickReveal(row,col){
  if(row<2) return 5.0+col*0.15;
  if(row<5) return 12.5+(row-2)*1.6+col*0.12;
  return 20.2+(row-5)*0.7+col*0.06;
}
(function buildWall(){
  const back=new THREE.Mesh(new THREE.BoxGeometry(36.6,14.2,0.4),paperMat(0x7a6f60));
  back.position.set(0,7.1,-6.9);back.receiveShadow=true;scene.add(back);
  for(let r=0;r<9;r++)for(let c=0;c<10;c++){
    const col=BRICK_COLS[(r*7+c*3)%4];
    const g=sketch(new THREE.BoxGeometry(3.5,1.4,1.2),col,25);
    const x=-18+c*BW+1.8, y=0.75+r*BH;
    g.position.set(x,y,WALL_Z);scene.add(g);
    bricks.push({g,row:r,col:c,reveal:brickReveal(r,c),
      hole:(c===4||c===5)&&(r>=2&&r<=4),
      turn:(c===2&&r===2),x,y});
  }
})();
// slips stuffed inside the wall, seen through the cut hole (shots 1 & 8 only)
const holeCard=new THREE.Mesh(new THREE.PlaneGeometry(7.2,4.5),paperMat(0xffffff,{map:HOLE_TEX,side:THREE.DoubleSide,ink:0.5}));
holeCard.position.set(0,6.0,-6.45);holeCard.receiveShadow=true;scene.add(holeCard);
// paint band (wipes on in shot 4b, growing out from the worker at x=0)
const paintGeo=new THREE.PlaneGeometry(36,2.6);
const paintBand=new THREE.Mesh(paintGeo,paperMat(0xa8bcc4,{side:THREE.DoubleSide,ink:0.3}));
paintBand.position.set(0,10.2,-5.32);paintBand.receiveShadow=true;scene.add(paintBand);
// banner (unfurls in shot 4c)
const bannerGeo=new THREE.PlaneGeometry(20,3.2);bannerGeo.translate(0,-1.6,0);
const banner=new THREE.Mesh(bannerGeo,paperMat(0xffffff,{map:BANNER_TEX,side:THREE.DoubleSide,ink:0.5}));
banner.position.set(0,15.8,-5.2);banner.castShadow=true;scene.add(banner);
// brick pile (spare bricks, left of the wall)
(function brickPile(){
  const spots=[[-24,0.75,0],[-20.4,0.75,0],[-22.2,0.75,-1.4],[-22.2,2.25,-0.5],[-20.4,2.25,-0.5],[-22.2,3.75,-0.5]];
  spots.forEach((s,i)=>{const g=sketch(new THREE.BoxGeometry(3.5,1.4,1.2),BRICK_COLS[i%4],25);g.position.set(s[0],s[1],s[2]);g.rotation.y=(i%2?0.06:-0.05);scene.add(g);});
})();
// paint bucket
(function(){const b=sketch(new THREE.CylinderGeometry(1.0,0.85,1.3,18),0xa8bcc4,25);b.position.set(20,0.65,4);scene.add(b);
  const top=new THREE.Mesh(new THREE.CircleGeometry(0.92,18),paperMat(0x8fa8b4));top.rotation.x=-Math.PI/2;top.position.set(20,1.31,4);scene.add(top);})();
// slip pile beside the worker (grows as the story goes)
const pileSlips=[];
(function slipPile(){
  const topMat=paperMat(0xffffff,{map:SLIP_TEX,ink:0.4});
  const redMat=paperMat(ACCENT,{ink:0.4});
  for(let i=0;i<12;i++){
    const m=new THREE.Mesh(new THREE.BoxGeometry(2.4,0.09,1.5),[redMat,redMat,topMat,redMat,redMat,redMat]);
    m.position.set(1+rnd(-0.25,0.25),0.12+i*0.1,3+rnd(-0.25,0.25));m.rotation.y=rnd(-0.22,0.22);
    m.castShadow=true;m.receiveShadow=true;scene.add(m);pileSlips.push(m);
  }
})();
// flying slip (hand-offs) + the pried-out slip (turn + loop)
function slipMesh(){const m=new THREE.Mesh(new THREE.PlaneGeometry(2.4,1.5),paperMat(0xffffff,{map:SLIP_TEX,side:THREE.DoubleSide,ink:0.6}));
  m.castShadow=true;scene.add(m);return m;}
const slipFly=slipMesh(); slipFly.visible=false;
const slipTurn=slipMesh(); slipTurn.visible=false;

/* ---------------- people ---------------- */
const worker=makeFigure({color:KRAFT,eyes:'dot',brows:'none',mouth:'line'});scene.add(worker.root);
const foreman=makeFigure({color:0x6e6660,eyes:'dot',brows:'flat',mouth:'line'});scene.add(foreman.root);
// hard hat (worker) + flat cap (foreman): paper cut-outs on the head card
function attachHat(F,drawFn,w,h,y){
  const m=cutoutMesh(fc(260,160,drawFn),w,h,{cast:false,ink:0.5});
  m.position.set(0,y,0.06);F.head.add(m);return m;}
attachHat(worker,g=>{g.fillStyle='#efe8da';g.strokeStyle=INKS;g.lineWidth=5;g.lineJoin='round';
  g.beginPath();g.moveTo(30,130);g.lineTo(30,92);g.arc(130,92,100,Math.PI,0);g.lineTo(230,130);g.closePath();g.fill();g.stroke();
  g.beginPath();g.moveTo(8,130);g.lineTo(252,130);g.lineWidth=11;g.stroke();
  g.beginPath();g.moveTo(130,8);g.lineTo(130,58);g.lineWidth=6;g.stroke();},2.7,1.65,1.02);
attachHat(foreman,g=>{g.fillStyle='#5d564d';g.strokeStyle=INKS;g.lineWidth=5;g.lineJoin='round';
  g.beginPath();g.moveTo(28,118);g.lineTo(28,86);g.quadraticCurveTo(130,22,232,86);g.lineTo(232,118);g.closePath();g.fill();g.stroke();
  g.beginPath();g.moveTo(150,112);g.lineTo(248,112);g.lineWidth=10;g.stroke();},2.5,1.15,1.08);
// trowel in the worker's right hand (swapped for the roller while painting)
const trowel=new THREE.Group();
(function(){const handle=sketch(new THREE.CylinderGeometry(0.09,0.09,0.8,10),0x8a6a4a,0);handle.position.y=-0.4;trowel.add(handle);
  const bs=new THREE.Shape();bs.moveTo(0,0);bs.lineTo(0.42,0.7);bs.lineTo(0,1.2);bs.lineTo(-0.42,0.7);bs.closePath();
  const blade=new THREE.Mesh(new THREE.ExtrudeGeometry(bs,{depth:0.05,bevelEnabled:false}),paperMat(0xd9d0bf,{side:THREE.DoubleSide,ink:0.6}));
  blade.position.set(0,-0.8,0);blade.castShadow=true;trowel.add(blade);
  trowel.position.set(0,-1.05,0.12);worker.foreR.add(trowel);})();
const roller=new THREE.Group();
(function(){// pole roller: long handle from the hand up the forearm axis, roll at the far end
  const pole=sketch(new THREE.CylinderGeometry(0.09,0.09,3.6,10),0x8a6a4a,0);
  pole.position.y=-1.8;roller.add(pole);
  const roll=new THREE.Mesh(new THREE.CylinderGeometry(0.26,0.26,1.1,14),paperMat(0xa8bcc4,{ink:0.4}));
  roll.rotation.z=Math.PI/2;roll.position.y=-3.6;roll.castShadow=true;roller.add(roll);
  roller.position.set(0,-1.05,0.12);worker.foreR.add(roller);roller.visible=false;})();
// clipboard in the foreman's left hand
(function(){const cb=new THREE.Group();
  const board=new THREE.Mesh(new THREE.BoxGeometry(1.1,1.5,0.06),paperMat(0xefe8da,{ink:0.5}));board.castShadow=true;cb.add(board);
  const lines=new THREE.Mesh(new THREE.PlaneGeometry(0.9,1.2),paperMat(0xffffff,{map:tex(fc(90,120,g=>{g.fillStyle='#f6f1e6';g.fillRect(0,0,90,120);g.strokeStyle=INKS;g.lineWidth=2;for(let i=0;i<5;i++){g.beginPath();g.moveTo(10,25+i*18);g.lineTo(80,25+i*18);g.stroke();}})),ink:0.3}));
  lines.position.z=0.035;cb.add(lines);
  const clip=new THREE.Mesh(new THREE.BoxGeometry(0.4,0.25,0.1),paperMat(0x8a8478));clip.position.set(0,0.8,0.05);cb.add(clip);
  cb.position.set(0,-1.05,0.12);foreman.foreL.add(cb);})();

/* ---------------- book (shot 6, explainer) ---------------- */
const BOOK=V(54,0,30);
const book={};
(function(){const G=new THREE.Group();G.position.copy(BOOK);G.rotation.y=-0.08;scene.add(G);book.G=G;
  const BW=13,BD=18;
  const cloth=tex(fc(512,700,g=>{g.fillStyle='#6f675d';g.fillRect(0,0,512,700);for(let y=0;y<700;y+=3){g.fillStyle=`rgba(20,16,12,${rnd(.05,.12)})`;g.fillRect(0,y,512,1);}noise(g,512,700,6);
    g.strokeStyle='rgba(230,222,206,.55)';g.lineWidth=4;g.strokeRect(40,40,432,620);g.lineWidth=2;g.strokeRect(56,56,400,588);g.beginPath();g.arc(256,350,60,0,7);g.stroke();}));
  const coverM=paperMat(0xffffff,{map:cloth,ink:0.5});const edgeM=paperMat(0x5d564d);
  const back=sketch(new THREE.BoxGeometry(BW,0.25,BD),[edgeM,edgeM,coverM,edgeM,edgeM,edgeM],30);back.position.set(BW/2,0.125,0);G.add(back);
  const pagesR=sketch(new THREE.BoxGeometry(BW-0.4,0.9,BD-0.6),paperMat(0xefe8d8),30);pagesR.position.set(BW/2,0.25+0.45,0);G.add(pagesR);
  const hinge=new THREE.Group();hinge.position.set(0,0.25,0);G.add(hinge);book.hinge=hinge;
  const front=sketch(new THREE.BoxGeometry(BW,0.25,BD),[edgeM,edgeM,coverM,coverM,edgeM,edgeM],30);front.position.set(BW/2,0.9+0.125+0.02,0);hinge.add(front);
  const pagesL=sketch(new THREE.BoxGeometry(BW-0.4,0.9,BD-0.6),paperMat(0xefe8d8),30);pagesL.position.set(BW/2,0.45,0);hinge.add(pagesL);
  const LPc=cnv(1024,1400);book.LPc=LPc;book.LPt=tex(LPc);
  const lp=new THREE.Mesh(new THREE.PlaneGeometry(BW-0.6,BD-0.8),paperMat(0xffffff,{map:book.LPt,ink:0.5}));lp.rotation.x=Math.PI/2;lp.position.set(BW/2,-0.005,0);hinge.add(lp);lp.receiveShadow=true;
  const RPc=fc(1024,1400,g=>{g.fillStyle='#f4efe4';g.fillRect(0,0,1024,1400);noise(g,1024,1400,3);const gr=g.createLinearGradient(0,0,140,0);gr.addColorStop(0,'rgba(80,60,40,.25)');gr.addColorStop(1,'rgba(80,60,40,0)');g.fillStyle=gr;g.fillRect(0,0,140,1400);});
  const rp=new THREE.Mesh(new THREE.PlaneGeometry(BW-0.6,BD-0.8),paperMat(0xffffff,{map:tex(RPc),ink:0.5}));rp.rotation.x=-Math.PI/2;rp.position.set(BW/2,1.16,0);G.add(rp);rp.receiveShadow=true;
  // title pop-up card
  const tc=L.cardTex(1100,420,'#f4eee1',(g,W2,H2)=>{g.fillStyle=INKS;g.textAlign='center';g.font='700 168px '+CJK;g.fillText('下个月',W2/2,190);g.font='700 62px '+CJK;g.fillText('一张条子，一堵墙。',W2/2,305);g.strokeStyle=INKS;g.lineWidth=3;g.beginPath();g.moveTo(300,340);g.lineTo(800,340);g.stroke();},5);
  const title=cutoutMesh(tc,16.5,6.3);title.position.y=3.15;const tp=new THREE.Group();tp.position.set(0,1.16,-4.2);G.add(tp);tp.add(title);book.title=tp;
  [-1,1].forEach(s=>{const st=sketch(new THREE.BoxGeometry(3.2,0.03,2.2),0xeee7d8,30);st.position.set(s*3.5,0.0,0);tp.add(st);});
  // statement card (replaces the citation: no fake source, plain words only)
  const cc=L.cardTex(620,130,'#f4eee1',(g,W2,H2)=>{g.fillStyle=INKS;g.textAlign='center';g.font='400 56px '+CJK;g.fillText('条子不是工资。',W2/2,84);},3);
  const cit=cutoutMesh(cc,8.0,1.68);cit.position.y=0.84;const cp=new THREE.Group();cp.position.set(0,1.16,-2.2);G.add(cp);cp.add(cit);book.cit=cp;
  // right-page tabs
  book.tabs=[];[['1张条子',3.2],['一堵墙',7.3]].forEach((t,i)=>{const c=L.cardTex(560,150,'#f4eee1',(g,W2,H2)=>{g.fillStyle=INKS;g.textAlign='center';g.font='700 66px '+CJK;g.fillText(t[0],W2/2,98);},3);
    const m=cutoutMesh(c,7.4,2.0);m.position.y=1.0;const p=new THREE.Group();p.position.set(BW/2+0.2,1.17,t[1]-3.0);G.add(p);p.add(m);book.tabs.push(p);});
  book.BW=BW;book.BD=BD;})();
function drawDiagram(k){const g=book.LPc.getContext('2d');rseed(77);g.fillStyle='#f4efe4';g.fillRect(0,0,1024,1400);noise(g,1024,1400,3);
  const gr=g.createLinearGradient(1024,0,884,0);gr.addColorStop(0,'rgba(80,60,40,.25)');gr.addColorStop(1,'rgba(80,60,40,0)');g.fillStyle=gr;g.fillRect(884,0,140,1400);
  // the page is seen upside-down after the cover flips, draw rotated 180
  g.save();g.translate(1024,1400);g.rotate(Math.PI);
  g.fillStyle=INKS;g.textAlign='center';g.font='700 76px '+CJK;
  g.fillText('每块砖，',580,480);g.fillText('都是一张条子。',580,600);
  g.strokeStyle=INKS;g.lineWidth=4;g.beginPath();g.moveTo(370,645);g.lineTo(790,645);g.stroke();
  // wall cross-section: red slips as bricks, appearing one by one
  const cols=4,rows=3,sw=190,sh=120,gx=92,gy=700,dx=208,dy=168;
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
    const kk=clamp(k*12-(r*cols+c),0,1);if(kk<=0)continue;
    const x=gx+c*dx,y=gy+r*dy;
    g.save();g.globalAlpha=kk;g.translate(x+sw/2,y+sh/2);g.rotate(r*0.03+c*0.02-0.05);g.translate(-sw/2,-sh/2);
    g.fillStyle=ACCENT_CSS;g.fillRect(0,0,sw,sh);
    g.strokeStyle=INKS;g.lineWidth=4;g.strokeRect(0,0,sw,sh);
    g.fillStyle='#f6f1e6';g.font='700 50px '+CJK;g.textAlign='center';g.textBaseline='middle';g.fillText('下个月',sw/2,sh/2+2);
    g.restore();}
  g.restore();book.LPt.needsUpdate=true;}
drawDiagram(0);

/* ---------------- post: bloom only on glows, tilt-shift DOF, finish (vignette, grain, warm) ---------------- */
const rt=new THREE.WebGLRenderTarget(W,H,{type:THREE.HalfFloatType,samples:4});
const composer=new EffectComposer(renderer,rt);composer.setPixelRatio(1);composer.setSize(W,H);
composer.addPass(new RenderPass(scene,camera));
const bloom=new UnrealBloomPass(new THREE.Vector2(W/2,H/2),0.55,0.45,0.93);composer.addPass(bloom);
composer.addPass(new OutputPass());
const Finish={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:0.34},uGrain:{value:0.03},uFade:{value:1},uFocus:{value:0.5},uBand:{value:0.16},uAmt:{value:3.0}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
  fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime;uniform float uVig;uniform float uGrain;uniform float uFade;uniform float uFocus;uniform float uBand;uniform float uAmt;varying vec2 vUv;
  float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
  void main(){vec4 c=texture2D(tDiffuse,vUv);float d=max(0.0,abs(vUv.y-uFocus)-uBand);float r=uAmt*smoothstep(0.0,0.35,d);
   if(r>0.4){vec2 px=vec2(r)/vec2(1080.0,1920.0);vec4 s=c*0.2;
     s+=texture2D(tDiffuse,vUv+px*vec2(1.0,0.0))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(-1.0,0.0))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(0.0,1.0))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(0.0,-1.0))*0.1;
     s+=texture2D(tDiffuse,vUv+px*vec2(0.7,0.7))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(-0.7,0.7))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(0.7,-0.7))*0.1;s+=texture2D(tDiffuse,vUv+px*vec2(-0.7,-0.7))*0.1;c=s;}vec2 q=vUv-0.5;float v=1.0-uVig*smoothstep(0.25,0.85,length(q*vec2(1.25,1.0)));
  c.rgb*=v;c.rgb=mix(c.rgb,c.rgb*vec3(1.03,1.0,0.95),0.6);c.rgb+=(h(vUv*vec2(1080.0,1920.0)+uTime)-0.5)*uGrain;c.rgb*=uFade;gl_FragColor=c;}`};
const finish=new ShaderPass(Finish);composer.addPass(finish);

/* ======================= TIMELINE ======================= */
// camera keys: [t, px,py,pz, tx,ty,tz]
const CAM_KEYS=[
 [0,   -1.5,8.5,30,  -1.5,6.5,-6],
 [3.8, -1.5,8.5,30,  -1.5,6.5,-6],
 [5.2, 0,10,38,   0,4,-4],
 [12,  0,10,38,   0,4,-4],
 [20,  6,9,34,   -2,5,-6],
 [23,  0,10,36,   0,6,-6],
 [26.5,-4,8,28,   0,9,-6],
 [29.5,0,11,38,   0,10,-6],
 [31.5,-9,6.5,12, -9,4.5,-6],
 [37.8,-9,6.5,12, -9,4.5,-6],
 [39.5,52,20,88,  52,2,30],
 [45.8,52,18,82,   52,2,30],
 [47.2, 2,10,38,   2,4,-4],
 [53.8, 2,10,38,   2,4,-4],
 [55.5, -1.5,8.5,30,  -1.5,6.5,-6],
 [60,   -1.5,8.5,30,  -1.5,6.5,-6],
];
function camKey(t){
  let i=0;while(i<CAM_KEYS.length-2&&t>CAM_KEYS[i+1][0])i++;
  const a=CAM_KEYS[i],b=CAM_KEYS[i+1],k=ease(ramp(t,a[0],b[0]));
  return {p:V(lerp(a[1],b[1],k),lerp(a[2],b[2],k),lerp(a[3],b[3],k)),
          t:V(lerp(a[4],b[4],k),lerp(a[5],b[5],k),lerp(a[6],b[6],k))};
}
function camSet(p,t,up){camera.position.copy(p);camera.up.copy(up||V(0,1,0));camera.lookAt(t);camera.fov=38;camera.updateProjectionMatrix();}
// position/rotation keys: [t, x, z, rotY]
function keyAt(keys,t){
  let i=0;while(i<keys.length-2&&t>keys[i+1][0])i++;
  const a=keys[i],b=keys[i+1],k=ease(ramp(t,a[0],b[0]));
  return {x:lerp(a[1],b[1],k),z:lerp(a[2],b[2],k),rot:lerp(a[3],b[3],k),
    moving:(Math.abs(b[1]-a[1])+Math.abs(b[2]-a[2]))>0.01&&k>0&&k<1};
}
const WKEYS=[
 [0,-5,0,2.67],[4,-5,0,2.67],[5,-2,1,0.15],[12,-2,1,0.15],[20,-2,1,0.15],
 [21,0,1,0.15],[23,0,-4.5,0.15],[26.5,0,-4.5,0.15],[28,-4,3,0.15],[30,-4,3,0.15],
 [31,-9,-2.5,0.15],[38,-9,-2.5,0.15],[46,6,1,0.15],[47,6,1,0.15],[54,6,1,0.15],
 [55,-5,0,2.67],[56,-5,0,0],[58.5,-5,0,0],[59.5,-5,0,2.67],[60,-5,0,2.67],
];
const FKEYS=[
 [0,12,2,-0.2],[5,4.5,1,-0.2],[12,4.5,1,-0.2],[20,4.5,1,-0.2],[23,10,2,-0.3],[30,10,2,-0.3],
 [31,10,2,-0.3],[38,10,2,-0.3],[46,-2,1,0.2],[47,-2,1,0.2],[54,-2,1,0.2],[60,-2,1,0.2],
];
// hand-off windows: [t0, foremanHandX,foremanHandY,foremanHandZ, workerHandX,workerHandY,workerHandZ]
// (entries 1-3 fly foreman -> worker; t0=49 is reversed: worker -> foreman)
const HANDOFFS=[
 [8,   3.0,5.0,1.5,  -0.5,4.5,1.5],
 [14,  3.0,5.0,1.5,  -0.5,4.5,1.5],
 [17,  3.0,5.0,1.5,  -0.5,4.5,1.5],
 [49, -0.5,4.5,1.5,   4.2,5.0,1.5],
];

/* ---------------- per-frame state ---------------- */
function wallState(t){
  const end=(t<4||t>=54); // cold open / loop: finished wall, hole open
  bricks.forEach(b=>{
    if(b.hole){
      const vis=end?false:(t>=b.reveal);
      b.g.visible=vis;
      if(vis){const p=easeOutBack(clamp((t-b.reveal)/0.45,0,1),1.6);b.g.scale.setScalar(Math.max(0.001,p));}
    }else if(b.turn){
      // turn brick: normal until 32, slides out 32-33, gone until the loop resets it
      if(end||t<b.reveal){b.g.visible=end;b.g.scale.setScalar(1);b.g.position.set(b.x,b.y,WALL_Z);b.g.rotation.set(0,0,0);}
      else if(t<32){const p=easeOutBack(clamp((t-b.reveal)/0.45,0,1),1.6);b.g.visible=true;b.g.scale.setScalar(Math.max(0.001,p));}
      else if(t<33){const k=ease(ramp(t,32,33));b.g.visible=true;b.g.scale.setScalar(1);
        b.g.position.set(b.x,lerp(b.y,2.6,k),lerp(WALL_Z,-4.2,k));b.g.rotation.z=-0.5*k;}
      else{b.g.visible=false;}
    }else{
      if(end){b.g.visible=true;b.g.scale.setScalar(1);}
      else{const p=easeOutBack(clamp((t-b.reveal)/0.45,0,1),1.6);b.g.visible=p>0.01;b.g.scale.setScalar(Math.max(0.001,p));}
    }
  });
  holeCard.visible=end;
  const paintK=end?1:(t<23?0:t<26.5?ease((t-23)/3.5):1);
  paintBand.visible=paintK>0.01;paintBand.scale.x=Math.max(0.001,paintK);
  const banK=end?1:(t<26.5?0:t<29.5?easeOutBack((t-26.5)/3,1.4):1);
  banner.visible=banK>0.01;banner.scale.y=Math.max(0.001,banK);
  // slip pile count
  const n=end?12:t<8?1:t<12?2:t<20?Math.round(lerp(2,6,(t-12)/8)):t<30?Math.round(lerp(6,10,(t-20)/10)):12;
  pileSlips.forEach((m,i)=>m.visible=i<n);
}
function workerState(t){
  const k=keyAt(WKEYS,t);
  worker.root.position.set(k.x,0.06,k.z);worker.root.rotation.y=k.rot;
  worker.root.visible=!(t>=38&&t<46);
  let p={},eyes='dot',brows='none',mouth='line';
  if(t<4){ // shot 1: gaze at the hole, slight idle sway
    p={bob:0.05*Math.sin(t*2)};eyes='dot';brows='none';mouth='line';
  }else if(t<20){ // shots 2-3: laying rhythm (arm up/down), walk while moving
    if(k.moving)Object.assign(p,walkPose(t*5.2,1));
    const u=0.5+0.5*Math.sin((t-4)*Math.PI*2/1.6);
    p.aR=lerp(0.2,2.3,u*u);p.fR=0.25;
  }else if(t<23){ // 4a: top out, wipe brow
    const w=ease(ramp(t,20.5,21.5));p={aR:lerp(0.2,2.0,w),fR:lerp(0.2,2.4,w),head:0.12*w};brows='raised';
  }else if(t<26.5){ // 4b: painting, close to the wall, pole held straight up at the band
    p={aR:2.9+0.08*Math.sin((t-23)*3),fR:-0.05};
  }else if(t<30){ // 4c: step back, look up at the banner
    p={aL:-0.6,aR:0.6};brows='raised';
  }else if(t<38){ // shot 5: the turn
    if(t<32){const w=ease(ramp(t,30.5,31.5));p={aR:lerp(0.2,2.4,w),fR:0.25};}
    else if(t<33){p={aR:2.4,fR:0.25};}
    else if(t<34){const w=ease(ramp(t,33,34));p={aR:lerp(2.4,0.6,w),fR:lerp(0.25,0.4,w)};}
    else{p={aR:0.6,fR:0.4};eyes='wide';brows='worried';mouth='o';}
  }else if(t<46){ // shot 6: book only
    p={};
  }else if(t<54){ // shot 7: hand the slip back
    if(t<48){const w=ease(ramp(t,46.5,47.5));p={aL:lerp(-0.18,-2.2,w),fL:lerp(0.05,-0.2,w)};}
    else if(t<50){p={aL:-2.2,fL:-0.2};}
    else{p={aL:-0.18,fL:0.05};}
  }else{ // shot 8: address the lens, then back
    if(t<56){p={bob:0.05*Math.sin(t*2)};}
    else if(t<58.5){p={aR:2.4,fR:0.25};brows='raised';}
    else{p={bob:0.05*Math.sin(t*2)};}
    if(k.moving){const wp=walkPose(t*5.2,1);p.fL=wp.fL;p.fR=wp.fR;} // legs walk during the 54-55 rewind slide
  }
  worker.setFace(eyes,brows,mouth);
  pose(worker,Object.assign({tip:0,scarfPh:0,scarfAmp:0},p));
  // trowel <-> roller swap while painting; trowel hidden while the slip is held up (56-58.8)
  const painting=(t>=23&&t<26.5);
  trowel.visible=!painting&&!(t>=56&&t<58.8);roller.visible=painting;
}
function foremanState(t){
  const k=keyAt(FKEYS,t);
  foreman.root.position.set(k.x,0.06,k.z);foreman.root.rotation.y=k.rot;
  foreman.root.visible=(t>=4&&t<30)||(t>=46&&t<54);
  let p={},eyes='dot',brows='flat',mouth='line';
  // hand-off arm: extend 0.5s before, hold 0.6s, retract over 0.6s
  function handProfile(t0){
    if(t<t0-0.5) return 0;
    if(t<t0) return ease(ramp(t,t0-0.5,t0));
    if(t<t0+0.6) return 1;
    if(t<t0+1.2) return 1-ease(ramp(t,t0+0.6,t0+1.2));
    return 0;
  }
  if(t<30){
    const w=Math.max(handProfile(8),handProfile(14),handProfile(17));
    if(w>0)p={aL:lerp(-0.18,-2.0,w),fL:lerp(0.05,-0.2,w)};
  }else if(t>=46&&t<54){
    if(t<49){p={};}
    else if(t<50.5){const w=ease(ramp(t,49,50));p={aR:lerp(0.18,1.4,w),fR:lerp(-0.05,0.3,w)};}
    else{p={aR:1.0,fR:0.3,head:0.15};eyes='wide';brows='worried';mouth='o';}
  }
  foreman.setFace(eyes,brows,mouth);
  pose(foreman,Object.assign({tip:0,scarfPh:0,scarfAmp:0},p));
}
function slipState(t){
  // flying slip during hand-offs
  slipFly.visible=false;
  for(const h of HANDOFFS){
    const [t0,fx,fy,fz,tx,ty,tz]=h;
    if(t>=t0&&t<t0+0.9){
      const rev=(t0===49); // shot 7: worker -> foreman
      const sx=rev?tx:fx, sy=rev?ty:fy, sz=rev?tz:fz;
      const ex=rev?fx:tx, ey=rev?fy:ty, ez=rev?fz:tz;
      const u=ease(ramp(t,t0,t0+0.9));
      slipFly.position.set(lerp(sx,ex,u),lerp(sy,ey,u)+Math.sin(u*Math.PI)*1.6,lerp(sz,ez,u));
      slipFly.rotation.set(0,0,Math.sin(u*Math.PI*2)*0.5);
      slipFly.visible=true;break;
    }
  }
  // pried-out slip: flutters down 33-34, held 34-38, held up to the lens 56-58.8
  slipTurn.visible=false;
  if(t>=33&&t<34){
    const u=ease(ramp(t,33,34));
    slipTurn.position.set(lerp(-9,-8.4,u),lerp(3.75,4.2,u)+Math.sin(u*Math.PI)*0.8,lerp(-5.2,-2.2,u));
    slipTurn.rotation.set(0.3*Math.sin(u*9),0.4*u,0.6*Math.sin(u*7));
    slipTurn.visible=true;
  }else if(t>=34&&t<38){
    slipTurn.position.set(-8.4,4.2,-2.2);slipTurn.rotation.set(0,0.15,0.1);slipTurn.visible=true;
  }else if(t>=56&&t<58.8){
    slipTurn.position.set(-4.5,7.8,0.4);slipTurn.rotation.set(0,0.1,0.05);slipTurn.visible=true;
  }
}
function bookState(t){
  if(t>=38&&t<46){
    const k=easeOutBack(clamp((t-38.8)/1.4,0,1),0.6);book.hinge.rotation.z=Math.PI*clamp(k,0,1.03);
    const tk=easeOutBack(clamp((t-39.5)/0.9,0,1),1.7);book.title.rotation.x=-Math.PI/2*(1-tk);book.title.scale.y=Math.max(0.001,tk);
    const ck=easeOutBack(clamp((t-40.0)/0.6,0,1),1.6);book.cit.rotation.x=-Math.PI/2*(1-ck);
    book.tabs.forEach((p,i)=>{const kk=easeOutBack(clamp((t-41.2-i*0.5)/0.6,0,1),1.6);p.rotation.x=-Math.PI/2*(1-kk)+(-0.25)*kk;});
    book.title.visible=t>39.5;book.cit.visible=t>40.0;book.tabs.forEach((p,i)=>p.visible=t>41.2+i*0.5);
    drawDiagram(ease(ramp(t,40.8,42.8)));
  }else{book.hinge.rotation.z=0;book.title.rotation.x=-Math.PI/2;book.title.scale.y=0.001;book.cit.rotation.x=-Math.PI/2;book.tabs.forEach(p=>p.rotation.x=-Math.PI/2);}
}

function update(t){
  const c=camKey(t);camSet(c.p,c.t);
  // lamp
  let lampTgt=V(0,5,-6),ang=35;
  if(t>=38&&t<46){const k=ease(ramp(t,38,39.5));lampTgt=V(0,5,-6).lerp(BOOK.clone(),k);ang=lerp(35,27,k);}
  if(t>=46){const k=ease(ramp(t,46,47.2));lampTgt=BOOK.clone().lerp(V(0,5,-6),k);ang=lerp(27,35,k);}
  aimLamp(lampTgt,ang,t<59.5);
  wallState(t);workerState(t);foremanState(t);slipState(t);bookState(t);
  // camera focus for the tilt-shift
  let focusP=c.t;if(t>=30&&t<38)focusP=worker.root.position.clone().add(V(0,3.5,0));
  if(t>=38&&t<46)focusP=BOOK.clone().add(V(0,2,0));
  const fpv=focusP.clone().project(camera);const fy=clamp(fpv.y*0.5+0.5,0.1,0.9);finish.uniforms.uFocus.value=fy;
  finish.uniforms.uAmt.value=(t<10?0.0011:(t<18?0.0006:(t<28?0.0002:(t<36?0.0009:(t<44?0.0008:(t<52?0.0005:0.0012))))))*2600;
  finish.uniforms.uBand.value=t>=52?0.22:0.14;
  finish.uniforms.uTime.value=(t*FPS)%97;finish.uniforms.uFade.value=t<59.5?1:Math.max(0,1-(t-59.5)/0.07);
  scene.fog.near=t>=38&&t<46?60:55;scene.fog.far=t>=38&&t<46?170:160;
  fill.target.position.copy(t>=38&&t<46?BOOK.clone():V(0,4,-6));
  fill.position.copy(t>=38&&t<46?BOOK.clone().add(V(14,48,60)):V(14,48,70));
  fill.intensity=t<59.5?1.25:0;
}

/* ---------------- output ---------------- */
const outc=document.getElementById('out');const og=outc.getContext('2d');
window.renderFrame=function(f){const t=f/FPS;update(t);composer.render();og.drawImage(glc,0,0);drawCaptions(og,t);return true;};
window.renderAt=(t)=>window.renderFrame(Math.round(t*FPS));
window.grab=(f,type='image/png',q)=>{window.renderFrame(f);return outc.toDataURL(type,q);};
window.prof=(f)=>{const a=performance.now();update(f/FPS);const b=performance.now();composer.render();renderer.getContext().finish();const c=performance.now();og.drawImage(glc,0,0);drawCaptions(og,f/FPS);const d=performance.now();const u=outc.toDataURL('image/png');const e=performance.now();return [b-a,c-b,d-c,e-d,u.length];};
window.DBG=(o)=>{if('amt' in o)finish.uniforms.uAmt.value=o.amt;};
window.READY=true;
