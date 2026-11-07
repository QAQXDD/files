// Burned-in captions: torn cream paper strips (deckle edge, 1px ink outline, soft drop shadow)
// Chinese captions — Noto Serif CJK SC, max 2 lines, max ~12 chars per line.
export const CAPS=[
  {t0:0.5,t1:3.8,lines:['墙切开了，','每块砖都是「下个月」。']},
  {t0:12.0,t1:17.5,lines:['每天砌砖，','每天一张「下个月」。']},
  {t0:31.0,t1:35.6,lines:['他抠下一块砖——','是张纸条。']},
  {t0:41.0,t1:43.8,lines:['一张条子不值钱，','攒多了就是一堵墙。']},
  {t0:55.5,t1:59.5,lines:['下个月，','墙还在那儿。']},
];
const CX=485,CY=360,FONT=64,LH=84,MAXW=800;
function mul(s){let a=s>>>0;return()=>{a=(a+0x6D2B79F5)>>>0;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296;};}
function tornPath(g,x0,y0,x1,y1,seed){const r=mul(seed);const pts=[];const st=7;
  for(let x=x0;x<x1;x+=st)pts.push([x,y0+(r()-0.5)*5+Math.sin(x*0.05+seed)*1.5]);
  for(let y=y0;y<y1;y+=st)pts.push([x1+(r()-0.5)*7,y]);
  for(let x=x1;x>x0;x-=st)pts.push([x,y1+(r()-0.5)*6+Math.sin(x*0.07+seed*2)*1.8]);
  for(let y=y1;y>y0;y-=st)pts.push([x0+(r()-0.5)*7,y]);
  g.beginPath();g.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)g.lineTo(pts[i][0],pts[i][1]);g.closePath();}
function strip(g,cx,cy,lines,font,lh,style,seed,alpha,dy){g.save();g.globalAlpha=alpha;g.font=font;
  let fs=parseFloat(font.match(/(\d+)px/)[1]);let w=Math.max(...lines.map(l=>g.measureText(l).width));
  if(w>MAXW){const k=MAXW/w;fs=Math.floor(fs*k);font=font.replace(/\d+px/,fs+'px');lh=lh*k;g.font=font;w=Math.max(...lines.map(l=>g.measureText(l).width));}
  const padX=34,padY=style==='sub'?16:24;const hgt=lines.length*lh+padY*2-(lh-fs*1.05);const x0=cx-w/2-padX,x1=cx+w/2+padX,y0=cy-hgt/2+dy,y1=cy+hgt/2+dy;
  g.shadowColor='rgba(0,0,0,.35)';g.shadowBlur=8;g.shadowOffsetY=3;tornPath(g,x0,y0,x1,y1,seed);g.fillStyle='#f6f1e6';g.fill();
  g.shadowColor='transparent';g.shadowBlur=0;g.shadowOffsetY=0;
  // paper tooth
  const r=mul(seed+9);g.save();tornPath(g,x0,y0,x1,y1,seed);g.clip();for(let i=0;i<260;i++){g.fillStyle=`rgba(90,70,50,${r()*0.06})`;g.fillRect(x0+r()*(x1-x0),y0+r()*(y1-y0),r()*3+1,1);}g.restore();
  g.lineWidth=1;g.strokeStyle='#2a2622';tornPath(g,x0,y0,x1,y1,seed);g.stroke();
  g.fillStyle=style==='sub'?'rgba(42,38,34,.75)':'#2a2622';g.textAlign='center';g.textBaseline='alphabetic';
  lines.forEach((l,i)=>g.fillText(l,cx,y0+padY+fs*0.82+i*lh));g.restore();return y1;}
export function drawCaptions(g,t){
  const f=Math.round(t*30);
  CAPS.forEach((c,ci)=>{const f0=Math.round(c.t0*30),f1=Math.round(c.t1*30);if(f<f0||f>=f1)return;
    const inK=Math.min(1,(f-f0+1)/8),outK=Math.min(1,(f1-f)/6);const a=Math.min(inK,outK);const dy=(1-Math.min(1,(f-f0)/8))*6;
    strip(g,CX,CY,c.lines,`700 ${FONT}px "Noto Serif CJK SC"`,LH,'main',ci*31+5,a,dy);});
}
