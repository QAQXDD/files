(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=Math.PI/180,t=180/Math.PI,n=[];for(let e=0;e<256;e++)n[e]=(e<16?`0`:``)+e.toString(16);function r(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(n[e&255]+n[e>>8&255]+n[e>>16&255]+n[e>>24&255]+`-`+n[t&255]+n[t>>8&255]+`-`+n[t>>16&15|64]+n[t>>24&255]+`-`+n[r&63|128]+n[r>>8&255]+`-`+n[r>>16&255]+n[r>>24&255]+n[i&255]+n[i>>8&255]+n[i>>16&255]+n[i>>24&255]).toLowerCase()}var i=(e,t,n)=>Math.max(t,Math.min(n,e)),a=(e,t)=>(e%t+t)%t,o=(e,t,n,r,i)=>r+(e-t)*(i-r)/(n-t),s=(e,t,n)=>e===t?0:(n-e)/(t-e),c=(e,t,n)=>(1-n)*e+n*t,l=(e,t,n,r)=>c(e,t,1-Math.exp(-n*r)),u=(e,t=1)=>t-Math.abs(a(e,t*2)-t);function d(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function f(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}var p=(e,t)=>e+Math.floor(Math.random()*(t-e+1)),m=(e,t)=>e+Math.random()*(t-e),h=e=>e*(.5-Math.random()),g=1234567;function _(e){e!==void 0&&(g=e);let t=g+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}var v=t=>t*e,y=e=>e*t,b=e=>!(e&e-1)&&e!==0,x=e=>2**Math.ceil(Math.log(e)/Math.LN2),S=e=>2**Math.floor(Math.log(e)/Math.LN2);function C(e,t){switch(t.constructor){case Float32Array:case Float64Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:return e}}function w(e,t){switch(t.constructor){case Float32Array:case Float64Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:return e}}var T={normalize:w,denormalize:C,DEG2RAD:e,RAD2DEG:t,generateUUID:r,clamp:i,euclideanModulo:a,mapLinear:o,inverseLerp:s,lerp:c,damp:l,pingpong:u,smoothstep:d,smootherstep:f,randInt:p,randFloat:m,randFloatSpread:h,seededRandom:_,degToRad:v,radToDeg:y,isPowerOfTwo:b,ceilPowerOfTwo:x,floorPowerOfTwo:S},E=class e{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){return e===0?this.x=t:this.y=t,this}getComponent(e){return e===0?this.x:this.y}clone(){return new e(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:Math.acos(Math.max(-1,Math.min(1,this.dot(e)/t)))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};E.prototype.isVector2=!0;var D=class e{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback=O}static slerpFlat(t,n,r,i,a,o,s){let c=new e().fromArray(r,i),l=new e().fromArray(a,o);c.slerp(l,s).toArray(t,n)}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new e(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}identity(){return this.set(0,0,0,1)}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos(n/2),s=Math.cos(r/2),c=Math.cos(i/2),l=Math.sin(n/2),u=Math.sin(r/2),d=Math.sin(i/2);switch(a){case`XYZ`:this._x=l*s*c+o*u*d,this._y=o*u*c-l*s*d,this._z=o*s*d+l*u*c,this._w=o*s*c-l*u*d;break;case`YXZ`:this._x=l*s*c+o*u*d,this._y=o*u*c-l*s*d,this._z=o*s*d-l*u*c,this._w=o*s*c+l*u*d;break;case`ZXY`:this._x=l*s*c-o*u*d,this._y=o*u*c+l*s*d,this._z=o*s*d+l*u*c,this._w=o*s*c-l*u*d;break;case`ZYX`:this._x=l*s*c-o*u*d,this._y=o*u*c+l*s*d,this._z=o*s*d-l*u*c,this._w=o*s*c+l*u*d;break;case`YZX`:this._x=l*s*c+o*u*d,this._y=o*u*c+l*s*d,this._z=o*s*d-l*u*c,this._w=o*s*c-l*u*d;break;case`XZY`:this._x=l*s*c-o*u*d,this._y=o*u*c-l*s*d,this._z=o*s*d+l*u*c,this._w=o*s*c+l*u*d;break;default:throw Error(`Quaternion.setFromEuler: unknown order `+a)}return t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.x*t.x+e.y*t.y+e.z*t.z+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Math.max(-1,Math.min(1,this.dot(e)))))}rotateTowards(e,t){let n=this.angleTo(e);return n===0?this:this.slerp(e,Math.min(1,t/n))}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this.lengthSq())}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z,s=e._x,c=e._y,l=e._z,u=e._w;if(o<0&&(s=-s,c=-c,l=-l,u=-u,o=-o),o>=1)return this;let d=1-o*o;if(d<=2**-52){let e=1-t;return this._w=e*a+t*u,this._x=e*n+t*s,this._y=e*r+t*c,this._z=e*i+t*l,this.normalize()}let f=Math.sqrt(d),p=Math.atan2(f,o),m=Math.sin((1-t)*p)/f,h=Math.sin(t*p)/f;return this._w=a*m+u*h,this._x=n*m+s*h,this._y=r*m+c*h,this._z=i*m+l*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this.set(e.getX(t),e.getY(t),e.getZ(t),e.getW(t))}_onChange(e){return this._onChangeCallback=e,this}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};function O(){}D.prototype.isQuaternion=!0;var k=new D,A=class e{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){return e===0?this.x=t:e===1?this.y=t:this.z=t,this}getComponent(e){return e===0?this.x:e===1?this.y:this.z}clone(){return new e(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}applyEuler(e){return this.applyQuaternion(k.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(k.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){let t=this.dot(e)/(e.lengthSq()||1);return this.addScaledVector(e,-t)}reflect(e){return this.addScaledVector(e,-2*this.dot(e))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());return t===0?Math.PI/2:Math.acos(Math.max(-1,Math.min(1,this.dot(e)/t)))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.set(t,n,r)}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};A.prototype.isVector3=!0;var j=class e{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){return this[`xyzw`[e]]=t,this}getComponent(e){return this[`xyzw`[e]]}clone(){return new e(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.dot(this)}length(){return Math.sqrt(this.dot(this))}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};j.prototype.isVector4=!0;var M=2001,ee=new A,te=new A,ne=new A,N=new A,re=new D,ie=new A(1,1,1),ae=new A,P=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)t[e]=n[e];return this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1)}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1)}extractRotation(e){let t=this.elements,n=e.elements,r=1/ee.setFromMatrixColumn(e,0).length(),i=1/ee.setFromMatrixColumn(e,1).length(),a=1/ee.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){return this.compose(ae,re.setFromEuler(e,!1),ie)}makeRotationFromQuaternion(e){return this.compose(ae,e,ie)}lookAt(e,t,n){let r=this.elements;return N.subVectors(e,t),N.lengthSq()===0&&(N.z=1),N.normalize(),te.crossVectors(n,N),te.lengthSq()===0&&(Math.abs(n.z)===1?N.x+=1e-4:N.z+=1e-4,N.normalize(),te.crossVectors(n,N)),te.normalize(),ne.crossVectors(N,te),r[0]=te.x,r[4]=ne.x,r[8]=N.x,r[1]=te.y,r[5]=ne.y,r[9]=N.y,r[2]=te.z,r[6]=ne.z,r[10]=N.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],ee=r[3],te=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*ee,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*M+c*N,i[1]=l*x+u*T+d*k+f*ee,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*M+f*N,i[2]=p*x+m*T+h*k+g*ee,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*M+g*N,i[3]=_*x+v*T+y*k+b*ee,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*M+b*N,this}multiplyScalar(e){let t=this.elements;for(let n=0;n<16;n++)t[n]*=e;return this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=d*g-f*h,v=u*g-f*m,y=u*h-d*m,b=l*g-f*p,x=l*h-d*p,S=l*m-u*p;return t*(o*_-s*v+c*y)-n*(a*_-s*b+c*x)+r*(a*v-o*b+c*S)-i*(a*y-o*x+s*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements;return t[0]*=e.x,t[4]*=e.y,t[8]*=e.z,t[1]*=e.x,t[5]*=e.y,t[9]*=e.z,t[2]*=e.x,t[6]*=e.y,t[10]*=e.z,t[3]*=e.x,t[7]*=e.y,t[11]*=e.z,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1)}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1)}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1)}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1)}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1)}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1)}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1)}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Math.hypot(r[0],r[1],r[2]),a=Math.hypot(r[4],r[5],r[6]),o=Math.hypot(r[8],r[9],r[10]);this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14];let s=oe.copy(this),c=s.elements,l=1/i,u=1/a,d=1/o;return c[0]*=l,c[1]*=l,c[2]*=l,c[4]*=u,c[5]*=u,c[6]*=u,c[8]*=d,c[9]*=d,c[10]*=d,t.setFromRotationMatrix(s),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=M,s=!0){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m,h=a===1/0;if(s){if(o!==2001)throw Error(`Matrix4.makePerspective: reversed depth requires WebGPU clip space`);p=h?0:i/(a-i),m=h?i:a*i/(a-i)}else o===2001?(p=h?-1:-a/(a-i),m=h?-i:-a*i/(a-i)):(p=h?-1:-(a+i)/(a-i),m=h?-2*i:-2*a*i/(a-i));return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=M,s=!0){let c=this.elements,l=1/(t-e),u=1/(n-r),d=1/(a-i),f=(t+e)*l,p=(n+r)*u,m,h;return s?(m=a*d,h=d):o===2001?(m=-i*d,h=-d):(m=-(a+i)*d,h=-2*d),c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=h,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){for(let t=0;t<16;t++)if(this.elements[t]!==e.elements[t])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;for(let r=0;r<16;r++)e[t+r]=n[r];return e}};P.prototype.isMatrix4=!0;var oe=new P,se=new P,ce=new D,le=e=>Math.max(-1,Math.min(1,e)),ue=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this._x=t,this._y=n,this._z=r,this._order=i,this._onChangeCallback=de}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new e(this._x,this._y,this._z,this._order)}copy(e){return this.set(e._x,e._y,e._z,e._order)}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10],p=.9999999;switch(t){case`XYZ`:this._y=Math.asin(le(o)),Math.abs(o)<p?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-le(l)),Math.abs(l)<p?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(le(d)),Math.abs(d)<p?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-le(u)),Math.abs(u)<p?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(le(s)),Math.abs(s)<p?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-le(a)),Math.abs(a)<p?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:throw Error(`Euler.setFromRotationMatrix: unknown order `+t)}return this._order=t,n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return se.makeRotationFromQuaternion(e),this.setFromRotationMatrix(se,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ce.setFromEuler(this),this.setFromQuaternion(ce,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};function de(){}ue.DEFAULT_ORDER=`XYZ`,ue.prototype.isEuler=!0;var fe=class e{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1)}copy(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)t[e]=n[e];return this}clone(){return new e().fromArray(this.elements)}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10])}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;for(let n=0;n<9;n++)t[n]*=e;return this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}makeTranslation(e,t){return e.isVector2&&(t=e.y,e=e.x),this.set(1,0,e,0,1,t,0,0,1)}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1)}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1)}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1)}scale(e,t){return this.premultiply(pe.makeScale(e,t))}rotate(e){return this.premultiply(pe.makeRotation(-e))}translate(e,t){return this.premultiply(pe.makeTranslation(e,t))}equals(e){for(let t=0;t<9;t++)if(this.elements[t]!==e.elements[t])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){for(let n=0;n<9;n++)e[t+n]=this.elements[n];return e}};fe.prototype.isMatrix3=!0;var pe=new fe,me=`srgb`,he=`srgb-linear`,ge=e=>e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4,_e=e=>e<.0031308?e*12.92:1.055*e**.41666-.055,ve=e=>Math.max(0,Math.min(1,e)),ye=(e,t)=>(e%t+t)%t;function be(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var xe={h:0,s:0,l:0},Se=class e{constructor(e,t,n){this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){if(e===void 0)return this;e&&e.isColor?this.copy(e):typeof e==`number`?this.setHex(e):typeof e==`string`&&this.setStyle(e)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=me){return e=Math.floor(e),this.setRGB((e>>16&255)/255,(e>>8&255)/255,(e&255)/255,t)}setRGB(e,t,n,r=he){return r===`srgb`&&(e=ge(e),t=ge(t),n=ge(n)),this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n,r=he){if(e=ye(e,1),t=ve(t),n=ve(n),t===0)return this.setRGB(n,n,n,r);let i=n<=.5?n*(1+t):n+t-n*t,a=2*n-i;return this.setRGB(be(a,i,e+1/3),be(a,i,e),be(a,i,e-1/3),r)}setStyle(e,t=me){let n;if(n=/^#([A-Fa-f\d]+)$/.exec(e)){let e=n[1];if(e.length===3)return this.setRGB(parseInt(e[0],16)/15,parseInt(e[1],16)/15,parseInt(e[2],16)/15,t);if(e.length===6)return this.setHex(parseInt(e,16),t)}else if(n=/^rgba?\(\s*([\d.]+)(%?)\s*,\s*([\d.]+)%?\s*,\s*([\d.]+)%?\s*(?:,\s*[\d.]+\s*)?\)$/.exec(e)){let e=n[2]===`%`?100:255;return this.setRGB(Math.min(1,n[1]/e),Math.min(1,n[3]/e),Math.min(1,n[4]/e),t)}else if(n=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%\s*(?:,\s*[\d.]+\s*)?\)$/.exec(e))return this.setHSL(n[1]/360,n[2]/100,n[3]/100,t);else if(Ce[e.toLowerCase()]!==void 0)return this.setHex(Ce[e.toLowerCase()],t);return console.warn(`Color: unknown color `+e),this}clone(){return new e(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ge(e.r),this.g=ge(e.g),this.b=ge(e.b),this}copyLinearToSRGB(e){return this.r=_e(e.r),this.g=_e(e.g),this.b=_e(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this)}convertLinearToSRGB(){return this.copyLinearToSRGB(this)}getHex(e=me){let t=this.r,n=this.g,r=this.b;return e===`srgb`&&(t=_e(t),n=_e(n),r=_e(r)),Math.round(ve(t)*255)*65536+Math.round(ve(n)*255)*256+Math.round(ve(r)*255)}getHexString(e=me){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=he){let n=this.r,r=this.g,i=this.b;t===`srgb`&&(n=_e(n),r=_e(r),i=_e(i));let a=Math.max(n,r,i),o=Math.min(n,r,i),s=0,c=0,l=(o+a)/2;if(o!==a){let e=a-o;c=l<=.5?e/(a+o):e/(2-a-o),s=a===n?(r-i)/e+(r<i?6:0):a===r?(i-n)/e+2:(n-r)/e+4,s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=he){return e.r=this.r,e.g=this.g,e.b=this.b,t===`srgb`&&(e.r=_e(e.r),e.g=_e(e.g),e.b=_e(e.b)),e}getStyle(e=me){let t=this.getRGB({},e);return`rgb(${Math.round(t.r*255)},${Math.round(t.g*255)},${Math.round(t.b*255)})`}offsetHSL(e,t,n){return this.getHSL(xe),this.setHSL(xe.h+e,xe.s+t,xe.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Se.prototype.isColor=!0;var Ce={black:0,white:16777215,red:16711680,green:32768,lime:65280,blue:255,yellow:16776960,cyan:65535,magenta:16711935,gray:8421504,grey:8421504,orange:16753920};Se.NAMES=Ce;var we=new A,Te=Array.from({length:8},()=>new A),Ee=class e{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0;t<e.length;t+=3)this.expandByPoint(we.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0;t<e.count;t++)this.expandByPoint(we.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t of e)this.expandByPoint(t);return this}setFromCenterAndSize(e,t){return we.copy(t).multiplyScalar(.5),this.min.copy(e).sub(we),this.max.copy(e).add(we),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new e().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t&&r!==void 0)for(let t=0;t<r.count;t++)this.expandByPoint(we.fromBufferAttribute(r,t).applyMatrix4(e.matrixWorld));else n.boundingBox===null&&n.computeBoundingBox(),De.copy(n.boundingBox).applyMatrix4(e.matrixWorld),this.union(De)}for(let n of e.children)this.expandByObject(n,t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,we),we.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n,r=e.normal;return r.x>0?(t=r.x*this.min.x,n=r.x*this.max.x):(t=r.x*this.max.x,n=r.x*this.min.x),r.y>0?(t+=r.y*this.min.y,n+=r.y*this.max.y):(t+=r.y*this.max.y,n+=r.y*this.min.y),r.z>0?(t+=r.z*this.min.z,n+=r.z*this.max.z):(t+=r.z*this.max.z,n+=r.z*this.min.z),t<=-e.constant&&n>=-e.constant}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,we).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?(e.makeEmpty(),e):(this.getCenter(e.center),e.radius=this.getSize(we).length()*.5,e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;let t=this.min,n=this.max;return Te[0].set(t.x,t.y,t.z).applyMatrix4(e),Te[1].set(t.x,t.y,n.z).applyMatrix4(e),Te[2].set(t.x,n.y,t.z).applyMatrix4(e),Te[3].set(t.x,n.y,n.z).applyMatrix4(e),Te[4].set(n.x,t.y,t.z).applyMatrix4(e),Te[5].set(n.x,t.y,n.z).applyMatrix4(e),Te[6].set(n.x,n.y,t.z).applyMatrix4(e),Te[7].set(n.x,n.y,n.z).applyMatrix4(e),this.setFromPoints(Te)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};Ee.prototype.isBox3=!0;var De=new Ee,Oe=new Ee,ke=new A,Ae=class e{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){t===void 0?Oe.setFromPoints(e).getCenter(this.center):this.center.copy(t);let n=0;for(let t of e)n=Math.max(n,this.center.distanceToSquared(t));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}clone(){return new e().copy(this)}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&t.sub(this.center).normalize().multiplyScalar(this.radius).add(this.center),t}getBoundingBox(e){return this.isEmpty()?e.makeEmpty():(e.set(this.center,this.center),e.expandByScalar(this.radius))}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ke.subVectors(e,this.center);let t=ke.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ke,n/e),this.radius+=n}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e);let t=this.center.distanceTo(e.center);if(t+e.radius<=this.radius)return this;if(t+this.radius<=e.radius)return this.copy(e);let n=(t+this.radius+e.radius)*.5;return this.center.lerp(e.center,(n-this.radius)/t),this.radius=n,this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}};Ae.prototype.isSphere=!0;var je=new A,Me=new A,Ne=new fe,Pe=class e{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(e),this}setFromCoplanarPoints(e,t,n){let r=je.subVectors(n,t).cross(Me.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}clone(){return new e().copy(this)}normalize(){let e=this.normal.length();if(e===0)return this;let t=1/e;return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}applyMatrix4(e,t){let n=t||Ne.getNormalMatrix(e),r=this.coplanarPoint(je).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}};Pe.prototype.isPlane=!0;var Fe=new Ae,Ie=new A,Le=class e{constructor(e=new Pe,t=new Pe,n=new Pe,r=new Pe,i=new Pe,a=new Pe){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){for(let t=0;t<6;t++)this.planes[t].copy(e.planes[t]);return this}clone(){return new e().copy(this)}setFromProjectionMatrix(e,t=M,n=!0){let r=this.planes,i=e.elements,a=i[0],o=i[4],s=i[8],c=i[12],l=i[1],u=i[5],d=i[9],f=i[13],p=i[2],m=i[6],h=i[10],g=i[14],_=i[3],v=i[7],y=i[11],b=i[15];return r[0].setComponents(_+a,v+o,y+s,b+c).normalize(),r[1].setComponents(_-a,v-o,y-s,b-c).normalize(),r[2].setComponents(_+l,v+u,y+d,b+f).normalize(),r[3].setComponents(_-l,v-u,y-d,b-f).normalize(),n?(r[4].setComponents(_-p,v-m,y-h,b-g).normalize(),r[5].setComponents(p,m,h,g).normalize()):t===2e3?(r[4].setComponents(_+p,v+m,y+h,b+g).normalize(),r[5].setComponents(_-p,v-m,y-h,b-g).normalize()):(r[4].setComponents(p,m,h,g).normalize(),r[5].setComponents(_-p,v-m,y-h,b-g).normalize()),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Fe.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Fe)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n].normal;if(Ie.x=r.x>0?e.max.x:e.min.x,Ie.y=r.y>0?e.max.y:e.min.y,Ie.z=r.z>0?e.max.z:e.min.z,t[n].distanceToPoint(Ie)<0)return!1}return!0}containsPoint(e){for(let t=0;t<6;t++)if(this.planes[t].distanceToPoint(e)<0)return!1;return!0}},Re=class{constructor(){this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}getPoint(){throw Error(`Curve.getPoint() not implemented`)}getPointAt(e,t){return this.getPoint(this.getUtoTmapping(e),t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[0],n=this.getPoint(0),r=0;for(let i=1;i<=e;i++){let a=this.getPoint(i/e);r+=a.distanceTo(n),t.push(r),n=a}return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=n.length,i=t===null?e*n[r-1]:t,a=0,o=r-1;for(;a<=o;){let e=Math.floor(a+(o-a)/2),t=n[e]-i;if(t<0)a=e+1;else if(t>0)o=e-1;else{o=e;break}}let s=o;if(n[s]===i)return s/(r-1);let c=n[s],l=n[s+1];return(s+(i-c)/(l-c))/(r-1)}getTangent(e,t=new A){let n=1e-4,r=Math.max(0,e-n),i=Math.min(1,e+n),a=this.getPoint(r),o=this.getPoint(i);return t.copy(o).sub(a).normalize()}getTangentAt(e,t){return this.getTangent(this.getUtoTmapping(e),t)}computeFrenetFrames(e,t){let n=new A,r=[],i=[],a=[],o=new A,s=new P;for(let t=0;t<=e;t++)r[t]=this.getTangentAt(t/e,new A);i[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Math.max(-1,Math.min(1,r[t-1].dot(r[t]))));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Math.max(-1,Math.min(1,i[0].dot(i[e]))))/e;r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}};function ze(e,t,n,r,i){e[0]=t,e[1]=r,e[2]=-3*t+3*n-2*r-i,e[3]=2*t-2*n+r+i}function Be(e,t,n,r,i,a){ze(e,n,r,a*(r-t),a*(i-n))}function Ve(e,t,n,r,i,a,o,s){let c=(n-t)/a-(r-t)/(a+o)+(r-n)/o,l=(r-n)/o-(i-n)/(o+s)+(i-r)/s;c*=o,l*=o,ze(e,n,r,c,l)}var He=(e,t)=>e[0]+t*(e[1]+t*(e[2]+t*e[3])),Ue=[0,0,0,0],We=[0,0,0,0],Ge=[0,0,0,0],Ke=new A,qe=new A,Je=class e extends Re{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){let n=this.points,r=n.length,i=(r-+!this.closed)*e,a=Math.floor(i),o=i-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let s,c;s=this.closed||a>0?n[(a-1)%r]:Ke.subVectors(n[0],n[1]).add(n[0]);let l=n[a%r],u=n[(a+1)%r];if(c=this.closed||a+2<r?n[(a+2)%r]:qe.subVectors(n[r-1],n[r-2]).add(n[r-1]),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=s.distanceToSquared(l)**+e,n=l.distanceToSquared(u)**+e,r=u.distanceToSquared(c)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Ve(Ue,s.x,l.x,u.x,c.x,t,n,r),Ve(We,s.y,l.y,u.y,c.y,t,n,r),Ve(Ge,s.z,l.z,u.z,c.z,t,n,r)}else Be(Ue,s.x,l.x,u.x,c.x,this.tension),Be(We,s.y,l.y,u.y,c.y,this.tension),Be(Ge,s.z,l.z,u.z,c.z,this.tension);return t.set(He(Ue,o),He(We,o),He(Ge,o))}copy(e){return super.copy(e),this.points=e.points.map(e=>e.clone()),this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}clone(){return new e().copy(this)}};Je.prototype.isCatmullRomCurve3=!0;var Ye=()=>typeof performance<`u`?performance.now():Date.now(),Xe=class{constructor(){this._startTime=Ye(),this._previousTime=0,this._currentTime=0,this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=()=>{e.hidden===!1&&this.reset()},e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=Ye()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?Ye():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}},Ze=new Float32Array(1),Qe=new Uint32Array(Ze.buffer);function $e(e){Math.abs(e)>65504&&console.warn(`DataUtils.toHalfFloat(): value out of range.`),e=Math.max(-65504,Math.min(65504,e)),Ze[0]=e;let t=Qe[0],n=t>>>16&32768,r=t>>>23&255,i=t&8388607;if(r===255)return n|31744|i>>>13;let a=r-127+15;return a>=31?n|31744:a<=0?a<-10?n:n|(i|8388608)>>>14-a:n|a<<10|i>>>13}function et(e){let t=e&32768?-1:1,n=e>>>10&31,r=e&1023;return n===0?t*2**-14*(r/1024):n===31?r?NaN:t*(1/0):t*2**(n-15)*(1+r/1024)}var tt={toHalfFloat:$e,fromHalfFloat:et},nt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].includes(t)}removeEventListener(e,t){let n=this._listeners&&this._listeners[e];if(n===void 0)return;let r=n.indexOf(t);r!==-1&&n.splice(r,1)}dispatchEvent(e){let t=this._listeners&&this._listeners[e.type];if(t!==void 0){e.target=this;for(let n of t.slice())n.call(this,e);e.target=null}}},rt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},it=0,at=new A,ot=new D,st=new P,ct=new A,lt=new A,ut=new A,dt=new D,ft=new A(1,0,0),pt=new A(0,1,0),mt=new A(0,0,1),ht={type:`added`},gt={type:`removed`},_t={type:`childadded`,child:null},vt={type:`childremoved`,child:null},yt=class e extends nt{constructor(){super(),Object.defineProperty(this,"id",{value:it++}),this.uuid=r(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new A,n=new ue,i=new D,a=new A(1,1,1);n._onChange(()=>i.setFromEuler(n,!1)),i._onChange(()=>n.setFromQuaternion(i,void 0,!1)),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new P},normalMatrix:{value:new fe}}),this.matrix=new P,this.matrixWorld=new P,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}onBeforeRender(){}onAfterRender(){}onBeforeShadow(){}onAfterShadow(){}dispose(){this.dispatchEvent({type:`dispose`})}applyMatrix4(e){return this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ot.setFromAxisAngle(e,t),this.quaternion.multiply(ot),this}rotateOnWorldAxis(e,t){return ot.setFromAxisAngle(e,t),this.quaternion.premultiply(ot),this}rotateX(e){return this.rotateOnAxis(ft,e)}rotateY(e){return this.rotateOnAxis(pt,e)}rotateZ(e){return this.rotateOnAxis(mt,e)}translateOnAxis(e,t){return at.copy(e).applyQuaternion(this.quaternion),this.position.add(at.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ft,e)}translateY(e){return this.translateOnAxis(pt,e)}translateZ(e){return this.translateOnAxis(mt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(st.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ct.copy(e):ct.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),lt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?st.lookAt(lt,ct,this.up):st.lookAt(ct,lt,this.up),this.quaternion.setFromRotationMatrix(st),r&&(st.extractRotation(r.matrixWorld),ot.setFromRotationMatrix(st),this.quaternion.premultiply(ot.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this||e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ht),_t.child=e,this.dispatchEvent(_t),_t.child=null),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gt),vt.child=e,this.dispatchEvent(vt),vt.child=null),this}removeFromParent(){return this.parent!==null&&this.parent.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),st.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),st.multiply(e.parent.matrixWorld)),e.applyMatrix4(st),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ht),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n of this.children){let r=n.getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);for(let r of this.children)r.getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lt,e,ut),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lt,dt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(n===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(n.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].matrixWorldAutoUpdate===!0&&e[t].updateWorldMatrix(!1,!0)}}clone(e){return new this.constructor().copy(this,e)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,t.onBeforeRender!==e.prototype.onBeforeRender&&(this.onBeforeRender=t.onBeforeRender),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let e of t.children)this.add(e.clone());return this}};yt.DEFAULT_UP=new A(0,1,0),yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,yt.prototype.isObject3D=!0;var bt=class extends yt{constructor(){super(),this.type=`Group`}};bt.prototype.isGroup=!0;var xt=class extends yt{constructor(){super(),this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ue,this.environmentIntensity=1,this.environmentRotation=new ue,this.overrideMaterial=null}copy(e,t){return super.copy(e,t),this.background=e.background,this.environment=e.environment,this.fog=e.fog,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),this.environmentIntensity=e.environmentIntensity,this.overrideMaterial=e.overrideMaterial,this.matrixAutoUpdate=e.matrixAutoUpdate,this}};xt.prototype.isScene=!0;var St=35044,Ct=35048,wt=new A,Tt=new E,Et={getComponent(e,t){let n=this.array[this._idx(e,t)];return this.normalized?C(n,this.array):n},setComponent(e,t,n){return this.array[this._idx(e,t)]=this.normalized?w(n,this.array):n,this},getX(e){return this.getComponent(e,0)},getY(e){return this.getComponent(e,1)},getZ(e){return this.getComponent(e,2)},getW(e){return this.getComponent(e,3)},setX(e,t){return this.setComponent(e,0,t)},setY(e,t){return this.setComponent(e,1,t)},setZ(e,t){return this.setComponent(e,2,t)},setW(e,t){return this.setComponent(e,3,t)},setXY(e,t,n){return this.setComponent(e,0,t),this.setComponent(e,1,n)},setXYZ(e,t,n,r){return this.setComponent(e,0,t),this.setComponent(e,1,n),this.setComponent(e,2,r)},setXYZW(e,t,n,r,i){return this.setComponent(e,0,t),this.setComponent(e,1,n),this.setComponent(e,2,r),this.setComponent(e,3,i)},applyMatrix3(e){if(this.itemSize===2)for(let t=0;t<this.count;t++)Tt.fromBufferAttribute(this,t).applyMatrix3(e),this.setXY(t,Tt.x,Tt.y);else if(this.itemSize===3)for(let t=0;t<this.count;t++)wt.fromBufferAttribute(this,t).applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this},applyMatrix4(e){for(let t=0;t<this.count;t++)wt.fromBufferAttribute(this,t).applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this},applyNormalMatrix(e){for(let t=0;t<this.count;t++)wt.fromBufferAttribute(this,t).applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this},transformDirection(e){for(let t=0;t<this.count;t++)wt.fromBufferAttribute(this,t).transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}},Dt=class extends nt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`BufferAttribute: array should be a Typed Array.`);this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=St,this.updateRanges=[],this.gpuType=1015,this.version=0,this.onUploadCallback=Ot}set needsUpdate(e){e===!0&&this.version++}_idx(e,t){return e*this.itemSize+t}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}onUpload(e){return this.onUploadCallback=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){let r=this.itemSize;e*=r,n*=t.itemSize;for(let i=0;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}set(e,t=0){return this.array.set(e,t),this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}dispose(){this.dispatchEvent({type:`dispose`})}};Object.assign(Dt.prototype,Et),Dt.prototype.isBufferAttribute=!0;function Ot(){}var kt=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},At=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},jt=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mt=class e extends Dt{constructor(e,t,n,r=1){super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(){return new e(this.array,this.itemSize).copy(this)}};Mt.prototype.isInstancedBufferAttribute=!0;var Nt=class extends nt{constructor(e,t){super(),this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=St,this.updateRanges=[],this.version=0,this.uuid=r(),this.onUploadCallback=Ot}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}set(e,t=0){return this.array.set(e,t),this}onUpload(e){return this.onUploadCallback=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0;r<this.stride;r++)this.array[e+r]=t.array[n+r];return this}clone(){return new this.constructor(new this.array.constructor(this.array),this.stride).copy(this)}dispose(){this.dispatchEvent({type:`dispose`})}};Nt.prototype.isInterleavedBuffer=!0;var Pt=class e extends Nt{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(){return new e(new this.array.constructor(this.array),this.stride,this.meshPerAttribute)}};Pt.prototype.isInstancedInterleavedBuffer=!0;var Ft=class{constructor(e,t,n,r=!1){this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}_idx(e,t){return e*this.data.stride+this.offset+t}clone(){let e=new this.array.constructor(this.count*this.itemSize);for(let t=0;t<this.count;t++)for(let n=0;n<this.itemSize;n++)e[t*this.itemSize+n]=this.array[this._idx(t,n)];return new Dt(e,this.itemSize,this.normalized)}};Object.assign(Ft.prototype,Et),Ft.prototype.isInterleavedBufferAttribute=!0;var It=0,Lt=new P,Rt=new fe,zt=new D,Bt=new Ee,Vt=new A,Ht=new A;function Ut(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}var Wt=class e extends nt{constructor(){super(),Object.defineProperty(this,"id",{value:It++}),this.uuid=r(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ut(e)?At:kt)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this.attributesVersion=(this.attributesVersion||0)+1,this}deleteAttribute(e){return delete this.attributes[e],this.attributesVersion=(this.attributesVersion||0)+1,this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;n!==void 0&&(n.applyNormalMatrix(Rt.getNormalMatrix(e)),n.needsUpdate=!0);let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return this.applyMatrix4(Lt.makeRotationFromQuaternion(e))}rotateX(e){return this.applyMatrix4(Lt.makeRotationX(e))}rotateY(e){return this.applyMatrix4(Lt.makeRotationY(e))}rotateZ(e){return this.applyMatrix4(Lt.makeRotationZ(e))}translate(e,t,n){return this.applyMatrix4(Lt.makeTranslation(e,t,n))}scale(e,t,n){return this.applyMatrix4(Lt.makeScale(e,t,n))}lookAt(e){return Lt.lookAt(e,Vt.set(0,0,0),new A(0,1,0)),zt.setFromRotationMatrix(Lt),this.applyQuaternion(zt)}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ht).negate(),this.translate(Ht.x,Ht.y,Ht.z)}setFromPoints(e){let t=[];for(let n of e)t.push(n.x,n.y,n.z||0);return this.setAttribute(`position`,new jt(t,3))}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ee);let e=this.attributes.position;if(e===void 0){this.boundingBox.makeEmpty();return}this.boundingBox.setFromBufferAttribute(e)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ae);let e=this.attributes.position;if(e===void 0){this.boundingSphere.makeEmpty();return}let t=this.boundingSphere.center;Bt.setFromBufferAttribute(e).getCenter(t);let n=0;for(let r=0;r<e.count;r++)n=Math.max(n,t.distanceToSquared(Vt.fromBufferAttribute(e,r)));this.boundingSphere.radius=Math.sqrt(n)}computeTangents(){let e=this.index,t=this.attributes.position,n=this.attributes.normal,r=this.attributes.uv;if(e===null||t===void 0||n===void 0||r===void 0){console.error(`BufferGeometry.computeTangents(): missing required attributes (index, position, normal or uv)`);return}let i=t.count;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new Dt(new Float32Array(4*i),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<i;e++)o[e]=new A,s[e]=new A;let c=new A,l=new A,u=new A,d=new E,f=new E,p=new E,m=new A,h=new A,g=(e,n,i)=>{c.fromBufferAttribute(t,e),l.fromBufferAttribute(t,n),u.fromBufferAttribute(t,i),d.fromBufferAttribute(r,e),f.fromBufferAttribute(r,n),p.fromBufferAttribute(r,i),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[n].add(m),o[i].add(m),s[e].add(h),s[n].add(h),s[i].add(h))},_=this.groups.length?this.groups:[{start:0,count:e.count}];for(let t of _)for(let n=t.start;n<t.start+t.count;n+=3)g(e.getX(n),e.getX(n+1),e.getX(n+2));let v=new A,y=new A,b=new A,x=new A,S=e=>{y.fromBufferAttribute(n,e),b.copy(y);let t=o[e];v.copy(t).sub(y.multiplyScalar(y.dot(t))).normalize(),x.crossVectors(b,t);let r=x.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,r)};for(let t of _)for(let n=t.start;n<t.start+t.count;n++)S(e.getX(n))}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t===void 0)return;let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0;e<n.count;e++)n.setXYZ(e,0,0,0);let r=new A,i=new A,a=new A,o=new A,s=new A,c=new A,l=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),o.subVectors(a,i),s.subVectors(r,i),o.cross(s),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,p),u.fromBufferAttribute(n,m),c.add(o),l.add(o),u.add(o),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let e=0,c=t.count;e<c;e+=3)r.fromBufferAttribute(t,e),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),o.subVectors(a,i),s.subVectors(r,i),o.cross(s),n.setXYZ(e,o.x,o.y,o.z),n.setXYZ(e+1,o.x,o.y,o.z),n.setXYZ(e+2,o.x,o.y,o.z);this.normalizeNormals(),n.needsUpdate=!0}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t).normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){if(this.index===null)return console.warn(`BufferGeometry.toNonIndexed(): geometry is already non-indexed.`),this;let t=new e,n=this.index,r=e=>{let t=e.itemSize,r=new e.array.constructor(n.count*t);for(let i=0;i<n.count;i++){let a=n.getX(i);for(let n=0;n<t;n++)r[i*t+n]=e.array[e._idx(a,n)]}return new Dt(r,t,e.normalized)};for(let e in this.attributes)t.setAttribute(e,r(this.attributes[e]));for(let e in this.morphAttributes)t.morphAttributes[e]=this.morphAttributes[e].map(r);t.morphTargetsRelative=this.morphTargetsRelative;for(let e of this.groups)t.addGroup(e.start,e.count,e.materialIndex);return t}clone(){return new e().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.name=e.name,e.index!==null&&this.setIndex(e.index.clone());for(let t in e.attributes)this.setAttribute(t,e.attributes[t].clone());for(let t in e.morphAttributes)this.morphAttributes[t]=e.morphAttributes[t].map(e=>e.clone());this.morphTargetsRelative=e.morphTargetsRelative;for(let t of e.groups)this.addGroup(t.start,t.count,t.materialIndex);return e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}};Wt.prototype.isBufferGeometry=!0;var Gt=class e extends Wt{constructor(){super(),this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new e().copy(this)}};Gt.prototype.isInstancedBufferGeometry=!0;var Kt=class extends yt{constructor(e=new Wt,t=null){super(),this.type=`Mesh`,this.geometry=e,this.material=t,this.count=1}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this.count=e.count,this}};Kt.prototype.isMesh=!0;var qt=new P,Jt=new Ee,Yt=new Ae,Xt=class e extends Kt{constructor(e,t,n){super(e,t),this.type=`InstancedMesh`,this.instanceMatrix=new Mt(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,qt.identity())}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}getColorAt(e,t){return t.fromArray(this.instanceColor.array,e*3)}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mt(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ee),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let t=0;t<this.count;t++)this.getMatrixAt(t,qt),Jt.copy(e.boundingBox).applyMatrix4(qt),this.boundingBox.union(Jt)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ae),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let t=0;t<this.count;t++)this.getMatrixAt(t,qt),Yt.copy(e.boundingSphere).applyMatrix4(qt),this.boundingSphere.union(Yt)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}clone(t){return new e(this.geometry,this.material,this.count).copy(this,t)}dispose(){this.dispatchEvent({type:`dispose`})}};Xt.prototype.isInstancedMesh=!0;var Zt=new A,Qt=new E,$t=new E,en=class extends yt{constructor(){super(),this.type=`Camera`,this.matrixWorldInverse=new P,this.projectionMatrix=new P,this.projectionMatrixInverse=new P,this.coordinateSystem=M,this.reversedDepth=!0}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this.reversedDepth=e.reversedDepth,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};en.prototype.isCamera=!0;function tn(e,t,n,r,i,a,o){e.view===null&&(e.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});let s=e.view;s.enabled=!0,s.fullWidth=t,s.fullHeight=n,s.offsetX=r,s.offsetY=i,s.width=a,s.height=o,e.updateProjectionMatrix()}var nn=class extends en{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.infiniteFar=!1,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.infiniteFar=e.infiniteFar,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=t*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){return .5*this.getFilmHeight()/Math.tan(e*.5*this.fov)}getEffectiveFOV(){return t*2*Math.atan(Math.tan(e*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zt.x,Zt.y).multiplyScalar(-e/Zt.z),Zt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zt.x,Zt.y).multiplyScalar(-e/Zt.z)}getViewSize(e,t){return this.getViewBounds(e,Qt,$t),t.subVectors($t,Qt)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,tn(this,e,t,n,r,i,a)}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(e*.5*this.fov)/this.zoom,r=2*n,i=this.aspect*r,a=-.5*i,o=this.view;if(o!==null&&o.enabled){let e=o.fullWidth,t=o.fullHeight;a+=o.offsetX*i/e,n-=o.offsetY*r/t,i*=o.width/e,r*=o.height/t}let s=this.filmOffset;s!==0&&(a+=t*s/this.getFilmWidth());let c=this.infiniteFar?1/0:this.far;this.projectionMatrix.makePerspective(a,a+i,n,n-r,t,c,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}};nn.prototype.isPerspectiveCamera=!0;var rn=class extends en{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){tn(this,e,t,n,r,i,a)}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t,c=this.view;if(c!==null&&c.enabled){let e=(this.right-this.left)/c.fullWidth/this.zoom,t=(this.top-this.bottom)/c.fullHeight/this.zoom;i+=e*c.offsetX,a=i+e*c.width,o-=t*c.offsetY,s=o-t*c.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}};rn.prototype.isOrthographicCamera=!0;function an(e,t,n,r,i){t&&e.setIndex(t),e.setAttribute(`position`,new jt(n,3)),e.setAttribute(`normal`,new jt(r,3)),e.setAttribute(`uv`,new jt(i,2))}var on=class extends Wt{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++)p.push(n*u-i,-t,0),m.push(0,0,1),h.push(n/o,1-e/s)}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a,r,i,a)}an(this,f,p,m,h)}},sn=class extends Wt{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a},r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let o=[],s=[],c=[],l=[],u=0,d=0,f=new A,p=(e,t,n,r,i,a,p,m,h,g,_)=>{let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0;for(let a=0;a<w;a++){let o=a*y-x;for(let u=0;u<C;u++){let d=u*v-b;f[e]=d*r,f[t]=o*i,f[n]=S,s.push(f.x,f.y,f.z),f[e]=0,f[t]=0,f[n]=m>0?1:-1,c.push(f.x,f.y,f.z),l.push(u/h,1-a/g),T++}}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=u,r=n+t+C*e,i=n+t+C*(e+1),a=n+(t+1)+C*(e+1),s=n+(t+1)+C*e;o.push(r,i,s,i,a,s),E+=6}this.addGroup(d,E,_),d+=E,u+=T};p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),an(this,o,s,c,l)}},cn=class extends Wt{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=[],d=[],f=[],p=[],m=new A;for(let u=0;u<=n;u++){let h=[],g=u/n,_=0;u===0&&a===0?_=.5/t:u===n&&s===Math.PI&&(_=-.5/t);for(let n=0;n<=t;n++){let s=n/t,l=Math.sin(a+g*o);m.set(-e*Math.cos(r+s*i)*l,e*Math.cos(a+g*o),e*Math.sin(r+s*i)*l),d.push(m.x,m.y,m.z),m.normalize(),f.push(m.x,m.y,m.z),p.push(s+_,1-g),h.push(c++)}l.push(h)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&u.push(t,i,c),(e!==n-1||s<Math.PI)&&u.push(i,o,c)}an(this,u,d,f,p)}},ln=class extends Wt{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s},r=Math.floor(r),i=Math.floor(i);let c=[],l=[],u=[],d=[],f=[],p=n/2,m=0,h=0,g=new A;{let a=0,_=(t-e)/n;for(let a=0;a<=i;a++){let c=[],h=a/i,v=h*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,a=Math.sin(i),f=Math.cos(i);l.push(v*a,-h*n+p,v*f),g.set(a,_,f).normalize(),u.push(g.x,g.y,g.z),d.push(t,1-h),c.push(m++)}f.push(c)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let o=f[r][n],s=f[r+1][n],l=f[r+1][n+1],u=f[r][n+1];(e>0||r!==0)&&(c.push(o,s,u),a+=3),(t>0||r!==i-1)&&(c.push(s,l,u),a+=3)}this.addGroup(h,a,0),h+=a}let _=n=>{let i=m,a=n===!0?e:t,f=n===!0?1:-1,g=0;for(let e=1;e<=r;e++)l.push(0,p*f,0),u.push(0,f,0),d.push(.5,.5),m++;let _=m;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);l.push(a*i,p*f,a*n),u.push(0,f,0),d.push(n*.5+.5,i*.5*f+.5),m++}for(let e=0;e<r;e++){let t=i+e,r=_+e;n===!0?c.push(r,r+1,t):c.push(r+1,r,t),g+=3}this.addGroup(h,g,n===!0?1:2),h+=g};a===!1&&(e>0&&_(!0),t>0&&_(!1)),an(this,c,l,u,d)}},un=e=>Math.atan2(e.z,-e.x),dn=e=>Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z)),fn=class extends Wt{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[],o=e=>i.push(e.x,e.y,e.z),s=(t,n)=>n.set(e[t*3],e[t*3+1],e[t*3+2]),c=(e,t,n,r)=>{let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)a[r][e]=e===0&&r===i?o:o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(o(a[e][n+1]),o(a[e+1][n]),o(a[e][n])):(o(a[e][n+1]),o(a[e+1][n+1]),o(a[e+1][n]))}},l=new A,u=new A,d=new A;for(let e=0;e<t.length;e+=3)s(t[e],l),s(t[e+1],u),s(t[e+2],d),c(l,u,d,r);let f=new A;for(let e=0;e<i.length;e+=3)f.fromArray(i,e).normalize().multiplyScalar(n),i[e]=f.x,i[e+1]=f.y,i[e+2]=f.z;for(let e=0;e<i.length;e+=3)f.fromArray(i,e),a.push(un(f)/2/Math.PI+.5,1-(dn(f)/Math.PI+.5));let p=new A,m=new A,h=new A,g=new A,_=new E,v=new E,y=new E,b=(e,t,n,r)=>{r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)};for(let e=0,t=0;e<i.length;e+=9,t+=6){p.fromArray(i,e),m.fromArray(i,e+3),h.fromArray(i,e+6),_.fromArray(a,t),v.fromArray(a,t+2),y.fromArray(a,t+4),g.copy(p).add(m).add(h).divideScalar(3);let n=un(g);b(_,t,p,n),b(v,t+2,m,n),b(y,t+4,h,n)}for(let e=0;e<a.length;e+=6){let t=a[e],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}this.setAttribute(`position`,new jt(i,3)),this.setAttribute(`normal`,new jt(i.slice(),3)),this.setAttribute(`uv`,new jt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}},pn=(1+Math.sqrt(5))/2,mn=[-1,pn,0,1,pn,0,-1,-pn,0,1,-pn,0,0,-1,pn,0,1,pn,0,-1,-pn,0,1,-pn,pn,0,-1,pn,0,1,-pn,0,-1,-pn,0,1],hn=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],gn=class extends fn{constructor(e=1,t=0){super(mn,hn,e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}};new A;function _n(e){let t=e[0],n=t.array.constructor,r=t.itemSize,i=t.normalized,a=0;for(let t of e){if(t.array.constructor!==n||t.itemSize!==r||t.normalized!==i)return console.error(`mergeAttributes(): attributes differ in array type, itemSize or normalized.`),null;a+=t.count*r}let o=new n(a),s=0;for(let t of e){if(t.isInterleavedBufferAttribute)for(let e=0;e<t.count;e++)for(let n=0;n<r;n++)o[s+e*r+n]=t.array[t._idx(e,n)];else o.set(t.array.subarray(0,t.count*r),s);s+=t.count*r}let c=new Dt(o,r,i);return c.gpuType=t.gpuType===void 0?c.gpuType:t.gpuType,c}function vn(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i={},a=new Wt,o=0;for(let s=0;s<e.length;s++){let c=e[s];if(n!==(c.index!==null))return console.error(`mergeGeometries(): geometry ${s} index mismatch; all or none must be indexed.`),null;let l=0;for(let e in c.attributes){if(!r.has(e))return console.error(`mergeGeometries(): geometry ${s} has attribute "${e}" missing from geometry 0.`),null;(i[e]||=[]).push(c.attributes[e]),l++}if(l!==r.size)return console.error(`mergeGeometries(): geometry ${s} is missing attributes.`),null;if(t){let e=n?c.index.count:c.attributes.position.count;a.addGroup(o,e,s),o+=e}}if(n){let t=0,n=[];for(let r of e){let e=r.index;for(let r=0;r<e.count;r++)n.push(e.getX(r)+t);t+=r.attributes.position.count}a.setIndex(n)}for(let e in i){let t=_n(i[e]);if(!t)return console.error(`mergeGeometries(): failed merging attribute "${e}".`),null;a.setAttribute(e,t)}let s=e.map(e=>e.userData).filter(e=>e&&Object.keys(e).length);return s.length&&(a.userData.mergedUserData=s),a}var F={device:null,queue:null,adapter:null,context:null,canvas:null,format:`bgra8unorm`,features:new Set,limits:null,hasTimestamp:!1,hasFloat32Filterable:!1,encoder:null,frame:0,samplers:null,_submitHooks:[],async init({canvas:e=null,requiredLimits:t={},headless:n=!1}={}){if(!navigator.gpu)throw Error(`WebGPU is not available in this browser.`);let r=await navigator.gpu.requestAdapter({powerPreference:`high-performance`});if(!r)throw Error(`No WebGPU adapter found.`);this.adapter=r;let i=r.limits,a={maxSampledTexturesPerShaderStage:32,maxSamplersPerShaderStage:16,maxStorageBuffersPerShaderStage:10,maxStorageTexturesPerShaderStage:8,maxComputeWorkgroupStorageSize:32768,maxColorAttachmentBytesPerSample:64,maxStorageBuffersInVertexStage:4,maxStorageBuffersInFragmentStage:8,maxStorageTexturesInFragmentStage:4,maxBindingsPerBindGroup:1e3,maxBufferSize:1073741824,maxStorageBufferBindingSize:536870912,...t},o={};for(let e in a)i[e]!==void 0&&(o[e]=Math.min(a[e],i[e]));let s=[`float32-filterable`,`timestamp-query`,`rg11b10ufloat-renderable`,`float32-blendable`,`shader-f16`,`clip-distances`].filter(e=>r.features.has(e));this.features=new Set(s),this.hasTimestamp=this.features.has(`timestamp-query`),this.hasFloat32Filterable=this.features.has(`float32-filterable`);let c=await r.requestDevice({requiredFeatures:s,requiredLimits:o});return this.device=c,this.queue=c.queue,this.limits=c.limits,c.lost.then(e=>console.error(`WebGPU device lost:`,e.message)),c.addEventListener&&c.addEventListener(`uncapturederror`,e=>console.error(`WebGPU:`,e.error.message.split(`
`).slice(0,6).join(`
`))),e&&!n&&(this.canvas=e,this.context=e.getContext(`webgpu`),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:c,format:this.format,alphaMode:`opaque`,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_DST})),this._createSamplers(),this},_createSamplers(){let e=this.device,t=t=>e.createSampler(t),n={magFilter:`linear`,minFilter:`linear`,mipmapFilter:`linear`};this.samplers={linearRepeat:t({...n,addressModeU:`repeat`,addressModeV:`repeat`,addressModeW:`repeat`}),linearClamp:t({...n,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,addressModeW:`clamp-to-edge`}),linearMirror:t({...n,addressModeU:`mirror-repeat`,addressModeV:`mirror-repeat`,addressModeW:`mirror-repeat`}),anisoRepeat:t({...n,addressModeU:`repeat`,addressModeV:`repeat`,addressModeW:`repeat`,maxAnisotropy:8}),aniso4Repeat:t({...n,addressModeU:`repeat`,addressModeV:`repeat`,addressModeW:`repeat`,maxAnisotropy:4}),anisoClamp:t({...n,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,maxAnisotropy:8}),nearestClamp:t({magFilter:`nearest`,minFilter:`nearest`,mipmapFilter:`nearest`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`,addressModeW:`clamp-to-edge`}),nearestRepeat:t({magFilter:`nearest`,minFilter:`nearest`,mipmapFilter:`nearest`,addressModeU:`repeat`,addressModeV:`repeat`,addressModeW:`repeat`}),shadow:t({magFilter:`linear`,minFilter:`linear`,compare:`less`,addressModeU:`clamp-to-edge`,addressModeV:`clamp-to-edge`})}},beginFrame(){return this.frame++,this.getEncoder()},getEncoder(){return this.encoder||=this.device.createCommandEncoder(),this.encoder},submit(){if(!this.encoder)return;let e=this._submitHooks;this._submitHooks=[];for(let t of e)t.before&&t.before(this.encoder);this.queue.submit([this.encoder.finish()]),this.encoder=null;for(let t of e)t.after&&t.after()},onSubmit(e,t){this._submitHooks.push({before:e,after:t})},_pending:new Set,syncCompiles:[],renderPipeline(e){return this._async(e,`render`)},computePipeline(e){return this._async(e,`compute`)},_async(e,t){let n={pipeline:null,label:e.label,desc:e,kind:t,failed:!1},r=Promise.resolve().then(()=>{if(!n.pipeline)return(t===`render`?this.device.createRenderPipelineAsync:this.device.createComputePipelineAsync).call(this.device,e).then(e=>{n.pipeline||=e,n.desc=null},t=>{n.failed=!0,console.error(`WebGPU: pipeline "${e.label}" failed: ${t.message.split(`
`).slice(0,6).join(`
`)}`)})}).finally(()=>this._pending.delete(r));return this._pending.add(r),n},ready(e){return e.pipeline||e.failed?e.pipeline:(this.syncCompiles.push(e.label),e.pipeline=e.kind===`render`?this.device.createRenderPipeline(e.desc):this.device.createComputePipeline(e.desc),e.pipeline)},async pipelinesReady(){for(;this._pending.size;)await Promise.all([...this._pending])},computePass(e,t,n){let r=this.getEncoder().beginComputePass({label:e,timestampWrites:n});t(r),r.end()}},yn={r8unorm:{bytes:1,sample:`float`},rg8unorm:{bytes:2,sample:`float`},rgba8unorm:{bytes:4,sample:`float`},"rgba8unorm-srgb":{bytes:4,sample:`float`},bgra8unorm:{bytes:4,sample:`float`},r16float:{bytes:2,sample:`float`},rg16float:{bytes:4,sample:`float`},rgba16float:{bytes:8,sample:`float`},rg11b10ufloat:{bytes:4,sample:`float`},r32float:{bytes:4,sample:`unfilterable-float`},rg32float:{bytes:8,sample:`unfilterable-float`},rgba32float:{bytes:16,sample:`unfilterable-float`},r32uint:{bytes:4,sample:`uint`},rg32uint:{bytes:8,sample:`uint`},rgba32uint:{bytes:16,sample:`uint`},r32sint:{bytes:4,sample:`sint`},r8uint:{bytes:1,sample:`uint`},rgba8uint:{bytes:4,sample:`uint`},depth32float:{bytes:4,sample:`depth`},depth24plus:{bytes:4,sample:`depth`},"depth24plus-stencil8":{bytes:4,sample:`depth`}};function bn(e){let t=yn[e];if(!t)throw Error(`Unknown texture format `+e);return t}function xn(e){let t=bn(e).sample;return t===`unfilterable-float`&&F.hasFloat32Filterable?`float`:t}var Sn=0,I=class{constructor(e={}){this.id=Sn++,this.label=e.label||e.name||`texture`+this.id,this.width=Math.max(1,e.width||1),this.height=Math.max(1,e.height||1),this.depth=Math.max(1,e.depth||(e.dimension===`cube`?6:1)),this.dimension=e.dimension||`2d`,this.format=e.format||`rgba8unorm`,this.mipsOption=e.mips??!1,this.sampleCount=e.sampleCount||1;let t=e.usage||[`sample`,`copyDst`];this.usageList=t,this.sampler=e.sampler||`linearClamp`,this.gpu=null,this.version=0,this._views=new Map,this.isTexture=!0,e.data&&(this.pendingData=e.data)}get mipLevelCount(){return this.mipsOption===!0?Math.floor(Math.log2(Math.max(this.width,this.height,this.dimension===`3d`?this.depth:1)))+1:typeof this.mipsOption==`number`?this.mipsOption:1}get usage(){let e=0;for(let t of this.usageList)e|={sample:GPUTextureUsage.TEXTURE_BINDING,render:GPUTextureUsage.RENDER_ATTACHMENT,storage:GPUTextureUsage.STORAGE_BINDING,copySrc:GPUTextureUsage.COPY_SRC,copyDst:GPUTextureUsage.COPY_DST}[t];return this.mipLevelCount>1&&(e|=GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING),e}get isDepth(){return this.format.startsWith(`depth`)}get sampleType(){return xn(this.format)}wgslType(e=this.defaultViewDimension){let t=this.sampleType;if(t===`depth`)return{"2d":`texture_depth_2d`,"2d-array":`texture_depth_2d_array`,cube:`texture_depth_cube`}[e];let n=t===`uint`?`u32`:t===`sint`?`i32`:`f32`;return`texture_${e.replace(`-`,`_`)}<${n}>`}get defaultViewDimension(){return this.dimension}getGPU(){return this.gpu||this._create(),this.gpu}_create(){let e=this.dimension===`3d`?`3d`:`2d`;if(this.gpu=F.device.createTexture({label:this.label,size:{width:this.width,height:this.height,depthOrArrayLayers:this.depth},dimension:e,format:this.format,mipLevelCount:this.mipLevelCount,sampleCount:this.sampleCount,usage:this.usage}),this._views.clear(),this.version++,this.pendingData){let e=this.pendingData;this.pendingData=null,this.upload(e)}}view(e=null){let t=this.getGPU(),n=e?JSON.stringify(e):``,r=this._views.get(n);return r||(r=t.createView({label:this.label+n,dimension:e?.dimension||this.defaultViewDimension,...e||{}}),this._views.set(n,r)),r}resize(e,t,n=this.depth){if(e=Math.max(1,Math.floor(e)),t=Math.max(1,Math.floor(t)),e===this.width&&t===this.height&&n===this.depth&&this.gpu)return!1;if(this.width=e,this.height=t,this.depth=n,this.gpu){let e=this.gpu;F.onSubmit(null,()=>e.destroy()),this.gpu=null}return this._create(),!0}upload(e,{mip:t=0,layer:n=0,layers:r=null,width:i=null,height:a=null,x:o=0,y:s=0}={}){if(!this.gpu){if(t===0&&n===0&&!i){this.pendingData=e,this.getGPU();return}this.getGPU()}let c=bn(this.format).bytes,l=i||Math.max(1,this.width>>t),u=a||Math.max(1,this.height>>t),d=r||(this.dimension===`3d`?Math.max(1,this.depth>>t):this.depth-n),f=e instanceof ArrayBuffer?e:e.buffer,p=e instanceof ArrayBuffer?0:e.byteOffset;F.queue.writeTexture({texture:this.gpu,mipLevel:t,origin:{x:o,y:s,z:n}},f,{offset:p,bytesPerRow:l*c,rowsPerImage:u},{width:l,height:u,depthOrArrayLayers:d})}destroy(){this.gpu&&this.gpu.destroy(),this.gpu=null,this.version++}},Cn=class{constructor(e,t,{colors:n=[`rgba16float`],depth:r=null,label:i=`rt`,mips:a=!1,usage:o=[`sample`,`render`,`copySrc`,`copyDst`],depthUsage:s=[`sample`,`render`,`copySrc`,`copyDst`],scale:c=1}={}){this.label=i,this.width=Math.max(1,e|0),this.height=Math.max(1,t|0),this.scale=c,this.textures=n.map((e,t)=>{let n=typeof e==`string`?{format:e}:e;return new I({label:`${i}.${n.name||t}`,width:this.width,height:this.height,format:n.format,mips:n.mips??a,usage:n.usage||o})}),this.depthTexture=r?new I({label:i+`.depth`,width:this.width,height:this.height,format:r,usage:s}):null}get texture(){return this.textures[0]}get formats(){return this.textures.map(e=>e.format)}setSize(e,t){if(e=Math.max(1,e|0),t=Math.max(1,t|0),e===this.width&&t===this.height)return!1;this.width=e,this.height=t;for(let n of this.textures)n.resize(e,t);return this.depthTexture&&this.depthTexture.resize(e,t),!0}},wn=0,Tn=class{constructor({label:e,count:t,type:n=`vec4f`,stride:r=null,data:i=null,usage:a=[]}){if(this.id=wn++,this.label=e||`buffer`+this.id,this.count=t,this.type=n,this.stride=r||{f32:4,u32:4,i32:4,"atomic<u32>":4,"atomic<i32>":4,vec2f:8,vec2u:8,vec3f:16,vec4f:16,vec4u:16,vec4i:16,mat4x4f:64}[n],!this.stride)throw Error(`StorageBuffer ${this.label}: pass a stride for ${n}`);this.byteLength=Math.max(16,t*this.stride),this.extraUsage=a,this.gpu=null,this.version=0,this.pendingData=i,this.isStorageBuffer=!0}getGPU(){if(!this.gpu){let e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;for(let t of this.extraUsage)e|={vertex:GPUBufferUsage.VERTEX,index:GPUBufferUsage.INDEX,indirect:GPUBufferUsage.INDIRECT,uniform:GPUBufferUsage.UNIFORM}[t];if(this.gpu=F.device.createBuffer({label:this.label,size:Math.ceil(this.byteLength/4)*4,usage:e}),this.version++,this.pendingData){let e=this.pendingData;this.pendingData=null,this.write(e)}}return this.gpu}write(e,t=0){if(!this.gpu){if(t===0){this.pendingData=e,this.getGPU();return}this.getGPU()}F.queue.writeBuffer(this.gpu,t,e.buffer||e,e.byteOffset||0,e.byteLength??void 0)}destroy(){this.gpu&&this.gpu.destroy(),this.gpu=null}},En={f32:{size:4,align:4,n:1},i32:{size:4,align:4,n:1,int:!0},u32:{size:4,align:4,n:1,uint:!0},vec2f:{size:8,align:8,n:2},vec3f:{size:12,align:16,n:3},vec4f:{size:16,align:16,n:4},vec2i:{size:8,align:8,n:2,int:!0},vec4i:{size:16,align:16,n:4,int:!0},vec2u:{size:8,align:8,n:2,uint:!0},vec4u:{size:16,align:16,n:4,uint:!0},mat3x3f:{size:48,align:16,n:12,mat3:!0},mat4x4f:{size:64,align:16,n:16}};function Dn(e){let t=/^(\w+)(?:\[(\d+)\])?$/.exec(e);if(!t||!En[t[1]])throw Error(`Unsupported uniform type `+e);let n=En[t[1]],r=t[2]?Number(t[2]):0;if(r&&n.align<16)throw Error(`uniform array ${e}: element must be 16-byte aligned (use vec4f)`);return{name:t[1],base:n,count:r}}function On(e,t,n,r,i,a){let{base:o}=i,s=o.int?n:o.uint?t:e;if(typeof a==`number`||typeof a==`boolean`){s[r]=Number(a);return}if(a!=null){if(a.isMatrix4||a.isMatrix3){let t=a.elements;if(o.mat3){if(t.length===9)for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[r+n*4+i]=t[n*3+i];else for(let n=0;n<3;n++)for(let i=0;i<3;i++)e[r+n*4+i]=t[n*4+i]}else for(let n=0;n<16;n++)e[r+n]=t[n];return}if(a.isColor){s[r]=a.r,s[r+1]=a.g,s[r+2]=a.b,o.n===4&&(s[r+3]=1);return}if(a.isVector2){s[r]=a.x,s[r+1]=a.y;return}if(a.isVector3){s[r]=a.x,s[r+1]=a.y,s[r+2]=a.z;return}if(a.isVector4||a.isQuaternion){s[r]=a.x,s[r+1]=a.y,s[r+2]=a.z,s[r+3]=a.w;return}if(ArrayBuffer.isView(a)||Array.isArray(a)){for(let e=0;e<Math.min(a.length,o.n);e++)s[r+e]=a[e];return}throw Error(`Cannot write uniform value `+a)}}var kn=0,L=class{constructor(e,t,{label:n}={}){this.structName=e,this.label=n||e,this.id=kn++,this.layout={},this.fields={},this.order=[];let r=0,i=16;for(let e in t){let n=t[e],a=Array.isArray(n)?n[0]:n,o=Array.isArray(n)?n[1]:void 0,s=Dn(a),c=s.base.align;i=Math.max(i,c),r=Math.ceil(r/c)*c;let l=s.count?Math.ceil(s.base.size/16)*16:s.base.size,u=s.count?l*s.count:s.base.size;this.layout[e]={offset:r,type:s,typeStr:a,stride:l,size:u},this.order.push(e),this.fields[e]={value:o===void 0?An(s):o},r+=u}this.byteLength=Math.max(16,Math.ceil(r/i)*i),this.data=new ArrayBuffer(this.byteLength),this.f32=new Float32Array(this.data),this.u32=new Uint32Array(this.data),this.i32=new Int32Array(this.data),this.buffer=null,this.version=0;let a=this;this.values=new Proxy({},{get:(e,t)=>a.fields[t]&&a.fields[t].value,set:(e,t,n)=>(a.set(t,n),!0)})}get wgsl(){let e=`struct ${this.structName} {\n`;for(let t of this.order){let{type:n}=this.layout[t];e+=n.count?`\t${t}: array<${n.name}, ${n.count}>,\n`:`\t${t}: ${n.name},\n`}return e+`};
`}set(e,t){let n=this.fields[e];if(!n)throw Error(`${this.structName}: no uniform ${e}`);n.value&&typeof n.value==`object`&&!Array.isArray(n.value)&&n.value.copy&&t&&t.constructor===n.value.constructor?n.value.copy(t):n.value=t}get(e){return this.fields[e].value}_pack(){this.onBeforePack&&this.onBeforePack(this);let{f32:e,u32:t,i32:n,fields:r}=this,i=this._plan||this._makePlan();for(let a=0;a<i.length;a++){let{name:o,o:s,type:c,stride:l,count:u,n:d}=i[a],f=r[o].value;if(typeof f==`number`){(c.base.int?n:c.base.uint?t:e)[s]=f;continue}if(u){if(!f)continue;if(typeof f[0]==`number`){let r=c.base.int?n:c.base.uint?t:e,i=Math.min(u,f.length/d);for(let e=0;e<i;e++){let t=s+e*l,n=e*d,i=Math.min(d,f.length-n);for(let e=0;e<i;e++)r[t+e]=f[n+e]}}else{let r=Math.min(u,f.length);for(let i=0;i<r;i++)On(e,t,n,s+i*l,c,f[i])}}else On(e,t,n,s,c,f)}}_makePlan(){return this._plan=this.order.map(e=>{let{offset:t,type:n,stride:r}=this.layout[e];return{name:e,o:t/4,type:n,stride:r/4,count:n.count,n:n.base.n}}),this._plan}getBuffer(){return this.buffer||(this.buffer=F.device.createBuffer({label:this.label,size:this.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this._last=new Uint32Array(this.byteLength/4),this._last.fill(4294967295)),this.buffer}upload(e){if(e!==void 0&&e===this._token&&this.buffer)return this.buffer;this._token=e;let t=this.getBuffer();this._pack();let n=this.u32,r=this._last,i=!1;for(let e=0;e<n.length;e++)if(n[e]!==r[e]){i=!0;break}return i&&(r.set(n),F.queue.writeBuffer(t,0,this.data)),t}};function An(e){return e.count?null:e.base.n===1?0:Array(e.base.n).fill(0)}var jn=[[`smpLinearRepeat`,`linearRepeat`,`filtering`],[`smpLinearClamp`,`linearClamp`,`filtering`],[`smpLinearMirror`,`linearMirror`,`filtering`],[`smpAnisoRepeat`,`anisoRepeat`,`filtering`],[`smpAnisoClamp`,`anisoClamp`,`filtering`],[`smpAniso4Repeat`,`aniso4Repeat`,`filtering`],[`smpNearestClamp`,`nearestClamp`,`non-filtering`],[`smpNearestRepeat`,`nearestRepeat`,`non-filtering`],[`smpShadow`,`shadow`,`comparison`]],Mn=0,R=class{constructor({name:e,deps:t=[],code:n=``,bindings:r={},uniforms:i=null,uniformName:a=null}){this.id=Mn++,this.name=e||`module`+this.id,this.deps=t.filter(Boolean),this.code=n,this.bindings={...r},i&&(this.bindings[a||Nn(i.structName)]={uniform:i}),this.isShaderModule=!0}};function Nn(e){return e[0].toLowerCase()+e.slice(1)}function Pn(e){let t=[],n=new Set,r=e=>{if(e&&!n.has(e)){n.add(e);for(let t of e.deps)r(t);t.push(e)}};for(let t of e)r(t);return t}function Fn(e,t={}){let n=e.split(`
`),r=[],i=[],a=()=>i.length===0||i[i.length-1].active,o=e=>{e=e.trim();let n;if(n=/^!\s*(\w+)$/.exec(e))return!In(t[n[1]]);if(n=/^(\w+)\s*(==|!=|>=|<=|>|<)\s*([\w.'"-]+)$/.exec(e)){let e=t[n[1]],r=n[3].replace(/^['"]|['"]$/g,``);switch(!isNaN(Number(r))&&typeof e==`number`&&(r=Number(r)),n[2]){case`==`:return e==r;case`!=`:return e!=r;case`>=`:return e>=r;case`<=`:return e<=r;case`>`:return e>r;case`<`:return e<r}}return/\|\|/.test(e)?e.split(`||`).some(e=>o(e)):/&&/.test(e)?e.split(`&&`).every(e=>o(e)):In(t[e])};for(let e of n){let n=e.trim(),s;if(s=/^#(if|ifdef|ifndef)\s+(.*)$/.exec(n)){let e=a(),n;n=s[1]===`ifdef`?t[s[2].trim()]!==void 0:s[1]===`ifndef`?t[s[2].trim()]===void 0:o(s[2]),i.push({active:e&&n,taken:n,parent:e});continue}if(s=/^#elif\s+(.*)$/.exec(n)){let e=i[i.length-1],t=!e.taken&&o(s[1]);e.active=e.parent&&t,e.taken=e.taken||t;continue}if(n===`#else`){let e=i[i.length-1];e.active=e.parent&&!e.taken,e.taken=!0;continue}if(n===`#endif`){i.pop();continue}a()&&r.push(e)}if(i.length)throw Error(`preprocess: unterminated #if`);return r.join(`
`)}function In(e){return e!=null&&e!==!1&&e!==0&&e!==`0`}function Ln(e){return typeof e==`function`?e():e}function Rn(e,t,n){let r=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,i=n===`compute`?GPUShaderStage.COMPUTE:r;if(t.uniform){let n=t.uniform;return{layout:{visibility:i,buffer:{type:`uniform`}},decl:`var<uniform> ${e}: ${n.structName};`,struct:n}}if(t.uniformBuffer)return{layout:{visibility:i,buffer:{type:`uniform`}},decl:`var<uniform> ${e}: ${t.wgslType};`};if(t.storage){let a=Ln(t.storage),o=t.access||`read`,s=t.wgslType||`array<${t.type||a.type}>`;return{layout:{visibility:n===`compute`?i:o===`read`?r:GPUShaderStage.FRAGMENT,buffer:{type:o===`read`?`read-only-storage`:`storage`}},decl:`var<storage, ${o===`read`?`read`:`read_write`}> ${e}: ${s};`}}if(t.storageTexture){let r=Ln(t.storageTexture),a=t.access||`write`,o=t.viewDimension||t.view?.dimension||r.defaultViewDimension;return{layout:{visibility:n===`compute`?i:GPUShaderStage.FRAGMENT,storageTexture:{access:a===`write`?`write-only`:a===`read`?`read-only`:`read-write`,format:r.format,viewDimension:o}},decl:`var ${e}: texture_storage_${o.replace(`-`,`_`)}<${r.format}, ${a}>;`}}if(t.texture){let n=Ln(t.texture),r=t.viewDimension||t.view?.dimension||n.defaultViewDimension,a=t.sampleType||n.sampleType,o=t.wgslType||n.wgslType(r);return t.sampleType===`unfilterable-float`&&n.isDepth&&(o=`texture_${r.replace(`-`,`_`)}<f32>`),{layout:{visibility:i,texture:{sampleType:a,viewDimension:r,multisampled:n.sampleCount>1}},decl:`var ${e}: ${o};`}}if(t.sampler)return{layout:{visibility:i,sampler:{type:t.samplerType||`filtering`}},decl:`var ${e}: ${t.samplerType===`comparison`?`sampler_comparison`:`sampler`};`};throw Error(`binding ${e}: unknown spec`)}function zn(e){if(e.uniform)return{buffer:e.uniform.getBuffer()};if(e.uniformBuffer)return{buffer:Ln(e.uniformBuffer)};if(e.storage){let t=Ln(e.storage),n=t.getGPU?t.getGPU():t;return e.offset===void 0?{buffer:n}:{buffer:n,offset:e.offset,size:e.size}}if(e.storageTexture)return Ln(e.storageTexture).view(e.view||{dimension:e.viewDimension||Ln(e.storageTexture).defaultViewDimension,mipLevelCount:1,baseMipLevel:e.mip||0});if(e.texture){let t=Ln(e.texture);return e.view||e.viewDimension?t.view({...e.view||{},dimension:e.viewDimension||e.view.dimension}):t.view()}if(e.sampler)return typeof e.sampler==`string`?F.samplers[e.sampler]:e.sampler;throw Error(`unknown binding`)}var Bn=0,Vn=1,Hn=2,Un=3,Wn=4;function Gn(e){return e.uniform?Bn:e.uniformBuffer?Vn:e.storage?Hn:e.storageTexture||e.texture?Un:Wn}var Kn=4,qn=new Map;function Jn(e,t){let n=JSON.stringify(e),r=qn.get(n);return r||(r=F.device.createBindGroupLayout({label:t,entries:e}),qn.set(n,r)),r}var Yn=class{constructor(e,t,n=`bindings`,r=null,i=null){if(this.label=n,this.stage=t,this.names=Object.keys(e),this.specs=e,this.described=this.names.map(n=>Rn(n,e[n],t)),r)for(let e=0;e<this.names.length;e++){let t=this.described[e].layout,n=r[this.names[e]];n===`fragment`&&t.visibility&GPUShaderStage.FRAGMENT&&(t.visibility=GPUShaderStage.FRAGMENT),n===`vertex`&&t.visibility&GPUShaderStage.VERTEX&&(t.visibility=GPUShaderStage.VERTEX)}if(i)for(let e=0;e<this.names.length;e++){let t=this.described[e];i.has(this.names[e])&&(t.layout.buffer={type:`read-only-storage`},t.decl=t.decl.replace(/^var<uniform>/,`var<storage, read>`))}this.layout=Jn(this.described.map((e,t)=>({binding:t,...e.layout})),n),this.group=null;let a=this.names.length;this._specs=this.names.map(t=>e[t]),this._kinds=this._specs.map(Gn),this._blocks=this._specs.filter(e=>e.uniform).map(e=>e.uniform),this._objs=Array(a).fill(null),this._vers=Array(a).fill(0),this._entry=null,this._cache=[],this._token=null}declarations(e){return this.described.map((t,n)=>`@group(${e}) @binding(${n}) ${t.decl}`).join(`
`)}structs(){let e=[];for(let t of this.described)t.struct&&!e.includes(t.struct)&&e.push(t.struct);return e}getBindGroup(e){if(e!==void 0&&e===this._token&&this.group)return this.group;this._token=e;let t=this._specs,n=this._kinds,r=this._objs,i=this._vers,a=t.length;for(let e=0;e<a;e++){let a=t[e],o=null,s=0;switch(n[e]){case Bn:o=a.uniform;break;case Vn:o=Ln(a.uniformBuffer);break;case Hn:o=Ln(a.storage),o.getGPU&&(o.getGPU(),s=o.version);break;case Un:o=Ln(a.storageTexture||a.texture),o&&o.getGPU&&(o.getGPU(),s=o.version);break;default:o=a.sampler}r[e]=o,i[e]=s}let o=this._blocks;for(let t=0;t<o.length;t++)o[t].upload(e);if(this._entry&&this._matches(this._entry))return this.group;let s=this._cache;for(let e=0;e<s.length;e++){let t=s[e];if(t!==this._entry&&this._matches(t))return this._entry=t,this.group=t.group,this.group}let c=Array(a);for(let e=0;e<a;e++)c[e]={binding:e,resource:zn(t[e])};return this.group=F.device.createBindGroup({label:this.label,layout:this.layout,entries:c}),this._entry={objs:r.slice(),vers:i.slice(),group:this.group},s.unshift(this._entry),s.length>Kn&&s.pop(),this.group}_matches(e){let t=this._objs,n=this._vers,r=e.objs,i=e.vers;for(let e=0;e<t.length;e++)if(t[e]!==r[e]||n[e]!==i[e])return!1;return!0}},Xn=null,Zn=null;function Qn(e){Xn=e,Zn=null}function $n(e){if(Zn||={},!Zn[e]){let t={frame:{uniform:Xn}};for(let[e,n,r]of jn)t[e]={sampler:n,samplerType:r};Zn[e]=new Yn(t,e,`group0-`+e)}return Zn[e]}var er=new WeakMap;function tr(e,t=`render`){if(e===Xn)return $n(t);let n=er.get(e);if(n||er.set(e,n={}),!n[t]){let r={frame:{uniform:e}};for(let[e,t,n]of jn)r[e]={sampler:t,samplerType:n};n[t]=new Yn(r,t,`group0-`+e.label)}return n[t]}function nr({modules:e=[],bindings:t={},code:n=``,defines:r={},stage:i=`render`,label:a=`shader`,header:o=``}){let s=Pn(e),c={};for(let e of s)for(let t in e.bindings){if(c[t]&&c[t]!==e.bindings[t]&&!ir(c[t],e.bindings[t]))throw Error(`${a}: binding ${t} declared twice (${e.name})`);c[t]=e.bindings[t]}for(let e in t)c[e]=t[e];let l=null,u=null;if(i===`render`&&/@vertex\s+fn\s+vs\b/.test(n)){let e=``;for(let t of s)e+=t.code+`
`;let t=Fn(e+n,r),i=rr(t,`vs`),a=/@fragment\s+fn\s+fs\b/.test(t)?rr(t,`fs`):null;l={};for(let e in c)!i.has(e)&&(!a||a.has(e))?l[e]=`fragment`:a&&!a.has(e)&&i.has(e)&&(l[e]=`vertex`);u=new Set;let o=F.limits||{},d=(o.maxUniformBuffersPerShaderStage||12)-2,f={vertex:o.maxStorageBuffersInVertexStage??4,fragment:o.maxStorageBuffersInFragmentStage??o.maxStorageBuffersPerShaderStage??8},p=(e,t)=>!l[e]||l[e]===t;for(let e of[`fragment`,`vertex`]){let t=Object.keys(c).filter(t=>c[t].uniform&&p(t,e)&&!u.has(t)),n=Object.keys(c).filter(t=>(c[t].storage||u.has(t))&&p(t,e)).length;t.sort((t,n)=>(l[t]===e?0:1)-(l[n]===e?0:1));let r=t.length;for(let i of t){if(r<=d||n>=f[e])break;u.add(i),n++,r--}}}let d=new Yn(c,i,a+`.g1`,l,u),f=$n(i),p=[...new Set([...f.structs(),...d.structs()])],m=``;F.features.has(`shader-f16`)&&r.F16&&(m+=`enable f16;
`),r.CLIP_DISTANCES&&(m+=`enable clip_distances;
`),/diagnostic\s*\(\s*off\s*,\s*derivative_uniformity/.test(o)||(m+=`diagnostic( off, derivative_uniformity );
`),m+=o,m+=p.map(e=>e.wgsl).join(`
`)+`
`,m+=f.declarations(0)+`
`,m+=d.declarations(1)+`
`;for(let e of s)m+=`// ---- ${e.name}\n${e.code}\n`;return m+=n,{code:Fn(m,r),bindings:d,group0:f,modules:s}}function rr(e,t){let n=new Map,r=/\bfn\s+([A-Za-z_]\w*)\s*\(/g,i;for(;i=r.exec(e);){let a=e.indexOf(`{`,i.index);if(a<0)break;let o=0,s=a;for(;s<e.length;s++){let t=e[s];if(t===`{`)o++;else if(t===`}`&&--o===0)break}(!/@(vertex|fragment|compute)[^;{}]*$/.test(e.slice(Math.max(0,i.index-80),i.index))||i[1]===t)&&n.set(i[1],e.slice(i.index,s+1)),r.lastIndex=s+1}let a=new Set,o=[t],s=new Set;for(;o.length;){let e=o.pop();if(!s.has(e)&&n.has(e)){s.add(e);for(let t of n.get(e).match(/[A-Za-z_]\w*/g)||[])a.add(t),n.has(t)&&!s.has(t)&&o.push(t)}}return a}function ir(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(n=>e[n]===t[n])}var ar=new Map;function or(e,t){let n=ar.get(e);return n||(n=F.device.createShaderModule({label:t,code:e}),ar.set(e,n),n.getCompilationInfo&&n.getCompilationInfo().then(n=>{let r=n.messages.filter(e=>e.type===`error`);if(!r.length)return;let i=e.split(`
`);for(let e of r){let n=Math.max(0,e.lineNum-4),r=Math.min(i.length,e.lineNum+2),a=i.slice(n,r).map((t,r)=>`${n+r+1}${n+r+1===e.lineNum?`>`:` `} ${t}`).join(`
`);console.error(`WGSL error in ${t} (${e.lineNum}:${e.linePos}): ${e.message}\n${a}`)}}),n)}var z=new R({name:`common`,code:`
const PI: f32 = 3.141592653589793;
const TWO_PI: f32 = 6.283185307179586;
const INV_PI: f32 = 0.3183098861837907;
const EPS: f32 = 1e-5;

fn sat( x: f32 ) -> f32 { return clamp( x, 0.0, 1.0 ); }
fn sat3( x: vec3f ) -> vec3f { return clamp( x, vec3f( 0.0 ), vec3f( 1.0 ) ); }
fn pow2( x: f32 ) -> f32 { return x * x; }
fn pow4( x: f32 ) -> f32 { let y = x * x; return y * y; }
fn pow5( x: f32 ) -> f32 { let y = x * x; return y * y * x; }
fn luminance( c: vec3f ) -> f32 { return dot( c, vec3f( 0.2126, 0.7152, 0.0722 ) ); }
fn remap( x: f32, a: f32, b: f32, c: f32, d: f32 ) -> f32 { return c + ( x - a ) * ( d - c ) / ( b - a ); }
fn remapClamp( x: f32, a: f32, b: f32, c: f32, d: f32 ) -> f32 { return mix( c, d, sat( ( x - a ) / ( b - a ) ) ); }
fn rotate2( v: vec2f, a: f32 ) -> vec2f { let c = cos( a ); let s = sin( a ); return vec2f( c * v.x - s * v.y, s * v.x + c * v.y ); }

// ---- depth (reversed-Z: 1 at the near plane, 0 at far / infinity)

// positive view-space distance along the view axis from a depth-buffer value
fn viewDepth( d: f32 ) -> f32 {
	let v = frame.invProj * vec4f( 0.0, 0.0, d, 1.0 );
	return - v.z / v.w;
}

// uv (0..1, y down) + depth -> world / view position
fn ndcFromUv( uv: vec2f, d: f32 ) -> vec4f { return vec4f( uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d, 1.0 ); }
fn worldFromDepth( uv: vec2f, d: f32 ) -> vec3f {
	let p = frame.invViewProj * ndcFromUv( uv, d );
	return p.xyz / p.w;
}
fn viewFromDepth( uv: vec2f, d: f32 ) -> vec3f {
	let p = frame.invProj * ndcFromUv( uv, d );
	return p.xyz / p.w;
}
// world direction of the camera ray through uv
fn viewRay( uv: vec2f ) -> vec3f {
	let p = frame.invViewProj * ndcFromUv( uv, 0.5 );
	return normalize( p.xyz / p.w - frame.cameraPos );
}
// world position -> uv (y down) and depth
fn projectToUv( P: vec3f ) -> vec3f {
	let c = frame.viewProjNoJitter * vec4f( P, 1.0 );
	let n = c.xyz / c.w;
	return vec3f( n.x * 0.5 + 0.5, 0.5 - n.y * 0.5, n.z );
}
fn isSky( d: f32 ) -> bool { return d <= 0.0; }

// ---- hashes

fn pcg( v: u32 ) -> u32 {
	let state = v * 747796405u + 2891336453u;
	let word = ( ( state >> ( ( state >> 28u ) + 4u ) ) ^ state ) * 277803737u;
	return ( word >> 22u ) ^ word;
}
fn pcg3( v0: vec3u ) -> vec3u {
	var v = v0 * 1664525u + 1013904223u;
	v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
	v ^= v >> vec3u( 16u );
	v.x += v.y * v.z; v.y += v.z * v.x; v.z += v.x * v.y;
	return v;
}
fn u32ToUnit( h: u32 ) -> f32 { return f32( h >> 8u ) * ( 1.0 / 16777216.0 ) + ( 0.5 / 16777216.0 ); }
// float hash in [0, 1) of a float seed (TSL hash())
fn hash11( p: f32 ) -> f32 { return u32ToUnit( pcg( bitcast<u32>( p ) ^ 0x9e3779b9u ) ); }
fn hash21( p: vec2f ) -> f32 { return u32ToUnit( pcg( bitcast<u32>( p.x ) ^ pcg( bitcast<u32>( p.y ) ) ) ); }
fn hash31( p: vec3f ) -> f32 { return u32ToUnit( pcg3( bitcast<vec3u>( p ) ).x ); }
fn hash22( p: vec2f ) -> vec2f {
	let h = pcg3( vec3u( bitcast<vec2u>( p ), 0x51ed270bu ) );
	return vec2f( u32ToUnit( h.x ), u32ToUnit( h.y ) );
}
fn hash33( p: vec3f ) -> vec3f {
	let h = pcg3( bitcast<vec3u>( p ) );
	return vec3f( u32ToUnit( h.x ), u32ToUnit( h.y ), u32ToUnit( h.z ) );
}
fn hashU( a: u32, b: u32 ) -> f32 { return u32ToUnit( pcg( a ^ pcg( b ) ) ); }
fn ihash3( p: vec3i ) -> vec3u { return pcg3( bitcast<vec3u>( p ) ); }

// Jimenez interleaved gradient noise at a pixel (0..1)
fn interleavedGradientNoise( px: vec2f ) -> f32 { return fract( 52.9829189 * fract( dot( px, vec2f( 0.06711056, 0.00583715 ) ) ) ); }

// i-th of n points of a Vogel disc (unit radius), rotated by phi
fn vogelDiskSample( i: i32, n: i32, phi: f32 ) -> vec2f {
	let r = sqrt( ( f32( i ) + 0.5 ) / f32( n ) );
	let theta = f32( i ) * 2.399963229728653 + phi;
	return vec2f( cos( theta ), sin( theta ) ) * r;
}

// ---- gradient noise: MaterialX (three's MaterialXNoise.js) bit for bit — the same Jenkins
// lookup3 hash, gradients, quintic fade and gradient scales (0.6616 in 2D, 0.982 in 3D), so the
// procedural patterns land where they did in the three.js version.

fn _mxRotl( x: u32, k: u32 ) -> u32 { return ( x << k ) | ( x >> ( 32u - k ) ); }
fn _mxFinal( a0: u32, b0: u32, c0: u32 ) -> u32 {
	var a = a0; var b = b0; var c = c0;
	c ^= b; c -= _mxRotl( b, 14u );
	a ^= c; a -= _mxRotl( c, 11u );
	b ^= a; b -= _mxRotl( a, 25u );
	c ^= b; c -= _mxRotl( b, 16u );
	a ^= c; a -= _mxRotl( c, 4u );
	b ^= a; b -= _mxRotl( a, 14u );
	c ^= b; c -= _mxRotl( b, 24u );
	return c;
}
fn mxHash2( x: i32, y: i32 ) -> u32 { let s = 0xdeadbeefu + ( 2u << 2u ) + 13u; return _mxFinal( s + u32( x ), s + u32( y ), s ); }
fn mxHash3( x: i32, y: i32, z: i32 ) -> u32 { let s = 0xdeadbeefu + ( 3u << 2u ) + 13u; return _mxFinal( s + u32( x ), s + u32( y ), s + u32( z ) ); }
fn _mxGrad2( hash: u32, x: f32, y: f32 ) -> f32 {
	let h = hash & 7u;
	let u = select( y, x, h < 4u );
	let v = 2.0 * select( x, y, h < 4u );
	return select( u, - u, ( h & 1u ) != 0u ) + select( v, - v, ( h & 2u ) != 0u );
}
fn _gradDot3( h: u32, p: vec3f ) -> f32 {
	let hh = h & 15u;
	let u = select( p.y, p.x, hh < 8u );
	let v = select( select( p.z, p.x, hh == 12u || hh == 14u ), p.y, hh < 4u );
	return select( u, - u, ( hh & 1u ) != 0u ) + select( v, - v, ( hh & 2u ) != 0u );
}
fn _fade3( t: vec3f ) -> vec3f { return t * t * t * ( t * ( t * 6.0 - 15.0 ) + 10.0 ); }
fn _h3( i: vec3i ) -> u32 { return mxHash3( i.x, i.y, i.z ); }

fn perlin3( p: vec3f ) -> f32 {
	let fl = floor( p );
	let i = vec3i( fl );
	let f = p - fl;
	let u = _fade3( f );
	let n000 = _gradDot3( _h3( i ), f );
	let n100 = _gradDot3( _h3( i + vec3i( 1, 0, 0 ) ), f - vec3f( 1.0, 0.0, 0.0 ) );
	let n010 = _gradDot3( _h3( i + vec3i( 0, 1, 0 ) ), f - vec3f( 0.0, 1.0, 0.0 ) );
	let n110 = _gradDot3( _h3( i + vec3i( 1, 1, 0 ) ), f - vec3f( 1.0, 1.0, 0.0 ) );
	let n001 = _gradDot3( _h3( i + vec3i( 0, 0, 1 ) ), f - vec3f( 0.0, 0.0, 1.0 ) );
	let n101 = _gradDot3( _h3( i + vec3i( 1, 0, 1 ) ), f - vec3f( 1.0, 0.0, 1.0 ) );
	let n011 = _gradDot3( _h3( i + vec3i( 0, 1, 1 ) ), f - vec3f( 0.0, 1.0, 1.0 ) );
	let n111 = _gradDot3( _h3( i + vec3i( 1, 1, 1 ) ), f - vec3f( 1.0, 1.0, 1.0 ) );
	let x0 = mix( mix( n000, n100, u.x ), mix( n010, n110, u.x ), u.y );
	let x1 = mix( mix( n001, n101, u.x ), mix( n011, n111, u.x ), u.y );
	return mix( x0, x1, u.z ) * 0.982;
}
fn perlin2( p: vec2f ) -> f32 {
	let fl = floor( p );
	let X = i32( fl.x ); let Y = i32( fl.y );
	let fx = p.x - fl.x; let fy = p.y - fl.y;
	let u = _fade3( vec3f( fx, fy, 0.0 ) );
	let v0 = _mxGrad2( mxHash2( X, Y ), fx, fy );
	let v1 = _mxGrad2( mxHash2( X + 1, Y ), fx - 1.0, fy );
	let v2 = _mxGrad2( mxHash2( X, Y + 1 ), fx, fy - 1.0 );
	let v3 = _mxGrad2( mxHash2( X + 1, Y + 1 ), fx - 1.0, fy - 1.0 );
	let s1 = 1.0 - u.x;
	return ( ( 1.0 - u.y ) * ( v0 * s1 + v1 * u.x ) + u.y * ( v2 * s1 + v3 * u.x ) ) * 0.6616;
}
fn mx_noise_float3( p: vec3f ) -> f32 { return perlin3( p ); }
fn mx_noise_float2( p: vec2f ) -> f32 { return perlin2( p ); }
// MaterialX vec3 noise: one hash per corner, its three low bytes pick the gradients
fn _mxGrad3v( h: u32, p: vec3f ) -> vec3f { return vec3f( _gradDot3( h & 0xffu, p ), _gradDot3( ( h >> 8u ) & 0xffu, p ), _gradDot3( ( h >> 16u ) & 0xffu, p ) ); }
fn mx_noise_vec3( p: vec3f ) -> vec3f {
	let fl = floor( p );
	let i = vec3i( fl );
	let f = p - fl;
	let u = _fade3( f );
	let n000 = _mxGrad3v( _h3( i ), f );
	let n100 = _mxGrad3v( _h3( i + vec3i( 1, 0, 0 ) ), f - vec3f( 1.0, 0.0, 0.0 ) );
	let n010 = _mxGrad3v( _h3( i + vec3i( 0, 1, 0 ) ), f - vec3f( 0.0, 1.0, 0.0 ) );
	let n110 = _mxGrad3v( _h3( i + vec3i( 1, 1, 0 ) ), f - vec3f( 1.0, 1.0, 0.0 ) );
	let n001 = _mxGrad3v( _h3( i + vec3i( 0, 0, 1 ) ), f - vec3f( 0.0, 0.0, 1.0 ) );
	let n101 = _mxGrad3v( _h3( i + vec3i( 1, 0, 1 ) ), f - vec3f( 1.0, 0.0, 1.0 ) );
	let n011 = _mxGrad3v( _h3( i + vec3i( 0, 1, 1 ) ), f - vec3f( 0.0, 1.0, 1.0 ) );
	let n111 = _mxGrad3v( _h3( i + vec3i( 1, 1, 1 ) ), f - vec3f( 1.0, 1.0, 1.0 ) );
	let x0 = mix( mix( n000, n100, u.x ), mix( n010, n110, u.x ), u.y );
	let x1 = mix( mix( n001, n101, u.x ), mix( n011, n111, u.x ), u.y );
	return mix( x0, x1, u.z ) * 0.982;
}
fn mx_fractal_noise_float3( p: vec3f, octaves: i32, lacunarity: f32, diminish: f32 ) -> f32 {
	var r = 0.0; var amp = 1.0; var q = p;
	for ( var i = 0; i < octaves; i++ ) { r += amp * perlin3( q ); amp *= diminish; q *= lacunarity; }
	return r;
}
fn mx_cell_noise_float3( p: vec3f ) -> f32 { let i = vec3i( floor( p ) ); return f32( mxHash3( i.x, i.y, i.z ) ) / f32( 0xffffffffu ); }
fn mx_cell_noise_float2( p: vec2f ) -> f32 { let i = vec2i( floor( p ) ); return f32( mxHash2( i.x, i.y ) ) / f32( 0xffffffffu ); }
// distances to the nearest two feature points (F1, F2), jitter 0..1
fn mx_worley_noise_vec2_3( p: vec3f, jitter: f32 ) -> vec2f {
	let i = vec3i( floor( p ) );
	let f = fract( p );
	var d1 = 1e9; var d2 = 1e9;
	for ( var z = -1; z <= 1; z++ ) { for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let c = vec3i( x, y, z );
		let h = ihash3( i + c );
		let o = vec3f( f32( c.x ), f32( c.y ), f32( c.z ) ) + ( vec3f( u32ToUnit( h.x ), u32ToUnit( h.y ), u32ToUnit( h.z ) ) - 0.5 ) * jitter + 0.5 - f;
		let d = dot( o, o );
		if ( d < d1 ) { d2 = d1; d1 = d; } else if ( d < d2 ) { d2 = d; }
	} } }
	return sqrt( vec2f( d1, d2 ) );
}
fn mx_worley_noise_vec2_2( p: vec2f, jitter: f32 ) -> vec2f {
	let i = vec2i( floor( p ) );
	let f = fract( p );
	var d1 = 1e9; var d2 = 1e9;
	for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let c = vec2i( x, y );
		let h = ihash3( vec3i( i + c, 0 ) );
		let o = vec2f( f32( c.x ), f32( c.y ) ) + ( vec2f( u32ToUnit( h.x ), u32ToUnit( h.y ) ) - 0.5 ) * jitter + 0.5 - f;
		let d = dot( o, o );
		if ( d < d1 ) { d2 = d1; d1 = d; } else if ( d < d2 ) { d2 = d; }
	} }
	return sqrt( vec2f( d1, d2 ) );
}

// ---- normals

// orthonormal basis around n (Frisvad / Duff et al.)
fn basis( n: vec3f ) -> mat3x3f {
	let s = select( -1.0, 1.0, n.z >= 0.0 );
	let a = -1.0 / ( s + n.z );
	let b = n.x * n.y * a;
	let t = vec3f( 1.0 + s * n.x * n.x * a, s * b, -s * n.x );
	let bt = vec3f( b, s + n.y * n.y * a, -n.y );
	return mat3x3f( t, bt, n );
}

// Perturb a world-space normal by a height field sampled with screen-space derivatives
// (Mikkelsen, "Bump Mapping Unparametrized Surfaces"; TSL perturbNormal equivalent).
// dhdx / dhdy: dpdx / dpdy of the height (in metres) at this pixel.
fn perturbNormalByHeight( P: vec3f, N: vec3f, dhdx: f32, dhdy: f32, strength: f32 ) -> vec3f {
	let dPdx = dpdx( P );
	let dPdy = dpdy( P );
	let r1 = cross( dPdy, N );
	let r2 = cross( N, dPdx );
	let det = dot( dPdx, r1 );
	let grad = sign( det ) * ( dhdx * r1 + dhdy * r2 ) * strength;
	return normalize( abs( det ) * N - grad );
}

// tangent-space normal map sample (xy in -1..1) applied with a derivative-based TBN
fn perturbNormalByMap( P: vec3f, N: vec3f, uv: vec2f, mapN: vec3f ) -> vec3f {
	let dp1 = dpdx( P ); let dp2 = dpdy( P );
	let duv1 = dpdx( uv ); let duv2 = dpdy( uv );
	let dp2perp = cross( dp2, N ); let dp1perp = cross( N, dp1 );
	let T = dp2perp * duv1.x + dp1perp * duv2.x;
	let B = dp2perp * duv1.y + dp1perp * duv2.y;
	let invmax = inverseSqrt( max( max( dot( T, T ), dot( B, B ) ), 1e-20 ) );
	return normalize( mat3x3f( T * invmax, B * invmax, N ) * mapN );
}

// ---- color

fn srgbToLinear( c: vec3f ) -> vec3f {
	return select( pow( ( c + 0.055 ) / 1.055, vec3f( 2.4 ) ), c / 12.92, c <= vec3f( 0.04045 ) );
}
fn linearToSrgb( c: vec3f ) -> vec3f {
	return select( 1.055 * pow( c, vec3f( 1.0 / 2.4 ) ) - 0.055, c * 12.92, c <= vec3f( 0.0031308 ) );
}
`}),sr={hooks:{},version:0,set(e,t){this.hooks[e]=t,this.version++},modules(){return Object.values(this.hooks).filter(Boolean)}},cr={directModulation:`fn hookDirectModulation( P: vec3f, N: vec3f ) -> vec3f { return vec3f( 1.0 ); }`,ambientModulation:`fn hookAmbientModulation( P: vec3f, N: vec3f ) -> vec3f { return vec3f( 1.0 ); }`,shadowPosition:`fn hookShadowPosition( P: vec3f, N: vec3f, pixel: vec2f ) -> vec3f { return P; }`,bounce:`fn hookBounce( P: vec3f, N: vec3f ) -> vec3f { return vec3f( 0.0 ); }`,localLights:`fn hookLocalLights( s: Surface, P: vec3f, N: vec3f, V: vec3f, acc: ptr<function, LightAccum> ) {}`,envSpecular:`fn hookEnvSpecular( R: vec3f, roughness: f32 ) -> vec3f { let t = sat( R.y * 0.5 + 0.5 ); return mix( frame.horizonColor * 0.6, frame.skyIrradiance * PI, t ) * frame.envIntensity; }`,envDiffuse:`fn hookEnvDiffuse( N: vec3f ) -> vec3f { return mix( frame.horizonColor * 0.25, frame.skyIrradiance, N.y * 0.5 + 0.5 ) * frame.envIntensity; }`};function lr(){let e=[];for(let t in cr){let n=sr.hooks[t];n?e.push(n):e.push(dr(t))}return e}var ur={};function dr(e){return ur[e]||(ur[e]=new R({name:`hook-`+e+`-default`,deps:[gr],code:cr[e]}))}var fr=new L(`SunShadow`,{matrices:[`mat4x4f[4]`,[new P,new P,new P,new P]],cascades:[`vec4f[4]`,[new j,new j,new j,new j]],count:[`u32`,0],mapSize:[`f32`,2048],bias:[`f32`,2e-5],fade:[`f32`,1],pcssCascades:[`u32`,1],sunAngularDiameter:[`f32`,.00925],enabled:[`f32`,0],pad:[`f32`,0],blend:[`vec4f[4]`,[new j,new j,new j,new j]]}),pr=null;function mr(e){pr=e}var hr=new R({name:`sunShadow`,deps:[z],uniforms:fr,uniformName:`shadowParams`,bindings:{sunShadowMap:{texture:()=>pr,viewDimension:`2d-array`}},code:`
fn shadowCascadeOf( viewDist: f32 ) -> i32 {
	for ( var i = 0; i < i32( shadowParams.count ); i++ ) { if ( viewDist < shadowParams.cascades[ i ].x ) { return i; } }
	return -1;
}

fn _shadowTap( uv: vec2f, layer: i32, z: f32 ) -> f32 {
	return textureSampleCompareLevel( sunShadowMap, smpShadow, uv, layer, z );
}

// shadow map depth (0 near .. 1 far, standard Z) at uv
fn _shadowDepth( uv: vec2f, layer: i32 ) -> f32 {
	let dim = vec2f( textureDimensions( sunShadowMap ) );
	let px = vec2i( clamp( uv * dim, vec2f( 0.0 ), dim - 1.0 ) );
	return textureLoad( sunShadowMap, px, layer, 0 );
}

// Contact-hardening sun shadows (PCSS, the former SunShadowFilter) on the near cascades. The penumbra of a
// real sun shadow grows with the distance from the occluder to the receiver (the sun is a 0.53 deg disc):
// sharp where an object touches the ground, soft under a palm crown 10 m up. Per pixel:
//  1. blocker search: average depth of the occluders around the pixel (raw depth loads, no sampler)
//  2. penumbra width = occluder-receiver distance * sun diameter, converted to this cascade's texels
//  3. percentage-closer filtering over that width
// Both sample sets are Vogel disks rotated per pixel and per frame (interleaved gradient noise): the
// TAA resolves the noise into a smooth gradient. Farther cascades: three's PCFShadowFilter (5 Vogel taps
// of hardware comparisons over one texel, rotated per pixel).
const SHADOW_MAX_OCCLUDER_HEIGHT: f32 = 30.0; // m: search radius covers penumbrae of occluders up to this far above
const SHADOW_SEARCH_TAPS: i32 = 8;
const SHADOW_FILTER_TAPS: i32 = 12;

fn sunShadowCascade( P: vec3f, N: vec3f, c: i32, noise: f32, pcfNoise: f32 ) -> f32 {
	return _sunShadowCascade( P, N, c, noise, pcfNoise, true );
}

// pcss = false: the 5-tap PCF filter in every cascade (no blocker search)
fn _sunShadowCascade( P: vec3f, N: vec3f, c: i32, noise: f32, pcfNoise: f32, pcss: bool ) -> f32 {
	let info = shadowParams.cascades[ c ];
	let Pb = P + N * info.z;
	let sc = shadowParams.matrices[ c ] * vec4f( Pb, 1.0 );
	let uvz = vec3f( sc.x * 0.5 + 0.5, 0.5 - sc.y * 0.5, sc.z );
	if ( any( uvz.xy < vec2f( 0.0 ) ) || any( uvz.xy > vec2f( 1.0 ) ) || uvz.z > 1.0 ) { return 1.0; }
	let z = uvz.z - shadowParams.bias;
	let texel = 1.0 / shadowParams.mapSize;
	if ( pcss && u32( c ) < shadowParams.pcssCascades ) {
		// moved every frame (Jimenez 2014): a noise pattern fixed on screen would never average out
		let phi = noise * TWO_PI;
		let width = info.y * shadowParams.mapSize; // cascade width (m)
		let range = info.w; // depth range (m)
		let SD = shadowParams.sunAngularDiameter;
		// 1. blockers within the widest penumbra this cascade can show. The texel straight along the light
		// ray comes first: a thin occluder (a log, a rope, a rail) can fall between the disk taps, which
		// left lit dots inside its umbra.
		let searchUV = max( min( SHADOW_MAX_OCCLUDER_HEIGHT * SD / width, texel * 24.0 ), texel * 1.5 );
		let d0 = _shadowDepth( uvz.xy, c );
		var blockSum = select( 0.0, d0, d0 < z );
		var blockCount = select( 0.0, 1.0, d0 < z );
		for ( var i = 0; i < SHADOW_SEARCH_TAPS; i++ ) {
			let d = _shadowDepth( uvz.xy + vogelDiskSample( i, SHADOW_SEARCH_TAPS, phi ) * searchUV, c );
			// standard depth: an occluder is closer to the light = smaller depth
			if ( d < z ) { blockSum += d; blockCount += 1.0; }
		}
		if ( blockCount < 0.5 ) { return 1.0; }
		// 2. occluder-receiver distance (orthographic: depth is linear over the camera range)
		let dz = abs( blockSum / blockCount - z ) * range;
		let penumbraUV = clamp( dz * SD / width, texel * 1.2, texel * 32.0 );
		// 3. PCF over the penumbra
		var sum = 0.0;
		for ( var i = 0; i < SHADOW_FILTER_TAPS; i++ ) {
			let d = _shadowDepth( uvz.xy + vogelDiskSample( i, SHADOW_FILTER_TAPS, phi + 1.7 ) * penumbraUV, c );
			sum += select( 0.0, 1.0, z <= d );
		}
		return sum / f32( SHADOW_FILTER_TAPS );
	}
	// three's PCFShadowFilter: 5 samples on a Vogel disk of one texel, rotated per pixel
	let phiP = pcfNoise * TWO_PI;
	var sum = 0.0;
	for ( var i = 0; i < 5; i++ ) {
		sum += _shadowTap( uvz.xy + vogelDiskSample( i, 5, phiP ) * texel, c, z );
	}
	return sum / 5.0;
}

// visibility of the sun at P (1 = lit); pixel = fragment coordinate for the dither.
// Cascade seams blended over a band that grows with their distance (SoftCSMShadowNode: a quarter of it,
// 2.5 m at the 10 m seam, 15 m at 60 m, and the last cascade fades out over its final 100 m); each
// cascade's map is widened to cover its part of the overlap.
fn sunShadow( P: vec3f, N: vec3f, pixel: vec2f ) -> f32 {
	return _sunShadow( P, N, pixel, true );
}

// sunShadow with the plain 5-tap PCF filter everywhere (surfaces whose own detail hides penumbrae: water)
fn sunShadowPCF( P: vec3f, N: vec3f, pixel: vec2f ) -> f32 {
	return _sunShadow( P, N, pixel, false );
}

fn _sunShadow( P: vec3f, N: vec3f, pixel: vec2f, pcss: bool ) -> f32 {
	if ( shadowParams.enabled < 0.5 ) { return 1.0; }
	let dist = dot( P - frame.cameraPos, - vec3f( frame.view[ 0 ][ 2 ], frame.view[ 1 ][ 2 ], frame.view[ 2 ][ 2 ] ) );
	let noise = interleavedGradientNoise( pixel + f32( frame.frameIndex % 64u ) * 5.588238 );
	let pcfNoise = interleavedGradientNoise( pixel );
	if ( shadowParams.fade < 0.5 ) {
		let c = shadowCascadeOf( dist );
		if ( c < 0 ) { return 1.0; }
		return _sunShadowCascade( P, N, c, noise, pcfNoise, pcss );
	}
	var ret = 1.0;
	let last = i32( shadowParams.count ) - 1;
	for ( var i = 0; i <= last; i++ ) {
		let b = shadowParams.blend[ i ]; // x, y: cascade range, z / w: blend margin at its near / far seam
		let center = ( b.x + b.y ) * 0.5;
		let margin = max( select( b.w, b.z, dist < center ), 1e-5 );
		let csmX = b.x - margin * 0.5;
		let csmY = select( b.y + margin * 0.5, b.y, i == last );
		if ( dist >= csmX && dist <= csmY ) {
			var ratio = clamp( min( dist - csmX, csmY - dist ) / margin, 0.0, 1.0 );
			// no fade at the near edge of the first cascade
			if ( i == 0 && dist <= center ) { ratio = 1.0; }
			ret -= ( 1.0 - _sunShadowCascade( P, N, i, noise, pcfNoise, pcss ) ) * ratio;
		}
	}
	return max( ret, 0.0 );
}

// one depth comparison in cascade c (1 = lit; outside the map: lit). For volumetric marches (haze shafts,
// motes) where the jitter and the temporal resolve do the filtering.
fn sunShadowCascadeHard( P: vec3f, c: i32 ) -> f32 {
	let sc = shadowParams.matrices[ c ] * vec4f( P, 1.0 );
	let uv = vec2f( sc.x * 0.5 + 0.5, 0.5 - sc.y * 0.5 );
	if ( any( uv <= vec2f( 0.0 ) ) || any( uv >= vec2f( 1.0 ) ) || sc.z > 1.0 ) { return 1.0; }
	return select( 0.0, 1.0, sc.z - 2e-5 <= _shadowDepth( uv, c ) );
}
// same in the cascade covering P (by view distance), 1 beyond the last one or with shadows off
fn sunShadowHard( P: vec3f ) -> f32 {
	if ( shadowParams.enabled < 0.5 ) { return 1.0; }
	let dist = dot( P - frame.cameraPos, - vec3f( frame.view[ 0 ][ 2 ], frame.view[ 1 ][ 2 ], frame.view[ 2 ][ 2 ] ) );
	let c = shadowCascadeOf( dist );
	if ( c < 0 ) { return 1.0; }
	return sunShadowCascadeHard( P, c );
}
`}),gr=new R({name:`surface`,deps:[z],code:`
struct Surface {
	albedo: vec3f,
	alpha: f32,
	normal: vec3f,      // world space, shading normal
	roughness: f32,
	emissive: vec3f,
	metalness: f32,
	translucency: vec3f, // fraction of the direct light transmitted through thin foliage (x lightColor)
	ao: f32,
	sheenColor: vec3f,
	specularIntensity: f32,
	clearcoat: f32,
	clearcoatRoughness: f32,
	sheenRoughness: f32,
	ior: f32,
	clearcoatNormal: vec3f,
	envIntensity: f32,
};

fn defaultSurface( N: vec3f ) -> Surface {
	var s: Surface;
	s.albedo = vec3f( 1.0 ); s.alpha = 1.0; s.normal = N; s.roughness = 1.0; s.metalness = 0.0;
	s.emissive = vec3f( 0.0 ); s.translucency = vec3f( 0.0 ); s.ao = 1.0; s.sheenColor = vec3f( 0.0 );
	s.specularIntensity = 1.0; s.clearcoat = 0.0; s.clearcoatRoughness = 0.0; s.sheenRoughness = 1.0;
	s.ior = 1.5; s.clearcoatNormal = N; s.envIntensity = 1.0;
	return s;
}

// screen derivatives of the lit position, taken at the top of shadeSurface (every lane of the quad
// is live there; the sun hooks run in a branch, where derivatives are undefined)
var<private> lightDPdx: vec3f = vec3f( 0.0 );
var<private> lightDPdy: vec3f = vec3f( 0.0 );

struct LightAccum {
	directDiffuse: vec3f,
	directSpecular: vec3f,
	indirectDiffuse: vec3f,
	indirectSpecular: vec3f,
};

fn F_Schlick( f0: vec3f, f90: f32, dotVH: f32 ) -> vec3f {
	let fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + f90 * fresnel;
}
fn V_GGX_SmithCorrelated( alpha: f32, dotNL: f32, dotNV: f32 ) -> f32 {
	let a2 = alpha * alpha;
	let gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * dotNV * dotNV );
	let gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * dotNL * dotNL );
	return 0.5 / max( gv + gl, EPS );
}
fn D_GGX( alpha: f32, dotNH: f32 ) -> f32 {
	let a2 = alpha * alpha;
	let d = dotNH * dotNH * ( a2 - 1.0 ) + 1.0;
	return INV_PI * a2 / ( d * d );
}
fn BRDF_GGX( L: vec3f, V: vec3f, N: vec3f, f0: vec3f, f90: f32, roughness: f32 ) -> vec3f {
	let alpha = roughness * roughness;
	let H = normalize( L + V );
	let dotNL = sat( dot( N, L ) ); let dotNV = sat( dot( N, V ) );
	let dotNH = sat( dot( N, H ) ); let dotVH = sat( dot( V, H ) );
	return F_Schlick( f0, f90, dotVH ) * V_GGX_SmithCorrelated( alpha, dotNL, dotNV ) * D_GGX( alpha, dotNH );
}
// Charlie sheen (Estevez & Kulla)
fn D_Charlie( roughness: f32, dotNH: f32 ) -> f32 {
	let a = roughness * roughness;
	let invA = 1.0 / a;
	let cos2h = dotNH * dotNH;
	let sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invA ) * pow( sin2h, invA * 0.5 ) / ( 2.0 * PI );
}
fn V_Neubelt( dotNV: f32, dotNL: f32 ) -> f32 { return sat( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) ); }
fn BRDF_Sheen( L: vec3f, V: vec3f, N: vec3f, color: vec3f, roughness: f32 ) -> vec3f {
	let H = normalize( L + V );
	return color * D_Charlie( roughness, sat( dot( N, H ) ) ) * V_Neubelt( sat( dot( N, V ) ), sat( dot( N, L ) ) );
}
// analytical approximation of the split-sum DFG term (Karis)
fn DFGApprox( dotNV: f32, roughness: f32 ) -> vec2f {
	let c0 = vec4f( -1.0, -0.0275, -0.572, 0.022 );
	let c1 = vec4f( 1.0, 0.0425, 1.04, -0.04 );
	let r = roughness * c0 + c1;
	let a004 = min( r.x * r.x, exp2( -9.28 * dotNV ) ) * r.x + r.y;
	return vec2f( -1.04, 1.04 ) * a004 + r.zw;
}
// multi-scattering specular energy compensation (Fdez-Aguera), as three's computeMultiscattering
fn multiscatter( N: vec3f, V: vec3f, specColor: vec3f, specF90: f32, roughness: f32, single: ptr<function, vec3f>, multi: ptr<function, vec3f> ) {
	let fab = DFGApprox( sat( dot( N, V ) ), roughness );
	let Fr = specColor;
	let FssEss = Fr * fab.x + specF90 * fab.y;
	let Ess = fab.x + fab.y;
	let Ems = 1.0 - Ess;
	let Favg = Fr + ( 1.0 - Fr ) * 0.047619;
	let Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	*single += FssEss;
	*multi += Fms * Ems;
}
`}),_r=new R({name:`lighting`,deps:[z,gr,hr],code:`
// STUDIO_LIGHTING (a pass define, e.g. the fish portraits of the catch card): the world hooks are
// skipped (no shadows, caustics, cloud / hill shadow, bounce, local lights, underwater tint) and the
// environment is a neutral photo studio: a grey sweep lit from above plus one large softbox whose
// azimuth is frame.debug.x (radians, animatable). The key light is frame.sunDir / frame.sunColor of
// the view's own frame block.
fn studioEnvSpecular( R: vec3f, roughness: f32 ) -> vec3f {
	let sweep = mix( vec3f( 0.035, 0.04, 0.045 ), vec3f( 0.55, 0.57, 0.6 ), smoothstep( -0.35, 0.85, R.y ) );
	let az = atan2( R.x, R.z ) - frame.debug.x;
	let w = 0.35 + roughness * 1.6;
	let box = exp( - az * az / ( w * w ) ) * smoothstep( -0.05, 0.3, R.y ) * smoothstep( 0.98, 0.55, R.y );
	return ( sweep + box * vec3f( 2.4, 2.35, 2.25 ) / ( 1.0 + roughness * 3.0 ) ) * frame.envIntensity;
}
fn studioEnvDiffuse( N: vec3f ) -> vec3f {
	return mix( vec3f( 0.05, 0.055, 0.06 ), vec3f( 0.3, 0.31, 0.33 ), N.y * 0.5 + 0.5 ) * frame.envIntensity;
}

fn shadeSurface( s: Surface, P: vec3f, V: vec3f, pixel: vec2f ) -> vec3f {
	let N = s.normal;
	let rough = clamp( s.roughness, 0.03, 1.0 );
	let diffuseColor = s.albedo * ( 1.0 - s.metalness );
	let specF0 = mix( vec3f( 0.04 ) * s.specularIntensity, s.albedo, s.metalness );
	let specF90 = mix( s.specularIntensity, 1.0, s.metalness );
	var acc: LightAccum;
	acc.directDiffuse = vec3f( 0.0 ); acc.directSpecular = vec3f( 0.0 );
	acc.indirectDiffuse = vec3f( 0.0 ); acc.indirectSpecular = vec3f( 0.0 );

	lightDPdx = dpdx( P );
	lightDPdy = dpdy( P );

	// ---- sun / moon
	let L = frame.sunDir;
	let dotNL = sat( dot( N, L ) );
#if STUDIO_LIGHTING
	let lightColor = frame.sunColor;
#else
	// Faces turned away from the sun with no transmission get nothing from it: the modulation hooks
	// (clouds, hill shadow, caustics) and the shadow filters only run for the rest, and the filters
	// only where the hooks left light (their derivatives are taken ahead: lightDPdx / lightDPdy)
	var lightColor = vec3f( 0.0 );
	if ( dotNL > 0.0 || any( s.translucency > vec3f( 0.0 ) ) ) {
		lightColor = frame.sunColor * hookDirectModulation( P, N );
#if MATERIAL_SUN_MODULATION
		// per-material key-light multiplier (the former TerrainLightingModel: heightfield hill shadow)
		lightColor *= materialSunModulation( P, N );
#endif
		let geomN = N;
		var shadow = 0.0;
		if ( any( lightColor > vec3f( 0.0 ) ) ) {
#if REFRACTION_CLIP
			// the water's refraction source (seen blurred through the water): one hard shadow tap
			shadow = sunShadowHard( hookShadowPosition( P, geomN, pixel ) );
#else
			shadow = sunShadow( hookShadowPosition( P, geomN, pixel ), geomN, pixel );
#endif
		}
		lightColor *= shadow;
	}
#endif
	let irradiance = dotNL * lightColor;
	acc.directDiffuse += irradiance * diffuseColor * INV_PI;
	acc.directSpecular += irradiance * BRDF_GGX( L, V, N, specF0, specF90, rough );
#if SHEEN
	acc.directSpecular += irradiance * BRDF_Sheen( L, V, N, s.sheenColor, max( s.sheenRoughness, 0.07 ) );
#endif
	// thin-surface transmission (foliage): lit from behind as well
	acc.directDiffuse += s.translucency * lightColor;
#if CLEARCOAT
	let ccN = s.clearcoatNormal;
	let ccNL = sat( dot( ccN, L ) );
	let ccSpec = ccNL * lightColor * BRDF_GGX( L, V, ccN, vec3f( 0.04 ), 1.0, clamp( s.clearcoatRoughness, 0.03, 1.0 ) );
#endif

	// ---- local lights (lanterns, windows, boat lights, flashlight)
#if !STUDIO_LIGHTING
	hookLocalLights( s, P, N, V, &acc );
#endif

	// ---- indirect: environment + ground bounce
	// (three's PhysicalLightingModel: env irradiance goes through the multiscatter-compensated
	// diffuse; the ground bounce is plain Lambert)
	let R = reflect( -V, N );
	let Rr = normalize( mix( R, N, rough * rough ) );
#if STUDIO_LIGHTING
	let envIrr = studioEnvDiffuse( N ) * PI * s.envIntensity;
	let radiance = studioEnvSpecular( Rr, rough ) * s.envIntensity;
#else
	let envIrr = hookEnvDiffuse( N ) * PI * s.envIntensity;
	let radiance = hookEnvSpecular( Rr, rough ) * s.envIntensity;
#endif
	var single = vec3f( 0.0 ); var multi = vec3f( 0.0 );
	multiscatter( N, V, specF0, specF90, rough, &single, &multi );
	let totalScatter = single + multi;
	let diffuseMS = diffuseColor * ( 1.0 - max( max( totalScatter.r, totalScatter.g ), totalScatter.b ) );
	acc.indirectSpecular += radiance * single + multi * envIrr * INV_PI;
#if STUDIO_LIGHTING
	acc.indirectDiffuse += diffuseMS * envIrr * INV_PI;
#else
	acc.indirectDiffuse += diffuseMS * envIrr * INV_PI + hookBounce( P, N ) * diffuseColor;
#endif

	// ambient occlusion (specular occlusion after Lagarde)
	let dotNV = sat( dot( N, V ) );
	let specAO = sat( pow( dotNV + s.ao, exp2( -16.0 * rough - 1.0 ) ) - 1.0 + s.ao );
	acc.indirectDiffuse *= s.ao;
	acc.indirectSpecular *= specAO;
#if STUDIO_LIGHTING
	let amb = vec3f( 1.0 );
#else
	let amb = hookAmbientModulation( P, N );
#endif
	acc.indirectDiffuse *= amb;
	acc.indirectSpecular *= amb;

	var color = acc.directDiffuse + acc.directSpecular + acc.indirectDiffuse + acc.indirectSpecular;
#if SHEEN
	color += s.sheenColor * envIrr * INV_PI * 0.5 * s.ao * amb;
#endif
#if CLEARCOAT
	let ccNV = sat( dot( ccN, V ) );
	let Fcc = F_Schlick( vec3f( 0.04 ), 1.0, ccNV ) * s.clearcoat;
#if STUDIO_LIGHTING
	let ccRad = studioEnvSpecular( reflect( -V, ccN ), clamp( s.clearcoatRoughness, 0.03, 1.0 ) ) * amb * specAO;
#else
	let ccRad = hookEnvSpecular( reflect( -V, ccN ), clamp( s.clearcoatRoughness, 0.03, 1.0 ) ) * amb * specAO;
#endif
	color = color * ( 1.0 - Fcc ) + ( ccSpec * s.clearcoat + ccRad * Fcc );
#endif
	return color + s.emissive;
}
`}),vr={view:`mat4x4f`,proj:`mat4x4f`,viewProj:`mat4x4f`,invView:`mat4x4f`,invProj:`mat4x4f`,invViewProj:`mat4x4f`,viewProjNoJitter:`mat4x4f`,prevViewProjNoJitter:`mat4x4f`,cameraPos:[`vec3f`,new A],near:[`f32`,.1],prevCameraPos:[`vec3f`,new A],far:[`f32`,6e4],resolution:[`vec2f`,new E(1,1)],invResolution:[`vec2f`,new E(1,1)],outputResolution:[`vec2f`,new E(1,1)],jitter:[`vec2f`,new E],prevJitter:[`vec2f`,new E],frameIndex:[`u32`,0],time:[`f32`,0],dt:[`f32`,1/60],seaLevel:[`f32`,0],sunDir:[`vec3f`,new A(.3,.6,-.7).normalize()],night:[`f32`,0],sunColor:[`vec3f`,new Se(1,1,1)],exposure:[`f32`,1],skyIrradiance:[`vec3f`,new Se(.3,.4,.6)],cameraUnderwater:[`f32`,0],horizonColor:[`vec3f`,new Se(.6,.7,.8)],cameraWaterHeight:[`f32`,0],waterAbsorption:[`vec3f`,new A(.42,.075,.035)],windSpeed:[`f32`,7],waterScattering:[`vec3f`,new A(.012,.018,.024)],envIntensity:[`f32`,1],windDir:[`vec2f`,new E(.35,.94).normalize()],reversedDepth:[`f32`,1],pad0:[`f32`,0],debug:[`vec4f`,new j]},yr=[`view`,`proj`,`viewProj`,`invView`,`invProj`,`invViewProj`,`viewProjNoJitter`,`prevViewProjNoJitter`,`cameraPos`,`near`,`prevCameraPos`,`far`,`resolution`,`invResolution`,`jitter`,`prevJitter`,`reversedDepth`],br=new L(`Frame`,vr,{label:`frame`});Qn(br);function xr(e){let t=new L(`Frame`,vr,{label:e});return t.onBeforePack=()=>{for(let e of br.order)yr.includes(e)||(t.fields[e].value=br.fields[e].value)},t}var Sr=br.fields,B={time:Sr.time,dt:Sr.dt,seaLevel:Sr.seaLevel,sunDir:Sr.sunDir,sunColor:Sr.sunColor,skyIrradiance:Sr.skyIrradiance,horizonColor:Sr.horizonColor,waterAbsorption:Sr.waterAbsorption,waterScattering:Sr.waterScattering,cameraUnderwater:Sr.cameraUnderwater,cameraWaterHeight:Sr.cameraWaterHeight,exposure:Sr.exposure,windDir:Sr.windDir,windSpeed:Sr.windSpeed,night:Sr.night,envIntensity:Sr.envIntensity},Cr=new P;function wr(e,t,n,{jitterX:r=0,jitterY:i=0,prevViewProj:a=null,prevCameraPos:o=null,block:s=br}={}){let c=s.fields;e.updateMatrixWorld(),e.matrixWorldInverse&&e.matrixWorldInverse.copy(e.matrixWorld).invert();let l=e.matrixWorldInverse,u=e.projectionMatrix;c.view.value=l.clone(),c.proj.value=u.clone();let d=new P().multiplyMatrices(u,l);c.viewProjNoJitter.value=d.clone();let f=2*r/t,p=2*i/n;Cr.makeTranslation(f,p,0);let m=new P().multiplyMatrices(Cr,d);c.viewProj.value=m,c.invView.value=e.matrixWorld.clone(),c.invProj.value=u.clone().invert(),c.invViewProj.value=m.clone().invert(),c.prevViewProjNoJitter.value=a?a.clone():d.clone(),c.cameraPos.value=new A().setFromMatrixPosition(e.matrixWorld),c.prevCameraPos.value=o?o.clone():c.cameraPos.value.clone(),c.near.value=e.near,c.far.value=e.far,c.resolution.value=new E(t,n),c.invResolution.value=new E(1/t,1/n),c.prevJitter.value=c.jitter.value?c.jitter.value.clone():new E,c.jitter.value=new E(f,p),c.reversedDepth.value=e.reversedDepth===!1?0:1}var Tr=[];for(let e=0;e<8;e++)Tr.push(new A);var Er=new A,Dr=new A(0,1,0),Or=new P,kr=new A,Ar=new j,jr=class{constructor({size:e=2048,splits:t=[10,60,400],lightMargin:n=200,normalBias:r=[.015,.06,.3],bias:i=2e-5,pcssCascades:a=1}={}){this.size=e,this.splits=t,this.count=t.length,this.lightMargin=n,this.normalBias=r,this.periods=t.map((e,t)=>t===0?1:t===1?2:4),this.texture=new I({label:`sunShadowMap`,width:e,height:e,depth:this.count,dimension:`2d-array`,format:`depth32float`,usage:[`sample`,`render`]}),mr(this.texture),this.cascades=t.map((e,t)=>({camera:{matrixWorld:new P,matrixWorldInverse:new P,projectionMatrix:new P,near:0,far:1,reversedDepth:!1,updateMatrixWorld(){},isCamera:!0,isShadowCamera:!0},block:xr(`shadowView`+t),viewProj:new P,radius:0,dirty:!0})),this.enabled=!0,this.layerMask=4294967295,this.frame=0,this.lastSun=new A(0,-2,0);let o=fr.fields;o.count.value=this.count,o.mapSize.value=e,o.bias.value=i,o.pcssCascades.value=a,o.enabled.value=1}_margin(e){let t=this.splits[this.count-1],n=e/t;return Math.max(.25*n*n,.25*n)*t}_fit(e,t,n){let r=this.cascades[e],i=e===0?0:this.splits[e-1],a=this.splits[e],o=this._margin(i),s=this._margin(a),c=Math.max(t.near,i-o*.5),l=e===this.count-1?a:a+s*.5;fr.fields.blend.value[e]=new j(i,a,o,s);let u=Math.tan(t.fov*Math.PI/360),d=u*t.aspect,f=0;for(let e of[c,l])for(let n of[-1,1])for(let r of[-1,1])Tr[f++].set(n*d*e,r*u*e,-e).applyMatrix4(t.matrixWorld);let p=Math.min(l,(c+l)/2*(1+d*d+u*u));Er.set(0,0,-p).applyMatrix4(t.matrixWorld);let m=0;for(let e of Tr)m=Math.max(m,e.distanceTo(Er));m=Math.ceil(m*16)/16,r.radius=m;let h=r.camera,g=n,_=Math.abs(g.y)>.99?kr.set(1,0,0):Dr;h.matrixWorld.lookAt(g,new A(0,0,0),_),Or.copy(h.matrixWorld).invert();let v=2*m/this.size,y=Ar.set(Er.x,Er.y,Er.z,1).applyMatrix4(Or);y.x=Math.round(y.x/v)*v,y.y=Math.round(y.y/v)*v;let b=m+this.lightMargin,x=new A(y.x,y.y,y.z+b).applyMatrix4(h.matrixWorld);h.matrixWorld.setPosition(x),h.matrixWorldInverse.copy(h.matrixWorld).invert();let S=.1,C=b+m;h.near=S,h.far=C,Mr(h.projectionMatrix,-m,m,m,-m,S,C),r.viewProj.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let w=fr.fields;w.matrices.value[e]=r.viewProj.clone(),w.cascades.value[e]=new j(l,v,this.normalBias[e]??.05,C-S)}update(e,t){if(this.frame++,fr.fields.enabled.value=this.enabled&&t.y>-.05?1:0,!this.enabled)return[];e.updateMatrixWorld();let n=this.lastSun.angleTo(t)>1e-4;this.lastSun.copy(t);let r=[];for(let i=0;i<this.count;i++)(n||this.cascades[i].dirty||(this.frame+i)%this.periods[i]===0)&&(this._fit(i,e,t),this.cascades[i].dirty=!1,r.push(i));return r}render(e,t,n){for(let r of n){let n=this.cascades[r];wr(n.camera,this.size,this.size,{block:n.block}),t.render(e,{label:`shadow cascade `+r,kind:`depth`,camera:n.camera,frameBlock:n.block,depthView:this.texture.view({dimension:`2d`,baseArrayLayer:r,arrayLayerCount:1}),depthFormat:`depth32float`,clearDepth:1,depthCompare:`less-equal`,layerMask:this.layerMask,depthBias:2,depthBiasSlopeScale:1.5})}}};function Mr(e,t,n,r,i,a,o){let s=1/(n-t),c=1/(r-i),l=1/(o-a);return e.set(2*s,0,0,-(n+t)*s,0,2*c,0,-(r+i)*c,0,0,-l,-a*l,0,0,0,1),e}var Nr=class{constructor(e){this.dom=e,this.keys=new Set,this.pressed=new Set,this.look={x:0,y:0},this.wheel=0,this.mouseDown=!1,this.rightDown=!1,this.locked=!1,this.enabled=!0,window.addEventListener(`keydown`,e=>{(!e.target||e.target.tagName!==`INPUT`&&e.target.tagName!==`SELECT`&&e.target.tagName!==`TEXTAREA`)&&(this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),[`Space`,`ArrowUp`,`ArrowDown`,`Tab`].includes(e.code)&&e.preventDefault())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear()),e.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0),e.button===2&&(this.rightDown=!0)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1),e.button===2&&(this.rightDown=!1)}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`mousemove`,e=>{(this.locked||this.mouseDown||this.rightDown)&&(this.look.x+=e.movementX,this.look.y+=e.movementY)}),e.addEventListener(`wheel`,e=>{this.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===e})}requestLock(){this.locked||this.dom.requestPointerLock?.()?.catch?.(()=>{})}down(e){return this.enabled&&this.keys.has(e)}hit(e){return this.enabled&&this.pressed.has(e)}consumeLook(){let e={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,e}consumeWheel(){let e=this.wheel;return this.wheel=0,e}endFrame(){this.pressed.clear()}},Pr=0,Fr={color:[`vec3f`,null],opacity:[`f32`,1],emissive:[`vec3f`,null],roughness:[`f32`,1],metalness:[`f32`,0],alphaTest:[`f32`,0]},Ir=class{constructor(e={}){this.id=Pr++,this.isMaterial=!0,this.name=e.name||`material`+this.id,this.version=0,this.modules=e.modules||[],this.varyings=e.varyings||{},this.attributes=e.attributes||{},this.vertex=e.vertex||``,this.surface=e.surface||``,this.output=e.output||``,this.shadow=e.shadow||``,this.defines={...e.defines||{}},this.lit=e.lit!==!1,this.side=e.side||`front`,this.transparent=!!e.transparent,this.blending=e.blending||(this.transparent?`normal`:`none`),this.depthWrite=e.depthWrite??!this.transparent,this.depthTest=e.depthTest??!0,this.depthCompare=e.depthCompare||null,this.depthBias=e.depthBias||0,this.depthBiasSlopeScale=e.depthBiasSlopeScale||0,this.colorWrite=e.colorWrite??!0,this.topology=e.topology||`triangle-list`,this.visible=e.visible??!0,this.vertexColors=!!e.vertexColors,this.velocityWeight=e.velocityWeight??1,this.underwaterLighting=e.underwaterLighting||`full`,this.appliesHillShadow=!!e.appliesHillShadow,this.localLightsCheap=!!e.localLightsCheap,this.receiveShadows=e.receiveShadows??!0,this.userData=e.userData||{};let t={...Fr};for(let n in e.uniforms||{})t[n]=e.uniforms[n];this.uniformBlock=new L(`MaterialParams`+this.id,t,{label:this.name}),this.uniforms=this.uniformBlock.fields;let n=this.uniforms;n.color.value=Rr(e.color,new Se(1,1,1)),n.emissive.value=Rr(e.emissive,new Se(0,0,0)),e.roughness!==void 0&&(n.roughness.value=e.roughness),e.metalness!==void 0&&(n.metalness.value=e.metalness),e.opacity!==void 0&&(n.opacity.value=e.opacity),e.alphaTest!==void 0&&(n.alphaTest.value=e.alphaTest),this.bindings={};for(let t in e.textures||{}){let n=e.textures[t];this.bindings[t]=n&&n.isTexture||typeof n==`function`?{texture:n}:n}for(let t in e.storage||{}){let n=e.storage[t];this.bindings[t]=n&&n.isStorageBuffer?{storage:n,access:`read`}:n}Object.assign(this.bindings,e.bindings||{}),this._listeners=[]}get color(){return this.uniforms.color.value}set color(e){this.uniforms.color.value=Rr(e,this.uniforms.color.value)}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=Rr(e,this.uniforms.emissive.value)}get roughness(){return this.uniforms.roughness.value}set roughness(e){this.uniforms.roughness.value=e}get metalness(){return this.uniforms.metalness.value}set metalness(e){this.uniforms.metalness.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms.opacity.value=e}get alphaTest(){return this.uniforms.alphaTest.value}set alphaTest(e){e>0!=this.uniforms.alphaTest.value>0&&(this.needsUpdate=!0),this.uniforms.alphaTest.value=e}set(e,t){this.uniformBlock.set(e,t)}set needsUpdate(e){e&&this.version++}setDefine(e,t){this.defines[e]!==t&&(this.defines[e]=t,this.version++)}pipelineKey(){return`${this.id}.${this.version}.${this.side}.${this.transparent}.${typeof this.blending==`string`?this.blending:JSON.stringify(this.blending)}.${this.depthWrite}.${this.depthTest}.${this.depthCompare}.${this.colorWrite}.${this.topology}.${this.alphaTest>0}.${this.underwaterLighting}.${this.appliesHillShadow}.${this.localLightsCheap}.${this.receiveShadows}.${this.depthBias}.${this.depthBiasSlopeScale}.${this.vertexColors}`}allDefines(){return{...this.defines,UNDERWATER_LIGHTING:{none:0,lite:1,full:2}[this.underwaterLighting]??2,HILL_SHADOW_SELF:+!!this.appliesHillShadow,LOCAL_LIGHTS_CHEAP:+!!this.localLightsCheap,ALPHA_TEST:+(this.alphaTest>0),DOUBLE_SIDED:+(this.side===`double`),BACK_SIDE:+(this.side===`back`),TRANSPARENT:+!!this.transparent,RECEIVE_SHADOWS:+!!this.receiveShadows}}addEventListener(e,t){e===`dispose`&&this._listeners.push(t)}dispose(){for(let e of this._listeners)e({target:this})}clone(){let e=Object.create(Object.getPrototypeOf(this));return Object.assign(e,this),e.id=Pr++,e.version=0,e.defines={...this.defines},e.bindings={...this.bindings},e.uniformBlock=new L(`MaterialParams`+e.id,Object.fromEntries(this.uniformBlock.order.map(e=>[e,[this.uniformBlock.layout[e].typeStr,Lr(this.uniforms[e].value)]])),{label:e.name}),e.uniforms=e.uniformBlock.fields,e._listeners=[],e}};function Lr(e){return e&&typeof e==`object`&&e.clone?e.clone():Array.isArray(e)?e.map(Lr):e}function Rr(e,t){return e==null?t:e.isColor?t.copy?t.copy(e):e.clone():typeof e==`number`||typeof e==`string`?t.set(e):Array.isArray(e)?t.setRGB(e[0],e[1],e[2]):e.isVector3?t.setRGB(e.x,e.y,e.z):t}function zr(e){if(!e||e===`none`)return;if(typeof e==`object`)return e;let t=(e,t,n=`add`)=>({srcFactor:e,dstFactor:t,operation:n});switch(e){case`normal`:return{color:t(`src-alpha`,`one-minus-src-alpha`),alpha:t(`one`,`one-minus-src-alpha`)};case`premultiplied`:return{color:t(`one`,`one-minus-src-alpha`),alpha:t(`one`,`one-minus-src-alpha`)};case`additive`:return{color:t(`src-alpha`,`one`),alpha:t(`zero`,`one`)};case`add`:return{color:t(`one`,`one`),alpha:t(`one`,`one`)};case`multiply`:return{color:t(`dst`,`zero`),alpha:t(`zero`,`one`)};case`min`:return{color:t(`one`,`one`,`min`),alpha:t(`one`,`one`,`min`)};case`max`:return{color:t(`one`,`one`,`max`),alpha:t(`one`,`one`,`max`)}}throw Error(`unknown blending `+e)}var Br=`
struct FSIn { @builtin( position ) pos: vec4f, @location( 0 ) uv: vec2f };
@vertex fn vs( @builtin( vertex_index ) i: u32 ) -> FSIn {
	let p = vec2f( f32( ( i << 1u ) & 2u ), f32( i & 2u ) );
	var o: FSIn;
	o.pos = vec4f( p * 2.0 - 1.0, FS_DEPTH, 1.0 );
	o.uv = vec2f( p.x, 1.0 - p.y );
	return o;
}
`,Vr=class{constructor({label:e=`fullscreen`,modules:t=[],bindings:n={},code:r,colorFormats:i=[`rgba16float`],blend:a=`none`,defines:o={},depthFormat:s=null,depthCompare:c=`always`,depthWrite:l=!1,depth:u=0,writeMasks:d=null,blends:f=null}){this.label=e,this.colorFormats=i;let p=r.includes(`@fragment`)?r:`${r}\n@fragment fn fs( in: FSIn ) -> @location( 0 ) vec4f { return fragment( in ); }\n`,m=nr({modules:[z,...t],bindings:n,code:Br.replace(`FS_DEPTH`,u.toFixed(6))+p,defines:o,stage:`render`,label:e});this.source=m.code,this.bindings=m.bindings;let h=or(m.code,e),g={label:e,layout:F.device.createPipelineLayout({bindGroupLayouts:[m.group0.layout,m.bindings.layout]}),vertex:{module:h,entryPoint:`vs`},fragment:{module:h,entryPoint:`fs`,targets:i.map((e,t)=>({format:e,blend:zr(f?f[t]:t===0?a:`none`),writeMask:d?d[t]:GPUColorWrite.ALL}))},primitive:{topology:`triangle-list`}};s&&(g.depthStencil={format:s,depthCompare:c,depthWriteEnabled:l}),this.handle=F.renderPipeline(g),this.timestampWrites=null}get pipeline(){return F.ready(this.handle)}draw(e,t=br){e.setPipeline(F.ready(this.handle)),e.setBindGroup(0,tr(t,`render`).getBindGroup()),e.setBindGroup(1,this.bindings.getBindGroup()),e.draw(3)}render({colorViews:e,clear:t=null,viewport:n=null,frameBlock:r=br,depthView:i=null,encoder:a=F.getEncoder()}={}){let o=e.map(e=>e.isTexture?e.view({dimension:`2d`,mipLevelCount:1}):e),s={label:this.label,colorAttachments:o.map(e=>({view:e,loadOp:t?`clear`:`load`,storeOp:`store`,clearValue:t||[0,0,0,0]}))};i&&(s.depthStencilAttachment={view:i,depthLoadOp:`load`,depthStoreOp:`store`}),this.timestampWrites&&(s.timestampWrites=this.timestampWrites);let c=a.beginRenderPass(s);n&&c.setViewport(...n),this.draw(c,r),c.end()}},Hr=new A,Ur=new Ae,Wr=new Le,Gr=new P,Kr=new P,qr={OPAQUE:0,WATER:1,TRANSPARENT:2,REFLECT_ONLY:3},Jr=[`rgba16float`,`rgba16float`,`rgba8unorm`],Yr=`depth32float`,Xr=class{constructor(e,t,n){this.meshRenderer=e,this.scene=t,this.camera=n,this.scale=1,this.width=1,this.height=1,this.sceneRT=new Cn(1,1,{colors:[{format:`rgba16float`,name:`color`},{format:`rgba16float`,name:`velocity`},{format:`rgba8unorm`,name:`waterMask`}],depth:Yr,label:`scene`}),this.velocityTexture=this.sceneRT.textures[1],this.waterMaskTexture=this.sceneRT.textures[2],this.opaqueCopy=new Cn(1,1,{colors:[`rgba16float`],depth:Yr,label:`opaqueCopy`}),this.opaqueDepthHalf=new Cn(1,1,{colors:[`r16float`],label:`opaqueDepthHalf`}),this._depthHalfPass=null,this.hullMaskRT=new Cn(1,1,{colors:[`r16float`],depth:Yr,label:`hullMask`}),this.hullMaskScene=new xt,this.hullMaskMaterial=new Ir({name:`hullMask`,lit:!1,side:`double`,surface:`s.albedo = vec3f( length( in.P - frame.cameraPos ), 0.0, 0.0 ); s.emissive = vec3f( 0.0 );`}),this.hullMasks=[],this.hullMaskActive={value:0},this.background=null,this.clearColor=[0,0,0,1],this.onBeforeWater=null}setSize(e,t){this.width=e,this.height=t,this.sceneRT.setSize(e,t),this.opaqueCopy.setSize(e,t),this.opaqueDepthHalf.setSize(e,t),this.hullMaskRT.setSize(e,t)}addHullMask(e,t){e.computeBoundingBox(),e.computeBoundingSphere();let n=new Kt(e,this.hullMaskMaterial);return n.matrixAutoUpdate=!1,n.frustumCulled=!1,this.hullMaskScene.add(n),this.hullMasks.push({mesh:n,object:t,box:e.boundingBox.clone().expandByScalar(.05),sphere:e.boundingSphere}),n}_renderHullMasks(e){let t=0;Wr.setFromProjectionMatrix(Gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));for(let n of this.hullMasks){n.object.updateWorldMatrix(!0,!1),n.mesh.matrix.copy(n.object.matrixWorld),n.mesh.matrixWorld.copy(n.object.matrixWorld),Hr.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Kr.copy(n.object.matrixWorld).invert());let r=!n.box.containsPoint(Hr)&&Wr.intersectsSphere(Ur.copy(n.sphere).applyMatrix4(n.object.matrixWorld));n.mesh.visible=r,r&&t++}if(this.hullMaskActive.value=+(t>0),!t)return;let n=this.hullMaskRT;this.meshRenderer.render(this.hullMaskScene,{label:`hull mask`,kind:`color`,camera:e,colorViews:[n.texture.view()],colorFormats:n.formats,clearColors:[[0,0,0,0]],depthView:n.depthTexture.view(),depthFormat:Yr,clearDepth:0,cull:!1})}render(){let{scene:e,camera:t,meshRenderer:n}=this,r=this.sceneRT,i={camera:t,colorViews:r.textures.map(e=>e.view()),colorFormats:r.formats,depthView:r.depthTexture.view(),depthFormat:Yr,kind:`main`};n.render(e,{...i,label:`opaque`,layerMask:1<<qr.OPAQUE,clearColors:[this.clearColor,[0,0,0,0],[0,0,0,0]],clearDepth:0,after:this.background?e=>this.background.draw(e):null});let a=F.getEncoder(),o={width:r.width,height:r.height};a.copyTextureToTexture({texture:r.texture.getGPU()},{texture:this.opaqueCopy.texture.getGPU()},o),a.copyTextureToTexture({texture:r.depthTexture.getGPU()},{texture:this.opaqueCopy.depthTexture.getGPU()},o),this._depthHalfPass||=new Vr({label:`opaque depth half`,colorFormats:[`r16float`],bindings:{srcDepth:{texture:()=>this.opaqueCopy.depthTexture}},code:`fn fragment( in: FSIn ) -> vec4f { return vec4f( textureLoad( srcDepth, vec2i( in.pos.xy ), 0 ), 0.0, 0.0, 1.0 ); }`}),this._depthHalfPass.render({colorViews:[this.opaqueDepthHalf.texture],clear:[0,0,0,0]}),this.hullMasks.length>0&&this._renderHullMasks(t),this.onBeforeWater&&this.onBeforeWater(),n.render(e,{...i,label:`water + transparent`,late:!0,layerMask:1<<qr.WATER|1<<qr.TRANSPARENT})}},Zr={position:`vec3f`,normal:`vec3f`,uv:`vec2f`,color:`vec4f`},Qr={normal:`vec3f( 0.0, 1.0, 0.0 )`,uv:`vec2f( 0.0 )`,color:`vec4f( 1.0 )`},$r=/^(u32|i32|vec[234][ui])$/;function ei(e){return e===`f32`?`0.0`:e===`u32`?`0u`:e===`i32`?`0i`:`${e}()`}function ti(e,t,n){let r=n.kind,i=new Set(t.map(e=>e.name)),a=e.allDefines();a.PASS_MAIN=+(r===`main`),a.PASS_DEPTH=+(r===`depth`),a.PASS_COLOR=+(r===`color`),a.PASS_LATE=+!!n.late,a.LIT=+!!e.lit,a.INSTANCED=+!!i.has(`instanceMatrix0`),a.INSTANCE_COLOR=+!!i.has(`instanceColor`),Object.assign(a,n.defines||{}),a.CLIP_DISTANCES=a.REFRACTION_CLIP&&F.features.has(`clip-distances`)?1:0;let o=`struct VertexIn {
`;for(let e of t)o+=`\t@location( ${e.location} ) ${e.name}: ${e.wgsl},\n`;o+=`	@builtin( instance_index ) instance: u32,
	@builtin( vertex_index ) vertex: u32,
};
`;let s=`struct VertexData {
	position: vec3f,
	normal: vec3f,
	uv: vec2f,
	color: vec4f,
	model: mat4x4f,
	prevModel: mat4x4f,
	instance: u32,
	vertex: u32,
	worldOffset: vec3f,
	prevWorldOffset: vec3f,
	useWorld: bool,
	worldPos: vec3f,
	worldNormal: vec3f,
	prevWorldPos: vec3f,
`;for(let t in e.attributes)s+=`\t${t}: ${e.attributes[t]},\n`;s+=`};
`;let c=r===`main`,l=0,u=`struct VSOut {
	@builtin( position ) clip: vec4f,
`;u+=`\t@location( ${l++} ) worldPos: vec3f,\n`,u+=`\t@location( ${l++} ) normal: vec3f,\n`,u+=`\t@location( ${l++} ) uv: vec2f,\n`,u+=`\t@location( ${l++} ) color: vec4f,\n`,c&&(u+=`\t@location( ${l++} ) curClip: vec4f,\n`,u+=`\t@location( ${l++} ) prevClip: vec4f,\n`);for(let t in e.varyings){let n=e.varyings[t];u+=`\t@location( ${l++} )${$r.test(n)?` @interpolate( flat )`:``} ${t}: ${n},\n`}if(u+=`};
`,a.CLIP_DISTANCES){let e=[...u.matchAll(/\s(\w+): [^,]+,\n/g)].map(e=>e[1]);u+=u.replace(`struct VSOut {`,`struct VSOutClip {`).replace(/};\n$/,`	@builtin( clip_distances ) clipDistances: array<f32, 1>,
};
`),u+=`fn vsClip( o: VSOut, d: f32 ) -> VSOutClip {\n\tvar c: VSOutClip;\n${e.map(e=>`\tc.${e} = o.${e};\n`).join(``)}\tc.clipDistances[ 0 ] = d;\n\treturn c;\n}\n`}let d=``;for(let e in Zr)if(i.has(e)){let n=t.find(t=>t.name===e);e===`color`&&n.wgsl===`vec3f`?d+=`	v.color = vec4f( i.color, 1.0 );
`:d+=`\tv.${e} = i.${e};\n`}else e!==`position`&&(d+=`\tv.${e} = ${Qr[e]};\n`);for(let t in e.attributes)d+=i.has(t)?`\tv.${t} = i.${t};\n`:`\tv.${t} = ${ei(e.attributes[t])};\n`;let f=`
struct Draw {
	model: mat4x4f,
	prevModel: mat4x4f,
	params: vec4f,  // x: object id, y: user, z: user, w: user
	params2: vec4f,
};
@group( 2 ) @binding( 0 ) var<uniform> draw: Draw;

${o}
${s}
${u}

struct FragInput {
	vs: VSOut,
	P: vec3f,
	N: vec3f,
	V: vec3f,
	uv: vec2f,
	color: vec4f,
	front: bool,
	pixel: vec2f,
};

struct FragResult {
	color: vec4f,
	velocity: vec4f,
	mask: vec4f,
};

fn cofactor3( m: mat4x4f ) -> mat3x3f {
	let a = m[ 0 ].xyz; let b = m[ 1 ].xyz; let c = m[ 2 ].xyz;
	return mat3x3f( cross( b, c ), cross( c, a ), cross( a, b ) );
}

fn materialVertex( v: ptr<function, VertexData>, o: ptr<function, VSOut> ) {
${e.vertex}
}

fn materialSurface( in: FragInput, s: ptr<function, Surface> ) {
${e.surface}
}

fn materialOutput( in: FragInput, s: Surface, r: ptr<function, FragResult> ) {
${e.output}
}

#if CLIP_DISTANCES
@vertex fn vs( i: VertexIn ) -> VSOutClip {
#else
@vertex fn vs( i: VertexIn ) -> VSOut {
#endif
	var v: VertexData;
${d}#if !HAS_POSITION
	v.position = vec3f( 0.0 );
#endif
	v.instance = i.instance;
	v.vertex = i.vertex;
#if INSTANCED
	let im = mat4x4f( i.instanceMatrix0, i.instanceMatrix1, i.instanceMatrix2, i.instanceMatrix3 );
	v.model = draw.model * im;
	v.prevModel = draw.prevModel * im;
#else
	v.model = draw.model;
	v.prevModel = draw.prevModel;
#endif
#if INSTANCE_COLOR
	v.color = vec4f( v.color.rgb * i.instanceColor, v.color.a );
#endif
	v.worldOffset = vec3f( 0.0 );
	v.prevWorldOffset = vec3f( 1e30 );
	v.useWorld = false;
	v.prevWorldPos = vec3f( 1e30 );
	var o: VSOut;
	materialVertex( &v, &o );
	var wp: vec3f;
	var wn: vec3f;
	var pwp: vec3f;
	if ( v.useWorld ) {
		wp = v.worldPos;
		wn = v.worldNormal;
		pwp = select( v.prevWorldPos, wp, v.prevWorldPos.x > 1e29 );
	} else {
		let lp = vec4f( v.position, 1.0 );
		wp = ( v.model * lp ).xyz + v.worldOffset;
		wn = cofactor3( v.model ) * v.normal;
		pwp = ( v.prevModel * lp ).xyz + select( v.prevWorldOffset, v.worldOffset, v.prevWorldOffset.x > 1e29 );
	}
	o.worldPos = wp;
	o.normal = wn;
	o.uv = v.uv;
	o.color = v.color;
	o.clip = frame.viewProj * vec4f( wp, 1.0 );
#if PASS_MAIN
	o.curClip = frame.viewProjNoJitter * vec4f( wp, 1.0 );
	o.prevClip = frame.prevViewProjNoJitter * vec4f( pwp, 1.0 );
#endif
#if CLIP_DISTANCES
	return vsClip( o, frame.seaLevel + REFRACTION_CLIP_MARGIN - wp.y );
#else
	return o;
#endif
}

#if PASS_MAIN && !PASS_LATE && LIT && !IS_WATER && !ALPHA_TEST && !STUDIO_LIGHTING
// Deep under the water, seen from above it: the water drawn over this pixel shows the refraction
// pass (ocean/RefractionPass.js) at its refracted end point, never this pixel's own colour. The end
// point is predicted as the water shader traces it (flat surface, the seabed at P's depth, a margin
// for the wave slopes); where it would leave the screen the water takes the refraction pass' edge.
const SUBMERGED_DEPTH: f32 = 2.5; // m below sea level: below the deepest wave troughs
fn submergedHidden( P: vec3f ) -> bool {
	let sea = frame.seaLevel;
	if ( P.y > sea - SUBMERGED_DEPTH || frame.cameraPos.y < sea + 1.0 ) { return false; }
	let V = normalize( P - frame.cameraPos );
	let pos = frame.cameraPos + V * ( ( frame.cameraPos.y - sea ) / max( - V.y, 1e-4 ) );
	let Tr = refract( V, vec3f( 0.0, 1.0, 0.0 ), 1.0 / 1.333 );
	let Tv = normalize( vec3f( Tr.x, min( Tr.y, -0.08 ), Tr.z ) );
	let L = ( sea - P.y ) / max( - Tv.y, 0.04 );
	let c = frame.viewProj * vec4f( pos + Tv * min( L, 80.0 ), 1.0 );
	let uv = c.xy / max( c.w, 1e-4 ) * vec2f( 0.5, -0.5 ) + 0.5;
	return all( uv > vec2f( 0.1 ) ) && all( uv < vec2f( 0.9 ) ) && c.w > 0.0;
}
#endif

fn fragInput( vs: VSOut, front: bool ) -> FragInput {
	var in: FragInput;
	in.vs = vs;
	in.P = vs.worldPos;
	var N = normalize( vs.normal );
#if DOUBLE_SIDED
	N = select( -N, N, front );
#endif
#if BACK_SIDE
	N = -N;
#endif
	in.N = N;
	in.V = normalize( frame.cameraPos - vs.worldPos );
	in.uv = vs.uv;
	in.color = vs.color;
	in.front = front;
	in.pixel = vs.clip.xy;
	return in;
}

fn surfaceOf( in: FragInput ) -> Surface {
	var s = defaultSurface( in.N );
	s.albedo = mat.color * in.color.rgb;
	s.alpha = mat.opacity * in.color.a;
	s.roughness = mat.roughness;
	s.metalness = mat.metalness;
	s.emissive = mat.emissive;
	materialSurface( in, &s );
	return s;
}

#if PASS_DEPTH
#if NEEDS_DEPTH_FRAGMENT
@fragment fn fs( vs: VSOut, @builtin( front_facing ) front: bool ) {
	let in = fragInput( vs, front );
#if HAS_SHADOW_HOOK
	if ( ! materialShadow( in ) ) { discard; }
#else
	let s = surfaceOf( in );
	if ( s.alpha < mat.alphaTest ) { discard; }
#endif
}
#endif
#else

#if PASS_MAIN
struct FragOut {
	@location( 0 ) color: vec4f,
	@location( 1 ) velocity: vec4f,
	@location( 2 ) mask: vec4f,
};
#else
struct FragOut {
	@location( 0 ) color: vec4f,
};
#endif

@fragment fn fs( vs: VSOut, @builtin( front_facing ) front: bool ) -> FragOut {
	let in = fragInput( vs, front );
#if REFRACTION_CLIP
#if !CLIP_DISTANCES
	// the water's refraction source only holds what is under the water (pass.defines)
	if ( in.P.y > frame.seaLevel + REFRACTION_CLIP_MARGIN ) { discard; }
#endif
#endif
#if PASS_MAIN && !PASS_LATE && LIT && !IS_WATER && !ALPHA_TEST && !STUDIO_LIGHTING
	// hidden under the water (see submergedHidden): an ambient colour, keeping depth and motion
	if ( submergedHidden( in.P ) ) {
		var so: FragOut;
		so.color = vec4f( mat.color * in.color.rgb * hookEnvDiffuse( in.N ) * hookAmbientModulation( in.P, in.N ), 1.0 );
		let cur0 = vs.curClip.xy / vs.curClip.w;
		let prev0 = vs.prevClip.xy / vs.prevClip.w;
		so.velocity = vec4f( ( cur0 - prev0 ) * vec2f( 0.5, -0.5 ), 0.0, 1.0 );
		so.mask = vec4f( 0.0 );
		return so;
	}
#endif
	var s = surfaceOf( in );
#if ALPHA_TEST
	if ( s.alpha < mat.alphaTest ) { discard; }
#endif
	s.normal = normalize( s.normal );
	s.clearcoatNormal = normalize( s.clearcoatNormal );
	var r: FragResult;
#if LIT
	r.color = vec4f( shadeSurface( s, in.P, in.V, in.pixel ), s.alpha );
#else
	r.color = vec4f( s.albedo + s.emissive, s.alpha );
#endif
#if PASS_MAIN
	let cur = vs.curClip.xy / vs.curClip.w;
	let prev = vs.prevClip.xy / vs.prevClip.w;
	r.velocity = vec4f( ( cur - prev ) * vec2f( 0.5, -0.5 ), 0.0, 1.0 );
#else
	r.velocity = vec4f( 0.0 );
#endif
	r.mask = vec4f( 0.0 );
	materialOutput( in, s, &r );
	var out: FragOut;
	out.color = r.color;
#if PASS_MAIN
#if PASS_LATE
	// premultiplied: opaque outputs overwrite, blended ones weight their motion by coverage
#if VELOCITY_OPAQUE
	// the fragment owns the motion of its pixel even when its colour is blended (AirMotes specks)
	let a = VELOCITY_WEIGHT;
#else
	let a = select( 1.0, r.color.a, TRANSPARENT_F ) * VELOCITY_WEIGHT;
#endif
	out.velocity = vec4f( r.velocity.xy * a, 0.0, a );
#else
	out.velocity = r.velocity;
#endif
	out.mask = r.mask;
#endif
	return out;
}
#endif
`,p=e.shadow?`fn materialShadow( in: FragInput ) -> bool {\n${e.shadow}\n}\n`:``;a.HAS_SHADOW_HOOK=+!!e.shadow,a.NEEDS_DEPTH_FRAGMENT=r===`depth`&&(e.alphaTest>0||e.shadow)?1:0,a.HAS_POSITION=+!!i.has(`position`);let m=f.replace(`fn fragInput(`,p+`fn fragInput(`).replace(/\bTRANSPARENT_F\b/g,e.transparent?`true`:`false`).replace(/\bVELOCITY_WEIGHT\b/g,ni(e.velocityWeight)).replace(/\bREFRACTION_CLIP_MARGIN\b/g,ni((n.defines&&n.defines.REFRACTION_CLIP_MARGIN)??0)),h=[z,gr,...e.modules];return(r!==`depth`||Pn(e.modules).includes(_r))&&(h=[z,gr,...lr(),_r,...e.modules]),e.lightingHooks===!1&&!Pn(e.modules).includes(_r)&&(h=[z,gr,hr,...e.modules]),{code:m,modules:h,defines:a,bindings:{mat:{uniform:e.uniformBlock},...e.bindings},hasFragment:r!==`depth`||a.NEEDS_DEPTH_FRAGMENT===1}}function ni(e){let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`}var ri=new Ae,ii=new Le,ai=new P,oi=new A,si=new A,ci=new WeakMap,li=0,ui=256,di=class{constructor(){this.pipelines=new Map,this.geometries=new WeakMap,this.capacity=8192,this.drawBuffer=null,this.drawData=null,this.drawCount=0,this.frame=-1,this.stats={draws:0,triangles:0,pipelines:0},this.drawLayout=null,this.drawBindGroup=null,this.syncPipelines=!0}_ensureDrawBuffer(){this.drawBuffer&&this.drawData.byteLength>=this.capacity*ui||(this.drawBuffer&&this.drawBuffer.destroy(),this.drawBuffer=F.device.createBuffer({label:`draws`,size:this.capacity*ui,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.drawData=new Float32Array(this.capacity*ui/4),this.drawLayout=Jn([{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:`uniform`,hasDynamicOffset:!0,minBindingSize:160}}],`draw`),this.drawBindGroup=F.device.createBindGroup({label:`draws`,layout:this.drawLayout,entries:[{binding:0,resource:{buffer:this.drawBuffer,size:160}}]}))}_beginFrame(){this.frame!==F.frame&&(this.frame=F.frame,this._ensureDrawBuffer(),this.drawCount>this.capacity*.75&&(this.capacity*=2,this._ensureDrawBuffer()),this.drawCount=0,F.onSubmit(()=>{this.drawCount&&F.queue.writeBuffer(this.drawBuffer,0,this.drawData.buffer,0,this.drawCount*ui)}),this.stats.draws=0,this.stats.triangles=0)}_slot(e){let t=e.__draw;if(t||=e.__draw={frame:-1,slot:0,cur:new Float32Array(16),prev:new Float32Array(16),has:!1},t.frame===F.frame)return t.slot;if(this.drawCount>=this.capacity)throw Error(`MeshRenderer: draw buffer full`);t.frame=F.frame,t.slot=this.drawCount++;let n=e.matrixWorld.elements;t.has&&!e.resetVelocity?t.prev.set(t.cur):t.prev.set(n),t.cur.set(n),t.has=!0,e.resetVelocity=!1;let r=t.slot*ui/4,i=this.drawData;i.set(t.cur,r),i.set(e.staticVelocity?t.cur:t.prev,r+16);let a=e.drawParams;if(i[r+32]=e.id??0,i[r+33]=a?a[0]:0,i[r+34]=a?a[1]:0,i[r+35]=a?a[2]:0,a&&a.length>3)for(let e=0;e<4;e++)i[r+36+e]=a[3+e]??0;return t.slot}_geometryGPU(e){let t=this.geometries.get(e);return t||(t={buffers:new Map,index:null,indexVersion:-1},this.geometries.set(e,t),e.addEventListener&&e.addEventListener(`dispose`,()=>{for(let e of t.buffers.values())e.buffer.destroy();t.index&&t.index.buffer.destroy(),this.geometries.delete(e)})),t}_attributeBuffer(e,t){let n=this._geometryGPU(e),r=t.isInterleavedBufferAttribute?t.data:t;if(r.gpuBuffer)return r.gpuBuffer.getGPU?r.gpuBuffer.getGPU():r.gpuBuffer;let i=n.buffers.get(r),a=r.version??0;if(i&&i.version===a&&i.array===r.array)return i.buffer;let o=hi(t);if((!i||i.size<o.byteLength)&&(i&&i.buffer.destroy(),i={buffer:F.device.createBuffer({label:t.name||`attribute`,size:Math.max(16,fi(o.byteLength)),usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),size:o.byteLength,version:-1},n.buffers.set(r,i)),i.version!==a){let e=r.updateRanges&&r.updateRanges.length&&i.version>=0?r.updateRanges:null;if(e&&o.array===r.array){let t=r.array.BYTES_PER_ELEMENT;for(let n of e)F.queue.writeBuffer(i.buffer,n.start*t,r.array.buffer,r.array.byteOffset+n.start*t,fi(n.count*t));r.clearUpdateRanges?r.clearUpdateRanges():r.updateRanges.length=0}else pi(i.buffer,o);i.version=a}return i.array=r.array,i.buffer}_indexBuffer(e){let t=e.index;if(!t)return null;let n=this._geometryGPU(e);if(n.indexRef&&n.indexSrc===t.array&&n.indexVersion===(t.version??0))return n.indexRef;let r=t.array instanceof Uint16Array||t.array instanceof Uint32Array?t.array:new Uint32Array(t.array);return(!n.index||n.index.size<r.byteLength)&&(n.index&&n.index.buffer.destroy(),n.index={buffer:F.device.createBuffer({label:`index`,size:Math.max(16,fi(r.byteLength)),usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),size:r.byteLength},n.indexVersion=-1),n.indexVersion!==(t.version??0)&&(pi(n.index.buffer,r),n.indexVersion=t.version??0),n.indexSrc=t.array,n.indexRef={buffer:n.index.buffer,format:r instanceof Uint16Array?`uint16`:`uint32`},n.indexRef}_cachedLayout(e,t,n){let r=ci.get(t);r||ci.set(t,r=new Map);let i=e.isInstancedMesh?e.instanceColor?2:1:0,a=i?n.id+`:`+i:n.id,o=r.get(a);if(o&&o.version===n.version&&o.attrsVersion===t.attributesVersion&&(!i||o.instanceMatrix===e.instanceMatrix)){let e=o.refs,n=o.names,r=t.attributes,i=!0;for(let t=0;t<n.length;t++)if(r[n[t]]!==e[t]){i=!1;break}if(i)return o.vl}let s=this._layout(e,t,n),c=s.layout.filter(e=>!e.name.startsWith(`instance`)).map(e=>e.name);return o={version:n.version,attrsVersion:t.attributesVersion,instanceMatrix:e.instanceMatrix,names:c,refs:c.map(e=>t.attributes[e]),vl:s},s.pipelines=new Map,r.set(a,o),s}_layout(e,t,n){let r=[],i=[`position`,`normal`,`uv`,`color`,...Object.keys(n.attributes)];for(let e of i){let i=t.attributes[e];i&&(e!==`color`||n.vertexColors||n.attributes.color)&&r.push({name:e,attr:i})}if(e.isInstancedMesh){for(let t=0;t<4;t++)r.push({name:`instanceMatrix`+t,attr:e.instanceMatrix,column:t});e.instanceColor&&r.push({name:`instanceColor`,attr:e.instanceColor})}let a=[],o=[],s=new Map,c=0;for(let e of r){let t=e.attr,r=t.isInterleavedBufferAttribute?t.data:t,i=!!(t.isInstancedBufferAttribute||r.isInstancedInterleavedBuffer||t.meshPerAttribute||r.meshPerAttribute)||e.name.startsWith(`instance`),l=_i(t),u=s.get(r);if(u===void 0){u=a.length,s.set(r,u);let e=t.isInterleavedBufferAttribute?t.data.stride*l.bytesPerComponent:t.itemSize*l.bytesPerComponent;a.push({src:r,attr:t,layout:{arrayStride:l.converted?l.itemSize*4:e,stepMode:i?`instance`:`vertex`,attributes:[]}})}let d=t.isInterleavedBufferAttribute?t.offset*l.bytesPerComponent:0,f=l.format,p=l.wgsl;e.column!==void 0&&(d=e.column*16,f=`float32x4`,p=`vec4f`),a[u].layout.attributes.push({shaderLocation:c,offset:d,format:f}),(e.name===`position`||e.name===`normal`)&&(p=`vec3f`),e.name===`uv`&&(p=`vec2f`),e.name===`color`&&(p=t.itemSize===4?`vec4f`:`vec3f`),e.name===`instanceColor`&&(p=`vec3f`),n.attributes[e.name]&&(p=n.attributes[e.name]),o.push({name:e.name,wgsl:p,location:c,instanced:i}),c++}return{key:o.map(e=>`${e.name}:${e.wgsl}`).join(`,`)+`|`+a.map(e=>`${e.layout.arrayStride}/${e.layout.stepMode}/${e.layout.attributes.map(e=>e.format+`@`+e.offset).join(`;`)}`).join(`,`),layout:o,buffers:a}}_pipeline(e,t,n){e.__pkFrame!==F.frame&&(e.__pk=e.pipelineKey()+`|`+sr.version,e.__pkFrame=F.frame);let r=n.passKey,i=t.pipelines&&t.pipelines.get(r);if(i&&i.materialKey===e.__pk)return i.p;let a=`${e.__pk}|${t.key}|${r}`,o=this.pipelines.get(a);return o||=this._createPipeline(e,t,n,a),t.pipelines&&t.pipelines.set(r,{materialKey:e.__pk,p:o}),o}_createPipeline(e,t,n,r){let i=ti(e,t.layout,n),a=nr({modules:i.modules,bindings:i.bindings,code:i.code,defines:i.defines,stage:`render`,label:e.name}),o=or(a.code,e.name);this._ensureDrawBuffer();let s=F.device.createPipelineLayout({bindGroupLayouts:[a.group0.layout,a.bindings.layout,this.drawLayout]}),c=zr(e.blending),l=[];n.kind===`main`?l=[{format:n.colorFormats[0],blend:e.transparent||n.late?c:void 0,writeMask:e.colorWrite?GPUColorWrite.ALL:0},{format:n.colorFormats[1],blend:n.late?zr(`premultiplied`):void 0,writeMask:e.colorWrite?GPUColorWrite.ALL:0},{format:n.colorFormats[2],blend:zr(`normal`),writeMask:e.colorWrite?GPUColorWrite.ALL:0}]:n.kind===`color`&&(l=n.colorFormats.map(t=>({format:t,blend:c,writeMask:e.colorWrite?GPUColorWrite.ALL:0})));let u=e.side,d=n.cullOverride||(u===`double`?`none`:u===`back`?`front`:`back`),f=e.depthTest?e.depthCompare||n.depthCompare:`always`,p={label:e.name+` `+n.kind,layout:s,vertex:{module:o,entryPoint:`vs`,buffers:t.buffers.map(e=>e.layout)},primitive:{topology:e.topology,cullMode:d,frontFace:`ccw`}};i.hasFragment&&(p.fragment={module:o,entryPoint:`fs`,targets:l}),n.depthFormat&&(p.depthStencil={format:n.depthFormat,depthWriteEnabled:e.depthWrite,depthCompare:f,depthBias:n.kind===`depth`?n.depthBias||0:e.depthBias,depthBiasSlopeScale:n.kind===`depth`?n.depthBiasSlopeScale||0:e.depthBiasSlopeScale});let m={handle:F.renderPipeline(p),bindings:a.bindings,label:p.label};return this.pipelines.set(r,m),this.stats.pipelines=this.pipelines.size,m}collect(e,{camera:t,layerMask:n=4294967295,filter:r=null,kind:i=`main`,cull:a=!0}){let o=[],s=[];t&&(t.updateMatrixWorld(),ai.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse.copy(t.matrixWorld).invert()),ii.setFromProjectionMatrix(ai,t.reversedDepth!==!1),si.setFromMatrixPosition(t.matrixWorld));let c=this.precompiling,l=e=>{if(e.visible||c){e.isMesh&&e.material&&e.geometry&&(e.layers.mask&n)!==0&&(!r||r(e))&&(i!==`depth`||e.castShadow)&&(c||!a||!t||e.frustumCulled===!1||this._inFrustum(e))&&(e.onBeforeRender&&e.onBeforeRender(null,null,t,e.geometry,e.material,null),(e.visible||c)&&this._addItems(e,o,s));for(let t of e.children)l(t)}};return e.updateMatrixWorld(),l(e),o.sort((e,t)=>e.renderOrder-t.renderOrder||e.pipeKey-t.pipeKey||e.z-t.z),s.sort((e,t)=>e.renderOrder-t.renderOrder||t.z-e.z),{opaque:o,transparent:s}}_inFrustum(e){let t=null;return e.isInstancedMesh?(!e.boundingSphere&&e.computeBoundingSphere&&e.computeBoundingSphere(),t=e.boundingSphere):(e.geometry.boundingSphere||e.geometry.computeBoundingSphere(),t=e.geometry.boundingSphere),!t||t.radius<0||!Number.isFinite(t.radius)||(ri.copy(t).applyMatrix4(e.matrixWorld),ii.intersectsSphere(ri))}_addItems(e,t,n){let r=e.geometry,i=Array.isArray(e.material)?e.material:null,a=oi.setFromMatrixPosition(e.matrixWorld).distanceToSquared(si),o=(i,o,s)=>{if(!i||!i.visible&&!this.precompiling)return;let c={object:e,geometry:r,material:i,start:o,count:s,z:a,renderOrder:e.renderOrder||0,pipeKey:i.id};(i.transparent?n:t).push(c)},s=r.drawRange||{start:0,count:1/0};if(i&&r.groups&&r.groups.length)for(let e of r.groups){let t=Math.max(e.start,s.start),n=Math.min(e.start+e.count,s.start+s.count);n>t&&o(i[e.materialIndex],t,n-t)}else o(i?i[0]:e.material,s.start,s.count)}render(e,t){this._beginFrame(),t={kind:`main`,late:!1,colorFormats:[],depthFormat:null,depthCompare:`greater-equal`,frameBlock:br,layerMask:4294967295,...t},t.passKey=`${t.kind}.${+!!t.late}.${t.colorFormats.join(`,`)}.${t.depthFormat}.${t.depthCompare}.${t.cullOverride||``}.${t.defines?JSON.stringify(t.defines):``}`;let n=t.items||this.collect(e,t),r=F.getEncoder(),i=(t.colorViews||[]).map((e,n)=>{let r=t.clearColors?t.clearColors[n]:null;return{view:e,loadOp:r?`clear`:`load`,storeOp:`store`,clearValue:r||[0,0,0,0]}}),a={label:t.label||t.kind,colorAttachments:i};t.depthView&&(a.depthStencilAttachment={view:t.depthView,depthLoadOp:t.clearDepth===null||t.clearDepth===void 0?`load`:`clear`,depthStoreOp:`store`,depthClearValue:t.clearDepth??0}),t.timestampWrites&&(a.timestampWrites=t.timestampWrites);let o=r.beginRenderPass(a);t.viewport&&o.setViewport(...t.viewport),o.setBindGroup(0,tr(t.frameBlock,`render`).getBindGroup()),this.drawItems(o,n.opaque,t),t.betweenLists&&t.betweenLists(o),this.drawItems(o,n.transparent,t),t.after&&t.after(o),o.end()}drawItems(e,t,n){let r=null,i=null,a=++li;for(let o of t){let{object:t,geometry:s,material:c}=o;if(!s.attributes.position&&!s.vertexCount&&!s.indirect)continue;let l,u;if(this.precompiling){try{l=this._cachedLayout(t,s,c),u=this._pipeline(c,l,n)}catch{continue}continue}l=this._cachedLayout(t,s,c),u=this._pipeline(c,l,n);let d=u.handle.pipeline||(this.syncPipelines?F.ready(u.handle):null);if(!d)continue;u!==r&&(e.setPipeline(d),r=u);let f=u.bindings.getBindGroup(a);f!==i&&(e.setBindGroup(1,f),i=f),e.setBindGroup(2,this.drawBindGroup,[this._slot(t)*ui]);for(let t=0;t<l.buffers.length;t++)e.setVertexBuffer(t,this._attributeBuffer(s,l.buffers[t].attr));let p=t.isInstancedMesh?t.count:s.instanceCount??1;if(p===0)continue;let m=this._indexBuffer(s);if(s.indirect){let t=s.indirect.buffer.getGPU?s.indirect.buffer.getGPU():s.indirect.buffer,n=s.indirect.offsets||[s.indirect.offset||0];m&&e.setIndexBuffer(m.buffer,m.format);for(let r of n)m?e.drawIndexedIndirect(t,r):e.drawIndirect(t,r),this.stats.draws++;continue}if(m){let t=Math.min(o.count,s.index.count-o.start);if(t<=0)continue;e.setIndexBuffer(m.buffer,m.format),e.drawIndexed(t,p===1/0?1:p,o.start,0,0),this.stats.triangles+=t/3*p}else{let t=s.attributes.position?s.attributes.position.count:s.vertexCount,n=Math.min(o.count,t-o.start);if(n<=0)continue;e.draw(n,p,o.start,0),this.stats.triangles+=n/3*p}this.stats.draws++}}};function fi(e){return Math.ceil(e/4)*4}function pi(e,t){if(t.byteLength%4==0){F.queue.writeBuffer(e,0,t.buffer,t.byteOffset,t.byteLength);return}let n=new Uint8Array(fi(t.byteLength));n.set(new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),F.queue.writeBuffer(e,0,n)}var mi=new WeakMap;function hi(e){let t=e.isInterleavedBufferAttribute?e.data:e;if(!_i(e).converted)return t.array;let n=mi.get(t);if(n&&n.version===t.version)return n.array;let r=e.count,i=e.itemSize,a=new Float32Array(r*i),o=e.normalized?gi(t.array):1;for(let e=0;e<r*i;e++)a[e]=t.array[e]/o;return mi.set(t,{version:t.version,array:a}),a}function gi(e){return e instanceof Uint8Array?255:e instanceof Int8Array?127:e instanceof Uint16Array?65535:e instanceof Int16Array?32767:1}function _i(e){let t=(e.isInterleavedBufferAttribute?e.data:e).array,n=e.itemSize,r=e.normalized,i=e=>n===1?e:`vec${n}${e===`f32`?`f`:e===`u32`?`u`:`i`}`;if(t instanceof Float32Array)return{format:n===1?`float32`:`float32x${n}`,wgsl:i(`f32`),bytesPerComponent:4,itemSize:n};if(t instanceof Uint32Array)return{format:n===1?`uint32`:`uint32x${n}`,wgsl:i(`u32`),bytesPerComponent:4,itemSize:n};if(t instanceof Int32Array)return{format:n===1?`sint32`:`sint32x${n}`,wgsl:i(`i32`),bytesPerComponent:4,itemSize:n};let a={Uint8Array:[`uint8`,`unorm8`,1],Int8Array:[`sint8`,`snorm8`,1],Uint16Array:[`uint16`,`unorm16`,2],Int16Array:[`sint16`,`snorm16`,2]}[t.constructor.name];return a&&(n===2||n===4)&&!e.isInterleavedBufferAttribute?{format:(r?a[1]:a[0])+`x`+n,wgsl:i(r?`f32`:t instanceof Uint8Array||t instanceof Uint16Array?`u32`:`i32`),bytesPerComponent:a[2],itemSize:n}:{format:n===1?`float32`:`float32x${n}`,wgsl:i(`f32`),bytesPerComponent:4,itemSize:n,converted:!0}}var vi=class{constructor(e){this.container=e,this.renderScale=1,this.clock=new Xe,this.frame=0,this.onResize=[]}async init(){let e=document.createElement(`canvas`);e.tabIndex=0,this.container.appendChild(e),this.canvas=e,this.domElement=e,await F.init({canvas:e}),this.meshRenderer=new di,this.meshRenderer.syncPipelines=!1,this.camera=new nn(62,window.innerWidth/window.innerHeight,.06,6e4),this.scene=new xt,window.addEventListener(`resize`,()=>this.resize()),this.resize()}setRenderScale(e){this.renderScale=e,this.resize()}get width(){return this.canvas.width}get height(){return this.canvas.height}resize(){let e=window.innerWidth,t=window.innerHeight,n=this.renderScale;this.canvas.width=Math.max(1,Math.floor(e*n)),this.canvas.height=Math.max(1,Math.floor(t*n)),this.canvas.style.width=e+`px`,this.canvas.style.height=t+`px`,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),br.fields.outputResolution.value.set(this.canvas.width,this.canvas.height);for(let n of this.onResize)n(e,t)}currentTexture(){return F.context.getCurrentTexture()}start(e){let t=n=>{this.clock.update(n);let r=this.clock.getDelta();r>.1&&(r=.1),this.frame++,e(r,this.clock.getElapsed()),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}stop(){cancelAnimationFrame(this._raf)}},yi=class{constructor({label:e=`kernel`,modules:t=[],bindings:n={},code:r,workgroupSize:i=[64,1,1],defines:a={},entryPoint:o=`main`}){this.label=e,this.workgroupSize=i;let[s,c=1,l=1]=i,u=nr({modules:t,bindings:n,code:r.replace(/\bWG_X\b/g,s).replace(/\bWG_Y\b/g,c).replace(/\bWG_Z\b/g,l),defines:a,stage:`compute`,label:e});this.source=u.code,this.bindings=u.bindings,this.group0=u.group0;let d=or(u.code,e);this.handle=F.computePipeline({label:e,layout:F.device.createPipelineLayout({bindGroupLayouts:[u.group0.layout,u.bindings.layout]}),compute:{module:d,entryPoint:o}}),this.timestampWrites=null}get pipeline(){return F.ready(this.handle)}dispatch(e,{pass:t=null,indirect:n=null}={}){let[r,i=1,a=1]=Array.isArray(e)?e:[e];if(!n&&(r===0||i===0||a===0))return;let o=e=>{e.setPipeline(F.ready(this.handle)),e.setBindGroup(0,this.group0.getBindGroup()),e.setBindGroup(1,this.bindings.getBindGroup()),n?e.dispatchWorkgroupsIndirect(n.buffer.getGPU?n.buffer.getGPU():n.buffer,n.offset||0):e.dispatchWorkgroups(r,i,a)};t?o(t):F.computePass(this.label,o,this.timestampWrites||void 0)}groups(e,t=1,n=1){let[r,i=1,a=1]=this.workgroupSize;return[Math.ceil(e/r),Math.ceil(t/i),Math.ceil(n/a)]}},bi=class{constructor({byteLength:e,ring:t=3,label:n=`readback`}){this.byteLength=Math.ceil(e/4)*4,this.label=n,this.ring=[];for(let e=0;e<t;e++)this.ring.push({buffer:null,busy:!1,frame:0});this.latest=null,this.frame=-1,this.onData=null}_slot(){for(let e of this.ring)if(!e.busy)return e.buffer||=F.device.createBuffer({label:this.label,size:this.byteLength,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),e;return null}request(e,t=0){let n=this._slot();if(!n)return!1;n.busy=!0,n.frame=F.frame;let r=e.getGPU?e.getGPU():e;return F.getEncoder().copyBufferToBuffer(r,t,n.buffer,0,this.byteLength),F.onSubmit(null,()=>{n.buffer.mapAsync(GPUMapMode.READ).then(()=>{let e=n.buffer.getMappedRange().slice(0);n.buffer.unmap(),n.busy=!1,n.frame>=this.frame&&(this.latest=e,this.frame=n.frame,this.onData&&this.onData(e,n.frame))}).catch(()=>{n.busy=!1})}),!0}},xi=6360,Si=6460,Ci=.00537625,wi=256,Ti=64,Ei=32,Di=192,Oi=108,ki=Math.log(1.02),V=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`};function Ai(e,t,n){return new I({label:n,width:e,height:t,format:`rgba16float`,usage:[`sample`,`storage`]})}function ji(){return`
const ATMO_RG: f32 = ${V(xi)};
const ATMO_RT: f32 = ${V(Si)};

struct AtmosphereMedium {
	rayScat: vec3f,
	mieScat: f32,
	extinction: vec3f,
	scattering: vec3f,
};

fn atmosphereMedium( hKm: f32 ) -> AtmosphereMedium {
	let rayDensity = exp( - hKm / 8.0 );
	let mieDensity = exp( - hKm / 1.2 );
	let ozoneDensity = max( 0.0, 1.0 - abs( hKm - 25.0 ) / 15.0 );
	var m: AtmosphereMedium;
	m.rayScat = vec3f( 5.802e-3, 13.558e-3, 33.1e-3 ) * rayDensity * atmosphereParams.rayleighScale;
	m.mieScat = 3.996e-3 * mieDensity * atmosphereParams.mieScale;
	let mieExt = 4.440e-3 * mieDensity * atmosphereParams.mieScale;
	let ozoneAbs = vec3f( 0.650e-3, 1.881e-3, 0.085e-3 ) * ozoneDensity * atmosphereParams.ozoneScale;
	m.extinction = m.rayScat + mieExt + ozoneAbs;
	m.scattering = m.rayScat + m.mieScat;
	return m;
}

// (r, mu) -> transmittance LUT uv
fn atmosphereTransmittanceUV( r: f32, mu: f32 ) -> vec2f {
	let H = sqrt( ATMO_RT * ATMO_RT - ATMO_RG * ATMO_RG );
	let rho = sqrt( max( r * r - ATMO_RG * ATMO_RG, 0.0 ) );
	let disc = r * r * ( mu * mu - 1.0 ) + ATMO_RT * ATMO_RT;
	let d = max( 0.0, - r * mu + sqrt( max( disc, 0.0 ) ) );
	let dMin = ATMO_RT - r;
	let dMax = rho + H;
	let xMu = ( d - dMin ) / ( dMax - dMin );
	let xR = rho / H;
	// unit -> sub-uv
	return vec2f( ( xMu + ${V(.5/wi)} ) * ${V(wi/257)}, ( xR + ${V(.5/Ti)} ) * ${V(Ti/65)} );
}

// nearest positive ray-sphere intersection from ro (km, planet centered), -1 if none
fn atmosphereRaySphereNearest( ro: vec3f, rd: vec3f, radius: f32 ) -> f32 {
	let b = dot( ro, rd );
	let c = dot( ro, ro ) - radius * radius;
	let disc = b * b - c;
	let sq = sqrt( max( disc, 0.0 ) );
	let t0 = - b - sq;
	let t1 = - b + sq;
	return select( select( select( -1.0, t1, t1 > 0.0 ), t0, t0 > 0.0 ), -1.0, disc < 0.0 );
}
`}var Mi=class{constructor(e=null){this.renderer=e,this.transmittanceLUT=Ai(wi,Ti,`atmoTransmittance`),this.multiScatLUT=Ai(Ei,Ei,`atmoMultiScat`),this.skyViewLUT=Ai(Di,Oi,`atmoSkyView`),this.params=new L(`AtmosphereParams`,{rayleighScale:[`f32`,1],mieScale:[`f32`,1],mieG:[`f32`,.8],ozoneScale:[`f32`,1],groundAlbedo:[`vec3f`,new Se(.06,.08,.1)],viewHeight:[`f32`,6360.002],sunIlluminance:[`vec3f`,new Se(11,11,11)],pad0:[`f32`,0],sunDir:[`vec3f`,new A(.3,.6,-.7).normalize()],pad1:[`f32`,0]},{label:`atmosphere`});let t=this.params.fields;this.rayleighScale=t.rayleighScale,this.mieScale=t.mieScale,this.mieG=t.mieG,this.ozoneScale=t.ozoneScale,this.groundAlbedo=t.groundAlbedo,this.viewHeight=t.viewHeight,this.sunIlluminance=t.sunIlluminance,this.sunDir=t.sunDir,this.irrBuffer=new Tn({label:`atmoIrr`,count:4,type:`vec4f`}),this.readback=new bi({byteLength:48,label:`atmoIrrReadback`}),this.readback.onData=e=>this._onIrradiance(e),this._buildModules(),this._build(),this.needsStatic=!0,this._irrPending=!1,this._irrTimer=0,this.skyIrradiance=null,this.sunTransmittance=null,this.horizon=null,this.onIrradiance=null}_buildModules(){this.coreModule=new R({name:`atmosphereCore`,deps:[z],uniforms:this.params,uniformName:`atmosphereParams`,code:ji()}),this.transmittanceModule=new R({name:`atmosphereTransmittance`,deps:[this.coreModule],bindings:{atmosphereTransmittanceLUT:{texture:this.transmittanceLUT}},code:`
fn atmosphereSampleTransmittance( r: f32, mu: f32 ) -> vec3f {
	return textureSampleLevel( atmosphereTransmittanceLUT, smpLinearClamp, atmosphereTransmittanceUV( r, mu ), 0.0 ).rgb;
}
// Transmittance from the viewer toward direction dir (for sun disk / sun light color).
fn atmosphereTransmittanceToSpace( dir: vec3f ) -> vec3f {
	return atmosphereSampleTransmittance( atmosphereParams.viewHeight, dir.y );
}
`}),this.multiScatModule=new R({name:`atmosphereMultiScat`,deps:[this.coreModule],bindings:{atmosphereMultiScatLUT:{texture:this.multiScatLUT}},code:`
fn atmosphereSampleMultiScat( r: f32, cosSun: f32 ) -> vec3f {
	let uv = vec2f( cosSun * 0.5 + 0.5, ( r - ATMO_RG ) / ( ATMO_RT - ATMO_RG ) );
	let suv = uv * ${V(31/Ei)} + ${V(.5/Ei)};
	return textureSampleLevel( atmosphereMultiScatLUT, smpLinearClamp, suv, 0.0 ).rgb;
}
`}),this.module=new R({name:`atmosphere`,deps:[this.transmittanceModule],bindings:{atmosphereSkyViewLUT:{texture:this.skyViewLUT}},code:`
// Sky luminance (no sun disk) for world direction dir (normalized).
fn atmosphereSkyLuminance( dir: vec3f ) -> vec3f {
	let viewH = atmosphereParams.viewHeight;
	let vHorizon = sqrt( max( viewH * viewH - ATMO_RG * ATMO_RG, 0.0 ) );
	let beta = acos( vHorizon / viewH );
	let zenithHorizonAngle = PI - beta;
	let viewZenithAngle = acos( clamp( dir.y, -1.0, 1.0 ) );

	let vCoordA = ( 1.0 - sqrt( max( 1.0 - viewZenithAngle / zenithHorizonAngle, 0.0 ) ) ) * 0.5;
	let vCoordB = sqrt( max( ( viewZenithAngle - zenithHorizonAngle ) / beta, 0.0 ) ) * 0.5 + 0.5;
	let v = select( vCoordB, vCoordA, viewZenithAngle < zenithHorizonAngle );

	// azimuth relative to sun
	let sunH = normalize( vec2f( atmosphereParams.sunDir.x, atmosphereParams.sunDir.z ) + vec2f( 1e-5, 0.0 ) );
	let dirH = normalize( vec2f( dir.x, dir.z ) + vec2f( 1e-5, 0.0 ) );
	let lightViewCos = dot( sunH, dirH );
	let u = sqrt( clamp( lightViewCos * -0.5 + 0.5, 0.0, 1.0 ) );

	let suv = vec2f( u * ${V(191/Di)} + ${V(.5/Di)}, v * ${V(107/Oi)} + ${V(.5/Oi)} );
	return textureSampleLevel( atmosphereSkyViewLUT, smpLinearClamp, suv, 0.0 ).rgb;
}
`})}_build(){this.transmittanceKernel=new yi({label:`Atmosphere Transmittance`,modules:[this.coreModule],bindings:{outLUT:{storageTexture:this.transmittanceLUT}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let px = gid.xy;
	let uv = ( vec2f( px ) + 0.5 ) / vec2f( ${V(wi)}, ${V(Ti)} );
	let xMu = ( uv.x - ${V(.5/wi)} ) * ${V(wi/255)};
	let xR = ( uv.y - ${V(.5/Ti)} ) * ${V(Ti/63)};
	let H = sqrt( ATMO_RT * ATMO_RT - ATMO_RG * ATMO_RG );
	let rho = xR * H;
	let r = sqrt( rho * rho + ATMO_RG * ATMO_RG );
	let dMin = ATMO_RT - r;
	let dMax = rho + H;
	let d = dMin + xMu * ( dMax - dMin );
	let mu = clamp( select( ( H * H - rho * rho - d * d ) / ( 2.0 * r * d ), 1.0, d == 0.0 ), -1.0, 1.0 );

	let ro = vec3f( 0.0, r, 0.0 );
	let rd = vec3f( sqrt( max( 1.0 - mu * mu, 0.0 ) ), mu, 0.0 );
	let tMax = atmosphereRaySphereNearest( ro, rd, ATMO_RT );
	let steps = 40;
	let dt = tMax / f32( steps );
	var od = vec3f( 0.0 );
	for ( var i = 0; i < steps; i++ ) {
		let t = ( f32( i ) + 0.5 ) * dt;
		let p = ro + rd * t;
		let h = length( p ) - ATMO_RG;
		od += atmosphereMedium( h ).extinction * dt;
	}
	textureStore( outLUT, px, vec4f( exp( - od ), 1.0 ) );
}
`}),this.multiScatKernel=new yi({label:`Atmosphere MultiScat`,modules:[this.transmittanceModule],bindings:{outLUT:{storageTexture:this.multiScatLUT}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let px = gid.xy;
	let uv = ( ( vec2f( px ) + 0.5 ) / ${V(Ei)} - ${V(.5/Ei)} ) * ${V(Ei/31)};
	let cosSun = uv.x * 2.0 - 1.0;
	let r = ATMO_RG + clamp( uv.y, 0.001, 0.999 ) * ( ATMO_RT - ATMO_RG );
	let sunDir = normalize( vec3f( 0.0, cosSun, - sqrt( max( 1.0 - cosSun * cosSun, 0.0 ) ) ) );
	let ro = vec3f( 0.0, r, 0.0 );

	var Lsum = vec3f( 0.0 );
	var fmsSum = vec3f( 0.0 );
	const SQ = 8;
	let isoPhase = 1.0 / ( 4.0 * PI );

	for ( var i = 0; i < SQ * SQ; i++ ) {
		let ii = ( f32( i % SQ ) + 0.5 ) / f32( SQ );
		let jj = ( f32( i / SQ ) + 0.5 ) / f32( SQ );
		let theta = ii * 2.0 * PI;
		let phi = acos( 1.0 - jj * 2.0 );
		let rd = vec3f( cos( theta ) * sin( phi ), cos( phi ), sin( theta ) * sin( phi ) );

		let tBottom = atmosphereRaySphereNearest( ro, rd, ATMO_RG );
		let tTop = atmosphereRaySphereNearest( ro, rd, ATMO_RT );
		let hitGround = tBottom > 0.0;
		let tMax = select( tTop, tBottom, hitGround );
		let steps = 20;
		let dt = tMax / f32( steps );
		var throughput = vec3f( 1.0 );
		var L = vec3f( 0.0 );
		var fms = vec3f( 0.0 );

		for ( var s = 0; s < steps; s++ ) {
			let t = ( f32( s ) + 0.3 ) * dt;
			let p = ro + rd * t;
			let pr = length( p );
			let m = atmosphereMedium( pr - ATMO_RG );
			let up = p / pr;
			let cosSunP = dot( up, sunDir );
			let Tsun = atmosphereSampleTransmittance( pr, cosSunP );
			let shadowT = atmosphereRaySphereNearest( p, sunDir, ATMO_RG );
			let earthShadow = select( 1.0, 0.0, shadowT > 0.0 );
			let S = Tsun * earthShadow * m.scattering * isoPhase;
			let Tstep = exp( - m.extinction * dt );
			let ext = max( m.extinction, vec3f( 1e-6 ) );
			L += throughput * ( S - S * Tstep ) / ext;
			fms += throughput * ( m.scattering - m.scattering * Tstep ) / ext;
			throughput *= Tstep;
		}

		if ( hitGround ) {
			let p = ro + rd * tMax;
			let up = normalize( p );
			let cosS = dot( up, sunDir );
			let Tsun = atmosphereSampleTransmittance( ATMO_RG, cosS );
			L += Tsun * throughput * max( cosS, 0.0 ) * atmosphereParams.groundAlbedo / PI;
		}

		Lsum += L * ( 4.0 * PI / f32( SQ * SQ ) );
		fmsSum += fms * ( 4.0 * PI / f32( SQ * SQ ) );
	}

	let Lin = Lsum * isoPhase;
	let fmsAvg = fmsSum * isoPhase;
	let Lms = Lin / ( vec3f( 1.0 ) - fmsAvg );
	textureStore( outLUT, px, vec4f( Lms, 1.0 ) );
}
`}),this.skyViewKernel=new yi({label:`Atmosphere SkyView`,modules:[this.transmittanceModule,this.multiScatModule],bindings:{outLUT:{storageTexture:this.skyViewLUT}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let px = gid.xy;
	if ( px.x >= ${Di}u || px.y >= ${Oi}u ) { return; }
	let uv = ( vec2f( px ) + 0.5 ) / vec2f( ${V(Di)}, ${V(Oi)} );
	let u = ( uv.x - ${V(.5/Di)} ) * ${V(Di/191)};
	let v = ( uv.y - ${V(.5/Oi)} ) * ${V(Oi/107)};

	let viewH = atmosphereParams.viewHeight;
	let vHorizon = sqrt( max( viewH * viewH - ATMO_RG * ATMO_RG, 0.0 ) );
	let beta = acos( vHorizon / viewH );
	let zenithHorizonAngle = PI - beta;

	var vzA = 0.0;
	if ( v < 0.5 ) {
		var c = v * 2.0;
		c = 1.0 - c;
		c = c * c;
		c = 1.0 - c;
		vzA = zenithHorizonAngle * c;
	} else {
		var c = v * 2.0 - 1.0;
		c = c * c;
		vzA = zenithHorizonAngle + beta * c;
	}

	let cosViewZenith = cos( vzA );
	let sinViewZenith = sin( vzA );
	let cu = u * u;
	let lightViewCos = - ( cu * 2.0 - 1.0 );
	let lightViewSin = sqrt( max( 1.0 - lightViewCos * lightViewCos, 0.0 ) );

	// local frame: up = +y, sun azimuth along +x
	let sunCosZ = atmosphereParams.sunDir.y;
	let sunSinZ = sqrt( max( 1.0 - sunCosZ * sunCosZ, 0.0 ) );
	let sunDir = vec3f( sunSinZ, sunCosZ, 0.0 );
	let rd = vec3f( sinViewZenith * lightViewCos, cosViewZenith, sinViewZenith * lightViewSin );
	let ro = vec3f( 0.0, viewH, 0.0 );

	let tBottom = atmosphereRaySphereNearest( ro, rd, ATMO_RG );
	let tTop = atmosphereRaySphereNearest( ro, rd, ATMO_RT );
	let tMax = select( tTop, tBottom, tBottom > 0.0 );
	let steps = 32;
	let cosTheta = dot( rd, sunDir );
	let rayPhase = ${V(3/(16*Math.PI))} * ( cosTheta * cosTheta + 1.0 );
	let g = atmosphereParams.mieG;
	let g2 = g * g;
	// Cornette-Shanks
	let miePhase = ${V(3/(8*Math.PI))} * ( ( 1.0 - g2 ) * ( cosTheta * cosTheta + 1.0 ) )
		/ ( ( g2 + 2.0 ) * pow( max( g2 + 1.0 - g * cosTheta * 2.0, 1e-4 ), 1.5 ) );

	var throughput = vec3f( 1.0 );
	var L = vec3f( 0.0 );

	for ( var i = 0; i < steps; i++ ) {
		// quadratic step distribution
		let t0 = f32( i ) / f32( steps );
		let t1 = ( f32( i ) + 1.0 ) / f32( steps );
		let ta = t0 * t0 * tMax;
		let tb = t1 * t1 * tMax;
		let t = mix( ta, tb, 0.3 );
		let dt = tb - ta;
		let p = ro + rd * t;
		let pr = length( p );
		let m = atmosphereMedium( pr - ATMO_RG );
		let up = p / pr;
		let cosSunP = dot( up, sunDir );
		let Tsun = atmosphereSampleTransmittance( pr, cosSunP );
		let shadowT = atmosphereRaySphereNearest( p, sunDir, ATMO_RG );
		let earthShadow = select( 1.0, 0.0, shadowT > 0.0 );
		let ms = atmosphereSampleMultiScat( pr, cosSunP );
		let phaseScat = m.rayScat * rayPhase + vec3f( m.mieScat * miePhase );
		let S = Tsun * earthShadow * phaseScat + ms * m.scattering;
		let Tstep = exp( - m.extinction * dt );
		let ext = max( m.extinction, vec3f( 1e-6 ) );
		L += throughput * ( S - S * Tstep ) / ext;
		throughput *= Tstep;
	}

	textureStore( outLUT, px, vec4f( L * atmosphereParams.sunIlluminance, 1.0 ) );
}
`}),this.irradianceKernel=new yi({label:`Atmosphere Irradiance`,modules:[this.module],bindings:{irr:{storage:this.irrBuffer,access:`read_write`}},workgroupSize:[1,1,1],code:`
@compute @workgroup_size( 1 )
fn main() {
	var sum = vec3f( 0.0 );
	const N = 16;
	for ( var i = 0; i < N * N; i++ ) {
		let a = ( f32( i % N ) + 0.5 ) / f32( N );
		let b = ( f32( i / N ) + 0.5 ) / f32( N );
		// cosine-weighted hemisphere
		let r = sqrt( b );
		let phi = a * 2.0 * PI;
		let dir = vec3f( r * cos( phi ), sqrt( max( 1.0 - b, 0.0 ) ), r * sin( phi ) );
		sum += atmosphereSkyLuminance( dir );
	}
	// E = PI * mean(L) for cosine-weighted samples; store E/PI (radiance-equivalent irradiance)
	irr[ 0 ] = vec4f( sum / f32( N * N ), 1.0 );
	// sun transmittance at sea level for the current sun direction
	let Ts = atmosphereSampleTransmittance( ATMO_RG + 0.001, atmosphereParams.sunDir.y );
	irr[ 1 ] = vec4f( Ts, 1.0 );
	// horizon color (average around the horizon)
	var hs = vec3f( 0.0 );
	for ( var i = 0; i < 16; i++ ) {
		let phi = f32( i ) * ( 2.0 * PI / 16.0 );
		hs += atmosphereSkyLuminance( normalize( vec3f( cos( phi ), 0.03, sin( phi ) ) ) );
	}
	irr[ 2 ] = vec4f( hs / 16.0, 1.0 );
}
`})}update(e,t){let n=Math.max(.5,t+.5),r=n<100?Math.round(n/2)*2:Math.exp(Math.round(Math.log(n)/ki)*ki);this.viewHeight.value=xi+Math.max(.001,r/1e3);let i=!1;this.needsStatic&&(this.needsStatic=!1,i=!0,this.transmittanceKernel.dispatch([wi/8,Ti/8,1]),this.multiScatKernel.dispatch([Ei/8,Ei/8,1])),this.params._pack();let a=this.params.u32,o=this._svLast||=new Uint32Array(a.length);for(let e=0;e<a.length&&!i;e++)i=a[e]!==o[e];(i||!this._svValid)&&(o.set(a),this._svValid=!0,this.skyViewKernel.dispatch([Di/8,Math.ceil(Oi/8),1])),this._irrTimer-=e,this._irrTimer<=0&&!this._irrPending&&(this._irrTimer=.25,this.irradianceKernel.dispatch(1),this.readback.request(this.irrBuffer)&&(this._irrPending=!0))}_onIrradiance(e){let t=new Float32Array(e);this.skyIrradiance=[t[0],t[1],t[2]],this.sunTransmittance=[t[4],t[5],t[6]],this.horizon=[t[8],t[9],t[10]],this._irrPending=!1,this.onIrradiance&&this.onIrradiance(this)}invalidate(){this.needsStatic=!0,this._svValid=!1}},Ni=160,Pi=.1,Fi=new A(.3,.2,1).normalize(),Ii=.08,Li=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Ri=class{constructor(e){this.atmosphere=e,this.clouds=null,this.params=new L(`SkyParams`,{moonDir:[`vec3f`,new A(-.3,.5,.8).normalize()],sunDiskIntensity:[`f32`,1],starIntensity:[`f32`,0]},{label:`sky`}),this.sunDiskIntensity=this.params.fields.sunDiskIntensity,this.moonDir=this.params.fields.moonDir,this.starIntensity=this.params.fields.starIntensity,this._module=null,this._background=null}get module(){return this._module||=this._buildModule(),this._module}_buildModule(){let e=this.clouds,t=[z,this.atmosphere.module];e&&t.push(e.module);let n=t=>e?`let c = ${t}( dir );\n\treturn base * c.a + c.rgb;`:`return base;`;return new R({name:`sky`,deps:t,uniforms:this.params,uniformName:`skyParams`,code:`
// hash without sine (D. Hoskins): keeps full precision for large integer coordinates
fn skyHash13( p: vec3f ) -> f32 {
	var p3 = fract( p * vec3f( 0.1031, 0.1030, 0.0973 ) );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.x + p3.y ) * p3.z );
}

// Sun disk radiance along dir (already includes atmospheric transmittance).
fn skySunDisk( dir: vec3f ) -> vec3f {
	let cosA = dot( dir, atmosphereParams.sunDir ); // the real sun (frame.sunDir is the moon at night)
	let ang = acos( clamp( cosA, -1.0, 1.0 ) );
	let r = ang / ${Li(Ci)};
	let mask = smoothstep( 1.0, 0.9, r );
	let mu = sqrt( max( 1.0 - r * r, 0.0 ) );
	let limb = 1.0 - 0.6 * ( 1.0 - mu );
	let T = atmosphereTransmittanceToSpace( dir );
	// physically the disk radiance is E / solid angle (~1.6e5); clamp for fp16 targets
	return T * mask * limb * 2500.0 * skyParams.sunDiskIntensity * smoothstep( -0.02, 0.0, dir.y );
}

// Stars: one candidate per cell of a cube-face grid, jittered inside it, with a power law
// magnitude distribution (few bright stars, many faint ones), denser along the Milky Way. They
// come out after civil twilight: the brightest first, the faintest once the sky is fully dark.
fn skyStars( dir: vec3f ) -> vec3f {
	// cube face coordinates
	let a = abs( dir );
	let onX = a.x > a.y && a.x > a.z;
	let onY = a.y > a.z;
	let face = select( select( sign( dir.z ) + 8.0, sign( dir.y ) + 5.0, onY ), sign( dir.x ) + 2.0, onX );
	let uv = select( select( dir.xy / a.z, dir.xz / a.y, onY ), dir.yz / a.x, onX ) * ${Li(Ni)};
	let cell = vec3f( floor( uv ), face );
	let h = skyHash13( cell );
	let bx = dot( dir, vec3f( ${Li(Fi.x)}, ${Li(Fi.y)}, ${Li(Fi.z)} ) ) * 4.0;
	let band = exp( - bx * bx );
	// the cell holds a star with probability P (higher along the Milky Way); an independent
	// uniform u ranks its brightness: N( < m ) ~ 10^( m / 2 ), brightest about magnitude -1
	let has = h < band * 0.035 + 0.025;
	let uc = max( skyHash13( cell + 7.7 ), 2e-4 );
	let m = log2( uc ) * 0.602 + 6.5;
	// limiting magnitude: -1 when the sun is 6 deg below the horizon, 6.5 below 16 deg
	let dark = 1.0 - smoothstep( -0.28, -0.1, atmosphereParams.sunDir.y );
	let vis = smoothstep( m - 0.6, m + 0.6, dark * 7.5 - 1.0 ) * select( 0.0, 1.0, has );
	// angular distance to the star (isotropic whatever the cube face distortion), in cells
	let sp = ( floor( uv ) + vec2f( skyHash13( cell + 3.1 ), skyHash13( cell + 5.7 ) ) * 0.4 + 0.3 ) / ${Li(Ni)};
	let sdir = normalize( select( select( vec3f( sp, sign( dir.z ) ), vec3f( sp.x, sign( dir.y ), sp.y ), onY ), vec3f( sign( dir.x ), sp ), onX ) );
	let d = length( dir - sdir ) * ${Li(Ni)};
	// flux relative to a magnitude 6.5 star; bright stars look bigger (glare), not just clipped
	let flux = pow( uc, -0.8 );
	let size = log2( flux ) * 0.08 + 1.0;
	let psf = exp( d * d / ( size * size ) * ${Li(-.5/(Pi*Pi))} ) / ( size * size );
	// subtle scintillation, stronger low in the sky
	let tw = sin( frame.time * ( skyHash13( cell + 13.3 ) * 9.0 + 5.0 ) + h * 60.0 ) * mix( 0.18, 0.06, sat( dir.y * 2.0 ) ) + 1.0;
	let col = mix( vec3f( 1.0, 0.8, 0.6 ), vec3f( 0.75, 0.85, 1.0 ), skyHash13( cell + 17.0 ) ) * 0.5 + 0.5;
	let star = col * ( psf * flux * vis * tw * 0.0075 );
	// diffuse glow of the Milky Way
	let glow = vec3f( 0.55, 0.6, 0.75 ) * ( band * dark * 0.0035 );
	// atmospheric extinction toward the horizon
	return ( star + glow ) * skyParams.starIntensity * smoothstep( 0.0, 0.2, dir.y );
}

fn skyMoon( dir: vec3f ) -> vec3f {
	let cosA = dot( dir, skyParams.moonDir );
	let ang = acos( clamp( cosA, -1.0, 1.0 ) );
	let r = ang / 0.0048;
	let mask = smoothstep( 1.0, 0.92, r );
	return vec3f( 0.9, 0.92, 1.0 ) * mask * 3.0 * skyParams.starIntensity * smoothstep( -0.02, 0.02, dir.y );
}

// Faint blue-grey moonlit sky (a little brighter toward the horizon) and the moon's aureole.
// Physically dim: about the level of the app's night ambient light.
fn skyMoonSky( dir: vec3f ) -> vec3f {
	let cosA = dot( dir, skyParams.moonDir );
	let ang = acos( clamp( cosA, -1.0, 1.0 ) );
	let aureole = exp( ang * -14.0 ) * 2.4 + exp( ang * -2.5 ) * 0.9;
	let grad = mix( 1.7, 1.0, sat( dir.y * 3.0 ) );
	let up = smoothstep( -0.05, 0.15, skyParams.moonDir.y );
	return vec3f( 0.005, 0.0068, 0.0105 ) * ( grad + aureole ) * frame.night * up;
}

// Everything behind the clouds except the sun and moon disks. The night terms are only
// evaluated at night (uniform branch).
fn skyBackground( dir: vec3f, starK: f32 ) -> vec3f {
	var L = atmosphereSkyLuminance( dir );
	if ( skyParams.starIntensity > 0.001 ) {
		L += skyMoonSky( dir ) + skyStars( dir ) * starK;
	}
	return L;
}

// Full sky radiance for a direction (no clouds).
fn skyRadiance( dir: vec3f, withSun: bool ) -> vec3f {
	var L = skyBackground( dir, 1.0 ) + skyMoon( dir );
	if ( withSun ) { L += skySunDisk( dir ); }
	return L;
}

// Sky with clouds composited (low resolution cloud panorama). withSun = false (environment
// map): no sun or moon disk, the key light is lit directly.
fn skyRadianceWithClouds( dir: vec3f, withSun: bool ) -> vec3f {
	var base: vec3f;
	if ( withSun ) { base = skyBackground( dir, 1.0 ) + skyMoon( dir ) + skySunDisk( dir ); }
	else { base = skyBackground( dir, ${Li(Ii)} ); }
	${n(`cloudsSample`)}
}

// Water reflections: no moon disk (the water's specular lobe reflects the key light) and only a
// trace of the stars, which rough water would spread into flickering sparkles.
fn skyReflectionRadiance( dir: vec3f ) -> vec3f {
	let base = skyBackground( dir, ${Li(Ii)} );
	${n(`cloudsSample`)}
}

// Main view background: full resolution clouds for the camera's view (the sun's disc behind them
// with cloudsSunTransmittance: no sun through the cut-off remainder of thick cloud)
fn skyViewRadiance( dir: vec3f ) -> vec3f {
	let base = skyBackground( dir, 1.0 ) + skyMoon( dir );
	let sun = skySunDisk( dir );
	${e?`let c = cloudsSampleView( dir );
	return base * c.a + sun * cloudsSunTransmittance( c.a ) + c.rgb;`:`return base + sun;`}
}
`})}get background(){if(!this._background){let e=new Vr({label:`sky background`,modules:[this.module],colorFormats:Jr,depthFormat:Yr,depthCompare:`equal`,depthWrite:!1,depth:0,code:`
struct SkyOut {
	@location( 0 ) color: vec4f,
	@location( 1 ) velocity: vec4f,
	@location( 2 ) mask: vec4f,
};
@fragment fn fs( in: FSIn ) -> SkyOut {
	let uv = in.pos.xy * frame.invResolution;
	let dir = viewRay( uv );
	var o: SkyOut;
	o.color = vec4f( skyViewRadiance( dir ), 1.0 );
	// a direction at infinity: only the camera rotation moves it
	let c = frame.viewProjNoJitter * vec4f( dir, 0.0 );
	let p = frame.prevViewProjNoJitter * vec4f( dir, 0.0 );
	let cur = c.xy / max( abs( c.w ), 1e-6 ) * sign( c.w );
	let prev = p.xy / max( abs( p.w ), 1e-6 ) * sign( p.w );
	o.velocity = vec4f( select( vec2f( 0.0 ), ( cur - prev ) * vec2f( 0.5, -0.5 ), c.w > 1e-6 && p.w > 1e-6 ), 0.0, 1.0 );
	o.mask = vec4f( 0.0 );
	return o;
}
`});this._background={pass:e,draw:t=>e.draw(t)}}return this._background}backgroundNode(){return this.background}};function zi(e,t=24,n=6,r=new A){let i=T.degToRad(t),a=T.degToRad(n),o=T.degToRad((e-12)*15),s=-Math.cos(a)*Math.sin(o),c=Math.cos(i)*Math.sin(a)-Math.sin(i)*Math.cos(a)*Math.cos(o),l=Math.sin(i)*Math.sin(a)+Math.cos(i)*Math.cos(a)*Math.cos(o);return r.set(s,l,-c).normalize()}var Bi=new Map,Vi=null;function Hi(e){let t=Bi.get(e);return t||(Vi||=F.device.createShaderModule({label:`mipmap`,code:`
		struct VSOut { @builtin( position ) pos: vec4f, @location( 0 ) uv: vec2f };
		@vertex fn vs( @builtin( vertex_index ) i: u32 ) -> VSOut {
			let p = vec2f( f32( ( i << 1u ) & 2u ), f32( i & 2u ) );
			var o: VSOut;
			o.pos = vec4f( p * 2.0 - 1.0, 0.0, 1.0 );
			o.uv = vec2f( p.x, 1.0 - p.y );
			return o;
		}
		@group( 0 ) @binding( 0 ) var src: texture_2d<f32>;
		@group( 0 ) @binding( 1 ) var smp: sampler;
		@fragment fn fs( in: VSOut ) -> @location( 0 ) vec4f {
			return textureSampleLevel( src, smp, in.uv, 0.0 );
		}
	`}),t=F.device.createRenderPipeline({label:`mipmap `+e,layout:`auto`,vertex:{module:Vi,entryPoint:`vs`},fragment:{module:Vi,entryPoint:`fs`,targets:[{format:e}]},primitive:{topology:`triangle-list`}}),Bi.set(e,t),t)}var Ui=new WeakMap;function Wi(e,t,n){let r=Ui.get(e);if(r&&r.gpu===t)return r;let i=e.mipLevelCount,a=e.dimension===`3d`?1:e.depth,o=[],s=n.getBindGroupLayout(0);for(let n=0;n<a;n++)for(let r=1;r<i;r++){let i=t.createView({dimension:`2d`,baseMipLevel:r-1,mipLevelCount:1,baseArrayLayer:n,arrayLayerCount:1}),a=t.createView({dimension:`2d`,baseMipLevel:r,mipLevelCount:1,baseArrayLayer:n,arrayLayerCount:1}),c=F.device.createBindGroup({label:`mipmap `+e.label,layout:s,entries:[{binding:0,resource:i},{binding:1,resource:F.samplers.linearClamp}]});o.push({bg:c,desc:{label:`mipmap`,colorAttachments:[{view:a,loadOp:`clear`,storeOp:`store`,clearValue:[0,0,0,0]}]}})}return r={gpu:t,pipeline:n,steps:o},Ui.set(e,r),r}function Gi(e,t=F.getEncoder()){if(e.mipLevelCount<2)return;let n=e.getGPU(),r=Hi(e.format),{steps:i}=Wi(e,n,r);for(let e=0;e<i.length;e++){let n=t.beginRenderPass(i[e].desc);n.setPipeline(r),n.setBindGroup(0,i[e].bg),n.draw(3),n.end()}}var Ki=Math.PI,qi=636e4,Ji=32768,Yi=512,Xi=256,Zi=16,Qi=24,$i=128,ea=2048,ta=.12,na=15,ra=2500,ia=9e3,aa=64,oa=1e3,sa=.48,ca=oa/4,la=3.7,ua=ca/la,da=1024,fa=320,pa=256,ma=409600,ha=1024,ga=4e4,_a=256,va=3e4,ya=2.6,ba=[0,10,2,8,5,15,7,13,1,11,3,9,4,14,6,12],xa=4,Sa=.75,H=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Ca=`
fn clMod( x: f32, y: f32 ) -> f32 { return x - y * floor( x / y ); }
fn clMod2( x: vec2f, y: vec2f ) -> vec2f { return x - y * floor( x / y ); }
fn clMod3( x: vec3f, y: f32 ) -> vec3f { return x - y * floor( x / y ); }
fn clHash3( p: vec3f ) -> f32 { return fract( sin( dot( p, vec3f( 127.1, 311.7, 74.7 ) ) ) * 43758.5453 ); }
fn clHash2( p: vec2f ) -> f32 { return fract( sin( dot( p, vec2f( 127.1, 311.7 ) ) ) * 43758.5453 ); }

// tileable 3D worley (F1) with cells cells per unit
fn clWorley3( p: vec3f, cells: f32 ) -> f32 {
	let q = p * cells;
	let ip = floor( q );
	let fp = fract( q );
	var d = 1e3;
	for ( var z = -1; z <= 1; z++ ) { for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let o = vec3f( f32( x ), f32( y ), f32( z ) );
		let cell = clMod3( ip + o, cells );
		let h = vec3f( clHash3( cell ), clHash3( cell + 19.7 ), clHash3( cell + 41.3 ) );
		d = min( d, length( o + h - fp ) );
	} } }
	return d;
}

// tileable 3D gradient (perlin) noise, about -1..1
fn clGrad3( i: vec3f, f: vec3f, o: vec3f, cells: f32 ) -> f32 {
	let c = clMod3( i + o, cells );
	let gv = vec3f( clHash3( c ), clHash3( c + 13.1 ), clHash3( c + 27.7 ) ) * 2.0 - 1.0;
	return dot( gv, f - o );
}
fn clGnoise( p: vec3f, cells: f32 ) -> f32 {
	let q = p * cells;
	let i = floor( q );
	let f = fract( q );
	let u = f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // (sic: the original's fade, f^2 not f^3)
	let x00 = mix( clGrad3( i, f, vec3f( 0.0, 0.0, 0.0 ), cells ), clGrad3( i, f, vec3f( 1.0, 0.0, 0.0 ), cells ), u.x );
	let x10 = mix( clGrad3( i, f, vec3f( 0.0, 1.0, 0.0 ), cells ), clGrad3( i, f, vec3f( 1.0, 1.0, 0.0 ), cells ), u.x );
	let x01 = mix( clGrad3( i, f, vec3f( 0.0, 0.0, 1.0 ), cells ), clGrad3( i, f, vec3f( 1.0, 0.0, 1.0 ), cells ), u.x );
	let x11 = mix( clGrad3( i, f, vec3f( 0.0, 1.0, 1.0 ), cells ), clGrad3( i, f, vec3f( 1.0, 1.0, 1.0 ), cells ), u.x );
	return mix( mix( x00, x10, u.y ), mix( x01, x11, u.y ), u.z );
}

// billows: inverted worley fbm (1 at the feature points)
fn clBillows( p: vec3f, c: f32 ) -> f32 { return 1.0 - ( clWorley3( p, c ) * 0.625 + clWorley3( p, c * 2.0 ) * 0.25 + clWorley3( p, c * 4.0 ) * 0.125 ); }
fn clPerlinFbm( p: vec3f, c: f32 ) -> f32 { return clGnoise( p, c ) * 0.5 + clGnoise( p, c * 2.0 ) * 0.25 + clGnoise( p, c * 4.0 ) * 0.125; }

fn clVh( i: vec2f, o: vec2f, cells: vec2f ) -> f32 { return clHash2( clMod2( i + o, cells ) ); }
fn clVnoise2( p: vec2f, cells: vec2f ) -> f32 {
	let q = p * cells;
	let i = floor( q );
	let f = fract( q );
	let u = f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // (sic: the original's fade, f^2 not f^3)
	return mix( mix( clVh( i, vec2f( 0.0, 0.0 ), cells ), clVh( i, vec2f( 1.0, 0.0 ), cells ), u.x ),
		mix( clVh( i, vec2f( 0.0, 1.0 ), cells ), clVh( i, vec2f( 1.0, 1.0 ), cells ), u.x ), u.y );
}

fn clGh( i: vec2f, f: vec2f, o: vec2f, cells: vec2f ) -> f32 {
	let c = clMod2( i + o, cells );
	let a = clHash2( c ) * ${H(2*Ki)};
	return dot( vec2f( cos( a ), sin( a ) ), f - o );
}
fn clGnoise2( p: vec2f, cells: vec2f ) -> f32 {
	let q = p * cells;
	let i = floor( q );
	let f = fract( q );
	let u = f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // (sic: the original's fade, f^2 not f^3)
	return mix( mix( clGh( i, f, vec2f( 0.0, 0.0 ), cells ), clGh( i, f, vec2f( 1.0, 0.0 ), cells ), u.x ),
		mix( clGh( i, f, vec2f( 0.0, 1.0 ), cells ), clGh( i, f, vec2f( 1.0, 1.0 ), cells ), u.x ), u.y );
}
// gradient noise fbm remapped to about 0..1 (smoother than value noise, no grid artefacts)
fn clGfbm( p: vec2f, cells: vec2f, seed: f32 ) -> f32 {
	return ( clGnoise2( p + seed, cells ) * 0.55 + clGnoise2( p + seed * 1.7, cells * 2.0 ) * 0.3 + clGnoise2( p + seed * 2.3, cells * 4.0 ) * 0.15 ) * 1.6 + 0.5;
}
`;function wa(e){let t=Math.cos(e),n=Math.sin(e),r=e+.6;return`
const CL_EARTH_R: f32 = ${H(qi)};
const CL_TILE: f32 = ${H(Ji)};
const CL_D_MEAN: f32 = ${H(sa)};
const CL_EDGE: f32 = ${H(na)};
const CL_AP_DIST: f32 = ${H(va)};
const CL_MS: f32 = ${H(ya)};
// weather map lookups are rotated so cloud streets line up with the (initial) wind
const CL_C: f32 = ${H(t)};
const CL_S: f32 = ${H(n)};
// frame of the upper wind (veered from the trades)
const CL_HC: f32 = ${H(Math.cos(r))};
const CL_HS: f32 = ${H(Math.sin(r))};

// top of a cloud column (fraction of the layer) from the cell profile (0..1), the cell's top and
// the turret noise: broad rounded domes, uneven
fn clSmallTop( cs: f32, top: f32, lump: f32 ) -> f32 { return top * pow( cs, 0.42 ) * ( lump * 0.8 + 0.65 ); }
fn clBigTop( cb: f32, lump: f32 ) -> f32 { return pow( cb, 0.6 ) * ( lump * 0.35 + 0.7 ); }
fn clCreaseOf( x: f32 ) -> f32 { return smoothstep( 0.42, 0.64, x ); }
// erosion grows with the height in the cloud: flat, dense bases, billowy tops; the undersides use the
// inverted field (wisps instead of lumps)
fn clErosionAmount( b: vec4f ) -> f32 { return mix( 0.25, 1.0, smoothstep( 0.05, 0.6, b.y ) ); }
fn clErosionField( F: f32, b: vec4f ) -> f32 { return mix( 1.0 - F, F, smoothstep( 0.0, 0.08, b.y ) ); }
// erosion only eats the outer shell of the base shape (Nubis remap): the dense core keeps no holes
fn clEroded( b: vec4f, crease: f32 ) -> f32 { return sat( ( b.x - crease * clErosionAmount( b ) * sat( 1.0 - b.x * 0.9 ) - 0.012 ) * CL_EDGE ); }
// density with every detail octave at its mean (reflections, shadows, deep light samples): the same
// cloud as the detailed one, seen through a coarse filter
fn clMeanCrease( b: vec4f ) -> f32 { return clCreaseOf( clErosionField( CL_D_MEAN, b ) ); }
fn clMeanDensity( b: vec4f ) -> f32 { return clEroded( b, clMeanCrease( b ) ); }
// layer a (in-scattered radiance, transmittance) in front of layer b
fn clOver( a: vec4f, b: vec4f ) -> vec4f { return vec4f( a.rgb + b.rgb * a.a, a.a * b.a ); }
// Henyey-Greenstein phase
fn clPhaseHG( c: f32, g: f32 ) -> f32 { return ( ( 1.0 - g * g ) / ( 4.0 * PI ) ) / pow( max( 1.0 + g * g - c * 2.0 * g, 1e-4 ), 1.5 ); }

// distance along rd from a point at height camY (on the planet axis) to the sphere at altitude H
// (camera below it). Stable form: |oc|^2 - R^2 = (camY - H)(2Re + camY + H)
fn cloudsShell( camY: f32, rd: vec3f, H: f32 ) -> f32 {
	let b = rd.y * ( camY + CL_EARTH_R );
	let cc = ( camY - H ) * ( camY + H + 2.0 * CL_EARTH_R );
	let disc = b * b - cc;
	return - b + sqrt( max( disc, 0.0 ) );
}

// camera frame projection: direction -> uv (y down) of a camera given by its basis and frustum tangents
fn cloudsProject( d: vec3f, right: vec3f, up: vec3f, fwd: vec3f, tanv: vec2f ) -> vec2f {
	let z = max( dot( d, fwd ), 1e-4 );
	let ndc = vec2f( dot( d, right ), dot( d, up ) ) / ( tanv * z );
	return vec2f( ndc.x * 0.5 + 0.5, 0.5 - ndc.y * 0.5 );
}
`}function Ta(e,t){return`
fn ${e}( uv: vec2f, size: vec2f ) -> vec4f {
	let sp = uv * size;
	let tp1 = floor( sp - 0.5 ) + 0.5;
	let f = sp - tp1;
	let w0 = f * ( f * ( f * -0.5 + 1.0 ) - 0.5 );
	let w1 = f * f * ( f * 1.5 - 2.5 ) + 1.0;
	let w2 = f * ( f * ( f * -1.5 + 2.0 ) + 0.5 );
	let w3 = f * f * ( f * 0.5 - 0.5 );
	let w12 = w1 + w2;
	let tc0 = ( tp1 - 1.0 ) / size;
	let tc3 = ( tp1 + 2.0 ) / size;
	let tc12 = ( tp1 + w2 / w12 ) / size;
	let a = w12.x * w0.y; let b = w0.x * w12.y; let cc = w12.x * w12.y; let d = w3.x * w12.y; let e = w12.x * w3.y;
	let sum = textureSampleLevel( ${t}, smpLinearClamp, vec2f( tc12.x, tc0.y ), 0.0 ) * a
		+ textureSampleLevel( ${t}, smpLinearClamp, vec2f( tc0.x, tc12.y ), 0.0 ) * b
		+ textureSampleLevel( ${t}, smpLinearClamp, vec2f( tc12.x, tc12.y ), 0.0 ) * cc
		+ textureSampleLevel( ${t}, smpLinearClamp, vec2f( tc3.x, tc12.y ), 0.0 ) * d
		+ textureSampleLevel( ${t}, smpLinearClamp, vec2f( tc12.x, tc3.y ), 0.0 ) * e;
	return sum / ( a + b + cc + d + e );
}
`}var Ea=class{constructor(e,t){this.renderer=e,this.atmosphere=t;let n=new E().copy(B.windDir.value).normalize().multiplyScalar(12);this.params=new L(`CloudsParams`,{coverage:[`f32`,.45],densityScale:[`f32`,.07],bottom:[`f32`,750],top:[`f32`,2400],wind:[`vec2f`,n],offset:[`vec2f`,new E],shadowCenter:[`vec2f`,new E],shadowSize:[`f32`,8e3],shadowStrength:[`f32`,.85],cirrus:[`f32`,.5],cirrusAlt:[`f32`,9e3],camY:[`f32`,1],horizonY:[`f32`,-.001],nOrigin:[`vec2f`,new E],wOrigin:[`vec2f`,new E],camXZ:[`vec2f`,new E],hOffset:[`vec2f`,new E],windN:[`vec2f`,new E(1,0)],viewSize:[`vec2f`,new E(4,4)],traceSize:[`vec2f`,new E(1,1)],displayH:[`f32`,4],viewValid:[`f32`,0],sdfCoverage:[`f32`,0],shadowPhase:[`f32`,0],panoSlot:[`vec2f`,new E],camRight:[`vec3f`,new A(1,0,0)],camUp:[`vec3f`,new A(0,1,0)],camFwd:[`vec3f`,new A(0,0,-1)],camTan:[`vec2f`,new E(1,1)],viewRight:[`vec3f`,new A(1,0,0)],viewUp:[`vec3f`,new A(0,1,0)],viewFwd:[`vec3f`,new A(0,0,-1)],viewTan:[`vec2f`,new E(1,1)]},{label:`clouds`});let r=this.params.fields;this.coverage=r.coverage,this.densityScale=r.densityScale,this.bottom=r.bottom,this.top=r.top,this.wind=r.wind,this.offset=r.offset,this.shadowCenter=r.shadowCenter,this.shadowSize=r.shadowSize,this.shadowStrength=r.shadowStrength,this.cirrus=r.cirrus,this.cirrusAlt=r.cirrusAlt,this.camY=r.camY,this.nOrigin=r.nOrigin,this.wOrigin=r.wOrigin,this.camXZ=r.camXZ,this.hOffset=r.hOffset,this.horizonY=r.horizonY,this.windN=r.windN,this.viewSize=r.viewSize,this.displayH=r.displayH,this.traceSize=r.traceSize,this.viewValid=r.viewValid,this.sdfCoverage=r.sdfCoverage,this.shadowPhase=r.shadowPhase,this.panoSlot=r.panoSlot,this.cam={right:r.camRight,up:r.camUp,fwd:r.camFwd,tan:r.camTan},this.viewCam={right:r.viewRight,up:r.viewUp,fwd:r.viewFwd,tan:r.viewTan},this.prev={right:{value:new A(1,0,0)},up:{value:new A(0,1,0)},fwd:{value:new A(0,0,-1)},tan:{value:new E(1,1)}},this.camDelta={value:new A},this.camDeltaHi={value:new A},this.historyValid={value:0},this.minAlpha={value:.12},this.rebuildK={value:-1},this.slot={value:new E},this.subPixel={value:new E},this.frameNoise={value:0};let i=this.wind.value;this._rot=Math.atan2(i.y,i.x),this._offsetW=new E,this._offsetH=new E,this._makeNoise(),this._makeTargets(),this._buildModules(),this._buildKernels(),this._generateNoise(),this.frame=0,this.panoWarm=1,this.resolutionScale=1,this.outputSize=null,this._prevCam=new A,this._prevSun=new A,this._hasPrev=!1,this._rebuild=0,this._since=0,this._traces=0,this._pp=0,this._traceIndex=0}_makeNoise(){let e=(e,t)=>new I({label:t,width:e,height:e,depth:e,dimension:`3d`,format:`rgba8unorm`,usage:[`sample`,`storage`]});this.shapeTex=e($i,`cloudShape`),this.detailTex=e(aa,`cloudDetail`),this.weatherTex=new I({label:`cloudWeather`,width:Yi,height:Yi,format:`rgba8unorm`,usage:[`sample`,`storage`]}),this.synTex=new I({label:`cloudSynoptic`,width:pa,height:pa,format:`rgba8unorm`,usage:[`sample`,`storage`]}),this.fibTex=new I({label:`cloudFibres`,width:ha,height:ha,format:`rgba8unorm`,mips:!0,usage:[`sample`,`storage`,`render`]}),this.auxTex=new I({label:`cloudFibreFlow`,width:ha,height:ha,format:`rgba16float`,usage:[`sample`,`storage`]})}_generateNoise(){let e=this._noiseKernels;e.syn.dispatch([pa/8,pa/8,1]),e.aux.dispatch([ha/8,ha/8,1]),e.fib.dispatch([ha/8,ha/8,1]),Gi(this.fibTex),e.shape.dispatch([$i/4,$i/4,$i/4]),e.detail.dispatch([aa/4,aa/4,aa/4]),e.weather.dispatch([Yi/8,Yi/8,1])}_makeTargets(){let e=(e,t,n)=>new I({label:n,width:e,height:t,format:`rgba16float`,usage:[`sample`,`storage`,`copySrc`]});this.panorama=e(da,fa,`cloudPanorama`),this.shadowMap=e(_a,_a,`cloudShadow`);let t=e=>new I({label:e,width:Xi,height:Xi,depth:Zi,dimension:`3d`,format:`rgba8unorm`,usage:[`sample`,`storage`]});this.sdfA=t(`cloudSdfA`),this.sdfB=t(`cloudSdfB`),this.sdfTex=t(`cloudSdf`),this.traceTex=e(1,1,`cloudTrace`),this.traceDepth=e(1,1,`cloudTraceDepth`),this.highTrace=e(1,1,`cloudHighTrace`),this.motionTex=e(1,1,`cloudMotion`),this.boxMin=e(1,1,`cloudBoxMin`),this.boxMax=e(1,1,`cloudBoxMax`),this.history=[e(4,4,`cloudViewA`),e(4,4,`cloudViewB`)],this.viewTex=this.history[0],this._w=0,this._h=0}_buildModules(){let e=this.atmosphere,t=new R({name:`cloudsHelpers`,deps:[z],code:wa(this._rot)});this.helpersModule=t,this.coreModule=new R({name:`cloudsCore`,deps:[z,e.module,t],uniforms:this.params,uniformName:`cloudsParams`,bindings:{cloudsWeatherTex:{texture:this.weatherTex},cloudsShapeTex:{texture:this.shapeTex},cloudsDetailTex:{texture:this.detailTex},cloudsSdfTex:{texture:this.sdfTex},cloudsSynTex:{texture:this.synTex},cloudsFibTex:{texture:this.fibTex}},code:`
// weather space (rotated so cloud streets follow the wind) uv of a camera relative position
fn cloudsWeatherUV( pxz: vec2f ) -> vec2f {
	return ( vec2f( pxz.x * CL_C + pxz.y * CL_S, pxz.y * CL_C - pxz.x * CL_S ) + cloudsParams.wOrigin ) / CL_TILE;
}

// x: cell profile (after the coverage control), y: top of this column (fraction of the layer).
// pxz: camera relative; big cells and towers are only allowed far from the island (origin)
fn cloudsWeather( pxz: vec2f ) -> vec2f {
	let w = textureSampleLevel( cloudsWeatherTex, smpLinearRepeat, cloudsWeatherUV( pxz ), 0.0 );
	let thr = 1.0 - cloudsParams.coverage * 1.3;
	let far = smoothstep( ${H(ra)}, ${H(ia)}, length( pxz + cloudsParams.camXZ ) );
	// cells too weak to hold more than a scrap of cloud are dropped (no scattered specks)
	let cs = sat( ( ( w.x - thr ) / max( 1.0 - thr, 0.05 ) - 0.08 ) * 1.09 );
	let cb = sat( ( ( w.w * far - thr ) / max( 1.0 - thr, 0.05 ) - 0.08 ) * 1.09 );
	return vec2f( max( cs, cb ), max( clSmallTop( cs, w.y, w.z ), clBigTop( cb, w.z ) ) );
}

// distance (m) that is certainly free of cloud around p (0 near clouds). Nearest lookup of the distance
// field: x / y repeat (the field tiles), z clamped to the layer
fn cloudsSkip( p: vec3f ) -> f32 {
	let alt = p.y + ( p.x * p.x + p.z * p.z ) / ${H(2*qi)};
	let H = cloudsParams.top - cloudsParams.bottom;
	let uvw = vec3f( fract( cloudsWeatherUV( p.xz ) ), sat( ( alt - cloudsParams.bottom ) / H ) );
	let ix = vec3i( min( vec3f( floor( uvw * vec3f( ${H(Xi)}, ${H(Xi)}, ${H(Zi)} ) ) ), vec3f( ${H(255)}, ${H(255)}, ${H(15)} ) ) );
	let d = textureLoad( cloudsSdfTex, ix, 0 ).x * 255.0;
	return max( d - 1.0, 0.0 ) * min( H / ${H(Zi)}, ${H(Ji/Xi)} );
}

// base shape. p: camera relative (sheared) position, w: weather
// returns vec4( raw shape value, height inside the cloud 0..1, swirl xy ); density = ramp( x )
fn cloudsBase( p: vec3f, w: vec2f ) -> vec4f {
	let alt = p.y + ( p.x * p.x + p.z * p.z ) / ${H(2*qi)};
	let hL = ( alt - cloudsParams.bottom ) / ( cloudsParams.top - cloudsParams.bottom );
	let np = p.xz + cloudsParams.nOrigin;
	let n = textureSampleLevel( cloudsShapeTex, smpLinearRepeat, vec3f( np.x, alt * 1.4, np.y ) / ${H(ea)}, 0.0 );
	// flat, slightly uneven base, the column's (domed) top, edges from the cell profile (steep,
	// so the shape noise can't break fragments off the rim)
	let hb = n.y * 0.025;
	// columns whose top stays very low hold no cloud: the saddles between overlapping weak cells
	// along a street made long, thin, flat ribbons, and the thin rims of each dome made it a flat
	// pancake. Without them the cells stay separate and their sides rise steeply.
	let Ce = sat( ( w.y - hL ) * 3.5 ) * smoothstep( 0.0, 0.45, w.x ) * smoothstep( hb, hb + 0.012, hL ) * smoothstep( 0.1, 0.2, w.y );
	// the shape noise carves the boundary. x is the raw shape value (density before the ramp,
	// negative outside): the detail erodes it in the same units, and the coarse search uses it
	// to slow down near a cloud
	return vec4f( n.x + Ce - 1.0, sat( hL / max( w.y, 0.05 ) ), n.y, n.z );
}

// three detail octaves per fetch; s: size (m) of the coarsest features
fn cloudsOctaves( uvw: vec3f, s: f32, foot: f32 ) -> f32 {
	let d = textureSampleLevel( cloudsDetailTex, smpLinearRepeat, uvw, 0.0 ).xyz;
	let w = vec3f( smoothstep( s * 0.24, s * 0.09, foot ), smoothstep( s * 0.12, s * 0.045, foot ), smoothstep( s * 0.06, s * 0.0225, foot ) );
	return dot( mix( vec3f( CL_D_MEAN ), d, w ), vec3f( 0.56, 0.32, 0.12 ) );
}

// full density with detail erosion. b: result of cloudsBase, foot: pixel footprint (m) that filters the
// octaves. Returns vec2( density, lump ) (1 on a lump, 0 in a crease: shades the crevices)
fn cloudsErode( p: vec3f, b: vec4f, foot: f32 ) -> vec2f {
	let alt = p.y + ( p.x * p.x + p.z * p.z ) / ${H(2*qi)};
	let np = p.xz + cloudsParams.nOrigin;
	// low frequency swirl of the detail lookup
	let sw = ( b.zw - 0.5 ) * ( 0.3 * ( 1.0 - b.y * 0.6 ) );
	let dp = vec3f( np.x, alt, np.y ) / ${H(oa)} + vec3f( sw.x, 0.0, sw.y ) + vec3f( frame.time * 0.0015, 0.0, 0.0 );
	var f1 = CL_D_MEAN;
	var f2 = CL_D_MEAN;
	if ( foot < ${H(ca*.24)} ) {
		f1 = cloudsOctaves( dp, ${H(ca)}, foot );
		// close range: a finer fetch (lumps down to ~3 m) keeps near clouds crisp
		if ( foot < ${H(ua*.24)} ) {
			f2 = cloudsOctaves( dp * ${H(la)} + 0.37, ${H(ua)}, foot );
		}
	}
	let crease = clCreaseOf( clErosionField( f1 * 0.78 + f2 * 0.22, b ) );
	// the creases are eaten: round lumps (cauliflower) on the upper parts, wisps underneath
	return vec2f( clEroded( b, crease ), 1.0 - crease );
}

// the cloud field leans downwind with height (wind shear)
fn cloudsSheared( p: vec3f ) -> vec3f {
	let lean = max( p.y - cloudsParams.bottom, 0.0 ) * ${H(ta)};
	return vec3f( p.x - cloudsParams.windN.x * lean, p.y, p.z - cloudsParams.windN.y * lean );
}

// Key light of the clouds: the sun while it is the app's key light (seen from cloud altitude,
// so it keeps lighting the clouds a little after it has set at sea level), else the moon.
// E: illuminance before the earth shadow.
struct CloudsLight { dir: vec3f, E: vec3f, isMoon: bool };
fn cloudsKeyLight( altKm: f32 ) -> CloudsLight {
	var l: CloudsLight;
	l.isMoon = dot( frame.sunDir, atmosphereParams.sunDir ) < 0.9999;
	let sunE = atmosphereSampleTransmittance( 6360.0 + altKm, frame.sunDir.y ) * atmosphereParams.sunIlluminance;
	l.dir = frame.sunDir;
	l.E = select( sunE, frame.sunColor, l.isMoon );
	return l;
}

// earth shadow on a point at altitude alt (m) and horizontal offset pxz (m) from the camera: the
// light is below its horizon once mu < -sqrt( 2 alt / R ) (the local vertical tilts with distance)
fn cloudsEarthShadow( light: CloudsLight, alt: f32, pxz: vec2f ) -> f32 {
	let mu = light.dir.y + dot( light.dir.xz, pxz ) / CL_EARTH_R;
	let lit = smoothstep( -0.006, 0.006, mu + sqrt( max( alt, 0.0 ) * ${H(2/qi)} ) );
	return select( lit, 1.0, light.isMoon );
}

// cubic B-spline filtered texture lookup in 4 bilinear taps (GPU Gems 2, ch. 20): magnified cirrus fibres
// stay smooth instead of showing the bilinear texel grid (res: texels at mip 0)
fn cloudsBspline( uv: vec2f, lod: f32 ) -> vec4f {
	let size = ${H(ha)} / exp2( lod );
	let st = uv * size - 0.5;
	let i = floor( st );
	let fr = st - i;
	let f2 = fr * fr; let f3 = f2 * fr;
	let w0 = ( - f3 + f2 * 3.0 - fr * 3.0 + 1.0 ) / 6.0;
	let w1 = ( f3 * 3.0 - f2 * 6.0 + 4.0 ) / 6.0;
	let w3 = f3 / 6.0;
	let w2 = 1.0 - w0 - w1 - w3;
	let g0 = w0 + w1; let g1 = w2 + w3;
	let p0 = ( i - 0.5 + w1 / g0 ) / size; let p1 = ( i + 1.5 + w3 / g1 ) / size;
	return textureSampleLevel( cloudsFibTex, smpLinearRepeat, vec2f( p0.x, p0.y ), lod ) * ( g0.x * g0.y )
		+ textureSampleLevel( cloudsFibTex, smpLinearRepeat, vec2f( p1.x, p0.y ), lod ) * ( g1.x * g0.y )
		+ textureSampleLevel( cloudsFibTex, smpLinearRepeat, vec2f( p0.x, p1.y ), lod ) * ( g0.x * g1.y )
		+ textureSampleLevel( cloudsFibTex, smpLinearRepeat, vec2f( p1.x, p1.y ), lod ) * ( g1.x * g1.y );
}

fn cloudsToWind( v: vec2f ) -> vec2f { return vec2f( v.x * CL_HC + v.y * CL_HS, v.y * CL_HC - v.x * CL_HS ); }

// anisotropic filtering: n taps along the long axis of the footprint at the mip of its short axis
fn cloudsFibres( q: vec2f, fA: vec2f, fB: vec2f, tile: f32, rot: f32 ) -> vec4f {
	let cr = cos( rot ); let sr = sin( rot );
	let wq = cloudsToWind( q ); let wa = cloudsToWind( fA ); let wb = cloudsToWind( fB );
	let uv = vec2f( wq.x * cr + wq.y * sr, wq.y * cr - wq.x * sr ) / tile;
	let a = vec2f( wa.x * cr + wa.y * sr, wa.y * cr - wa.x * sr ) / tile;
	let b = vec2f( wb.x * cr + wb.y * sr, wb.y * cr - wb.x * sr ) / tile;
	let la = length( a ) * ${H(ha)}; let lb = length( b ) * ${H(ha)};
	let major = select( b, a, la > lb );
	const n = 3;
	let lod = max( log2( max( min( la, lb ), max( la, lb ) / f32( n ) ) ), 0.0 );
	var sum = vec4f( 0.0 );
	for ( var i = 0; i < n; i++ ) {
		sum += cloudsBspline( uv + major * ( ( f32( i ) + 0.5 ) / f32( n ) - 0.5 ), lod );
	}
	return sum / f32( n );
}

// Cirrus veil seen along rd: vec4( radiance, transmittance ). A thin sheet on a curved-earth
// shell, so its fibres converge toward the horizon in true perspective. Its coverage varies
// only over hundreds of km (clearer and thicker parts of the sky, no outlines); long, gently
// curved fibres follow the upper wind and give a low contrast texture. The fibre texture is
// filtered anisotropically with the footprint of one pixel (pxAngle, radians), which turns
// distant fibres into a smooth veil. Lighting: single scattering by ice crystals (strong
// forward peak: bright near the sun, a faint 22 degree halo) plus multiple scattering and sky
// light; lit by the sun from below its horizon for a while after sunset.
fn cloudsHigh( rd: vec3f, pxAngle: f32 ) -> vec4f {
	let H = cloudsParams.cirrusAlt;
	let light = cloudsKeyLight( 9.0 );
	let sunDir = light.dir;
	let cosT = dot( rd, sunDir );

	// geometry: hit point, local incidence, pixel footprint on the sheet (across the view and
	// along it, stretched by 1 / mu)
	let t = cloudsShell( cloudsParams.camY, rd, H );
	let pxz = rd.xz * t;
	let up = normalize( vec3f( pxz.x / CL_EARTH_R, 1.0, pxz.y / CL_EARTH_R ) );
	let mu = max( dot( rd, up ), 0.02 );
	let radial = normalize( rd.xz + vec2f( 1e-6, 0.0 ) );
	let fA = vec2f( - radial.y, radial.x ) * ( t * pxAngle );
	let fB = radial * ( t * pxAngle / mu );
	let q = pxz + cloudsParams.camXZ - cloudsParams.hOffset;

	// coverage: patches of 5 - 50 km with clear gaps, modulated over hundreds of km, broad bands
	let syn = textureSampleLevel( cloudsSynTex, smpLinearRepeat, cloudsToWind( q ) * ${H(1/ma)}, 0.0 );
	let cov = smoothstep( 0.15, 0.85, syn.x ) * smoothstep( 0.4, 0.72, syn.z ) * ( syn.y * 0.4 + 0.6 );
	// fibres at two scales (hides the tiling of the texture)
	let f1 = cloudsFibres( q, fA, fB, ${H(ga)}, 0.0 );
	let f2 = cloudsFibres( q, fA, fB, ${H(ga*2.3)}, 0.5 );
	let fib = f1.x * 0.6 + f2.x * 0.4;
	let veil = f1.y * 0.5 + f2.y * 0.5;
	// vertical optical depth: faint wisps (opacity mostly 0.05 - 0.2 at the default amount) over
	// a thinner veil
	let amount = cloudsParams.cirrus * ( cloudsParams.coverage * 0.5 + 0.78 );
	let tau = amount * 0.4 * cov * ( fib * 0.75 + 0.25 ) * ( veil * 0.4 + 0.8 );
	// slant path, bounded so the veil doesn't turn into a white band at the horizon
	let alpha = 1.0 - exp( - tau / max( mu, 0.25 ) );

	// lighting: the key light at the sheet (sunset colours depend on the altitude)
	let muS = dot( sunDir, up );
	let E = select( atmosphereSampleTransmittance( 6360.0 + H / 1000.0, muS ) * atmosphereParams.sunIlluminance, light.E, light.isMoon )
		* cloudsEarthShadow( light, H, pxz );
	// ice: strong forward peak, a faint 22 degree halo, some backscatter; thin: mostly single
	// scattering, a little multiply scattered light
	let hd = ( acos( clamp( cosT, -1.0, 1.0 ) ) - 0.384 ) / 0.02;
	let halo = exp( - hd * hd ) * 0.04;
	let phase = clPhaseHG( cosT, 0.85 ) * 0.4 + clPhaseHG( cosT, 0.3 ) * 0.35 + clPhaseHG( cosT, -0.15 ) * 0.25 + halo;
	let Ts = exp( tau * -0.5 / max( muS, 0.1 ) );
	let L = ( E * ( phase * Ts + ( 1.0 - Ts ) * 0.06 ) + frame.skyIrradiance * 0.9 ) * alpha;
	// aerial perspective: haze in front of the sheet shows sky light where the sheet hides it
	let tr = exp( t * ${H(-.25/va)} );
	let skyL = atmosphereSkyLuminance( rd );
	return vec4f( L * tr + skyL * alpha * ( 1.0 - tr ), 1.0 - alpha );
}

// Samples lie on a lattice along the ray, shared by all rays and jittered per frame: steps of
// ds in distance bands ( [0, 5), [5, 10), [10, 20), [20, 40), 40+ km, ds doubling), fine points
// every ds, coarse points every coarse fine points. Jumps over empty space snap onto it, so
// neighbouring pixels always sample the clouds at consistent positions (arbitrary landing
// points after a jump would average into contour lines)
const CL_B0: f32 = 2500.0;
fn cloudsBand( t: f32 ) -> f32 { return clamp( floor( log2( max( t, CL_B0 ) / CL_B0 ) ), 0.0, 4.0 ); }
fn cloudsBandStart( b: f32 ) -> f32 { return select( exp2( b ) * CL_B0, 0.0, b == 0.0 ); }
fn cloudsPosMod( x: f32, c: f32 ) -> f32 { return x - floor( x / c ) * c; }

struct CloudsMarch { L: vec3f, T: f32, depth: f32 };
${Da(`View`,{maxSteps:200,maxDist:5e4,ds0:24,dsMax:120,coarse:4,lightSteps:[12,50,140,350,900,1800],lightDetail:3,detail:!0,ambient:1.2,pxAngle:`cloudsParams.camTan.y * 2.0 / cloudsParams.displayH`})}
${Da(`Pano`,{maxSteps:56,maxDist:5e4,ds0:60,dsMax:320,coarse:2,lightSteps:[120,500],lightDetail:0,detail:!1,ambient:1.2,pxAngle:H(2*Ki/da)})}
`}),this.shadowModule=new R({name:`cloudsShadow`,deps:[z],uniforms:this.params,uniformName:`cloudsParams`,bindings:{cloudsShadowMap:{texture:this.shadowMap}},code:`
// cloud shadow transmittance (1 = clear) at a world position. Manual bilinear filtering of an
// unfilterable texture: costs no sampler in the (sampler hungry) scene materials.
fn cloudsShadowTap( i: vec2i ) -> f32 { return textureLoad( cloudsShadowMap, clamp( i, vec2i( 0 ), vec2i( 255 ) ), 0 ).x; }
fn cloudsShadow( worldXZ: vec2f ) -> f32 {
	let uv = ( worldXZ - cloudsParams.shadowCenter ) / cloudsParams.shadowSize + 0.5;
	let st = uv * ${H(_a)} - 0.5;
	let i0 = vec2i( floor( st ) );
	let fr = fract( st );
	let s = mix( mix( cloudsShadowTap( i0 ), cloudsShadowTap( i0 + vec2i( 1, 0 ) ), fr.x ), mix( cloudsShadowTap( i0 + vec2i( 0, 1 ) ), cloudsShadowTap( i0 + vec2i( 1, 1 ) ), fr.x ), fr.y );
	// no data outside the map: fade to unshadowed at its border
	let e = abs( uv - 0.5 );
	let inside = smoothstep( 0.5, 0.42, max( e.x, e.y ) );
	return mix( 1.0, s, cloudsParams.shadowStrength * inside );
}
`}),this.module=new R({name:`clouds`,deps:[z,t,this.shadowModule],uniforms:this.params,uniformName:`cloudsParams`,bindings:{cloudsPanorama:{texture:this.panorama},cloudsView:{texture:()=>this.viewTex}},code:`
${Ta(`cloudsViewCatmullRom`,`cloudsView`)}

// vec4(rgb in-scattered radiance, a transmittance) for a view direction (panorama)
fn cloudsSample( dir: vec3f ) -> vec4f {
	let az = atan2( dir.z, dir.x );
	let u = fract( az / ${H(2*Ki)} );
	let elev = - acos( clamp( dir.y, -1.0, 1.0 ) ) + ${H(Ki/2)};
	let t = clamp( ( elev + ${H(4/180*Ki)} ) / ${H(94/180*Ki)}, 0.0, 1.0 );
	let v = sqrt( t );
	let s = textureSampleLevel( cloudsPanorama, smpLinearRepeat, vec2f( u, v ), 0.0 );
	// below the panorama range: no clouds
	let below = smoothstep( -0.07, -0.03, dir.y );
	return vec4f( s.rgb * below, mix( 1.0, s.a, below ) );
}

// Full resolution clouds for the main background. The view texture is looked up with the camera
// it was traced with (it can lag behind: underwater frames skip the tracing); directions outside
// it, or a texture without data yet (startup, resize), fall back to the panorama, so the sky can
// never show empty texels
// Transmittance for the sun's disc behind the clouds. The cloud march stops once less than 0.3 % of
// the light gets through and reports that remainder, which (noisy from frame to frame) let a
// clamped sun disc of 2500x the sky shine and sparkle through thick cloud: below ~0.4 % it is dark.
fn cloudsSunTransmittance( T: f32 ) -> f32 { return T * smoothstep( 0.004, 0.04, T ); }

fn cloudsSampleView( dir: vec3f ) -> vec4f {
	let uv = cloudsProject( dir, cloudsParams.viewRight, cloudsParams.viewUp, cloudsParams.viewFwd, cloudsParams.viewTan );
	let inside = cloudsParams.viewValid > 0.5 && dot( dir, cloudsParams.viewFwd ) > 0.01 && uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0;
	if ( inside ) {
		// bicubic (Catmull-Rom) upsampling of the half resolution history keeps the edges crisp
		let v = max( cloudsViewCatmullRom( uv, cloudsParams.viewSize ), vec4f( 0.0 ) );
		let above = smoothstep( -0.05, -0.03, dir.y );
		return vec4f( v.rgb * above, mix( 1.0, min( v.a, 1.0 ), above ) );
	}
	return cloudsSample( dir );
}

`})}_buildKernels(){let e=new R({name:`cloudsNoise`,deps:[z],code:Ca}),t=this.helpersModule,n=(e,t,n,r,i=[8,8,1])=>new yi({label:e,modules:t,bindings:n,code:r,workgroupSize:i}),r=`@compute @workgroup_size( WG_X, WG_Y, WG_Z ) fn main( @builtin( global_invocation_id ) gid: vec3u )`;this._noiseKernels={shape:n(`Cloud Shape Noise`,[e],{outTex:{storageTexture:this.shapeTex}},`${r} {
	let p = ( vec3f( gid ) + 0.5 ) / ${H($i)};
	let b = clBillows( p, 4.0 );
	let pn = clPerlinFbm( p, 4.0 ) * 0.9 + 0.5;
	// perlin-worley: remap( perlin, 0, 1, worley, 1 ) keeps the billows, breaks their regularity
	let pw = b + sat( pn ) * ( 1.0 - b ) * 0.5;
	let base = sat( ( pw - 0.42 ) / 0.5 );
	let cx = clGnoise( p + 0.31, 4.0 ) * 0.7 + 0.5;
	let cz = clGnoise( p + 0.67, 4.0 ) * 0.7 + 0.5;
	textureStore( outTex, gid, vec4f( base, sat( cx ), sat( cz ), 1.0 ) );
}`,[4,4,4]),detail:n(`Cloud Detail Noise`,[e],{outTex:{storageTexture:this.detailTex}},`
fn fbmW( p: vec3f, c: f32 ) -> f32 { return clWorley3( p, c ) * 0.625 + clWorley3( p, c * 2.0 ) * 0.25 + clWorley3( p, c * 4.0 ) * 0.125; }
${r} {
	let p = ( vec3f( gid ) + 0.5 ) / ${H(aa)};
	textureStore( outTex, gid, vec4f( sat( fbmW( p, 4.0 ) ), sat( fbmW( p, 8.0 ) ), sat( fbmW( p, 16.0 ) ), 1.0 ) );
}`,[4,4,4]),weather:n(`Cloud Weather`,[e],{outTex:{storageTexture:this.weatherTex}},`
// cells of varying size: max over cells of a blob that fades out at its random radius,
// cells switch on where the mesoscale field allows. returns vec2( blob, its size )
fn blobs( p: vec2f, cells: vec2f, meso: f32, seed: f32 ) -> vec2f {
	let q = p * cells;
	let ip = floor( q );
	let fp = fract( q );
	var b = vec2f( 0.0 );
	for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let o = vec2f( f32( x ), f32( y ) );
		let cell = clMod2( ip + o, cells ) + seed;
		let hx = clHash2( cell ); let hy = clHash2( cell + 19.7 ); let hr = clHash2( cell + 41.3 ); let hp = clHash2( cell + 7.1 );
		let d = length( o + vec2f( hx, hy ) * 0.6 + 0.2 - fp );
		// radii 0.34 - 0.74 cells (was up to 0.9): neighbours in a row no longer fuse into one long ridge,
		// which from underneath read as a stretched, smeared tube
		let rad = hr * hr * 0.4 + 0.34;
		let on = smoothstep( hp - 0.15, hp + 0.15, meso + 0.12 );
		let v = sat( 1.0 - d / rad ) * on;
		if ( v > b.x ) { b = vec2f( v, hr ); }
	} }
	return b;
}
${r} {
	let p = ( vec2f( gid.xy ) + 0.5 ) / ${H(Yi)};
	let meso = clVnoise2( p, vec2f( 4.0 ) ) * 0.6 + clVnoise2( p, vec2f( 8.0 ) ) * 0.3 + clVnoise2( p, vec2f( 16.0 ) ) * 0.1;
	// low frequency warp: irregular footprints, wavy streets
	let pw = p + ( vec2f( clVnoise2( p, vec2f( 24.0 ) ), clVnoise2( p + 0.37, vec2f( 24.0 ) ) ) - 0.5 ) * 0.03;
	// cloud streets along the wind (x), about 3 km apart
	let street = sin( pw.y * ${H(2*Ki*11)} + clVnoise2( p, vec2f( 3.0 ) ) * 6.0 ) * 0.5 + 0.5;
	// fair weather cumulus: cells of 0.5 - 2 km, mostly along the streets
	// (loosely: a street seen end-on from under it lines its cells up into one long tube)
	let small = blobs( pw, vec2f( 15.0, 19.0 ), meso * 0.7 + street * 0.22 - 0.16, 0.0 );
	// big cells and towers (used far from the island only)
	let big = blobs( pw, vec2f( 6.0, 8.0 ), meso - 0.1, 3.7 );
	// turrets: several bumps per cell
	let lump = clVnoise2( pw, vec2f( 80.0 ) ) * 0.65 + clVnoise2( pw + 0.5, vec2f( 160.0 ) ) * 0.35;
	// top of the small cells (fraction of the layer): bigger cells grow taller
	let top = ( small.y * 0.35 + 0.4 ) * ( clVnoise2( p, vec2f( 12.0 ) ) * 0.5 + 0.75 );
	textureStore( outTex, gid.xy, vec4f( small.x, sat( top ), lump, big.x ) );
}`),syn:n(`Cloud Synoptic Fields`,[e],{outTex:{storageTexture:this.synTex}},`${r} {
	let p = ( vec2f( gid.xy ) + 0.5 ) / ${H(pa)};
	let cov = clGfbm( p, vec2f( 2.0, 3.0 ), 0.31 );
	let streets = clGfbm( p, vec2f( 4.0, 14.0 ), 0.59 );
	let patches = clGfbm( p, vec2f( 10.0, 14.0 ), 0.83 ) * 0.7 + clGfbm( p, vec2f( 28.0, 40.0 ), 0.21 ) * 0.3;
	textureStore( outTex, gid.xy, clamp( vec4f( cov, streets, patches, 1.0 ), vec4f( 0.0 ), vec4f( 1.0 ) ) );
}`),aux:n(`Cloud Fibre Flow`,[e],{outTex:{storageTexture:this.auxTex}},`
fn psi( q: vec2f ) -> f32 { return clGnoise2( q, vec2f( 3.0 ) ) * 0.5 + clGnoise2( q + 0.37, vec2f( 7.0 ) ) * 0.25 + clGnoise2( q + 0.71, vec2f( 15.0 ) ) * 0.1; }
// sparse jittered points: n cells per texture, probability, radius (cells), seed
fn points( p: vec2f, cluster: f32, n: f32, prob: f32, sigma: f32, seed: f32 ) -> f32 {
	let q = p * n;
	let ip = floor( q );
	let fp = fract( q );
	var v = 0.0;
	for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let o = vec2f( f32( x ), f32( y ) );
		let c = clMod2( ip + o, vec2f( n ) ) + seed;
		let pos = o + vec2f( clHash2( c ), clHash2( c + 19.7 ) ) * 0.8 + 0.1;
		let on = select( 0.0, 1.0, clHash2( c + 41.3 ) < cluster * prob );
		let d = pos - fp;
		v = max( v, exp( dot( d, d ) * ( -0.5 / ( sigma * sigma ) ) ) * on * ( clHash2( c + 7.1 ) * 0.7 + 0.3 ) );
	} }
	return v;
}
${r} {
	let p = ( vec2f( gid.xy ) + 0.5 ) / ${H(ha)};
	let e = ${H(1/ha)};
	let curl = vec2f( psi( p + vec2f( 0.0, e ) ) - psi( p - vec2f( 0.0, e ) ), psi( p - vec2f( e, 0.0 ) ) - psi( p + vec2f( e, 0.0 ) ) ) / ( 2.0 * e );
	let dir = normalize( vec2f( 1.0, 0.0 ) + vec2f( 0.0, clGnoise2( p + 0.13, vec2f( 3.0 ) ) * 0.5 ) + curl * 0.05 );
	let cluster = sat( clGfbm( p, vec2f( 5.0 ), 0.9 ) * 1.6 - 0.3 );
	let seeds = max( points( p, cluster, 110.0, 0.3, 0.18, 0.0 ), points( p, cluster, 44.0, 0.3, 0.18, 3.3 ) * 0.8 );
	// tufts (heads of hooked filaments) and, just downwind of them, a sideways sag of the flow
	let tuft = points( p, cluster, 40.0, 0.4, 0.1, 6.1 );
	let droop = points( p, cluster, 40.0, 0.4, 0.3, 6.1 );
	textureStore( outTex, gid.xy, vec4f( seeds, atan2( dir.y, dir.x ), tuft, droop ) );
}`),fib:n(`Cloud Fibres`,[e],{auxTex:{texture:this.auxTex},outTex:{storageTexture:this.fibTex}},`${r} {
	const LIC_STEPS = 44;
	let LIC_STEP = ${H(1/ha)};
	let p = ( vec2f( gid.xy ) + 0.5 ) / ${H(ha)};
	var x1 = p; var x2 = p;
	var fib = 0.0;
	var head = 0.0;
	for ( var i = 0; i < LIC_STEPS; i++ ) {
		let k = f32( i );
		let a = textureSampleLevel( auxTex, smpLinearRepeat, x1, 0.0 );
		fib += a.x * sin( ( k + 0.5 ) * ${H(Ki/44)} );
		x1 -= vec2f( cos( a.y ), sin( a.y ) ) * LIC_STEP;
		// hooked tails: from the tuft downwind, sagging sideways
		let b = textureSampleLevel( auxTex, smpLinearRepeat, x2, 0.0 );
		head += b.z * exp( k * ${H(-1/12)} );
		x2 -= normalize( vec2f( cos( b.y ), sin( b.y ) + b.w * 1.2 ) ) * LIC_STEP;
	}
	let breakup = sat( clGfbm( p, vec2f( 24.0 ), 0.71 ) * 1.6 - 0.25 );
	let wisps = ( 1.0 - exp( fib * -0.8 ) ) * breakup;
	let hooks = 1.0 - exp( head * -0.5 );
	let veil = clGfbm( p, vec2f( 4.0 ), 0.33 );
	textureStore( outTex, gid.xy, vec4f( sat( max( wisps, hooks ) ), sat( veil ), 0.0, 1.0 ) );
}`)};let i=this.params,a=new R({name:`cloudsSdfParams`,deps:[z,t],uniforms:i,uniformName:`cloudsParams`,code:``});this.sdfOccKernel=n(`Cloud SDF Occupancy`,[a],{weatherTex:{texture:this.weatherTex},outTex:{storageTexture:this.sdfA}},`${r} {
	let ix = i32( gid.x ); let iy = i32( gid.y );
	let h0 = f32( gid.z ) / ${H(Zi)};
	let thr = 1.0 - cloudsParams.sdfCoverage * 1.3;
	// conservative: maxima of every weather quantity around the cell (they are interpolated
	// separately), big cells assumed allowed
	var mx = vec4f( 0.0 );
	for ( var y = -1; y <= 2; y++ ) { for ( var x = -1; x <= 2; x++ ) {
		let wc = vec2i( ( ix * 2 + x + ${Yi} ) % ${Yi}, ( iy * 2 + y + ${Yi} ) % ${Yi} );
		mx = max( mx, textureLoad( weatherTex, wc, 0 ) );
	} }
	let cs = sat( ( mx.x - thr ) / max( 1.0 - thr, 0.05 ) );
	let cb = sat( ( mx.w - thr ) / max( 1.0 - thr, 0.05 ) );
	let occ = max( select( -1.0, clSmallTop( cs, mx.y, mx.z ), cs > 0.0 ), select( -1.0, clBigTop( cb, mx.z ), cb > 0.0 ) ) - h0;
	textureStore( outTex, gid, vec4f( select( 1.0, 0.0, occ > 0.0 ), 0.0, 0.0, 1.0 ) );
}`),this.sdfXKernel=n(`Cloud SDF X`,[z],{src:{texture:this.sdfA},outTex:{storageTexture:this.sdfB}},`${r} {
	let ix = i32( gid.x ); let iy = i32( gid.y ); let iz = i32( gid.z );
	var d = ${H(25)};
	for ( var k = -24; k <= ${Qi}; k++ ) {
		if ( textureLoad( src, vec3i( ( ix + k + ${Xi} ) % ${Xi}, iy, iz ), 0 ).x * 255.0 < 0.5 ) {
			d = min( d, f32( abs( k ) ) );
		}
	}
	textureStore( outTex, gid, vec4f( d / 255.0, 0.0, 0.0, 1.0 ) );
}`),this.sdfYKernel=n(`Cloud SDF Y`,[z],{src:{texture:this.sdfB},outTex:{storageTexture:this.sdfA}},`${r} {
	let ix = i32( gid.x ); let iy = i32( gid.y ); let iz = i32( gid.z );
	var d = ${H(25)};
	for ( var k = -24; k <= ${Qi}; k++ ) {
		d = min( d, max( textureLoad( src, vec3i( ix, ( iy + k + ${Xi} ) % ${Xi}, iz ), 0 ).x * 255.0, f32( abs( k ) ) ) );
	}
	textureStore( outTex, gid, vec4f( d / 255.0, 0.0, 0.0, 1.0 ) );
}`),this.sdfZKernel=n(`Cloud SDF Z`,[z],{src:{texture:this.sdfA},outTex:{storageTexture:this.sdfTex}},`${r} {
	let ix = i32( gid.x ); let iy = i32( gid.y ); let iz = i32( gid.z );
	var d = ${H(25)};
	for ( var k = -15; k <= 15; k++ ) {
		let z = iz + k;
		if ( z >= 0 && z < ${Zi} ) {
			d = min( d, max( textureLoad( src, vec3i( ix, iy, z ), 0 ).x * 255.0, f32( abs( k ) ) ) );
		}
	}
	textureStore( outTex, gid, vec4f( d / 255.0, 0.0, 0.0, 1.0 ) );
}`),this._traceSets=[];for(let e=0;e<xa;e++)this._traceSet(e);let o=e=>`
// per pixel random offset (white noise: subsampled every 4 pixels, structured noise such as
// interleaved gradient noise would alias into a visible grid) for the golden ratio sequence
fn pixelHash( px: vec2f ) -> f32 {
	var p3 = fract( vec3f( px.x, px.y, px.x ) * vec3f( 0.1031, 0.1030, 0.0973 ) );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.x + p3.y ) * p3.z );
}
${r} {
	${e?`let px = gid.xy;`:`let px = gid.xy * vec2u( 8u, 4u ) + vec2u( cloudsParams.panoSlot );`}
	if ( px.x >= ${da}u || px.y >= ${fa}u ) { return; }
	let uv = ( vec2f( px ) + 0.5 ) / vec2f( ${H(da)}, ${H(fa)} );
	let az = uv.x * ${H(2*Ki)};
	let elev = uv.y * uv.y * ${H(94/180*Ki)} - ${H(4/180*Ki)};
	let rd = vec3f( cos( elev ) * cos( az ), sin( elev ), cos( elev ) * sin( az ) );
	let jitter = pixelHash( vec2f( px ) );
	let m = cloudsMarchPano( rd, jitter );
	// panorama texel: 2 pi / PANO_W across; the elevation mapping is similar near the horizon
	let hi = cloudsHigh( rd, ${H(2*Ki/da)} );
	textureStore( outTex, px, clOver( vec4f( m.L, m.T ), hi ) );
}`;this.panoKernel=n(`Clouds Panorama`,[this.coreModule],{outTex:{storageTexture:this.panorama}},o(!1)),this.panoFullKernel=n(`Clouds Panorama (full)`,[this.coreModule],{outTex:{storageTexture:this.panorama}},o(!0)),this.shadowKernel=n(`Cloud Shadow`,[this.coreModule],{outTex:{storageTexture:this.shadowMap}},`${r} {
	let px = vec2u( gid.x, gid.y * 4u + u32( cloudsParams.shadowPhase ) );
	let uv = ( vec2f( px ) + 0.5 ) / ${H(_a)};
	// camera relative ground position
	let gxz = cloudsParams.shadowCenter + ( uv - 0.5 ) * cloudsParams.shadowSize - cloudsParams.camXZ;
	let sunDir = frame.sunDir;
	let mu = max( sunDir.y, 0.08 );
	let tb = cloudsParams.bottom / mu;
	let tt = cloudsParams.top / mu;
	var od = 0.0;
	const steps = 8;
	for ( var k = 0; k < steps; k++ ) {
		let t = mix( tb, tt, ( f32( k ) + 0.5 ) / f32( steps ) );
		let p = cloudsSheared( vec3f( gxz.x, 0.0, gxz.y ) + sunDir * t );
		od += clMeanDensity( cloudsBase( p, cloudsWeather( p.xz ) ) );
	}
	let T = exp( od * cloudsParams.densityScale * ( ( tt - tb ) / f32( steps ) ) * -0.5 );
	textureStore( outTex, px, vec4f( T, 0.0, 0.0, 1.0 ) );
}`)}_traceSet(e){if(this._traceSets[e])return this._traceSets[e];let t=new L(`CloudsTrace`,{slot:[`vec2f`,new E],subPixel:[`vec2f`,new E],prevRight:[`vec3f`,new A],frameNoise:[`f32`,0],prevUp:[`vec3f`,new A],rebuildK:[`f32`,-1],prevFwd:[`vec3f`,new A],minAlpha:[`f32`,.12],prevTan:[`vec2f`,new E(1,1)],historyValid:[`f32`,0],pad:[`f32`,0],camDelta:[`vec3f`,new A],camDeltaHi:[`vec3f`,new A]},{label:`cloudsTrace`+e}),n=new R({name:`cloudsTrace`+e,deps:[this.coreModule],uniforms:t,uniformName:`cloudsTrace`,code:`
fn cloudsViewDir( uv: vec2f ) -> vec3f {
	let ndc = vec2f( uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0 ) * cloudsParams.camTan;
	return normalize( cloudsParams.camFwd + cloudsParams.camRight * ndc.x + cloudsParams.camUp * ndc.y );
}
// interleaved gradient noise (Jimenez 2014)
fn cloudsIGN( px: vec2f ) -> f32 { return fract( fract( dot( px, vec2f( 0.06711056, 0.00583715 ) ) ) * 52.9829189 ); }
fn cloudsTracedPixel( tp: vec2u ) -> vec2f { return vec2f( tp * 4u + vec2u( cloudsTrace.slot ) ) + 0.5 + cloudsTrace.subPixel; }
fn cloudsOutside( tp: vec2u ) -> bool { return tp.x >= u32( cloudsParams.traceSize.x ) || tp.y >= u32( cloudsParams.traceSize.y ); }
`}),r=(e,t,r)=>new yi({label:e,modules:[n],bindings:t,code:r,workgroupSize:[8,8,1]}),i=`@compute @workgroup_size( WG_X, WG_Y, WG_Z ) fn main( @builtin( global_invocation_id ) gid: vec3u )`,a=r(`Clouds Trace`,{traceOut:{storageTexture:this.traceTex},depthOut:{storageTexture:this.traceDepth}},`${i} {
	let tp = gid.xy;
	if ( cloudsOutside( tp ) ) { return; }
	let px = cloudsTracedPixel( tp );
	let rd = cloudsViewDir( px / cloudsParams.viewSize );
	// well distributed in space (interleaved gradient noise on the grid of traced pixels) and over
	// the traces of each pixel (per cycle offset): the residual noise is high frequency, easy to average
	let jitter = fract( cloudsIGN( vec2f( tp ) ) + cloudsTrace.frameNoise );
	let m = cloudsMarchView( rd, jitter );
	textureStore( traceOut, tp, vec4f( m.L, m.T ) );
	// depth + opacity of the cumulus: the resolve reprojects either the cumulus or the high layers
	textureStore( depthOut, tp, vec4f( m.depth, 1.0 - m.T, 0.0, 1.0 ) );
}`),o=r(`Clouds High Trace`,{traceDepth:{texture:this.traceDepth},highOut:{storageTexture:this.highTrace},motionOut:{storageTexture:this.motionTex}},`${i} {
	let tp = gid.xy;
	if ( cloudsOutside( tp ) ) { return; }
	let px = cloudsTracedPixel( tp );
	let rd = cloudsViewDir( px / cloudsParams.viewSize );
	var hi = vec4f( 0.0, 0.0, 0.0, 1.0 );
	if ( rd.y > -0.01 ) {
		hi = cloudsHigh( rd, cloudsParams.camTan.y * 2.0 / cloudsParams.viewSize.y );
	}
	textureStore( highOut, tp, hi );

	// motion for the resolve: the closest cumulus sample around this block (like the closest
	// depth dilation of TAA), so the edges of a cloud move with it and foreground wins
	var best = vec3f( 1e9, 0.0, 0.0 ); // depth key, depth, opacity
	let tmax = vec2i( cloudsParams.traceSize ) - 1;
	for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let dz = textureLoad( traceDepth, clamp( vec2i( tp ) + vec2i( x, y ), vec2i( 0 ), tmax ), 0 );
		let key = select( 1e9, dz.x, dz.y > 0.15 );
		if ( key < best.x ) { best = vec3f( key, dz.xy ); }
	} }
	if ( best.x > 1e8 ) {
		best = vec3f( 0.0, textureLoad( traceDepth, vec2i( tp ), 0 ).xy );
	}
	textureStore( motionOut, tp, vec4f( best.yz, 0.0, 1.0 ) );
}`),s=r(`Clouds Box`,{traceTex:{texture:this.traceTex},highTrace:{texture:this.highTrace},minOut:{storageTexture:this.boxMin},maxOut:{storageTexture:this.boxMax}},`${i} {
	let tp = vec2i( gid.xy );
	if ( cloudsOutside( gid.xy ) ) { return; }
	let tmax = vec2i( cloudsParams.traceSize ) - 1;
	var lo = vec4f( 1e4 ); var hi = vec4f( -1e4 );
	for ( var y = -1; y <= 1; y++ ) { for ( var x = -1; x <= 1; x++ ) {
		let q = clamp( tp + vec2i( x, y ), vec2i( 0 ), tmax );
		let c = clOver( textureLoad( traceTex, q, 0 ), textureLoad( highTrace, q, 0 ) );
		lo = min( lo, c );
		hi = max( hi, c );
	} }
	textureStore( minOut, tp, lo );
	textureStore( maxOut, tp, hi );
}`),c=(e,t)=>r(`Clouds Resolve`,{motionTex:{texture:this.motionTex},traceTex:{texture:this.traceTex},highTrace:{texture:this.highTrace},boxMin:{texture:this.boxMin},boxMax:{texture:this.boxMax},srcHistory:{texture:e},dstHistory:{storageTexture:t}},`
${Ta(`historyCatmullRom`,`srcHistory`)}
// this frame's samples upsampled (they sit at the slot of each block)
fn upsampled( p: vec2u ) -> vec4f {
	let suv = ( ( vec2f( p ) - cloudsTrace.slot ) / 4.0 + 0.5 ) / cloudsParams.traceSize;
	return clOver( textureSampleLevel( traceTex, smpLinearClamp, suv, 0.0 ), textureSampleLevel( highTrace, smpLinearClamp, suv, 0.0 ) );
}
fn b2( a: f32, b: f32 ) -> f32 { return abs( a - b ) * 2.0 + b; }
${i} {
	let p = gid.xy;
	if ( p.x >= u32( cloudsParams.viewSize.x ) || p.y >= u32( cloudsParams.viewSize.y ) ) { return; }
	let uv = ( vec2f( p ) + 0.5 ) / cloudsParams.viewSize;
	let rd = cloudsViewDir( uv );
	if ( rd.y < -0.06 ) { return; }

	let tp = p / 4u;
	let fresh = ( p.x % 4u ) == u32( cloudsTrace.slot.x ) && ( p.y % 4u ) == u32( cloudsTrace.slot.y );
	let dz = textureLoad( motionTex, vec2i( tp ), 0 );
	// where was this cloud point last frame (camera motion and wind drift): cumulus, or the high
	// layers where there is no cumulus in front
	let T = cloudsTrace;
	let pdC = normalize( rd * dz.x + T.camDelta );
	let pdH = normalize( rd * cloudsShell( cloudsParams.camY, rd, cloudsParams.cirrusAlt ) + T.camDeltaHi );
	let pd = select( pdH, pdC, dz.y > 0.3 );
	let puv = mix( cloudsProject( pdH, T.prevRight, T.prevUp, T.prevFwd, T.prevTan ), cloudsProject( pdC, T.prevRight, T.prevUp, T.prevFwd, T.prevTan ), smoothstep( 0.1, 0.5, dz.y ) );
	let valid = T.historyValid > 0.5 && dot( pd, T.prevFwd ) > 0.01 && puv.x > 0.0 && puv.x < 1.0 && puv.y > 0.0 && puv.y < 1.0 && pd.y > -0.05;
	var out = vec4f( 0.0, 0.0, 0.0, 1.0 );
	if ( rd.y > -0.035 ) {
		if ( valid ) {
			// reprojected history, clamped to the range of this frame's samples around it (with a
			// margin): real changes (lighting, motion the reprojection missed) can't leave ghosts,
			// so the samples can be averaged over many frames, which removes the noise
			let h = max( historyCatmullRom( puv, cloudsParams.viewSize ), vec4f( 0.0 ) );
			let lo = textureLoad( boxMin, vec2i( tp ), 0 ); let hi = textureLoad( boxMax, vec2i( tp ), 0 );
			let pad = ( hi - lo ) * 0.25 + 0.01;
			out = select( h, clamp( h, lo - pad, hi + pad ), T.rebuildK < 0.0 );
		} else {
			out = upsampled( p );
		}

		if ( fresh ) {
			let cu = textureLoad( traceTex, vec2i( tp ), 0 );
			let hl = textureLoad( highTrace, vec2i( tp ), 0 );
			let cur = clOver( cu, hl );
			// average the jittered samples over time (removes the ray march noise); a little
			// shorter where the clouds move fast on screen (the history is resampled every frame)
			let hist = out;
			let motion = length( ( puv - uv ) * cloudsParams.viewSize );
			let a0 = T.minAlpha;
			let a = clamp( motion * 0.1 + a0, a0, 0.35 );
			// rebuilding after a camera cut: each pixel takes its own first sample as is
			out = select( cur, mix( hist, cur, a ), valid && T.rebuildK < 0.0 );
		} else if ( T.rebuildK >= 0.0 && valid ) {
			// rebuilding: pixels without a sample of their own since the cut average the upsampled
			// samples of every slot traced so far (their refresh rank is the 4x4 Bayer index)
			let x = f32( p.x % 4u ); let y = f32( p.y % 4u );
			let rank = b2( x % 2.0, y % 2.0 ) * 4.0 + b2( floor( x / 2.0 ), floor( y / 2.0 ) );
			if ( rank > T.rebuildK ) {
				out = mix( out, upsampled( p ), 1.0 / ( T.rebuildK + 1.0 ) );
			}
		}
	}

	textureStore( dstHistory, p, vec4f( out.rgb, clamp( out.a, 0.0, 1.0 ) ) );
}`),l={block:t,trace:a,high:o,box:s,resolve:[c(this.history[1],this.history[0]),c(this.history[0],this.history[1])]};return this._traceSets[e]=l,l}_resize(e,t){this._w=e,this._h=t,this._scale=this.resolutionScale;let n=Math.max(4,Math.round(e*this._scale*Sa)),r=Math.max(4,Math.round(t*this._scale*Sa));this.displayH.value=Math.max(4,t*this._scale);let i=Math.ceil(n/4),a=Math.ceil(r/4);this.viewSize.value.set(n,r),this.traceSize.value.set(i,a);for(let e of[this.traceTex,this.traceDepth,this.highTrace,this.boxMin,this.boxMax,this.motionTex])e.resize(i,a);this.history[0].resize(n,r),this.history[1].resize(n,r),this.viewValid.value=0,this.resetHistory()}_drawingBufferSize(){if(this.outputSize)return this.outputSize;let e=this.renderer;return e&&e.getDrawingBufferSize?e.getDrawingBufferSize(this._size||=new E):e&&e.width&&e.height?{x:e.width,y:e.height}:F.canvas?{x:F.canvas.width,y:F.canvas.height}:br.fields.outputResolution.value}update(e,t){this._traceIndex=0;let n=this.wind.value,r=Math.cos(this._rot),i=Math.sin(this._rot),a=this.offset.value;a.addScaledVector(n,e),a.set((a.x%Ji+Ji)%Ji,(a.y%Ji+Ji)%Ji);let o=this._offsetW;o.x+=(n.x*r+n.y*i)*e,o.y+=(n.y*r-n.x*i)*e,o.set((o.x%Ji+Ji)%Ji,(o.y%Ji+Ji)%Ji);let s=this._offsetH;s.addScaledVector(n,e*1.6),s.set((s.x%Ji+Ji)%Ji,(s.y%Ji+Ji)%Ji),t.updateMatrixWorld();let c=t.position;this.camY.value=T.clamp(c.y,1,this.bottom.value-50),n.lengthSq()>1e-6&&this.windN.value.copy(n).normalize(),this.horizonY.value=-Math.sqrt(2*this.camY.value/qi),this.nOrigin.value.set(c.x-a.x,c.z-a.y),this.wOrigin.value.set(c.x*r+c.z*i-o.x,c.z*r-c.x*i-o.y);let l=this.coverage.value;(l>this.sdfCoverage.value||l<this.sdfCoverage.value-.1)&&(this.sdfCoverage.value=Math.min(l+.04,1),this._buildSDF());let u=this._drawingBufferSize();(u.x!==this._w||u.y!==this._h||this.resolutionScale!==this._scale)&&this._resize(u.x,u.y);let d=t.matrixWorld.elements,f=Math.tan(T.degToRad(t.fov*.5))/(t.zoom||1),p=this.cam,m=this.prev;m.right.value.copy(p.right.value),m.up.value.copy(p.up.value),m.fwd.value.copy(p.fwd.value),m.tan.value.copy(p.tan.value),p.right.value.set(d[0],d[1],d[2]).normalize(),p.up.value.set(d[4],d[5],d[6]).normalize(),p.fwd.value.set(-d[8],-d[9],-d[10]).normalize(),p.tan.value.set(f*t.aspect,f);let h=this._hasPrev?c.distanceTo(this._prevCam):1/0,g=p.fwd.value.angleTo(m.fwd.value);this._turned=g;let _=B.sunDir.value;(h>8||g>.5||_.angleTo(this._prevSun)>.05||Math.abs(p.tan.value.y-m.tan.value.y)>.001*p.tan.value.y)&&this.resetHistory(),this._prevSun.copy(_),this.camDelta.value.set(c.x-this._prevCam.x-n.x*e,c.y-this._prevCam.y,c.z-this._prevCam.z-n.y*e),this.camDeltaHi.value.set(c.x-this._prevCam.x-n.x*e*1.6,c.y-this._prevCam.y,c.z-this._prevCam.z-n.y*e*1.6),this._prevCam.copy(c),this._hasPrev=!0,this.shadowPhase.value=this.frame%4,this.frame%4==0&&this.shadowCenter.value.set(c.x,c.z),this.camXZ.value.set(c.x,c.z),this.hOffset.value.copy(s),this.panoWarm>0&&(this.panoFullKernel.dispatch([da/8,fa/8,1]),this.panoWarm=0),this._panoSlot(this.frame);let v=()=>{this.shadowKernel.dispatch([_a/8,_a/32,1]),this.panoKernel.dispatch([da/64,fa/32,1])};if(B.cameraUnderwater.value>.5)v(),this.resetHistory();else if(this._rebuild<16){for(let e=0;e<xa&&this._rebuild<16;e++)e>0&&this._holdCamera(),this.rebuildK.value=this._rebuild,this._trace(ba[this._rebuild++]);v()}else{let e=1+Math.floor(this._since++/16);this.minAlpha.value=Math.max(.12,1/(e+1)),this.rebuildK.value=-1,this._trace(ba[this.frame%16]),v(),this._turned>.003&&(this._holdCamera(),this._trace(ba[(this.frame+8)%16]))}this.frame++}_trace(e){this.slot.value.set(e%4,Math.floor(e/4));let t=Math.floor(this._traces/16)+1;this.subPixel.value.set((.5+t*.7548776662)%1-.5,(.5+t*.569840291)%1-.5).multiplyScalar(.25),this.frameNoise.value=t*.6180339887%1,this._traces++;let n=this._traceSet(this._traceIndex++),r=n.block.fields,i=this.prev;r.slot.value.copy(this.slot.value),r.subPixel.value.copy(this.subPixel.value),r.frameNoise.value=this.frameNoise.value,r.rebuildK.value=this.rebuildK.value,r.minAlpha.value=this.minAlpha.value,r.historyValid.value=this.historyValid.value,r.prevRight.value.copy(i.right.value),r.prevUp.value.copy(i.up.value),r.prevFwd.value.copy(i.fwd.value),r.prevTan.value.copy(i.tan.value),r.camDelta.value.copy(this.camDelta.value),r.camDeltaHi.value.copy(this.camDeltaHi.value);let a=[Math.ceil(this.traceSize.value.x/8),Math.ceil(this.traceSize.value.y/8),1];n.trace.dispatch(a),n.high.dispatch(a),n.box.dispatch(a),n.resolve[this._pp].dispatch([Math.ceil(this.viewSize.value.x/8),Math.ceil(this.viewSize.value.y/8),1]),this.viewTex=this.history[this._pp],this._pp=1-this._pp,this.historyValid.value=1;let o=this.cam,s=this.viewCam;s.right.value.copy(o.right.value),s.up.value.copy(o.up.value),s.fwd.value.copy(o.fwd.value),s.tan.value.copy(o.tan.value),this.viewValid.value=1}_holdCamera(){let e=this.cam,t=this.prev;t.right.value.copy(e.right.value),t.up.value.copy(e.up.value),t.fwd.value.copy(e.fwd.value),t.tan.value.copy(e.tan.value),this.camDelta.value.set(0,0,0),this.camDeltaHi.value.set(0,0,0)}resetHistory(){this._rebuild=0,this._since=0,this.historyValid.value=0}_panoSlot(e){let t=ba[e%16];this.panoSlot.value.set(t%4*2+Math.floor(e/16)%2,Math.floor(t/4))}_buildSDF(){let e=[Xi/8,Xi/8,Zi];for(let t of[this.sdfOccKernel,this.sdfXKernel,this.sdfYKernel,this.sdfZKernel])t.dispatch(e)}invalidate(){this.panoWarm=1,this.resetHistory()}};function Da(e,t){let n=`min( exp2( b ) * ${H(t.ds0)}, ${H(t.dsMax)} )`,r=``,i=0;for(let e=0;e<t.lightSteps.length;e++){let n=t.lightSteps[e],a=n-i;i=n,r+=`\t\t\t\t{\n\t\t\t\t\tlet lp = cloudsSheared( pr + sunDir * ( lj * ${H(n-a*.5)} ) );\n`,e<t.lightDetail?r+=`\t\t\t\t\tlet lb = cloudsBase( lp, w );
					if ( T > 0.5 ) {
						// filtered at the size of the light segment
						od += cloudsErode( lp, lb, max( foot, ${H(a*.35)} ) ).x * ${H(a)};
					} else {
						od += clMeanDensity( lb ) * ${H(a)};
					}\n`:r+=`\t\t\t\t\tlet lb = cloudsBase( lp, cloudsWeather( lp.xz ) );\n\t\t\t\t\tod += clMeanDensity( lb ) * ${H(a)};\n`,r+=`				}
`}return`
fn cloudsBandStep${e}( b: f32 ) -> f32 { return ${n}; }
fn cloudsSnapCoarse${e}( t: f32, up: bool, jitter: f32, k0: f32 ) -> f32 {
	let b = cloudsBand( t ); let s0 = cloudsBandStart( b ); let ds = cloudsBandStep${e}( b );
	let i = ( t - s0 ) / ds - jitter;
	let m = select( floor( i + 1e-3 ), ceil( i - 1e-3 ), up );
	let mc = select( m - cloudsPosMod( m - k0, ${H(t.coarse)} ), m + cloudsPosMod( k0 - m, ${H(t.coarse)} ), up );
	return s0 + ( mc + jitter ) * ds;
}
fn cloudsMarch${e}( rd: vec3f, jitter: f32 ) -> CloudsMarch {
	let camY = cloudsParams.camY;
	let light = cloudsKeyLight( ( cloudsParams.bottom + cloudsParams.top ) * 0.0005 );
	let sunDir = light.dir;
	let pxAngle = ${t.pxAngle};
	let t0 = max( cloudsShell( camY, rd, cloudsParams.bottom ), 0.0 );
	let t1 = min( cloudsShell( camY, rd, cloudsParams.top ), ${H(t.maxDist)} );
	var L = vec3f( 0.0 );
	var T = 1.0;
	var opac = 0.0;
	var tAcc = 0.0;
	var wAcc = 0.0;
	let k0 = floor( fract( jitter * 7.31 + 0.37 ) * ${H(t.coarse)} ); // coarse phase

	let cosT = dot( rd, sunDir );
	// multiple scattering octaves (Hillaire 2016): scattering a^i, extinction b^i, eccentricity c^i
	// (sky-pro-webgpu) normalized droplet phase: 80% forward / 20% back; each order halves the asymmetry
	let phase = vec3f( clPhaseHG( cosT, 0.8 ), clPhaseHG( cosT, 0.4 ), clPhaseHG( cosT, 0.2 ) ) * 0.8
		+ vec3f( clPhaseHG( cosT, -0.2 ), clPhaseHG( cosT, -0.1 ), clPhaseHG( cosT, -0.05 ) ) * 0.2;
	let ph3 = ${H(.15/(4*Ki))}; // light diffused through the whole cloud (keeps thick bodies from going black)
	let sunE = light.E;
	let amb = frame.skyIrradiance * ${H(t.ambient)};
	// in-scatter probability (Schneider 2015 'powder', Nubis 2017): light scattered toward the viewer
	// builds up inside the cloud, so thin edges and the underside look darker; faded out looking
	// toward the sun, where the forward peak makes the thin edges glow (silver lining)
	let powderK = sat( cosT * -0.5 + 0.6 );
	// warm light bounced by the sunlit sea onto the undersides (at low sun the sunlight is warm)
	let bounce = frame.sunColor * ( max( sunDir.y, 0.0 ) * 0.01 + 0.003 );

	var t = cloudsSnapCoarse${e}( t0, true, jitter, k0 );
	var bd = cloudsBand( t );
	// Nubis stepping: coarse steps with the cheap density until something is hit, then step
	// back and walk through it with fine, fully detailed samples
	var fineSteps = 0;

	if ( rd.y > cloudsParams.horizonY && t1 > t0 ) {
		for ( var it = 0; it < ${t.maxSteps}; it++ ) {
			if ( t > t1 || T < 0.015 ) { break; }

			// entering the next distance band: onto its lattice
			if ( cloudsBand( t ) != bd ) {
				bd = cloudsBand( t );
				if ( fineSteps == 0 ) {
					t = cloudsSnapCoarse${e}( t, true, jitter, k0 );
				} else {
					let s0 = cloudsBandStart( bd ); let d0 = cloudsBandStep${e}( bd );
					t = s0 + ( ceil( ( t - s0 ) / d0 - jitter - 1e-3 ) + jitter ) * d0;
				}
			}

			let pr = vec3f( rd.x * t, camY + rd.y * t, rd.z * t );
			let p = cloudsSheared( pr );
			let ds = cloudsBandStep${e}( bd );

			if ( fineSteps == 0 ) {
				let sk = cloudsSkip( p );
				// the shear can move the sample up to 12% more than the ray
				let jump = sk * 0.89;
				if ( jump > ds * ${H(t.coarse)} ) {
					// far from any cloud: jump, landing on the coarse lattice (at least one stride on)
					t = max( cloudsSnapCoarse${e}( t + jump, false, jitter, k0 ), t + ds * ${H(t.coarse)} );
					bd = cloudsBand( t );
				} else {
					let b = cloudsBase( p, cloudsWeather( p.xz ) );
					// switch to fine steps a little before the surface so thin wisps aren't skipped
					if ( b.x > -0.08 ) {
						t -= ds * ${H(t.coarse-1)};
						fineSteps = 5;
					} else {
						t += ds * ${H(t.coarse)};
					}
				}
			} else {
				let w = cloudsWeather( p.xz );
				let b = cloudsBase( p, w );
				fineSteps -= 1;

				if ( b.x > 0.002 ) {
					fineSteps = 3;
					// detail level from the pixel footprint (m): the close range octave (lumps of ~13 - 51 m)
					// fades out beyond ~3 km, the erosion (~47 - 190 m) beyond ~24 km, so nothing smaller
					// than about two pixels is ever sampled (that would only alias into grain)
					let foot = t * pxAngle;
					var er = vec2f( clMeanDensity( b ), 1.0 - clMeanCrease( b ) );
					// detail erosion (every octave under 2 px: the mean erosion above)
${t.detail?`\t\t\t\t\tif ( foot < ${H(ca*.24)} ) { er = cloudsErode( p, b, foot ); }`:``}
					let dens = er.x;

					if ( dens > 0.002 ) {
						// light march toward the sun: near samples share the weather and keep the
						// detail, far ones only see the base shape
						var od = 0.0;
						// jittered along the light ray: its sampling pattern turns into noise the
						// temporal filter removes, instead of streaks across the cloud
						let lj = fract( jitter + 0.5 ) * 0.3 + 0.85;
${r}
						let sig = dens * cloudsParams.densityScale;
						// light optical depth (the local segment included); multiple scattering lowers the
						// effective extinction of the light
						let tau = ( od + dens * 6.0 ) * cloudsParams.densityScale;
						// single scattering (dual-lobe HG) through the true optical depth, one multiple
						// scattering octave (Wrenninge 2013: extinction and eccentricity lowered), and the
						// diffusion regime of a thick, non-absorbing cloud: diffuse light is transmitted
						// ~ 1 / (1 + 0.75 (1 - g) tau), so a sunlit surface reflects like a bright diffuser and
						// the shaded side stays grey, not black (the octave sum alone was ~4x too dark)
						// multiply scattered light builds up with height in the cloud (Nubis 'vertical
						// probability'): the lower parts are darker
						let msV = mix( 0.35, 1.0, smoothstep( 0.0, 0.45, b.y ) );
						let sun = phase.x * exp( -tau ) + ( phase.y * 0.6 * exp( tau * -0.3 )
							+ phase.z * ( CL_MS / pow2( 1.0 + 0.1 * tau ) ) + ph3 * exp( tau * -0.03 ) ) * msV;
						// skylight occlusion: two broad upward probes (125 m, 600 m) of the filtered density
						let pu1 = cloudsSheared( pr + vec3f( 0.0, 125.0, 0.0 ) ); let pu2 = cloudsSheared( pr + vec3f( 0.0, 600.0, 0.0 ) );
						let skyTau = ( clMeanDensity( cloudsBase( pu1, w ) ) * 250.0 + clMeanDensity( cloudsBase( pu2, cloudsWeather( pu2.xz ) ) ) * 700.0
							+ dens * 25.0 ) * cloudsParams.densityScale;
						let skyVis = 0.3 + 0.7 / ( skyTau * 0.35 + 1.0 );
						// darker bases (their direct light is scattered away by the cloud above)
						let baseShadow = mix( 0.55, 1.0, smoothstep( -0.1, 0.45, b.y ) );
						let depthP = pow( dens, mix( 0.5, 1.6, b.y ) ) * 0.95 + 0.05;
						let vertP = pow( smoothstep( 0.02, 0.2, b.y ), 0.8 ) * 0.85 + 0.15;
						let powder = mix( 1.0, depthP * vertP, powderK );
						// ambient: the sky lights the tops; the bases only see the dark sea and the
						// horizon (darker, bluer), and crevices of the detail noise are occluded
						let up = sat( b.y * 1.4 );
						let ambH = mix( vec3f( 0.45, 0.5, 0.58 ), vec3f( 1.0 ), sqrt( up ) ) * skyVis * ( er.y * 0.75 + 0.42 );
						// after sunset the tops stay lit longest
						let alt = pr.y + dot( pr.xz, pr.xz ) / ${H(2*qi)};
						let S = sunE * ( sun * powder * baseShadow * ( er.y * 0.5 + 0.5 ) * cloudsEarthShadow( light, alt, pr.xz ) ) + amb * ambH
							+ bounce * ( 1.0 - up );
						let Tstep = exp( - sig * ds );
						let tap = exp( t * ${H(-1/va)} );
						let dT = T * ( 1.0 - Tstep );
						L += S * dT * tap;
						opac += dT * tap;
						tAcc += t * dT;
						wAcc += dT;
						T *= Tstep;
					}
				}

				t += ds;
				if ( fineSteps == 0 ) {
					t = cloudsSnapCoarse${e}( t, true, jitter, k0 );
				}
			}
		}
	}

	var m: CloudsMarch;
	m.depth = select( t0 + 4000.0, tAcc / max( wAcc, 1e-4 ), wAcc > 1e-4 );
	// aerial perspective: the haze in front of distant clouds shows sky light where the cloud
	// hides the sky (sky luminance times the hidden fraction not reached by the cloud's light)
	// the march stops at 98.5% opacity: the rest counts as opaque (the sun disc must not shine through)
	let Tc = sat( ( T - 0.015 ) / 0.985 );
	let haze = 1.0 - Tc - opac;
	m.L = L + atmosphereSkyLuminance( rd ) * max( haze, 0.0 );
	m.T = Tc;
	return m;
}
`}async function Oa(e,t){if(globalThis.__assetImage)return globalThis.__assetImage(e,t);let n=await createImageBitmap(new Blob([e],{type:t}),{colorSpaceConversion:`none`,premultiplyAlpha:`none`}),r=new OffscreenCanvas(n.width,n.height).getContext(`2d`,{willReadFrequently:!0});r.drawImage(n,0,0);let i=n.width,a=n.height,o=r.getImageData(0,0,i,a).data;return n.close&&n.close(),{data:new Uint8Array(o.buffer,o.byteOffset,o.byteLength),width:i,height:a}}var ka=e=>{let t=Number(e).toString();return/[.eE]/.test(t)?t:t+`.0`},Aa=Math.PI/180,ja={atmosphere:{multipleScattering:.99},shape:{altitude:4e3,thickness:5200,density:.019,coverage:.49,horizonCoverageStart:2e4,horizonCoverageRamp:45e3,horizonCoverageAmount:.12,edgeSoftness:.095,edgeSoftnessFalloff:1,weatherScale:29e3,baseScale:7500,baseStrength:.69,erosionScaleBaseMultiplier:.13,erosionStrengthBase:.24,erosionStrengthPeak:2.15,erosionShape:1,baseWeatherStrength:.54,baseWeatherHeightStart:0,baseWeatherHeightEnd:.13},lighting:{scatteringAlbedo:1,powderStrength:.7,ambientIntensity:.7,groundBounceAlbedo:[.009134058699157796,.015208514418949472,.018500220124016652],baseShadowStrength:.88,baseShadowHeight:.13,moonGain:.65},wind:{speed:12,evolutionSpeed:60.8*12/89,skew:1750},fade:{hazeDensityScale:.62,horizonMeltStart:25e3,horizonMeltEnd:45e3},weather:{resolution:1024,mainMass:[4,5,0,1.32],detail:[6,6,1,.13],coverage:.26}},Ma={historyDivisor:2,lattice:4,maxSteps:256,lightTaps:6,stepMeters:25,fullLightingAlpha:.5,lightReuseSteps:3,historyWeight:.9},Na=512,Pa=160,Fa=4,Ia=256,La=3e4,Ra=()=>[0,0,0,0],za=`
const SC_EARTH: f32 = 6371.0;
const SC_FAR: f32 = 250000.0;
const SC_AP_DIST: f32 = ${ka(La)};

fn scRay( uv: vec2f ) -> vec3f {
	let ndc = vec2f( uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0 );
	return normalize( scf.forward.xyz + scf.right.xyz * ( ndc.x * scf.right.w * scf.position.w )
		+ scf.up.xyz * ( ndc.y * scf.position.w ) );
}
fn scSourceUV( pixel: vec2f ) -> vec2f {
	return ( pixel * scf.sampling.z + scf.sampling.xy + 0.5 ) / scf.viewport.zw;
}
fn scProjectPrevious( p: vec3f ) -> vec3f {
	let v = p - scf.previousPosition.xyz;
	let z = dot( v, scf.previousForward.xyz );
	let denom = max( z, 0.001 ) * scf.previousPosition.w;
	return vec3f( vec2f( dot( v, scf.previousRight.xyz ) / ( denom * scf.previousRight.w ),
		-dot( v, scf.previousUp.xyz ) / denom ) * 0.5 + 0.5, z );
}
fn scHG( mu: f32, g: f32 ) -> f32 {
	let d = max( 1.0 + g * g - 2.0 * g * mu, 0.001 );
	return ( 1.0 - g * g ) / ( 4.0 * PI * d * sqrt( d ) );
}
// normalized droplet phase: 80% forward / 20% backscatter; each higher order halves the asymmetry
fn scPhases( mu: f32 ) -> vec3f {
	return vec3f( scHG( mu, 0.8 ), scHG( mu, 0.4 ), scHG( mu, 0.2 ) ) * 0.8
		+ vec3f( scHG( mu, -0.2 ), scHG( mu, -0.1 ), scHG( mu, -0.05 ) ) * 0.2;
}

// ---- density (sky-pro density.wgsl)
struct ScCandidate {
	conservative: f32, edge: f32, top: f32, floorMask: f32,
	shellHeight: f32, localHeight: f32, coverage: f32, position: vec3f,
};
fn scShellHeight( p: vec3f ) -> f32 {
	let horizontal = p.xz - scf.position.xz;
	// parabolic radial height avoids subtracting two ~6,371,000 m f32 values
	let altitude = p.y + dot( horizontal, horizontal ) / ( 2.0 * SC_EARTH * 1000.0 );
	return ( altitude - scs.shell.x ) / scs.shell.y;
}
fn scConeLod( footprint: f32, scale: f32 ) -> f32 { return max( 0.0, log2( max( footprint * 64.0 / scale, 1.0 ) ) ); }
fn scCandidate( p: vec3f, coverage: f32, lod: f32 ) -> ScCandidate {
	let h = scShellHeight( p );
	var result: ScCandidate;
	result.conservative = 0.0;
	if ( h < -0.1 || h > 1.3 || coverage <= 0.0 ) { return result; }
	let windDirection = scs.wind.xy;
	let shapePosition = p - vec3f( scf.wind.x, 0.0, scf.wind.y )
		- vec3f( windDirection.x, 0.0, windDirection.y ) * ( scs.wind.z * max( h, 0.0 ) - scf.wind.z );
	let weather = textureSampleLevel( scWeatherMap, smpLinearRepeat, ( p.xz - scf.wind.xy ) / scs.shape.x, 0.0 ).r;
	let edge = max( scs.base.y * exp2( -max( h, 0.0 ) * scs.base.z ), 0.0001 );
	// an all-one noise sample bounds top dilation; a failed bound avoids the volume fetch
	let maximumTop = weather + coverage - 1.0 + 1.34 * scs.shape.z * coverage;
	if ( maximumTop < h - edge ) { return result; }
	let required = ( 1.0 - smoothstep( scs.base.w, max( scs.erosion.w, scs.base.w + 0.001 ), h ) ) * scs.base.x;
	let floorMask = smoothstep( required - 0.1, required, weather );
	if ( floorMask <= 0.0 ) { return result; }
	let baseSample = textureSampleLevel( scNoise, smpLinearRepeat, shapePosition / scs.shape.y, lod ).rgb;
	let dilation = dot( baseSample, vec3f( 0.7, 0.41, 0.23 ) ) * scs.shape.z;
	let top = weather + coverage - 1.0 + dilation * coverage;
	result.conservative = smoothstep( -edge, edge, top - h ) * smoothstep( -edge, edge, h ) * floorMask;
	result.edge = edge; result.top = top; result.floorMask = floorMask;
	result.shellHeight = h; result.localHeight = clamp( h / max( top, 0.001 ), 0.0, 1.0 );
	result.coverage = coverage; result.position = shapePosition;
	return result;
}
fn scErodedDensity( c: ScCandidate, lod: f32 ) -> f32 {
	if ( c.conservative <= 0.0 ) { return 0.0; }
	let strength = mix( scs.erosion.x, scs.erosion.y, c.localHeight );
	let maximumErosion = 0.173 * strength * c.coverage;
	if ( min( c.top - c.shellHeight, c.shellHeight ) >= maximumErosion + c.edge ) { return c.floorMask; }
	let s = textureSampleLevel( scNoise, smpLinearRepeat, c.position / ( scs.shape.y * scs.shape.w ), lod ).rgb;
	let field = mix( 1.0 - s, s, scs.erosion.z );
	let erosion = dot( field, vec3f( 0.113, 0.04, 0.02 ) ) * strength * c.coverage;
	return smoothstep( -c.edge, c.edge, c.top - erosion - c.shellHeight )
		* smoothstep( -c.edge, c.edge, c.shellHeight - erosion ) * c.floorMask;
}
fn scLightDensity( p: vec3f, coverage: f32, lods: vec2f, cheap: bool ) -> f32 {
	let c = scCandidate( p, coverage, lods.x );
	if ( cheap ) { return c.conservative; }
	return scErodedDensity( c, lods.y );
}
fn scShellRoots( direction: vec3f, altitude: f32, originHeight: f32 ) -> vec2f {
	let radius = SC_EARTH * 1000.0;
	let b = ( radius + originHeight ) * direction.y;
	let c = ( originHeight - altitude ) * ( 2.0 * radius + originHeight + altitude );
	let h = b * b - c;
	if ( h < 0.0 ) { return vec2f( -1.0 ); }
	let q = -b - select( -sqrt( h ), sqrt( h ), b >= 0.0 );
	let other = c / select( -0.0001, q, abs( q ) > 0.0001 );
	return vec2f( min( q, other ), max( q, other ) );
}
fn scCloudInterval( dir: vec3f, originHeight: f32 ) -> vec2f {
	let inner = scShellRoots( dir, scs.shell.x, originHeight );
	let outer = scShellRoots( dir, scs.shell.x + scs.shell.y, originHeight );
	var start = 0.0; var end = min( outer.y, SC_FAR );
	if ( outer.y <= 0.0 ) { return vec2f( 0.0 ); }
	if ( originHeight < scs.shell.x ) { start = max( inner.y, 0.0 ); }
	else {
		if ( originHeight > scs.shell.x + scs.shell.y ) { start = max( outer.x, 0.0 ); }
		if ( inner.x >= 0.0 ) { end = min( end, inner.x ); }
	}
	let ground = scShellRoots( dir, 0.0, originHeight );
	if ( ground.x > 0.0 ) { end = min( end, ground.x ); }
	return vec2f( start, end );
}
`,Ba=`
fn scCoverageAt( t: f32 ) -> f32 {
	return scs.shell.w + scs.horizon.z * smoothstep( scs.horizon.x, scs.horizon.x + max( scs.horizon.y, 1.0 ), t );
}
fn scHeightAlongRay( t: f32, dir: vec3f, originHeight: f32 ) -> f32 {
	let altitude = originHeight + dir.y * t + dot( dir.xz, dir.xz ) * t * t / ( 2.0 * SC_EARTH * 1000.0 );
	return ( altitude - scs.shell.x ) / scs.shell.y;
}
fn scCellIsEmpty( t: f32, end: f32, dir: vec3f, originHeight: f32, maximumWeather: f32 ) -> bool {
	let turningPoint = -dir.y * SC_EARTH * 1000.0 / max( dot( dir.xz, dir.xz ), 0.000001 );
	let minHeight = scHeightAlongRay( clamp( turningPoint, t, end ), dir, originHeight );
	let maxHeight = max( scHeightAlongRay( t, dir, originHeight ), scHeightAlongRay( end, dir, originHeight ) );
	let coverage = scCoverageAt( end );
	let maximumTop = maximumWeather + coverage - 1.0 + 1.34 * scs.shape.z * coverage;
	let edgeHeight = select( maxHeight, minHeight, scs.base.z >= 0.0 );
	let edge = max( scs.base.y * exp2( -max( edgeHeight, 0.0 ) * scs.base.z ), 0.0001 );
	let required = ( 1.0 - smoothstep( scs.base.w, max( scs.erosion.w, scs.base.w + 0.001 ), maxHeight ) ) * scs.base.x;
	return maximumTop < minHeight - edge || maximumWeather <= required - 0.1;
}
fn scLightOpticalDepth( p: vec3f, coverage: f32, lods: vec2f, cheap: bool ) -> f32 {
	var opticalDepth = 0.0;
	for ( var i = 1u; i < 8u; i++ ) {
		if ( i >= u32( scf.march.z ) ) { break; }
		let tap = scf.lightOffsets[ i ];
		opticalDepth += scLightDensity( p + tap.xyz, coverage, max( lods, scf.lightLods[ i ].xy ), cheap ) * tap.w * scs.shell.z;
		if ( opticalDepth >= 32.0 ) { break; }
	}
	return opticalDepth;
}
fn scLightEnergy( opticalDepth: f32, phase: vec3f ) -> f32 {
	let quarter = exp( -opticalDepth * 0.25 );
	let halfT = quarter * quarter;
	return dot( vec3f( halfT * halfT, halfT * 0.5, quarter * 0.25 ), phase );
}

// Tidewater's sky (the atmosphere's sky view LUT; the night sky's ambient)
fn scSky( dir: vec3f ) -> vec3f {
	return atmosphereSkyLuminance( dir ) + frame.skyIrradiance * frame.night;
}
// key light: the sun while it is the app's key light, seen from cloud altitude, else the moon
fn scDirect() -> vec3f {
	let isMoon = dot( frame.sunDir, atmosphereParams.sunDir ) < 0.9999;
	let sunE = atmosphereSampleTransmittance( 6360.0 + scs.shell.x * 0.001, frame.sunDir.y ) * atmosphereParams.sunIlluminance;
	return select( sunE, frame.sunColor, isMoon );
}

struct ScMarch { color: vec3f, alpha: f32, depth: f32, steps: u32 };

fn scMarch( origin: vec3f, dir: vec3f, dither: f32, pixelConeAngle: f32, stepConeAngle: f32, maxSteps: u32, useBounds: bool ) -> ScMarch {
	var out: ScMarch;
	out.color = vec3f( 0.0 ); out.alpha = 0.0; out.depth = SC_FAR; out.steps = 0u;
	let interval = scCloudInterval( dir, origin.y );
	var color = vec3f( 0.0 ); var transmission = 1.0; var weightedDepth = 0.0;
	var steps = 0u;
	if ( interval.y > interval.x && scs.shell.w > 0.0 && scs.shell.z > 0.0 ) {
		let L = frame.sunDir;
		let lightCosine = dot( dir, L );
		let phase = scPhases( lightCosine );
		let direct = scDirect();
		let zenith = scSky( vec3f( 0.0, 1.0, 0.0 ) );
		let horizon = scSky( normalize( vec3f( L.x, 0.03, L.z ) + vec3f( 1e-5, 0.0, 0.0 ) ) );
		let bounce = scs.bounce.rgb * direct * max( L.y, 0.0 );
		var t = interval.x + dither * scf.march.x;
		var coarse = true; var emptyRun = 0u; var accumulatedDepth = 0.0;
		var refineEnd = -1.0;
		var cellEnd = -1.0; var cellStart = -1.0; var maximumWeather = 1.0;
		var shadowAt = -SC_FAR; var shadowDensity = -1.0; var shadowTau = 0.0; var skyTau = 0.0; var shadowCheap = false;
		let hasDirectLight = max( direct.x, max( direct.y, direct.z ) ) > 0.00001;
		for ( var i = 0u; i < maxSteps; i++ ) {
			if ( t >= interval.y || transmission < 0.003 ) { break; }
			steps++;
			if ( coarse && useBounds ) {
				if ( t >= cellEnd || t < cellStart ) {
					let size = vec2i( textureDimensions( scWeatherBounds ) );
					let grid = ( origin.xz + dir.xz * t - scf.wind.xy ) / scs.shape.x * vec2f( size );
					let cell = vec2i( floor( grid ) );
					maximumWeather = textureLoad( scWeatherBounds, ( ( cell % size ) + size ) % size, 0 ).r;
					let distance = select( fract( grid ), 1.0 - fract( grid ), dir.xz >= vec2f( 0.0 ) )
						/ max( abs( dir.xz ) * vec2f( size ) / scs.shape.x, vec2f( 0.0000001 ) );
					cellStart = t; cellEnd = min( interval.y, t + max( min( distance.x, distance.y ), 0.05 ) );
				}
				if ( scCellIsEmpty( t, cellEnd, dir, origin.y, maximumWeather ) ) { t = cellEnd + 0.05; continue; }
			}
			let footprint = t * pixelConeAngle;
			let fineStep = max( scf.march.x, t * stepConeAngle * 1.5 );
			let p = origin + dir * t;
			let coverage = scCoverageAt( t );
			let baseLod = scConeLod( footprint, scs.shape.y );
			let c = scCandidate( p, coverage, baseLod );
			let erosionLod = scConeLod( footprint, scs.shape.y * scs.shape.w );
			if ( coarse ) {
				if ( c.conservative > 0.0 ) {
					if ( scErodedDensity( c, erosionLod ) > 0.0 ) {
						refineEnd = t;
						t = max( interval.x, t - fineStep * 4.0 ) + fineStep;
						t = min( t, refineEnd );
						coarse = false; emptyRun = 0u;
						continue;
					}
				}
				t += fineStep * 4.0;
				continue;
			}
			let density = scErodedDensity( c, erosionLod );
			if ( density <= 0.0 ) {
				shadowAt = -SC_FAR;
				emptyRun++;
				if ( t < refineEnd ) { t = min( t + fineStep, refineEnd ); continue; }
				if ( emptyRun >= 4u ) { coarse = true; }
				t += select( fineStep, fineStep * 4.0, coarse ); continue;
			}
			emptyRun = 0u; refineEnd = -1.0;
			let sigmaT = density * scs.shell.z;
			let surfaceStep = clamp( 0.5 / max( sigmaT, 0.000001 ), fineStep * 0.15, fineStep );
			let stepLength = min( mix( surfaceStep, fineStep * 3.0, smoothstep( 1.0, 3.0, accumulatedDepth ) ), interval.y - t );
			let height = clamp( c.shellHeight, 0.0, 1.0 );
			let baseShadow = mix( 1.0, mix( 0.15, 1.0, smoothstep( 0.0, max( scs.shadow.y, 0.001 ), height ) ), scs.shadow.x );
			// darken thin margins away from the sun; keep the forward scattered silver linings
			let powderWeight = scs.cloudLight.y * ( 1.0 - smoothstep( 0.2, 0.95, lightCosine ) );
			let powder = mix( 1.0, 1.0 - exp( -density * 2.0 ), powderWeight );
			var energy = 0.0;
			let cheap = ( 1.0 - transmission ) >= scf.march.w;
			let reuseDistance = min( fineStep * scf.display.y, max( 20.0, scs.shape.y * scs.shape.w * 0.03 ) );
			if ( abs( t - shadowAt ) >= reuseDistance || abs( density - shadowDensity ) > 0.08 || cheap != shadowCheap ) {
				let lods = vec2f( baseLod, erosionLod );
				if ( hasDirectLight ) { shadowTau = scLightOpticalDepth( p, coverage, lods, cheap ); }
				let skyLods = lods + vec2f( 1.0 );
				skyTau = ( scLightDensity( p + vec3f( 0.0, 125.0, 0.0 ), coverage, skyLods, true ) * 250.0
					+ scLightDensity( p + vec3f( 0.0, 600.0, 0.0 ), coverage, skyLods, true ) * 700.0 ) * scs.shell.z;
				shadowAt = t; shadowDensity = density; shadowCheap = cheap;
			}
			if ( hasDirectLight ) {
				energy = scLightEnergy( shadowTau + sigmaT * scf.lightOffsets[ 0 ].w, phase );
			}
			let skyVisibility = 0.2 + 0.8 / ( 1.0 + ( skyTau + sigmaT * 25.0 ) * 0.35 );
			let ambient = ( mix( mix( zenith, horizon, 0.55 ), zenith, sqrt( height ) ) * skyVisibility + bounce * ( 1.0 - height ) )
				* scs.cloudLight.z * ( 1.0 + scs.cloudLight.w );
			let light = ( direct * energy * powder * baseShadow + ambient ) * scs.cloudLight.x;
			let stepT = exp( -sigmaT * stepLength );
			let alpha = transmission * ( 1.0 - stepT );
			color += alpha * light; weightedDepth += alpha * t;
			transmission *= stepT; accumulatedDepth += sigmaT * stepLength; t += stepLength;
		}
	}
	let alpha = 1.0 - transmission;
	var depth = SC_FAR;
	if ( alpha > 0.0 ) {
		depth = weightedDepth / alpha;
		// aerial perspective (distance toward the sky behind), then the far melt into the sky
		let sky = scSky( dir );
		let ap = exp( -depth / SC_AP_DIST );
		color = color * ap + sky * alpha * ( 1.0 - ap );
		let melt = smoothstep( scs.fade.y, max( scs.fade.z, scs.fade.y + 1.0 ), depth );
		color = mix( color, sky * alpha, melt );
	}
	out.color = color; out.alpha = alpha; out.depth = depth; out.steps = steps;
	return out;
}
`,Va=`
fn scHash33( cell: vec3u ) -> vec3u {
	var p = cell * 1664525u + 1013904223u;
	p.x += p.y * p.z; p.y += p.z * p.x; p.z += p.x * p.y;
	p = p ^ ( p >> vec3u( 16u ) );
	p.x += p.y * p.z; p.y += p.z * p.x; p.z += p.x * p.y;
	return p;
}
fn scGradient( cell: vec3i, period: i32, offset: vec3f ) -> f32 {
	let wrapped = vec3u( ( ( cell % vec3i( period ) ) + vec3i( period ) ) % vec3i( period ) );
	let h = ( scHash33( wrapped ).x >> 24u ) & 15u;
	let u = select( offset.y, offset.x, h < 8u );
	let v = select( select( offset.z, offset.x, h == 12u || h == 14u ), offset.y, h < 4u );
	return select( -u, u, ( h & 1u ) == 0u ) + select( -v, v, ( h & 2u ) == 0u );
}
fn scPerlin( p: vec3f, period: i32 ) -> f32 {
	let cell = vec3i( floor( p ) ); let fr = fract( p ); let w = fr * fr * fr * ( fr * ( fr * 6.0 - 15.0 ) + 10.0 );
	return mix( mix( mix( scGradient( cell, period, fr ), scGradient( cell + vec3i( 1, 0, 0 ), period, fr - vec3f( 1, 0, 0 ) ), w.x ),
		mix( scGradient( cell + vec3i( 0, 1, 0 ), period, fr - vec3f( 0, 1, 0 ) ), scGradient( cell + vec3i( 1, 1, 0 ), period, fr - vec3f( 1, 1, 0 ) ), w.x ), w.y ),
		mix( mix( scGradient( cell + vec3i( 0, 0, 1 ), period, fr - vec3f( 0, 0, 1 ) ), scGradient( cell + vec3i( 1, 0, 1 ), period, fr - vec3f( 1, 0, 1 ) ), w.x ),
		mix( scGradient( cell + vec3i( 0, 1, 1 ), period, fr - vec3f( 0, 1, 1 ) ), scGradient( cell + vec3i( 1, 1, 1 ), period, fr - vec3f( 1, 1, 1 ) ), w.x ), w.y ), w.z );
}
fn scFbm( uv: vec2f, profile: vec4f ) -> f32 {
	var frequency = max( 1.0, round( profile.x ) ); var weight = 0.5;
	var sum = 0.0; var weights = 0.0;
	for ( var i = 0u; i < u32( profile.y ); i++ ) {
		sum += scPerlin( vec3f( uv, profile.z * 13.37 + 0.5 ) * frequency, i32( frequency ) ) * weight;
		weights += weight; weight *= 0.5; frequency *= 2.0;
	}
	return sum / max( weights, 0.001 ) * 0.5 + 0.5;
}
`,Ha=class{constructor(e,t){this.renderer=e,this.atmosphere=t;let n=ja,r=n.shape,i=n.lighting;this.frameBlock=new L(`SkyCloudFrame`,{position:[`vec4f`,Ra()],right:[`vec4f`,Ra()],up:[`vec4f`,Ra()],forward:[`vec4f`,Ra()],previousPosition:[`vec4f`,Ra()],previousRight:[`vec4f`,Ra()],previousUp:[`vec4f`,Ra()],previousForward:[`vec4f`,Ra()],viewport:[`vec4f`,Ra()],sampling:[`vec4f`,Ra()],clock:[`vec4f`,Ra()],wind:[`vec4f`,Ra()],windDelta:[`vec4f`,Ra()],march:[`vec4f`,Ra()],temporal:[`vec4f`,Ra()],display:[`vec4f`,Ra()],pano:[`vec4f`,Ra()],shadow:[`vec4f`,Ra()],lightOffsets:[`vec4f[8]`,new Float32Array(32)],lightLods:[`vec4f[8]`,new Float32Array(32)]},{label:`sky clouds frame`}),this.settingsBlock=new L(`SkyCloudSettings`,{shell:[`vec4f`,[r.altitude,r.thickness,r.density,r.coverage]],shape:[`vec4f`,[r.weatherScale,r.baseScale,r.baseStrength,r.erosionScaleBaseMultiplier]],erosion:[`vec4f`,[r.erosionStrengthBase,r.erosionStrengthPeak,r.erosionShape,r.baseWeatherHeightEnd]],base:[`vec4f`,[r.baseWeatherStrength,r.edgeSoftness,Math.log2(Math.max(r.edgeSoftnessFalloff,.001))*r.thickness*.001,r.baseWeatherHeightStart]],horizon:[`vec4f`,[r.horizonCoverageStart,r.horizonCoverageRamp,r.horizonCoverageAmount,0]],cloudLight:[`vec4f`,[i.scatteringAlbedo,i.powderStrength,i.ambientIntensity,n.atmosphere.multipleScattering]],shadow:[`vec4f`,[i.baseShadowStrength,i.baseShadowHeight,i.moonGain,0]],bounce:[`vec4f`,[...i.groundBounceAlbedo,0]],wind:[`vec4f`,[0,1,n.wind.skew,0]],fade:[`vec4f`,[n.fade.hazeDensityScale,n.fade.horizonMeltStart,n.fade.horizonMeltEnd,0]],weatherMass:[`vec4f`,n.weather.mainMass.slice()],weatherDetail:[`vec4f`,n.weather.detail.slice()],weather:[`vec4f`,[n.weather.coverage,0,0,0]]},{label:`sky clouds settings`}),this.F=this.frameBlock.fields,this.S=this.settingsBlock.fields,this.coverage={value:r.coverage},this.resolutionScale=1,this.outputSize=null,this.noise=new I({label:`cloud shape noise 64³`,width:64,height:64,depth:64,dimension:`3d`,format:`rgba8unorm`,usage:[`sample`,`copyDst`]}),this.blue=new I({label:`cloud blue noise`,width:64,height:64,format:`r8unorm`,usage:[`sample`,`copyDst`]});let a=n.weather.resolution;this.weatherMap=new I({label:`cloud weather`,width:a,height:a,format:`rgba8unorm`,usage:[`sample`,`storage`]}),this.weatherBounds=new I({label:`cloud weather bounds`,width:64,height:64,format:`rgba8unorm`,usage:[`sample`,`storage`]});let o=(e,t=4,n=4,r=`rgba16float`)=>new I({label:e,width:t,height:n,format:r,usage:[`sample`,`storage`]});this.source=o(`cloud radiance`),this.sourceMeta=o(`cloud depth + cost`),this.colors=[o(`cloud history A`),o(`cloud history B`)],this.metas=[o(`cloud history meta A`),o(`cloud history meta B`)],this.panorama=o(`cloud panorama`,Na,Pa),this.shadowMap=o(`cloud shadow`,Ia,Ia,`r32float`),this._pp=0,this.viewTex=this.colors[0],this.ready=this._loadNoise(),this._buildModules(),this._buildKernels(),this._w=0,this._h=0,this._scale=1,this.sourceWidth=1,this.sourceHeight=1,this.historyWidth=1,this.historyHeight=1,this.frameIndex=0,this.historyValid=!1,this.weatherDirty=!0,this.panoWarm=!0,this._windX=0,this._windZ=0,this._evolution=0,this._elapsed=0,this._prevCam=null,this._prevLight=new A,this._lastCoverage=-1}async _loadNoise(){let e=async e=>{let t=await fetch(`./clouds/`+e);if(!t.ok)throw Error(`clouds: ${e} HTTP ${t.status}`);return t},[t,n]=await Promise.all([e(`baseShape64.dat`),e(`blueNoise.dat`)]),r=new Uint8Array(await new Response(t.body.pipeThrough(new DecompressionStream(`gzip`))).arrayBuffer()),i=new DataView(r.buffer,r.byteOffset,r.byteLength);if(i.getUint32(0,!0)!==828004942)throw Error(`clouds: bad noise blob`);let a=[i.getUint16(6,!0),i.getUint16(8,!0),i.getUint16(10,!0)],o=i.getUint8(12),s=this.noise;s.gpu=F.device.createTexture({label:s.label,dimension:`3d`,size:a,mipLevelCount:o,format:`rgba8unorm`,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),s.mipsOption=o,s._views.clear(),s.version++;let c=16;for(let e=0;e<o;e++){let t=a.map(t=>Math.max(1,t>>e)),n=t[0]*t[1]*t[2]*4;F.queue.writeTexture({texture:s.gpu,mipLevel:e},r,{offset:c,bytesPerRow:t[0]*4,rowsPerImage:t[1]},t),c+=n}this.blue.upload(new Uint8Array(await n.arrayBuffer()))}_buildModules(){let e=this.atmosphere;this.uniformModule=new R({name:`skyCloudsUniforms`,deps:[z],bindings:{scf:{uniform:this.frameBlock},scs:{uniform:this.settingsBlock}}}),this.coreModule=new R({name:`skyCloudsCore`,deps:[this.uniformModule],bindings:{scNoise:{texture:this.noise},scWeatherMap:{texture:this.weatherMap}},code:za}),this.marchModule=new R({name:`skyCloudsMarch`,deps:[this.coreModule,e.module,e.transmittanceModule],bindings:{scWeatherBounds:{texture:this.weatherBounds}},code:Ba}),this.params=new L(`CloudsParams`,{viewRight:[`vec3f`,new A(1,0,0)],viewUp:[`vec3f`,new A(0,1,0)],viewFwd:[`vec3f`,new A(0,0,-1)],viewTan:[`vec2f`,new E(1,1)],viewValid:[`f32`,0],shadowCenter:[`vec2f`,new E],shadowSize:[`f32`,12e3],shadowStrength:[`f32`,.85]},{label:`clouds`});let t=this.params.fields;this.viewCam={right:t.viewRight,up:t.viewUp,fwd:t.viewFwd,tan:t.viewTan},this.viewValid=t.viewValid,this.shadowCenter=t.shadowCenter,this.shadowSize=t.shadowSize,this.shadowStrength=t.shadowStrength,this.shadowModule=new R({name:`cloudsShadow`,deps:[z],uniforms:this.params,uniformName:`cloudsParams`,bindings:{cloudsShadowMap:{texture:this.shadowMap}},code:`
// cloud shadow transmittance (1 = clear) at a world position. Manual bilinear filtering of an
// unfilterable texture: costs no sampler in the (sampler hungry) scene materials.
fn cloudsShadowTap( i: vec2i ) -> f32 { return textureLoad( cloudsShadowMap, clamp( i, vec2i( 0 ), vec2i( 255 ) ), 0 ).x; }
// (the last lookup is remembered: the scene lighting hooks ask for the same point several times)
var<private> cloudsShadowMemoXZ: vec2f = vec2f( 3.0e38 );
var<private> cloudsShadowMemo: f32 = 1.0;
fn cloudsShadow( worldXZ: vec2f ) -> f32 {
	if ( all( worldXZ == cloudsShadowMemoXZ ) ) { return cloudsShadowMemo; }
	cloudsShadowMemoXZ = worldXZ;
	cloudsShadowMemo = _cloudsShadow( worldXZ );
	return cloudsShadowMemo;
}
fn _cloudsShadow( worldXZ: vec2f ) -> f32 {
	let uv = ( worldXZ - cloudsParams.shadowCenter ) / cloudsParams.shadowSize + 0.5;
	let st = uv * ${ka(Ia)} - 0.5;
	let i0 = vec2i( floor( st ) );
	let fr = fract( st );
	let s = mix( mix( cloudsShadowTap( i0 ), cloudsShadowTap( i0 + vec2i( 1, 0 ) ), fr.x ), mix( cloudsShadowTap( i0 + vec2i( 0, 1 ) ), cloudsShadowTap( i0 + vec2i( 1, 1 ) ), fr.x ), fr.y );
	let e = abs( uv - 0.5 );
	let inside = smoothstep( 0.5, 0.42, max( e.x, e.y ) );
	return mix( 1.0, s, cloudsParams.shadowStrength * inside );
}
`}),this.module=new R({name:`clouds`,deps:[z,this.shadowModule],uniforms:this.params,uniformName:`cloudsParams`,bindings:{cloudsPanorama:{texture:this.panorama},cloudsView:{texture:()=>this.viewTex}},code:`
// vec4( rgb in-scattered radiance, a transmittance ) for a view direction (panorama)
fn cloudsSample( dir: vec3f ) -> vec4f {
	let az = atan2( dir.z, dir.x );
	let u = fract( az / ${ka(2*Math.PI)} );
	let elev = - acos( clamp( dir.y, -1.0, 1.0 ) ) + ${ka(Math.PI/2)};
	let t = clamp( ( elev + ${ka(4*Aa)} ) / ${ka(94*Aa)}, 0.0, 1.0 );
	let s = textureSampleLevel( cloudsPanorama, smpLinearRepeat, vec2f( u, sqrt( t ) ), 0.0 );
	let below = smoothstep( -0.07, -0.03, dir.y );
	return vec4f( s.rgb * below, mix( 1.0, s.a, below ) );
}

// Transmittance for the sun's disc behind the clouds. The cloud march stops once less than 0.3 % of
// the light gets through and reports that remainder, which (noisy from frame to frame) let a
// clamped sun disc of 2500x the sky shine and sparkle through thick cloud: below ~0.4 % it is dark.
fn cloudsSunTransmittance( T: f32 ) -> f32 { return T * smoothstep( 0.004, 0.04, T ); }

// The main view's clouds: the temporally reconstructed half resolution history, looked up with the
// camera it was resolved for; outside it (or before any trace) the panorama
fn cloudsSampleView( dir: vec3f ) -> vec4f {
	let x = dot( dir, cloudsParams.viewRight );
	let y = dot( dir, cloudsParams.viewUp );
	let z = dot( dir, cloudsParams.viewFwd );
	let uv = vec2f( x / max( z, 1e-4 ) / cloudsParams.viewTan.x * 0.5 + 0.5, 0.5 - y / max( z, 1e-4 ) / cloudsParams.viewTan.y * 0.5 );
	let inside = cloudsParams.viewValid > 0.5 && z > 0.01 && all( uv >= vec2f( 0.0 ) ) && all( uv <= vec2f( 1.0 ) );
	if ( inside ) {
		let v = max( textureSampleLevel( cloudsView, smpLinearClamp, uv, 0.0 ), vec4f( 0.0 ) );
		let above = smoothstep( -0.05, -0.03, dir.y );
		return vec4f( v.rgb * above, 1.0 - min( v.a, 1.0 ) * above );
	}
	return cloudsSample( dir );
}
`})}_buildKernels(){let e=`@compute @workgroup_size( WG_X, WG_Y, WG_Z ) fn main( @builtin( global_invocation_id ) id: vec3u )`,t=(e,t,n,r)=>new yi({label:e,modules:t,bindings:n,code:r,workgroupSize:[8,8,1]});this.weatherKernel=t(`Cloud Weather`,[this.uniformModule],{scOut:{storageTexture:this.weatherMap}},Va+`
${e} {
	let size = textureDimensions( scOut );
	if ( any( id.xy >= size ) ) { return; }
	let uv = vec2f( id.xy ) / vec2f( size );
	let mass = clamp( ( scFbm( uv, scs.weatherMass ) - 0.5 ) * scs.weatherMass.w + 0.5, 0.0, 1.0 );
	let detail = ( scFbm( uv, scs.weatherDetail ) * 2.0 - 1.0 ) * scs.weatherDetail.w;
	textureStore( scOut, id.xy, vec4f( clamp( mass + detail + scs.weather.x - 0.5, 0.0, 1.0 ), 0.0, 0.0, 1.0 ) );
}`),this.boundsKernel=t(`Cloud Weather Bounds`,[this.coreModule],{scOut:{storageTexture:this.weatherBounds}},`
${e} {
	let size = textureDimensions( scOut );
	if ( any( id.xy >= size ) ) { return; }
	let sourceSize = vec2i( textureDimensions( scWeatherMap ) );
	let scale = vec2f( sourceSize ) / vec2f( size );
	// both bilinear neighbours at cell boundaries, including the repeat seam
	let lo = vec2i( floor( vec2f( id.xy ) * scale - 0.5 ) );
	let hi = vec2i( ceil( vec2f( id.xy + 1u ) * scale - 0.5 ) );
	var maximum = 0.0;
	for ( var y = lo.y; y <= hi.y; y++ ) {
		for ( var x = lo.x; x <= hi.x; x++ ) {
			let p = ( ( vec2i( x, y ) % sourceSize ) + sourceSize ) % sourceSize;
			maximum = max( maximum, textureLoad( scWeatherMap, p, 0 ).r );
		}
	}
	textureStore( scOut, id.xy, vec4f( min( 1.0, maximum + 1.0 / 255.0 ), 0.0, 0.0, 1.0 ) );
}`),this.traceKernel=t(`Clouds Trace`,[this.marchModule],{scBlue:{texture:this.blue},scOutColor:{storageTexture:this.source},scOutMeta:{storageTexture:this.sourceMeta}},`
${e} {
	let size = textureDimensions( scOutColor );
	if ( any( id.xy >= size ) ) { return; }
	let uv = scSourceUV( vec2f( id.xy ) );
	let dir = scRay( uv );
	let noise = textureLoad( scBlue, vec2i( id.xy % 64u ), 0 ).r;
	let dither = select( 0.5, fract( noise + scf.clock.x * 0.61803398875 ), scf.temporal.x > 0.0 );
	let pixelConeAngle = 2.0 * scf.position.w / scf.viewport.y;
	let stepConeAngle = 2.0 * scf.position.w / scf.viewport.w;
	let m = scMarch( scf.position.xyz, dir, dither, pixelConeAngle, stepConeAngle, u32( scf.march.y ), scf.display.y > 0.0 );
	textureStore( scOutColor, id.xy, vec4f( m.color, m.alpha ) );
	// km depth fits half float; the metadata also records the normalized primary sample cost
	textureStore( scOutMeta, id.xy, vec4f( m.depth * 0.001, 1.0, f32( m.steps ) / scf.march.y, 0.0 ) );
}`);let n=()=>this.colors[this._pp],r=()=>this.metas[this._pp],i=()=>this.colors[1-this._pp],a=()=>this.metas[1-this._pp];this.temporalKernel=new yi({label:`Clouds Resolve`,modules:[this.coreModule],workgroupSize:[8,8,1],bindings:{scCurrentColor:{texture:this.source},scCurrentMeta:{texture:this.sourceMeta},scPreviousColor:{texture:i},scPreviousMeta:{texture:a},scOutputColor:{storageTexture:n},scOutputMeta:{storageTexture:r}},code:`
var<workgroup> scTileColor: array<vec4f, 121>;
var<workgroup> scTileMeta: array<vec4f, 121>;
fn scSourceClamp( p: vec2i ) -> vec2i { return clamp( p, vec2i( 0 ), vec2i( textureDimensions( scCurrentColor ) ) - 1 ); }
fn scTileIndex( p: vec2i, origin: vec2i, width: u32 ) -> u32 {
	let local = vec2u( scSourceClamp( p ) - origin );
	return local.y * width + local.x;
}
fn scHistoryAt( uv: vec2f, size: vec2f ) -> vec4f {
	// five tap Catmull-Rom: detail survives repeated history warps
	let position = uv * size;
	let center = floor( position - 0.5 ) + 0.5;
	let fr = position - center;
	let w0 = fr * ( fr * ( -0.5 * fr + 1.0 ) - 0.5 );
	let w1 = fr * fr * ( 1.5 * fr - 2.5 ) + 1.0;
	let w2 = fr * ( fr * ( -1.5 * fr + 2.0 ) + 0.5 );
	let w3 = fr * fr * ( 0.5 * fr - 0.5 );
	let w12 = w1 + w2;
	let uv0 = ( center - 1.0 ) / size;
	let uv3 = ( center + 2.0 ) / size;
	let uv12 = ( center + w2 / w12 ) / size;
	let weights = vec4f( w12.x * w0.y, w0.x * w12.y, w12.x * w12.y, w3.x * w12.y );
	let bottomWeight = w12.x * w3.y;
	let value = textureSampleLevel( scPreviousColor, smpLinearClamp, vec2f( uv12.x, uv0.y ), 0.0 ) * weights.x
		+ textureSampleLevel( scPreviousColor, smpLinearClamp, vec2f( uv0.x, uv12.y ), 0.0 ) * weights.y
		+ textureSampleLevel( scPreviousColor, smpLinearClamp, uv12, 0.0 ) * weights.z
		+ textureSampleLevel( scPreviousColor, smpLinearClamp, vec2f( uv3.x, uv12.y ), 0.0 ) * weights.w
		+ textureSampleLevel( scPreviousColor, smpLinearClamp, vec2f( uv12.x, uv3.y ), 0.0 ) * bottomWeight;
	return value / ( dot( weights, vec4f( 1.0 ) ) + bottomWeight );
}
fn scFreshHistoryWeight( color: vec4f, depth: f32 ) -> f32 {
	let retain = select( mix( 0.25, 0.65, smoothstep( 8.0, 30.0, depth ) ), 0.25, color.a < 0.0001 );
	return min( scf.temporal.x, retain ) * ( 1.0 - scf.temporal.y );
}
fn scResolve( pixel: vec2u, color: vec4f, depth: f32, carriedDepth: f32, cost: f32, weight: f32 ) {
	textureStore( scOutputColor, pixel, vec4f( max( color.rgb, vec3f( 0.0 ) ), clamp( color.a, 0.0, 1.0 ) ) );
	textureStore( scOutputMeta, pixel, vec4f( depth, carriedDepth, cost, weight ) );
}
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) id: vec3u, @builtin( local_invocation_index ) thread: u32, @builtin( workgroup_id ) group: vec3u ) {
	let size = textureDimensions( scOutputColor );
	let tileWidth = u32( ceil( 8.0 / scf.sampling.z ) ) + 3u;
	let tileOrigin = vec2i( floor( ( vec2f( group.xy * 8u ) - scf.sampling.xy ) / scf.sampling.z ) ) - 1;
	for ( var index = thread; index < tileWidth * tileWidth; index += 64u ) {
		let p = scSourceClamp( tileOrigin + vec2i( i32( index % tileWidth ), i32( index / tileWidth ) ) );
		scTileColor[ index ] = textureLoad( scCurrentColor, p, 0 );
		scTileMeta[ index ] = textureLoad( scCurrentMeta, p, 0 );
	}
	workgroupBarrier();
	if ( any( id.xy >= size ) ) { return; }
	let uv = ( vec2f( id.xy ) + 0.5 ) / vec2f( size );
	let lattice = u32( scf.sampling.z );
	let fresh = all( id.xy % lattice == vec2u( scf.sampling.xy ) );
	let source = ( vec2f( id.xy ) - scf.sampling.xy ) / scf.sampling.z;
	let center = scSourceClamp( vec2i( round( source ) ) );
	let metadata = scTileMeta[ scTileIndex( center, tileOrigin, tileWidth ) ];
	let central = scTileColor[ scTileIndex( center, tileOrigin, tileWidth ) ];
	let currentDepth = max( metadata.x, 0.001 );
	let stored = textureLoad( scPreviousMeta, vec2i( id.xy ), 0 );
	let historyValid = scf.sampling.w > 0.5 && scf.temporal.x > 0.0;

	// a still view: untouched slots keep their colour and depth exactly
	if ( scf.temporal.z > 0.5 && historyValid && stored.y >= 0.001 ) {
		let history = textureLoad( scPreviousColor, vec2i( id.xy ), 0 );
		if ( fresh ) {
			let weight = scFreshHistoryWeight( central, currentDepth );
			scResolve( id.xy, mix( central, history, weight ), currentDepth, currentDepth, metadata.z, weight );
		} else {
			scResolve( id.xy, history, stored.x, stored.y, stored.z, 1.0 );
		}
		return;
	}

	var color = vec4f( 0.0 ); var weightSum = 0.0;
	let base = vec2i( floor( source ) ); let fraction = fract( source );
	for ( var y = 0; y < 2; y++ ) {
		for ( var x = 0; x < 2; x++ ) {
			let pos = scSourceClamp( base + vec2i( x, y ) );
			let index = scTileIndex( pos, tileOrigin, tileWidth );
			let tap = scTileColor[ index ]; let depth = scTileMeta[ index ].x;
			let bilinear = select( 1.0 - fraction.x, fraction.x, x == 1 ) * select( 1.0 - fraction.y, fraction.y, y == 1 );
			let weight = bilinear * exp( -abs( depth - metadata.x ) / max( 0.1, metadata.x * 0.1 ) - abs( tap.a - central.a ) * 4.0 );
			color += tap * weight; weightSum += weight;
		}
	}
	color = select( central, color / max( weightSum, 0.00001 ), weightSum > 0.00001 );
	if ( fresh ) { color = central; }
	if ( ! historyValid ) {
		scResolve( id.xy, color, currentDepth, currentDepth, metadata.z, 0.0 );
		return;
	}

	var low = color; var high = color;
	var reprojectionDepth = select( SC_FAR * 0.001, stored.y, stored.y >= 0.001 );
	for ( var y = -1; y <= 1; y++ ) {
		for ( var x = -1; x <= 1; x++ ) {
			let tap = scTileColor[ scTileIndex( center + vec2i( x, y ), tileOrigin, tileWidth ) ];
			low = min( low, tap ); high = max( high, tap );
			let neighbor = clamp( vec2i( id.xy ) + vec2i( x, y ), vec2i( 0 ), vec2i( size ) - 1 );
			let depth = textureLoad( scPreviousMeta, neighbor, 0 ).y;
			if ( depth >= 0.001 ) { reprojectionDepth = min( reprojectionDepth, depth ); }
		}
	}
	if ( stored.y < 0.001 ) { reprojectionDepth = min( reprojectionDepth, currentDepth ); }
	var world = scf.position.xyz + scRay( uv ) * ( reprojectionDepth * 1000.0 );
	world -= vec3f( scf.windDelta.x, 0.0, scf.windDelta.y );
	let previous = scProjectPrevious( world );
	let previousPixel = clamp( vec2i( previous.xy * vec2f( size ) ), vec2i( 0 ), vec2i( size ) - 1 );
	let oldMeta = textureLoad( scPreviousMeta, previousPixel, 0 );
	let valid = previous.z > 0.0 && all( previous.xy >= vec2f( 0.0 ) ) && all( previous.xy <= vec2f( 1.0 ) ) && oldMeta.y >= 0.001;
	var carriedDepth = currentDepth; var historyFraction = 0.0;
	if ( valid ) {
		let history = clamp( scHistoryAt( previous.xy, vec2f( size ) ), low, high );
		let motionPixels = length( ( previous.xy - uv ) * vec2f( size ) );
		historyFraction = select( 1.0, scFreshHistoryWeight( central, currentDepth ), fresh );
		color = mix( color, history, historyFraction );
		let expectedDepth = length( world - scf.previousPosition.xyz ) * 0.001;
		if ( ! fresh && ( motionPixels <= 0.5 || abs( oldMeta.y - expectedDepth ) < max( 0.001, expectedDepth * 0.15 ) ) ) {
			carriedDepth = oldMeta.y;
		}
	}
	scResolve( id.xy, color, currentDepth, carriedDepth, metadata.z, historyFraction );
}`}),this.panoKernel=t(`Clouds Panorama`,[this.marchModule],{scPano:{storageTexture:this.panorama}},`
${e} {
	let size = textureDimensions( scPano );
	let texel = id.xy * u32( scf.pano.z ) + vec2u( scf.pano.xy );
	if ( any( texel >= size ) ) { return; }
	let uv = ( vec2f( texel ) + 0.5 ) / vec2f( size );
	let elev = uv.y * uv.y * ${ka(94*Aa)} - ${ka(4*Aa)};
	let az = uv.x * ${ka(2*Math.PI)};
	let dir = vec3f( cos( elev ) * cos( az ), sin( elev ), cos( elev ) * sin( az ) );
	let cone = ${ka(2*Math.PI/Na)};
	let m = scMarch( scf.position.xyz, dir, 0.5, cone, cone, 128u, true );
	textureStore( scPano, texel, vec4f( m.color, 1.0 - m.alpha ) );
}`),this.shadowKernel=t(`Clouds Shadow`,[this.marchModule],{scShadow:{storageTexture:this.shadowMap}},`
${e} {
	let size = textureDimensions( scShadow );
	// a quarter of the rows per frame (w = phase), or all of them (w < 0)
	let full = scf.shadow.w < 0.0;
	let texel = select( vec2u( id.x, id.y * 4u + u32( max( scf.shadow.w, 0.0 ) ) ), id.xy, full );
	if ( any( texel >= size ) ) { return; }
	let xz = scf.shadow.xy + ( ( vec2f( texel ) + 0.5 ) / vec2f( size ) - 0.5 ) * scf.shadow.z;
	let L = frame.sunDir;
	let ly = max( L.y, 0.08 );
	let t0 = scs.shell.x / ly;
	let t1 = ( scs.shell.x + scs.shell.y ) / ly;
	let n = 16;
	let dt = ( t1 - t0 ) / f32( n );
	var tau = 0.0;
	for ( var i = 0; i < n; i++ ) {
		let t = t0 + ( f32( i ) + 0.5 ) * dt;
		let p = vec3f( xz.x, 0.0, xz.y ) + vec3f( L.x, ly, L.z ) * t;
		tau += scLightDensity( p, scs.shell.w, vec2f( 2.0, 2.0 ), false ) * scs.shell.z * dt;
		if ( tau > 12.0 ) { break; }
	}
	// multiple scattering lets some light through even thick cloud (as the view's octaves do)
	let T = exp( -tau ) * 0.8 + exp( -tau * 0.25 ) * 0.2;
	textureStore( scShadow, texel, vec4f( T, 0.0, 0.0, 1.0 ) );
}`)}_drawingBufferSize(){if(this.outputSize)return this.outputSize;let e=br.fields.outputResolution.value;if(e&&e.x>0)return e;let t=F.canvas;return{x:t?t.width:1280,y:t?t.height:720}}_allocate(e,t){let n=Ma,r=this.resolutionScale;this.sourceWidth=Math.max(1,Math.ceil(e*r/n.historyDivisor/n.lattice)),this.sourceHeight=Math.max(1,Math.ceil(t*r/n.historyDivisor/n.lattice)),this.historyWidth=this.sourceWidth*n.lattice,this.historyHeight=this.sourceHeight*n.lattice,this.source.resize(this.sourceWidth,this.sourceHeight),this.sourceMeta.resize(this.sourceWidth,this.sourceHeight);for(let e of[...this.colors,...this.metas])e.resize(this.historyWidth,this.historyHeight);this.historyValid=!1}update(e,t){let n=Ma,r=ja,i=this.F,a=this.S;e=Math.min(.1,Math.max(0,e));let o=this._drawingBufferSize();(o.x!==this._w||o.y!==this._h||this.resolutionScale!==this._scale)&&(this._w=o.x,this._h=o.y,this._scale=this.resolutionScale,this._allocate(o.x,o.y));let s=this.coverage.value;s!==this._lastCoverage&&(a.shell.value[3]=s,this._lastCoverage=s,this.historyValid=!1,this.panoWarm=!0);let c=B.windDir.value,l=Math.hypot(c.x,c.y)||1,u=c.x/l,d=c.y/l;if(a.wind.value[0]=u,a.wind.value[1]=d,this.weatherDirty){let e=this.weatherMap.width;this.weatherKernel.dispatch([e/8,e/8,1]),this.boundsKernel.dispatch([8,8,1]),this.weatherDirty=!1}t.updateMatrixWorld();let f=t.matrixWorld.elements,p=t.position,m=Math.tan(T.degToRad(t.fov*.5))/(t.zoom||1),h=t.aspect,g=[f[0],f[1],f[2]],_=[f[4],f[5],f[6]],v=[-f[8],-f[9],-f[10]],y=e=>{let t=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},b=y(g),x=y(_),S=y(v),C={position:[p.x,p.y,p.z,m],right:[...b,h],up:[...x,0],forward:[...S,0]},w=this._prevCam;(!w||Math.hypot(p.x-w.position[0],p.y-w.position[1],p.z-w.position[2])>1e3||S[0]*w.forward[0]+S[1]*w.forward[1]+S[2]*w.forward[2]<.7||Math.abs(m-w.position[3])>.01)&&(this.historyValid=!1);let E=B.sunDir.value;E.dot(this._prevLight)<.999&&(this.historyValid=!1,this.panoWarm=!0),this._prevLight.copy(E);let D=this.historyValid&&w?w:C;i.position.value=C.position,i.right.value=C.right,i.up.value=C.up,i.forward.value=C.forward,i.previousPosition.value=D.position,i.previousRight.value=D.right,i.previousUp.value=D.up,i.previousForward.value=D.forward,this._prevCam=C;let O=n.lattice,k=this.frameIndex%(O*O),A=0,j=0;for(let e=0;1<<e<O;e++){let t=k>>e*2&3;A|=(t>>1^t&1)<<Math.log2(O)-e-1,j|=(t&1)<<Math.log2(O)-e-1}i.viewport.value=[o.x*this.resolutionScale,o.y*this.resolutionScale,this.historyWidth,this.historyHeight],i.sampling.value=[A,j,O,+!!this.historyValid],this._elapsed+=e;let M=r.wind.speed,ee=u*M*e,te=d*M*e;this._windX+=ee,this._windZ+=te,this._evolution+=r.wind.evolutionSpeed*e,i.clock.value=[this.frameIndex%4096,this._elapsed,e,0],i.wind.value=[this._windX,this._windZ,this._evolution,0],i.windDelta.value=[ee,te,0,0],i.march.value=[n.stepMeters,n.maxSteps,n.lightTaps,n.fullLightingAlpha],i.temporal.value=[n.historyWeight,Math.min(1,r.wind.evolutionSpeed*e/100),0,0],i.display.value=[0,n.lightReuseSteps,0,0];let ne=E.x,N=E.y,re=E.z,ie=re,ae=0,P=-ne;Math.abs(N)>.99&&(ie=0,ae=-re,P=N);let oe=1/Math.hypot(ie,ae,P);ie*=oe,ae*=oe,P*=oe;let se=N*P-re*ae,ce=re*ie-ne*P,le=ne*ae-N*ie,ue=i.lightOffsets.value,de=i.lightLods.value;ue[0]=0,ue[1]=0,ue[2]=0,ue[3]=25;let fe=r.shape;for(let e=1;e<8;e++){let t=1.7**e,r=25*((t-1)/.7+t*.5),i=e*2.399963,a=Math.sqrt((e+.5)/n.lightTaps),o=Math.cos(i)*a*.05*r,s=Math.sin(i)*a*.05*r,c=e*4;ue[c]=ne*r+ie*o+se*s,ue[c+1]=N*r+ae*o+ce*s,ue[c+2]=re*r+P*o+le*s,ue[c+3]=25*t;let l=r*.1;de[c]=Math.max(0,Math.log2(l*64/fe.baseScale)),de[c+1]=Math.max(0,Math.log2(l*64/(fe.baseScale*fe.erosionScaleBaseMultiplier)))}let pe=this.frameIndex%4;if(pe===0||!this._shadowInit){let e=this.shadowSize.value/Ia*4;this.shadowCenter.value.set(Math.round(p.x/e)*e,Math.round(p.z/e)*e)}i.shadow.value=[this.shadowCenter.value.x,this.shadowCenter.value.y,this.shadowSize.value,pe];let me=B.cameraUnderwater&&B.cameraUnderwater.value>.5;if(this._shadowInit?this.shadowKernel.dispatch([Ia/8,Ia/32,1]):(i.shadow.value=[this.shadowCenter.value.x,this.shadowCenter.value.y,this.shadowSize.value,-1],this.shadowKernel.dispatch([Ia/8,Ia/8,1]),this._shadowInit=!0),this.panoWarm)i.pano.value=[0,0,1,0],this.panoKernel.dispatch([Na/8,Pa/8,1]),this.panoWarm=!1;else{let e=this.frameIndex%16;i.pano.value=[e%Fa,Math.floor(e/Fa),Fa,0],this.panoKernel.dispatch([Math.ceil(Na/Fa/8),Math.ceil(Pa/Fa/8),1])}if(me)this.viewValid.value=0,this.historyValid=!1;else{this.traceKernel.dispatch([Math.ceil(this.sourceWidth/8),Math.ceil(this.sourceHeight/8),1]),this.temporalKernel.dispatch([Math.ceil(this.historyWidth/8),Math.ceil(this.historyHeight/8),1]),this.viewTex=this.colors[this._pp],this._pp=1-this._pp;let e=this.viewCam;e.right.value.set(b[0],b[1],b[2]),e.up.value.set(x[0],x[1],x[2]),e.fwd.value.set(S[0],S[1],S[2]),e.tan.value.set(m*h,m),this.viewValid.value=1,this.historyValid=!0}this.frameIndex++}resetHistory(){this.historyValid=!1}invalidate(){this.panoWarm=!0,this.resetHistory()}},Ua=class{constructor(e,t=e.label){let n=e.width;if(e.height!==n||n&n-1||n<32||n>512)throw Error(`ComputeMips: square power-of-two 32..512 only`);this.res=n,this.layers=e.dimension===`3d`?1:e.depth;let r=e.mipLevelCount,i=Math.min(5,r-1),a=t=>({storageTexture:e,access:`write`,view:{dimension:`2d-array`,baseMipLevel:t,mipLevelCount:1}}),o=t=>({texture:e,view:{dimension:`2d-array`,baseMipLevel:t,mipLevelCount:1}}),s=(e,t,n,r)=>`
	if ( lx < ${n}u && ly < ${n}u ) {
		let i = ly * ${4*n}u + lx * 2u;
		let v = ( ${e}[ i ] + ${e}[ i + 1u ] + ${e}[ i + ${2*n}u ] + ${e}[ i + ${2*n+1}u ] ) * 0.25;
		textureStore( out${r}, vec2u( gx * ${n}u + lx, gy * ${n}u + ly ), layer, v );
		${t?`${t}[ ly * ${n}u + lx ] = v;`:``}
	}
	workgroupBarrier();`,c={src0:o(0)},l=``;for(let e=1;e<=i;e++)c[`out`+e]=a(e);for(let e=2,t=8;e<=i;e++,t>>=1)l+=s(`s`+(e-1),e<i?`s`+e:null,t,e);this.kernelA=new yi({label:t+` mips A`,bindings:c,workgroupSize:[16,16,1],code:`
var<workgroup> s1: array<vec4f, 256>;
var<workgroup> s2: array<vec4f, 64>;
var<workgroup> s3: array<vec4f, 16>;
var<workgroup> s4: array<vec4f, 4>;
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( local_invocation_id ) lid: vec3u, @builtin( workgroup_id ) wid: vec3u ) {
	let lx = lid.x; let ly = lid.y;
	let gx = wid.x; let gy = wid.y; let layer = wid.z;
	let x1 = gx * 16u + lx; let y1 = gy * 16u + ly;
	let p = vec2u( x1, y1 ) * 2u;
	let v1 = ( textureLoad( src0, p, layer, 0 ) + textureLoad( src0, p + vec2u( 1u, 0u ), layer, 0 ) + textureLoad( src0, p + vec2u( 0u, 1u ), layer, 0 ) + textureLoad( src0, p + vec2u( 1u, 1u ), layer, 0 ) ) * 0.25;
	textureStore( out1, vec2u( x1, y1 ), layer, v1 );
	s1[ ly * 16u + lx ] = v1;
	workgroupBarrier();
${l}
}`}),this.kernelB=null;let u=n>>5;if(r>6&&u>1){let e={src5:o(5)},n=``,i=``,c=`s5`;for(let t=6,o=u>>1;t<r&&o>=1;t++,o>>=1){e[`out`+t]=a(t);let l=o>1&&t<r-1?`s`+t:null;l&&(i+=`var<workgroup> ${l}: array<vec4f, ${o*o}>;\n`),n+=s(c,l,o,t),c=l}this.kernelB=new yi({label:t+` mips B`,bindings:e,workgroupSize:[u,u,1],code:`
var<workgroup> s5: array<vec4f, ${u*u}>;
${i}
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( local_invocation_id ) lid: vec3u, @builtin( workgroup_id ) wid: vec3u ) {
	let lx = lid.x; let ly = lid.y; let layer = wid.z;
	let gx = 0u; let gy = 0u;
	s5[ ly * ${u}u + lx ] = textureLoad( src5, vec2u( lx, ly ), layer, 0 );
	workgroupBarrier();
${n}
}`})}}dispatch(e=null){let t=e?{pass:e}:void 0;this.kernelA.dispatch([this.res/32,this.res/32,this.layers],t),this.kernelB&&this.kernelB.dispatch([1,1,this.layers],t)}},Wa=6,Ga=32,Ka=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},qa=`
fn envCubeDir( face: u32, x: u32, y: u32, size: u32 ) -> vec3f {
	let u = ( f32( x ) + 0.5 ) / f32( size ) * 2.0 - 1.0;
	let v = ( f32( y ) + 0.5 ) / f32( size ) * 2.0 - 1.0;
	var d: vec3f;
	switch ( face ) {
		case 0u: { d = vec3f( 1.0, -v, -u ); }
		case 1u: { d = vec3f( -1.0, -v, u ); }
		case 2u: { d = vec3f( u, 1.0, v ); }
		case 3u: { d = vec3f( u, -1.0, -v ); }
		case 4u: { d = vec3f( u, -v, 1.0 ); }
		default: { d = vec3f( -u, -v, -1.0 ); }
	}
	return normalize( d );
}
`,Ja=class{constructor(e,t,n,r=128){this.renderer=e,this.scene=t,this.sky=n,this.size=r,t&&(t.environmentIntensity=1),this.source=new I({label:`envSource`,width:r,height:r,dimension:`cube`,format:`rgba16float`,mips:!0,usage:[`sample`,`storage`,`render`]});let i=e=>new I({label:e,width:r,height:r,dimension:`cube`,format:`rgba16float`,mips:Wa,usage:[`sample`,`storage`]});this.targets=[i(`envSpecularA`),i(`envSpecularB`)],this.front=0,this.sh=[new Tn({label:`envSH_A`,count:9,type:`vec4f`,data:Ya()}),new Tn({label:`envSH_B`,count:9,type:`vec4f`})],this.lastSun=new A(0,-2,0),this.timer=0,this.interval=3,this.step=-1,this.primed=!1,this._build(),this.steps=this._buildSteps()}_build(){let e=this.sky,t=this.size;this.faceParams=[],this.faceKernels=[];for(let n=0;n<6;n++)this.faceKernels.push(new yi({label:`Env Face `+n,modules:[z,e.module],bindings:{outCube:{storageTexture:this.source,viewDimension:`2d-array`}},workgroupSize:[8,8,1],code:`${qa}
@compute @workgroup_size( WG_X, WG_Y, WG_Z ) fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	if ( gid.x >= ${t}u || gid.y >= ${t}u ) { return; }
	let dir = envCubeDir( ${n}u, gid.x, gid.y, ${t}u );
	// no sun or moon disk: the key light is lit directly
	textureStore( outCube, gid.xy, ${n}, vec4f( skyRadianceWithClouds( dir, false ), 1.0 ) );
}`}));this.filterKernels=[[],[]];for(let e=0;e<2;e++)for(let n=0;n<Wa;n++){let r=n/5,i=t>>n;this.filterKernels[e].push(new yi({label:`Env GGX `+n,modules:[z],bindings:{srcCube:{texture:this.source,viewDimension:`cube`},outCube:{storageTexture:this.targets[e],view:{dimension:`2d-array`,baseMipLevel:n,mipLevelCount:1}}},workgroupSize:[8,8,1],code:`${qa}
fn hammersley( i: u32, n: u32 ) -> vec2f {
	var b = i;
	b = ( b << 16u ) | ( b >> 16u );
	b = ( ( b & 0x55555555u ) << 1u ) | ( ( b & 0xAAAAAAAAu ) >> 1u );
	b = ( ( b & 0x33333333u ) << 2u ) | ( ( b & 0xCCCCCCCCu ) >> 2u );
	b = ( ( b & 0x0F0F0F0Fu ) << 4u ) | ( ( b & 0xF0F0F0F0u ) >> 4u );
	b = ( ( b & 0x00FF00FFu ) << 8u ) | ( ( b & 0xFF00FF00u ) >> 8u );
	return vec2f( f32( i ) / f32( n ), f32( b ) * 2.3283064365386963e-10 );
}
@compute @workgroup_size( WG_X, WG_Y, WG_Z ) fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	if ( gid.x >= ${i}u || gid.y >= ${i}u ) { return; }
	let N = envCubeDir( gid.z, gid.x, gid.y, ${i}u );
${n===0?`
	textureStore( outCube, gid.xy, gid.z, vec4f( textureSampleLevel( srcCube, smpLinearClamp, N, 0.0 ).rgb, 1.0 ) );
}`:`
	// filtered importance sampling (Karis 2013 / GPU Gems 3 ch. 20), N = V = R
	let alpha = ${Ka(r*r)};
	let a2 = alpha * alpha;
	let tb = basis( N );
	const COUNT = 96u;
	let saTexel = ${Ka(4*Math.PI/(6*t*t))};
	var sum = vec3f( 0.0 );
	var wsum = 0.0;
	for ( var i = 0u; i < COUNT; i++ ) {
		let xi = hammersley( i, COUNT );
		let phi = TWO_PI * xi.x;
		let cosT = sqrt( ( 1.0 - xi.y ) / ( 1.0 + ( a2 - 1.0 ) * xi.y ) );
		let sinT = sqrt( 1.0 - cosT * cosT );
		let H = tb * vec3f( sinT * cos( phi ), sinT * sin( phi ), cosT );
		let L = 2.0 * dot( N, H ) * H - N;
		let NdotL = dot( N, L );
		if ( NdotL > 0.0 ) {
			let NdotH = cosT;
			let d = NdotH * NdotH * ( a2 - 1.0 ) + 1.0;
			let D = a2 / ( PI * d * d );
			let pdf = D * 0.25; // D * NdotH / ( 4 VdotH ), N = V
			let saSample = 1.0 / ( f32( COUNT ) * pdf + 1e-4 );
			let lod = clamp( 0.5 * log2( saSample / saTexel ) + 1.0, 0.0, ${Ka(Math.log2(t))} );
			sum += textureSampleLevel( srcCube, smpLinearClamp, L, lod ).rgb * NdotL;
			wsum += NdotL;
		}
	}
	textureStore( outCube, gid.xy, gid.z, vec4f( sum / max( wsum, 1e-4 ), 1.0 ) );
}`}`}))}let n=Math.max(0,Math.log2(t/Ga));this.shKernels=[0,1].map(e=>new yi({label:`Env SH`,modules:[z],bindings:{srcCube:{texture:this.source,viewDimension:`2d-array`},shOut:{storage:this.sh[e],access:`read_write`}},workgroupSize:[128,1,1],code:`${qa}
var<workgroup> acc: array<array<vec3f, 9>, 128>;
@compute @workgroup_size( 128 ) fn main( @builtin( local_invocation_index ) li: u32 ) {
	var c: array<vec3f, 9>;
	for ( var k = 0; k < 9; k++ ) { c[ k ] = vec3f( 0.0 ); }
	let total = 6144u;
	for ( var idx = li; idx < total; idx += 128u ) {
		let face = idx / 1024u;
		let r = idx % 1024u;
		let x = r % ${Ga}u; let y = r / ${Ga}u;
		let d = envCubeDir( face, x, y, ${Ga}u );
		// solid angle of the texel
		let u = ( f32( x ) + 0.5 ) / ${Ka(Ga)} * 2.0 - 1.0;
		let v = ( f32( y ) + 0.5 ) / ${Ka(Ga)} * 2.0 - 1.0;
		let tmp = 1.0 + u * u + v * v;
		let w = 4.0 / ( sqrt( tmp ) * tmp ) * ${Ka(1/1024)};
		let L = textureLoad( srcCube, vec2u( x, y ), face, ${n} ).rgb * w;
		c[ 0 ] += L * 0.282095;
		c[ 1 ] += L * 0.488603 * d.y;
		c[ 2 ] += L * 0.488603 * d.z;
		c[ 3 ] += L * 0.488603 * d.x;
		c[ 4 ] += L * 1.092548 * d.x * d.y;
		c[ 5 ] += L * 1.092548 * d.y * d.z;
		c[ 6 ] += L * 0.315392 * ( 3.0 * d.z * d.z - 1.0 );
		c[ 7 ] += L * 1.092548 * d.x * d.z;
		c[ 8 ] += L * 0.546274 * ( d.x * d.x - d.y * d.y );
	}
	acc[ li ] = c;
	workgroupBarrier();
	for ( var s = 64u; s > 0u; s >>= 1u ) {
		if ( li < s ) { for ( var k = 0; k < 9; k++ ) { acc[ li ][ k ] += acc[ li + s ][ k ]; } }
		workgroupBarrier();
	}
	if ( li == 0u ) {
		// cosine lobe convolution (A0 = PI, A1 = 2 PI / 3, A2 = PI / 4), stored as irradiance / PI
		let A = array<f32, 9>( 1.0, 0.6666667, 0.6666667, 0.6666667, 0.25, 0.25, 0.25, 0.25, 0.25 );
		for ( var k = 0; k < 9; k++ ) { shOut[ k ] = vec4f( acc[ 0 ][ k ] * A[ k ], 0.0 ); }
	}
}`})),this.envUniforms=new L(`EnvParams`,{levels:[`f32`,5]},{label:`env`}),sr.set(`envSpecular`,new R({name:`hook-envSpecular`,deps:[z],uniforms:this.envUniforms,uniformName:`envParams`,bindings:{envSpecularCube:{texture:()=>this.targets[this.front],viewDimension:`cube`}},code:`
fn hookEnvSpecular( R: vec3f, roughness: f32 ) -> vec3f {
	return textureSampleLevel( envSpecularCube, smpLinearClamp, R, roughness * envParams.levels ).rgb * frame.envIntensity;
}
`})),sr.set(`envDiffuse`,new R({name:`hook-envDiffuse`,deps:[z],bindings:{envSH:{storage:()=>this.sh[this.front],access:`read`,type:`vec4f`}},code:`
fn hookEnvDiffuse( N: vec3f ) -> vec3f {
	let d = N;
	var e = envSH[ 0 ].rgb * 0.282095
		+ envSH[ 1 ].rgb * 0.488603 * d.y + envSH[ 2 ].rgb * 0.488603 * d.z + envSH[ 3 ].rgb * 0.488603 * d.x
		+ envSH[ 4 ].rgb * 1.092548 * d.x * d.y + envSH[ 5 ].rgb * 1.092548 * d.y * d.z
		+ envSH[ 6 ].rgb * 0.315392 * ( 3.0 * d.z * d.z - 1.0 ) + envSH[ 7 ].rgb * 1.092548 * d.x * d.z
		+ envSH[ 8 ].rgb * 0.546274 * ( d.x * d.x - d.y * d.y );
	return max( e, vec3f( 0.0 ) ) * frame.envIntensity;
}
`}))}_buildSteps(){let e=[],t=this.size;for(let n=0;n<6;n++)e.push(()=>this.faceKernels[n].dispatch([t/8,t/8,1]));let n=this._mips||=new Ua(this.source,`envSource`);e.push(()=>n.dispatch());for(let n=0;n<Wa;n++){let r=Math.max(1,Math.ceil((t>>n)/8));e.push(()=>this.filterKernels[1-this.front][n].dispatch([r,r,6]))}return e.push(()=>this.shKernels[1-this.front].dispatch(1)),e.push(()=>{this.front=1-this.front}),e}update(e,t=!1){this.timer-=e;let n=this.sky.atmosphere.sunDir.value;if(t||!this.primed){this.primed=!0,this.timer=this.interval,this.lastSun.copy(n);for(let e of this.steps)e();this.step=-1;return}if(this.step<0){if(!(n.angleTo(this.lastSun)>.004)&&this.timer>0)return;this.timer=this.interval,this.lastSun.copy(n),this.step=0}this.steps[this.step++](),this.step===this.steps.length&&(this.step=-1)}get texture(){return this.targets[this.front]}};function Ya(){let e=new Float32Array(36),t=[.3,.4,.6];for(let n=0;n<3;n++)e[n]=t[n]/.282095;return e}function Xa(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Za=class{constructor(e=1){let t=Xa(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}this.perm=new Uint8Array(512);for(let e=0;e<512;e++)this.perm[e]=n[e&255];this.grad=new Float32Array(512);for(let e=0;e<256;e++){let n=t()*Math.PI*2;this.grad[e*2]=Math.cos(n),this.grad[e*2+1]=Math.sin(n)}}noise(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=n&255,s=r&255,c=this.perm,l=this.grad,u=c[o+c[s]],d=c[o+1+c[s]],f=c[o+c[s+1]],p=c[o+1+c[s+1]],m=l[u*2]*i+l[u*2+1]*a,h=l[d*2]*(i-1)+l[d*2+1]*a,g=l[f*2]*i+l[f*2+1]*(a-1),_=l[p*2]*(i-1)+l[p*2+1]*(a-1),v=i*i*i*(i*(i*6-15)+10),y=a*a*a*(a*(a*6-15)+10),b=m+(h-m)*v;return(b+(g+(_-g)*v-b)*y)*1.414}fbm(e,t,n=5,r=2,i=.5){let a=0,o=1,s=1,c=0;for(let l=0;l<n;l++)a+=this.noise(e*s+l*17.13,t*s-l*9.71)*o,c+=o,o*=i,s*=r;return a/c}ridged(e,t,n=5){let r=0,i=.5,a=1,o=1;for(let s=0;s<n;s++){let n=1-Math.abs(this.noise(e*a+s*31.7,t*a+s*11.3));n*=n,r+=n*i*o,o=n,i*=.5,a*=2.03}return r}},U=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Qa=(e,t,n)=>Math.min(n,Math.max(t,e)),$a=(e,t,n)=>e+(t-e)*n,eo=1e5,W={terrainSize:6144,terrainRes:2048,beach:{xMin:-150,xMax:170},pier:{x:eo,zStart:-64,zEnd:40,deckHeight:2.3,width:2.6,headWidth:14,headDepth:7},boatDock:{position:new A(eo,-50,eo),heading:0},village:{center:new A(eo,0,eo),radius:95},reef:{center:new A(-1e5,0,eo),radius:58},spawn:{position:new A(18,0,-60),yaw:Math.PI},start:{position:new A(53.6,0,-77),yaw:Math.PI},swellDir:new E(-.12,-1).normalize()};function to(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function no(e,t,n=!0){let r=t*2,i=new Float32Array(r*t),a=new Float32Array(r*r),o=n?ro:io,s=o(.75),c=o(.25),l=e=>e<0?0:e>=t?t-1:e;for(let n=0;n<t;n++){let a=n*t;for(let t=0;t<r;t++){let o=t&1?t-1>>1:(t>>1)-1,u=t&1?c:s;i[n*r+t]=e[a+l(o-1)]*u[0]+e[a+l(o)]*u[1]+e[a+l(o+1)]*u[2]+e[a+l(o+2)]*u[3]}}for(let e=0;e<r;e++){let t=e&1?e-1>>1:(e>>1)-1,n=e&1?c:s,o=l(t-1)*r,u=l(t)*r,d=l(t+1)*r,f=l(t+2)*r,p=e*r;for(let e=0;e<r;e++)a[p+e]=i[o+e]*n[0]+i[u+e]*n[1]+i[d+e]*n[2]+i[f+e]*n[3]}return a}function ro(e){let t=e*e,n=t*e;return[-.5*n+t-.5*e,1.5*n-2.5*t+1,-1.5*n+2*t+.5*e,.5*n-.5*t]}function io(e){return[0,1-e,e,0]}var ao={x:0,z:0,r:260,h:34},oo={start:1650,full:2950,height:120,vary:75};function so(e,t,n,r,i){let a=e+n.fbm(e/700,t/700,3)*170,o=t+n.fbm(e/700+5.2,t/700-1.3,3)*170,s=n.fbm(a/1100,o/1100,3),c=r.fbm(a/380,o/380,4),l=1-Math.abs(r.noise(a/520+3.7,o/520-8.1)),u=i.fbm(e/140,t/140,3),d=i.noise(e/38+11.1,t/38-4.4),f=34+s*58+c*24+(l*l-.45)*12+u*5+d*.7,p=24-f;f+=2.7*Math.log(1+Math.exp(p/6))-2.7*Math.LN2;let m=e-ao.x,h=t-ao.z;f+=ao.h*Math.exp(-(m*m+h*h)/(ao.r*ao.r));let g=Math.hypot(e,t);if(g>oo.start){let i=U(oo.start,oo.full,g)**1.5,a=r.fbm(e/520+1.9,t/520+7.3,3)*oo.vary+n.fbm(e/180,t/180,2)*12;f+=i*(oo.height+a)}return Qa(f,8,1e4)}var co=class{constructor(e=11){this.size=W.terrainSize,this.res=W.terrainRes,this.texel=this.size/this.res,this.origin=-this.size/2,this.noise=new Za(e),this.noise2=new Za(e*31+5),this.noise3=new Za(e*131+17);let t=this.res*this.res;this.heights=new Float32Array(t),this.rock=new Float32Array(t),this.sand=new Uint8Array(t),this.path=new Uint8Array(t),this.gully=new Uint8Array(t),this.seagrass=new Uint8Array(t),this.rubble=new Uint8Array(t),this.scarp=new Uint8Array(t),this.rockSites=[],this.pads=[],this.paths=[],this.grassland=!0,this.timings={},this.generate(),this.buildMinMax()}coastDistance(){return{d:-5e3,beachZone:0}}heightFn(e,t){return{h:so(e,t,this.noise,this.noise2,this.noise3),rock:0}}generate(){let e=this.timings,t=performance.now(),n=this.res/2,r=this.size/n,i=this.origin,a=new Float32Array(n*n);for(let e=0;e<n;e++){let t=i+(e+.5)*r;for(let o=0;o<n;o++)a[e*n+o]=so(i+(o+.5)*r,t,this.noise,this.noise2,this.noise3)}e.grid=Math.round(performance.now()-t),t=performance.now(),this.heights=no(a,n,!0),e.upsample=Math.round(performance.now()-t),t=performance.now(),this._spawn(),this._outcrops(),e.features=Math.round(performance.now()-t),e.total=e.grid+e.upsample+e.features}_spawn(){let e=-1/0,t=ao.x,n=ao.z;for(let r=-90;r<=90;r+=3)for(let i=-90;i<=90;i+=3){let a=this.heightAt(ao.x+i,ao.z+r);a>e&&(e=a,t=ao.x+i,n=ao.z+r)}this.spawn={x:t,z:n,h:e},W.spawn.position.set(t,e,n),W.start.position.set(t,e,n)}slopeAt(e,t){let n=this.heightAt(e+3,t)-this.heightAt(e-3,t),r=this.heightAt(e,t+3)-this.heightAt(e,t-3);return Math.hypot(n,r)/6}_outcrops(){let e=Xa(1777),t=this.noise2,n=this.rockSites,r=this.spawn,i=(e,t,i)=>{if(Math.hypot(e-r.x,t-r.z)<45+i)return!1;for(let r of n)if(Math.hypot(e-r.x,t-r.z)<160)return!1;return!0};for(let t=0;t<60;t++){let t=2.3+(e()-.5)*1.2,i=70+e()*50,a=r.x+Math.cos(t)*i,o=r.z+Math.sin(t)*i;if(!(this.slopeAt(a,o)>.3)){n.push({x:a,z:o,r:5+e()*2,h:this.heightAt(a,o),kind:`outcrop`});break}}for(let a=0;a<4e3&&n.length<34;a++){let a=e()*Math.PI*2,o=120+Math.sqrt(e())*2200,s=r.x+Math.cos(a)*o,c=r.z+Math.sin(a)*o,l=this.heightAt(s,c),u=U(-.5,2.5,l-(this.heightAt(s+40,c)+this.heightAt(s-40,c)+this.heightAt(s,c+40)+this.heightAt(s,c-40))*.25),d=U(-.1,.35,t.noise(s/400+2.2,c/400-6.1));if(e()>u*d*.9+.03||this.slopeAt(s,c)>.35)continue;let f=2.5+e()*e()*7;i(s,c,f)&&n.push({x:s,z:c,r:f,h:l,kind:`outcrop`})}let{res:a,texel:o,origin:s}=this;for(let e of n){let t=e.r*1.6+3,n=Math.max(0,Math.floor((e.x-t-s)/o)),r=Math.min(a-1,Math.ceil((e.x+t-s)/o)),i=Math.max(0,Math.floor((e.z-t-s)/o)),c=Math.min(a-1,Math.ceil((e.z+t-s)/o));for(let l=i;l<=c;l++)for(let i=n;i<=r;i++){let n=s+(i+.5)*o,r=s+(l+.5)*o,c=(1-U(.35,1,Math.hypot(n-e.x,r-e.z)/t+this.noise3.noise(n/4,r/4)*.25))*.75,u=l*a+i;this.rock[u]=Math.max(this.rock[u],Qa(c,0,1))}}}flatten(e,t,n,r,i=4){let{res:a,texel:o,origin:s}=this,c=n+i;this.pads.push({x:e,z:t,radius:n,height:r});let l=Math.max(0,Math.floor((e-c-s)/o)),u=Math.min(a-1,Math.ceil((e+c-s)/o)),d=Math.max(0,Math.floor((t-c-s)/o)),f=Math.min(a-1,Math.ceil((t+c-s)/o));for(let i=d;i<=f;i++)for(let d=l;d<=u;d++){let l=s+(d+.5)*o,u=s+(i+.5)*o,f=1-U(n,c,Math.hypot(l-e,u-t)),p=i*a+d;this.heights[p]=$a(this.heights[p],r,f)}}heightAt(e,t){let{res:n,texel:r,origin:i,heights:a}=this,o=(e-i)/r-.5,s=(t-i)/r-.5;o=o<0?0:o>n-1.001?n-1.001:o,s=s<0?0:s>n-1.001?n-1.001:s;let c=Math.floor(o),l=Math.floor(s),u=o-c,d=s-l,f=l*n+c,p=a[f],m=a[f+1],h=a[f+n],g=a[f+n+1];return(p*(1-u)+m*u)*(1-d)+(h*(1-u)+g*u)*d}normalAt(e,t,n){let r=this.texel,i=this.heightAt(e+r,t)-this.heightAt(e-r,t),a=this.heightAt(e,t+r)-this.heightAt(e,t-r);return n.set(-i,2*r,-a).normalize(),n}pathDistance(){return 1/0}buildMinMax(){let e=this.res/8;this.mmTile=8,this.mmN=e;let t=new Float32Array(e*e),n=new Float32Array(e*e),r=this.heights,i=this.res;for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=1/0,c=-1/0,l=Math.min(i-1,(a+1)*8),u=Math.min(i-1,(o+1)*8);for(let e=a*8;e<=l;e++){let t=e*i;for(let e=o*8;e<=u;e++){let n=r[t+e];n<s&&(s=n),n>c&&(c=n)}}t[a*e+o]=s,n[a*e+o]=c}this.mmMin=t,this.mmMax=n,this.mmLevels=[{n:e,min:t,max:n}];let a=this.mmLevels[0];for(;a.n>1;){let e=a.n>>1,t=new Float32Array(e*e),n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++){let o=2*r*a.n+2*i,s=o+a.n;t[r*e+i]=Math.min(a.min[o],a.min[o+1],a.min[s],a.min[s+1]),n[r*e+i]=Math.max(a.max[o],a.max[o+1],a.max[s],a.max[s+1])}a={n:e,min:t,max:n},this.mmLevels.push(a)}}boundsFor(e,t,n,r){let{origin:i,texel:a,mmTile:o}=this,s=Math.max(n-e,r-t)/(a*o),c=Math.max(0,Math.min(this.mmLevels.length-1,Math.ceil(Math.log2(Math.max(1,s/2))))),l=this.mmLevels[c],u=a*o*(1<<c),d=Math.floor((e-i)/u),f=Math.floor((n-i)/u),p=Math.floor((t-i)/u),m=Math.floor((r-i)/u),h=1/0,g=-1/0;for(let e=Math.max(0,p);e<=Math.min(l.n-1,m);e++)for(let t=Math.max(0,d);t<=Math.min(l.n-1,f);t++){let n=e*l.n+t;l.min[n]<h&&(h=l.min[n]),l.max[n]>g&&(g=l.max[n])}return h===1/0&&(h=0,g=0),[h-1,g+2]}},lo=[4,8,13,19,27,38,52,72,100],uo=8;function fo(e){let t=performance.now(),{res:n,heights:r,rock:i,texel:a,origin:o}=e,s=n/4,c=a*4,l=new Float32Array(s*s);for(let e=0;e<s;e++)for(let t=0;t<s;t++){let i=0;for(let a=0;a<4;a++){let o=(e*4+a)*n+t*4;for(let e=0;e<4;e++)i+=r[o+e]}l[e*s+t]=i/16}let u=new Float32Array(s*s).fill(1),d=[];for(let e=0;e<uo;e++){let t=(e+.5)/uo*Math.PI*2;d.push([Math.cos(t),Math.sin(t)])}for(let e=1;e<s-1;e++)for(let t=1;t<s-1;t++){let n=l[e*s+t];if(n<-25)continue;let r=0;for(let i=0;i<uo;i++){let[a,o]=d[i],u=0;for(let r=0;r<lo.length;r++){let i=lo[r],d=Math.round(t+a*i/c),f=Math.round(e+o*i/c);if(d<0||f<0||d>=s||f>=s)break;let p=(l[f*s+d]-n-.3)/i;p>u&&(u=p)}r+=1/(1+u*u)}u[e*s+t]=r/uo}let f=performance.now(),p=new Uint8Array(n*n*4),m=new Uint8Array(n*n*4),h=e.sand,g=e.path,_=e.gully,v=e.seagrass,y=e.rubble,b=e.scarp,x=1/(2*a);for(let e=0;e<n;e++){let t=e>0?e-1:0,a=e<n-1?e+1:n-1,o=e>1?e-2:0,c=e<n-2?e+2:n-1,l=(e+.5)/4-.5;l=l<0?0:l>s-1.001?s-1.001:l;let d=l|0,f=l-d;for(let l=0;l<n;l++){let S=e*n+l,C=l>0?l-1:0,w=l<n-1?l+1:n-1,T=(r[e*n+w]-r[e*n+C])*x,E=(r[a*n+l]-r[t*n+l])*x,D=1/Math.sqrt(T*T+1+E*E),O=-T*D,k=-E*D,A=l>1?l-2:0,j=l<n-2?l+2:n-1,M=r[S],ee=.5+(r[e*n+A]+r[e*n+j]+r[o*n+l]+r[c*n+l]-4*M)*.25*.9;ee=ee<0?0:ee>1?1:ee;let te=(l+.5)/4-.5;te=te<0?0:te>s-1.001?s-1.001:te;let ne=te|0,N=te-ne,re=d*s+ne,ie=((u[re]*(1-N)+u[re+1]*N)*(1-f)+(u[re+s]*(1-N)+u[re+s+1]*N)*f)*(1-Math.max(0,ee-.5)*.7);ie=ie<0?0:ie;let ae=S*4;p[ae]=(O*.5+.5)*255+.5,p[ae+1]=(k*.5+.5)*255+.5,p[ae+2]=i[S]*255+.5,p[ae+3]=ie*255+.5,m[ae]=h[S],m[ae+1]=g[S],m[ae+2]=v?Math.max(_[S],v[S]):_[S],m[ae+3]=Math.max(y?y[S]:0,b?b[S]:0)}}if(e.pads)for(let t of e.pads){let e=t.radius+3.5,r=Math.max(0,Math.floor((t.x-e-o)/a)),i=Math.min(n-1,Math.ceil((t.x+e-o)/a)),s=Math.max(0,Math.floor((t.z-e-o)/a)),c=Math.min(n-1,Math.ceil((t.z+e-o)/a));for(let e=s;e<=c;e++)for(let s=r;s<=i;s++){let r=o+(s+.5)*a,i=o+(e+.5)*a,c=Math.hypot(r-t.x,i-t.z),l=Math.atan2(i-t.z,r-t.x),u=1.2+1.8*(.5+.5*Math.sin(l*3+t.x)*Math.sin(l*5-t.z)),d=c<t.radius?1:Math.max(0,1-(c-t.radius)/u),f=(e*n+s)*4+1,p=Math.round(d*d*150);p>m[f]&&(m[f]=p)}}return{normal:p,splat:m,ms:{ao:f-t,maps:performance.now()-f}}}function po(e,t=4){let{res:n,heights:r}=e,i=n/t,a=new Float32Array(i*i),o=-1/0,s=1/(t*t);for(let e=0;e<i;e++)for(let c=0;c<i;c++){let l=0;for(let i=0;i<t;i++){let a=(e*t+i)*n+c*t;for(let e=0;e<t;e++)l+=r[a+e]}let u=l*s;a[e*i+c]=u,u>o&&(o=u)}let c=e=>{let t=new Uint16Array(e.length);for(let n=0;n<e.length;n++)t[n]=tt.toHalfFloat(e[n]);return t},l=[{data:c(a),width:i,height:i}],u=i;for(;u>1;){let e=u>>1,t=new Float32Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=2*n*u+2*r;t[n*e+r]=Math.max(a[i],a[i+1],a[i+u],a[i+u+1])}l.push({data:c(t),width:e,height:e}),a=t,u=e}return{levels:l,texel:e.texel*t,maxHeight:o}}var mo=512;function ho(e,t){let n=new Float32Array(e*e),r=new Float32Array(e*e);for(let i=0;i<e;i++)for(let a=0;a<e;a++){let o=to(a,i,t)*6.2831853;n[i*e+a]=Math.cos(o),r[i*e+a]=Math.sin(o)}return(t,i)=>{let a=Math.floor(t),o=Math.floor(i),s=t-a,c=i-o,l=(a%e+e)%e,u=(o%e+e)%e,d=l+1===e?0:l+1,f=u+1===e?0:u+1,p=u*e+l,m=u*e+d,h=f*e+l,g=f*e+d,_=n[p]*s+r[p]*c,v=n[m]*(s-1)+r[m]*c,y=n[h]*s+r[h]*(c-1),b=n[g]*(s-1)+r[g]*(c-1),x=s*s*s*(s*(s*6-15)+10),S=c*c*c*(c*(c*6-15)+10);return(_+(v-_)*x+(y-_+(_-v-y+b)*x)*S)*1.414}}function go(e,t,n){let r=[];for(let i=0;i<t;i++)r.push(ho(e<<i,n+i*17));return(e,n)=>{let i=0,a=1,o=0,s=1;for(let c=0;c<t;c++)i+=r[c](e*s,n*s)*a,o+=a,a*=.5,s*=2;return i/o}}function _o(e,t){let n=e+4,r=new Float32Array(n*n),i=new Float32Array(n*n),a=new Float32Array(n*n);for(let o=0;o<n;o++)for(let s=0;s<n;s++){let c=(s-2+e)%e,l=(o-2+e)%e;r[o*n+s]=to(c,l,t)+s-2,i[o*n+s]=to(c,l,t+1)+o-2,a[o*n+s]=to(c,l,t+2)}let o={f1:0,edge:0,id:0};return(e,t,s=2)=>{let c=Math.floor(e),l=Math.floor(t),u=99,d=0,f=0;for(let o=-1;o<=1;o++){let s=(l+o+2)*n+2+c;for(let n=-1;n<=1;n++){let o=s+n,c=r[o]-e,l=i[o]-t,p=c*c+l*l;p<u&&(u=p,d=a[o],f=o)}}let p=99;if(s>1){let a=r[f],o=i[f];for(let s=-2;s<=2;s++){let u=(l+s+2)*n+2+c;for(let n=-2;n<=2;n++){let s=u+n;if(s===f)continue;let c=r[s],l=i[s],d=c-a,m=l-o,h=Math.sqrt(d*d+m*m),g=((a+c)*.5-e)*d/h+((o+l)*.5-t)*m/h;g<p&&(p=g)}}}return o.f1=Math.sqrt(u),o.edge=p,o.id=d,o.dx=e-r[f],o.dy=t-i[f],o}}var vo=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},yo=null;function bo(){if(yo)return yo;let e=performance.now(),t=go(4,2,11),n=go(4,2,23),r=_o(7,101),i=_o(23,211),a=go(16,3,307),o=_o(26,401),s=_o(12,601),c=go(10,3,503),l=ho(180,701),u=ho(90,709),d=_o(18,801),f=go(4,5,907),p=new Uint8Array(mo*mo*4);for(let e=0;e<mo;e++){let m=e/mo;for(let h=0;h<mo;h++){let g=h/mo,_=(e*mo+h)*4,v=g+t(g*4,m*4)*.035,y=m+n(g*4,m*4)*.035;v-=Math.floor(v),y-=Math.floor(y);let b=r(v*7,y*7),x=b.id*40,S=vo(0,.2,b.edge),C=((b.dx*Math.cos(x)+b.dy*Math.sin(x))*.5+(b.id-.5)*.22)*S,w=vo(0,.1+.08*b.id,b.edge),T=i(v*23,y*23,2),E=T.id*40,D=vo(0,.14,T.edge),O=((T.dx*Math.cos(E)+T.dy*Math.sin(E))*.22+(T.id-.5)*.1)*D,k=a(g*16,m*16),A=(.45+C+O*.6+.16*k)*(.66+.34*w)*(.94+.06*D);b=o(g*26,m*26,1);let j=b.id<.6?(1-vo(.1+.15*b.id,.45,b.f1))*(.4+.6*b.id):0,M=c(g*10,m*10),ee=s(g*12,m*12,1),te=ee.id<.15?1-vo(.06,.28,ee.f1):0,ne=.34+.3*M+.26*j+.45*te,N=l(g*180,m*180)*.55+u(g*90,m*90)*.45,re=d(g*18,m*18,1),ie=re.id<.2?Math.max(0,1-(re.f1/(.14+.12*re.id*5))**2):0,ae=.45+.2*N+.5*Math.sqrt(ie),P=.5+.55*f(g*4,m*4);A=A<0?0:A>1?1:A,ne=ne<0?0:ne>1?1:ne,ae=ae<0?0:ae>1?1:ae,P=P<0?0:P>1?1:P,p[_]=A*255,p[_+1]=ne*255,p[_+2]=ae*255,p[_+3]=P*255}}let m=new I({label:`terrainDetail`,width:mo,height:mo,format:`rgba8unorm`,mips:!0,usage:[`sample`,`copyDst`],sampler:`aniso4Repeat`,data:p});return m.getGPU(),Gi(m),m.userData={},m.image={width:mo,height:mo,data:p},m.userData.ms=performance.now()-e,yo=m,m}var xo=(e,t,n)=>{let r=new Se().setRGB(e,t,n,me);return`vec3f( ${Co(r.r)}, ${Co(r.g)}, ${Co(r.b)} )`},So=(e,t)=>{let n=Math.cos(t),r=Math.sin(t);return`( mat2x2f( ${Co(n)}, ${Co(r)}, ${Co(-r)}, ${Co(n)} ) * ( ${e} ) )`};function Co(e){let t=Number(e).toPrecision(9);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`}var wo={rockDark:xo(.15,.145,.135),rockMid:xo(.3,.285,.265),rockLight:xo(.48,.455,.42),rockWarm:xo(.44,.37,.3),lichenPale:xo(.7,.7,.64),lichenOrange:xo(.78,.5,.2),blackZone:xo(.075,.075,.07),barnacle:xo(.78,.76,.7),algae:xo(.2,.27,.1),coralline:xo(.62,.44,.46),moss:xo(.19,.29,.08),mossDry:xo(.3,.34,.14)},To={lush:xo(.13,.2,.05),green:xo(.25,.32,.1),olive:xo(.36,.37,.14),yellow:xo(.5,.46,.2),straw:xo(.62,.54,.33),soil:xo(.17,.13,.08)},Eo=(e,t)=>Object.entries(t).map(([t,n])=>`const ${e}${t}: vec3f = ${n};`).join(`
`),Do=`
${Eo(`PAL_`,wo)}
${Eo(`MEADOW_`,To)}

struct RockGrad {
	dpdx: vec3f,
	dpdy: vec3f,
	fwY: f32,
	useGrad: bool,
};

// implicit-derivative RockGrad for a world position (call in uniform control flow)
fn terrainImplicitGrad( p: vec3f ) -> RockGrad {
	var g: RockGrad;
	g.dpdx = dpdx( p ); g.dpdy = dpdy( p ); g.fwY = 0.0; g.useGrad = false;
	return g;
}

// Mikkelsen surface-gradient bump: perturb world normal N by the scalar height field hd
// (screen-space derivatives, so any mix of projections / scales works). Robustness for terrain:
//  - the tilt is limited to ~55 degrees (at grazing angles |det| collapses and the unclamped
//    gradient would swing the normal into the tangent plane: 'chrome' patches on steep faces)
//  - the bump fades out where the screen-space frame is degenerate (the thin sliver triangles
//    of CDLOD geomorphing, which otherwise light up as bright lines along the grid) or where the
//    rendered facet disagrees with N (sub-texel crags)
fn terrainPerturbNormal( p: vec3f, N: vec3f, hd: f32, scale: f32 ) -> vec3f {
	let dpx = dpdx( p ); let dpy = dpdy( p );
	let dhdx = dpdx( hd ) * scale; let dhdy = dpdy( hd ) * scale;
	let r1 = cross( dpy, N );
	let r2 = cross( N, dpx );
	let det = dot( dpx, r1 );
	let ad = abs( det );
	let grad = ( r1 * dhdx + r2 * dhdy ) * sign( det );
	let area = length( cross( dpx, dpy ) );
	let fr = area / max( length( dpx ) * length( dpy ), 1e-20 ); // sin of the footprint angle
	let facet = ad / max( area, 1e-20 ); // cos between the facet and N
	let k = smoothstep( 0.12, 0.35, fr ) * smoothstep( 0.3, 0.6, facet );
	let g = grad * min( 1.0, ad * 1.4 / max( length( grad ), 1e-20 ) ) * k;
	return normalize( N * max( ad, 1e-20 ) - g );
}

// triplanar blend weights (sharp)
fn terrainTriWeights( N: vec3f ) -> vec3f {
	let a = abs( N );
	let w = a * a * ( a * a );
	return w / ( w.x + w.y + w.z );
}

fn terrainDetailGrad( uv: vec2f, gx: vec2f, gy: vec2f ) -> vec4f {
	return textureSampleGrad( terrainDetailTex, smpAniso4Repeat, uv, gx, gy );
}

// one channel-set of the detail texture, triplanar. The samples use explicit gradients (the
// derivatives of the world position in g), so they may run in non-uniform control flow.
fn terrainTriplanar( p: vec3f, w: vec3f, tile: f32, g: RockGrad ) -> vec4f {
	let s = 1.0 / tile;
	let x = terrainDetailGrad( p.zy * s, g.dpdx.zy * s, g.dpdy.zy * s );
	let y = terrainDetailGrad( p.xz * s + 0.37, g.dpdx.xz * s, g.dpdy.xz * s );
	let z = terrainDetailGrad( p.xy * s + 0.71, g.dpdx.xy * s, g.dpdy.xy * s );
	return x * w.x + y * w.y + z * w.z;
}

struct RockSurface {
	albedo: vec3f,
	rough: f32,
	hd: f32,     // bump height (m)
	moss: f32,   // 0..1
	wet: f32,
	height: f32,
};

// Weathered volcanic rock seen on the headlands, sea stacks and boulders.
//   p world position, N world normal (geometric / mcr), h height above sea level
//   mcr: 0..1 large scale variation, seed: per object variation (0..1)
// With g.useGrad every sample uses the gradients in g (branch safe).
fn terrainRockSurface( p: vec3f, N: vec3f, h: f32, mcr: f32, seed: f32, mossAmount: f32, g: RockGrad ) -> RockSurface {
	let w = terrainTriWeights( N );
	// big blocks (4 m cells), plates (0.9 m) and grain / chips
	let big = terrainTriplanar( p, w, 27.0, g );
	let mid = terrainTriplanar( p, w, 6.1, g );
	let fine = terrainTriplanar( p, w, 1.3, g );
	// pixel footprint (m): features smaller than a few pixels fade out instead of sparkling
	let px = select( length( abs( g.dpdx ) + abs( g.dpdy ) ), max( length( g.dpdx ), length( g.dpdy ) ), g.useGrad );
	let fineK = 1.0 - smoothstep( 0.006, 0.02, px );
	let midK = 1.0 - smoothstep( 0.03, 0.1, px );
	let hr = big.x * 0.45 + mid.x * 0.35 + ( ( fine.x - 0.5 ) * fineK + 0.5 ) * 0.2;

	// layered lava flows / bedding on steep faces: irregular bands (1D lookup of the fbm channel
	// along the height, warped), faded out once a band gets thinner than a few pixels
	let steep = 1.0 - smoothstep( 0.55, 0.85, N.y );
	let bandY = p.y + mid.w * 2.5 + mcr * 6.0;
	var fwY = g.fwY;
	if ( ! g.useGrad ) { fwY = fwidth( bandY ); }
	let bandUV = vec2f( bandY / 14.0, seed * 0.37 + 0.13 );
	var strata: f32;
	if ( g.useGrad ) {
		strata = terrainDetailGrad( bandUV, vec2f( fwY / 14.0, 0.0 ), vec2f( 0.0 ) ).w;
	} else {
		strata = textureSample( terrainDetailTex, smpAniso4Repeat, bandUV ).w;
	}
	let strataAA = 1.0 - smoothstep( 0.15, 0.6, fwY );
	let tone = hr * 0.9 + ( mcr - 0.5 ) * 0.7 + ( strata - 0.5 ) * 0.8 * steep * strataAA + ( seed - 0.5 ) * 0.3;
	var col = mix( PAL_rockDark, PAL_rockMid, smoothstep( 0.1, 0.5, tone ) );
	col = mix( col, PAL_rockLight, smoothstep( 0.5, 0.85, tone ) );
	// iron staining / warm weathering in patches
	col = mix( col, PAL_rockWarm, smoothstep( 0.62, 0.8, mid.w + mcr * 0.3 ) * 0.18 );
	// joints between the big blocks, fainter between plates
	col = col * ( smoothstep( 0.05, 0.25, big.x ) * 0.35 + 0.65 ) * ( smoothstep( 0.05, 0.25, mid.x ) * 0.15 + 0.85 );
	// rain streaks: dark stains running down steep faces, paler bands between (the fbm channel
	// stretched vertically on the two vertical projection planes)
	let sUVa = vec2f( p.z / 3.1, p.y / 41.0 );
	let sUVb = vec2f( p.x / 3.1 + 0.5, p.y / 41.0 + 0.3 );
	let sa = terrainDetailGrad( sUVa, vec2f( g.dpdx.z / 3.1, g.dpdx.y / 41.0 ), vec2f( g.dpdy.z / 3.1, g.dpdy.y / 41.0 ) );
	let sb = terrainDetailGrad( sUVb, vec2f( g.dpdx.x / 3.1, g.dpdx.y / 41.0 ), vec2f( g.dpdy.x / 3.1, g.dpdy.y / 41.0 ) );
	let sw4 = pow( abs( N.xz ), vec2f( 4.0 ) );
	let stainS = ( sa.w * sw4.x + sb.w * sw4.y ) / ( sw4.x + sw4.y + 1e-5 );
	let stain = smoothstep( 0.52, 0.72, stainS ) * steep;
	col = col * ( 1.0 - stain * 0.4 ) * ( smoothstep( 0.35, 0.2, stainS ) * steep * 0.12 + 1.0 );

	// lichens on the dry upper faces
	let dry = smoothstep( 2.6, 4.0, h );
	let lichen = smoothstep( 0.6, 0.78, mid.y ) * smoothstep( 0.2, 0.7, N.y ) * dry * smoothstep( 0.45, 0.65, mcr );
	col = mix( col, PAL_lichenPale, lichen * 0.45 );
	col = mix( col, PAL_lichenOrange, smoothstep( 0.8, 0.88, mid.y ) * dry * smoothstep( 0.5, 0.8, N.y ) * 0.3 );

	// moss / grass on ledges and tops, ferns hanging along the bedding planes of steep faces
	let ledge = smoothstep( 0.55, 0.7, strata ) * steep * strataAA * smoothstep( 0.4, 0.6, mid.w + ( mcr - 0.5 ) * 0.4 );
	let moss = max( smoothstep( 0.62, 0.9, N.y + ( big.x - 0.5 ) * 0.5 + ( mcr - 0.5 ) * 0.3 ), ledge * 0.8 )
		* smoothstep( 2.5, 5.0, h ) * mossAmount;
	col = mix( col, mix( PAL_moss, PAL_mossDry, mid.w ), moss * 0.9 );

	// shoreline zonation: black lichen band (splash zone), barnacles and algae in the intertidal
	let splash = smoothstep( 0.5, 1.0, h ) * smoothstep( 2.8, 1.8, h + mid.w * 1.2 ) * smoothstep( 0.35, 0.6, mcr + mid.w * 0.3 );
	col = mix( col, PAL_blackZone, splash * 0.55 );
	// sun-bleached, weathered upper faces
	col = mix( col, PAL_rockLight, smoothstep( 0.35, 0.95, N.y ) * smoothstep( 1.5, 3.0, h ) * 0.3 );
	let inter = smoothstep( -0.7, -0.2, h ) * smoothstep( 0.7, 0.2, h );
	let barn = smoothstep( 0.62, 0.72, fine.z ) * inter * fineK;
	col = mix( col, PAL_algae, inter * smoothstep( 0.4, 0.6, mid.y ) * 0.6 );
	col = mix( col, PAL_barnacle, barn * 0.8 );
	// below the water: algae films and pink coralline crusts
	let sub = smoothstep( -0.3, -1.2, h );
	col = mix( col, mix( PAL_algae, PAL_coralline, smoothstep( 0.45, 0.7, mid.w ) ), sub * 0.55 );

	// wet below the swash line (dark, glossy)
	let wet = smoothstep( 1.0, 0.25, h + mid.w * 0.3 );
	col = col * mix( 1.0, 0.55, wet );

	var r: RockSurface;
	r.albedo = col;
	r.rough = mix( mix( 0.88, 0.8, steep ), 0.45, wet ) + moss * 0.06;
	// relief (m): tilted blocks and plates with bevelled joints, then grain
	r.hd = big.x * 0.25 + mid.x * 0.07 * ( midK * 0.6 + 0.4 ) + fine.x * 0.012 * fineK * ( 1.0 - wet * 0.6 ) + barn * 0.005;
	r.moss = moss;
	r.wet = wet;
	r.height = hr;
	return r;
}

// saturation helper
fn terrainSaturation( c: vec3f, s: f32 ) -> vec3f {
	return mix( vec3f( luminance( c ) ), c, s );
}

struct MeadowTone {
	tone: vec3f,
	dry: f32,
	lush: f32,
};

//   mA, mB: detail fbm channel at the 173 m / 47 m scales (~0.5 +- 0.1): the samples at
//   rot2( xz, 0.7 ) / 173 and rot2( xz, 2.1 ) / 47 that the terrain takes anyway; slope: 1 - N.y;
//   south: N.z (the sun side); detail: optional finer fbm (~0.5 +- 0.1) that breaks up the patches
//   (hasDetail = false: none)
// Returns { tone, dry, lush }: mostly fresh green grass with olive, sun-bleached yellow and a few
// straw-dry patches (more on exposed slopes), darker lush grass in the damp patches (the hollows
// are darkened further by the AO).
fn terrainMeadowTone( mA: f32, mB: f32, slope: f32, south: f32, detail: f32, hasDetail: bool ) -> MeadowTone {
	var m = mA * 0.55 + mB * 0.45 + slope * 0.25 + south * 0.04;
	let dd = select( 0.0, detail - 0.5, hasDetail );
	m += dd * 0.28;
	let olive = smoothstep( 0.52, 0.6, m );
	let yellow = smoothstep( 0.6, 0.67, m );
	let straw = smoothstep( 0.66, 0.73, m + ( mB - 0.5 ) * 0.2 );
	let lush = smoothstep( 0.46, 0.37, mB * 0.7 + mA * 0.3 + slope * 0.2 + dd * 0.2 );
	var c = mix( MEADOW_green, MEADOW_olive, olive );
	c = mix( c, MEADOW_yellow, yellow * 0.8 );
	c = mix( c, MEADOW_straw, straw * 0.55 );
	c = mix( c, MEADOW_lush, lush * 0.75 );
	var o: MeadowTone;
	o.tone = c;
	o.dry = olive * 0.4 + yellow * 0.6;
	o.lush = lush;
	return o;
}
`,Oo=null,ko=null;function Ao(){return ko||={texture:bo()}}function jo(){return Oo||(Oo=new R({name:`terrainShading`,deps:[z],bindings:{terrainDetailTex:Ao()},code:Do}),Oo)}var Mo=512,No=24,Po=6,Fo=1.22,Io=24;function Lo(e,t,n,r,i,a=!1){let o=new I({label:i,width:t,height:n,format:r,mips:a,usage:[`sample`,`copyDst`],data:e});return o.getGPU(),a===!0&&Gi(o),o}var Ro=class{constructor(e,t){this.terrain=e;let n=e.res,r=performance.now();this.heightTexture=Lo(e.heights,n,n,`r32float`,`terrainHeights`);let i=fo(e);this.normalTexture=Lo(i.normal,n,n,`rgba8unorm`,`terrainNormalRockAO`,!0),this.splatTexture=Lo(i.splat,n,n,`rgba8unorm`,`terrainSplat`,!0),this.detailTexture=bo();let a=po(e,4),o=new I({label:`terrainShadowHeights`,width:a.levels[0].width,height:a.levels[0].height,format:`r16float`,mips:a.levels.length,usage:[`sample`,`copyDst`]});o.getGPU(),a.levels.forEach((e,t)=>o.upload(e.data,{mip:t,width:e.width,height:e.height})),this.shadowHeightTexture=o,this.shadowTexel=a.texel,this.maxHeight=a.maxHeight,this.size=e.size,this.origin=e.origin,this.res=n,this.uniforms=new L(`TerrainParams`,{origin:[`f32`,e.origin],size:[`f32`,e.size],res:[`f32`,n],shoreRes:[`f32`,1],sunBake:[`vec3f`,new A(0,1,0)],sunBaked:[`f32`,0]},{label:`terrainParams`}),this.uOrigin=this.uniforms.fields.origin,this.uSize=this.uniforms.fields.size,this.shoreTexture=Lo(new Float32Array([1e4,0,0,0]),1,1,`rgba32float`,`terrainShoreField`),t&&this.setShoreField(t),this._initSunShadow(),this.module=new R({name:`terrain`,deps:[z],uniforms:this.uniforms,bindings:{terrainHeightTex:{texture:this.heightTexture,sampleType:`unfilterable-float`},terrainNormalTex:{texture:this.normalTexture},terrainSplatTex:{texture:this.splatTexture},terrainDetailTex:Ao(),terrainShoreTex:{texture:()=>this.shoreTexture,sampleType:`unfilterable-float`},terrainSunShadowTex:{texture:this.sunShadowTexture}},code:zo}),this.sunModulationModule=new R({name:`terrainSunModulation`,deps:[this.module],code:`fn materialSunModulation( P: vec3f, N: vec3f ) -> vec3f { return vec3f( terrainSunShadowAt( P ) ); }`}),this.timings={...i.ms,detail:this.detailTexture.userData.ms,total:performance.now()-r}}_initSunShadow(){this.sunShadowTexture=new I({label:`terrainSunShadow`,width:Mo,height:Mo,format:`rgba16float`,usage:[`sample`,`storage`]}),this.uSunBake=this.uniforms.fields.sunBake,this.uSunBaked=this.uniforms.fields.sunBaked,this._sunBaked=!1;let e=1/this.shadowTexel;this.sunShadowKernel=new yi({label:`Terrain Sun Shadow`,modules:[z],bindings:{terrainParams:{uniform:this.uniforms},terrainShadowHeights:{texture:this.shadowHeightTexture},terrainSunShadowOut:{storageTexture:this.sunShadowTexture,access:`write`}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	if ( gid.x >= ${Mo}u || gid.y >= ${Mo}u ) { return; }
	let ij = vec2f( gid.xy );
	let xz = ( ij + 0.5 ) / ${Mo}.0 * terrainParams.size + terrainParams.origin;
	let L = terrainParams.sunBake;
	let lxz = max( length( L.xz ), 1e-4 );
	let dir = L.xz / lxz;
	let tanEl = L.y / lxz;
	var top = -1e4;
	var occ = 0.0;
	var t = f32( ${No} );
	var dt = f32( ${Po} );
	for ( var i = 0; i < ${Io}; i++ ) {
		let q = xz + dir * t;
		let uv = ( q - terrainParams.origin ) / terrainParams.size;
		let hq = textureSampleLevel( terrainShadowHeights, smpLinearClamp, uv, log2( max( dt * ${e.toFixed(8)}, 1.0 ) ) ).x;
		let v = hq - t * tanEl;
		if ( v > top ) {
			top = v;
			occ = t;
		}
		dt *= ${Fo};
		t += dt;
	}
	textureStore( terrainSunShadowOut, vec2u( gid.xy ), vec4f( top, occ, 0.0, 1.0 ) );
}
`})}updateSunShadow(e,t=!1){let n=B.sunDir.value;return!t&&this._sunBaked&&n.angleTo(this.uSunBake.value)<.0015?!1:(this.uSunBake.value.copy(n),this.sunShadowKernel.dispatch([Mo/8,Mo/8,1]),this._sunBaked=!0,this.uSunBaked.value=1,!0)}setShoreField(e){this.shoreRes=e.res,this.shoreTexture.width===e.res?this.shoreTexture.upload(e.data):(this.shoreTexture.destroy(),this.shoreTexture=Lo(e.data,e.res,e.res,`rgba32float`,`terrainShoreField`)),this.uniforms.fields.shoreRes.value=e.res}},zo=`
fn terrainUvOf( xz: vec2f ) -> vec2f {
	return ( xz - terrainParams.origin ) / terrainParams.size;
}

// exact bilinear height at world xz (matches TerrainData.heightAt)
fn terrainHeightAt( xz: vec2f ) -> f32 {
	let res = terrainParams.res;
	let f = ( xz - terrainParams.origin ) / terrainParams.size * res - 0.5;
	let fc = clamp( f, vec2f( 0.0 ), vec2f( res - 1.001 ) );
	let i = floor( fc );
	let t = fract( fc );
	let ii = vec2i( i );
	let a = textureLoad( terrainHeightTex, ii, 0 ).x;
	let b = textureLoad( terrainHeightTex, ii + vec2i( 1, 0 ), 0 ).x;
	let c = textureLoad( terrainHeightTex, ii + vec2i( 0, 1 ), 0 ).x;
	let d = textureLoad( terrainHeightTex, ii + vec2i( 1, 1 ), 0 ).x;
	let h = mix( mix( a, b, t.x ), mix( c, d, t.x ), t.y );
	// outside the domain: deep ocean floor
	let outside = f.x < 0.0 || f.y < 0.0 || f.x > res - 1.0 || f.y > res - 1.0;
	return select( h, -90.0, outside );
}

// filtered normal (xz components), rock mask, ambient occlusion
fn terrainNormalRock( xz: vec2f ) -> vec4f {
	let s = textureSample( terrainNormalTex, smpLinearClamp, terrainUvOf( xz ) );
	return vec4f( s.xy * 2.0 - 1.0, s.z, s.w );
}
// explicit mip (e.g. in the vertex stage)
fn terrainNormalRockLevel( xz: vec2f, level: f32 ) -> vec4f {
	let s = textureSampleLevel( terrainNormalTex, smpLinearClamp, terrainUvOf( xz ), level );
	return vec4f( s.xy * 2.0 - 1.0, s.z, s.w );
}
fn terrainNormalAt( xz: vec2f ) -> vec3f {
	let nr = terrainNormalRockLevel( xz, 0.0 );
	return normalize( vec3f( nr.x, sqrt( max( 1.0 - nr.x * nr.x - nr.y * nr.y, 0.0025 ) ), nr.y ) );
}

// loose sand, worn ground / paths, gullies (land) or seagrass (seabed), seabed rubble (the
// eroded beach scarp face on land)
fn terrainSplat( xz: vec2f ) -> vec4f {
	return textureSample( terrainSplatTex, smpLinearClamp, terrainUvOf( xz ) );
}
fn terrainSplatLevel( xz: vec2f, level: f32 ) -> vec4f {
	return textureSampleLevel( terrainSplatTex, smpLinearClamp, terrainUvOf( xz ), level );
}

// shore field: (T, dirX, dirZ, exposure), bilinear via loads (float32 data)
fn terrainShoreSample( xz: vec2f ) -> vec4f {
	let res = terrainParams.shoreRes;
	let f = ( xz - terrainParams.origin ) / terrainParams.size * res - 0.5;
	let fc = clamp( f, vec2f( 0.0 ), vec2f( max( res - 1.001, 0.0 ) ) );
	let i = floor( fc );
	let t = fract( fc );
	let ii = vec2i( i );
	let mx = vec2i( max( i32( res ) - 1, 0 ) );
	let a = textureLoad( terrainShoreTex, ii, 0 );
	let b = textureLoad( terrainShoreTex, min( ii + vec2i( 1, 0 ), mx ), 0 );
	let c = textureLoad( terrainShoreTex, min( ii + vec2i( 0, 1 ), mx ), 0 );
	let d = textureLoad( terrainShoreTex, min( ii + vec2i( 1, 1 ), mx ), 0 );
	return mix( mix( a, b, t.x ), mix( c, d, t.x ), t.y );
}

// 0 (in the terrain's shadow) .. 1 (lit) for a world position, soft penumbra that widens with the
// occluder distance
fn terrainSunShadowAt( P: vec3f ) -> f32 {
	let N = f32( textureDimensions( terrainSunShadowTex ).x );
	let st = clamp( terrainUvOf( P.xz ) * N - 0.5, vec2f( 0.0 ), vec2f( N - 1.001 ) );
	let i = vec2i( floor( st ) );
	let t = fract( st );
	let s = mix(
		mix( textureLoad( terrainSunShadowTex, i, 0 ), textureLoad( terrainSunShadowTex, i + vec2i( 1, 0 ), 0 ), t.x ),
		mix( textureLoad( terrainSunShadowTex, i + vec2i( 0, 1 ), 0 ), textureLoad( terrainSunShadowTex, i + vec2i( 1, 1 ), 0 ), t.x ),
		t.y
	);
	let w = s.y * 0.012 + 0.35;
	return mix( 1.0, smoothstep( -w, w, P.y - s.x ), terrainParams.sunBaked );
}
`,Bo=class{constructor({gridSize:e=64,leafSize:t=8,levels:n=12,rangeFactor:r=2.5,morphStartRatio:i=.66,maxInstances:a=1500,minY:o=-20,maxY:s=20,heightBounds:c=null,center:l=null,prefix:u=`cdlod`}={}){this.G=e,this.leafSize=t,this.levels=n,this.minY=o,this.maxY=s,this.heightBounds=c,this.fixedRoot=l,this.ranges=[];let d=[],f=0;for(let e=0;e<n;e++){let n=t*2**e*r;this.ranges.push(n);let a=f+(n-f)*i;d.push(new E(a,1/Math.max(.001,n-a))),f=n}let p=[];for(let r=0;r<n;r++)p.push(t*2**r/e);this.uMorph={array:d},this.uSpacing={array:p};let m=u,h=m[0].toUpperCase()+m.slice(1);this.params=new L(h+`Params`,{morph:[`vec4f[${n}]`,d.map((e,t)=>new j(e.x,e.y,p[t],0))]},{label:m}),this.module=new R({name:m,uniforms:this.params,uniformName:m,code:`
struct ${h}Vertex { worldXZ: vec2f, spacing: f32, morphK: f32, lod: f32, size: f32 };

// Morph in world space on the LOD's own vertex lattice (spacing h). Quarter nodes of a
// partially subdivided parent carry the parent's LOD, so their extra vertices first snap
// onto that lattice; every node covering a point then computes the same position.
fn ${m}Snapped( node: vec4f, grid: vec2f ) -> vec2f {
	let h = ${m}.morph[ i32( node.w ) ].z;
	let p = node.xy + grid * node.z;
	return floor( p / h + 1e-3 ) * h;
}

fn ${m}Morph( node: vec4f, grid: vec2f, viewPos: vec3f, y0: f32 ) -> ${h}Vertex {
	let lod = i32( node.w );
	let m = ${m}.morph[ lod ];
	let h = m.z;
	let p = node.xy + grid * node.z;
	let idx = floor( p / h + 1e-3 );
	let snapped = idx * h;
	let dist = length( viewPos - vec3f( snapped.x, y0, snapped.y ) );
	let morphK = clamp( ( dist - m.x ) * m.y, 0.0, 1.0 );
	let odd = fract( idx * 0.5 ) * 2.0;
	var o: ${h}Vertex;
	o.worldXZ = snapped - odd * h * morphK;
	o.spacing = h * ( morphK + 1.0 );
	o.morphK = morphK;
	o.lod = node.w;
	o.size = node.z;
	return o;
}
`});let g=e,_=new Float32Array((g+1)*(g+1)*3),v=0;for(let e=0;e<=g;e++)for(let t=0;t<=g;t++)_[v++]=t/g,_[v++]=0,_[v++]=e/g;let y=new Uint32Array(g*g*6);v=0;for(let e=0;e<g;e+=8)for(let t=0;t<g;t++)for(let n=e;n<Math.min(e+8,g);n++){let e=t*(g+1)+n,r=e+1,i=e+(g+1),a=i+1;(n+t)%2==0?(y[v++]=e,y[v++]=i,y[v++]=r,y[v++]=r,y[v++]=i,y[v++]=a):(y[v++]=e,y[v++]=i,y[v++]=a,y[v++]=e,y[v++]=a,y[v++]=r)}let b=new Gt;b.setAttribute(`position`,new Dt(_,3)),b.setIndex(new Dt(y,1)),this.nodeArray=new Float32Array(a*4),this.nodeAttr=new Mt(this.nodeArray,4),b.setAttribute(`nodeData`,this.nodeAttr),b.instanceCount=0,b.boundingSphere=new Ae(new A,1e7),b.boundingBox=new Ee(new A(-1e7,-1e7,-1e7),new A(1e7,1e7,1e7)),this.geometry=b,this.maxInstances=a,this.count=0,this._box=new Ee,this._frustum=new Le,this._mat=new P,this._cam=new A,this.lodCounts=Array(n).fill(0)}vertexNodes(e=null,{out:t=`lod`,viewPos:n=`frame.cameraPos`}={}){let r=this.module.name;return`let ${t} = ${r}Morph( v.nodeData, v.position.xz, ${n}, ${e?`${e}( ${r}Snapped( v.nodeData, v.position.xz ) )`:`0.0`} );`}update(e){e.updateMatrixWorld(),this._mat.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._mat,e.coordinateSystem,e.reversedDepth),e.getWorldPosition(this._cam),this.count=0,this.lodCounts.fill(0);let t=this.levels-1,n=this.leafSize*2**t;if(this.fixedRoot){let{x:e,z:r,size:i}=this.fixedRoot,a=Math.ceil(i/n);for(let i=0;i<a;i++)for(let o=0;o<a;o++)this._select(e+o*n,r+i*n,n,t)}else{let e=Math.floor(this._cam.x/n),r=Math.floor(this._cam.z/n);for(let i=-1;i<=1;i++)for(let a=-1;a<=1;a++)this._select((e+a)*n,(r+i)*n,n,t)}let r=this.count,i=this._order||=[];i.length=r;let a=this.nodeArray,o=this._cam;for(let e=0;e<r;e++){let t=a[e*4+2],n=Math.max(a[e*4]-o.x,0,o.x-a[e*4]-t),r=Math.max(a[e*4+1]-o.z,0,o.z-a[e*4+1]-t);i[e]={d:n*n+r*r,x:a[e*4],z:a[e*4+1],s:t,l:a[e*4+3]}}i.sort((e,t)=>e.d-t.d);for(let e=0;e<r;e++){let t=i[e];a[e*4]=t.x,a[e*4+1]=t.z,a[e*4+2]=t.s,a[e*4+3]=t.l}this.geometry.instanceCount=this.count,this.nodeAttr.clearUpdateRanges(),this.nodeAttr.addUpdateRange(0,this.count*4),this.nodeAttr.needsUpdate=!0}_bounds(e,t,n){if(this.heightBounds){let[r,i]=this.heightBounds(e,t,e+n,t+n);this._box.min.set(e,r,t),this._box.max.set(e+n,i,t+n)}else this._box.min.set(e,this.minY,t),this._box.max.set(e+n,this.maxY,t+n);return this._box}_intersectsSphere(e,t){let n=this._cam,r=Math.max(e.min.x-n.x,0,n.x-e.max.x),i=Math.max(e.min.y-n.y,0,n.y-e.max.y),a=Math.max(e.min.z-n.z,0,n.z-e.max.z);return r*r+i*i+a*a<=t*t}_add(e,t,n,r){if(this.count>=this.maxInstances)return;let i=this.count*4;this.nodeArray[i]=e,this.nodeArray[i+1]=t,this.nodeArray[i+2]=n,this.nodeArray[i+3]=r,this.count++,this.lodCounts[r]++}_select(e,t,n,r){let i=this._bounds(e,t,n);if(!this._intersectsSphere(i,this.ranges[r]))return!1;if(!this._frustum.intersectsBox(i))return!0;if(r===0||!this._intersectsSphere(i,this.ranges[r-1]))return this._add(e,t,n,r),!0;let a=n*.5,o=[[e,t],[e+a,t],[e,t+a],[e+a,t+a]];for(let[e,t]of o)if(!this._select(e,t,a,r-1)){let n=this._bounds(e,t,a);this._frustum.intersectsBox(n)&&this._add(e,t,a,r)}return!0}},Vo={0:`front`,1:`back`,2:`double`,front:`front`,back:`back`,double:`double`};function Ho(e){let t={...e};return t.side!==void 0&&(t.side=Vo[t.side]||`front`),t}var Uo=class extends Ir{constructor(e={},t=null){let n=Ho(e),r={...n.uniforms||{}};r.envMapIntensity=[`f32`,n.envMapIntensity??1],r.emissiveIntensity=[`f32`,n.emissiveIntensity??1],t&&Object.assign(r,t),super({...n,uniforms:r}),this.isSceneMaterial=!0,this.isMeshStandardMaterial=!0}get side(){return this._side}set side(e){let t=Vo[e]||`front`;t!==this._side&&this._side!==void 0&&this.version++,this._side=t}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(e){this.uniforms.emissiveIntensity.value=e}get envMapIntensity(){return this.uniforms.envMapIntensity.value}set envMapIntensity(e){this.uniforms.envMapIntensity.value=e}get surface(){return this._prelude()+(this._surface||``)}set surface(e){this._surface=e}_prelude(){return`	s.emissive = s.emissive * mat.emissiveIntensity;
	s.envIntensity = mat.envMapIntensity;
`}},Wo=class extends Uo{constructor(e={}){let t=e.clearcoat??0,n=e.sheen??0;super(e,{clearcoat:[`f32`,t],clearcoatRoughness:[`f32`,e.clearcoatRoughness??0],specularIntensity:[`f32`,e.specularIntensity??1],sheen:[`f32`,n],sheenColor:[`vec3f`,null],sheenRoughness:[`f32`,e.sheenRoughness??1],ior:[`f32`,e.ior??1.5]}),this.isMeshPhysicalMaterial=!0,e.sheenColor===void 0?this.uniforms.sheenColor.value=Go(0):this.uniforms.sheenColor.value=Go(e.sheenColor),t>0&&(this.defines.CLEARCOAT=1),n>0&&(this.defines.SHEEN=1)}get clearcoat(){return this.uniforms.clearcoat.value}set clearcoat(e){e>0!=!!this.defines.CLEARCOAT&&this.setDefine(`CLEARCOAT`,+(e>0)),this.uniforms.clearcoat.value=e}get clearcoatRoughness(){return this.uniforms.clearcoatRoughness.value}set clearcoatRoughness(e){this.uniforms.clearcoatRoughness.value=e}get specularIntensity(){return this.uniforms.specularIntensity.value}set specularIntensity(e){this.uniforms.specularIntensity.value=e}get sheen(){return this.uniforms.sheen.value}set sheen(e){e>0!=!!this.defines.SHEEN&&this.setDefine(`SHEEN`,+(e>0)),this.uniforms.sheen.value=e}get sheenColor(){return this.uniforms.sheenColor.value}get sheenRoughness(){return this.uniforms.sheenRoughness.value}set sheenRoughness(e){this.uniforms.sheenRoughness.value=e}get ior(){return this.uniforms.ior.value}set ior(e){this.uniforms.ior.value=e}_prelude(){return super._prelude()+`	s.clearcoat = mat.clearcoat;
	s.clearcoatRoughness = mat.clearcoatRoughness;
	s.specularIntensity = mat.specularIntensity;
	s.sheenColor = mat.sheenColor * mat.sheen;
	s.sheenRoughness = mat.sheenRoughness;
	s.ior = mat.ior;
`}};function Go(e){return e&&e.isColor?e.clone():new Se().set(e)}var Ko=(e={})=>new Uo(e),qo=(e={})=>new Wo(e),Jo=[248,297],Yo=class{constructor({scene:e,terrainData:t,terrainGPU:n,gridSize:r=40,rangeFactor:i=2,sunShadow:a=!0,renderer:o=null}){this.data=t,this.gpu=n;let s=t.size/2;this.lod=new Bo({gridSize:r,leafSize:8,levels:9,heightBounds:(e,n,r,i)=>t.boundsFor(e,n,r,i),center:{x:-s,z:-s,size:t.size},rangeFactor:i,prefix:`terrainLod`}),this.wetness=null,this.sunShadow=a,this.renderer=o,this.uViewPos={value:new A},this.gustOffset=new E;let c=this.material=Ko({name:`Terrain`,roughness:.9,metalness:0,uniforms:{viewPos:[`vec3f`,this.uViewPos.value],wetDarken:[`f32`,.58],gustOffset:[`vec2f`,this.gustOffset]},attributes:{nodeData:`vec4f`}});this.params={wetDarken:c.uniforms.wetDarken},this.uViewPos=c.uniforms.viewPos,c.vertex=`
	// CDLOD vertex (same lattice snapping and geomorph as the CDLOD module) morphing toward viewPos
	let snapped = terrainLodSnapped( v.nodeData, v.position.xz );
	let y0 = terrainHeightAt( snapped );
	let cv = terrainLodMorph( v.nodeData, v.position.xz, mat.viewPos, y0 );
	v.useWorld = true;
	v.worldPos = vec3f( cv.worldXZ.x, terrainHeightAt( cv.worldXZ ), cv.worldXZ.y );
	v.worldNormal = vec3f( 0.0, 1.0, 0.0 );
`,this.finalizeMaterial(),this.mesh=new Kt(this.lod.geometry,c),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.mesh.staticVelocity=!0,this.mesh.name=`Terrain`,e.add(this.mesh)}finalizeMaterial(){let e=this.material,t=[this.gpu.module,jo(),this.lod.module];this.wetness&&(t.push(...this.wetness.modules||[]),t.push(new R({name:`terrainWetness`,deps:[this.gpu.module,...this.wetness.modules||[]],code:this.wetness.code}))),t.push(new R({name:`terrainMaterial`,deps:[this.gpu.module,jo()],code:Xo})),e.modules=t,e.defines.HAS_WETNESS=+!!this.wetness,e.defines.MATERIAL_SUN_MODULATION=+!!this.sunShadow,e.defines.GRASSLAND=+!!this.data.grassland,e.surface=Zo,e.needsUpdate=!0}update(e){e.getWorldPosition(this.uViewPos.value),this.lod.update(e);let t=B.windDir.value,n=.7*B.windSpeed.value+1.5,r=B.dt.value;this.gustOffset.x+=t.x*n*r,this.gustOffset.y+=t.y*n*r,this.gpu.updateSunShadow(this.renderer)}},G=xo,Xo=`
// meadow weight of the current fragment (written by the surface, read by the sun modulation)
var<private> terMeadowW: f32 = 0.0;

// tall grass shades itself when the sun is low (the meadow darkens and gains contrast)
fn materialSunModulation( P: vec3f, N: vec3f ) -> vec3f {
	let grass = mix( 1.0, smoothstep( -0.05, 0.45, frame.sunDir.y ) * 0.35 + 0.62, terMeadowW );
	return vec3f( terrainSunShadowAt( P ) * grass );
}

// Travelling gust field in [0, 1] (VegNodes gustAt): noise of (worldXZ - windDir * t * speed),
// where the time-integrated offset comes from mat.gustOffset. Two fetches of the detail texture's
// fbm channel (~35 m and ~15 m gust cells).
fn terGustAt( xz: vec2f, offset: vec2f ) -> f32 {
	let p = xz - offset;
	let n = textureSampleLevel( terrainDetailTex, smpLinearRepeat, p / 140.0, 0.0 ).w * 0.62
		+ textureSampleLevel( terrainDetailTex, smpLinearRepeat, p / 61.0 + 0.37, 0.0 ).w * 0.38;
	return smoothstep( 0.46, 0.6, n );
}

// ---- wetness (swash zone) from the shore system, else a static damp band
fn terWetFoam( xz: vec2f, h: f32 ) -> vec2f {
#if HAS_WETNESS
	return terrainWetness( xz, h );
#else
	return vec2f( smoothstep( 0.5, 0.0, h ), 0.0 );
#endif
}

fn terDetail( uv: vec2f ) -> vec4f {
	return textureSample( terrainDetailTex, smpAniso4Repeat, uv );
}
`,Zo=`
	let p = in.P;
	let xz = p.xz;
	let h = p.y;
	var outRough = 0.9;
	var outN = vec3f( 0.0, 1.0, 0.0 );
	var outAO = 1.0;
	var albedoOut = vec3f( 0.0 );

	// ---- data maps
	let nr = terrainNormalRock( xz );
	let N0 = normalize( vec3f( nr.x, sqrt( max( 1.0 - nr.x * nr.x - nr.y * nr.y, 0.0025 ) ), nr.y ) );
	let sp = terrainSplat( xz );
	let slope = 1.0 - N0.y;
	let camDist = length( frame.cameraPos - p );
	let dpx = dpdx( p ); let dpy = dpdy( p );
	let fwY = fwidth( h );

	// ---- deep seabed (seen through the water: no rock, land cover, swash or wind ripples),
	// the same colour / relief / AO as the full path below, from 6 detail samples instead of ~17
	// detail samples shared by both paths (sampled in uniform control flow: no derivative seams
	// where the paths meet)
	let macroA = terDetail( ${So(`xz`,.7)} / 173.0 ).w;
	let macroB = terDetail( ${So(`xz`,2.1)} / 47.0 ).w;
	let mcr = macroA * 0.6 + macroB * 0.4;
	let dN = terDetail( xz / 1.9 );
	let dM = terDetail( ${So(`xz`,1.3)} / 6.7 + 0.21 );
	let dF = terDetail( ${So(`xz`,2.4)} / 0.63 + 0.53 );
	let grain = min( dN.z, 0.62 );
	let grainF = min( dF.z, 0.62 );
#if REFRACTION_CLIP
	// the refraction source (half resolution, seen blurred through the water): every non-rock
	// fragment under the water takes the cheap seabed path
	let seabedPath = h < 0.4 && nr.z < 0.05;
#else
	let seabedPath = h < -0.8 && nr.z < 0.05 && slope < 0.18;
#endif
	let sw = vec2f( ${W.swellDir.x}, ${W.swellDir.y} );
	let swDir = sw;
	let rc = vec2f( ${W.reef.center.x.toFixed(3)}, ${W.reef.center.z.toFixed(3)} );
	// ripple phases of both paths (identical there), differentiated in uniform control flow
	let ph2 = dot( xz, swDir ) * ( 6.2832 / 0.75 ) + dM.w * 16.0 + macroB * 24.0;
	let fade2 = 1.0 - smoothstep( 0.5, 2.0, fwidth( ph2 ) );
	let rip2 = pow( sin( ph2 ) * 0.5 + 0.5, 1.4 );
	let ph3 = dot( xz, swDir ) * ( 6.2832 / 0.16 ) + dM.w * 26.0 + dN.w * 5.0;
	let fade3 = 1.0 - smoothstep( 0.6, 2.2, fwidth( ph3 ) );
	let rip3 = pow( sin( ph3 ) * 0.5 + 0.5, 1.5 );
	// bump height of either path: the surface-gradient bump runs after the branch (its screen-space
	// derivatives would be undefined in quads that straddle the two paths)
	var hdOut = 0.0;
	if ( seabedPath ) {

		let underW = 1.0;
		let sandW = smoothstep( 0.3, 0.72, sp.x + ( dM.z - 0.5 ) * 0.5 + ( mcr - 0.5 ) * 0.35 );
		// ---- seabed: sand with ripple fields, seagrass meadows, rubble heads
		let depth = -h;
		let reefD = length( xz - rc );
		let reefW = 1.0 - smoothstep( ${W.reef.radius*.5}, ${W.reef.radius*1.15}, reefD + ( mcr - 0.5 ) * 30.0 );
		var under = mix( ${G(.84,.78,.64)}, ${G(.72,.7,.58)}, smoothstep( 1.0, 9.0, depth ) );
		under = under * ( ( dM.w - 0.5 ) * 0.14 + 1.0 ) * ( ( grain - 0.45 ) * 0.25 + 1.0 );
		// megaripple fields (~0.75 m) across the swell, troughs collect darker shell hash; not in
		// the swash zone or the first metre of depth
		let fieldW = smoothstep( 0.42, 0.62, macroB + ( dM.w - 0.5 ) * 0.35 ) * smoothstep( 0.9, 2.0, depth ) * ( 1.0 - reefW );
		under = under * ( ( rip2 - 0.55 ) * 0.22 * fieldW * fade2 + 1.0 );
		// small wave ripples (~0.16 m) everywhere below the swash
		// seagrass meadows: ragged edges, blade streaks leaning with the wave surge, epiphyte tips
		// (the fringe breaks up into clumps: noise at three scales thresholds the soft splat edge)
		let clumps = ( dM.w - 0.5 ) * 0.5 + ( dN.y - 0.45 ) * 0.4 + ( macroB - 0.5 ) * 0.3;
		let seagrassW = smoothstep( 0.3, 0.55, sp.z + clumps ) * underW * smoothstep( 0.3, 0.9, depth );
		let swPerp = vec2f( -swDir.y, swDir.x );
		let blades = terDetail( vec2f( dot( xz, swDir ) / 2.6, dot( xz, swPerp ) / 0.35 ) ).y;
		var meadow = mix( ${G(.12,.16,.07)}, ${G(.27,.29,.15)}, smoothstep( 0.35, 0.75, blades ) );
		meadow = mix( meadow, ${G(.24,.2,.11)}, smoothstep( 0.55, 0.8, dM.y + ( macroB - 0.5 ) * 0.4 ) * 0.5 );
		// sparse at the fringe: sand shows between the blades; thinner, paler patches inside
		meadow = mix( under, meadow, smoothstep( 0.3, 0.85, sp.z + clumps * 0.5 ) * 0.35 + 0.65 );
		meadow = mix( meadow, mix( meadow, under, 0.45 ), smoothstep( 0.58, 0.8, macroB + ( dM.w - 0.5 ) * 0.4 ) );
		under = mix( under, meadow, seagrassW );
		// rubble heads: coral rubble and rock turfed with algae, pink coralline crusts
		let rubbleW = smoothstep( 0.3, 0.6, sp.w + ( dN.x - 0.5 ) * 0.4 + ( dM.w - 0.5 ) * 0.3 ) * underW;
		var rubble = mix( ${G(.2,.19,.15)}, ${G(.36,.33,.26)}, smoothstep( 0.3, 0.7, dN.x ) );
		rubble = mix( rubble, ${G(.2,.24,.1)}, smoothstep( 0.5, 0.7, dF.y ) * 0.6 );
		rubble = mix( rubble, ${G(.58,.38,.44)}, smoothstep( 0.62, 0.74, dM.x ) * 0.6 );
		under = mix( under, rubble, rubbleW );
		// reef flat: coral rubble and pink crusts toward the reef
		under = mix( under, mix( ${G(.56,.5,.44)}, ${G(.6,.43,.46)}, smoothstep( 0.45, 0.7, dM.x ) ), reefW * 0.7 * smoothstep( 0.4, 0.6, dN.x ) );

		// damp sand below the berm (wet = 0 under water)
		let dampMottle = smoothstep( 0.3, 0.7, dM.w + ( dN.y - 0.45 ) * 0.6 + ( macroB - 0.5 ) * 0.4 );
		let wetK = smoothstep( 1.7, 0.5, h + dM.w * 0.3 ) * sandW * mix( 0.22, 0.5, dampMottle );
		let wetAlbedo = terrainSaturation( under * mat.wetDarken, 1.15 ) * vec3f( 0.97, 0.98, 1.0 );
		albedoOut = mix( under, wetAlbedo, wetK );
		outRough = 0.75;
		let waveR = rip3 * 0.012 * fade3 * smoothstep( -0.3, -0.9, h ) * ( 1.0 - seagrassW );
		let megaR = rip2 * 0.035 * fade2 * fieldW * ( 1.0 - seagrassW );
		let sandH = grain * 0.004 + grainF * 0.003 + waveR + megaR;
		let seabedH = seagrassW * ( blades * 0.05 + 0.08 ) + rubbleW * ( dN.x * 0.07 + dF.x * 0.015 );
		hdOut = sandH + seabedH;
		outAO = nr.w * ( 1.0 - seagrassW * 0.3 ) * ( 1.0 - rubbleW * smoothstep( 0.55, 0.2, dN.x ) * 0.35 );
		terMeadowW = 0.0;

	} else {

		// ---- detail samples (tileable heights: x rock, y soil, z sand, w fbm)
		// sand grain without the pebble peaks (pebbles are drawn separately where they belong)

		// ---- downslope streaks (rock flutes, hanging vegetation, landslide scars): the detail
		// texture stretched vertically on the two vertical projection planes
		let sw4 = pow( abs( N0.xz ), vec2f( 4.0 ) );
		let swN = sw4 / ( sw4.x + sw4.y + 1e-5 );
		// (everything they shape is weighted by the slope and vanishes at 0.28 or less: explicit
		// gradients in the branch, the same as the implicit ones of the full-screen quad)
		var streak = 0.5; var scar = 0.5;
		if ( slope > 0.28 ) {
			let stA = textureSampleGrad( terrainDetailTex, smpAniso4Repeat, vec2f( p.z / 9.3, h / 37.0 ), vec2f( dpx.z / 9.3, dpx.y / 37.0 ), vec2f( dpy.z / 9.3, dpy.y / 37.0 ) );
			let stB = textureSampleGrad( terrainDetailTex, smpAniso4Repeat, vec2f( p.x / 9.3 + 0.5, h / 37.0 + 0.3 ), vec2f( dpx.x / 9.3, dpx.y / 37.0 ), vec2f( dpy.x / 9.3, dpy.y / 37.0 ) );
			streak = stA.w * swN.x + stB.w * swN.y;
			scar = stA.y * swN.x + stB.y * swN.y;
		}

		// ---- rock: only evaluated where the rock mask or the slope allow it. Exposure follows the
		// form: steep faces, convex spurs and ridges (high AO) go bare, gully floors (low AO,
		// drainage lines) keep soil and plants; noise and fall-line streaks break the outline up.
		// Around the bare rock a band of scree / dark soil and moss; plants creep over it.
		let gully = sp.z * smoothstep( -0.5, 0.5, h );
		var rockAlbedo = vec3f( 0.2 ); var rockRough = 0.8; var rockHd = 0.0;
		var rockW = 0.0; var screeW = 0.0;
		let cliffK = smoothstep( 0.28, 0.55, slope );
		let convex = smoothstep( 0.5, 0.85, nr.w );
		// rv below, without the rock's own relief term, which adds at most 0.1925 (R.height <= 1): where
		// even that can't reach the scree band (0.28), rock and scree weigh 0 and the rock isn't shaded
		let rvBound = nr.z * 0.7 + smoothstep( 0.3, 0.62, slope ) * 0.5 + convex * 0.14 - gully * 0.4
			+ ( dM.w - 0.5 ) * 0.34 + ( dN.w - 0.5 ) * 0.22 + ( streak - 0.5 ) * 1.0 * cliffK + 0.2;
		if ( ( nr.z > 0.06 || slope > 0.3 ) && rvBound > 0.28 ) {

			var g: RockGrad;
			g.dpdx = dpx; g.dpdy = dpy; g.fwY = fwY; g.useGrad = true;
			let R = terrainRockSurface( p, N0, h, mcr, 0.5, 1.0, g );
			let rv = nr.z * 0.7 + smoothstep( 0.3, 0.62, slope ) * 0.5 + convex * 0.14 - gully * 0.4
				+ ( R.height - 0.45 ) * 0.35 + ( dM.w - 0.5 ) * 0.34 + ( dN.w - 0.5 ) * 0.22
				+ ( streak - 0.5 ) * 1.0 * cliffK;
			// fades to 0 at the branch boundary: no step along the slope / mask iso-lines
			let branchK = max( smoothstep( 0.06, 0.18, nr.z ), smoothstep( 0.3, 0.42, slope ) );
			rockW = smoothstep( 0.5, 0.68, rv ) * branchK;
			screeW = smoothstep( 0.28, 0.52, rv ) * branchK * ( 1.0 - rockW );
			// weathered basalt: darker and browner than the sea-cliff palette, streaked; moss and
			// ferns on the ledges and on the less steep parts of the faces
			// dark wet stains down the fall line, paler dry ribs between them
			let stain = smoothstep( 0.5, 0.7, streak ) * cliffK;
			// dark, weathered basalt (the island's inland rock is darker and browner than the pale
			// sea-cliff palette), stained down the fall line
			var basalt = R.albedo * vec3f( 0.36, 0.34, 0.31 ) * ( 1.0 - stain * 0.45 ) * ( smoothstep( 0.42, 0.25, streak ) * cliffK * 0.15 + 1.0 );
			// soil and humus caught in the joints and hollows of the rock (low relief), so the face
			// reads as fractured stone instead of a smooth plate
			let joints = smoothstep( 0.42, 0.22, R.height + ( dN.w - 0.5 ) * 0.25 );
			basalt = mix( basalt, mix( ${G(.13,.1,.07)}, ${G(.2,.2,.1)}, dF.y ), joints * 0.7 );
			// moss / small plants on every ledge and on the less steep parts, more near the edges
			let ledgeMoss = smoothstep( 0.4, 0.75, N0.y + ( dN.y - 0.45 ) * 0.6 ) * smoothstep( 0.25, 0.55, macroB + dM.y * 0.4 );
			let fringe = smoothstep( 0.5, 0.58, rv ) * smoothstep( 0.8, 0.6, rv ) * smoothstep( 0.3, 0.6, dM.w + dN.y * 0.4 );
			let mossK = sat( max( ledgeMoss * 0.75, fringe * 0.8 ) + R.moss * 0.3 + joints * 0.25 );
			rockAlbedo = mix( basalt, mix( ${G(.12,.17,.05)}, ${G(.22,.26,.09)}, dF.y ), mossK );
			rockRough = R.rough;
			// craggier than the boulders: the big blocks and plates stand out from afar
			rockHd = R.hd * 2.2 + R.height * 0.6;

		}

		// ---- weights
		let notRock = 1.0 - rockW;
		let underW = smoothstep( 0.12, -0.6, h );
		let landW = 1.0 - underW;
		let sandW = smoothstep( 0.3, 0.72, sp.x + ( dM.z - 0.5 ) * 0.5 + ( mcr - 0.5 ) * 0.35 ) * notRock;
		let pathW = smoothstep( 0.28, 0.62, sp.y + ( dN.y - 0.45 ) * 0.4 + ( dM.w - 0.5 ) * 0.25 ) * notRock * landW
			* ( 1.0 - smoothstep( 50.0, 220.0, camDist ) * 0.85 );
		// forest on the higher / steeper ground and in the gullies, tall-grass meadow on the valley
		// floor and around the village (same classification as the vegetation's land cover)
#if GRASSLAND
		// 草原 fork: open downs, no forest floor anywhere (lone trees are geometry)
		let jungleW = 0.0;
#else
		let jungleW = sat( smoothstep( 9.0, 24.0, h + ( mcr - 0.5 ) * 18.0 ) + smoothstep( 0.18, 0.36, slope ) + gully * 0.6 );
#endif
		// landslide scars: raw red-brown laterite in streaks down steep slopes, rare
		let lateriteW = smoothstep( 0.62, 0.74, scar + ( macroB - 0.5 ) * 0.3 ) * smoothstep( 0.3, 0.42, slope )
			* smoothstep( 0.52, 0.66, mcr ) * notRock * 0.85;

		// ---- beach sand: pale coral sand, drifts of warmer / coarser sand, grain
		let dryK = smoothstep( 0.8, 3.0, h );
		var sand = mix( ${G(.83,.75,.6)}, ${G(.9,.84,.72)}, smoothstep( 0.3, 0.72, mcr + dryK * 0.2 ) );
		sand = mix( sand, ${G(.84,.72,.55)}, smoothstep( 0.55, 0.8, dM.w + ( macroB - 0.5 ) * 0.6 ) * 0.45 );
		sand = sand * ( ( dM.w - 0.5 ) * 0.16 + 1.0 ) * ( ( dN.w - 0.5 ) * 0.1 + 1.0 );
		sand = sand * ( ( grain - 0.45 ) * 0.3 + 0.97 ) * ( ( grainF - 0.45 ) * 0.2 + 1.0 );
		// disturbed / trodden patches: slightly darker, coarser sand (footfall, crabs, wind scour)
		let trod = smoothstep( 0.52, 0.7, dN.y + ( dM.y - 0.5 ) * 0.6 ) * dryK;
		sand = sand * ( 1.0 - trod * 0.07 );
		// the high-water band collects shell grit, coral bits and dried seaweed
		let hw = h + ( dM.w - 0.5 ) * 0.5;
		let wrackBand = smoothstep( 1.15, 1.4, hw ) * smoothstep( 2.1, 1.7, hw );
		let pebDensity = smoothstep( 0.62, 0.85, macroB + dM.w * 0.3 ) * 0.2 + wrackBand * smoothstep( 0.3, 0.6, dM.y );
		let pebW = smoothstep( 0.66, 0.8, dN.z ) * sat( pebDensity ) * smoothstep( 0.6, 0.9, sp.x ) * landW
			* ( 1.0 - smoothstep( 12.0, 35.0, camDist ) );
		let pebCol = mix( mix( ${G(.86,.82,.74)}, ${G(.78,.64,.6)}, smoothstep( 0.45, 0.75, dM.x ) ), ${G(.36,.33,.3)}, smoothstep( 0.74, 0.82, dM.y ) );
		sand = mix( sand, pebCol, pebW * 0.75 );
		let wrack = wrackBand * smoothstep( 0.58, 0.72, dN.y ) * smoothstep( 0.4, 0.6, macroB );
		sand = mix( sand, ${G(.24,.18,.11)}, wrack * 0.8 );
		// trampled sand along the paths
		sand = sand * ( 1.0 - pathW * 0.07 );

		// wind ripples on the dry sand: crests across the wind (bent by the fbm), wavelength
		// ~10.5 cm, fading where trodden; visible in the albedo too (finer sand on the crests).
		// (A wavelength varying in space must not divide the absolute coordinate: the phase then
		// swings by x * dλ / λ², which at 100 m from the origin turned the ripples into patches
		// of random direction and spacing with seams and moiré, and made fwidth switch them off
		// in blotches. The spacing varies through the smooth warp instead.)
		let wd = frame.windDir;
		let ph1 = dot( xz, wd ) * ( 6.2832 / 0.105 ) + dM.w * 24.0 + dN.w * 7.0 + macroB * 30.0;
		let fade1 = 1.0 - smoothstep( 0.6, 2.2, fwidth( ph1 ) );
		let rip1 = pow( sin( ph1 ) * 0.5 + 0.5, 1.6 );
		let windK = fade1 * smoothstep( 1.5, 2.2, h ) * ( 1.0 - pathW ) * ( 1.0 - trod * 0.7 )
			* smoothstep( 0.2, 0.5, macroB + dM.w * 0.3 );
		sand = sand * ( ( rip1 - 0.5 ) * 0.12 * windK + 1.0 );

		// ---- seabed: sand with ripple fields, seagrass meadows, rubble heads (only below the berm:
		// everything here is weighted by underW, 0 on land)
		let depth = -h;
		var fieldW = 0.0; var seagrassW = 0.0; var blades = 0.0; var rubbleW = 0.0;
		var under = sand;
		if ( underW > 0.0 ) {
			let reefD = length( xz - rc );
			let reefW = 1.0 - smoothstep( ${W.reef.radius*.5}, ${W.reef.radius*1.15}, reefD + ( mcr - 0.5 ) * 30.0 );
			under = mix( ${G(.84,.78,.64)}, ${G(.72,.7,.58)}, smoothstep( 1.0, 9.0, depth ) );
			under = under * ( ( dM.w - 0.5 ) * 0.14 + 1.0 ) * ( ( grain - 0.45 ) * 0.25 + 1.0 );
			// megaripple fields (~0.75 m) across the swell, troughs collect darker shell hash; not in
			// the swash zone or the first metre of depth
			fieldW = smoothstep( 0.42, 0.62, macroB + ( dM.w - 0.5 ) * 0.35 ) * smoothstep( 0.9, 2.0, depth ) * ( 1.0 - reefW );
			under = under * ( ( rip2 - 0.55 ) * 0.22 * fieldW * fade2 + 1.0 );
			// small wave ripples (~0.16 m) everywhere below the swash
			// seagrass meadows: ragged edges, blade streaks leaning with the wave surge, epiphyte tips
			// (the fringe breaks up into clumps: noise at three scales thresholds the soft splat edge)
			let clumps = ( dM.w - 0.5 ) * 0.5 + ( dN.y - 0.45 ) * 0.4 + ( macroB - 0.5 ) * 0.3;
			seagrassW = smoothstep( 0.3, 0.55, sp.z + clumps ) * underW * smoothstep( 0.3, 0.9, depth );
			let swPerp = vec2f( -swDir.y, swDir.x );
			blades = terDetail( vec2f( dot( xz, swDir ) / 2.6, dot( xz, swPerp ) / 0.35 ) ).y;
			var meadow = mix( ${G(.12,.16,.07)}, ${G(.27,.29,.15)}, smoothstep( 0.35, 0.75, blades ) );
			meadow = mix( meadow, ${G(.24,.2,.11)}, smoothstep( 0.55, 0.8, dM.y + ( macroB - 0.5 ) * 0.4 ) * 0.5 );
			// sparse at the fringe: sand shows between the blades; thinner, paler patches inside
			meadow = mix( under, meadow, smoothstep( 0.3, 0.85, sp.z + clumps * 0.5 ) * 0.35 + 0.65 );
			meadow = mix( meadow, mix( meadow, under, 0.45 ), smoothstep( 0.58, 0.8, macroB + ( dM.w - 0.5 ) * 0.4 ) );
			under = mix( under, meadow, seagrassW );
			// rubble heads: coral rubble and rock turfed with algae, pink coralline crusts
			rubbleW = smoothstep( 0.3, 0.6, sp.w + ( dN.x - 0.5 ) * 0.4 + ( dM.w - 0.5 ) * 0.3 ) * underW;
			var rubble = mix( ${G(.2,.19,.15)}, ${G(.36,.33,.26)}, smoothstep( 0.3, 0.7, dN.x ) );
			rubble = mix( rubble, ${G(.2,.24,.1)}, smoothstep( 0.5, 0.7, dF.y ) * 0.6 );
			rubble = mix( rubble, ${G(.58,.38,.44)}, smoothstep( 0.62, 0.74, dM.x ) * 0.6 );
			under = mix( under, rubble, rubbleW );
			// reef flat: coral rubble and pink crusts toward the reef
			under = mix( under, mix( ${G(.56,.5,.44)}, ${G(.6,.43,.46)}, smoothstep( 0.45, 0.7, dM.x ) ), reefW * 0.7 * smoothstep( 0.4, 0.6, dN.x ) );
		}
		sand = mix( sand, under, underW );

		// ---- ground: tall-grass meadow (tone shared with the grass field), forest floor and, from
		// afar, the forest canopy; laterite scars
		let V = normalize( frame.cameraPos - p );
		let NdV = sat( dot( N0, V ) );
		let mt = terrainMeadowTone( macroA, macroB, slope, N0.z, dM.w * 0.65 + dN.w * 0.35, true );
		// clumps (1-3 m) and tussocks, blade-scale grain
		let clump = dM.w * 0.6 + dN.y * 0.4;
		// seen from afar the tussocks and their shadowed gaps are what makes tall grass read as
		// grass (not lawn): the clump contrast grows with distance as the blades fade out
		let clumpK = mix( 0.34, 0.95, smoothstep( 40.0, 140.0, camDist ) );
		var lawn = mt.tone * ( ( clump - 0.5 ) * clumpK + 1.0 ) * ( ( dF.y - 0.4 ) * 0.22 + 1.0 );
		lawn = lawn * mix( 1.0, smoothstep( 0.25, 0.55, dN.y * 0.5 + dM.y * 0.5 ) * 0.35 + 0.72, smoothstep( 50.0, 160.0, camDist ) );
		// grass combed along the wind: long streaks (anisotropic sample of the fbm channel)
		// (comb and gust only where the lawn shows: not under full forest, sand or water)
		let lawnShows = jungleW < 1.0 && landW > 0.0 && sandW < 1.0;
		var comb = 0.5;
		if ( lawnShows ) {
			let combUV = vec2f( dot( xz, frame.windDir ) / 7.5, dot( xz, vec2f( -frame.windDir.y, frame.windDir.x ) ) / 0.9 );
			comb = terDetail( combUV + vec2f( 0.31, 0.77 ) ).w;
			lawn = lawn * ( ( comb - 0.5 ) * 0.3 + 1.0 );
		}
		// seen from above the dark soil shows between the clumps; at grazing angles blade sides
		// cover everything (lighter, more saturated)
		let gapK = smoothstep( 0.3, 0.95, NdV ) * smoothstep( 0.62, 0.3, clump );
		lawn = mix( lawn, MEADOW_soil, gapK * 0.45 );
		lawn = mix( lawn, terrainSaturation( lawn * 1.12, 1.15 ), smoothstep( 0.45, 0.1, NdV ) * 0.6 );
		// travelling gusts flatten the grass: the paler blade backs show as waves (same gust
		// field as the grass blades)
		let windStrength = max( frame.windSpeed * 0.1, 0.03 );
		if ( lawnShows ) {
			let gust = terGustAt( xz, mat.gustOffset ) * sat( windStrength * 0.5 );
			lawn = mix( lawn, lawn * vec3f( 1.25, 1.22, 1.06 ) + 0.01, gust * 0.6 );
		}
		// bare trodden soil in places, sandy soil toward the beach
		lawn = mix( lawn, ${G(.4,.33,.23)}, smoothstep( 0.72, 0.84, dN.y + ( dM.y - 0.5 ) * 0.5 ) * 0.25 );
		lawn = mix( lawn, ${G(.6,.52,.38)}, sat( sp.x * 1.6 ) * smoothstep( 0.45, 0.62, dN.z + dM.y * 0.3 ) * 0.7 );
		// inside the geometric grass field (GrassField) the ground is only seen between the blades:
		// the shaded base of the sward, dark and brownish with dead leaves; it hands over to the
		// sward's own look (above) where the blades thin out
		let grassHere = smoothstep( 2.5, 4.5, h ) * ( 1.0 - smoothstep( 0.45, 0.85, jungleW ) ) * ( 1.0 - sat( sp.x * 1.6 ) );
		let fieldK = ( 1.0 - smoothstep( ${Jo[0].toFixed(1)}, ${Jo[1].toFixed(1)}, length( p.xz - frame.cameraPos.xz ) ) ) * grassHere;
		let swardBase = mix( mt.tone * 0.4, MEADOW_soil, 0.4 ) * ( ( dN.y - 0.45 ) * 0.6 + 1.0 ) * ( ( dF.y - 0.4 ) * 0.3 + 1.0 );
		// (草原 v2, grass to ~300 m: far out the sward base is seen less (grazing view, blades cover
		// it) and eases toward the lawn tone before the blades thin out, so there is no dark ring)
		let swardK = 0.85 - 0.35 * smoothstep( 120.0, 280.0, length( p.xz - frame.cameraPos.xz ) );
		lawn = mix( lawn, swardBase, fieldK * swardK );
		let litter = mix( ${G(.2,.15,.09)}, ${G(.34,.25,.13)}, dF.y );
		var jungle = mix( ${G(.1,.16,.05)}, litter, smoothstep( 0.52, 0.7, dN.y ) );
		jungle = mix( jungle, ${G(.12,.1,.06)}, gully * 0.3 );
		let far = smoothstep( 40.0, 160.0, camDist );
		var cover = mix( ${G(.08,.13,.04)}, ${G(.17,.24,.07)}, smoothstep( 0.3, 0.7, mcr ) );
		cover = mix( cover, ${G(.27,.29,.12)}, smoothstep( 0.66, 0.84, macroB + dM.w * 0.2 ) * 0.45 );
		jungle = mix( jungle, cover, far * 0.8 );
		jungle = jungle * ( ( mcr - 0.5 ) * 0.3 + 1.0 );
		// canopy: seen from a distance (or on slopes too steep for the trees) the forest reads as
		// a carpet of lumpy crowns with dark gaps
		let canopyW = jungleW * max( smoothstep( 0.2, 0.4, slope ), smoothstep( 90.0, 260.0, camDist ) ) * smoothstep( 25.0, 70.0, camDist ) * notRock * ( 1.0 - screeW * 0.7 );
		var canopyH = 0.0;
		if ( canopyW > 0.0 ) {
			let crowns = terDetail( ${So(`xz`,.9)} / 61.0 ).w;
			let crownsB = terDetail( ${So(`xz`,2.3)} / 13.0 + 0.37 ).w;
			canopyH = smoothstep( 0.32, 0.7, crowns * 0.45 + crownsB * 0.4 + dM.w * 0.15 );
			var canopy = mix( ${G(.05,.08,.025)}, mix( ${G(.14,.21,.06)}, ${G(.22,.27,.09)}, macroB ), canopyH );
			// steep faces: the canopy hangs in streaks down the fall line
			canopy = canopy * ( ( streak - 0.5 ) * 0.5 * smoothstep( 0.3, 0.5, slope ) + 1.0 );
			jungle = mix( jungle, canopy, canopyW );
		}
		var ground = mix( lawn, jungle, jungleW );
		// around the bare rock: dark humus, stones and moss, with the surrounding plants creeping
		// in (a soft, noisy band; no speckle)
		let creepIn = smoothstep( 0.4, 0.75, dM.w + ( dN.y - 0.45 ) * 0.5 + ( macroB - 0.5 ) * 0.3 );
		var scree = mix( ${G(.16,.13,.1)}, ${G(.27,.24,.2)}, smoothstep( 0.45, 0.75, dM.x + ( dN.x - 0.5 ) * 0.3 ) );
		scree = mix( scree, mix( ${G(.13,.18,.06)}, ${G(.22,.26,.09)}, dF.y ), smoothstep( 0.45, 0.7, dM.y + ( dN.y - 0.45 ) * 0.5 ) * 0.7 );
		ground = mix( ground, scree, screeW * ( 1.0 - creepIn * 0.7 ) );
		let laterite = mix( ${G(.42,.25,.16)}, ${G(.52,.36,.24)}, dM.w ) * ( ( dN.y - 0.4 ) * 0.3 + 1.0 );
		ground = mix( ground, laterite, lateriteW );

		// ---- worn dirt paths / trampled ground (darker, redder soil in the forest)
		var dirt = mix( ${G(.38,.31,.23)}, ${G(.5,.43,.32)}, dM.w ) * ( ( dN.y - 0.4 ) * 0.35 + 0.95 );
		dirt = mix( dirt, ${G(.3,.22,.15)}, jungleW * 0.7 );
		dirt = mix( dirt, ${G(.56,.53,.48)}, smoothstep( 0.72, 0.82, dN.z ) * 0.5 );
		// grass creeping onto the trail, a grassy strip between the two worn ruts
		let creep = smoothstep( 0.45, 0.7, dN.y + ( dF.y - 0.45 ) * 0.5 ) * smoothstep( 0.9, 0.5, sp.y );
		dirt = mix( dirt, lawn, creep * 0.8 );

		// ---- combine
		let meadowW = ( 1.0 - jungleW ) * ( 1.0 - pathW ) * notRock * ( 1.0 - sandW ) * landW * ( 1.0 - screeW );
		terMeadowW = meadowW;
		var albedo = mix( ground, dirt, pathW );
		albedo = mix( albedo, sand, max( sandW, underW * notRock ) );
		albedo = mix( albedo, rockAlbedo, rockW );

		// ---- eroded beach scarp (splat alpha on land): storm-cut face of the foredune. Layered
		// sandy soil (laminae of paler and darker sand, darker humus-stained patches), live roots
		// and pale dead-root tangles hanging out of the face, damp darker sand at the toe.
		let scarpW = sat( sp.w * 1.6 ) * landW * notRock;
		var scarpH = 0.0;
		if ( scarpW > 0.003 ) {

			// laminae: thin storm layers, warped and wedging out, with a set of cross-beds at a low angle
			let tanF = normalize( vec2f( -N0.z, N0.x ) + vec2f( 1e-4, 0.0 ) );
			let alongF = dot( xz, tanF );
			let hw = h + ( dM.w - 0.5 ) * 0.5 + ( dN.w - 0.5 ) * 0.12 + ( macroB - 0.5 ) * 0.35;
			let lam = sin( hw * ( 6.2832 / 0.11 ) + dN.x * 2.0 ) * 0.5 + 0.5;
			let cross = sin( ( hw + alongF * 0.09 ) * ( 6.2832 / 0.075 ) ) * 0.5 + 0.5;
			let lamB = smoothstep( 0.3, 0.7, sin( ( hw + dM.y * 0.4 ) * ( 6.2832 / 0.43 ) ) * 0.5 + 0.5 );
			let layerMix = mix( lam, cross, smoothstep( 0.4, 0.6, dM.x ) );
			var soil = mix( ${G(.5,.42,.31)}, ${G(.68,.6,.46)}, smoothstep( 0.3, 0.8, layerMix ) * 0.45 + lamB * 0.2 + ( grain - 0.45 ) * 0.5 + ( dM.w - 0.5 ) * 0.3 );
			// humus-stained, rootier soil in patches (the old dune surface caught in the cut)
			soil = mix( soil, ${G(.26,.2,.14)}, smoothstep( 0.55, 0.8, dM.y + ( macroB - 0.5 ) * 0.5 ) * 0.55 );
			// roots: horizontal coordinate along the face, stretched down the fall line
			let ru = terDetail( vec2f( dot( xz, tanF ) / 0.8, h / 0.5 ) + vec2f( 0.37, 0.11 ) );
			let rv = terDetail( vec2f( dot( xz, tanF ) / 1.7 + h * 0.6, h / 0.9 ) + vec2f( 0.71, 0.29 ) );
			let rootLive = smoothstep( 0.035, 0.0, abs( ru.x - 0.5 ) ) * smoothstep( 0.45, 0.62, ru.w );
			let rootDead = smoothstep( 0.03, 0.0, abs( rv.z - 0.52 ) ) * smoothstep( 0.5, 0.66, rv.y );
			soil = mix( soil, ${G(.17,.12,.08)}, rootLive * 0.85 );
			soil = mix( soil, ${G(.8,.75,.66)}, rootDead * 0.75 );
			// damp, darker sand toward the toe and in seepage streaks
			let seep = smoothstep( 0.6, 0.8, terDetail( vec2f( dot( xz, tanF ) / 2.3, h / 6.0 ) ).w ) * 0.35;
			soil = soil * ( 1.0 - seep - smoothstep( 0.5, 1.0, sp.w ) * 0.08 );
			// under the lip: the dark, rooty topsoil the grass grows in, overhanging the cut
			let lip = smoothstep( 0.86, 0.97, sp.w + ( dN.y - 0.45 ) * 0.1 );
			soil = mix( soil, ${G(.2,.15,.1)} * ( dN.x * 0.4 + 0.8 ), lip * 0.85 );
			// foot of the face: undercut by the swash of storm waves, in its own shadow
			soil *= 1.0 - ( 1.0 - smoothstep( 0.6, 0.78, sp.w ) ) * smoothstep( 0.35, 0.55, sp.w ) * 0.25;
			// slumped sand and fallen chunks at the toe: damp beach sand rather than soil
			soil = mix( ${G(.63,.56,.44)} * ( grain * 0.3 + 0.85 ), soil, smoothstep( 0.35, 0.75, sp.w ) );
			albedo = mix( albedo, soil, scarpW );
			scarpH = ( lip * 0.03 + layerMix * 0.012 + lamB * 0.018 + rootLive * 0.012 + rootDead * 0.009 + dN.x * 0.025 );

		}

		// ---- wetness (swash zone) from the shore system, else a static damp band
		let wetFoam = terWetFoam( xz, h );
		let wet = sat( wetFoam.x ) * ( 1.0 - jungleW * 0.8 ) * landW;
		// damp sand below the berm: darker in mottled, drying patches even when the swash has not
		// reached it lately
		let dampMottle = smoothstep( 0.3, 0.7, dM.w + ( dN.y - 0.45 ) * 0.6 + ( macroB - 0.5 ) * 0.4 );
		let damp = smoothstep( 1.7, 0.5, h + dM.w * 0.3 ) * sandW * mix( 0.22, 0.5, dampMottle );
		// sand dries in mottled patches; backwash leaves faint rills down the slope
		let mottle = smoothstep( 0.25, 0.75, dM.w + ( dN.y - 0.45 ) * 0.5 );
		let dryEdge = smoothstep( 0.0, 0.6, wet ) * smoothstep( 1.0, 0.6, wet );
		let wetK = max( wet, damp ) * ( 1.0 - dryEdge * mottle * 0.6 ) * notRock;
		let slopeDir = normalize( N0.xz + vec2f( 1e-4, 0.0 ) );
		let rillK = smoothstep( 0.2, 0.9, wet ) * smoothstep( 0.05, 0.6, h ) * sandW;
		var rill = 0.5;
		if ( rillK > 0.0 ) { rill = terDetail( vec2f( dot( xz, slopeDir ) / 3.2, dot( xz, vec2f( -slopeDir.y, slopeDir.x ) ) / 0.3 ) ).w; }
		let wetAlbedo = terrainSaturation( albedo * mat.wetDarken, 1.15 ) * vec3f( 0.97, 0.98, 1.0 ) * ( ( rill - 0.5 ) * 0.25 * rillK + 1.0 );
		albedo = mix( albedo, wetAlbedo, wetK );
		// swash marks: thin wavy lines of grit left at the limits of earlier uprushes
		let sl = ( h + dM.w * 0.18 + dN.w * 0.05 ) / 0.13;
		let slD = abs( fract( sl ) - 0.5 );
		let slW = fwidth( sl ) + 1e-4;
		let swashLine = smoothstep( slW * 1.5 + 0.04, 0.0, slD ) * smoothstep( 0.2, 0.4, h ) * smoothstep( 1.6, 1.2, h )
			* smoothstep( 0.45, 0.65, dM.y + ( macroB - 0.5 ) * 0.4 ) * sandW * ( 1.0 - smoothstep( 0.8, 2.0, slW * 10.0 ) );
		albedo = mix( albedo * ( 1.0 - swashLine * 0.3 ), ${G(.9,.88,.84)}, swashLine * smoothstep( 0.6, 0.75, dF.z ) * 0.5 );
		// foam residue: lacy patterns stranded on the sand
		var residue = sat( wetFoam.y ) * landW * notRock;
		if ( residue > 0.0 ) { residue *= smoothstep( 0.42, 0.18, terDetail( ${So(`xz`,.4)} / 0.9 ).x ) * 0.7 + 0.3; }
		albedo = mix( albedo, ${G(.88,.9,.9)}, residue );

		// ---- roughness
		var rough = mix( 0.88, 0.93, sandW );
		rough = mix( rough, 0.9, pathW );
		rough = mix( rough, rockRough, rockW );
		// wet sand has a film of water: glossy while fresh, satin as it drains
		rough = mix( rough, mix( 0.42, 0.16, wet ), wetK );
		rough = mix( rough, 0.7, residue );
		rough = mix( rough, 0.75, underW );
		rough = mix( rough, 0.94, scarpW );
		outRough = rough;

		// ---- micro relief for the normal
		let windR = rip1 * 0.005 * windK;
		let waveR = rip3 * 0.012 * fade3 * smoothstep( -0.3, -0.9, h ) * ( 1.0 - seagrassW );
		let megaR = rip2 * 0.035 * fade2 * fieldW * ( 1.0 - seagrassW );
		let sandH = ( grain * 0.004 + grainF * 0.003 + pebW * 0.004 + windR + waveR + megaR ) * ( 1.0 - wet * 0.6 )
			+ rill * 0.006 * rillK;
		// seagrass canopy stands proud of the sand with a ragged scarp; rubble is knobbly
		let seabedH = seagrassW * ( blades * 0.05 + 0.08 ) + rubbleW * ( dN.x * 0.07 + dF.x * 0.015 );
		let groundH = dN.y * mix( 0.05, 0.035, jungleW ) + dF.y * 0.012 + dM.y * 0.045 + canopyH * canopyW * 2.5
			+ clump * 0.12 * ( 1.0 - jungleW ) + comb * 0.03 * ( 1.0 - jungleW );
		let screeH = dN.z * 0.04 + dM.x * 0.06;
		let dirtH = dN.z * 0.012 + dN.y * 0.01;
		var hd = mix( mix( groundH, screeH, screeW ), dirtH, pathW );
		hd = mix( hd, sandH + seabedH, max( sandW, underW * notRock ) );
		hd = mix( hd, rockHd, rockW );
		hd = mix( hd, scarpH, scarpW );
		hdOut = hd;

		// ---- ambient occlusion: baked horizon + cavity, plus litter / crevices / seagrass canopy
		let aoDetail = mix( 1.0, dN.y * 0.5 + 0.7, jungleW * ( 1.0 - sandW ) * notRock * landW )
			* mix( 1.0, smoothstep( 0.2, 0.7, clump ) * 0.35 + 0.65, meadowW );
		outAO = nr.w * aoDetail * ( 1.0 - seagrassW * 0.3 ) * ( 1.0 - rubbleW * smoothstep( 0.55, 0.2, dN.x ) * 0.35 )
			* mix( 1.0, smoothstep( 0.15, 0.6, canopyH ) * 0.6 + 0.4, canopyW );

		albedoOut = albedo;

	}

	outN = terrainPerturbNormal( p, N0, hdOut, 1.0 );

	s.albedo = albedoOut;
	s.roughness = outRough;
	s.normal = outN;
	s.ao = sat( outAO );
`,Qo=class{constructor(){this.boxes=[],this.cylinders=[],this._v=new A}addBox(e,t,n=0,{walkable:r=!1,solid:i=!0,tag:a=``}={}){let o={center:e.clone(),half:t.clone(),rotY:n,cos:Math.cos(n),sin:Math.sin(n),walkable:r,solid:i,tag:a,top:e.y+t.y,bottom:e.y-t.y,radius:Math.hypot(t.x,t.z)};return this.boxes.push(o),o}addCylinder(e,t,n,r,i,{tag:a=``}={}){let o={x:e,z:t,radius:n,yMin:r,yMax:i,tag:a};return this.cylinders.push(o),o}_toLocal(e,t,n){let r=t-e.center.x,i=n-e.center.z;return[r*e.cos-i*e.sin,r*e.sin+i*e.cos]}_toWorldDir(e,t,n){return[t*e.cos+n*e.sin,-t*e.sin+n*e.cos]}groundHeightAt(e,t,n,r=0){let i=-1/0;for(let a of this.boxes){if(!a.walkable||a.top>n||Math.abs(e-a.center.x)>a.radius+r+.01||Math.abs(t-a.center.z)>a.radius+r+.01)continue;let[o,s]=this._toLocal(a,e,t);Math.abs(o)<=a.half.x+r&&Math.abs(s)<=a.half.z+r&&(i=Math.max(i,a.top))}return i}resolveCapsule(e,t,n,r=.35){let i=!1;for(let a of this.boxes){if(!a.solid||e.y+n<a.bottom||e.y+r>a.top||Math.abs(e.x-a.center.x)>a.radius+t||Math.abs(e.z-a.center.z)>a.radius+t)continue;let[o,s]=this._toLocal(a,e.x,e.z),c=Math.max(-a.half.x,Math.min(a.half.x,o)),l=Math.max(-a.half.z,Math.min(a.half.z,s)),u=o-c,d=s-l,f=u*u+d*d;if(f>=t*t)continue;let p,m,h;if(f>1e-8){let e=Math.sqrt(f);p=u/e,m=d/e,h=t-e}else{let e=a.half.x-Math.abs(o),n=a.half.z-Math.abs(s);e<n?(p=Math.sign(o)||1,m=0,h=e+t):(p=0,m=Math.sign(s)||1,h=n+t)}let[g,_]=this._toWorldDir(a,p,m);e.x+=g*h,e.z+=_*h,i=!0}for(let a of this.cylinders){if(e.y+n<a.yMin||e.y+r>a.yMax)continue;let o=e.x-a.x,s=e.z-a.z,c=a.radius+t,l=o*o+s*s;if(l>=c*c)continue;let u=Math.sqrt(l)||1e-4;e.x=a.x+o/u*c,e.z=a.z+s/u*c,i=!0}return i}raycast(e,t,n){let r=n;for(let n of this.boxes){if(!n.solid)continue;let i=e.x-n.center.x,a=e.z-n.center.z,o=e.y-n.center.y,s=i*n.cos-a*n.sin,c=i*n.sin+a*n.cos,l=t.x*n.cos-t.z*n.sin,u=t.x*n.sin+t.z*n.cos,d=0,f=r,p=(e,t,n)=>{if(Math.abs(t)<1e-8)return Math.abs(e)<=n;let r=(-n-e)/t,i=(n-e)/t;if(r>i){let e=r;r=i,i=e}return d=Math.max(d,r),f=Math.min(f,i),d<=f};p(s,l,n.half.x)&&p(o,t.y,n.half.y)&&p(c,u,n.half.z)&&(r=Math.min(r,d))}return r}};function $o(e,t,n,r){return to(e*73+n*19349663,t*31+n*83492791,r)}function es(e,t,n,r){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=e-i,c=t-a,l=n-o,u=s*s*(3-2*s),d=c*c*(3-2*c),f=l*l*(3-2*l),p=(e,t,n)=>$o(i+e,a+t,o+n,r),m=p(0,0,0)+(p(1,0,0)-p(0,0,0))*u,h=p(0,1,0)+(p(1,1,0)-p(0,1,0))*u,g=p(0,0,1)+(p(1,0,1)-p(0,0,1))*u,_=p(0,1,1)+(p(1,1,1)-p(0,1,1))*u,v=m+(h-m)*d;return(v+(g+(_-g)*d-v)*f)*2-1}function ts(e,t,n,r,i){let a=1,o=1,s=0,c=0;for(let l=0;l<r;l++)s+=es(e*o,t*o,n*o,i+l*7)*a,c+=a,a*=.5,o*=2.03;return s/c}function ns(e){let t=(1+Math.sqrt(5))/2,n=[-1,t,0,1,t,0,-1,-t,0,1,-t,0,0,-1,t,0,1,t,0,-1,-t,0,1,-t,t,0,-1,t,0,1,-t,0,-1,-t,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],i=e=>{let t=Math.hypot(n[e*3],n[e*3+1],n[e*3+2]);n[e*3]/=t,n[e*3+1]/=t,n[e*3+2]/=t};for(let e=0;e<n.length/3;e++)i(e);for(let t=0;t<e;t++){let e=new Map,t=(t,r)=>{let a=t<r?t*1e5+r:r*1e5+t,o=e.get(a);return o===void 0?(o=n.length/3,n.push((n[t*3]+n[r*3])/2,(n[t*3+1]+n[r*3+1])/2,(n[t*3+2]+n[r*3+2])/2),i(o),e.set(a,o),o):o},a=[];for(let e=0;e<r.length;e+=3){let n=r[e],i=r[e+1],o=r[e+2],s=t(n,i),c=t(i,o),l=t(o,n);a.push(n,s,l,i,c,s,o,l,c,s,c,l)}r=a}return{verts:new Float32Array(n),faces:r}}var rs=[{name:`boulder`,scale:[1,.8,.9],planes:10,cut:[.62,.88],soft:.08,rough:.06},{name:`block`,scale:[1.1,.9,.95],planes:13,cut:[.58,.8],soft:.04,rough:.045},{name:`slab`,scale:[1.35,.55,1],planes:11,cut:[.6,.86],soft:.05,rough:.045},{name:`spire`,scale:[.75,1.45,.8],planes:12,cut:[.58,.84],soft:.05,rough:.05}];function is(e,t){let n=[];for(let r=0;r<e.planes;r++){let i=to(t,r,1)*Math.PI*2,a=(to(t,r,2)*2-1)*.85,o=Math.sqrt(1-a*a),s=e.cut[0]+(e.cut[1]-e.cut[0])*to(t,r,3);n.push([Math.cos(i)*o,a,Math.sin(i)*o,s])}n.push([0,-1,0,.62+.15*to(t,99,4)]);let[r,i,a]=e.scale;return(o,s,c)=>{let l=1.6;for(let[e,t,r,i]of n){let n=o*e+s*t+c*r;n>.001&&(l=Math.min(l,i/n))}let u=e.soft,d=Math.max(u-Math.abs(1-l),0)/u,f=Math.min(1,l)-d*d*u*.25;return f+=ts(o*2.1+t,s*2.1,c*2.1,4,t)*e.rough,f-=Math.abs(es(o*5.3,s*5.3+t,c*5.3,t+3))*e.rough*.35,[o*f*r,s*f*i,c*f*a]}}function as(e,t,n){let r=rs[e],i=is(r,t),{verts:a,faces:o}=ns(n),s=a.length/3,c=new Float32Array(s*3),l=new Float32Array(s);for(let e=0;e<s;e++){let t=i(a[e*3],a[e*3+1],a[e*3+2]);c[e*3]=t[0],c[e*3+1]=t[1],c[e*3+2]=t[2],l[e]=Math.hypot(t[0],t[1],t[2])}let u=new Float32Array(s),d=new Uint16Array(s);for(let e=0;e<o.length;e+=3)for(let t=0;t<3;t++){let n=o[e+t],r=o[e+(t+1)%3];u[n]+=l[r],d[n]++,u[r]+=l[n],d[r]++}let f=new Float32Array(s);for(let e=0;e<s;e++){let t=u[e]/d[e]-l[e];f[e]=Math.max(.35,Math.min(1,1-t*9))}let p=new Wt;return p.setAttribute(`position`,new Dt(c,3)),p.setAttribute(`ao`,new Dt(f,1)),p.setIndex(o),p.computeVertexNormals(),p.computeBoundingSphere(),p}var os=new R({name:`lodFade`,code:`
// Bayer 4x4 threshold in (0, 1): bit-interleaved formula of
//   0  8  2 10 / 12  4 14  6 / 3 11  1  9 / 15  7 13  5
fn bayer4( pixel: vec2f ) -> f32 {
	let f = frame.frameIndex;
	// shift the pattern by a different offset every frame (all 16 over 16 frames)
	let p = vec2u( pixel ) + vec2u( f * 3u, ( f >> 2u ) * 1u );
	let x0 = p.x & 1u; let x1 = ( p.x >> 1u ) & 1u;
	let y0 = p.y & 1u; let y1 = ( p.y >> 1u ) & 1u;
	let v = ( ( x0 ^ y0 ) << 3u ) | ( y0 << 2u ) | ( ( x1 ^ y1 ) << 1u ) | y1;
	return ( f32( v ) + 0.5 ) / 16.0;
}

fn lodFadeVisible( pixel: vec2f, fade: f32, outgoing: bool ) -> bool {
	let t = bayer4( pixel );
	return select( ( t < fade ), ( t >= fade ), outgoing );
}
`});function ss(e,t,n){let r=(e-t)/Math.max(n-t,1e-6);return r<=0?0:r>=1?1:r*r*(3-2*r)}var cs=3,ls=2,us=60,ds=700,fs=.12,ps=class{constructor({scene:e,terrain:t,village:n=null,colliders:r=null,seed:i=4242,castShadow:a=!0,sunShadow:o=!0}){this.scene=e,this.terrainData=t.data||t,this.terrainGPU=t.gpu||null,this.village=n,this.group=new bt,this.group.name=`Rocks`;let s=performance.now();this.instances=this._place(Xa(i));let c=performance.now();if(r)for(let e of this.instances){let t=e.y+e.size*e.sy*.8;e.size<.9||t<-.3||r.addCylinder(e.x,e.z,e.size*.75,e.y-e.size*.5,t,{tag:`rock`})}this.material=this._createMaterial(o),this.meshes=[],this.buckets=[];for(let e=0;e<rs.length;e++){let t=this.instances.filter(t=>t.style===e),n=as(e,17+e*101,cs),r=as(e,17+e*101,ls),i=(e,n)=>{let r=e.clone(),i=new Mt(new Float32Array(Math.max(1,t.length)*2),2);i.setUsage(Ct),r.setAttribute(`iLod`,i);let o=new Xt(r,this.material,Math.max(1,t.length));return o.name=n,o.count=0,o.castShadow=a&&n.endsWith(`near`),o.receiveShadow=!0,o.frustumCulled=!1,o.staticVelocity=!0,o.instanceMatrix.setUsage(Ct),this.group.add(o),this.meshes.push(o),o};this.buckets.push({members:t,near:i(n,`rocks-${rs[e].name}-near`),far:i(r,`rocks-${rs[e].name}-far`),nearTris:n.index.count/3,farTris:r.index.count/3})}this.timings={place:c-s,build:performance.now()-c},this._lastCam=new A(1e9,0,0),this._frustum=new Le,this._m4=new P,this._sphere=new Ae,this._lastQuat=new D,e.add(this.group)}_place(e){let t=this.terrainData,n=[],r=new Za(913),i=2.5,a=new Map,o=(e,t)=>e*73856093^t*19349663,s=(e,t,n)=>{let r=Math.floor((e-n-6)/i),s=Math.floor((e+n+6)/i),c=Math.floor((t-n-6)/i),l=Math.floor((t+n+6)/i);for(let i=c;i<=l;i++)for(let c=r;c<=s;c++){let r=a.get(o(c,i));if(r){for(let i of r)if(Math.hypot(i.x-e,i.z-t)<(i.r+n)*.9)return!1}}return!0},c=(e,t,n)=>{let r=o(Math.floor(e/i),Math.floor(t/i)),s=a.get(r);s||a.set(r,s=[]),s.push({x:e,z:t,r:n})},l=(e,n)=>{let r=(e-t.origin)/t.texel-.5,i=(n-t.origin)/t.texel-.5,a=Math.max(0,Math.min(t.res-2,Math.floor(r))),o=Math.max(0,Math.min(t.res-2,Math.floor(i)));return t.rock[o*t.res+a]},u=new A,d=(e,n)=>{let r=1.5,i=t.heightAt(e+r,n)-t.heightAt(e-r,n),a=t.heightAt(e,n+r)-t.heightAt(e,n-r);return Math.hypot(i,a)/(2*r)},f=this.village&&this.village.getFootprints?this.village.getFootprints():[],p=W.pier,m=W.spawn.position,h=W.reef,g=[[55,-65],[54.6,-72],[52.4,-82],[48.4,-92],[44.8,-100.5],[42.6,-107.2]],_=(e,t,n)=>{let r=1/0;for(let i=0;i<e.length-1;i++){let a=e[i],o=e[i+1],s=o[0]-a[0],c=o[1]-a[1],l=Math.max(0,Math.min(1,((t-a[0])*s+(n-a[1])*c)/(s*s+c*c)));r=Math.min(r,Math.hypot(t-a[0]-s*l,n-a[1]-c*l))}return r},v=(e,n,r,i)=>{if(t.grassland)return Math.hypot(e-m.x,n-m.z)<r+10;for(let t of f)if(Math.hypot(e-t.x,n-t.z)<t.r+r+2)return!0;return!!(_(g,e,n)<r+4||Math.abs(e-p.x)<r+9&&n>p.zStart-8&&n<p.zEnd+12||Math.hypot(e-m.x,n-m.z)<r+10||Math.hypot(e-h.center.x,n-h.center.z)<h.radius+r+12||t.pathDistance&&t.pathDistance(e,n)<r+1.5||e>-125&&e<155&&n>-125&&i>-1.2&&n<40)},y=(r,i,a,o,{sink:l=.3,tilt:d=.25,align:f=.5,tumble:p=0}={})=>{let m=t.heightAt(r,i);if(v(r,i,a,m)||!s(r,i,a))return!1;t.normalAt(r,i,u);let h=rs[o].scale,g=a*(.8+.4*e()),_=a*(.75+.5*e()),y=a*(.8+.4*e()),b=m;for(let e=0;e<6;e++)b=Math.min(b,t.heightAt(r+Math.cos(e)*a*.7,i+Math.sin(e)*a*.7));let x=b-_*h[1]*l,S=new D().setFromAxisAngle(new A(0,1,0),e()*Math.PI*2),C=new D().setFromUnitVectors(new A(0,1,0),new A(0,1,0).lerp(u,f).normalize()),w=e()<p?2.2:d,T=new D().setFromEuler(new ue((e()-.5)*w,0,(e()-.5)*w));S.premultiply(T).premultiply(C);let E=new P().compose(new A(r,x,i),S,new A(g,_,y));return n.push({x:r,y:x,z:i,size:a,sy:_/a,style:o,matrix:E,radius:Math.max(g,_,y)*1.5}),c(r,i,a),!0},b=t=>{let n=0;for(let e of t)n+=e;let r=e()*n;for(let e=0;e<t.length;e++)if(r-=t[e],r<=0)return e;return t.length-1};if(t.grassland){for(let n of t.rockSites||[]){let t=1+ +(e()<.5)+ +(n.r>6);for(let r=0;r<t;r++){let t=e()*Math.PI*2,i=r===0?0:n.r*(.4+e()*.5);y(n.x+Math.cos(t)*i,n.z+Math.sin(t)*i,n.r*(.35+e()*.25),b([1,3,2,1]),{sink:.45,tilt:.35,align:.7})}let r=4+Math.round(n.r*1.5);for(let t=0;t<r*3&&t<60;t++){let t=e()*Math.PI*2,r=n.r*(.5+e()*1.1);y(n.x+Math.cos(t)*r,n.z+Math.sin(t)*r,.35+e()*e()*1.4,b([4,2,1,.5]),{sink:.35,tilt:.6,align:.5,tumble:.3})}}let r=W.spawn.position;for(let t=0;t<140;t++){let t=e()*Math.PI*2,n=30+Math.sqrt(e())*2e3,i=r.x+Math.cos(t)*n,a=r.z+Math.sin(t)*n;d(i,a)>.3||y(i,a,.4+e()*e()*1.6,b([2,2,1,1]),{sink:.45,tilt:.4,align:.6})}return n}for(let n of t.rockSites||[]){if(n.kind!==`stack`)continue;let t=Math.round(6+n.r*1.2);for(let r=0;r<t*3&&r<80;r++){let t=e()*Math.PI*2,r=n.r*(.9+e()*1.4);y(n.x+Math.cos(t)*r,n.z+Math.sin(t)*r,.8+e()*e()*3.5,b([3,3,1,1]),{sink:.25,tilt:.6,tumble:.4})}}let x=2.2;for(let n=-880;n<330;n+=x)for(let i=-640;i<640;i+=x){let a=i+(e()-.5)*x,o=n+(e()-.5)*x,s=t.heightAt(a,o);if(s<-7||s>250)continue;let c=l(a,o),u=e();if(s<3.5){if(c<.45)continue;let t=U(-.05,.45,r.noise(a/23,o/23)),n=Math.abs(a-10)<210&&o>-130&&o<80?.35:1;if(u>.09*t*n*U(.45,.8,c)*(s>-2.5?1:.35))continue;y(a,o,.6+e()*e()*3.4,b([4,3,2,1]),{sink:s<0?.2:.22,tilt:.7,align:.3,tumble:.45});continue}let f=d(a,o);if(c>.35&&f<.75){if(u>.03*U(.35,.7,c)*(1-U(.5,.75,f)))continue;let t=e()<.25;y(a,o,t?1.6+e()*3.2:.4+e()*e()*1.6,b(t?[1,3,2,1]:[4,2,1,.5]),{sink:t?.45:.3,tilt:.5,align:t?.8:.4})}else if(c<.35&&f>.25&&f<.9&&s>6){if(u>.0016)continue;y(a,o,1.5+e()*3.5,b([1,2,3,.5]),{sink:.55,tilt:.3,align:.9})}}for(let n of[-1,1]){let r=[];for(let i=0;i<400&&r.length<3;i++){let i=n<0?-195+e()*60:145+e()*60,a=-70+e()*90,o=t.heightAt(i,a);o<-1.5||o>2.5||l(i,a)<.25||r.some(e=>Math.hypot(e[0]-i,e[1]-a)<14)||r.push([i,a])}for(let[n,i]of r){y(n,i,1.8+e()*1.4,b([3,2,1,0]),{sink:.3,tilt:.4,align:.4,tumble:.3});let r=3+Math.floor(e()*5);for(let a=0;a<r*3;a++){let r=e()*Math.PI*2,a=2.5+e()*5,o=n+Math.cos(r)*a,s=i+Math.sin(r)*a,c=t.heightAt(o,s);c<-2||c>3||y(o,s,.4+e()*e()*1.4,b([4,2,1,0]),{sink:.2,tilt:.6,align:.4,tumble:.5})}}}if(t.rubble){let n=t.res;for(let r=-120;r<360;r+=3)for(let i=-420;i<420;i+=3){let a=i+(e()-.5)*3,o=r+(e()-.5)*3,s=Math.floor(a-t.origin),c=Math.floor(o-t.origin);if(s<0||c<0||s>=n||c>=n||t.rubble[c*n+s]<170||e()>.12)continue;let l=t.heightAt(a,o);l>-2||l<-10||y(a,o,.45+e()*e()*1.1,b([3,3,1,0]),{sink:.4,tilt:.5,align:.6,tumble:.5})}}return n}_createMaterial(e){let t=this.terrainGPU,n=Ko({name:`Rocks`,roughness:.8,metalness:0});if(!t)return n;n.modules=[t.module,jo(),os,...e?[t.sunModulationModule]:[]],e&&(n.defines.MATERIAL_SUN_MODULATION=1),n.attributes={iLod:`vec2f`,ao:`f32`},n.varyings={vLod:`vec2f`,vCav:`f32`},n.vertex=`o.vLod = v.iLod; o.vCav = v.ao;`;let r=`if ( ! lodFadeVisible( in.pixel, in.vs.vLod.x, in.vs.vLod.y > 0.5 ) ) { discard; }`;return n.shadow=`${r}\n\treturn true;`,n.surface=`
	let p = in.P;
	let N = in.N;
	let g = terrainImplicitGrad( p );
	let mcr = textureSample( terrainDetailTex, smpAniso4Repeat, ${So(`p.xz`,.9)} / 61.0 ).w * 0.6
		+ textureSample( terrainDetailTex, smpAniso4Repeat, ${So(`p.xz`,2.3)} / 17.0 ).w * 0.4;
	let R = terrainRockSurface( p, N, p.y, mcr, 0.5, 1.0, g );
	// contact with the ground: sand / soil drifted against the base, darker crevice
	let ground = terrainHeightAt( p.xz );
	let above = p.y - ground;
	let sp = terrainSplat( p.xz );
	let contact = ( 1.0 - smoothstep( 0.0, 0.22, above + ( R.height - 0.5 ) * 0.15 ) ) * smoothstep( -0.2, 0.3, ground );
	let drift = mix( ${xo(.33,.27,.18)}, ${xo(.8,.72,.56)}, sp.x );
	let nb = terrainPerturbNormal( p, N, R.hd, 1.0 );
	${r}
	s.albedo = mix( R.albedo, drift, contact * 0.8 );
	s.roughness = mix( R.rough, 0.9, contact );
	s.normal = nb;
	s.ao = sat( in.vs.vCav * ( 1.0 - contact * 0.35 ) * ( smoothstep( 0.0, 0.35, R.height ) * 0.35 + 0.65 ) );
`,n}update(e){let t=e.getWorldPosition(this._tmpV||=new A);if(!(t.distanceToSquared(this._lastCam)>1||!e.quaternion.equals(this._lastQuat)))return;this._lastCam.copy(t),this._lastQuat.copy(e.quaternion),e.updateMatrixWorld(),this._m4.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._m4,e.coordinateSystem,e.reversedDepth);let n=this._sphere;for(let e of this.buckets){let r=0,i=0,a=e.near.geometry.attributes.iLod,o=e.far.geometry.attributes.iLod;for(let s of e.members){if(n.center.set(s.x,s.y,s.z),n.radius=s.radius,!this._frustum.intersectsSphere(n)&&(n.radius=s.radius+12,!this._frustum.intersectsSphere(n)))continue;let c=Math.hypot(s.x-t.x,s.y-t.y,s.z-t.z),l=us+s.size*6,u=ds+s.size*60,d=ss(c,l*(1-fs/2),l*1.06),f=ss(c,u*.88,u);f>=1||(d<1&&(a.array[r*2]=d,a.array[r*2+1]=1,e.near.setMatrixAt(r++,s.matrix)),d>0&&(o.array[i*2]=d*(1-f),o.array[i*2+1]=0,e.far.setMatrixAt(i++,s.matrix)))}e.near.count=r,e.far.count=i;for(let[e,t]of[[a,r],[o,i]])e.clearUpdateRanges(),e.addUpdateRange(0,Math.max(1,t)*2),e.needsUpdate=!0;e.near.instanceMatrix.clearUpdateRanges(),e.near.instanceMatrix.addUpdateRange(0,r*16),e.near.instanceMatrix.needsUpdate=!0,e.far.instanceMatrix.clearUpdateRanges(),e.far.instanceMatrix.addUpdateRange(0,i*16),e.far.instanceMatrix.needsUpdate=!0}}stats(){let e=0,t=0;for(let n of this.buckets)e+=n.near.count*n.nearTris+n.far.count*n.farTris,t+=n.near.count+n.far.count;return{rocks:this.instances.length,visible:t,triangles:e,drawCalls:this.meshes.length,timings:this.timings}}dispose(){for(let e of this.meshes)e.geometry.dispose();this.material.dispose(),this.scene.remove(this.group)}},K={minHeight:1.8,villageRadius:100,villagePalms:10,pathClear:12,path:{x:W.pier.x,z0:-130,z1:-40},spawnClear:5,obstacleClear:2,boardwalk:[[55,-65],[54.6,-72],[52.4,-82],[48.4,-92],[44.8,-100.5],[42.6,-107.2]],boardwalkWidth:1.8};function ms(){let e=bo(),t=e.image.width,n=e.image.data;return(e,r,i)=>{let a=e*t-.5,o=r*t-.5,s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c,d=(s%t+t)%t,f=(c%t+t)%t,p=(d+1)%t,m=(f+1)%t,h=n[(f*t+d)*4+i],g=n[(f*t+p)*4+i],_=n[(m*t+d)*4+i],v=n[(m*t+p)*4+i];return((h*(1-l)+g*l)*(1-u)+(_*(1-l)+v*l)*u)/255}}var hs=(e,t,n)=>[e*Math.cos(n)-t*Math.sin(n),e*Math.sin(n)+t*Math.cos(n)],gs=class{constructor(e,{seed:t=1234,footprints:n=[],paths:r=null}={}){this.terrain=e,this.noise=new Za(t),this.noise2=new Za(t*7+3),this.n=new A,this.village=W.village.center,this.spawn=W.spawn.position,this.detail=ms(),this.hasVillage=n.length>0,this.setObstacles(n,r??[{points:K.boardwalk,width:K.boardwalkWidth}])}setObstacles(e,t){this.footprints=e.map(e=>({x:e.x,z:e.z,r:e.r})),this.segments=[];for(let e of t){let t=e.points;for(let n=0;n<t.length-1;n++)this.segments.push([t[n][0],t[n][1],t[n+1][0],t[n+1][1],(e.width??1.8)*.5])}let n=this.obstacleBounds={x0:1/0,z0:1/0,x1:-1/0,z1:-1/0},r=(e,t,r)=>{n.x0=Math.min(n.x0,e-r),n.x1=Math.max(n.x1,e+r),n.z0=Math.min(n.z0,t-r),n.z1=Math.max(n.z1,t+r)};for(let e of this.footprints)r(e.x,e.z,e.r);for(let e of this.segments)r(e[0],e[1],e[4]),r(e[2],e[3],e[4])}obstacleDist(e,t){let n=this.obstacleBounds;if(e<n.x0-25||e>n.x1+25||t<n.z0-25||t>n.z1+25)return 1e9;let r=1e9;for(let n of this.footprints)r=Math.min(r,Math.hypot(e-n.x,t-n.z)-n.r);for(let[n,i,a,o,s]of this.segments){let c=a-n,l=o-i,u=c*c+l*l||1,d=Qa(((e-n)*c+(t-i)*l)/u,0,1);r=Math.min(r,Math.hypot(e-n-c*d,t-i-l*d)-s)}return r}height(e,t){return this.terrain.heightAt(e,t)}_mask(e,t,n,r=1){let i=this.terrain,a=(t-i.origin)/i.texel-.5,o=(n-i.origin)/i.texel-.5;if(a<0||o<0||a>=i.res-1||o>=i.res-1)return 0;let s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c,d=c*i.res+s;return((e[d]*(1-l)+e[d+1]*l)*(1-u)+(e[d+i.res]*(1-l)+e[d+i.res+1]*l)*u)*r}rock(e,t){return this._mask(this.terrain.rock,e,t)}normalY(e,t){return this.terrain.normalAt(e,t,this.n).y}villageDist(e,t){return Math.hypot(e-this.village.x,t-this.village.z)}pathDist(e,t){let n=K.path,r=Qa(t,n.z0,n.z1);return Math.hypot(e-n.x,t-r)}spawnDist(e,t){return Math.hypot(e-this.spawn.x,t-this.spawn.z)}inBay(e,t){return Math.abs(e-10)<235&&t>-245&&t<-30}cover(e,t,n={}){let r=this.terrain,i=this.height(e,t),a=this.normalY(e,t),o=1-a,[s,c]=hs(e,t,.7),[l,u]=hs(e,t,2.1),d=this.detail(s/173,c/173,3),f=this.detail(l/47,u/47,3),p=d*.6+f*.4,m=this._mask(r.gully,e,t,1/255)*U(-.5,.5,i),h=Qa(U(9,24,i+(p-.5)*18)+U(.18,.36,o)+m*.6,0,1),g=this.rock(e,t);return n.h=i,n.ny=a,n.slope=o,n.macro=p,n.mA=d,n.mB=f,n.gully=m,n.forest=h,n.rock=g,n.bare=Math.max(g*1.4,U(.42,.55,o)),n.sand=this._mask(r.sand,e,t,1/255),n.path=this._mask(r.path,e,t,1/255),n.scarp=r.scarp?this._mask(r.scarp,e,t,1/255):0,n}allowed(e,t,n,{minH:r=K.minHeight,maxBare:i=.35,clear:a=0,big:o=!1,maxSand:s=.5,maxPath:c=.3}={}){return!(n.h<r||n.bare>i||n.sand>s||n.path>c||n.scarp>.3||this.spawnDist(e,t)<K.spawnClear+a||this.pathDist(e,t)<(o?K.pathClear:K.pathClear*.5)||this.obstacleDist(e,t)<K.obstacleClear+a||this.terrain.pathDistance&&this.terrain.pathDistance(e,t)<.6+a*.5)}groundY(e,t,n){let r=this.height(e,t);return n>0&&(r=Math.min(r,this.height(e+n,t),this.height(e-n,t),this.height(e,t+n),this.height(e,t-n))),r}downhill(e,t){this.terrain.normalAt(e,t,this.n);let n=Math.hypot(this.n.x,this.n.z);return n>1e-4?[this.n.x/n,this.n.z/n]:[0,1]}},_s=class{constructor(e=4){this.cell=e,this.map=new Map}_key(e,t){return(e+32768)*65536+(t+32768)}add(e,t,n,r){let i=this._key(Math.floor(e/this.cell),Math.floor(t/this.cell)),a=this.map.get(i);a||this.map.set(i,a=[]),a.push(e,t,n,r)}free(e,t,n,r=1){let i=n+8,a=this.cell,o=Math.floor((e-i)/a),s=Math.floor((e+i)/a),c=Math.floor((t-i)/a),l=Math.floor((t+i)/a);for(let i=c;i<=l;i++)for(let a=o;a<=s;a++){let o=this.map.get(this._key(a,i));if(o)for(let i=0;i<o.length;i+=4){let a=o[i]-e,s=o[i+1]-t,c=(o[i+2]+n)*r;if(a*a+s*s<c*c)return!1}}return!0}},vs={PALM:1,TREE:2,BANANA:3,SHRUB:4,YOUNG:5,FERN:6,BROAD:7};function ys(e,t,n,r,i,a,o){for(let s=n;s<i;s+=a)for(let n=t;n<r;n+=a)o(n+e()*a,s+e()*a)}var bs=null;function xs(e,t,n,r=!1){let i=bs;if(n.h<2.3||n.h>80||n.bare>.45||n.path>.3)return 0;let a=i.villageDist(e,t),o=U(K.villageRadius+5,K.villageRadius+40,a);return o<=0?0:o*(1-.6*(U(18,55,n.h)*(1-n.gully))+.5*n.gully)*(r?1:1-U(.35,.7,n.sand))*(1-U(.25,.45,n.rock))}function Ss(e,t=99){bs=e;let n=Xa(t),r=new _s(4),i=new _s(6),a=e.noise,o=e.noise2,s={palms:[],trees:[],bananas:[],shrubs:[],youngPalms:[],ferns:[],monsteras:[],elephantEars:[],heliconias:[],strelitzias:[]},c=Math.PI*2,l={},u=-660,d=-900;ys(n,u,d,660,320,4.6,(t,u)=>{if(e.cover(t,u,l),l.h<3)return;let d=a.fbm(t/60,u/60,3)*.6+o.fbm(t/17,u/17,2)*.4,f=l.forest>.5?.9:U(.15,.5,l.forest)*.38*U(-.25,.2,d)+.008;if(u>-20&&(f=l.forest>.5?.45*U(-.2,.2,d):f),l.forest<=.5&&(f+=xs(t,u,l)*(.9*U(-.2,.2,d)+.1)),n()>f||!e.allowed(t,u,l,{minH:3,maxBare:.3,clear:5,big:!0}))return;let p=(l.forest>.5&&n()<.3?.55+n()*.2:.8+n()*.5)*(l.forest>.5?1:.85)*(n()<.08?1.3:1),m=.78+n()*.34+(n()<.1?.25:0),h=2.5*p;if(!i.free(t,u,h,1))return;i.add(t,u,h,vs.TREE),r.add(t,u,.5*p,vs.TREE);let g=n()*c;s.trees.push({x:t,y:e.groundY(t,u,.6)-.15,z:u,s:p,sy:m,yaw:g,la:g,l:m,H:12.5*p*m,seed:n()})});let f=(t,r,i)=>{let[a,o]=e.downhill(t,r),s=a*.35,l=1+o*.35,u=Math.atan2(l,s)+(n()-.5)*1.1,d=(.1+.32*(1-U(2.3,5.5,i)))*(.55+.75*n()),f=.85+n()*.32,p=(7+n()*6.5)*(.9+.2*f);return{x:t,y:e.groundY(t,r,.35)-.05,z:r,s:f,yaw:n()*c,la:u,l:d,H:p,seed:n()}};ys(n,-240,-230,250,-40,3.4,(t,c)=>{if(!e.inBay(t,c)||e.villageDist(t,c)<K.villageRadius)return;e.cover(t,c,l);let u=a.fbm(t/48,c/48,3)+.4*o.fbm(t/17,c/17,2),d=U(1.95,2.35,l.h)*(1-U(5.2,7.2,l.h)),p=.5*U(-.28,.22,u)*d;n()>p||!e.allowed(t,c,l,{minH:2,maxBare:.2,clear:3,big:!0,maxSand:1.01,maxPath:.5})||l.ny<.9||r.free(t,c,1.95,1)&&i.free(t,c,1.5,1)&&(r.add(t,c,1.95,vs.PALM),s.palms.push(f(t,c,l.h)))});let p=[];ys(n,-70,-220,150,-60,3.5,(t,r)=>{if(e.villageDist(t,r)>=K.villageRadius||!e.hasVillage&&r<-106||(e.cover(t,r,l),l.h<2.05||l.h>14||l.bare>.2||l.ny<.9)||e.pathDist(t,r)<K.pathClear||e.spawnDist(t,r)<K.spawnClear+3)return;let i=e.obstacleDist(t,r);if(i<3.5)return;let a=e.hasVillage?U(4.5,6,i)*(1-U(10,16,i)):0,o=U(2,2.3,l.h)*(1-U(3.6,4.4,l.h));p.push({x:t,z:r,h:l.h,r:n()*(.25+Math.max(a,o))})}),p.sort((e,t)=>t.r-e.r);let m=0;for(let e of p){if(m>=K.villagePalms)break;r.free(e.x,e.z,5.5,1)&&i.free(e.x,e.z,3,1)&&(r.add(e.x,e.z,5.5,vs.PALM),s.palms.push(f(e.x,e.z,e.h)),m++)}s.villagePalms=m,ys(n,u,d,660,-20,12,(t,a)=>{e.cover(t,a,l);let u=(.04+.4*U(0,.45,o.fbm(t/110+3.3,a/110-1.7,3)))*(1-U(60,160,l.h));if(n()>u||e.villageDist(t,a)<K.villageRadius||!e.allowed(t,a,l,{minH:6,maxBare:.2,clear:3,big:!0})||l.ny<.8||!r.free(t,a,2,1)||!i.free(t,a,1.2,1))return;r.add(t,a,2,vs.PALM);let[d,f]=e.downhill(t,a),p=.8+n()*.35;s.palms.push({x:t,y:e.groundY(t,a,.35)-.05,z:a,s:p,yaw:n()*c,la:Math.atan2(f,d)+(n()-.5)*1.5,l:.03+n()*.12,H:(8+n()*7)*p,seed:n()})});for(let e of s.palms){let t=0,n=0;for(let r of s.palms){if(r===e)continue;let i=e.x-r.x,a=e.z-r.z,o=i*i+a*a;if(o<25&&o>1e-6){let e=Math.sqrt(o);t+=i/e*(5-e),n+=a/e*(5-e)}}if(t!==0||n!==0){let r=Math.cos(e.la),i=Math.sin(e.la),a=Math.min(1,Math.hypot(t,n)/3);e.la=Math.atan2(i*(1-a)+n/Math.hypot(t,n)*a,r*(1-a)+t/Math.hypot(t,n)*a),e.l=Math.max(e.l,.14+.1*a)}}return ys(n,u,d,660,320,3,(t,i)=>{if(e.cover(t,i,l),l.h<2.3)return;let u=a.fbm(t/26+11.3,i/26-4.1,3)*.7+o.fbm(t/9,i/9,2)*.3,d=U(.2,.45,l.forest)*(1-U(.75,.95,l.forest)),f=e.inBay(t,i)&&l.h<5.5,p=d*.75+l.gully*.5+(l.forest>.9?.12:0)+(f?.08:.03),m=xs(t,i,l,!0);if(p+=m*(.32+.45*(1-U(3.5,9,l.h)))*(1-U(.5,.8,l.forest)),p*=U(-.2,.25,u),e.villageDist(t,i)<K.villageRadius&&(p*=.35),n()>p||!e.allowed(t,i,l,{minH:2.3,maxBare:.4,clear:1.2}))return;let h=(.75+n()*.8)*(m>.3?1.35:1),g=.65+n()*.65;if(!r.free(t,i,.85*h,1))return;r.add(t,i,.85*h,vs.SHRUB);let _=n()*c;s.shrubs.push({x:t,y:e.groundY(t,i,.3)-.08*h,z:i,s:h,sy:g,yaw:_,la:_,l:-g,H:1.6*h*g,seed:n()})}),ys(n,-280,-420,360,-40,4.2,(t,i)=>{let a=e.villageDist(t,i);if(a>330)return;e.cover(t,i,l);let u=.75*U(.12,.38,o.fbm(t/38-5.1,i/38+2.2,3))*(1-U(220,330,a))*(1-U(.8,1,l.forest)*.6);if(n()>u||!e.allowed(t,i,l,{minH:3.4,maxBare:.2,clear:1.5})||l.ny<.82)return;let d=.8+n()*.45;r.free(t,i,1.1*d,1)&&(r.add(t,i,1.1*d,vs.BANANA),s.bananas.push({x:t,y:e.groundY(t,i,.2)-.05,z:i,s:d,yaw:n()*c,la:n()*c,l:n()*.08,H:1.8*d*(.8+n()*.5),seed:n()}))}),ys(n,u,d,660,-20,6.5,(t,i)=>{if(e.cover(t,i,l),l.h<2.3||l.h>120)return;let o=a.fbm(t/48,i/48,3),u=(e.inBay(t,i)?.22:.1)*U(-.3,.2,o)*(1-l.forest*.6);if(n()>u||!e.allowed(t,i,l,{minH:2.3,maxBare:.2,clear:1.5}))return;let d=.7+n()*.6;r.free(t,i,1.1*d,1)&&(r.add(t,i,1.1*d,vs.YOUNG),s.youngPalms.push({x:t,y:l.h-.05,z:i,s:d,yaw:n()*c,la:n()*c,l:n()*.1,H:.35*d,seed:n()}))}),ys(n,u,d,660,-20,2.2,(t,i)=>{if(e.cover(t,i,l),l.h<4)return;let a=o.fbm(t/28-9.9,i/28+3.7,3),u=(.08+.72*U(.3,.8,l.forest)+l.gully*.4)*U(-.35,.2,a);if(n()>u||!e.allowed(t,i,l,{minH:4,maxBare:.45,clear:.5}))return;let d=.75+n()*.7;r.free(t,i,.5*d,1)&&(r.add(t,i,.5*d,vs.FERN),s.ferns.push({x:t,y:l.h-.03,z:i,s:d,yaw:n()*c,la:0,l:0,H:.05,seed:n()}))}),ys(n,u,d,660,-20,3.2,(t,i)=>{if(e.cover(t,i,l),l.h<3.5)return;let a=o.fbm(t/22+7.7,i/22-1.3,3),u=e.villageDist(t,i)<95?.18*U(.3,.7,l.forest+.4):0,d=(.5*U(.35,.75,l.forest)+l.gully*.35+u)*U(0,.35,a);if(n()>d||!e.allowed(t,i,l,{minH:3.5,maxBare:.35,clear:1,maxSand:.15})||l.ny<.75)return;let f=.8+n()*.6;r.free(t,i,.9*f,1)&&(r.add(t,i,.9*f,vs.BROAD),s.monsteras.push({x:t,y:l.h-.04,z:i,s:f,yaw:n()*c,la:n()*c,l:n()*.05,H:.02,seed:n()}))}),ys(n,u,d,660,-20,3.6,(t,i)=>{if(e.cover(t,i,l),l.h<2.6)return;let o=a.fbm(t/30-3.1,i/30+8.4,3),u=(l.gully*.8+U(7,3,l.h)*.25+U(.25,.5,l.forest)*(1-U(.7,.95,l.forest))*.25)*U(.05,.4,o);if(n()>u||!e.allowed(t,i,l,{minH:2.6,maxBare:.3,clear:1,maxSand:.15})||l.ny<.8)return;let d=.95+n()*.55;r.free(t,i,1.1*d,1)&&(r.add(t,i,1.1*d,vs.BROAD),s.elephantEars.push({x:t,y:l.h-.04,z:i,s:d,yaw:n()*c,la:n()*c,l:n()*.05,H:.02,seed:n()}))}),ys(n,u,d,660,-20,3.4,(t,i)=>{let a=e.villageDist(t,i);if(e.cover(t,i,l),l.h<3)return;let u=U(.2,.45,l.forest)*(1-U(.7,.9,l.forest)),d=e.obstacleDist(t,i),f=a<110?U(16,4,d)*.45+.04:0,p=(u*.12+f)*U(-.1,.3,o.fbm(t/18+2.2,i/18-6.6,2));if(n()>p||!e.allowed(t,i,l,{minH:3,maxBare:.3,clear:1.2,maxSand:.25})||l.ny<.8)return;let m=.85+n()*.35;r.free(t,i,.9*m,1)&&(r.add(t,i,.9*m,vs.BROAD),s.heliconias.push({x:t,y:l.h-.04,z:i,s:m,yaw:n()*c,la:n()*c,l:n()*.04,H:.02,seed:n()}))}),ys(n,u,d,660,-20,3,(t,i)=>{if(e.villageDist(t,i)>105||(e.cover(t,i,l),l.h<3))return;let o=U(10,3.5,e.obstacleDist(t,i))*.35*U(-.2,.3,a.fbm(t/14-4.4,i/14+6.6,2));if(n()>o||!e.allowed(t,i,l,{minH:3,maxBare:.3,clear:.8,maxSand:.25})||l.ny<.85)return;let u=.85+n()*.3;r.free(t,i,.7*u,1)&&(r.add(t,i,.7*u,vs.BROAD),s.strelitzias.push({x:t,y:l.h-.03,z:i,s:u,yaw:n()*c,la:n()*c,l:n()*.03,H:.02,seed:n()}))}),s}function Cs(e){let t=e.terrain,n=Math.round(t.size/2),r=t.size/n,i=new Uint8Array(n*n*4),a=e.noise,o=e.noise2,s={};for(let c=1;c<n-1;c++){let l=t.origin+(c+.5)*r;if(!(l>0||l<-950))for(let u=1;u<n-1;u++){let d=c*n+u,f=t.origin+(u+.5)*r;if(t.heightAt(f,l)<1.7||e.rock(f,l)>.45||(e.cover(f,l,s),s.bare>.5))continue;let p=e.spawnDist(f,l);if(p<K.spawnClear+2)continue;let m=e.obstacleDist(f,l);if(m<K.obstacleClear+1)continue;let h=U(K.spawnClear+2,K.spawnClear+4,p)*U(K.obstacleClear+1,K.obstacleClear+3.5,m)*(1-U(.2,.5,s.path))*(1-U(.25,.45,s.bare)),g=e.inBay(f,l),_=a.noise(f/7.5,l/7.5)*.65+o.noise(f/19,l/19)*.35,v=e.hasVillage?1-.55*(1-U(3,9,m)):1-.85*(1-U(K.villageRadius-6,K.villageRadius+4,e.villageDist(f,l))),y=U(2.5,4.5,s.h)*(1-U(.45,.85,s.forest))*(1-U(.3,.7,s.sand))*v*(.75+.25*U(-.4,.3,_)),b=0,x=0,S=0;if(g){let n=a.noise(f/16+4.4,l/16-2.2)*.6+o.noise(f/6-1.7,l/6+8.1)*.4,r=s.h-(2.15-n*.4),i=0;if(s.scarp<.3&&t.scarp){let n=e.height(f+8,l)-e.height(f-8,l),r=e.height(f,l+8)-e.height(f,l-8),a=Math.hypot(n,r);if(a>.001){n/=a,r/=a;for(let a=1;a<=34;a+=1.5)i=Math.max(i,e._mask(t.scarp,f+n*a,l+r*a,1/255))}i=U(.3,.5,i)}let c=U(.3,.5,s.scarp);r=r*(1-i)-2*i;let u=U(0,.35,r),d=U(-.45,-.1,r)*(1-u)*U(.35,.6,a.noise(f/2.6+9.3,l/2.6-4.1)),p=1-U(4.8,6.5,s.h),m=o.noise(f/4.2+5.5,l/4.2-3.3)*.6+a.noise(f/11-7.1,l/11+1.9)*.4,h=(.3+.7*U(-.45,.25,m))*(.6+.4*U(-.35,.35,_));b=Math.max(u*h,d*.85)*p*(1-U(.4,.8,s.forest)),b=b*(1-c)+c*.18*U(.7,1,s.scarp)*U(0,.4,m),x=U(0,.25,r)*(1-U(1.4,2.2,r))*U(0,.45,a.noise(f/13+3.1,l/13-7.7)),S=U(-.6,-.15,r)*(1-U(1.2,2,r))*U(-.15,.3,o.noise(f/9-2.3,l/9+5.3)),S=Math.max(S*(1-c),c*.6*U(0,.35,o.noise(f/3.5+1.1,l/3.5-2.9)))}let C=d*4;i[C]=Math.round(255*Qa(b*h,0,1)),i[C+1]=Math.round(255*Qa(y*h*(1-b),0,1)),i[C+2]=Math.round(255*Qa(x*h,0,1)),i[C+3]=Math.round(255*Qa(S*h,0,1))}}return{data:i,res:n}}function ws(e,t=77){let n=Xa(t),r=e.terrain,i=e.noise,a=e.noise2,o={palms:[],trees:[],bananas:[],shrubs:[],youngPalms:[],ferns:[],monsteras:[],elephantEars:[],heliconias:[],strelitzias:[]},s=new _s(6),c=Math.PI*2,l=W.spawn.position,u=new A,d=(t,n)=>{let r=e.height(t,n);return U(-.5,3,(e.height(t+45,n)+e.height(t-45,n)+e.height(t,n+45)+e.height(t,n-45))*.25-r)},f=(t,n,i)=>{if(Math.hypot(t-l.x,n-l.z)<28+i||Math.hypot(t,n)>2700||e.rock(t,n)>.05)return!1;for(let e of r.rockSites||[])if(Math.hypot(t-e.x,n-e.z)<e.r*1.8+i)return!1;return r.normalAt(t,n,u),u.y>.93},p=(t,r,i=1)=>{let a=(.85+n()*.45)*i*(n()<.1?1.25:1),l=.8+n()*.3,u=2.6*a;if(!f(t,r,u)||!s.free(t,r,u,1.05))return!1;s.add(t,r,u,vs.TREE);let d=n()*c;return o.trees.push({x:t,y:e.groundY(t,r,.6)-.15,z:r,s:a,sy:l,yaw:d,la:d,l,H:12.5*a*l,seed:n()}),!0},m=(t,r,i=1)=>{let a=(.8+n()*.7)*i,l=.6+n()*.5;if(!f(t,r,.8*a)||!s.free(t,r,.8*a,.9))return!1;s.add(t,r,.8*a,vs.SHRUB);let u=n()*c;return o.shrubs.push({x:t,y:e.groundY(t,r,.3)-.08*a,z:r,s:a,sy:l,yaw:u,la:u,l:-l,H:1.6*a*l,seed:n()}),!0},h=(e,t)=>{let r=Math.floor(n()*3);for(let i=0;i<r;i++){let r=n()*c,i=3.5+n()*4;m(e+Math.cos(r)*i,t+Math.sin(r)*i)}};for(let e=0;e<80;e++){let e=-.9+(n()-.5)*1.4,t=75+n()*50,r=l.x+Math.cos(e)*t,i=l.z+Math.sin(e)*t;if(p(r,i,1.25)){h(r,i);break}}for(let e=-2700;e<2700;e+=55)for(let t=-2700;t<2700;t+=55){let r=t+n()*55,a=e+n()*55,o=U(.2,.5,i.fbm(r/380+4.4,a/380-2.2,3)),s=.012+.07*o*(.4+.6*d(r,a));if(!(n()>s)&&p(r,a)&&(h(r,a),n()<.35*(.5+o))){let e=1+Math.floor(n()*3);for(let t=0;t<e;t++){let e=n()*c,t=8+n()*9;p(r+Math.cos(e)*t,a+Math.sin(e)*t,.8+n()*.3)}}}for(let e=-2600;e<2600;e+=30)for(let t=-2600;t<2600;t+=30){let r=t+n()*30,i=e+n()*30,o=U(.15,.5,a.fbm(r/260-3.3,i/260+1.1,3));n()>.006+.05*o||m(r,i,1.1)&&n()<.4&&m(r+(n()-.5)*5,i+(n()-.5)*5)}return o}function Ts(e){let t=e.terrain,n=Math.round(t.size/4),r=t.size/n,i=new Uint8Array(n*n*4),a=e.noise,o=e.noise2,s=W.spawn.position,c=new Float32Array(n*n);for(let e=0;e<n;e++){let i=t.origin+(e+.5)*r;for(let a=0;a<n;a++)c[e*n+a]=t.heightAt(t.origin+(a+.5)*r,i)}for(let l=1;l<n-1;l++){let u=t.origin+(l+.5)*r;for(let d=1;d<n-1;d++){let f=t.origin+(d+.5)*r,p=l*n+d,m=Math.max(0,d-6),h=Math.min(n-1,d+6),g=Math.max(0,l-6),_=Math.min(n-1,l+6),v=(c[l*n+m]+c[l*n+h]+c[g*n+d]+c[_*n+d])*.25-c[p],y=U(.2,2,v),b=U(.2,2,-v),x=e.rock(f,u),S=Math.hypot(f-s.x,u-s.z),C=U(.2,.5,o.fbm(f/70+8.8,u/70-3.1,3))*(.6+.4*b),w=(.95-.4*C)*(1-U(.05,.3,x)),T=U(.05,.4,a.fbm(f/85-1.7,u/85+5.3,3)),E=.5+.32*T+.18*y-.2*b-.25*C;E=E*U(6,22,S)+.18*(1-U(6,22,S));let D=T*(.5+.5*y)*U(9,25,S),O=U(.18,.5,o.fbm(f/38-6.6,u/38+2.4,3))*(1-T*.6),k=p*4;i[k]=Math.round(255*Qa(E,0,1)),i[k+1]=Math.round(255*Qa(w,0,1)),i[k+2]=Math.round(255*Qa(D*.8,0,1)),i[k+3]=Math.round(255*Qa(O,0,1))}}return{data:i,res:n}}var Es=1100,Ds=new P,Os=new D,ks=new A,As=new A,js=new A(0,1,0),Ms=class{constructor(e,t=32){let n=e.length;this.count=n,this.px=new Float32Array(n),this.py=new Float32Array(n),this.pz=new Float32Array(n),this.matrices=new Float32Array(n*16),this.qr2=new Float32Array(n),this.iPos=new Float32Array(n*4),this.iDat=new Float32Array(n*4);for(let t=0;t<n;t++){let n=e[t];this.px[t]=n.x,this.py[t]=n.y,this.pz[t]=n.z,ks.set(n.x,n.y,n.z),Os.setFromAxisAngle(js,n.yaw),n.msx===void 0?As.set(n.s,n.s*Math.abs(n.sy||1),n.s):As.set(n.msx,n.msy,n.msz),Ds.compose(ks,Os,As).toArray(this.matrices,t*16),this.iPos.set([n.x,n.y,n.z,n.s],t*4),this.iDat.set([n.la||0,n.l||0,n.H||1,n.seed],t*4),this.qr2[t]=n.qr?n.qr*n.qr:0}this.cellSize=t;let r=new Map;for(let e=0;e<n;e++){let n=this._key(Math.floor(this.px[e]/t),Math.floor(this.pz[e]/t)),i=r.get(n);i||r.set(n,i=[]),i.push(e)}this.cells=new Map;for(let[e,t]of r)this.cells.set(e,Int32Array.from(t))}_key(e,t){return(e+4096)*8192+(t+4096)}queryNear(e,t,n,r){let i=this.cellSize,a=Math.floor((e-n)/i),o=Math.floor((e+n)/i),s=Math.floor((t-n)/i),c=Math.floor((t+n)/i),l=n*n,u=0;for(let n=s;n<=c;n++)for(let i=a;i<=o;i++){let a=this.cells.get(this._key(i,n));if(a)for(let n=0;n<a.length;n++){let i=a[n],o=this.px[i]-e,s=this.pz[i]-t,c=this.qr2[i]||l;o*o+s*s<c&&u<r.length&&(r[u++]=i)}}return u}},Ns=class{constructor(e,t,n){this.capacity=Math.max(t,Es);let r=this.capacity;this.instanceMatrix=new Mt(new Float32Array(r*16),16),this.iBuffer=new Pt(new Float32Array(r*8),8),this.iPos=new Ft(this.iBuffer,4,0),this.iDat=new Ft(this.iBuffer,4,4),this.lodRange=n.clone(),this.meshes=[],this.count=0,this.trianglesPerInstance=0;for(let{geometry:t,material:n,castShadow:i=!1,name:a=``}of e){t.setAttribute(`iPos`,this.iPos),t.setAttribute(`iDat`,this.iDat);let e=new Xt(t,n,r);e.instanceMatrix=this.instanceMatrix,e.count=0,e.name=a,e.castShadow=i,e.receiveShadow=!0,e.frustumCulled=!1,e.userData.lodRange=this.lodRange,e.drawParams=[this.lodRange.x,this.lodRange.y,this.lodRange.z],e.matrixAutoUpdate=!1,e.updateMatrix(),this.meshes.push(e),this.trianglesPerInstance+=(t.index?t.index.count:t.attributes.position.count)/3}}setDynamic(){this.instanceMatrix.setUsage(Ct),this.iBuffer.setUsage(Ct)}fill(e,t=null,n=e.count,r=!0){n=Math.min(n,this.capacity);let i=this.instanceMatrix.array,a=this.iBuffer.array,o=e.matrices,s=e.iPos,c=e.iDat;for(let e=0;e<n;e++){let n=t===null?e:t[e];if(r){let t=n*16,r=e*16;for(let e=0;e<16;e++)i[r+e]=o[t+e]}let l=n*4,u=e*8;a[u]=s[l],a[u+1]=s[l+1],a[u+2]=s[l+2],a[u+3]=s[l+3],a[u+4]=c[l],a[u+5]=c[l+1],a[u+6]=c[l+2],a[u+7]=c[l+3]}r&&(this.instanceMatrix.clearUpdateRanges(),this.instanceMatrix.addUpdateRange(0,n*16),this.instanceMatrix.needsUpdate=!0),this.iBuffer.clearUpdateRanges(),this.iBuffer.addUpdateRange(0,n*8),this.iBuffer.needsUpdate=!0,this.count=n;for(let e of this.meshes)e.count=n}get triangles(){return this.count*this.trianglesPerInstance}},Ps=class{constructor(e,t,{near:n=null,far:r=null,nearRange:i=100,fade:a=null,margin:o=14,refreshDistance:s=6,farExcludeNear:c=!1,sortNear:l=!1,sortFar:u=!1,farRefresh:d=16}={}){this.name=e,this.sortNear=l,this.sortFar=u&&!!r&&!c,this.farRefresh=d,this.farX=1/0,this.farZ=1/0,this.inst=new Ms(t),this.nearRange=i,this.margin=o,this.refreshDistance=s,this.lastX=1/0,this.lastY=1/0,this.lastZ=1/0,this.levels=[];let f=r?new A(0,i,i+.01):new A(0,a[0],a[1]);this.queryRadius=(r?i:a[1])+o,n&&(this.nearIds=new Int32Array(Math.max(1,this.inst.count)),this.near=new Ns(n,Math.min(this.inst.count,6e3),f),this.near.setDynamic(),this.levels.push(this.near)),r&&(this.far=new Ns(r.parts,this.inst.count,new A(i,r.fade[0],r.fade[1])),this.far.fill(this.inst),this.levels.push(this.far),this.sortFar&&(this.far.setDynamic(),this.farIds=new Int32Array(Math.max(1,this.inst.count))),this.farExcludeNear=c,c&&(this.far.setDynamic(),this.farIds=new Int32Array(Math.max(1,this.inst.count))))}get meshes(){return this.levels.flatMap(e=>e.meshes)}overdue(e){if(!this.near)return-1;let t=e.x-this.lastX,n=e.y-this.lastY,r=e.z-this.lastZ,i=t*t+n*n+r*r,a=Number.isFinite(i)?Math.sqrt(i)-this.refreshDistance:1e9;if(!this.sortFar)return a;let o=Math.hypot(e.x-this.farX,e.z-this.farZ);return Math.max(a,Number.isFinite(o)?o-this.farRefresh:1e9)}_sortFar(e){this.farX=e.x,this.farZ=e.z;let{px:t,pz:n,count:r}=this.inst,i=this._bucket||=new Uint16Array(r),a=this._bstart||=new Int32Array(1025);a.fill(0);for(let o=0;o<r;o++){let r=Math.min(1023,Math.floor(Math.hypot(t[o]-e.x,n[o]-e.z)/6));i[o]=r,a[r+1]++}for(let e=0;e<1024;e++)a[e+1]+=a[e];for(let e=0;e<r;e++)this.farIds[a[i[e]]++]=e;this.far.fill(this.inst,this.farIds,r,!1)}update(e,t=!1){if(!this.near||!t&&this.overdue(e)<0)return!1;this.sortFar&&!(Math.hypot(e.x-this.farX,e.z-this.farZ)<this.farRefresh)&&this._sortFar(e),this.lastX=e.x,this.lastY=e.y,this.lastZ=e.z;let n=this.inst.queryNear(e.x,e.z,this.queryRadius,this.nearIds);if(this.sortNear){let{px:t,pz:r}=this.inst,i=this.nearIds.subarray(0,n),a=this._sortKey||=new Float32Array(this.nearIds.length);for(let o=0;o<n;o++){let n=i[o];a[n]=(t[n]-e.x)**2+(r[n]-e.z)**2}i.sort((e,t)=>a[e]-a[t])}if(this.near.fill(this.inst,this.nearIds,n),this.farExcludeNear){let t=Math.max(0,this.nearRange-this.refreshDistance-2),n=t*t,{px:r,py:i,pz:a}=this.inst,o=0;for(let t=0;t<this.inst.count;t++){let s=r[t]-e.x,c=i[t]-e.y,l=a[t]-e.z;s*s+c*c+l*l>=n&&(this.farIds[o++]=t)}this.far.fill(this.inst,this.farIds,o)}return!0}},Fs=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.veg=[],this.mat=[],this.lobe=[],this.kind=0,this.idx=[]}get count(){return this.pos.length/3}vertex(e,t,n,r,i,a,o=null){return o?this.lobe.push(o[0],o[1],o[2],o[3]):this.lobe.push(0,0,0,-1-this.kind),this.pos.push(e.x,e.y,e.z),this.nor.push(t.x,t.y,t.z),this.uv.push(n,r),this.veg.push(i[0],i[1],i[2],i[3]),this.mat.push(a[0],a[1],a[2],a[3]),this.count-1}tri(e,t,n){this.idx.push(e,t,n)}quad(e,t,n,r){this.idx.push(e,t,n,e,n,r)}build(e=0,t=null){let n=this.count,r=[[`position`,this.pos,3],[`normal`,this.nor,3],[`uv`,this.uv,2],[`aVeg`,this.veg,4],[`aMat`,this.mat,4],[`aLobe`,this.lobe,4]],i=r.reduce((e,t)=>e+t[2],0),a=new Float32Array(n*i),o=0;for(let[,e,t]of r){for(let r=0;r<n;r++)for(let n=0;n<t;n++)a[r*i+o+n]=e[r*t+n];o+=t}let s=new Nt(a,i),c=new Wt;o=0;for(let[e,,t]of r)c.setAttribute(e,new Ft(s,t,o)),o+=t;return c.setIndex(n>65535?new At(this.idx,1):new kt(this.idx,1)),c.computeBoundingBox(),c.computeBoundingSphere(),e>0&&(c.boundingSphere.radius=Math.max(c.boundingSphere.radius,e),t&&c.boundingSphere.center.copy(t)),c}get triangles(){return this.idx.length/3}},Is={STEM:0,FROND:1,FERN:2,BANANA:3,COCONUT:5,MONSTERA:6,ELEPHANT:7,HELICONIA:8,BRACT:9,STRELITZIA:10,BIRD:11},Ls=new A(0,1,0),Rs=new A,zs=new A,Bs=new A,Vs=new A,Hs=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function Us(e,{radial:t,rows:n,radius:r,Hgeo:i,mat:a=[0,0,0,0],cap:o=!0,texU:s=1,lumps:c=null}){let l=e.count;for(let o=0;o<n.length;o++){let l=n[o],u=r(l),d=.01,f=(r(l+d)-r(l-d))/(2*d*i);for(let n=0;n<=t;n++){let r=n/t*Math.PI*2,o=Math.cos(r),d=Math.sin(r),p=c?u*(1+c(l,r)):u;Rs.set(o*p,l*i,d*p),zs.set(o,-f,d).normalize(),e.vertex(Rs,zs,n/t*s,l,[l,0,0,0],a)}}for(let r=0;r<n.length-1;r++)for(let n=0;n<t;n++){let i=l+r*(t+1)+n,a=i+t+1;e.quad(i,a,a+1,i+1)}if(o){let r=n[n.length-1],o=e.vertex(Rs.set(0,r*i,0),Ls,.5,r,[r+.015,0,0,0],a),s=l+(n.length-1)*(t+1);for(let n=0;n<t;n++)e.tri(s+n,o,s+n+1)}}function Ws(e,t){let{origin:n,azimuth:r,elevation:i,bend:a,twist:o=0,length:s,segs:c=8,cross:l=2,leafLen:u,leafAngle:d,droop:f,curl:p=.2,part:m=Is.FROND,age:h=0,seed:g=0,phase:_=0,flutter:v=1,minWidth:y=.035,bendPow:b=1.4,stemU:x=1,roll:S=0,sBase:C=0}=t,w=[],T=n.clone();for(let e=0;e<=c;e++){w.push(T.clone());let t=(e+.5)/c,n=i-a*t**+b,l=r+o*t;Rs.set(Math.cos(n)*Math.cos(l),Math.sin(n),Math.cos(n)*Math.sin(l)),T.addScaledVector(Rs,s/c)}let E=new A(-Math.sin(r),0,Math.cos(r)),D=new A,O=new A,k=new A,j=new A,M=new A;for(let t of[-1,1]){let n=[];for(let e=0;e<=c;e++){let r=e/c;D.subVectors(w[Math.min(c,e+1)],w[Math.max(0,e-1)]).normalize(),O.crossVectors(D,Ls),O.lengthSq()<.04&&O.copy(E),O.normalize(),k.crossVectors(O,D).normalize();let i=Math.max(u(r),y),a=d(r),o=f(r)+t*S*r*r;j.copy(O).multiplyScalar(t*Math.cos(o)).addScaledVector(k,-Math.sin(o)),M.copy(D).multiplyScalar(Math.cos(a)).addScaledVector(j,Math.sin(a)).normalize();let s=[];for(let t=0;t<=l;t++){let n=t/l,a=w[e].clone().addScaledVector(M,i*n).addScaledVector(k,-i*p*n*n);s.push({q:a,s:r,t:n,Ll:i,nup:k.clone()})}n.push(s)}let r=[];for(let t=0;t<=c;t++){let i=[];for(let r=0;r<=l;r++){let a=n[t][r],o=Math.max(0,t-1),s=Math.min(c,t+1),u=Math.max(0,r-1),d=Math.min(l,r+1);zs.subVectors(n[s][r].q,n[o][r].q),Bs.subVectors(n[t][d].q,n[t][u].q),Vs.crossVectors(zs,Bs),Vs.lengthSq()<1e-12&&Vs.copy(a.nup),Vs.normalize(),Vs.dot(a.nup)<0&&Vs.negate();let f=a.t*Hs(.05,.3,a.s)*v;i.push(e.vertex(a.q,Vs,a.s,a.t,[x,C+(1-C)*a.s,f,_],[m,h,a.Ll,g]))}r.push(i)}for(let n=0;n<c;n++)for(let i=0;i<l;i++){let a=r[n][i],o=r[n+1][i],s=r[n+1][i+1],c=r[n][i+1];t>0?e.quad(a,c,s,o):e.quad(a,o,s,c)}}}function Gs(e,t,n,r,i){let a=new gn(1,0),o=a.attributes.position,s=new Map,c=[];for(let a=0;a<o.count;a++){Rs.fromBufferAttribute(o,a);let l=Rs.x.toFixed(3)+`,`+Rs.y.toFixed(3)+`,`+Rs.z.toFixed(3),u=s.get(l);u===void 0&&(zs.copy(Rs).multiply(n).add(t),Bs.copy(Rs).divide(n).normalize(),u=e.vertex(zs,Bs,.5,.5,i,r),s.set(l,u)),c.push(u)}for(let t=0;t<c.length;t+=3)e.tri(c[t],c[t+1],c[t+2]);a.dispose()}var Ks=10,qs=e=>{let t=e*Ks,n=.155+.045*(1-e)+.19*Math.exp(-Math.max(t,0)/.42);return n*=1+.05*Math.sin(t*1.7)*(1-e),n+=.07*Hs(.955,.99,e)-.1*Hs(.995,1.02,e),n},Js=(e,t)=>{let n=Math.max(e*Ks,0);return Math.exp(-n/.3)*(.16*Math.max(0,Math.sin(t*5+.7))+.08*Math.sin(t*11+2.1))};function Ys(e,t){let n=[];for(let r=0;r<t;r++){let i=t>1?r/(t-1):.5,a=t>10&&r>=t-2,o=(3.8+1.5*Hs(0,.45,i))*(.88+.24*e());n.push({a:i,dead:a,azimuth:r*2.39996+(e()-.5)*.4,elevation:a?-1.05-(r-(t-2))*.25:1-1.25*i**.8+(e()-.5)*.3,bend:a?.35:.55+1.15*i+e()*.4,bendPow:a?1.2:1.9+e()*.5,twist:(e()-.5)*.45,roll:(e()-.5)*(a?.4:.9),length:a?o*.9:o,attachY:.32-.5*i,seed:e(),phase:e()})}return n}function Xs(e,t,{segs:n,cross:r,leafScale:i=1}){for(let a of t){let t=new A(Math.cos(a.azimuth)*.14,a.attachY,Math.sin(a.azimuth)*.14),o=a.length;Ws(e,{origin:t,azimuth:a.azimuth,elevation:a.elevation,bend:a.bend,bendPow:a.bendPow,twist:a.twist,roll:a.roll,length:o,segs:n,cross:r,leafLen:e=>i*.23*o*(Hs(.14,.3,e)*(1-.68*Hs(.35,1,e))),leafAngle:e=>1.1-.5*e,droop:e=>(a.dead?1.3:.88+.35*a.a)+.45*e,curl:a.dead?.15:.45,part:Is.FROND,age:a.dead?1:a.a*.55,seed:a.seed,phase:a.phase,flutter:a.dead?.3:1,minWidth:.045})}}function Zs(e=11){let t=Xa(e),n=new Fs;Us(n,{radial:10,rows:[-.03,0,.015,.04,.08,.14,.22,.32,.43,.54,.65,.76,.86,.94,.975,.992,1.005],radius:qs,Hgeo:Ks,mat:[Is.STEM,0,0,0],lumps:Js});for(let e=0;e<6;e++){let r=e*2.39996+t()*.5,i=.2+t()*.1,a=new A(Math.cos(r)*i,-.3-t()*.35,Math.sin(r)*i),o=.12+t()*.035;Gs(n,a,new A(o,o*1.12,o),[Is.COCONUT,t(),0,e/6],[1,0,0,0])}return Xs(n,Ys(t,18),{segs:8,cross:2}),{geometry:n.build(16,new A(0,6,0)),triangles:n.triangles}}function Qs(e=11){let t=Xa(e),n=new Fs;return Us(n,{radial:5,rows:[-.03,.03,.2,.6,1],radius:qs,Hgeo:Ks,mat:[Is.STEM,0,0,0],cap:!1}),Xs(n,Ys(t,18).filter((e,t)=>t!==1&&t!==5&&t!==9&&t!==13),{segs:3,cross:1,leafScale:1.15}),{geometry:n.build(16,new A(0,6,0)),triangles:n.triangles}}function $s(e=5,t=new Fs){let n=Xa(e);Us(t,{radial:5,rows:[-.2,.3,1],radius:e=>.16-.07*e,Hgeo:.6,mat:[Is.STEM,.35,0,0],cap:!1});for(let e=0;e<8;e++){let r=e/7,i=e*2.39996+n()*.4,a=(1.7+.9*r)*(.85+.3*n());Ws(t,{origin:new A(0,.1-.15*r,0),azimuth:i,elevation:1.35-.8*r+(n()-.5)*.2,bend:.6+.7*r,twist:(n()-.5)*.3,length:a,segs:5,cross:1,leafLen:e=>.21*a*(Hs(.04,.25,e)*(1-.6*Hs(.3,1,e))),leafAngle:e=>1-.4*e,droop:e=>.25+.4*r+.2*e,curl:.15,part:Is.FROND,age:r*.4,seed:n(),phase:n(),minWidth:.03})}return{geometry:t.build(4,new A(0,1,0)),triangles:t.triangles}}function ec(e=3,t=new Fs){let n=Xa(e);for(let e=0;e<9;e++){let r=e/8,i=e*2.39996+n()*.5,a=(.75+.5*r)*(.85+.3*n());Ws(t,{origin:new A(0,.05,0),azimuth:i,elevation:1.3-.55*r+(n()-.5)*.2,bend:1.3+.8*r,twist:(n()-.5)*.5,length:a,segs:4,cross:1,bendPow:1.2,leafLen:e=>.2*a*(Hs(.02,.2,e)*(1-.8*Hs(.35,1,e))),leafAngle:()=>1.35,droop:e=>.12+.2*e,curl:.08,part:Is.FERN,age:0,seed:n(),phase:n(),minWidth:.012,flutter:.6})}return{geometry:t.build(1.6,new A(0,.4,0)),triangles:t.triangles}}function tc(e=9,t=new Fs){let n=Xa(e),r=[{h:2.1+n()*.5,r:.12,leaves:8,dead:3,off:0},{h:1.3+n()*.4,r:.085,leaves:6,dead:1,off:.32},{h:.55+n()*.25,r:.05,leaves:3,dead:0,off:.3,sucker:!0},{h:.35+n()*.2,r:.04,leaves:3,dead:0,off:.28,sucker:!0}],i=new A,a=n()*Math.PI*2;for(let e of r){a+=2.1+n()*.8;let r=new A(Math.cos(a)*e.off,0,Math.sin(a)*e.off),o=e.off>0?a:n()*Math.PI*2,s=new A(Math.cos(o),0,Math.sin(o)).multiplyScalar((e.off>0?.1:.04)+n()*.05),c=[];for(let t=0;t<=3;t++){let n=t/3;c.push(r.clone().add(new A(0,e.h*n,0)).addScaledVector(s,e.h*n*n))}let l=c[3],u=Math.min(.55,.2+e.h*.15),d=n();xc(t,c,{radius:t=>e.r*(1-.35*t)*(1+.25*Math.exp(-t*7)),radial:e.sucker?4:6,part:Is.BANANA,age:0,seed:d,phase:n(),s0:0,s1:u});let f=e.leaves+e.dead;for(let r=0;r<f;r++){let a=r>=e.leaves,o=r/Math.max(1,e.leaves-1),s=r*2.39996+n()*.6;i.set(Math.cos(s),0,Math.sin(s));let c=e.sucker?.35+n()*.15:e.h/2.4,d=(1.9+.8*n())*c*(a?.85:1),f=(e.sucker?.14:.3+.08*n())*(e.sucker?1:Math.max(.6,c));Ws(t,{origin:l.clone().add(new A(i.x*e.r*.5,-(a?.15+n()*.35:o*.2)*e.h,i.z*e.r*.5)),azimuth:s,elevation:a?-.9-n()*.5:(e.sucker?1.25:1.2-.85*o)+(n()-.5)*.25,bend:a?.35:e.sucker?.5:1+1.3*o+n()*.4,twist:(n()-.5)*.5,length:d,segs:a||e.sucker?3:5,cross:1,bendPow:1.6,roll:(n()-.5)*.8,leafLen:e=>f*Math.max(0,Math.sin(Math.PI*Math.min(1,Math.max(0,(e-.1)/.9))))**.5*(a?.6:1),leafAngle:()=>1.45,droop:e=>a?.9:.2+.45*e+.2*o,curl:a?.5:.15,part:Is.BANANA,age:a?.92+n()*.06:o*.45+n()*.15,seed:n(),phase:n(),minWidth:.03,flutter:a?.3:.8,sBase:u})}}return{geometry:t.build(4,new A(0,1.5,0)),triangles:t.triangles}}var nc=12.5,rc=[[.4,9.9,-.3,2.9],[-2,8.3,1.6,2.6],[3,7.7,1.2,2.4],[1.7,6.8,-3,2.5],[-3.2,6.3,-1.8,2.3],[.4,5.6,3.4,2.2],[-1.1,11.2,-1.7,1.8],[3.7,5.2,-.9,1.9]],ic=[.15,3.7,-.05],ac=1.6,oc=[[0,.85,0,.8],[.75,.6,.35,.6],[-.6,.55,.55,.6],[-.25,.65,-.75,.62],[.35,1.25,-.25,.48]];function sc(e,t,n,r,i,a,o,s,c,l,u=null){let d=new A().subVectors(n,t),f=d.length();d.normalize();let p=Math.abs(d.y)<.9?Ls:new A(1,0,0),m=new A().crossVectors(d,p).normalize(),h=new A().crossVectors(m,d).normalize(),g=e.count;for(let n=0;n<=o;n++){let p=n/o,g=new A().copy(t).addScaledVector(d,f*p);for(let t=0;t<=a;t++){let n=t/a*Math.PI*2,o=u?u(p,n,g):r+(i-r)*p,d=new A().copy(m).multiplyScalar(Math.cos(n)).addScaledVector(h,Math.sin(n)),_=g.clone().addScaledVector(d,o);e.vertex(_,d,t/a,p*f,[Math.max(0,_.y/c),l(_),0,0],s)}}for(let t=0;t<o;t++)for(let n=0;n<a;n++){let r=g+t*(a+1)+n,i=r+a+1;e.quad(r,i,i+1,r+1)}}function cc(e,t,n,r,i,a,o,s,c,l,u){let d=e.count,f=e=>new A().copy(t).multiplyScalar((1-e)*(1-e)).addScaledVector(n,2*(1-e)*e).addScaledVector(r,e*e),p=e=>new A().subVectors(n,t).multiplyScalar(2*(1-e)).addScaledVector(new A().subVectors(r,n),2*e).normalize(),m=p(0),h=new A().crossVectors(m,Math.abs(m.y)<.9?Ls:new A(1,0,0)).normalize(),g=0,_=f(0);for(let t=0;t<=s;t++){let n=t/s,r=f(n);g+=r.distanceTo(_),_=r;let d=p(n);h.addScaledVector(d,-h.dot(d)).normalize(),m=d;let v=new A().crossVectors(h,m).normalize(),y=i+(a-i)*n**.8;for(let t=0;t<=o;t++){let n=t/o*Math.PI*2,i=new A().copy(h).multiplyScalar(Math.cos(n)).addScaledVector(v,Math.sin(n)),a=r.clone().addScaledVector(i,y);e.vertex(a,i,t/o,g,[Math.max(0,a.y/l),u(a),0,0],c)}}for(let t=0;t<s;t++)for(let n=0;n<o;n++){let r=d+t*(o+1)+n,i=r+o+1;e.quad(r,i,i+1,r+1)}}function lc(e,{center:t,size:n,normal:r,yaw:i,lobeC:a,lobeR:o,lobeId:s,crownC:c,crownR:l,rand:u,flexFn:d,hScale:f,part:p,clumpC:m=null,clumpR:h=1}){let g=r.clone().normalize(),_=Math.abs(g.y)<.95?Ls:new A(1,0,0),v=new A().crossVectors(_,g).normalize(),y=new A().crossVectors(g,v).normalize(),b=Math.cos(i),x=Math.sin(i),S=v.clone().multiplyScalar(b).addScaledVector(y,x),C=y.clone().multiplyScalar(b).addScaledVector(v,-x),w=u(),T=u(),E=u(),D=[];for(let[r,i,u,_]of[[-.5,-.5,0,0],[.5,-.5,1,0],[.5,.5,1,1],[-.5,.5,0,1]]){let v=t.clone().addScaledVector(S,r*n).addScaledVector(C,i*n),y=m?v.clone().sub(m).divideScalar(h):v.clone().sub(a).divideScalar(o),b=v.clone().sub(c).divide(l),x=y.clone().normalize().multiplyScalar(.5).addScaledVector(b.clone().normalize(),.4).addScaledVector(g,.2).normalize(),O=Math.min(1,.5*Math.min(1,y.length())+.4*Math.min(1,b.length())+.25*Math.max(0,b.y)),k=Math.max(0,v.y/f);D.push(e.vertex(v,x,u,_,[k,d(v),1,E],[p,.2+.8*O*O,w,T],[a.x-v.x,a.y-v.y,a.z-v.z,s]))}e.quad(D[0],D[1],D[2],D[3])}function uc(e,t,{count:n,size:r,crownC:i,crownR:a,rand:o,flexFn:s,hScale:c,part:l,flatten:u=.6}){let d=new A(e[0],e[1],e[2]),f=e[3],p=[];for(let e=0;e<n;e++){let e,n,m;do e=o()*2-1,n=o()*2-1,m=o()*2-1;while(e*e+n*n+m*m>1||n<-.75);let h=Math.hypot(e,n,m)||1,g=.45+.55*Math.sqrt(h),_=new A(e/h*g*f*.85,n/h*g*f*.85*u,m/h*g*f*.85).add(d),v=_.clone().sub(d).normalize().lerp(Ls,.35+o()*.35).normalize();p.push({center:_,size:r*(.8+o()*.45),normal:v,yaw:o()*6.283,lobeC:d,lobeR:f,lobeId:t,crownC:i,crownR:a,rand:o,flexFn:s,hScale:c,part:l})}return p}function dc(e,t,{clumps:n,clumpR:r,cardsPer:i,size:a,crownC:o,crownR:s,rand:c,flexFn:l,hScale:u,part:d,flatten:f=.7}){let p=new A(e[0],e[1],e[2]),m=e[3],h=[],g=[];for(let e=0;e<n;e++){let e,n,_;do e=c()*2-1,n=c()*2-1,_=c()*2-1;while(e*e+n*n+_*_>1||n<-.55);let v=Math.hypot(e,n,_)||1,y=.3+.7*Math.sqrt(c()),b=new A(e/v,n/v*f,_/v).multiplyScalar(y*m*.85).add(p),x=r*(.65+c()*.7);g.push({c:b,rc:x});let S=b.clone().sub(p).normalize();for(let e=0;e<i;e++){let e=new A(c()*2-1,c()*2-1,c()*2-1).normalize().addScaledVector(S,.9).addScaledVector(Ls,.55).normalize(),n=b.clone().addScaledVector(e,x*(.1+.3*c())).add(new A(c()-.5,(c()-.5)*.6,c()-.5).multiplyScalar(x*.5));h.push({center:n,size:a*x/r*(.8+c()*.4),normal:e,yaw:c()*6.283,lobeC:p,lobeR:m,lobeId:t,crownC:o,crownR:s,rand:c,flexFn:l,hScale:u,part:d,clumpC:b,clumpR:x})}}return{cards:h,tips:g}}function fc(e,t,n){t.sort((e,t)=>t.center.distanceToSquared(n)-e.center.distanceToSquared(n));for(let n of t)lc(e,n)}function pc(e=21,t=new Fs){let n=Xa(e),r=nc,i=new A(0,7.8,0),a=new A(5.2,3.7,5.2),o=e=>Math.min(1,Math.hypot(e.x,e.z)/5)*Hs(3.2,6.5,e.y),s=new A(...ic);sc(t,new A(0,-.5,0),s,.34,.24,10,7,[0,0,0,0],r,o,(e,t,n)=>{let r=n.y;return(.34-.1*e)*(1+.9*(Math.max(0,Math.cos(4*t+.4))**4*Math.exp(-Math.max(r,0)/.8))+.25*Math.exp(-Math.max(r+.3,0)/.5))});let c=[];rc.forEach((e,a)=>{let l=new A(e[0],e[1],e[2]),u=l.clone().addScaledVector(l.clone().sub(i).setY(0).normalize(),-e[3]*.2).setY(e[1]-e[3]*.25),d=(e,t,r)=>{let i=e.clone().lerp(t,.5),a=t.clone().sub(e),o=new A(a.x,0,a.z);return i.addScaledVector(o,-.28*r).add(new A(0,a.length()*.16*r,0)).add(new A((n()-.5)*.5,(n()-.5)*.3,(n()-.5)*.5).multiplyScalar(a.length()*.25))};if(a<5){let e=s.clone().add(new A((n()-.5)*.2,-.2-n()*.3,(n()-.5)*.2)),i=d(e,u,1);cc(t,e,i,u,.18,.05,6,5,[0,0,0,0],r,o),c.push(e.clone().multiplyScalar(.25).addScaledVector(i,.5).addScaledVector(u,.25))}else{let e=c[0];for(let t of c)t.distanceTo(l)<e.distanceTo(l)&&(e=t);cc(t,e,d(e,u,.6),u,.085,.03,4,3,[0,0,0,0],r,o)}});let l=[];return rc.forEach((e,s)=>{let{cards:c,tips:u}=dc(e,s,{clumps:Math.round(3.9*e[3]),clumpR:.82,cardsPer:3,size:1.45,crownC:i,crownR:a,rand:n,flexFn:o,hScale:r,part:1,flatten:.72});l.push(...c);let d=new A(e[0],e[1]-e[3]*.3,e[2]);if(s<2)for(let e of u){let i=d.clone().lerp(e.c,.4+n()*.25).add(new A(n()-.5,(n()-.5)*.4,n()-.5).multiplyScalar(.5));sc(t,i,i.clone().lerp(e.c,.7),.035,.014,3,1,[0,0,0,0],r,o)}}),fc(t,l,i),{geometry:t.build(14,new A(0,6.5,0)),triangles:t.triangles}}function mc(e=31,t=new Fs){let n=Xa(e),r=new A(0,.7,0),i=new A(1.1,.75,1.1),a=e=>Math.min(1,e.y/1.3);for(let e=0;e<3;e++){let n=oc[e+1];sc(t,new A(0,-.1,0),new A(n[0]*.6,n[1]*.7,n[2]*.6),.035,.015,3,1,[5,0,0,0],ac,a)}let o=[];return oc.forEach((e,t)=>o.push(...uc(e,t,{count:Math.round(15*e[3]),size:.85,crownC:r,crownR:i,rand:n,flexFn:a,hScale:ac,part:4,flatten:.8}))),fc(t,o,r),{geometry:t.build(2.2,new A(0,.7,0)),triangles:t.triangles}}var hc=(()=>{let e=Xa(4711),t=new Float32Array(40);for(let n=0;n<5;n++){let r=n>=3,i=r?oc.length:rc.length,a=0;for(let o=0;o<8;o++){if(o>=i)continue;let s=o>=2&&e()<.3&&a<(r?1:3);s&&a++,t[n*8+o]=s?0:.74+.44*e()}}return t})();function gc(e,t,n){let r=e.attributes.position,i=e.attributes.aLobe,a=r.data.array,o=r.data.stride,s=new Float32Array(a);for(let e=0;e<r.count;e++){let c=e*o,l=a[c+i.offset+3];if(l<0)continue;let u=1-t[n+l];s[c+r.offset]+=a[c+i.offset]*u,s[c+r.offset+1]+=a[c+i.offset+1]*u,s[c+r.offset+2]+=a[c+i.offset+2]*u}let c=new Nt(s,o),l=new Wt;for(let t of Object.keys(e.attributes)){let n=e.attributes[t];l.setAttribute(t,new Ft(c,n.itemSize,n.offset))}return l.setIndex(e.index),l.boundingSphere=e.boundingSphere.clone(),l}function _c(){let e=new Fs;pc(21,e);let t=e.triangles;return mc(31,e),{geometry:e.build(14,new A(0,6.5,0)),triangles:e.triangles,treeTriangles:t,shrubTriangles:e.triangles-t}}var vc={YOUNG:1,BANANA:2,FERN:3,BANANA_B:4};function yc(){let e=new Fs,t={},n=0;return e.kind=vc.YOUNG,$s(5,e),t.young=e.triangles-n,n=e.triangles,e.kind=vc.FERN,ec(3,e),t.fern=e.triangles-n,{geometry:e.build(4,new A(0,1.5,0)),triangles:e.triangles,perKind:t}}function bc(){let e=new Fs,t={},n=0;return e.kind=vc.BANANA,tc(9,e),t.banana=e.triangles-n,n=e.triangles,e.kind=vc.BANANA_B,tc(23,e),t.bananaB=e.triangles-n,{geometry:e.build(4,new A(0,1.5,0)),triangles:e.triangles,perKind:t}}function xc(e,t,{radius:n,radial:r=4,part:i,age:a=0,seed:o=0,phase:s=0,s0:c=0,s1:l=.5,W:u=.1}){let d=e.count,f=t.length,p=new A,m=new A,h=new A;for(let d=0;d<f;d++){p.subVectors(t[Math.min(f-1,d+1)],t[Math.max(0,d-1)]).normalize(),m.crossVectors(p,Ls),m.lengthSq()<1e-4&&m.set(1,0,0),m.normalize(),h.crossVectors(m,p).normalize();let g=d/(f-1),_=n(g);for(let n=0;n<=r;n++){let f=n/r*Math.PI*2;zs.copy(m).multiplyScalar(Math.cos(f)).addScaledVector(h,Math.sin(f)),Rs.copy(t[d]).addScaledVector(zs,_),e.vertex(Rs,zs,-1+.5*g,n/r,[1,c+(l-c)*g,0,s],[i,a,u,o])}}for(let t=0;t<f-1;t++)for(let n=0;n<r;n++){let i=d+t*(r+1)+n,a=i+r+1;e.quad(i,i+1,a+1,a)}}function Sc(e,t,n,r,i,a=6){let o=[e.clone()],s=e.clone();for(let e=0;e<a;e++){let c=(e+.5)/a,l=r+(i-r)*c*c;Rs.copy(t).multiplyScalar(Math.cos(l)).addScaledVector(Ls,Math.sin(l)),s.addScaledVector(Rs,n/a),o.push(s.clone())}return o}function Cc(e,t){let{attach:n,dirH:r,pitch:i,bend:a,L:o,W:s,yBack:c=0,env:l,cup:u=0,roll:d=0,wave:f=0,segsY:p=8,segsX:m=2,part:h,age:g=0,seed:_=0,phase:v=0,s0:y=.5,flutter:b=.6}=t,x=new A(-r.z,0,r.x).normalize(),S=new D,C=new A,w=new A,T=new A,E=[],O=[],k=n.clone().addScaledVector(Rs.copy(r).multiplyScalar(Math.cos(i)).addScaledVector(Ls,Math.sin(i)),-c*o).clone();for(let e=0;e<=p;e++){let t=e/p,n=Math.max(0,(t-c)/(1-c)),s=i-a*n**1.4;C.copy(r).multiplyScalar(Math.cos(s)).addScaledVector(Ls,Math.sin(s)).normalize(),S.setFromAxisAngle(C,d*(.4+.6*n)),T.copy(x).applyQuaternion(S),w.crossVectors(T,C).normalize(),O.push({p:k.clone(),T:C.clone(),S:T.clone(),N:w.clone(),y:t}),e<p&&k.addScaledVector(C,o/p)}for(let e=0;e<=p;e++){let t=O[e],n=Math.max(l(t.y),.02),r=[];for(let e=-m;e<=m;e++){let i=e/m,a=Math.abs(i),o=f*Math.sin(t.y*23+_*40+(i>0?1.7:0))*a,c=t.p.clone().addScaledVector(t.S,i*n*s).addScaledVector(t.N,(u*a*a+o)*n*s);r.push({q:c,x:i*n,y:t.y,n:t.N})}E.push(r)}let j=2*m,M=[];for(let t=0;t<=p;t++){let n=[];for(let r=0;r<=j;r++){let i=E[t][r],a=Math.max(0,t-1),o=Math.min(p,t+1),c=Math.max(0,r-1),l=Math.min(j,r+1);zs.subVectors(E[o][r].q,E[a][r].q),Bs.subVectors(E[t][l].q,E[t][c].q),Vs.crossVectors(Bs,zs),Vs.lengthSq()<1e-12&&Vs.copy(i.n),Vs.normalize(),Vs.dot(i.n)<0&&Vs.negate();let u=b*Math.abs(i.x)*Hs(0,.6,i.y);n.push(e.vertex(i.q,Vs,i.y,i.x,[1,y+(1-y)*i.y,u,v],[h,g,s,_]))}M.push(n)}for(let t=0;t<p;t++)for(let n=0;n<j;n++)e.quad(M[t][n],M[t][n+1],M[t+1][n+1],M[t+1][n])}var wc=e=>t=>t<e?.75+t/e*.3:Math.sin(Math.PI*Math.min(1,.5+.5*(t-e)/(1-e)))**.75*1.02+.02,Tc=e=>Math.max(0,Math.sin(Math.PI*Math.min(1,e*1.02)))**.55*1.02+.02;function Ec(e=41,t=new Fs){let n=Xa(e),r=new A;for(let e=0;e<8;e++){let i=e*2.39996+n()*.5;r.set(Math.cos(i),0,Math.sin(i));let a=e===1||e===5?.1:e===6?.95:.4+n()*.4,o=a>.3,s=(o?.65+n()*.45:.35+n()*.2)*(a>.9?.8:1),c=Sc(new A(r.x*.06,.02,r.z*.06),r,s,1.35-n()*.2,(a>.9?0:.55)+n()*.25,6),l=o?.55+n()*.35:.28+n()*.1,u=l*.47,d=n();xc(t,c,{radius:e=>.016-.005*e,part:Is.MONSTERA,age:a,seed:n(),phase:d,s0:0,s1:.45}),Cc(t,{attach:c[c.length-1],dirH:r,pitch:a>.9?-.9:-.15-n()*.35,bend:.35+n()*.35,L:l,W:u,yBack:.16,env:wc(.16),cup:.12,roll:(n()-.5)*.5,wave:.03,segsY:10,segsX:4,part:Is.MONSTERA,age:a,seed:n(),phase:d,s0:.45,flutter:.35})}return{geometry:t.build(2.2,new A(0,.6,0)),triangles:t.triangles}}function Dc(e=43,t=new Fs){let n=Xa(e),r=new A;for(let e=0;e<8;e++){let i=e*2.39996+n()*.4;r.set(Math.cos(i),0,Math.sin(i));let a=e===6?.95:e===7?.1:.2+n()*.5,o=(.8+n()*.6)*(a>.9?.75:1),s=Sc(new A(r.x*.05,.02,r.z*.05),r,o,1.45,(a>.9?.5:1.05)+n()*.25,6),c=(.75+n()*.5)*(a<.15?.6:1),l=c*.42,u=n();xc(t,s,{radius:e=>.03-.014*e,radial:5,part:Is.ELEPHANT,age:a,seed:n(),phase:u,s0:0,s1:.5}),Cc(t,{attach:s[s.length-1],dirH:r,pitch:-.45-n()*.45-(a>.9?.5:0),bend:.3+n()*.25,L:c,W:l,yBack:.3,env:wc(.3),cup:-.1,roll:(n()-.5)*.4,wave:.05,segsY:9,segsX:3,part:Is.ELEPHANT,age:a,seed:n(),phase:u,s0:.5,flutter:.3})}return{geometry:t.build(2.4,new A(0,.8,0)),triangles:t.triangles}}function Oc(e=47,t=new Fs){let n=Xa(e),r=new A;for(let e=0;e<5;e++){let i=e*2.39996+n()*.6,a=.05+n()*.22,o=new A(Math.cos(i)*a,0,Math.sin(i)*a),s=1.1+n()*1,c=new A(Math.cos(i),0,Math.sin(i)).multiplyScalar(.08+n()*.1),l=o.clone().add(new A(0,s,0)).addScaledVector(c,s),u=n(),d=n(),f=[];for(let e=0;e<=4;e++)f.push(o.clone().lerp(l,e/4));xc(t,f,{radius:e=>.028-.012*e,radial:5,part:Is.HELICONIA,age:.3,seed:d,phase:u,s0:0,s1:.55});let p=n()*Math.PI,m=3+Math.floor(n()*2);for(let e=0;e<m;e++){let i=p+((e%2?1:-1)>0?0:Math.PI)+(n()-.5)*.3;r.set(Math.cos(i),0,Math.sin(i));let a=o.clone().lerp(l,.45+e/m*.5),s=e===0&&n()<.5?.95:.2+n()*.4,c=Sc(a,r,.15+n()*.15,1.2,1,3);xc(t,c,{radius:()=>.01,radial:3,part:Is.HELICONIA,age:s,seed:d,phase:u,s0:.5,s1:.6});let f=.8+n()*.5;Cc(t,{attach:c[c.length-1],dirH:r,pitch:s>.9?-.4:.85+n()*.3,bend:s>.9?1.4:.9+n()*.5,L:f,W:f*.15,yBack:0,env:Tc,cup:.25,roll:(n()-.5)*.6,wave:.02,segsY:7,segsX:1,part:Is.HELICONIA,age:s,seed:n(),phase:u,s0:.6,flutter:.6})}if(n()<.6){let e=6+Math.floor(n()*3),i=l.clone(),a=.45+n()*.15,o=p+Math.PI*.5;for(let s=0;s<e;s++){let c=s/(e-1),l=i.clone().add(new A(0,a*c*.9+.04,0)),d=o+(s%2?0:Math.PI);r.set(Math.cos(d),0,Math.sin(d));let f=.22*(1-.45*c);Cc(t,{attach:l,dirH:r,pitch:.5,bend:-.35,L:f,W:f*.3,yBack:0,env:e=>Math.sin(Math.PI*Math.min(1,.15+e*.9))*1.02+.05,cup:1.2,segsY:3,segsX:1,part:Is.BRACT,age:c,seed:n(),phase:u,s0:.62,flutter:.05})}xc(t,[i.clone(),i.clone().add(new A(0,a,0))],{radius:()=>.009,radial:3,part:Is.BRACT,age:0,seed:d,phase:u,s0:.6,s1:.65})}}return{geometry:t.build(2.8,new A(0,1.2,0)),triangles:t.triangles}}function kc(e=53,t=new Fs){let n=Xa(e),r=new A;for(let e=0;e<11;e++){let i=.3+((e%2?1:-1)>0?0:Math.PI)+(n()-.5)*.9;r.set(Math.cos(i),0,Math.sin(i));let a=e===9?.95:.2+n()*.5,o=.55+n()*.45,s=Sc(new A((n()-.5)*.12,.02,(n()-.5)*.12),r,o,1.45,(a>.9?.6:1.15)+n()*.2,4),c=.45+n()*.2,l=n();xc(t,s,{radius:e=>.012-.004*e,radial:3,part:Is.STRELITZIA,age:a,seed:n(),phase:l,s0:0,s1:.5}),Cc(t,{attach:s[s.length-1],dirH:r,pitch:a>.9?.2:1+n()*.3,bend:.25+n()*.2,L:c,W:c*.2,yBack:0,env:Tc,cup:.2,roll:(n()-.5)*.5,wave:.02,segsY:5,segsX:1,part:Is.STRELITZIA,age:a,seed:n(),phase:l,s0:.5,flutter:.2})}let i=2+Math.floor(n()*2);for(let e=0;e<i;e++){let e=n()*Math.PI*2;r.set(Math.cos(e),0,Math.sin(e));let i=new A((n()-.5)*.15,.02,(n()-.5)*.15),a=i.clone().add(new A(r.x*.08,.85+n()*.3,r.z*.08)),o=n();xc(t,[i,i.clone().lerp(a,.5),a],{radius:()=>.01,radial:3,part:Is.STRELITZIA,age:.3,seed:n(),phase:o,s0:0,s1:.55}),Cc(t,{attach:a,dirH:r,pitch:.12,bend:.15,L:.19,W:.022,yBack:.1,env:e=>Math.sin(Math.PI*Math.min(1,.1+e*.95))*1.05+.08,cup:1.5,segsY:4,segsX:1,part:Is.BIRD,age:0,seed:n(),phase:o,s0:.55,flutter:.02});let s=a.clone().addScaledVector(r,.05).add(new A(0,.02,0));for(let r=0;r<3;r++){let i=e+(r-1)*.35;Cc(t,{attach:s,dirH:new A(Math.cos(i),0,Math.sin(i)),pitch:1+(n()-.5)*.3,bend:-.3,L:.11+n()*.03,W:.012,yBack:0,env:e=>Math.sin(Math.PI*Math.min(1,.2+e*.8))+.1,cup:.3,segsY:2,segsX:1,part:Is.BIRD,age:.5,seed:n(),phase:o,s0:.6,flutter:.05})}Cc(t,{attach:s,dirH:r,pitch:.55,bend:.1,L:.09,W:.008,yBack:0,env:()=>.9,cup:.4,segsY:2,segsX:1,part:Is.BIRD,age:1,seed:n(),phase:o,s0:.6,flutter:.05})}return{geometry:t.build(1.8,new A(0,.7,0)),triangles:t.triangles}}var Ac={MONSTERA:11,ELEPHANT:12,HELICONIA:13,STRELITZIA:14};function jc(){let e=new Fs;return e.kind=Ac.MONSTERA,Ec(41,e),{geometry:e.build(2.2,new A(0,.6,0)),triangles:e.triangles}}function Mc(){let e=new Fs,t={},n=0;return e.kind=Ac.ELEPHANT,Dc(43,e),t.elephant=e.triangles-n,n=e.triangles,e.kind=Ac.HELICONIA,Oc(47,e),t.heliconia=e.triangles-n,n=e.triangles,e.kind=Ac.STRELITZIA,kc(53,e),t.strelitzia=e.triangles-n,{geometry:e.build(3,new A(0,1,0)),triangles:e.triangles,perKind:t}}var Nc=Math.ceil(hc.length/4),Pc=new L(`VegParams`,{camPos:[`vec3f`,new A(0,10,0)],pad0:[`f32`,0],gustOffset:[`vec2f`,new E],canopyNear:[`vec2f`,new E(75,45)],lobeTable:[`vec4f[${Nc}]`,Array.from({length:Nc},(e,t)=>[0,1,2,3].map(e=>hc[t*4+e]??0))]},{label:`vegParams`}),Fc=Pc.fields.camPos,Ic=Pc.fields.gustOffset,Lc=.12,Rc=[42,58],q=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},zc=new R({name:`veg`,deps:[z,os],uniforms:Pc,bindings:{vegDetail:{texture:()=>bo()}},code:`
const VEG_UP = vec3f( 0.0, 1.0, 0.0 );
const VEG_LOD_BAND: f32 = ${q(Lc)};

// Dave Hoskins' sine-free hash, [0, 1)
fn vegHash12( p: vec2f ) -> f32 {
	var p3 = fract( vec3f( p.x, p.y, p.x ) * 0.1031 );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.x + p3.y ) * p3.z );
}

fn vegNoise( p: vec2f ) -> f32 {
	let i = floor( p );
	let fr = fract( p );
	let u = fr * fr * ( fr * -2.0 + 3.0 );
	let a = vegHash12( i );
	let b = vegHash12( i + vec2f( 1.0, 0.0 ) );
	let c = vegHash12( i + vec2f( 0.0, 1.0 ) );
	let d = vegHash12( i + vec2f( 1.0, 1.0 ) );
	return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y );
}

// Wind ---------------------------------------------------------------------------------

// 0 (calm) .. 2.5 (storm). Tiny floor so nothing is ever perfectly frozen.
fn vegWindStrength() -> f32 { return max( frame.windSpeed * 0.1, 0.03 ); }
fn vegWindDir3() -> vec3f { return vec3f( frame.windDir.x, 0.0, frame.windDir.y ); }
fn vegWindPerp3() -> vec3f { return vec3f( -frame.windDir.y, 0.0, frame.windDir.x ); }

// Travelling gust field in [0, 1]: noise of (worldXZ - windDir * t * speed), where the
// time-integrated offset comes from vegParams.gustOffset. Two fetches of the detail texture's fbm
// channel (~35 m and ~15 m gust cells); the terrain uses the same function for its wind sheen.
fn vegGustAt( xz: vec2f ) -> f32 {
	let p = xz - vegParams.gustOffset;
	let n = textureSampleLevel( vegDetail, smpLinearRepeat, p / 140.0, 0.0 ).w * 0.62
		+ textureSampleLevel( vegDetail, smpLinearRepeat, p / 61.0 + 0.37, 0.0 ).w * 0.38;
	return smoothstep( 0.46, 0.6, n );
}

// Rotation taking +Y to the unit vector T, applied to v.
fn vegRotUpTo( v: vec3f, T: vec3f ) -> vec3f {
	let k = vec3f( T.z, 0.0, -T.x );
	let c1 = cross( k, v );
	return v + c1 + cross( k, c1 ) / ( T.y + 1.0 );
}

// normal through the instance matrix as three's instance node does it (not normalised: its
// length scales the leaf flutter the same way)
fn vegInstanceNormal( m: mat4x4f, n: vec3f ) -> vec3f {
	let a = m[ 0 ].xyz; let b = m[ 1 ].xyz; let c = m[ 2 ].xyz;
	let t = n / vec3f( dot( a, a ), dot( b, b ), dot( c, c ) );
	return mat3x3f( a, b, c ) * t;
}

// Crown variants: the per-instance variant picks a row of the lobe table (per-lobe size, 0 =
// dropped). Shared by the near canopy geometry and the impostor bake, so near and far crowns match.
fn vegVariantOf( seed: f32, isShrub: bool ) -> f32 {
	return floor( fract( seed * 7.77 ) * select( ${q(3)}, ${q(2)}, isShrub ) );
}
fn vegLobeScale( seed: f32, li: f32, isShrub: bool ) -> f32 {
	let row = vegVariantOf( seed, isShrub ) + select( 0.0, ${q(3)}, isShrub );
	let i = i32( row * 8.0 + max( li, 0.0 ) );
	return vegParams.lobeTable[ i / 4 ][ i % 4 ];
}

// LOD window factor for an instance at base (0 = hidden, 1 = full size); lodRange = (visible from,
// fade-out start, fade-out end)
fn vegLodScale( base: vec3f, lodRange: vec3f ) -> f32 {
	let d = length( vegParams.camPos - base );
	let inside = d >= lodRange.x * ( 1.0 - VEG_LOD_BAND / 2.0 );
	let hardEnd = lodRange.z - lodRange.y < 0.05;
	let endK = select( 1.0 - smoothstep( lodRange.y, lodRange.z, d ), select( 0.0, 1.0, d < lodRange.y * ( 1.0 + VEG_LOD_BAND / 2.0 ) ), hardEnd );
	return select( 0.0, endK, inside );
}

// Fragment-stage keep test of the LOD cross-fade for an instance at base (true: keep the pixel)
fn vegLodDither( base: vec3f, lodRange: vec3f, pixel: vec2f ) -> bool {
	let d = length( vegParams.camPos - base );
	let t = bayer4( pixel );
	let x = lodRange.x; let y = lodRange.y;
	let fadeIn = select( 1.0, smoothstep( x * ( 1.0 - VEG_LOD_BAND / 2.0 ), x * ( 1.0 + VEG_LOD_BAND / 2.0 ), d ), x > 0.0 );
	let fadeOut = select( 0.0, smoothstep( y * ( 1.0 - VEG_LOD_BAND / 2.0 ), y * ( 1.0 + VEG_LOD_BAND / 2.0 ), d ), lodRange.z - y < 0.05 );
	return t < fadeIn && t >= fadeOut;
}

// Leaf translucency: sunlight transmitted through the leaf when it is lit from behind (relative
// to the viewer). The lighting model multiplies it by the shadowed light colour, so leaves in
// shadow (behind a hill at sunset, inside the canopy) don't glow.
fn vegTranslucency( albedo: vec3f, N: vec3f, strength: f32, P: vec3f ) -> vec3f {
	let V = normalize( frame.cameraPos - P );
	let L = frame.sunDir;
	let back = sat( dot( -N, L ) );
	let forward = pow( sat( dot( -V, L ) ), 3.0 ) * 0.7 + 0.3;
	let tint = albedo * vec3f( 1.25, 1.45, 0.55 ) + vec3f( 0.012, 0.018, 0.0 );
	return tint * ( back * forward * strength ) * ( 1.0 - frame.night );
}

struct VegPlant {
	pos: vec3f,
	normal: vec3f,
	trunkY: f32,  // height along the stem (m)
	trunkT: vec3f, // stem axis (world)
};

// Plant deformation shared by palms / young palms / bananas / ferns.
//
// Geometry conventions (local space, applied after the instance matrix = T * Ry * S):
//   aMat.x == 0  -> stem vertex: aVeg.x = height fraction u, x/z = radial offset.
//   aMat.x >= 1  -> crown vertex: position is relative to the crown centre.
//   aVeg = (u, s along frond, flutter weight, phase)
// Per instance:
//   iPos = (base.xyz, scale), iDat = (lean azimuth, lean (fraction of H), stem height H (m), seed)
// P / N0: the vertex through the instance matrix (three's positionLocal / normalLocal after the
// instance node).
fn vegPlantDeform( P: vec3f, N0: vec3f, iPos: vec4f, iDat: vec4f, veg: vec4f, aMat: vec4f, aLobe: vec4f, lodRange: vec3f ) -> VegPlant {
	let part = aMat.x;
	let base = iPos.xyz;
	let sc = iPos.w;
	let leanDir = vec3f( cos( iDat.x ), 0.0, sin( iDat.x ) );
	let lean = iDat.y;
	let H = iDat.z;
	// merged geometries (understory): the instance's plant kind is the integer part of the seed;
	// vertices of the other plants collapse onto the base
	let seed = fract( iDat.w );
	let kindI = floor( iDat.w );
	let kindV = -aLobe.w - 1.0;
	let keepKind = kindV < 0.5 || abs( kindV - kindI ) < 0.5;

	let u = veg.x;
	let s = veg.y;
	let flut = veg.z;
	let ph = veg.w;

	let t = frame.time;
	let w = vegWindStrength();
	let g = vegGustAt( base.xz );
	let ph0 = seed * 6.2832;
	let windDir3 = vegWindDir3();
	let windPerp3 = vegWindPerp3();

	// stem sway: horizontal offset of the top as a fraction of H
	let sway = w * w * 0.014 * ( g * 0.9 + 0.3 ) + sin( t * 0.83 + ph0 ) * w * 0.0065 * ( g + 0.45 );
	let swayP = sin( t * 0.61 + ph0 * 1.7 ) * w * 0.0028;
	let windOff = windDir3 * sway + windPerp3 * swayP;

	// stem curve: mix of a straight tilt and a "banana" curve (vertical at the top)
	let c = fract( seed * 7.31 );
	let fc = mix( u, u * ( ( 1.0 - u ) + 1.0 ), c );
	let df = mix( 1.0, ( 1.0 - u ) * 2.0, c );
	let off = leanDir * ( lean * fc ) + windOff * ( u * u );
	let T = normalize( VEG_UP + leanDir * ( lean * df ) + windOff * ( u * 2.0 ) );

	let radial = vec3f( P.x - base.x, 0.0, P.z - base.z );
	let axisPt = base + vec3f( 0.0, u * H, 0.0 ) + off * H;
	let stemPos = axisPt + vegRotUpTo( radial, T );
	let stemN = vegRotUpTo( N0, T );

	// crown: follows the stem top, tilted half as much as the stem tip
	let Ttop = normalize( VEG_UP + leanDir * ( lean * ( 1.0 - c ) ) + windOff * 2.0 );
	let Ttilt = normalize( VEG_UP + Ttop );
	let C = base + vec3f( 0.0, H, 0.0 ) + ( leanDir * lean + windOff ) * H;
	let o1 = vegRotUpTo( P - base, Ttilt );
	let N1 = vegRotUpTo( N0, Ttilt );

	// frond / leaf motion: gust bending + slow bounce + leaflet flutter, applied as a
	// length preserving rotation about the crown centre so fronds stream downwind in storms.
	let s2 = s * s;
	let bend = s2 * sc * 4.5 * ( w * w * 0.16 * ( g * 0.8 + 0.35 )
		+ sin( t * ( ph * 0.5 + 1.3 ) + ph * 23.0 + ph0 ) * w * 0.075 * ( g + 0.3 ) );
	let bounce = sin( t * ( ph + 2.1 ) + ph * 41.0 ) * s2 * w * sc * 0.1;
	let flutter = flut * sc * ( sin( t * ( ph * 5.0 + 11.0 ) + ph * 60.0 + s * 9.0 ) * ( w * 0.045 + 0.008 )
		+ sin( t * 23.0 + ph * 13.0 + s * 17.0 ) * ( max( w - 1.0, 0.0 ) * 0.05 ) );
	let disp = windDir3 * bend + VEG_UP * ( bounce - bend * 0.3 ) + N1 * flutter;
	let L = length( o1 );
	let o2 = normalize( o1 + disp + vec3f( 0.0, 1e-5, 0.0 ) ) * L;
	let crownPos = C + o2;

	// the dead (hanging) frond is only kept on some palms
	let hideDead = part > 0.5 && part < 1.5 && aMat.y > 0.95 && fract( seed * 13.7 ) > 0.4;
	let crownPos2 = select( crownPos, C, hideDead );

	let isStem = part < 0.5;
	let pos = select( crownPos2, stemPos, isStem );

	var out: VegPlant;
	out.normal = select( N1, stemN, isStem );
	out.trunkY = u * H;
	out.trunkT = T;

	// LOD window / distance fade: shrink around the base (ferns fade out earlier)
	let dCam = length( vegParams.camPos - base );
	let fernFade = select( 1.0, 1.0 - smoothstep( ${q(Rc[0])}, ${q(Rc[1])}, dCam ), kindI > 2.5 && kindI < 3.5 );
	let k = vegLodScale( base, lodRange ) * fernFade * select( 0.0, 1.0, keepKind );
	out.pos = base + ( pos - base ) * k;
	return out;
}
`}),Bc=e=>e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4,J=e=>{let t=Bc((e>>16&255)/255),n=Bc((e>>8&255)/255),r=Bc((e&255)/255);return`vec3f( ${t.toFixed(6)}, ${n.toFixed(6)}, ${r.toFixed(6)} )`},Vc=[11,17],Hc=[36,45],Uc=[84,108],Wc=[248,297],Gc=48,Kc=200,qc=900,Jc=2600,Yc=768,Xc=384,Zc=7,Qc=[0,0,1,1,2,2,2],$c=[2,2,3],el=12,tl=28,nl={GRASS:0,OAT_STALK:1,OAT_HEAD:2,CREEPER:3,FLOWER:4};function rl(e,t,n,r=10){let i=[];for(let a=0;a<t;a++){let t=null,o=-1;for(let s=0;s<(a===0?1:r);s++){let r=e()*n,a=e()*n,s=1/0;for(let e of i){let t=Math.abs(e[0]-r),i=Math.abs(e[1]-a);t=Math.min(t,n-t),i=Math.min(i,n-i),s=Math.min(s,t*t+i*i)}s>o&&(o=s,t=[r,a])}i.push(t)}return i}var il=class{constructor(){this.pos=[],this.nor=[],this.side=[],this.slot=[],this.bladeData=[],this.idx=[]}get count(){return this.pos.length/3}v(e,t,n,r,i){return this.pos.push(e[0],e[1],e[2]),this.nor.push(t[0],t[1],t[2]),this.side.push(n[0],n[1],n[2],n[3]??0),this.slot.push(r[0],r[1],r[2],r[3]),this.bladeData.push(i[0],i[1],i[2],i[3]),this.count-1}blade(e,t,n,r,i,a,o,s,c,l,u=[0,0],d=0){let f=-a,p=i,m=[];for(let h=0;h<n.length;h++){let g=n[h],_=(Math.sin(o)*g+c*g*g)*s,v=(Math.cos(o)*g-c*.35*g*g)*s,y=[u[0]+i*_,v,u[1]+a*_],b=Math.sin(o)+2*c*g,x=Math.cos(o)-.7*c*g,S=Math.hypot(b,x),C=i*b/S,w=x/S,T=a*b/S,E=-p*w,D=p*C-f*T,O=f*w,k=Math.hypot(E,D,O)||1,A=[E/k,D/k,O/k],j=r*(1-g**1.6)*(.75+.25*(1-g)),M=[g,t,l,d];h===n.length-1?m.push([this.v(y,A,[0,0,0,0],e,M)]):m.push([this.v(y,A,[-f*j,0,-p*j,-1],e,M),this.v(y,A,[f*j,0,p*j,1],e,M)])}for(let e=0;e<m.length-1;e++){let t=m[e],n=m[e+1];n.length===1?this.idx.push(t[0],t[1],n[0]):this.idx.push(t[0],t[1],n[1],t[0],n[1],n[0])}}fan(e,t,n,r,i,a,o,s,c,l,u,d=.1){let f=this.v([n[0],u,n[1]],[0,1,0],[0,0,0,0],e,[d,t,l,1]),p=[];for(let f=0;f<s;f++){let m=f/s*Math.PI*2,h=r*c(m),g=Math.cos(m)*h,_=Math.sin(m)*h*.85,v=n[0]+g*i-_*a,y=n[1]+g*a+_*i,b=g/r,x=u+(b+.6)*r*o;p.push(this.v([v,x,y],[0,1,0],[0,0,0,0],e,[d+.05*Math.max(0,b),t,l,0]))}for(let e=0;e<s;e++)this.idx.push(f,p[(e+1)%s],p[e])}ribbon(e,t,n,r,i){let a=[];for(let o=0;o<n.length;o++){let s=n[o],c=n[Math.min(n.length-1,o+1)],l=n[Math.max(0,o-1)],u=c[0]-l[0],d=c[2]-l[2],f=Math.hypot(u,d)||1;u/=f,d/=f;let p=-d*r,m=u*r;a.push([this.v([s[0]-p,s[1],s[2]-m],[0,1,0],[0,0,0,0],e,[.05,t,i,0]),this.v([s[0]+p,s[1],s[2]+m],[0,1,0],[0,0,0,0],e,[.05,t,i,0])])}for(let e=0;e<a.length-1;e++){let t=a[e],n=a[e+1];this.idx.push(t[0],n[1],t[1],t[0],n[0],n[1])}}build(){let e=new Gt;return e.setAttribute(`position`,new jt(this.pos,3)),e.setAttribute(`normal`,new jt(this.nor,3)),e.setAttribute(`aSide`,new jt(this.side,4)),e.setAttribute(`aSlot`,new jt(this.slot,4)),e.setAttribute(`aBlade`,new jt(this.bladeData,4)),e.setIndex(this.count>65535?new At(this.idx,1):new kt(this.idx,1)),e.boundingSphere=new Ae(new A,1e7),e.boundingBox=new Ee(new A(-1e7,-1e7,-1e7),new A(1e7,1e7,1e7)),e}get triangles(){return this.idx.length/3}};function al(e){let t=Xa(e);return rl(Xa(e+1),Yc,8).map(([e,n])=>{t();let r=t()*Math.PI*2,i=[];for(let e=0;e<Zc;e++){let n=r+e*2.39996+(t()-.5)*.5,a=e===0?.1+.3*t():e===1?.35+.4*t():t();i.push({dx:Math.cos(n),dz:Math.sin(n),lean:.06+.55*a*(.6+.8*t()),h:(.7+.5*t())*(1.06-.22*a),curve:.12+.5*a*(.5+t()),rnd:t(),base:[Math.cos(n)*.09*t(),Math.sin(n)*.09*t()],tier:Qc[e]})}return{x:e,z:n,blades:i}}).map((e,t)=>({...e,extra:t<Xc?0:1}))}function ol(e,t,n=7,r=!1){let i=new il,a=[[0,.3,.62,1],[0,.55,1],[0,1],[0,1]][e],o=Math.max(0,2-e);for(let n of t){if(e===3&&n.extra)continue;let t=[n.x,n.z,n.extra,0];for(let e of n.blades)e.tier>o||i.blade(t,nl.GRASS,a,.012,e.dx,e.dz,e.lean,e.h,e.curve,e.rnd,e.base,e.tier)}if(e>=2)return i;let s=rl(Xa(n+2),el,8),c=e===0;if(s.forEach(([e,t],r)=>{let a=Xa(n*7919+r*131+17),o=[e,t,a(),1],s=c?3:1;for(let e=0;e<3;e++){let t=a()*Math.PI*2,n=Math.cos(t),r=Math.sin(t),l=.06+.14*a(),u=.8+.3*a(),d=a(),f=e===0?0:(a()-.5)*.22,p=e===0?0:(a()-.5)*.22,m=[a(),a(),a(),a(),a(),a(),a(),a()];if(e>=s)continue;let h=e===0?0:2;i.blade(o,nl.OAT_STALK,c?[0,.3,.6,.85,1]:[0,.6,1],c?.0075:.014,n,r,l,u,.2,d,[f,p],h);let g=c?8:3;for(let e=0;e<g;e++){let a=.7+.3*(e/Math.max(1,g-1)),s=(Math.sin(l)*a+.2*a*a)*u,_=(Math.cos(l)*a-.07*a*a)*u,v=t+(e%2?1:-1)*(.45+.6*m[e]),y=Math.cos(v),b=Math.sin(v),x=f+n*s+y*.02,S=p+r*s+b*.02,C=c?.085:.13,w=c?.022:.04,T=[0,1,0],E=[a,nl.OAT_HEAD,d,h],D=i.v([x,_+.01,S],T,[0,0,0,0],o,E),O=i.v([x+y*C*.45-b*w,_-C*.4,S+b*C*.45+y*w],T,[0,0,0,0],o,E),k=i.v([x+y*C*.45+b*w,_-C*.4,S+b*C*.45-y*w],T,[0,0,0,0],o,E),A=i.v([x+y*C*.8,_-C*.95,S+b*C*.8],T,[0,0,0,0],o,E);i.idx.push(D,O,A,D,A,k)}}if(c)for(let e=0;e<4;e++){let t=e/4*Math.PI*2+a();i.blade(o,nl.GRASS,[0,.45,.8,1],.01,Math.cos(t),Math.sin(t),.55+.4*a(),.45,.35,a(),[0,0],2)}}),!c||r)return i;let l=e=>{let t=Math.min(Math.abs(e),Math.abs(e-Math.PI*2));return 1-.38*Math.exp(-(t*t)/.12)-.15*Math.sin(e*.5)**8},u=e=>.82+.18*Math.cos(e*5);return rl(Xa(n+3),tl,8).forEach(([e,t],r)=>{let a=Xa(n*3571+r*197+5),o=[e,t,a(),2],s=a()*Math.PI*2,c=[],d=-Math.cos(s)*1.1,f=-Math.sin(s)*1.1;for(let e=0;e<12;e++)c.push([d,.01,f]),s+=(a()-.5)*.5,d+=Math.cos(s)*.19,f+=Math.sin(s)*.19;i.ribbon(o,nl.CREEPER,c,.011,a());for(let e=1;e<c.length;e++){let t=e%2?1:-1,n=c[e-1],r=c[e],s=r[0]-n[0],u=r[2]-n[2],d=Math.hypot(s,u)||1;s/=d,u/=d;let f=Math.atan2(u,s)+t*(.7+.5*a()),p=Math.cos(f),m=Math.sin(f),h=(.07+.04*a())*(.6+.4*Math.sin(Math.PI*e/12));i.fan(o,nl.CREEPER,[r[0]+p*h*.9,r[2]+m*h*.9],h,p,m,.3+.3*a(),7,l,a(),.015)}let p=c[3+Math.floor(a()*4)];i.fan(o,nl.FLOWER,[p[0]+.03,p[2]+.03],.036,1,0,1.4,10,u,a(),.07,.2)}),i}var sl=class{constructor({terrain:e,mask:t,grassland:n=!1}){this.terrain=e,this.grassland=n;let r=e.res,i=t.data,a=t.res;this.heightTex=new I({label:`grassHeights`,width:r,height:r,format:`r32float`,data:e.heights}),Object.defineProperty(this.heightTex,"needsUpdate",{set:t=>{t&&this.heightTex.upload(e.heights)}}),this.maskTex=new I({label:`grassMask`,width:a,height:a,format:`rgba8unorm`,data:i,sampler:`linearClamp`});let o=Math.ceil(e.size/8);this.cellsPerSide=o,this.cellFlags=new Uint8Array(o*o),this.cellMinY=new Float32Array(o*o),this.cellMaxY=new Float32Array(o*o);let s=8/(e.size/a),c=8/e.texel;for(let t=0;t<o;t++)for(let n=0;n<o;n++){let l=0,u=1/0,d=-1/0,f=Math.max(0,Math.floor(n*s)-1),p=Math.min(a-1,Math.ceil((n+1)*s)+1),m=Math.max(0,Math.floor(t*s)-1),h=Math.min(a-1,Math.ceil((t+1)*s)+1);for(let e=m;e<=h&&!l;e++)for(let t=f;t<=p;t++){let n=(e*a+t)*4;if(i[n]>8||i[n+1]>8||i[n+2]>8||i[n+3]>8){l=1;break}}let g=t*o+n;if(this.cellFlags[g]=l,!l)continue;let _=Math.max(0,Math.floor(n*c)-1),v=Math.min(r-1,Math.ceil((n+1)*c)+1),y=Math.max(0,Math.floor(t*c)-1),b=Math.min(r-1,Math.ceil((t+1)*c)+1);for(let t=y;t<=b;t++)for(let n=_;n<=v;n++){let i=e.heights[t*r+n];i<u&&(u=i),i>d&&(d=i)}this.cellMinY[g]=u,this.cellMaxY[g]=d}this.material=this._createMaterial();let l=al(7),u=[0,1,2,3].map(e=>ol(e,l,7,n));this.patchTris=u.map(e=>e.triangles),this.levels=[this._createMesh(u[0].build(),Gc,`veg-grass-near`),this._createMesh(u[1].build(),Kc,`veg-grass-mid`),this._createMesh(u[2].build(),qc,`veg-grass-far`),this._createMesh(u[3].build(),Jc,`veg-grass-vfar`)],this.meshes=this.levels.map(e=>e.mesh),this._frustum=new Le,this._mat=new P,this._box=new Ee,this._last=new Float64Array(8).fill(NaN)}get near(){return this.levels[0]}get far(){return this.levels[2]}get vfar(){return this.levels[3]}get nearTris(){return this.patchTris[0]}get farTris(){return this.patchTris[2]}_createMesh(e,t,n){let r=new Float32Array(t*4),i=new Mt(r,4);i.setUsage(Ct),e.setAttribute(`iCell`,i),e.instanceCount=0;let a=new Kt(e,this.material);return a.name=n,a.frustumCulled=!1,a.castShadow=!1,a.receiveShadow=!0,a.matrixAutoUpdate=!1,{mesh:a,geometry:e,attr:i,arr:r,max:t,count:0}}_createMaterial(){return pl(this)}update(e){let t=e.matrixWorld.elements,n=this._last,r=e.projectionMatrix.elements;if(Math.abs(t[12]-n[0])<.05&&Math.abs(t[13]-n[1])<.05&&Math.abs(t[14]-n[2])<.05&&Math.abs(t[8]-n[3])<.001&&Math.abs(t[9]-n[4])<.001&&Math.abs(t[10]-n[5])<.001&&r[0]===n[6]&&r[5]===n[7])return!1;n[0]=t[12],n[1]=t[13],n[2]=t[14],n[3]=t[8],n[4]=t[9],n[5]=t[10],n[6]=r[0],n[7]=r[5],this._mat.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._mat,e.coordinateSystem,e.reversedDepth);let i=t[12];t[13];let a=t[14],o=this.terrain,s=this.cellsPerSide,c=Math.max(0,Math.floor((i-300-o.origin)/8)),l=Math.min(s-1,Math.floor((i+300-o.origin)/8)),u=Math.max(0,Math.floor((a-300-o.origin)/8)),d=Math.min(s-1,Math.floor((a+300-o.origin)/8)),[f,p,m,h]=this.levels,g=0,_=0,v=0,y=0;for(let e=u;e<=d;e++)for(let t=c;t<=l;t++){let n=e*s+t;if(!this.cellFlags[n])continue;let r=o.origin+t*8,c=o.origin+e*8,l=Math.max(r-i,0,i-r-8),u=Math.max(c-a,0,a-c-8),d=Math.hypot(l,u);d>300||(this._box.min.set(r,this.cellMinY[n]-.5,c),this._box.max.set(r+8,this.cellMaxY[n]+1.8,c+8),this._frustum.intersectsBox(this._box)&&(d<18&&g<f.max?(f.arr[g*4]=r,f.arr[g*4+1]=c,g++):d<46&&_<p.max?(p.arr[_*4]=r,p.arr[_*4+1]=c,_++):d>=46&&d<110&&v<m.max?(m.arr[v*4]=r,m.arr[v*4+1]=c,v++):d>=110&&y<h.max&&(h.arr[y*4]=r,h.arr[y*4+1]=c,y++)))}for(let[e,t]of[[f,g],[p,_],[m,v],[h,y]])e.count=t,e.geometry.instanceCount=t,e.attr.clearUpdateRanges(),e.attr.addUpdateRange(0,Math.max(1,t)*4),e.attr.needsUpdate=!0;return!0}get triangles(){return this.levels.reduce((e,t,n)=>e+t.count*this.patchTris[n],0)}dispose(){this.heightTex.destroy(),this.maskTex.destroy(),this.material.dispose();for(let e of this.meshes)e.geometry.dispose()}},cl=e=>e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4,ll=(e,t,n)=>`vec3f( ${cl(e).toFixed(6)}, ${cl(t).toFixed(6)}, ${cl(n).toFixed(6)} )`,ul={lush:ll(.13,.2,.05),green:ll(.25,.32,.1),olive:ll(.36,.37,.14),yellow:ll(.5,.46,.2),straw:ll(.62,.54,.33),soil:ll(.17,.13,.08)},dl=(e,t)=>{let n=Math.cos(t),r=Math.sin(t);return`vec2f( ${e}.x * ${q(n)} - ${e}.y * ${q(r)}, ${e}.x * ${q(r)} + ${e}.y * ${q(n)} )`},fl=new R({name:`vegGrass`,deps:[zc],code:`
const VEG_MEADOW_LUSH = ${ul.lush};
const VEG_MEADOW_GREEN = ${ul.green};
const VEG_MEADOW_OLIVE = ${ul.olive};
const VEG_MEADOW_YELLOW = ${ul.yellow};
const VEG_MEADOW_STRAW = ${ul.straw};
const VEG_MEADOW_SOIL = ${ul.soil};

struct VegMeadow { tone: vec3f, dry: f32, lush: f32 };

//   mA, mB: detail fbm channel at the 173 m / 47 m scales (~0.5 +- 0.1): the samples at
//   rot2( xz, 0.7 ) / 173 and rot2( xz, 2.1 ) / 47 that the terrain takes anyway; slope: 1 - N.y;
//   south: N.z (the sun side). Mostly fresh green grass with olive, sun-bleached yellow and a few
// straw-dry patches (more on exposed slopes), darker lush grass in the damp patches.
// (TerrainShading's optional finer 'detail' input is not used by the grass.)
fn vegMeadowTone( mA: f32, mB: f32, slope: f32, south: f32 ) -> VegMeadow {
	let m = mA * 0.55 + mB * 0.45 + slope * 0.25 + south * 0.04;
	let olive = smoothstep( 0.52, 0.6, m );
	let yellow = smoothstep( 0.6, 0.67, m );
	let straw = smoothstep( 0.66, 0.73, m + ( mB - 0.5 ) * 0.2 );
	let lush = smoothstep( 0.46, 0.37, mB * 0.7 + mA * 0.3 + slope * 0.2 );
	var c = mix( VEG_MEADOW_GREEN, VEG_MEADOW_OLIVE, olive );
	c = mix( c, VEG_MEADOW_YELLOW, yellow * 0.8 );
	c = mix( c, VEG_MEADOW_STRAW, straw * 0.55 );
	c = mix( c, VEG_MEADOW_LUSH, lush * 0.75 );
	return VegMeadow( c, olive * 0.4 + yellow * 0.6, lush );
}

// per-tier visibility at camera distance d (1 = full width, 0 = gone); tier 0 thins out per blade
fn vegGrassTierFade( tier: f32, d: f32, cut: f32 ) -> f32 {
	let f2 = 1.0 - smoothstep( ${q(Vc[0])}, ${q(Vc[1])}, d );
	let f1 = 1.0 - smoothstep( ${q(Hc[0])}, ${q(Hc[1])}, d );
	let f0 = 1.0 - smoothstep( cut - 5.0, cut, d );
	return select( select( f0, f1, tier > 0.5 ), f2, tier > 1.5 );
}
`});function pl(e){let t=e.terrain,n=t.res,r=e.grassland,i=[J(14860842),J(15657436),J(9328045),J(14447654)];return new Ir({name:`veg-grass`,side:`double`,roughness:.8,metalness:0,modules:[zc,fl],textures:{grassHeights:e.heightTex,grassMask:e.maskTex},attributes:{iCell:`vec4f`,aSlot:`vec4f`,aBlade:`vec4f`,aSide:`vec4f`},varyings:{vVegGrass:`vec4f`,vVegGrassTone:`vec4f`,vVegGrass2:`vec4f`,vVegGust:`f32`,vVegFlower:`f32`},vertex:`
	let cell = v.iCell.xy;
	let slot = v.aSlot;
	let blade = v.aBlade;
	let side4 = v.aSide;
	let side = side4.xyz;
	let P = v.position;
	let N = v.normal;

	let xz = cell + slot.xy;
	let hf = blade.x;
	let kind = blade.y;
	let bRnd = blade.z;

	let m = textureSampleLevel( grassMask, smpLinearClamp, ( xz - ${q(t.origin)} ) / ${q(t.size)}, 0.0 );
	let isGrass = kind < 0.5;
	let isOat = kind > 0.5 && kind < 2.5;
	let lush = m.g;
	let dune = ${r?`0.0`:`m.r`};
	// the backshore grass is dense in its clumps (the mask carries the clumping and the edge)
	let duneF = dune / ( dune + lush + 1e-3 );
	let grassP = mix( lush, min( dune * 1.1, 1.0 ), duneF );
	let density = select( select( ${r?`0.0`:`m.a`}, m.b, isOat ), grassP, isGrass );
	let r = vegHash12( xz * 1.37 + 0.51 );
	let r2 = vegHash12( xz * 2.11 + 7.3 );
	let flowerOk = select( 1.0, select( 0.0, 1.0, r2 < 0.35 ), kind > 3.5 );
	let present = select( 0.0, 1.0, r < density ) * flowerOk;

	// meadow tone at the clump: the same function and inputs as the terrain's meadow shading
	let mA = textureSampleLevel( vegDetail, smpLinearRepeat, ${dl(`xz`,.7)} / 173.0, 0.0 ).w;
	let mB = textureSampleLevel( vegDetail, smpLinearRepeat, ${dl(`xz`,2.1)} / 47.0, 0.0 ).w;
	let mt = vegMeadowTone( mA, mB, 0.0, 0.0 );
	// size: tall meadow grass, knee to waist high: swathes of taller grass in the lush patches,
	// lower where it is dry; wiry dune tufts
	let patchN = vegNoise( xz * ${q(1/6.5)} + 17.3 ) * 0.7 + vegNoise( xz * ${q(1/2.3)} ) * 0.3;
	let lushH = mix( 0.7, 1.3, patchN ) * ( mt.lush * 0.25 + 1.0 ) * ( 1.0 - mt.dry * 0.25 );
	// dune tufts vary a lot in size (young shoots to big old clumps)
	let grassH = mix( lushH, 0.62, duneF ) * mix( r2 * 0.35 + 0.83, r2 * r2 * 0.9 + 0.5, duneF ) * ( density * 0.35 + 0.65 )${r?` * mix( 0.35, 1.3, m.r )`:``};
	let oatH = ( r2 * 0.55 + 1.0 )${r?` * mix( 0.6, 1.15, m.r )`:``};
	let vineS = r2 * 0.4 + 0.8;
	let hScale = select( select( vineS, oatH, isOat ), grassH, isGrass );
	// meadow clumps fan out wider than the wiry dune tufts
	let spread = select( 1.0, mix( 1.35, 1.3, duneF ), isGrass );

	// distance LOD: tiers fade out (narrow to nothing), the remaining blades widen so the
	// coverage (blade density x width) stays constant; tier 0 thins out per blade near R_VFAR
	let dist = length( xz - vegParams.camPos.xz );
	// tier: grass blades and oats carry their own (aBlade.w), otherwise the slot's
	let tier = max( select( 0.0, blade.w, kind < 2.5 ), slot.w );
	let cutK = bRnd * 7.13 + r2;
	let cut = mix( ${q(Wc[0]+5)}, ${q(Wc[1])}, cutK - floor( cutK ) );
	// clumps the vfar patch does not carry (aSlot.z = 1, meadow clumps only) drop out at a random
	// per-clump distance in FADE_X; the kept ones widen by the expected share that is gone
	let extra = isGrass && slot.w < 0.5 && slot.z > 0.5;
	let cxk = fract( r * 5.31 + r2 * 2.77 );
	let cutX = mix( ${q(Uc[0]+5)}, ${q(Uc[1])}, cxk );
	let fX = 1.0 - smoothstep( cutX - 5.0, cutX, dist );
	let own = vegGrassTierFade( tier, dist, cut ) * select( 1.0, fX, extra );
	let f2 = 1.0 - smoothstep( ${q(Vc[0])}, ${q(Vc[1])}, dist );
	let f1 = 1.0 - smoothstep( ${q(Hc[0])}, ${q(Hc[1])}, dist );
	let fXm = 1.0 - smoothstep( ${q(Uc[0])}, ${q(Uc[1])}, dist );
	let compX = ${q(Yc)} / ( ${q(Xc)} + fXm * ${q(384)} );
	let comp = ${q($c[0]+$c[1]+$c[2])} / ( f2 * ${q($c[2])} + f1 * ${q($c[1])} + ${q($c[0])} ) * compX;
	// oats and creeper simply shrink out
	let widthK = select( 1.0, comp * own, isGrass );
	let sizeK = select( own, 1.0, isGrass );
	let scale = hScale * present * sizeK;

	// per-slot random yaw
	let yaw = vegHash12( xz * 0.73 + 3.3 ) * 6.2832;
	let cy = cos( yaw ); let sy = sin( yaw );

	// terrain height (float texels loaded and bilinearly filtered manually)
	let hfp = ( xz - ${q(t.origin)} ) / ${q(t.texel)} - 0.5;
	let hfi = floor( hfp );
	let hfr = hfp - hfi;
	let ij = vec2i( clamp( hfi, vec2f( 0.0 ), vec2f( ${q(n-2)} ) ) );
	let ha = textureLoad( grassHeights, ij, 0 ).x;
	let hb = textureLoad( grassHeights, ij + vec2i( 1, 0 ), 0 ).x;
	let hc = textureLoad( grassHeights, ij + vec2i( 0, 1 ), 0 ).x;
	let hd = textureLoad( grassHeights, ij + vec2i( 1, 1 ), 0 ).x;
	let ground = mix( mix( ha, hb, hfr.x ), mix( hc, hd, hfr.x ), hfr.y );
	let base = vec3f( xz.x, ground - 0.03, xz.y );
	let pl = vec3f( P.x * spread, P.y, P.z * spread );
	let o0 = vec3f( pl.x * cy - pl.z * sy, pl.y, pl.x * sy + pl.z * cy ) * scale;

	// wind: travelling gusts bend blades downwind (length preserving), plus flutter
	let w = vegWindStrength();
	let g = vegGustAt( xz );
	let tm = frame.time;
	let ph = r * 6.2832;
	let bendAmt = w * ( g * 0.55 + 0.22 ) + sin( tm * 1.9 + ph + xz.x * 0.2 ) * w * 0.1;
	let flut = sin( tm * 7.3 + ph * 3.0 + bRnd * 20.0 ) * ( w * 0.06 + 0.015 );
	let stiff = select( select( 0.08, 0.8, isOat ), 1.0, isGrass );
	let hf2 = hf * hf;
	let disp = ( vegWindDir3() * ( bendAmt * hf2 * stiff ) + vegWindPerp3() * ( flut * hf2 * stiff ) ) * ( length( o0 ) + 1e-4 );
	let oL = length( o0 );
	let ob = normalize( o0 + disp + vec3f( 0.0, 1e-5, 0.0 ) ) * oL;

	let wScale = select( 1.0, mix( 1.5, 1.55, duneF ), isGrass );
	let wide = wScale * widthK * min( scale * 2.0, max( scale, 0.5 ) );
	let sideR = vec3f( side.x * cy - side.z * sy, side.y, side.x * sy + side.z * cy );
	let pos = base + ob + sideR * wide;

	// lighting normal: blade normal bent towards up (soft, grass-like shading), rounded across
	// the blade (a folded leaf is lit differently on its two halves)
	let across = side4.w;
	let sideDir = normalize( sideR + vec3f( 1e-5, 0.0, 0.0 ) );
	let nR = vec3f( N.x * cy - N.z * sy, N.y, N.x * sy + N.z * cy );

	// a share of the blades is dead / straw coloured (more in the dry patches)
	let dk = bRnd * 13.7 + r * 3.1;
	let dryBlade = select( 0.0, 1.0, dk - floor( dk ) < mt.dry * 0.3 + 0.07 );
	o.vVegGrass = vec4f( hf, kind, duneF, bRnd );
	o.vVegGrassTone = vec4f( mt.tone, mt.dry );
	o.vVegGrass2 = vec4f( density, select( blade.w, 0.0, kind < 2.5 ), across, dryBlade );
	o.vVegGust = sat( g * w * 0.6 ) * stiff;
	// wildflowers: some tier 0 blades (kept at every distance) carry a flower-coloured tip; one
	// colour dominates each ~20 m patch, a second one mixes in
	var flower = 0.0;
	if ( ${r?`true`:`false`} && isGrass && tier < 0.5 ) {
		let fk = fract( bRnd * 31.7 + r * 7.31 );
		if ( fk < m.a * 0.42 ) {
			let pc = floor( vegHash12( floor( xz / 19.0 ) + 0.37 ) * 3.999 );
			let alt = floor( vegHash12( xz * 0.91 + 1.7 ) * 3.999 );
			flower = 1.0 + select( pc, alt, r2 < 0.22 );
		}
	}
	o.vVegFlower = flower;

	v.useWorld = true;
	v.worldPos = pos;
	v.worldNormal = normalize( nR * 0.5 + VEG_UP + sideDir * ( across * 0.35 ) );
`,surface:`
	let hf = in.vs.vVegGrass.x;
	let kind = in.vs.vVegGrass.y;
	let duneF = in.vs.vVegGrass.z;
	let rnd = in.vs.vVegGrass.w;
	let across = in.vs.vVegGrass2.z;
	let dryBlade = in.vs.vVegGrass2.w;
	// self-shadowing of the sward: dark at the base of the clump
	let ao = mix( 0.32, 1.0, smoothstep( 0.0, 0.75, hf ) );
	// dune grass: olive base, straw tips; meadow: the terrain's meadow tone, dark and brownish
	// (dead leaf sheaths) at the base, lighter / sun-bleached towards the tips
	let duneBase = mix( ${J(6119986)}, ${J(8358464)}, rnd );
	let duneTip = mix( ${J(12102508)}, ${J(10134610)}, rnd );
	let tone = in.vs.vVegGrassTone.xyz * ( rnd * 0.34 + 0.83 );
	let lushBase = mix( tone * 0.5, VEG_MEADOW_SOIL, 0.3 );
	let tipDry = in.vs.vVegGrassTone.w * 0.4 + smoothstep( 0.8, 1.0, rnd ) * 0.35;
	let lushTip = mix( tone * vec3f( 1.25, 1.25, 1.05 ), VEG_MEADOW_STRAW, tipDry * smoothstep( 0.55, 1.0, hf ) );
	let gBase = mix( lushBase, duneBase, duneF );
	let gTip = mix( lushTip, duneTip, duneF );
	var grass0 = mix( gBase, gTip, smoothstep( 0.05, 0.95, hf ) );
	// dead blades: straw to brown
	grass0 = mix( grass0, mix( VEG_MEADOW_STRAW, VEG_MEADOW_SOIL * 1.8, rnd * 0.6 ) * ( smoothstep( 0.0, 0.5, hf ) * 0.4 + 0.6 ), dryBlade * ( 1.0 - duneF ) );
	// pale midrib
	grass0 = grass0 * ( pow( 1.0 - abs( across ), 6.0 ) * smoothstep( 0.05, 0.4, hf ) * 0.18 + 1.0 );
	// wind sheen: blades flattened by a gust show their paler undersides, so gusts read
	// as bright waves rolling across the grass
	let grass = mix( grass0, grass0 * vec3f( 1.3, 1.28, 1.1 ) + vec3f( 0.03, 0.03, 0.015 ), in.vs.vVegGust * smoothstep( 0.15, 0.9, hf ) * 0.6 );
	let oatStalk = mix( ${J(10263138)}, ${J(12759674)}, hf );
	let oatHead = mix( ${J(13218426)}, ${J(11047002)}, rnd );
	let centre = in.vs.vVegGrass2.y; // 1 at leaf / flower centre
	let vine = mix( mix( ${J(3035673)}, ${J(4879144)}, rnd ), ${J(8032074)}, centre * 0.3 ) * select( vec3f( 1.0 ), vec3f( 1.25, 1.05, 0.8 ), hf < 0.075 );
	let flower = mix( ${J(12076956)}, ${J(15919342)}, smoothstep( 0.35, 0.9, centre ) );
	// 草原: wildflower tips (flat colour over the top of the blade, no wind sheen)
	let fi = in.vs.vVegFlower;
	var grassF = grass;
	if ( fi > 0.5 ) {
		let fcol = select( select( select( ${i[3]}, ${i[2]}, fi < 3.5 ), ${i[1]}, fi < 2.5 ), ${i[0]}, fi < 1.5 );
		grassF = mix( grass, fcol * ( rnd * 0.2 + 0.9 ), smoothstep( 0.7, 0.84, hf ) );
	}
	let c = select( select( select( select( flower, vine, kind < 3.5 ), oatHead, kind < 2.5 ), oatStalk, kind < 1.5 ), grassF, kind < 0.5 );
	let albedo = c * select( 1.0, ao, kind < 2.5 );
	s.albedo = albedo;
	s.roughness = select( 0.8, 0.45, kind > 2.5 && kind < 3.5 );
	s.metalness = 0.0;
	s.specularIntensity = 0.4;
	s.normal = normalize( normalize( in.vs.normal ) + in.V * 0.4 );
	// back-lit thin blades glow (evaluated in the lighting model with the shadowed light, so
	// grass in shadow does not)
	let back = pow( sat( dot( - in.V, frame.sunDir ) ), 4.0 );
	s.translucency = albedo * vec3f( 1.1, 1.3, 0.6 ) * ( back * 0.3 * smoothstep( 0.2, 1.0, hf ) ) * ( 1.0 - frame.night );
`})}var ml=`
struct VegBark { bark: vec3f, hd: f32 };
// (the last evaluation is remembered: the albedo and the trunk bump both ask for the same point)
var<private> vegBarkMemoKey: vec4f = vec4f( 3.0e38 );
var<private> vegBarkMemoIv: f32 = 3.0e38;
var<private> vegBarkMemo: VegBark;
fn vegPalmBark( y: f32, a: f32, H: f32, seed: f32, iv: f32 ) -> VegBark {
	let key = vec4f( y, a, H, seed );
	if ( all( key == vegBarkMemoKey ) && iv == vegBarkMemoIv ) { return vegBarkMemo; }
	vegBarkMemoKey = key;
	vegBarkMemoIv = iv;
	vegBarkMemo = _vegPalmBark( y, a, H, seed, iv );
	return vegBarkMemo;
}
fn _vegPalmBark( y: f32, a: f32, H: f32, seed: f32, iv: f32 ) -> VegBark {
	let A = a * 6.2832;
	let ca = cos( A ); let sa = sin( A );
	let yn = y / H;
	// rings: phase grows faster toward the crown, jittered per ring band and around the trunk
	let wob = ( vegNoise( vec2f( ca * 1.3 + y * 0.35, sa * 1.3 + seed * 9.0 ) ) - 0.5 ) * 0.7
		+ sin( A * 2.0 + y * 1.1 + seed * 5.0 ) * 0.1;
	let phase = y * mix( 8.5, 11.0, iv ) + pow( yn, 2.2 ) * H * 5.5 + vegNoise( vec2f( y * 0.8, seed * 7.3 ) ) * 3.2
		+ vegNoise( vec2f( y * 3.1, seed * 2.9 ) ) * 0.9 + wob;
	let k0 = floor( phase );
	// ragged ring edges: the scar line wanders a little around the trunk
	let phaseR = phase + ( vegNoise( vec2f( a * 38.0, k0 * 2.3 + seed * 5.0 ) ) - 0.5 ) * 0.22;
	let k = floor( phaseR );
	let fr = phaseR - k;
	// each ring scar has its own width and depth
	let rk = vegHash12( vec2f( k, seed * 13.7 ) );
	let gw = mix( 0.05, 0.14, rk );
	let groove = ( smoothstep( gw, 0.0, fr ) + smoothstep( 1.0 - gw * 0.6, 1.0, fr ) ) * mix( 0.45, 1.0, vegHash12( vec2f( k * 1.3, seed * 3.1 ) ) );
	let ridge = smoothstep( 0.07, 0.15, fr ) * smoothstep( 0.45, 0.16, fr );
	// partial rings: each ring fades out around part of the circumference
	let amp = smoothstep( 0.28, 0.6, vegNoise( vec2f( ca * 1.8 + k * 3.17, sa * 1.8 + k * 1.71 + seed * 11.0 ) ) ) * 0.75 + 0.25;
	// fine vertical fissures (level set of a vertically stretched noise) and bark plates
	let nf = vegNoise( vec2f( a * 54.0, y * 1.6 + seed * 41.0 ) );
	let nf2 = vegNoise( vec2f( a * 110.0, y * 3.4 + seed * 29.0 ) );
	// fissures: short, broken vertical splits (not continuous grain lines)
	let segA = smoothstep( 0.45, 0.62, vegNoise( vec2f( a * 30.0, y * 4.5 + seed * 9.0 ) ) );
	let segB = smoothstep( 0.5, 0.66, vegNoise( vec2f( a * 60.0 + 3.7, y * 9.0 + seed * 21.0 ) ) );
	let crack = max( smoothstep( 0.09, 0.0, abs( nf - 0.5 ) ) * segA, smoothstep( 0.06, 0.0, abs( nf2 - 0.5 ) ) * segB * 0.7 );
	let plate = vegNoise( vec2f( a * 24.0, y * 3.5 + seed * 17.0 ) );
	let blotch = vegNoise( vec2f( a * 6.0, y * 0.4 + seed * 13.0 ) );
	// grey-brown bark weathering to silver-grey, per palm
	var bark = mix( ${J(6182218)}, ${J(10787464)}, sat( blotch * 0.55 + plate * 0.25 + ( iv - 0.5 ) * 0.5 + yn * 0.15 ) );
	// warmer tan on some trees and in patches, dark weathered (rain-soaked) blotches
	bark = mix( bark, bark * vec3f( 1.12, 1.0, 0.82 ), sat( ( vegNoise( vec2f( a * 4.0, y * 0.25 + seed * 31.0 ) ) - 0.4 ) * 2.0 ) * iv );
	bark = bark * mix( 1.0, 0.72, smoothstep( 0.6, 0.8, vegNoise( vec2f( a * 5.0, y * 0.7 + seed * 43.0 ) ) ) );
	// fine mottling (rough, fibrous surface) and pale sun-bleached patches
	let mott = vegNoise( vec2f( a * 90.0, y * 80.0 + seed * 7.0 ) ) * 0.6 + vegNoise( vec2f( a * 35.0, y * 30.0 + seed * 3.0 ) ) * 0.4;
	bark = bark * ( mott * 0.45 + 0.78 ) * ( plate * 0.25 + 0.88 );
	bark = mix( bark, ${J(11775391)}, smoothstep( 0.55, 0.75, vegNoise( vec2f( a * 8.0, y * 1.3 + seed * 61.0 ) ) ) * 0.35 * ( 1.0 - yn * 0.5 ) );
	bark = bark * mix( 1.0, 0.7, groove * amp ) * ( ridge * amp * 0.1 + 1.0 ) * mix( 1.0, 0.5, crack );
	// lichen: pale grey-green crusts and white spots, a little orange; darker rain streaks
	let lic = smoothstep( 0.6, 0.72, vegNoise( vec2f( a * 9.0, y * 2.1 + seed * 23.0 ) ) + ( vegNoise( vec2f( a * 31.0, y * 7.0 ) ) - 0.5 ) * 0.3 ) * smoothstep( 0.9, 0.2, yn );
	let licC = mix( ${J(9343359)}, ${J(11118489)}, plate );
	bark = mix( bark, licC, lic * 0.5 );
	let streak = smoothstep( 0.62, 0.8, vegNoise( vec2f( a * 16.0, y * 0.12 + seed * 5.0 ) ) ) * smoothstep( 1.0, 0.6, yn );
	bark = bark * ( 1.0 - streak * 0.28 );
	// damp, dark base (splash of sand and soil) and the mass of exposed roots at the ground
	let baseK = smoothstep( 1.4, 0.2, y + ( blotch - 0.5 ) * 0.8 );
	bark = mix( bark, bark * vec3f( 0.62, 0.56, 0.48 ), baseK );
	let rootN = vegNoise( vec2f( a * 26.0, y * 2.2 + seed * 19.0 ) );
	let roots = smoothstep( 0.42, 0.05, y ) * smoothstep( 0.35, 0.6, rootN );
	bark = mix( bark, mix( ${J(3812898)}, ${J(6179382)}, rootN ), smoothstep( 0.5, 0.0, y ) * 0.85 );
	// fibrous old frond bases (boot) under the crown: criss-cross fibre mat, brown
	let boot = smoothstep( H - 1.0, H - 0.35, y + ( blotch - 0.5 ) * 0.3 );
	let fib = sin( A * 34.0 + y * 30.0 ) * sin( A * 34.0 - y * 30.0 ) * 0.5 + 0.5;
	bark = mix( bark, mix( ${J(5060386)}, ${J(9073740)}, fib * 0.6 + plate * 0.4 ), boot );
	var o: VegBark;
	o.bark = bark;
	o.hd = ( ridge * amp * 0.004 - groove * amp * 0.008 - crack * 0.006 + plate * 0.004 + mott * 0.004 + roots * 0.01 ) * ( 1.0 - boot ) + boot * fib * 0.004;
	return o;
}
`,hl=`
// Broadleaf plants (parts 6 monstera, 7 elephant ear, 8 heliconia leaf, 9 heliconia bract). Blade
// coordinates: y along the midrib (0 back of the basal lobes .. 1 tip), x across in units of the
// half-width W (m). Returns the outline half-width (x units) at y and whether a hole / slit / tear is
// cut at (y, x).
struct VegBroad { w: f32, cut: bool };
fn vegBroadShape( part: f32, y: f32, x: f32, age: f32, W: f32, fseed: f32, seed: f32 ) -> VegBroad {
	let ax = abs( x );
	var w = 0.0;
	var cut = false;
	// ragged, slightly irregular margin on every leaf (more on old ones)
	let rag = 1.0 - ( vegNoise( vec2f( y * 38.0 + select( 0.0, 17.0, x > 0.0 ), fseed * 31.0 ) ) * 0.05 + age * age * 0.12 * vegNoise( vec2f( y * 11.0, fseed * 7.0 + x ) ) );
	if ( part < 6.5 ) {
		// monstera: cordate blade, basal lobes behind the petiole, V sinus; mature leaves are split
		// from the margin between the primary veins, with a row of holes (fenestrations) inside
		let yb = 0.16;
		let g = ( y - yb ) / ( 1.0 - yb );
		if ( y >= yb ) {
			w = pow( max( sin( 3.14159 * min( 1.0, 0.4 + 0.6 * g ) ), 0.0 ), 0.8 ) * ( 1.0 - 0.15 * smoothstep( 0.8, 1.0, g ) );
		} else {
			let q = ( yb - y ) / yb;
			w = sqrt( max( 1.0 - q * q * q, 0.0 ) ) * 0.96;
			cut = ax < 0.3 * ( 1.0 - y / yb );
		}
		w *= rag;
		let matK = smoothstep( 0.28, 0.45, age );
		if ( matK > 0.0 && y > yb * 0.4 && y < 0.93 ) {
			let L = W / 0.47;
			let X = ax * W;
			let Y = ( y - yb ) * L;
			let p = ( Y - 0.55 * X ) / ( L * 0.8 / 5.5 ) + fseed * 0.37;
			let k = floor( p + 0.5 );
			let e = abs( p - k ); // 0 on the gap between two primary veins
			let hk = vegHash12( vec2f( k + select( 0.0, 50.0, x > 0.0 ), fseed * 19.3 ) );
			let r = ax / max( w, 0.05 );
			let depth = mix( 0.42, 0.75, hk ) + ( 1.0 - matK ) * 0.4;
			// slits widen toward the margin, their inner end rounded
			let slit = e < 0.035 + 0.1 * smoothstep( depth, 1.0, r ) && r > depth - 0.03;
			// fenestrations: one or two elongated holes along the gap line, inside the slit
			let r0 = 0.14; let r1 = depth - 0.1;
			let qh = ( r - r0 ) / max( r1 - r0, 0.05 );
			let nh = select( 1.0, 2.0, hk > 0.45 );
			let qq = fract( qh * nh );
			let hole = qh > 0.0 && qh < 1.0 && e < 0.16 * pow( sin( 3.14159 * qq ), 0.6 ) * matK && hk > 0.12;
			cut = cut || slit || hole;
		}
	} else if ( part < 7.5 ) {
		// elephant ear: peltate blade (petiole joins inside it), rounded basal lobes, acute tip
		let yb = 0.3;
		let g = ( y - yb ) / ( 1.0 - yb );
		if ( y >= yb ) {
			w = pow( max( sin( 3.14159 * min( 1.0, 0.5 + 0.5 * g ) ), 0.0 ), 0.85 );
		} else {
			let q = ( yb - y ) / yb;
			w = sqrt( max( 1.0 - pow( q, 1.6 ), 0.0 ) ) * 0.98;
			cut = y < 0.1 && ax < 0.2 * ( 1.0 - y / 0.1 );
		}
		w *= rag;
	} else if ( part < 8.5 || ( part > 9.5 && part < 10.5 ) ) {
		// heliconia / bird of paradise: paddle blade, torn along the lateral veins (more on old leaves)
		w = pow( max( sin( 3.14159 * min( y * 1.02, 1.0 ) ), 0.0 ), 0.5 ) * ( 1.0 - 0.3 * smoothstep( 0.75, 1.0, y ) ) * rag;
		let xl = y * 22.0 + ax * 1.2 + sin( y * 31.0 + fseed * 10.0 ) * 0.3;
		let k = floor( xl );
		let r1 = vegHash12( vec2f( k + select( 0.0, 40.0, x > 0.0 ), fseed * 7.7 ) );
		let r2 = vegHash12( vec2f( k + 0.5, fseed * 3.3 + seed ) );
		let fx = abs( fract( xl ) - 0.5 );
		cut = r1 < select( 0.12, 0.2, part > 9.5 ) + age * 0.45 && ax / max( w, 0.05 ) > mix( 0.25, 0.8, r2 ) && fx > 0.44;
	} else if ( part < 9.5 ) {
		// bract: boat-shaped, pointed
		w = sin( 3.14159 * min( 1.0, 0.15 + y * 0.9 ) ) * ( 1.0 - 0.4 * smoothstep( 0.7, 1.0, y ) );
	} else {
		// bird of paradise flower pieces: pointed
		w = sin( 3.14159 * min( 1.0, 0.1 + y * 0.9 ) ) * ( 1.0 - 0.5 * smoothstep( 0.6, 1.0, y ) );
	}
	if ( part < 7.5 ) {
		let dmg = vegNoise( vec2f( y * 26.0 + fseed * 17.0, x * 11.0 + seed * 9.0 ) );
		cut = cut || dmg > 0.95 - age * 0.08;
	}
	var o: VegBroad;
	o.w = w;
	o.cut = cut;
	return o;
}

fn vegBroadAlbedo( part: f32, y: f32, x: f32, age: f32, W: f32, fseed: f32, seed: f32, iv: f32, hGround: f32 ) -> vec3f {
	let ax = abs( x );
	let fr = vegHash12( vec2f( fseed * 51.3, seed * 17.9 ) );
	let n1 = vegNoise( vec2f( y * 9.0 + fseed * 13.0, x * 4.0 ) );
	let n2 = vegNoise( vec2f( y * 37.0 + fseed * 3.0, x * 17.0 + seed * 5.0 ) );
	var c = vec3f( 0.0 );
	if ( part < 6.5 ) {
		// monstera: deep glossy green, juvenile leaves lighter yellow-green, old ones yellowing
		var g = mix( ${J(2243349)}, ${J(3297053)}, iv * 0.6 + fr * 0.4 );
		g = mix( ${J(5205800)}, g, smoothstep( 0.1, 0.35, age ) );
		g = mix( g, ${J(10129726)}, smoothstep( 0.85, 0.97, age ) * ( 0.6 + 0.4 * n1 ) );
		c = g * ( n1 * 0.16 + 0.92 );
		// primary veins a touch paler, midrib pale
		let L = W / 0.47;
		let p = ( ( y - 0.16 ) * L - 0.55 * ax * W ) / ( L * 0.8 / 5.5 ) + fseed * 0.37;
		let rib = smoothstep( 0.1, 0.0, abs( fract( p ) - 0.5 ) ) * step( 0.16, y );
		c = c * ( 1.0 + rib * 0.12 );
		c = mix( c, ${J(8427850)}, smoothstep( 0.03, 0.0, ax * W ) * 0.7 );
	} else if ( part < 7.5 ) {
		// elephant ear: mid green, pale veins radiating from where the petiole joins
		var g = mix( ${J(3364894)}, ${J(4878632)}, iv * 0.6 + fr * 0.4 );
		g = mix( g, ${J(9998655)}, smoothstep( 0.85, 0.97, age ) * ( 0.6 + 0.4 * n1 ) );
		let ang = atan2( ax * W, ( y - 0.3 ) * W / 0.4 );
		let vein = smoothstep( 0.1, 0.0, abs( fract( ang * 2.6 ) - 0.5 ) - 0.38 ) * 0.7;
		c = g * ( n1 * 0.14 + 0.93 );
		c = mix( c, ${J(8361560)}, vein * 0.35 + smoothstep( 0.025, 0.0, ax * W ) * step( 0.3, y ) * 0.5 );
	} else if ( part > 10.5 ) {
		// bird of paradise flower: beak green-grey with a purple-red keel, orange sepals, blue tongue
		let beak = mix( mix( ${J(5991242)}, ${J(7024442)}, smoothstep( 0.3, 0.9, ax ) * 0.7 ), ${J(12611642)}, smoothstep( 0.8, 1.0, y ) * 0.4 );
		let sepal = mix( ${J(14709788)}, ${J(15768106)}, n1 );
		let tongue = mix( ${J(2899866)}, ${J(4217016)}, n1 );
		return select( select( beak, sepal, age > 0.25 ), tongue, age > 0.75 );
	} else if ( part > 9.5 ) {
		// bird of paradise leaf: glaucous grey-green, pale midrib
		var g = mix( ${J(4086326)}, ${J(5204547)}, iv * 0.6 + fr * 0.4 );
		g = mix( g, ${J(9407050)}, smoothstep( 0.8, 0.95, age ) );
		c = g * ( n1 * 0.1 + 0.95 );
		c = mix( c, ${J(10725496)}, smoothstep( 0.015, 0.0, ax * W ) * 0.6 );
	} else if ( part < 8.5 ) {
		var g = mix( ${J(3562784)}, ${J(4944425)}, iv * 0.6 + fr * 0.4 );
		g = mix( g, ${J(9407034)}, smoothstep( 0.8, 0.95, age ) );
		c = g * ( ( sin( y * 180.0 + ax * 30.0 ) * 0.5 + 0.5 ) * 0.06 + 0.95 ) * ( n1 * 0.12 + 0.94 );
		c = mix( c, ${J(11188334)}, smoothstep( 0.02, 0.0, ax * W ) * 0.7 );
	} else {
		// heliconia bract: scarlet, yellow lip, green tip on the youngest (top) bracts
		c = mix( ${J(9312786)}, ${J(12397082)}, n1 * 0.6 + fr * 0.4 );
		c = mix( c, ${J(14925112)}, smoothstep( 0.62, 0.9, ax ) );
		c = mix( c, ${J(7113262)}, smoothstep( 0.8, 1.0, y ) * smoothstep( 0.6, 1.0, age ) * 0.7 );
		return c;
	}
	// weathering: browned dry margins and tips, fungal spots, splashed soil on low leaves
	let edge = smoothstep( 0.8, 1.0, ax + n2 * 0.25 - 0.1 ) * ( 0.25 + age * 0.9 );
	c = mix( c, mix( ${J(8087097)}, ${J(5915944)}, n2 ), sat( edge ) * 0.85 );
	let spot = vegNoise( vec2f( y * 14.0 + fseed * 9.0, x * 6.0 + seed * 3.0 ) );
	c = mix( c, ${J(6181939)}, smoothstep( 0.86, 0.93, spot ) * 0.5 * ( 0.4 + age ) );
	c = mix( c, ${J(7101509)}, smoothstep( 0.55, 0.0, hGround ) * smoothstep( 0.5, 0.75, n2 ) * 0.5 );
	// dead leaves: brown and papery
	c = mix( c, mix( ${J(7231028)}, ${J(9402958)}, n1 ), smoothstep( 0.93, 0.99, age ) );
	return c;
}

fn vegBroadStem( part: f32, a: f32, f: f32, seed: f32, age: f32 ) -> vec3f {
	let n = vegNoise( vec2f( a * 6.0, f * 30.0 + seed * 11.0 ) );
	if ( part < 6.5 ) { return mix( ${J(4876842)}, ${J(6061107)}, n ) * mix( 1.0, 0.8, smoothstep( 0.7, 1.0, age ) ); }
	if ( part < 7.5 ) { return mix( ${J(5663284)}, ${J(6113852)}, n * 0.5 ); }
	if ( part < 8.5 ) { return mix( mix( ${J(4877102)}, ${J(6387514)}, n ), ${J(5917232)}, smoothstep( 0.6, 0.8, vegNoise( vec2f( a * 3.0, f * 8.0 + seed * 5.0 ) ) ) * 0.6 ); }
	if ( part > 9.5 ) { return mix( ${J(5596746)}, ${J(7173720)}, n ); }
	return ${J(9312786)};
}
`,gl=new R({name:`vegPlant`,deps:[zc],code:ml+hl+`
// alpha mask (fronds / pinnae / torn banana blades) + the LOD cross-fade of the instance
fn vegPlantMask( in: FragInput ) -> bool {
	let st = in.uv;
	let s = st.x;
	let t = st.y;
	let fwS = fwidth( s ); // evaluated in uniform control flow, before the branches
	let aMat = in.vs.vMat;
	let part = aMat.x; let age = aMat.y; let Ll = aMat.z; let fseed = aMat.w;
	let seed = in.vs.vIDat.w;
	var m = 1.0;
	if ( part > 0.5 && part < 1.5 ) {
		// coconut frond: ~95 narrow leaflets per side (100-125 on a real frond), separated by gaps
		// that show the sky; leaflets bunch and spread irregularly, some are short, split or torn
		// away (runs of missing leaflets, more on old fronds)
		let N = 95.0;
		let x = s * N + ( vegNoise( vec2f( s * 7.0, fseed * 23.0 + seed * 3.0 ) ) - 0.5 ) * 2.2;
		let k = floor( x );
		let r1 = vegHash12( vec2f( k, fseed * 91.7 ) );
		let r2 = vegHash12( vec2f( k * 1.37 + 3.1, fseed * 17.3 + seed * 5.0 ) );
		let fx = fract( x ) - 0.5 - ( r1 - 0.5 ) * 0.35;
		let tEnd = mix( 0.72, 1.0, r2 ) * select( 1.0, 0.45, r1 < 0.06 );
		let tt = t / tEnd;
		let hw = pow( max( 1.0 - tt, 0.0 ), 0.6 ) * 0.22 * ( smoothstep( 0.0, 0.1, tt ) * 0.4 + 0.6 );
		// split leaflets: a slit from the tip back along the midvein
		let split = r2 > 0.9 && tt > mix( 0.35, 0.7, r1 ) && abs( fx ) < hw * 0.3;
		// torn-out runs of leaflets
		let torn = vegNoise( vec2f( k * 0.21 + seed * 17.0, fseed * 37.0 ) ) > 0.83 - age * 0.2 && s > 0.3;
		// sub-pixel leaflets widen instead of aliasing (fronds turn solid in the distance)
		let hwE = max( hw, min( fwS * ( N * 0.6 ), 0.5 ) * select( 0.0, 1.0, tt < 1.0 ) );
		let leaf = abs( fx ) < hwE && tt < 1.0 && s > 0.06 && ! split && ! torn;
		let rachis = t * Ll < 0.026;
		m = select( 0.0, 1.0, leaf || rachis );
	} else if ( part > 1.5 && part < 2.5 ) {
		// fern: rounded pinnae
		let N = 26.0;
		let x = s * N;
		let k = floor( x );
		let r2 = vegHash12( vec2f( k, fseed * 31.1 ) );
		let fx = fract( x ) - 0.5;
		let tt = t / mix( 0.8, 1.0, r2 );
		let hw = sqrt( max( 1.0 - tt * tt, 0.0 ) ) * 0.34;
		let hwE = max( hw, min( fwS * ( N * 0.6 ), 0.5 ) * select( 0.0, 1.0, tt < 1.0 ) );
		let leaf = abs( fx ) < hwE && tt < 1.0 && s > 0.04;
		let rachis = t * Ll < 0.006;
		m = select( 0.0, 1.0, leaf || rachis );
	} else if ( part > 2.5 && part < 3.5 && s >= 0.0 ) {
		// banana: full blade, torn along lateral veins, ragged edge
		let x = s * 13.0 + sin( s * 31.0 + fseed * 10.0 ) * 0.35;
		let k = floor( x );
		let r1 = vegHash12( vec2f( k, fseed * 7.7 ) );
		let r2 = vegHash12( vec2f( k + 0.5, fseed * 3.3 + seed ) );
		let fx = abs( fract( x ) - 0.5 );
		// dead leaves are shredded
		let dead = step( 0.8, age );
		// wind-torn strips: most tears start at the margin and run in along the veins, more on older
		// leaves; dead leaves are shredded
		let tear = r1 < mix( 0.45 + age * 0.6, 0.95, dead ) && t > mix( 0.12, 0.75, r2 ) * mix( 1.0, 0.4, dead ) && fx > mix( 0.45, 0.37, r2 ) - dead * 0.12;
		let edge = t < 0.985 - vegNoise( vec2f( s * 60.0, fseed * 9.0 ) ) * 0.07;
		m = select( 0.0, 1.0, ! tear && edge );
	} else if ( part > 5.5 && s >= 0.0 ) {
		// broadleaf blades (petioles, s < 0, are kept whole)
		let sh = vegBroadShape( part, s, t, age, Ll, fseed, seed );
		m = select( 0.0, 1.0, abs( t ) < sh.w && ! sh.cut );
	}
	return m > 0.5 && vegLodDither( in.vs.vIPos, draw.params.yzw, in.pixel );
}

fn vegPlantAlbedo( in: FragInput ) -> vec3f {
	let st = in.uv;
	let s = st.x;
	let t = st.y;
	let aMat = in.vs.vMat;
	let part = aMat.x; let age = aMat.y; let Ll = aMat.z; let fseed = aMat.w;
	let seed = in.vs.vIDat.w;
	let H = in.vs.vIDat.z;
	var col = vec3f( 0.0 );
	let iv = vegHash12( vec2f( seed * 37.1, 1.7 ) );
	if ( part < 0.5 ) {
		// stems: age 0 -> weathered, ringed palm trunk; 1 -> green banana pseudostem
		let y = in.vs.vTrunkY;
		let a = st.x;
		let bark = vegPalmBark( y, a, H, seed, iv ).bark;
		// (palm trunks have age 0: the pseudostem colour only where it is mixed in)
		var green = vec3f( 0.0 );
		if ( age > 0.0 ) {
			let fiss = vegNoise( vec2f( a * 46.0, y * 1.1 + seed * 50.0 ) );
			let blotch = vegNoise( vec2f( a * 7.0, y * 0.45 + seed * 13.0 ) );
			// banana pseudostem: overlapping sheaths (vertical streaks), dark blotches, dry brown
			// sheath strips peeling off low down (no leaf-scar rings)
			let streakS = vegNoise( vec2f( a * 24.0, y * 0.35 + seed * 7.0 ) );
			green = mix( ${J(5138986)}, ${J(7046200)}, streakS * 0.7 + fiss * 0.3 );
			green = mix( green, ${J(3879714)}, smoothstep( 0.62, 0.82, blotch ) * 0.55 );
			green = mix( green, mix( ${J(7230772)}, ${J(9402962)}, fiss ), smoothstep( 0.55, 0.75, streakS ) * smoothstep( 1.1, 0.3, y ) );
		}
		col = mix( bark, green, age );
	} else if ( part < 1.5 ) {
		// age (aMat.y): 0 young upper fronds (lighter yellow-green) .. 0.55 old lower fronds (olive,
		// yellowing); 1 = the two hanging fronds, whose state is picked per tree and frond (one crown
		// mesh is shared): still olive, yellowing or dead brown
		let fr = vegHash12( vec2f( fseed * 51.3, seed * 17.9 ) );
		let a = sat( age / 0.55 );
		var g = mix( ${J(7506995)}, ${J(4480807)}, smoothstep( 0.0, 0.35, a ) );
		g = mix( g, ${J(6909999)}, smoothstep( 0.55, 1.0, a ) );
		// per tree: yellower or bluer greens; per frond: value
		g = mix( g, g * vec3f( 1.12, 1.02, 0.78 ), iv * 0.8 );
		g = mix( g, g * vec3f( 0.86, 0.98, 1.08 ), ( 1.0 - iv ) * 0.5 );
		g = g * mix( 0.82, 1.1, fr );
		// leaflets: darker toward their tips, paler at the base, each a little different
		let kL = floor( s * 95.0 );
		let perLeaf = vegHash12( vec2f( kL, fseed * 13.1 ) );
		var c = g * mix( 1.08, 0.86, smoothstep( 0.2, 1.0, t ) ) * ( perLeaf * 0.22 + 0.9 );
		// browned, dried tips on some leaflets (more on old fronds)
		let tipK = smoothstep( 0.72, 0.97, t ) * step( 0.55 - a * 0.35, vegHash12( vec2f( kL * 1.7, fseed * 5.3 + seed ) ) );
		c = mix( c, mix( ${J(9206346)}, ${J(7232313)}, perLeaf ), tipK * 0.85 );
		// hanging fronds
		let hangK = smoothstep( 0.8, 0.95, age );
		let state = vegHash12( vec2f( fseed * 7.1, seed * 29.3 ) );
		let yellowing = mix( ${J(9407036)}, ${J(10521157)}, perLeaf );
		let deadC = mix( ${J(8021056)}, ${J(6048304)}, perLeaf );
		let hangC = select( select( c * 0.9, yellowing, state > 0.35 ), deadC, state > 0.62 );
		c = mix( c, hangC, hangK );
		// midrib: pale yellow on young fronds, straw on old, brown when dead
		let rachis = t * Ll < 0.026;
		let rib = mix( mix( ${J(11773536)}, ${J(9996622)}, a ), ${J(7297594)}, hangK * step( 0.62, state ) );
		col = select( c, rib, rachis );
	} else if ( part < 2.5 ) {
		let c = mix( ${J(3431456)}, ${J(5603372)}, smoothstep( 0.1, 1.0, s ) * 0.6 + iv * 0.4 );
		col = c * mix( 0.85, 1.1, vegHash12( vec2f( floor( s * 26.0 ), fseed ) ) );
	} else if ( part < 3.5 ) {
		if ( s < 0.0 ) {
			// banana pseudostem: overlapping sheaths (vertical streaks), brown / purple-black blotches,
			// dry brown sheath fibre peeling low down
			let f = ( s + 1.0 ) * 2.0;
			let a = t;
			let streakS = vegNoise( vec2f( a * 26.0, f * 3.0 + fseed * 7.0 ) );
			let blotch = vegNoise( vec2f( a * 9.0, f * 6.0 + fseed * 13.0 ) );
			var gS = mix( ${J(5596974)}, ${J(7241018)}, streakS * 0.7 + iv * 0.3 );
			gS = mix( gS, ${J(3811880)}, smoothstep( 0.6, 0.8, blotch ) * 0.6 );
			let dry = smoothstep( 0.45, 0.7, vegNoise( vec2f( a * 14.0 + 3.0, f * 2.5 + fseed * 19.0 ) ) ) * smoothstep( 0.8, 0.2, f );
			col = mix( gS, mix( ${J(6967859)}, ${J(9337426)}, streakS ), dry * 0.9 );
		} else {
			// blade: muted green (per plant and leaf), paler midrib, faint lateral veins; dried, browned
			// margins and torn strip edges; old leaves yellowing; dead ones brown and papery
			let lf = vegHash12( vec2f( fseed * 23.1, seed * 3.7 ) );
			var base = mix( ${J(4153124)}, ${J(5600301)}, iv * 0.55 + lf * 0.45 );
			base = mix( base, ${J(8158517)}, smoothstep( 0.35, 0.6, age ) * 0.55 );
			let vein = ( sin( s * 260.0 ) * 0.5 + 0.5 ) * 0.07;
			let mott = vegNoise( vec2f( s * 11.0 + fseed * 3.0, t * 4.0 ) );
			var c = base * ( vein + 0.94 ) * ( mott * 0.14 + 0.93 );
			c = mix( c, ${J(11120750)}, smoothstep( 0.05, 0.0, t ) * 0.75 ); // midrib
			let xs = s * 13.0 + sin( s * 31.0 + fseed * 10.0 ) * 0.35;
			let stripEdge = smoothstep( 0.36, 0.47, abs( fract( xs ) - 0.5 ) ) * smoothstep( 0.4, 0.8, t ) * ( 0.3 + age );
			let dryEdge = smoothstep( 0.72, 1.0, t + ( vegNoise( vec2f( s * 25.0, fseed * 4.0 ) ) - 0.5 ) * 0.3 ) * ( 0.45 + age * 0.8 );
			let brownC = mix( ${J(7034161)}, ${J(9402952)}, mott );
			c = mix( c, brownC, sat( max( dryEdge, stripEdge * 0.6 ) ) * 0.85 );
			let deadC = mix( ${J(6179372)}, ${J(8810570)}, vegNoise( vec2f( s * 18.0, t * 3.0 + fseed * 5.0 ) ) );
			c = mix( c, deadC, smoothstep( 0.85, 0.95, age ) );
			col = c;
		}
	} else if ( part > 5.5 ) {
		let hGround = in.P.y - in.vs.vIPos.y;
		if ( s < 0.0 ) {
			col = vegBroadStem( part, t, ( s + 1.0 ) * 2.0, fseed, age );
		} else {
			col = vegBroadAlbedo( part, s, t, age, Ll, fseed, seed, iv, hGround );
		}
	} else {
		// coconuts: green -> yellow -> brown
		col = mix( mix( ${J(6845994)}, ${J(10258996)}, smoothstep( 0.3, 0.7, age ) ), ${J(6045986)}, smoothstep( 0.82, 0.95, age ) );
	}
	return col;
}
`}),_l={iPos:`vec4f`,iDat:`vec4f`,aVeg:`vec4f`,aMat:`vec4f`,aLobe:`vec4f`};function vl(){return new Ir({name:`veg-plant-leaf`,side:`double`,modules:[zc,gl],attributes:_l,varyings:{vTrunkY:`f32`,vTrunkT:`vec3f`,vMat:`vec4f`,vIDat:`vec4f`,vIPos:`vec3f`},vertex:`
	let pl = vegPlantDeform( ( v.model * vec4f( v.position, 1.0 ) ).xyz, vegInstanceNormal( v.model, v.normal ), v.iPos, v.iDat, v.aVeg, v.aMat, v.aLobe, draw.params.yzw );
	v.useWorld = true;
	v.worldPos = pl.pos;
	v.worldNormal = pl.normal;
	o.vTrunkY = pl.trunkY;
	o.vTrunkT = pl.trunkT;
	o.vMat = v.aMat;
	o.vIDat = v.iDat;
	o.vIPos = v.iPos.xyz;`,surface:`
	if ( ! vegPlantMask( in ) ) { discard; }
	let aMat = in.vs.vMat;
	let part = aMat.x;
	let age = aMat.y;
	let isStem = part < 0.5;
	let isNut = part > 4.5 && part < 5.5;
	let isLeaf = ! isStem && ! isNut;
	let isBroad = part > 5.5;
	var albedo = vegPlantAlbedo( in );
	// the underside of fronds and leaves is duller and a little bluer than the waxy upper side
	let upper = in.front;
	albedo = select( albedo * vec3f( 0.74, 0.8, 0.84 ), albedo, upper || ! isLeaf );
	s.albedo = albedo;
	// stems: leaf-scar ring bump along the trunk axis; leaves: normals bent slightly towards
	// the viewer to soften grazing-angle Fresnel
	// palm trunks: bark relief (rings, fissures, roots, fibres) along the trunk axis (finite
	// difference of the bark height, faded with distance); leaves: normals bent towards the viewer
	var d = 0.0;
	var dA = 0.0;
	let fadeB = 1.0 - smoothstep( 10.0, 32.0, length( frame.cameraPos - in.P ) );
	if ( isStem && fadeB > 0.0 ) {
		let seed = in.vs.vIDat.w;
		let H = in.vs.vIDat.z;
		let y = in.vs.vTrunkY;
		let a = in.uv.x;
		let ivN = vegHash12( vec2f( seed * 37.1, 1.7 ) );
		let e = 0.004;
		let ea = 0.0015; // around the trunk (a: 0..1 over a ~1.1 m circumference)
		let h0 = vegPalmBark( y, a, H, seed, ivN ).hd;
		let slope = ( vegPalmBark( y + e, a, H, seed, ivN ).hd - h0 ) / e;
		let slopeA = ( vegPalmBark( y, a + ea, H, seed, ivN ).hd - h0 ) / ( ea * 1.1 );
		d = slope * fadeB * ( 1.0 - age );
		dA = slopeA * fadeB * ( 1.0 - age );
	}
	s.normal = normalize( in.N - in.vs.vTrunkT * d - cross( in.N, in.vs.vTrunkT ) * dA + in.V * select( 0.0, 0.15, isLeaf ) );
	// waxy but not glossy: a sharper, stronger sheen mirrored the bright sky near the sun and read as a
	// white film over backlit foliage
	// broadleaf: monstera glossy, elephant ear waxy-matte, heliconia satin, bracts glossy; dead
	// leaves dull
	let broadR = select( select( select( 0.45, 0.42, part > 7.5 ), 0.58, part > 6.5 && part < 7.5 ), 0.46, part < 6.5 );
	s.roughness = select( select( select( 0.7, 0.62, part < 1.5 || isNut ), 0.92, isStem ), mix( broadR, 0.85, smoothstep( 0.9, 0.98, age ) ), isBroad );
	s.metalness = 0.0;
	s.specularIntensity = select( select( 0.4, 0.3, isStem ), 0.42, isBroad );
	s.translucency = vec3f( 0.0 );
	if ( isLeaf ) { s.translucency = vegTranslucency( albedo, in.N, select( 0.3, 0.2, isBroad ), in.P ); }`,shadow:`return vegPlantMask( in );`})}var yl=e=>`
	let iPos = v.iPos;
	let iDat = v.iDat;
	let veg = v.aVeg;
	let base = iPos.xyz;
	let sc = iPos.w;
	let Hh = iDat.z;
	let seed = iDat.w;
	let hf = veg.x;
	let flex = veg.y;
	let flut = veg.z;
	let ph = veg.w;
	var P = ( v.model * vec4f( v.position, 1.0 ) ).xyz;
	let isShrubI = iDat.y < 0.0;
	var keep = 1.0;
${e?`
	// merged tree + shrub geometry: keep the parts of this instance's plant type
	let isShrubPart = v.aMat.x > 3.5;
	keep = select( 0.0, 1.0, isShrubPart == isShrubI );
	// leaf cards move towards their lobe centre by the variant's lobe scale (0: dropped lobe)
	let lobe = v.aLobe;
	let lk = select( 0.0, 1.0 - vegLobeScale( seed, lobe.w, isShrubI ), lobe.w >= 0.0 );
	let ld = lobe.xyz * lk;
	let yaw = iDat.x; let cy = cos( yaw ); let sy = sin( yaw );
	let sv = abs( iDat.y );
	P += vec3f( ld.x * cy + ld.z * sy, ld.y * sv, ld.z * cy - ld.x * sy ) * sc;
`:``}
	let N = vegInstanceNormal( v.model, v.normal );
	let w = vegWindStrength();
	let g = vegGustAt( base.xz );
	let t = frame.time;
	let ph0 = seed * 6.2832;
	let h2 = hf * hf;
	let sway = ( w * w * 0.009 * ( g * 0.8 + 0.3 ) + sin( t * 0.9 + ph0 ) * w * 0.0045 * ( g + 0.4 ) ) * Hh * h2;
	let swayP = sin( t * 0.67 + ph0 * 1.3 ) * w * 0.002 * Hh * h2;
	let branch = sin( t * ( ph + 1.7 ) + ph * 20.0 + ph0 ) * flex * w * sc * 0.07 * ( g + 0.5 )
		- flex * w * w * sc * 0.04 * ( g + 0.3 ); // branches sag / stream in strong gusts
	let flutter = sin( t * 9.5 + ph * 50.0 + P.x * 1.9 + P.z * 2.3 ) * flut * sc * ( w * 0.035 + 0.005 );
	let pos = P + vegWindDir3() * sway + vegWindPerp3() * swayP + VEG_UP * branch + N * flutter;
	// near LOD: trees and shrubs hand over to the impostors at their own distance
	let dCam = length( vegParams.camPos - base );
	let nearK = select( 0.0, 1.0, dCam < select( vegParams.canopyNear.x, vegParams.canopyNear.y, isShrubI ) * ( 1.0 + VEG_LOD_BAND / 2.0 ) );
	v.useWorld = true;
	v.worldPos = base + ( pos - base ) * ( keep * nearK );
	v.worldNormal = N;
`,bl=Pc.fields.canopyNear,xl=new R({name:`vegCanopy`,deps:[zc],code:`
fn vegPick4( s4: f32, a: vec3f, b: vec3f, c: vec3f, d: vec3f ) -> vec3f { return select( select( select( d, c, s4 < 2.5 ), b, s4 < 1.5 ), a, s4 < 0.5 ); }
fn vegPick3( s3: f32, a: vec3f, b: vec3f, c: vec3f ) -> vec3f { return select( select( c, b, s3 < 1.5 ), a, s3 < 0.5 ); }
fn vegTreeSpecies( seed: f32 ) -> f32 { return floor( fract( seed * 5.31 ) * 4.0 ); }
// shrubs: 0 sea grape 45 %, 1 croton 15 %, 2 hibiscus 40 %
fn vegShrubSpecies( seed: f32 ) -> f32 {
	let h = fract( seed * 3.17 );
	return select( select( 2.0, 1.0, h < 0.6 ), 0.0, h < 0.45 );
}

// base leaf colour of an instance (species, per-card random cr, per-instance tint)
fn vegCanopyLeafColor( seed: f32, cr: f32, isShrub: bool ) -> vec3f {
	let spT = vegTreeSpecies( seed ); let spS = vegShrubSpecies( seed );
	// tree species: dark glossy (bronze flush), fresh mid green, yellow-green, blue-green
	// (Caribbean hillside forest: deep, olive and yellow-greens, muted, with a few dry / bronze
	// and flowering crowns)
	let t0 = mix( mix( ${J(2636315)}, ${J(3557923)}, cr ), ${J(6179374)}, smoothstep( 0.96, 0.995, cr ) * 0.5 );
	let t1 = mix( ${J(3426591)}, ${J(4742183)}, cr );
	let t2 = mix( ${J(5200423)}, ${J(6580785)}, cr );
	let t3 = mix( ${J(2767658)}, ${J(3820086)}, cr );
	let s0 = mix( ${J(4150562)}, ${J(5400106)}, cr );
	let s1 = mix( ${J(2900510)}, ${J(4478495)}, cr );
	let s2 = mix( ${J(3428892)}, ${J(4613668)}, cr );
	let iv = vegHash12( vec2f( seed * 17.3, 4.1 ) );
	let iv2 = vegHash12( vec2f( seed * 5.9, 8.3 ) );
	var c = select( vegPick4( spT, t0, t1, t2, t3 ), vegPick3( spS, s0, s1, s2 ), isShrub ) * ( iv * 0.36 + 0.74 );
	// a few trees dry / dropping leaves (brown-olive), or flowering (flamboyant, orange-red)
	let treeK = select( 1.0, 0.0, isShrub );
	let dry = step( iv2, 0.035 ) * treeK;
	c = mix( c, mix( ${J(6050356)}, ${J(7232058)}, cr ), dry * 0.5 );
	let flower = step( 0.988, iv2 ) * treeK * step( 0.5, cr );
	c = mix( c, ${J(9062956)}, flower * 0.5 );
	return mix( vec3f( luminance( c ) ), c, 0.85 );
}

fn vegBarkColor( n: f32, n2: f32 ) -> vec3f {
	return mix( mix( ${J(3156514)}, ${J(6051145)}, n * 0.6 + n2 * 0.4 ), ${J(8092522)}, smoothstep( 0.64, 0.8, n2 ) * 0.3 );
}

// leaf-cluster tile of a card: trees broad / narrow leaves by species, shrubs round / narrow
fn vegLeafTile( seed: f32, isShrub: bool ) -> f32 {
	let spT = vegTreeSpecies( seed ); let spS = vegShrubSpecies( seed );
	return select( select( 0.0, 1.0, fract( spT * 0.5 ) > 0.25 ), select( 2.0, 3.0, spS == 1.0 ), isShrub );
}

// alpha-test threshold compensating the coverage loss of the minified (mipmapped) leaf texture
fn vegCoverageThreshold( st: vec2f ) -> f32 {
	let lod = log2( max( max( fwidth( st.x ), fwidth( st.y ) ) * 256.0, 1e-4 ) );
	return mix( 0.5, 0.3, sat( lod / 4.0 ) );
}

// Runtime colour of an impostor fragment (same palette as the near canopy)
fn vegImpostorColor( seed: f32, cr: f32, leaf: f32, bright: f32, isGroup1: bool ) -> vec3f {
	let leafC = vegCanopyLeafColor( seed, cr, isGroup1 ) * ( bright * 1.4 );
	// limbs and twigs seen through the crown gaps are in the crown's shade: dark and a little
	// green-brown, and the leaves dominate the blend (grey limbs made far crowns read grey-beige)
	let barkC = mix( ${J(1841683)}, ${J(3025696)}, ( bright - 0.4 ) / 0.5 );
	let c = mix( barkC, leafC, smoothstep( 0.05, 0.55, leaf ) );
	// far crowns keep their green through the haze (a little more saturated than the near canopy)
	return max( mix( vec3f( luminance( c ) ), c, 1.25 ), vec3f( 0.0 ) );
}
`}),Sl=`
fn vegCanopyMask( in: FragInput, L: vec4f ) -> bool {
	let part = in.vs.vMat.x;
	let isBark = part < 0.5 || part > 4.5;
	// cross-fade into the impostors (outgoing level of the band around uCanopyNear)
	let nearD = select( vegParams.canopyNear.x, vegParams.canopyNear.y, in.vs.vIDat.y < 0.0 );
	let fade = smoothstep( nearD * ( 1.0 - VEG_LOD_BAND / 2.0 ), nearD * ( 1.0 + VEG_LOD_BAND / 2.0 ), length( vegParams.camPos - in.vs.vIPos ) );
	// cards seen edge-on thin out (no sliver lines through the crown)
	let facing = abs( dot( normalize( cross( dpdx( in.P ), dpdy( in.P ) ) ), in.V ) );
	let thr = vegCoverageThreshold( in.uv ) + ( 1.0 - smoothstep( 0.08, 0.35, facing ) ) * 0.45;
	return ( isBark || L.x > thr ) && bayer4( in.pixel ) >= fade;
}
fn vegCanopyLeaf( in: FragInput ) -> vec4f {
	let part = in.vs.vMat.x;
	return vegLeafSample( in.uv, vegLeafTile( in.vs.vIDat.w, part > 2.5 ) );
}
`;function Cl(e){let t=new R({name:`vegCanopyMask`,deps:[xl,e.module],code:Sl});return new Ir({name:`veg-canopy`,side:`double`,modules:[zc,xl,e.module,t],attributes:_l,varyings:{vMat:`vec4f`,vIDat:`vec4f`,vIPos:`vec3f`,vHf:`f32`},vertex:yl(!0)+`
	o.vMat = v.aMat;
	o.vIDat = v.iDat;
	o.vIPos = v.iPos.xyz;
	o.vHf = v.aVeg.x;`,surface:`
	let aMat = in.vs.vMat;
	let part = aMat.x;
	let ao = aMat.y;
	let cr = aMat.z;
	let seed = in.vs.vIDat.w;
	let isBark = part < 0.5 || part > 4.5;
	let isShrub = part > 2.5;
	let spT = vegTreeSpecies( seed ); let spS = vegShrubSpecies( seed );
	// leaf cluster sampled once (first in the fragment shader), shared by the mask and the colour
	let L = vegCanopyLeaf( in );
	if ( ! vegCanopyMask( in, L ) ) { discard; }
	let bright = L.y * 1.4;
	let cell = L.z;
	var c = vegCanopyLeafColor( seed, cr, isShrub ) * bright;
	// species details: red-veined old leaves (sea grape), variegation (croton), flowers (hibiscus)
	let shrub0 = isShrub && spS < 0.5; let shrub1 = isShrub && spS == 1.0; let shrub2 = isShrub && spS > 1.5;
	c = mix( c, ${J(8010274)}, smoothstep( 0.86, 0.98, cell ) * 0.55 * select( 0.0, 1.0, shrub0 ) );
	let vari = select( ${J(8010274)}, ${J(10127920)}, fract( cell * 7.3 ) > 0.5 );
	c = mix( c, vari, smoothstep( 0.72, 0.9, cell ) * 0.55 * select( 0.0, 1.0, shrub1 ) );
	c = select( c, ${J(11740702)}, shrub2 && cell > 0.92 );
	// trees: a few old leaves turning red / yellow before they drop (sea almond)
	let treeK = select( 1.0, 0.0, isShrub );
	c = mix( c, mix( ${J(9075258)}, ${J(8273442)}, step( 0.992, fract( cell * 3.7 ) ) ), step( 0.984, fract( cell * 3.7 ) ) * treeK * 0.6 );
	// sunlit outer / upper leaves brighter and a little yellow-green; shaded interior kept for contrast
	let outer = smoothstep( 0.62, 1.0, ao );
	c = mix( c, c * vec3f( 1.16, 1.22, 0.92 ), outer * 0.7 );
	let leaf = c * mix( 0.55, 1.0, ao );
	// bark: grey-brown with vertical streaks, lichen patches
	let hfB = in.vs.vHf;
	var albedo = leaf;
	if ( isBark ) {
		let st = in.uv;
		let n2 = vegNoise( vec2f( st.x * 6.0, st.y * 0.7 ) );
		var bark = vegBarkColor( vegNoise( vec2f( st.x * 30.0, st.y * 2.5 + seed * 40.0 ) ), n2 );
		// moss and epiphytes on the humid lower trunk and the upper sides of the limbs
		bark = mix( bark, mix( ${J(2898456)}, ${J(4478250)}, n2 ), smoothstep( 0.45, 0.7, vegNoise( vec2f( st.x * 9.0, st.y * 1.3 + seed * 11.0 ) ) + ( 0.35 - hfB ) * 0.6 ) * 0.7 );
		albedo = bark;
	}
	s.albedo = albedo;
	// bark: the trunk under the crown sees little of the sky
	s.ao = select( mix( 0.35, 1.0, ao ), smoothstep( 0.0, 0.75, hfB ) * 0.45 + 0.4, isBark );
	s.roughness = select( select( 0.82, 0.65, ( isShrub && spS < 0.5 ) || ( ! isShrub && spT < 0.5 ) ), 0.92, isBark );
	s.metalness = 0.0;
	s.specularIntensity = 0.15;
	// leaves: canopy (spherical) normals, not flipped on back faces, bent towards the viewer
	// so they are never shaded at grazing angles (avoids a white Fresnel sheen when backlit)
	let geoN = normalize( in.vs.normal );
	s.normal = select( normalize( geoN + in.V * 0.7 ), in.N, isBark );
	s.translucency = vec3f( 0.0 );
	if ( ! isBark ) { s.translucency = vegTranslucency( albedo, geoN, 0.5, in.P ) * ( ao * 0.6 + 0.4 ); }`,shadow:`return vegCanopyMask( in, vegCanopyLeaf( in ) );`})}function wl(e){let t=t=>new Ir({name:`veg-impostor-bake-`+t,side:`double`,lit:!1,modules:[zc,e.module],attributes:{aMat:`vec4f`},varyings:{vMat:`vec4f`,vLocalN:`vec3f`},vertex:`o.vMat = v.aMat; o.vLocalN = v.normal;`,surface:`
	let aMat = in.vs.vMat;
	let part = aMat.x;
	let isBark = part < 0.5 || part > 4.5;
	let isShrub = part > 2.5;
	let st = in.uv;
	let L = vegLeafSample( st, select( 0.0, 2.0, isShrub ) );
	if ( ! ( isBark || L.x > 0.5 ) ) { discard; }`,output:t===`albedo`?`
	let aMat = in.vs.vMat;
	let part = aMat.x;
	let isBark = part < 0.5 || part > 4.5;
	let isShrub = part > 2.5;
	let st = in.uv;
	let vBright = vegLeafSample( st, select( 0.0, 2.0, isShrub ) ).y * 1.4;
	let barkN = vegNoise( vec2f( st.x * 30.0, st.y * 2.5 ) ) * 0.6 + vegNoise( vec2f( st.x * 6.0, st.y * 0.7 ) ) * 0.4;
	let bright = select( vBright / 1.4, barkN * 0.5 + 0.4, isBark );
	r.color = vec4f( bright, select( 1.0, 0.0, isBark ), aMat.z, 1.0 );`:`
	let aMat = in.vs.vMat;
	let part = aMat.x;
	let isBark = part < 0.5 || part > 4.5;
	r.color = vec4f( normalize( in.vs.vLocalN ) * 0.5 + 0.5, select( aMat.y, 0.6, isBark ) );`});return{albedo:t(`albedo`),normal:t(`normal`)}}var Tl=`vegImpostorColor`,El=100,Dl=[140,320],Ol=.5,kl=180,Al=128;function jl(e,t,n=new A){let r=(e-t)*.5,i=(e+t)*.5;return n.set(r,1-Math.abs(r)-Math.abs(i),i).normalize()}function Ml(e){let t=new A().crossVectors(new A(0,1,0),e);return t.lengthSq()<1e-8&&t.set(1,0,0),t.normalize(),{right:t,up:new A().crossVectors(e,t).normalize()}}var Nl=`
fn vegOctDecode( u: f32, v: f32 ) -> vec3f {
	let x = ( u - v ) * 0.5; let z = ( u + v ) * 0.5;
	return normalize( vec3f( x, 1.0 - abs( x ) - abs( z ), z ) );
}
fn vegOctEncode( d: vec3f ) -> vec2f {
	let p = d / ( abs( d.x ) + abs( d.y ) + abs( d.z ) );
	return vec2f( p.x + p.z, p.z - p.x );
}
`,Pl=class{constructor(e,t){this.groups=e,this.bakeMaterials=t;let n=0;for(let t of e)t.variantBase=n,n+=t.variants.length;this.variantCount=n;let r=n*6*Al,i=e=>{let t=new I({label:e,width:r,height:768,format:`rgba8unorm`,mips:!0,usage:[`sample`,`render`,`copyDst`,`copySrc`],sampler:`linearClamp`});return{texture:t,dispose:()=>t.destroy()}};this.rtA=i(`vegImpostorA`),this.rtB=i(`vegImpostorB`),this.depth=new I({label:`vegImpostorDepth`,width:r,height:768,format:`depth32float`,usage:[`render`]}),this.width=r,this.height=768,this.baked=!1}_frameMatrices(e,t){let n=[],r=e.radius,i=e.center;for(let a=0;a<6;a++)for(let o=0;o<6;o++){let s=jl(-1+2*o/5,-1+2*a/5),{right:c,up:l}=Ml(s),u=((e.variantBase+t)*6+o+.5)*2*r,d=(a+.5)*2*r,f=new P().set(c.x,c.y,c.z,-i.dot(c)+u,l.x,l.y,l.z,-i.dot(l)+d,s.x,s.y,s.z,-i.dot(s),0,0,0,1);n.push(f)}return n}bake(e=null){let t=performance.now(),n=e&&e.render&&e.collect?e:this._mr||=new di,r=this.depth.view(),i=!0;for(let[e,t]of[[this.rtA,this.bakeMaterials.albedo],[this.rtB,this.bakeMaterials.normal]]){i=!0;let a=e.texture.view({dimension:`2d`,baseMipLevel:0,mipLevelCount:1});this.groups.forEach((e,o)=>{let s=e.radius,c=new rn(0,this.variantCount*6*2*s,12*s,0,.1,6*s+10);c.position.set(0,0,3*s+2),c.lookAt(0,0,-1),c.updateMatrixWorld(),c.updateProjectionMatrix();let l=(this._blocks||=[])[o]||(this._blocks[o]=xr(`vegImpostorBake`+o));wr(c,this.width,this.height,{block:l});let u=new xt;e.variants.forEach((n,r)=>{let i=this._frameMatrices(e,r),a=new Xt(n,t,i.length);i.forEach((e,t)=>a.setMatrixAt(t,e)),a.frustumCulled=!1,u.add(a)}),u.updateMatrixWorld(!0),n.render(u,{camera:c,frameBlock:l,kind:`color`,label:`veg impostor bake`,colorViews:[a],colorFormats:[`rgba8unorm`],depthView:r,depthFormat:`depth32float`,clearColors:[i?[0,0,0,0]:null],clearDepth:0}),i=!1}),Gi(e.texture)}this.baked=!0,this.bakeMs=performance.now()-t}createMaterial({isGroup1:e,variantOf:t,colorOf:n,nearDist:r}){let[i,a]=this.groups,o=this.variantCount*6,s=(e,t)=>`select( ${q(e)}, ${q(t)}, g1Flag )`,c=`
	let g1Flag = ${e(`iDat`)};
	let R = ${s(i.radius,a.radius)};
	let Rh = ${s(i.rh,a.rh)};
	let Hv = ${s(i.hv,a.hv)};
	let Cy = ${s(i.center.y,a.center.y)};
	let vBase = ${s(i.variantBase,a.variantBase)};`,l=new Ir({name:`veg-impostor`,side:`double`,modules:[zc,xl],textures:{vegImpA:this.rtA.texture,vegImpB:this.rtB.texture},attributes:{iPos:`vec4f`,iDat:`vec4f`},varyings:{vImp:`vec4f`,vIPos4:`vec4f`,vIDat:`vec4f`},vertex:`
	let iPos = v.iPos;
	let iDat = v.iDat;
${c}
	let base = iPos.xyz;
	let sy = abs( iDat.y );
	// LOD window: from the near plant's hand-over distance to the fade-out, else collapsed
	let d = length( vegParams.camPos - base );
	let vis = select( 0.0, 1.0, d >= ( ${r(`g1Flag`)} ) * ( 1.0 - VEG_LOD_BAND / 2.0 ) && d < select( draw.params.w, ${q(kl)}, g1Flag ) );
	// far away the forest is thinned out: fewer, proportionally larger crowns (grown about
	// the base) keep the canopy closed
	let thin = smoothstep( ${q(Dl[0])}, ${q(Dl[1])}, d );
	let keep = select( 1.0, 0.0, fract( iDat.w * 91.7 ) < thin * ${q(Ol)} );
	let grow = thin * ${q(1/Math.sqrt(.5)-1)} + 1.0;
	let s = iPos.w * grow;
	let C = base + vec3f( 0.0, Cy * s * sy, 0.0 );
	// sway of the whole crown (matches the near plants' trunk sway amplitude)
	let w = vegWindStrength();
	let g = vegGustAt( base.xz );
	let ph0 = iDat.w * 6.2832;
	let sway = ( w * w * 0.009 * ( g * 0.8 + 0.3 ) + sin( frame.time * 0.9 + ph0 ) * w * 0.0045 * ( g + 0.4 ) ) * iDat.z * 0.45;
	let swayV = vegWindDir3() * sway;
	let Cs = C + swayV;
	o.vImp = vec4f( swayV, s );
	o.vIPos4 = iPos;
	o.vIDat = iDat;
	let toCam = normalize( frame.cameraPos - Cs );
	let right = normalize( cross( VEG_UP, toCam ) + vec3f( 1e-4, 0.0, 0.0 ) );
	let up = cross( toCam, right );
	// quad fitted to the plant's projected extent: its horizontal radius across, from above
	// the crown disc, from the side the (stretched) height
	let k = s * vis * keep;
	let ty = abs( toCam.y );
	let halfW = Rh * k;
	let halfH = ( Hv * sy * sqrt( max( 1.0 - ty * ty, 0.0 ) ) + Rh * ty ) * k;
	let p = v.position;
	v.useWorld = true;
	v.worldPos = Cs + right * ( p.x * halfW ) + up * ( p.y * halfH );
	// (three: the geometry normal is left as is, +Z of the quad)
	v.worldNormal = v.normal;`,surface:`
	let iPos = in.vs.vIPos4;
	let iDat = in.vs.vIDat;
${c}
	let base = iPos.xyz;
	let si = in.vs.vImp.w;
	let sy = abs( iDat.y );
	let yaw = iDat.x;
	let cyw = cos( yaw ); let syw = sin( yaw );
	let C = base + vec3f( 0.0, Cy * si * sy, 0.0 ) + in.vs.vImp.xyz;
	// world -> plant-local (unstretched, centred): rotate by -yaw, divide by the scale
	let Ow = frame.cameraPos - C;
	let Dw = in.P - frame.cameraPos;
	let scl = vec3f( si, si * sy, si );
	let O = vec3f( Ow.x * cyw - Ow.z * syw, Ow.y, Ow.x * syw + Ow.z * cyw ) / scl;
	let D = vec3f( Dw.x * cyw - Dw.z * syw, Dw.y, Dw.x * syw + Dw.z * cyw ) / scl;
	let vdir = normalize( O );
	let vd = normalize( vec3f( vdir.x, max( vdir.y, 0.02 ), vdir.z ) );
	let gg = ( vegOctEncode( vd ) * 0.5 + 0.5 ) * ${q(5)};
	let gi = floor( clamp( gg, vec2f( 0.0 ), vec2f( ${q(4.9990000000000006)} ) ) );
	let fr = gg - gi;
	let upper = fr.x + fr.y > 1.0;
	// triangle of the cell containing g, barycentric weights
	let i0 = select( gi, gi + 1.0, upper );
	let i1 = select( gi + vec2f( 1.0, 0.0 ), gi + vec2f( 0.0, 1.0 ), upper );
	let i2 = select( gi + vec2f( 0.0, 1.0 ), gi + vec2f( 1.0, 0.0 ), upper );
	let w0 = select( 1.0 - fr.x - fr.y, fr.x + fr.y - 1.0, upper );
	let w1 = select( fr.x, 1.0 - fr.x, upper );
	let w2 = select( fr.y, 1.0 - fr.y, upper );
	let variant = vBase + ${t(`iDat.w`,`g1Flag`)};
	var vA = vec4f( 0.0 ); var vB = vec4f( 0.0 );
	// near: blend the three frames around the view direction; far: the dominant frame only
	let blend = length( vegParams.camPos - base ) < ${q(El)};
	if ( blend ) {
		let s0 = vegImpSample( i0, O, D, variant, R );
		let s1 = vegImpSample( i1, O, D, variant, R );
		let s2 = vegImpSample( i2, O, D, variant, R );
		vA = s0[ 0 ] * w0 + s1[ 0 ] * w1 + s2[ 0 ] * w2;
		vB = s0[ 1 ] * w0 + s1[ 1 ] * w1 + s2[ 1 ] * w2;
	} else {
		let iMax = select( select( i2, i1, w1 >= w2 ), i0, w0 >= max( w1, w2 ) );
		let sm = vegImpSample( iMax, O, D, variant, R );
		vA = sm[ 0 ];
		vB = sm[ 1 ];
	}
	// cross-fade from the near geometry (incoming level of the band around nearDist)
	let nd = ${r(`g1Flag`)};
	let fade = smoothstep( nd * ( 1.0 - VEG_LOD_BAND / 2.0 ), nd * ( 1.0 + VEG_LOD_BAND / 2.0 ), length( vegParams.camPos - base ) );
	if ( ! ( vA.w > 0.42 && bayer4( in.pixel ) < fade ) ) { discard; }

	let cov = max( vA.w, 1e-3 );
	let bright = vA.x / cov; let leaf = vA.y / cov; let cr = vA.z / cov;
	// exposure (baked crown AO): the inside and underside of the crown in deep shade
	let ex = vB.w / cov;
	let albedo = ${n({seed:`iDat.w`,cr:`cr`,leaf:`leaf`,bright:`bright`,isGroup1:`g1Flag`})} * mix( 0.26, 1.0, ex * ex ) * ( bright * 0.6 + 0.7 );
	s.albedo = albedo;
	// B is written where A has coverage: un-premultiply the filtered edges by A's coverage
	let nl = vB.xyz / max( vA.w, 1e-3 ) * 2.0 - 1.0;
	// local -> world: inverse-transpose of the stretch, then the yaw rotation
	let ns = vec3f( nl.x, nl.y / sy, nl.z );
	let nw = normalize( vec3f( ns.x * cyw + ns.z * syw, ns.y, ns.z * cyw - ns.x * syw ) );
	s.normal = normalize( nw + in.V * 0.12 );
	s.roughness = 0.85;
	s.metalness = 0.0;
	s.specularIntensity = 0.12;
	// backlit crowns glow at the edges (light through the leaves), like the near canopy
	s.translucency = vegTranslucency( albedo, in.N, 0.35, in.P );`});return l.modules.push(new zc.constructor({name:`vegImpostorSample`,deps:[zc],code:Nl+`
fn vegImpSample( ij: vec2f, O: vec3f, D: vec3f, variant: f32, Rf: f32 ) -> array<vec4f, 2> {
	let d = vegOctDecode( ij.x / ${q(5)} * 2.0 - 1.0, ij.y / ${q(5)} * 2.0 - 1.0 );
	let right = normalize( cross( VEG_UP, d ) );
	let up = cross( d, right );
	let t = - dot( O, d ) / dot( D, d );
	let P = O + D * t;
	let a = dot( P, right ) / Rf; let b = dot( P, up ) / Rf;
	let cu = variant * ${q(6)} + ij.x + ( a * 0.5 + 0.5 );
	let cv = ij.y + ( b * 0.5 + 0.5 );
	let inCell = abs( a ) < 1.0 && abs( b ) < 1.0;
	// render targets are stored top row first: flip v
	let st = vec2f( cu / ${q(o)}, 1.0 - cv / ${q(6)} );
	let k = select( 0.0, 1.0, inCell );
	return array<vec4f, 2>( textureSample( vegImpA, smpLinearClamp, st ) * k, textureSample( vegImpB, smpLinearClamp, st ) * k );
}
`})),l}};function Fl(){let e=new Wt;return e.setAttribute(`position`,new jt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),e.setAttribute(`normal`,new jt([0,0,1,0,0,1,0,0,1,0,0,1],3)),e.setIndex([0,1,2,0,2,3]),e.boundingSphere=new Ae(new A,1e7),e}var Il=[{grid:4,leaves:6,width:.34},{grid:4,leaves:8,width:.2},{grid:3,leaves:6,width:.45},{grid:3,leaves:8,width:.22}],Ll=1024,Rl=`
struct VegRosette { d: f32, bright: f32, cell: f32 };
fn vegRosette( st: vec2f, G: f32, nLeaves: f32, width: f32, rot: f32 ) -> VegRosette {
	let cuv = st * G;
	let cell = floor( cuv );
	let h1 = vegHash12( cell + rot * 17.3 );
	let h2 = vegHash12( cell * 1.7 + rot * 31.1 + 5.2 );
	let h3 = vegHash12( cell * 2.3 + rot * 7.7 + 1.9 );
	// whorls of different sizes, off the cell centres; some cells stay empty (sky holes)
	let sc = mix( 0.62, 1.05, h2 ) * select( 1.0, 0.001, h3 < 0.2 );
	let off = vec2f( h1 - 0.5, h3 - 0.5 ) * 0.34;
	let p = ( fract( cuv ) - 0.5 - off ) * 2.0 / sc;
	let r = length( p );
	let ang = atan2( p.y, p.x ) + rot + h1 * 6.2832;
	let sector = ang * ( nLeaves / 6.2832 );
	let k = floor( sector + 0.5 );
	// irregular leaf spacing and lengths so clusters don't read as flowers
	let lr = vegHash12( vec2f( k, h1 * 13.7 ) );
	let jit = ( lr - 0.5 ) * 0.8;
	let L = mix( 0.5, 1.0, fract( lr * 7.13 ) );
	// each blade curves a little to one side (leaves, not a star)
	let curve = ( fract( lr * 3.31 ) - 0.5 ) * 0.9;
	let da = ( sector - k - jit ) * ( 6.2832 / nLeaves ) - curve * ( r / L ) * ( r / L ) * 0.35;
	let along = r * cos( da );
	let across = abs( r * sin( da ) );
	let x = along / L;
	let bx = clamp( ( x - 0.18 ) / 0.82, 0.0, 1.0 ); // blade after a short petiole
	// obovate (widest beyond the middle) with a short pointed tip
	let shape = pow( max( sin( pow( bx, 0.62 ) * 3.14159 ), 0.0 ), 0.8 ) * ( smoothstep( 1.0, 0.86, bx ) * 0.25 + 0.75 );
	let hw = shape * width * L;
	let inBlade = x > 0.16 && x < 1.0;
	let dBlade = select( -1.0, hw - across, inBlade );
	let dPet = select( -1.0, 0.012 - across, x < 0.2 );
	var o: VegRosette;
	o.d = max( dBlade, dPet );
	let vein = smoothstep( 0.03, 0.0, across ) * smoothstep( 0.05, 0.25, bx ) * smoothstep( 1.0, 0.7, bx );
	o.bright = ( ( h1 * 0.7 + lr * 0.3 ) * 0.22 + 0.88 ) * mix( 0.82, 1.08, bx ) * ( vein * 0.09 + 1.0 );
	o.cell = h1 * 0.7 + lr * 0.3;
	return o;
}
`,zl=class{constructor(){this.texture=new I({label:`vegLeafClusters`,width:Ll,height:Ll,format:`rgba8unorm`,mips:!0,usage:[`sample`,`render`,`copyDst`,`copySrc`],sampler:`anisoRepeat`}),this.rt={dispose:()=>this.texture.destroy()},this.baked=!1;let e=this;this.module=new R({name:`vegLeafAtlas`,deps:[zc],bindings:{vegLeafTex:{texture:()=>e.texture}},code:`
// sample tile ( 0..3 ) at card uv st -> ( coverage, bright, cell, 1 )
fn vegLeafSample( st: vec2f, tile: f32 ) -> vec4f {
	let tuv = ( vec2f( fract( tile * 0.5 ) * 2.0, floor( tile * 0.5 ) ) + clamp( st, vec2f( 0.004 ), vec2f( 0.996 ) ) ) * 0.5;
	return textureSample( vegLeafTex, smpAnisoRepeat, vec2f( tuv.x, 1.0 - tuv.y ) );
}
`})}bake(){let e=``;for(let t=0;t<4;t++){let n=Il[t];e+=`\tif ( tid == ${t}.0 ) {\n`;for(let t=0;t<4;t++){let r=(t%2-.5)*Bl*.5,i=(Math.floor(t/2)-.5)*Bl*.5;e+=`\t\t{
			let q = local + vec2f( ${q(r)}, ${q(i)} );
			let A = vegRosette( q, ${q(n.grid)}, ${q(n.leaves)}, ${q(n.width)}, 0.0 );
			let B = vegRosette( q + ${q(.5/n.grid)}, ${q(n.grid)}, ${q(n.leaves)}, ${q(n.width)}, 2.1 );
			let inA = A.d > 0.0; let inB = B.d > 0.0;
			if ( inA || inB ) {
				cov += 0.25;
				bright += select( B.bright, A.bright, inA ) * 0.25;
				cellR += select( B.cell, A.cell, inA ) * 0.25;
			}
		}\n`}e+=`	}
`}new Vr({label:`veg leaf atlas bake`,modules:[zc],colorFormats:[`rgba8unorm`],code:Rl+`
fn fragment( in: FSIn ) -> vec4f {
	// three's quad uv: v up
	let st = vec2f( in.uv.x, 1.0 - in.uv.y );
	let tile = floor( st * 2.0 );
	let tid = tile.x + tile.y * 2.0;
	let local = fract( st * 2.0 );
	var cov = 0.0; var bright = 0.0; var cellR = 0.0;
${e}
	// colour channels are stored un-premultiplied (valid where covered)
	let inv = 1.0 / max( cov, 1e-3 );
	return vec4f( cov, bright * inv / 1.4, cellR * inv, 1.0 );
}
`}).render({colorViews:[this.texture],clear:[0,0,0,0]}),Gi(this.texture),this.baked=!0}},Bl=1/(Ll/2),Vl=(e,t)=>`vegVariantOf( ${e}, ${t} )`;function Hl(e){if(!e)return{};let t=typeof e.getFootprints==`function`?e.getFootprints():[],n=[];for(let t of[e.path,...e.sidePaths||[]]){if(!t||!t.samples)continue;let e=[];for(let n=0;n<t.samples.length;n+=5)e.push([t.samples[n].p.x,t.samples[n].p.z]);let r=t.samples[t.samples.length-1];e.push([r.p.x,r.p.z]),n.push({points:e,width:t.width??1.8})}return{footprints:t,paths:n.length?n:null}}function Ul(e){let t=e.attributes.position,n=new A,r=1/0,i=-1/0;for(let e=0;e<t.count;e++)n.fromBufferAttribute(t,e),r=Math.min(r,n.y),i=Math.max(i,n.y);let a=new A(0,(r+i)*.5,0),o=0,s=0;for(let e=0;e<t.count;e++)n.fromBufferAttribute(t,e),o=Math.max(o,n.distanceTo(a)),s=Math.max(s,Math.hypot(n.x,n.z));return{center:a,radius:o*1.02,rh:s*1.03,hv:(i-r)*.5*1.03}}var Wl=120,Gl=65,Kl=45,ql=[120,140],Jl=[85,105],Yl=[100,120],Xl=[2600,2800],Zl=class{constructor({scene:e,terrain:t,village:n=null,grassland:r=!1}){this.scene=e,this.terrain=t,this.group=new bt,this.group.name=`Vegetation`,this.group.matrixAutoUpdate=!1;let i=performance.now(),a=new gs(t,Hl(n));this.site=a;let o=r?ws(a):Ss(a);this.records=o;let s=performance.now(),c=r?Ts(a):Cs(a);this.grassMask=c,this.timings={scatter:s-i,mask:performance.now()-s};let l=vl();this.leafAtlas=new zl;let u=Cl(this.leafAtlas);bl.value.set(Gl,Kl);let d=_c(),f=r?null:Zs(),p=r?null:Qs(),m=r?null:yc(),h=r?null:Mc(),g=r?null:jc(),_=r?null:bc(),v=pc().geometry,y=mc().geometry,b=[],x=[];for(let e=0;e<3;e++)b.push(gc(v,hc,e*8));for(let e=0;e<2;e++)x.push(gc(y,hc,(3+e)*8));this.atlas=new Pl([{variants:b,...Ul(v)},{variants:x,...Ul(y)}],wl(this.leafAtlas));let S=this.atlas.createMaterial({isGroup1:e=>`${e}.y < 0.0`,variantOf:(e,t)=>Vl(e,t),colorOf:({seed:e,cr:t,leaf:n,bright:r,isGroup1:i})=>`${Tl}( ${e}, ${t}, ${n}, ${r}, ${i} )`,nearDist:e=>`select( vegParams.canopyNear.x, vegParams.canopyNear.y, ${e} )`});this.materials=[l,u,S],this.types=[];let C=e=>{this.types.push(e);for(let t of e.meshes)this.group.add(t);return e};if(!r){this.palms=C(new Ps(`palms`,o.palms,{nearRange:Wl,margin:10,refreshDistance:6,farExcludeNear:!0,sortNear:!0,near:[{geometry:f.geometry,material:l,castShadow:!0,name:`veg-palm`}],far:{parts:[{geometry:p.geometry,material:l,name:`veg-palm-far`}],fade:Xl}}));let e=[...o.youngPalms.map(e=>({...e,seed:vc.YOUNG+e.seed*.999,qr:ql[1]+10})),...o.ferns.map(e=>({...e,seed:vc.FERN+e.seed*.999,qr:Rc[1]+8}))],t=o.bananas.map(e=>({...e,H:.02,seed:(e.seed<.5?vc.BANANA:vc.BANANA_B)+e.seed*.999,qr:Yl[1]+10}));this.bananas=C(new Ps(`bananas`,t,{fade:Yl,margin:10,sortNear:!0,near:[{geometry:_.geometry,material:l,castShadow:!0,name:`veg-banana`}]})),this.understory=C(new Ps(`understory`,e,{fade:ql,margin:10,sortNear:!0,near:[{geometry:m.geometry,material:l,castShadow:!1,name:`veg-understory`}]}));let n=o.monsteras.map(e=>({...e,seed:Ac.MONSTERA+e.seed*.999,qr:Jl[1]+10}));this.monsteras=C(new Ps(`monsteras`,n,{fade:Jl,margin:10,sortNear:!0,near:[{geometry:g.geometry,material:l,castShadow:!0,name:`veg-monstera`}]}));let r=[...o.elephantEars.map(e=>({...e,seed:Ac.ELEPHANT+e.seed*.999,qr:Jl[1]+10})),...o.heliconias.map(e=>({...e,seed:Ac.HELICONIA+e.seed*.999,qr:Jl[1]+10})),...o.strelitzias.map(e=>({...e,seed:Ac.STRELITZIA+e.seed*.999,qr:Jl[1]+10}))];this.broadleaf=C(new Ps(`broadleaf`,r,{fade:Jl,margin:10,sortNear:!0,near:[{geometry:h.geometry,material:l,castShadow:!0,name:`veg-broadleaf`}]}))}let w=[...o.trees.map(e=>({...e,qr:75})),...o.shrubs.map(e=>({...e,qr:55}))];this.canopy=C(new Ps(`canopy`,w,{nearRange:Gl,margin:10,sortNear:!0,sortFar:!0,farRefresh:16,near:[{geometry:d.geometry,material:u,castShadow:!0,name:`veg-canopy`}],far:{parts:[{geometry:Fl(),material:S,name:`veg-canopy-far`}],fade:Xl}}));for(let e of[this.palms,this.understory,this.bananas,this.monsteras,this.broadleaf,this.canopy])if(e)for(let t of e.meshes)t.renderOrder=1;for(let e of this.canopy.far.meshes)e.renderOrder=2;this.renderer=!0,this.grass=new sl({terrain:t,mask:c,grassland:r});for(let e of this.grass.meshes)this.group.add(e);this.geometryTriangles=r?{canopy:d.triangles,tree:d.treeTriangles,shrub:d.shrubTriangles,impostor:2,grassNearPatch:this.grass.patchTris[0],grassMidPatch:this.grass.patchTris[1],grassFarPatch:this.grass.patchTris[2],grassVfarPatch:this.grass.patchTris[3]}:{palmNear:f.triangles,palmFar:p.triangles,understory:m.triangles,understoryPerKind:m.perKind,broadleaf:h.triangles,broadleafPerKind:h.perKind,monstera:g.triangles,bananas:_.triangles,canopy:d.triangles,tree:d.treeTriangles,shrub:d.shrubTriangles,impostor:2,grassNearPatch:this.grass.patchTris[0],grassMidPatch:this.grass.patchTris[1],grassFarPatch:this.grass.patchTris[2]},this.group.updateMatrixWorld(!0),e.add(this.group),this._camPos=new A,this.timings.total=performance.now()-i}update(e,t){if(this.renderer&&!this.atlas.baked){let e=performance.now();this.leafAtlas.bake(this.renderer),this.atlas.bake(this.renderer),this.timings.bake=performance.now()-e}t.updateMatrixWorld();let n=t.getWorldPosition(this._camPos);Fc.value.copy(n);let r=B.windDir.value,i=.7*B.windSpeed.value+1.5;Ic.value.x+=r.x*i*e,Ic.value.y+=r.y*i*e;let a=null,o=null,s=0,c=0;for(let e of this.types){let t=e.overdue(n);t>e.margin-e.refreshDistance?e.update(n,!0):t>s?(o=a,c=s,a=e,s=t):t>c&&(o=e,c=t)}a&&a.update(n,!0),o&&o.update(n,!0),this.grass.update(t)}refreshTerrain(){this.grass.heightTex.needsUpdate=!0}stats(){let e={},t=0,n=0;for(let r of this.types){let i={};for(let[e,a]of[[`near`,r.near],[`far`,r.far]])a&&(i[e]={instances:a.count,triangles:a.triangles,meshes:a.meshes.length},t+=a.triangles,a.count>0&&(n+=a.meshes.length));e[r.name]={total:r.inst.count,...i}}let r=this.grass;return e.grass={nearCells:r.levels[0].count,midCells:r.levels[1].count,farCells:r.levels[2].count,vfarCells:r.levels[3].count,triangles:r.triangles},t+=r.triangles,n+=r.levels.filter(e=>e.count>0).length,{types:e,triangles:t,drawCalls:n,villagePalms:this.records.villagePalms,rules:K}}dispose(){this.scene.remove(this.group);for(let e of this.types)for(let t of e.meshes)t.geometry.dispose();for(let e of this.materials)e.dispose();this.atlas.rtA.dispose(),this.leafAtlas.rt.dispose(),this.atlas.rtB.dispose(),this.atlas.depth.destroy(),this.grass.dispose()}},Ql=512,$l=.6,eu=.08,tu=new L(`GroundBounceParams`,{sun:[`vec3f`,new A(0,1,0)],strength:[`f32`,1],ready:[`f32`,0]},{label:`groundBounce`}),nu={strength:tu.fields.strength,module:null,exclude(e){e&&e.setDefine&&e.setDefine(`NO_GROUND_BOUNCE`,1)}},ru=(e,t,n)=>{let r=new Se().setRGB(e,t,n,me);return`vec3f( ${r.r.toFixed(6)}, ${r.g.toFixed(6)}, ${r.b.toFixed(6)} )`};function iu({terrain:e,clouds:t=null}){let n=e=>new I({label:e,width:Ql,height:Ql,format:`rgba16float`,usage:[`sample`,`storage`]}),r=n(`groundBounceRaw`),i=n(`groundBounce`),a=tu.fields.sun,o=tu.fields.ready,s=new yi({label:`Ground Bounce Bake`,modules:[z,e.module],bindings:{groundBounceParams:{uniform:tu},gbRawOut:{storageTexture:r,access:`write`}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let ij = vec2f( gid.xy );
	let xz = ( ij + 0.5 ) / ${Ql}.0 * terrainParams.size + terrainParams.origin;
	let h = terrainHeightAt( xz );
	let nr = terrainNormalRockLevel( xz, 1.0 );
	let n = vec3f( nr.x, sqrt( sat( 1.0 - dot( nr.xy, nr.xy ) ) ), nr.y );
	let slope = 1.0 - n.y;
	let sp = terrainSplatLevel( xz, 1.0 );
	let L = groundBounceParams.sun;
	// land cover (same masks as the terrain material, coarsely)
	let rockW = sat( smoothstep( 0.35, 0.6, nr.z * 0.7 + smoothstep( 0.3, 0.62, slope ) * 0.5 ) );
	let sandW = smoothstep( 0.3, 0.72, sp.x ) * ( 1.0 - rockW );
	let jungleW = sat( smoothstep( 9.0, 24.0, h ) + smoothstep( 0.18, 0.36, slope ) );
	let veg = mix( ${ru(.3,.36,.16)}, ${ru(.12,.17,.07)}, jungleW );
	// dry coral sand, darker where damp near the water line
	let sand = ${ru(.86,.79,.66)} * mix( 0.6, 1.0, smoothstep( 0.2, 1.2, h ) );
	let land = mix( mix( veg, sand, sandW ), vec3f( 0.08, 0.075, 0.065 ), rockW );
	// sea: the seabed (sand in the bay) seen through the water column, down and back up
	let depth = max( frame.seaLevel - h, 0.0 );
	let seabed = mix( ${ru(.62,.58,.48)}, ${ru(.25,.3,.22)}, smoothstep( 0.3, 0.7, sp.y ) );
	let sea = seabed * exp( ( frame.waterAbsorption + frame.waterScattering ) * depth * -2.4 ) * 0.9 + vec3f( 0.01, 0.025, 0.03 );
	let wet = smoothstep( 0.05, -0.1, h - frame.seaLevel );
	let albedo = mix( land, sea, wet );
	let nSurf = mix( n, vec3f( 0.0, 1.0, 0.0 ), wet );
	// heightfield sun shadow at the ground (same filtering as terrainSunShadowAt)
	let top = max( h, frame.seaLevel );
	let vis = terrainSunShadowAt( vec3f( xz.x, top, xz.y ) );
	let E = max( dot( nSurf, L ), 0.0 ) * vis * smoothstep( -0.02, 0.05, L.y );
	let o = max( albedo * E - ${eu} * max( L.y, 0.0 ), vec3f( 0.0 ) );
	textureStore( gbRawOut, vec2u( gid.xy ), vec4f( o, top ) );
}
`}),c=[1,4,6,4,1],l=``;for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++)l+=`	sum += textureLoad( gbRaw, clamp( c + vec2i( ${t}, ${e} ), vec2i( 0 ), vec2i( 511 ) ), 0 ) * ${(c[t+2]*c[e+2]/256).toFixed(8)};\n`;let u=new yi({label:`Ground Bounce Blur`,bindings:{gbRaw:{texture:r,sampleType:`unfilterable-float`},gbMapOut:{storageTexture:i,access:`write`}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let c = vec2i( gid.xy );
	var sum = vec4f( 0.0 );
${l}	textureStore( gbMapOut, vec2u( gid.xy ), sum );
}
`}),d=()=>{a.value.copy(B.sunDir.value),s.dispatch([Ql/8,Ql/8,1]),u.dispatch([Ql/8,Ql/8,1]),o.value=1},f=!1,p=e.updateSunShadow.bind(e);e.updateSunShadow=(e,t=!1)=>{let n=p(e,t);return(n||!f)&&d(e),f=!0,n};let m=t&&t.module?`let cloud = cloudsShadow( P.xz );`:`let cloud = 1.0;`;return nu.module=new R({name:`hook-bounce`,deps:[z,e.module,...t&&t.module?[t.module]:[]],uniforms:tu,uniformName:`groundBounceParams`,bindings:{groundBounceMap:{texture:i,sampleType:`unfilterable-float`}},code:`
fn hookBounce( P: vec3f, Nw: vec3f ) -> vec3f {
#if IS_WATER || NO_GROUND_BOUNCE
	return vec3f( 0.0 );
#else
	let view = sat( Nw.y * -0.5 + 0.5 );
	var E = vec3f( 0.0 );
	if ( view > 0.03 && P.y > frame.seaLevel - 0.3 && groundBounceParams.strength > 0.0 && groundBounceParams.ready > 0.0 ) {

		let st = clamp( terrainUvOf( P.xz ) * ${Ql}.0 - 0.5, vec2f( 0.0 ), vec2f( ${Ql}.0 - 1.001 ) );
		let i = vec2i( floor( st ) );
		let t = fract( st );
		let s = mix(
			mix( textureLoad( groundBounceMap, i, 0 ), textureLoad( groundBounceMap, i + vec2i( 1, 0 ), 0 ), t.x ),
			mix( textureLoad( groundBounceMap, i + vec2i( 0, 1 ), 0 ), textureLoad( groundBounceMap, i + vec2i( 1, 1 ), 0 ), t.x ),
			t.y
		);
		let above = P.y - s.w;
		// nothing from a surface above the receiver (under water: the sea surface is above), a
		// little less high up where more of the view is taken by other objects
		let fade = smoothstep( -0.3, 0.3, above ) * mix( 0.4, 1.0, smoothstep( 30.0, 4.0, above ) );
		${m}
		// a face turned away from a low sun looks at the ground its object shades (a long shadow)
		let Lh = frame.sunDir.xz / max( length( frame.sunDir.xz ), 1e-3 );
		let selfShade = 1.0 - sat( -dot( Nw.xz, Lh ) ) * sat( 1.0 - frame.sunDir.y ) * 0.6;
		E = s.xyz * frame.sunColor * cloud * ( view * fade * selfShade * groundBounceParams.strength * ${$l} );

	}
	// the lighting adds hookBounce * diffuse colour: irradiance / PI (three: E * diffuse / PI)
	return E * INV_PI;
#endif
}
`}),sr.set(`bounce`,nu.module),{bake:d,map:i,raw:r}}var au=8,ou=()=>Array.from({length:au},()=>new j),su=new L(`LocalLightParams`,{pos:[`vec4f[${au}]`,ou()],col:[`vec4f[${au}]`,ou()],dir:[`vec4f[${au}]`,ou()],count:[`i32`,0],flashOn:[`f32`,0],flashCone:[`vec2f`,new E(.99,.82)],flashPos:[`vec3f`,new A],flashDir:[`vec3f`,new A(0,0,-1)],flashCol:[`vec3f`,new A]},{label:`localLights`}),cu=su.fields,lu={array:cu.pos.value},uu={array:cu.col.value},du={array:cu.dir.value},fu=cu.count,pu={on:cu.flashOn,pos:cu.flashPos,dir:cu.flashDir,col:cu.flashCol,cone:cu.flashCone},mu=new R({name:`localLights`,deps:[z,gr],uniforms:su,uniformName:`localLights`,code:`
// spot profile shared by the shading, the beam and the snow: hot centre, soft edge, faint spill
fn localLightsSpotProfile( cd: f32, cosInner: f32, cosOuter: f32 ) -> f32 {
	let m = smoothstep( cosOuter, cosInner, cd );
	return max( m * m, smoothstep( cosOuter - 0.55, cosOuter, cd ) * 0.05 );
}

fn hookLocalLights( s: Surface, P: vec3f, N: vec3f, V: vec3f, acc: ptr<function, LightAccum> ) {
#if !IS_WATER && !NO_LOCAL_LIGHTS
	let diffuseColor = s.albedo * ( 1.0 - s.metalness );
	let specF0 = mix( vec3f( 0.04 ) * s.specularIntensity, s.albedo, s.metalness );
	let specF90 = mix( s.specularIntensity, 1.0, s.metalness );
	let rough = clamp( s.roughness, 0.03, 1.0 );
	for ( var i = 0; i < localLights.count; i++ ) {
		let p = localLights.pos[ i ];
		let d = p.xyz - P;
		let d2 = dot( d, d );
		if ( d2 < p.w ) {
			let c = localLights.col[ i ];
			let sd = localLights.dir[ i ];
			let L = d * inverseSqrt( max( d2, 1e-6 ) );
			// smooth range window (1 - (d/r)^4)^2 on the inverse-square law
			let x = d2 / p.w;
			let win = sat( 1.0 - x * x );
			// spot: hot centre, soft edge at the outer cone, faint wide spill
			let spot = localLightsSpotProfile( dot( -L, sd.xyz ), c.w, sd.w );
			// Beer-Lambert over the underwater part of the path (straight, mean sea level): red dies
			// within metres, so what the torch lights far away under water is dim and blue-green
			let r = d2 * inverseSqrt( max( d2, 1e-6 ) );
			let under = sat( ( frame.seaLevel - min( P.y, p.y ) ) / max( abs( p.y - P.y ), 1e-3 ) );
			let Tw = exp( -( frame.waterAbsorption + frame.waterScattering ) * ( r * under ) );
			// the + 0.15 m^2 softens the near field of a lamp's finite size (no hot spot on the post)
			let lightColor = c.xyz * Tw * ( win * win * spot / ( d2 + 0.15 ) );
			let irradiance = max( dot( N, L ), 0.0 ) * lightColor;
#if LOCAL_LIGHTS_CHEAP
			// foliage (heavy overdraw): Lambert only
			( *acc ).directDiffuse += irradiance * diffuseColor * INV_PI;
#else
			( *acc ).directDiffuse += irradiance * diffuseColor * INV_PI;
			( *acc ).directSpecular += irradiance * BRDF_GGX( L, V, N, specF0, specF90, rough );
#if SHEEN
			( *acc ).directSpecular += irradiance * BRDF_Sheen( L, V, N, s.sheenColor, max( s.sheenRoughness, 0.07 ) );
#endif
#endif
		}
	}
#endif
}
`});sr.set(`localLights`,mu),new A;var hu=new A,gu=new A,_u=new A,vu=(e,t,n)=>{let r=Math.min(1,Math.max(0,(e-t)/(n-t)));return r*r*(3-2*r)},yu=class{constructor(){this.sources=[],this.enabled=!0,this.strength=1,this.flashlight={on:!1,intensity:55,range:30,color:new Se(1,.71,.49),cosInner:Math.cos(T.degToRad(9)),cosOuter:Math.cos(T.degToRad(35)),position:new A,dir:new A(0,0,-1),primed:!1},this._list=[],this.time=0,this.active=0}add(e){return e.phase=e.phase??Math.random()*100,this.sources.push(e),e}toggleFlashlight(e=!this.flashlight.on){return this.flashlight.on=e,this.flashlight.primed=!1,e}update(e,t){this.time+=t;let n=0;pu.on.value=this.flashlight.on&&this.enabled?1:0;let r=lu.array,i=uu.array,a=du.array,o=this.flashlight;if(o.on&&this.enabled){e.updateMatrixWorld();let s=e.matrixWorld.elements;gu.set(s[0],s[1],s[2]).normalize(),_u.set(s[4],s[5],s[6]).normalize(),hu.set(-s[8],-s[9],-s[10]).normalize(),o.primed||=(o.dir.copy(hu),!0),o.dir.lerp(hu,1-Math.exp(-t/.06)).normalize(),o.position.setFromMatrixPosition(e.matrixWorld).addScaledVector(gu,.2).addScaledVector(_u,-.22).addScaledVector(hu,.15);let c=o.intensity*(.08+.92*vu(B.night.value,0,.6));r[0].set(o.position.x,o.position.y,o.position.z,o.range*o.range),i[0].set(o.color.r*c,o.color.g*c,o.color.b*c,o.cosInner),a[0].set(o.dir.x,o.dir.y,o.dir.z,o.cosOuter),n=1,pu.pos.value.copy(o.position),pu.dir.value.copy(o.dir),pu.col.value.set(o.color.r*c,o.color.g*c,o.color.b*c),pu.cone.value.set(o.cosInner,o.cosOuter)}let s=vu(B.night.value,.15,.75)*this.strength,c=this.sources.some(e=>e.always&&e.enabled!==!1);if((s>.002||c)&&this.enabled){let t=e.position,o=this._list;o.length=0;for(let e of this.sources)e.enabled!==!1&&(!e.always&&s<=.002||(e.update&&e.update(),e.d2=e.position.distanceToSquared(t),o.push(e)));o.sort((e,t)=>e.d2-t.d2);let c=au-n,l=o.length>c?Math.sqrt(o[c].d2):1/0;for(let e=0;e<Math.min(c,o.length);e++){let t=o[e],c=Number.isFinite(l)?vu(Math.sqrt(t.d2),l,l*.8):1,u=t.flicker?1+t.flicker*Math.sin(this.time*9+t.phase)*Math.sin(this.time*5.3+t.phase*.37):1,d=t.intensity*(t.always?1:s)*c*u*(t.scale??1);if(d<=1e-4)continue;let f=t.range;r[n].set(t.position.x,t.position.y,t.position.z,f*f),i[n].set(t.color.r*d,t.color.g*d,t.color.b*d,t.cosInner??-1.5),t.dir?a[n].set(t.dir.x,t.dir.y,t.dir.z,t.cosOuter??-2):a[n].set(0,-1,0,-2),n++}}fu.value=n,this.active=n}},bu=12,xu=8,Su=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Cu=class{constructor({terrain:e,clouds:t=null,csm:n=null,reversedDepth:r=!0,count:i=3e3,box:a=12}){this.terrain=e,this.csm=n,this.box=a,this.reversedDepth=r,this.uniforms=new L(`AirMotesParams`,{camPos:[`vec3f`,new A],intensity:[`f32`,1],drift:[`vec2f`,new E]},{label:`airMotes`}),this.camPos=this.uniforms.fields.camPos,this.drift=this.uniforms.fields.drift,this.intensity=this.uniforms.fields.intensity,this.windScale=.25;let o=!!(e&&e.module),s=!!(t&&t.module),c=new R({name:`airMotesParams`,uniforms:this.uniforms,uniformName:`air`,code:`
fn airHash3( n: f32 ) -> vec3f { return fract( sin( vec3f( n, n + 17.13, n + 43.71 ) ) * vec3f( 43758.5453, 22578.1459, 19642.3490 ) ); }
// Henyey-Greenstein phase (1/sr)
fn airPhaseHG( cosT: f32, g: f32 ) -> f32 { return ( ( 1.0 - g * g ) / ( 4.0 * PI ) ) / pow( max( 1.0 + g * g - cosT * 2.0 * g, 1e-4 ), 1.5 ); }
`}),l=Su(a),u=new Ir({name:`AirMotes`,modules:[c,o&&e.module,s&&(t.shadowModule||t.module)].filter(Boolean),lit:!1,transparent:!0,depthWrite:!0,depthTest:!0,side:`double`,blending:`premultiplied`,defines:{VELOCITY_OPAQUE:1},varyings:{vAirCol:`vec4f`,vAirUV:`vec2f`},vertex:`
	let id = f32( v.instance );
	let h = airHash3( id * 0.7131 + 0.37 );
	let h2 = airHash3( id * 1.3917 + 5.1 );
	let h3 = airHash3( id * 2.1733 + 11.7 );
	let isGnat = id < ${Su(48)};
	let isSeed = id >= ${Su(48)} && id < ${Su(96)};
	let t = frame.time;
	let L = frame.sunDir;
	let Bx = ${l};

	// ---- where: wrapped around the camera. Gnats: a swarm home fixed in the world (no drift)
	let sid = floor( id / ${Su(bu)} );
	let hs = airHash3( sid * 3.917 + 1.3 );
	let home = select( h.xz, hs.xz, isGnat );
	let drift = select( air.drift, vec2f( 0.0 ), isGnat );
	let local = ( fract( home + ( drift - air.camPos.xz ) / Bx ) - 0.5 ) * Bx;
	let xz0 = air.camPos.xz + local;
	let ht = ${o?`terrainHeightAt( xz0 )`:`-90.0`};
	let hA = ht - frame.seaLevel;

	// ---- motion: slow swirl (two octaves, random phases) + wind; gnats dart in loops
	let ph = h3 * 6.2832;
	let w1 = h2 * 0.5 + 0.35; // rad/s
	let w2 = h2.zxy * 1.4 + 1.5;
	let A1 = vec3f( 0.45, 0.22, 0.45 ) * select( 1.0, 1.6, isSeed );
	let A2 = vec3f( 0.07, 0.05, 0.07 );
	let a1 = w1 * t + ph; let a2 = w2 * t + ph.zxy;
	let swirl = sin( a1 ) * A1 + sin( a2 ) * A2;
	let swirlV = cos( a1 ) * ( A1 * w1 ) + cos( a2 ) * ( A2 * w2 );
	let gw = h2 * 2.2 + 1.8;
	let gA = vec3f( 0.3, 0.2, 0.3 ) * ( h3.x * 0.6 + 0.6 );
	let g1 = gw * t + ph; let g2 = gw.zxy * ( t * 1.7 ) + ph.yzx;
	let gnatOff = ( h - 0.5 ) * vec3f( 0.9, 0.6, 0.9 ) + sin( g1 ) * gA + sin( g2 ) * ( gA * 0.45 );
	let gnatV = cos( g1 ) * ( gA * gw ) + cos( g2 ) * ( gA * 0.45 * gw.zxy * 1.7 );
	let off = select( swirl, gnatOff, isGnat );
	let windV = vec3f( frame.windDir.x, 0.0, frame.windDir.y ) * ( frame.windSpeed * ${Su(this.windScale)} );
	let vel = select( swirlV + windV, gnatV, isGnat );

	// height above the ground (or the sea): mostly low down, seeds and gnats in the first metres
	let ground = max( ht, frame.seaLevel + 0.25 );
	let yMote = pow( h.y, 1.8 ) * 6.5 + 0.2;
	let ySeed = h.y * 2.5 + 0.3;
	let yGnat = hs.y * 1.4 + 0.8;
	let y = ground + select( select( yMote, ySeed, isSeed ), yGnat, isGnat );
	let p = vec3f( xz0.x, y, xz0.y ) + off;

	// ---- how many live here: most over the beach and the plants, very few far out over the sea,
	// fewer at night; gnats only inland over the vegetation, in a few places (per world tile)
	let land = smoothstep( 0.3, 1.5, hA );
	let shore = smoothstep( -7.0, -2.0, hA );
	let day = 1.0 - frame.night * 0.75;
	let tile = floor( xz0 / Bx );
	let tileHash = fract( sin( dot( tile, vec2f( 12.9898, 78.233 ) ) + sid * 7.31 ) * 43758.5453 );
	let dMote = max( max( land * 0.85, shore ), 0.06 ) * day;
	let dSeed = land * day;
	let dGnat = smoothstep( 1.5, 4.0, hA ) * select( 0.0, 1.0, tileHash < 0.3 ) * ( 1.0 - frame.night );
	let density = select( select( dMote, dSeed, isSeed ), dGnat, isGnat );
	let keep = sat( ( density - select( h3.y, 0.5, isGnat ) ) * 8.0 );

	// ---- what: salt aerosol near the surf / over the sea, dust and pollen over the land
	let salt = smoothstep( 0.8, -0.5, hA );
	// (the size of what catches the eye in film: lint, pollen clumps, bits of plant, sea salt crystals)
	let rMote = mix( 0.00015, 0.0005, h2.x * h2.x ) * mix( 1.0, 0.6, salt ) * select( 1.0, 2.2, h2.y > 0.96 );
	let r = select( select( rMote, mix( 0.0025, 0.0045, h2.x ), isSeed ), mix( 0.0008, 0.0011, h2.x ), isGnat );

	// ---- lighting (per particle): forward-scattering phase, sun visibility at the particle
	let toCam = frame.cameraPos - p;
	let dist = max( length( toCam ), 0.05 );
	let Vd = toCam / dist;
	let cosT = - dot( Vd, L ); // 1 = looking toward the sun through the particle
	var vis = select( 1.0, sunShadowCascadeHard( p, 0 ), shadowParams.enabled > 0.5 );
${s?`	vis *= cloudsShadow( p.xz );`:``}
${o?`	vis *= terrainSunShadowAt( p );`:``}
	let sun = frame.sunColor * vis;
	// diffraction + refraction: a strong forward lobe with a narrow glint core, a weak broad part
	// (the broad part keeps sunlit motes faintly visible from the side against shade)
	let phDust = airPhaseHG( cosT, 0.93 ) * 0.22 + airPhaseHG( cosT, 0.7 ) * 0.43 + airPhaseHG( cosT, 0.15 ) * 0.35;
	let phSalt = airPhaseHG( cosT, 0.93 ) * 0.35 + airPhaseHG( cosT, 0.75 ) * 0.5 + airPhaseHG( cosT, 0.2 ) * 0.15;
	let phMote = mix( phDust, phSalt, salt );
	let albMote = mix( vec3f( 0.95, 0.85, 0.66 ), vec3f( 1.0 ), salt );
	let cMote = albMote * ( sun * phMote + frame.skyIrradiance * 0.2 );
	// seed tufts: white fluff, diffuse from any side plus a forward glow
	let cSeed = sun * ( airPhaseHG( cosT, 0.55 ) * 0.8 + 0.05 ) + frame.skyIrradiance * 0.35;
	// gnats: dark bodies (specks against the sky), wings that catch the light when backlit
	let cGnat = sun * ( airPhaseHG( cosT, 0.9 ) * 0.12 ) + frame.skyIrradiance * 0.02;
	let col = select( select( cMote, cSeed, isSeed ), cGnat, isGnat );

	// ---- footprint: at least ~1.2 px wide, opacity = the real particle's coverage of it
	let p11 = frame.proj[ 1 ][ 1 ];
	let pixel = dist * 2.0 / ( p11 * frame.resolution.y );
	let size = max( r, pixel * 1.2 );
	// (x VISIBILITY: in film these read larger than they are, defocused and bloomed)
	let rs = r / size;
	let cover = min( rs * rs * ${Su(3.5*xu)}, 1.0 );
	// fades: box edges (before the wrap), right in front of the lens, near the water surface
	let edge = smoothstep( Bx * 0.5, Bx * 0.36, max( abs( p.x - air.camPos.x ), abs( p.z - air.camPos.z ) ) );
	let fade = edge * smoothstep( Bx * 0.5, Bx * 0.3, dist ) * smoothstep( 0.12, 0.5, dist ) * smoothstep( 0.25, 0.9, p.y - frame.seaLevel );
	let a = cover * fade * keep * air.intensity;

	// camera-facing quad
	let right = normalize( cross( vec3f( 0.0, 1.0, 0.0 ), Vd ) + vec3f( 1e-5, 0.0, 0.0 ) );
	let up = cross( Vd, right );
	let corner = v.position.xy; // plane is 2 x 2: half-width = size
	let world = p + right * ( corner.x * size ) + up * ( corner.y * size );

	o.vAirCol = vec4f( col, a );
	o.vAirUV = corner;
	// nothing to draw: collapse the quad off-screen
	v.useWorld = true;
	v.worldPos = select( vec3f( 0.0, -1e5, 0.0 ), world, a > 2e-4 );
	v.worldNormal = Vd;
	// own motion over the last frame (the template adds the camera's)
	v.prevWorldPos = v.worldPos - vel * frame.dt;
`,surface:`
	let uvq = in.vs.vAirUV;
	let g = exp( dot( uvq, uvq ) * -3.5 );
	let a = min( in.vs.vAirCol.w * g / 0.65, 1.0 );
	if ( g < 0.35 || a < 0.003 ) { discard; }
	s.albedo = in.vs.vAirCol.rgb * a;
	s.emissive = vec3f( 0.0 );
	s.alpha = a;
`,output:`r.color = vec4f( s.albedo, s.alpha );`}),d=new on(2,2);d.instanceCount=i,this.material=u,this.mesh=new Kt(d,u),this.mesh.name=`AirMotes`,this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.renderOrder=21,this.mesh.layers.set(qr.TRANSPARENT)}update(e,t,n=0){let r=this.intensity.value>0&&t.position.y>n;if(this.mesh.visible=r,!r)return;this.camPos.value.copy(t.position);let i=B.windSpeed.value*this.windScale*e,a=this.drift.value;a.x=(a.x+B.windDir.value.x*i)%this.box,a.y=(a.y+B.windDir.value.y*i)%this.box}},wu=1.333,Tu=.35,Eu=Tu,Du=16,Ou=new R({name:`underwater-flash`,deps:[mu],code:`
fn uwFlashOn() -> f32 { return localLights.flashOn; }
fn uwFlashPos() -> vec3f { return localLights.flashPos; }
fn uwFlashDir() -> vec3f { return localLights.flashDir; }
fn uwFlashCol() -> vec3f { return localLights.flashCol; }
fn uwFlashCone() -> vec2f { return localLights.flashCone; }
`}),ku=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Au=class{constructor({depthTexture:e,maskTexture:t,query:n,caustics:r,fft:i}){this.depthTexture=e,this.maskTexture=t,this.query=n,this.caustics=r,this.fft=i,this.mediumTexture=null,this.uniforms=new L(`UnderwaterParams`,{camWorld:[`mat4x4f`,new P],camPos:[`vec3f`,new A],lensDistance:[`f32`,.1],proj:[`vec4f`,new j(1,1,.1,1e3)],shafts:[`f32`,1],band:[`f32`,9],enabled:[`f32`,1],torchBeam:[`f32`,3],hasShafts:[`f32`,0]},{label:`underwater`});let a=this.uniforms.fields;this.lensDistance=a.lensDistance,this.shafts=a.shafts,this.band=a.band,this.enabled=a.enabled,this.torchBeam=a.torchBeam,this.camPos=a.camPos,this.camWorld=a.camWorld,this.proj=a.proj,this._module=null,this.shaftTarget=new Cn(1,1,{colors:[`rgba16float`],label:`uwShafts`}),this._shaftPass=null}setSize(e,t){this.shaftTarget.setSize(Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2)))}get shaftPass(){return this._shaftPass||=new Vr({label:`underwater shafts`,colorFormats:[`rgba16float`],modules:[this.module],code:this._shaftCode()}),this._shaftPass}renderShafts(e){this.uniforms.fields.hasShafts.value=+!!e,e&&this.shaftPass.render({colorViews:[this.shaftTarget.texture],clear:[0,0,0,0]})}updateCamera(e){e.updateMatrixWorld(),this.camPos.value.setFromMatrixPosition(e.matrixWorld),this.camWorld.value.copy(e.matrixWorld);let t=e.projectionMatrix.elements;this.proj.value.set(t[0],t[5],e.near,e.far),this.lensDistance.value=e.near}get module(){return this._module||=new R({name:`underwater`,deps:[z,this.query&&this.query.module,this.caustics&&this.caustics.module,Ou],uniforms:this.uniforms,uniformName:`underwaterParams`,bindings:{underwaterDepth:{texture:()=>this.depthTexture},underwaterMask:{texture:()=>this.maskTexture}},code:this._code()}),this._module}get compositeModule(){return this._compositeModule||=new R({name:`underwater-composite`,deps:[this.module],bindings:{underwaterMediumTex:{texture:()=>this.mediumTexture},underwaterShaftTex:{texture:()=>this.shaftTarget.texture}},code:this._compositeCode()}),this._compositeModule}_code(){return`
const UW_STRADDLE: f32 = ${ku(Eu)};
const UW_BAND: i32 = ${Du};
const UW_IOR: f32 = ${ku(wu)};

// reversed-Z depth -> view Z (negative)
fn underwaterViewZ( d: f32 ) -> f32 {
	let n = underwaterParams.proj.z; let f = underwaterParams.proj.w;
	return n * f / ( ( n - f ) * d - n );
}

// view-space ray for screen uv (unnormalized, z = -1)
fn underwaterViewRay( uv: vec2f ) -> vec3f {
	let ndc = vec2f( uv.x * 2.0 - 1.0, ( 1.0 - uv.y ) * 2.0 - 1.0 );
	return vec3f( ndc.x / underwaterParams.proj.x, ndc.y / underwaterParams.proj.y, -1.0 );
}

fn underwaterWorldDir( uv: vec2f ) -> vec3f {
	return normalize( ( underwaterParams.camWorld * vec4f( underwaterViewRay( uv ), 0.0 ) ).xyz );
}

fn _uwDepthAt( uv: vec2f ) -> f32 {
	let size = vec2f( textureDimensions( underwaterDepth ) );
	return textureLoad( underwaterDepth, vec2i( clamp( uv, vec2f( 0.0 ), vec2f( 0.9999 ) ) * size ), 0 );
}

// Medium at the near clip plane for each pixel (1: water, 0: air).
//  - a water surface in view: the side it is seen from (written by the water material) is the
//    medium between the lens and the surface
//  - no surface in view: the ray never crosses the surface beyond the lens, so it is in the medium
//    of its far end: an object hit below the surface is in water; the sky is air (a downward ray
//    that reaches nothing is in water)
// The waterline on the lens is then exactly where the rendered surface crosses the near plane:
// the surface fragments on one side end right there, and the far ends on the other side agree.
// Farther than STRADDLE from the surface the near plane can't reach it: the camera's medium.
fn underwaterMedium( uv: vec2f ) -> f32 {
	let size = vec2f( textureDimensions( underwaterMask ) );
	let px = vec2i( clamp( uv, vec2f( 0.0 ), vec2f( 0.9999 ) ) * size );
	let m = textureLoad( underwaterMask, px, 0 );
	let camH = underwaterParams.camPos.y - waterQueryCameraState().x;
	var water = select( 0.0, 1.0, camH < 0.0 );
	if ( m.y > 0.5 ) {
		water = m.x;
	} else if ( abs( camH ) < UW_STRADDLE ) {
		let d = _uwDepthAt( uv );
		let ray = underwaterViewRay( uv );
		let dirW = ( underwaterParams.camWorld * vec4f( ray, 0.0 ) ).xyz;
		if ( d < 1e-7 ) {
			water = select( 0.0, 1.0, dirW.y < 0.0 );
		} else {
			let q = underwaterParams.camPos + dirW * ( - underwaterViewZ( d ) );
			water = select( 0.0, 1.0, q.y < waterQueryHeightAtXZ( q.xz ) );
		}
	}
	return water;
}

`}_shaftCode(){return`
fn _uwIgn( px: vec2f ) -> f32 { return fract( fract( dot( px, vec2f( 0.06711056, 0.00583715 ) ) ) * 52.9829189 ); }

fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let pixel = in.pos.xy;
	let d = _uwDepthAt( uv );
	let vz = underwaterViewZ( d );
	let ray = underwaterViewRay( uv );
	let dist = max( min( length( ray * ( - vz ) ), 600.0 ) - underwaterParams.lensDistance * length( ray ), 0.0 );
	let dir = underwaterWorldDir( uv );
	let st = waterQueryCameraState();
	let sigS = frame.waterScattering;
	let sigT = frame.waterAbsorption + sigS;

	let Ls = - refract( - frame.sunDir, vec3f( 0.0, 1.0, 0.0 ), 1.0 / UW_IOR ); // toward the sun, underwater
	let mu = max( Ls.y, 0.15 );
	let cosPh = dot( dir, Ls );
	let g = 0.85;
	let phase = ( 1.0 - g * g ) / ( 4.0 * PI ) / pow( max( 1.0 + g * g - cosPh * 2.0 * g, 1e-4 ), 1.5 ) * 0.75 + 0.25 / ( 4.0 * PI );

	let sunE = frame.sunColor * 0.96;

	var shafts = vec3f( 0.0 );
${this.caustics&&this.caustics.module?`
		{
			let steps = 20;
			let maxD = min( dist, 22.0 );
			let ds = maxD / f32( steps );
			// interleaved gradient noise on the pixel grid, moved every frame (Jimenez 2014) so the
			// temporal resolve integrates the steps instead of freezing a noise pattern on screen
			let fragPx = pixel + f32( frame.frameIndex % 64u ) * 5.588238;
			let jitter = _uwIgn( fragPx );
			// gusts / slicks vary over hundreds of metres: one sample for the whole march
			let detK = causticsDetailK( underwaterParams.camPos.xz + dir.xz * ( maxD * 0.5 ) );
			for ( var i = 0; i < steps; i++ ) {
				let s = ( f32( i ) + jitter ) * ds;
				let p = underwaterParams.camPos + dir * s;
				let z = max( st.x - p.y, 0.01 );
				let caus = causticsSampleShaft( p, z, 1.5, detK );
				let Tl = exp( - sigT * ( s + z / mu ) );
				shafts += ( caus - 1.0 ) * Tl * ds;
			}
			shafts = shafts * sunE * sigS * phase * underwaterParams.shafts * 2.5;
		}`:``}
	// diver's torch: single scattering of the flashlight cone along the view ray (the torch sits
	// beside the eye, so the beam is a shaft slightly off the view axis), extinction on the light
	// and the view legs, same phase function, up to the scene depth
	var torch = vec3f( 0.0 );
	if ( uwFlashOn() > 0.5 ) {
		let tSteps = 8;
		let tMax = min( dist, 25.0 );
		let tds = tMax / f32( tSteps );
		let tPx = pixel + f32( frame.frameIndex % 64u ) * 5.588238 + 17.3;
		let tJit = _uwIgn( tPx );
		let fpos = uwFlashPos(); let fdir = uwFlashDir(); let cone = uwFlashCone();
		for ( var i = 0; i < tSteps; i++ ) {
			let s = ( f32( i ) + tJit ) * tds;
			let v = underwaterParams.camPos + dir * s - fpos;
			let r2 = max( dot( v, v ), 1e-4 );
			let r = sqrt( r2 );
			let Lr = v / r;
			let spot = localLightsSpotProfile( dot( Lr, fdir ), cone.x, cone.y );
			// same lobe as the sun in-scatter (0.75 forward g = 0.85 + 0.25 isotropic), Schlick's form
			let sk = 1.55 * g - 0.55 * g * g * g;
			let sd = 1.0 - dot( dir, - Lr ) * sk;
			let ph = ( 1.0 - sk * sk ) / ( 4.0 * PI ) * 0.75 / ( sd * sd ) + 0.25 / ( 4.0 * PI );
			torch += exp( - sigT * ( r + s ) ) * ( spot * ph / ( r2 + 0.15 ) );
		}
		// x3: the suspended particles scatter more than the clear-water coefficient (the beam reads)
		torch = torch * uwFlashCol() * sigS * tds * underwaterParams.torchBeam;
	}

	return vec4f( max( shafts, vec3f( 0.0 ) ) + torch, dist );
}
`}_compositeCode(){return`
fn _uwMed( pc: vec2i, dy: i32, mSize: vec2i ) -> f32 {
	return textureLoad( underwaterMediumTex, vec2i( pc.x, clamp( pc.y + dy, 0, mSize.y - 1 ) ), 0 ).r;
}

fn _uwLit( m: f32, sigT: vec3f, zc: f32, dirY: f32, dist: f32 ) -> vec3f {
	let a = sigT * zc / m;
	let kk = sigT * ( 1.0 - dirY / m );
	let e0 = exp( - a );
	let e1 = exp( - max( a + kk * dist, vec3f( 0.0 ) ) );
	return select( ( e0 - e1 ) / kk, e0 * dist, abs( kk ) < vec3f( 1e-4 ) );
}

// pixel: fragment coordinate of the composite (screenCoordinate)
fn underwaterComposite( uv: vec2f, pixel: vec2f ) -> vec4f {
	let mSize = vec2i( textureDimensions( underwaterMediumTex ) );
	let pc = clamp( vec2i( uv * vec2f( mSize ) ), vec2i( 0 ), mSize - 1 );
	let here = _uwMed( pc, 0, mSize );
	let under = here > 0.5;

	// distance to the waterline on the lens in pixels, searched vertically (the line runs roughly
	// across the screen: no camera roll, and over the few cm of the lens the surface is a plane)
	var lineDist = 1e4;
	var lineDir = 0.0; // uv.y direction toward the other medium
	let camH = underwaterParams.camPos.y - waterQueryCameraState().x;
	if ( abs( camH ) < UW_STRADDLE ) {
		let flips = abs( _uwMed( pc, -8, mSize ) - here ) + abs( _uwMed( pc, 8, mSize ) - here ) + abs( _uwMed( pc, -UW_BAND, mSize ) - here ) + abs( _uwMed( pc, UW_BAND, mSize ) - here );
		if ( flips > 0.5 ) {
			for ( var i = 1; i < UW_BAND + 1; i++ ) {
				let up = abs( _uwMed( pc, -i, mSize ) - here ) > 0.5;
				let down = abs( _uwMed( pc, i, mSize ) - here ) > 0.5;
				if ( lineDist > 1e3 && ( up || down ) ) {
					lineDist = f32( i ) - 0.5;
					lineDir = select( 1.0, -1.0, up );
				}
			}
		}
	}

	// ---- meniscus band: rounded water edge acting like a cylindrical lens; samples are pushed
	// away from the line on both sides
	let bandW = underwaterParams.band;
	let tBand = clamp( lineDist / bandW, 0.0, 1.0 );
	let bendPx = tBand * sqrt( max( 1.0 - tBand * tBand, 0.0 ) ) * bandW * 0.8;
	let uvB = uv - vec2f( 0.0, lineDir * bendPx / f32( mSize.y ) );
	let base = postSceneSample( uvB );

	var result = base;

	if ( under && underwaterParams.enabled > 0.5 ) {
		// scene distance along this pixel
		let d = _uwDepthAt( uv );
		let vz = underwaterViewZ( d );
		let ray = underwaterViewRay( uv );
		// the water between the eye and the lens is clipped away: the medium starts at the lens
		let dist = max( min( length( ray * ( - vz ) ), 600.0 ) - underwaterParams.lensDistance * length( ray ), 0.0 );
		let dir = underwaterWorldDir( uv );

		let st = waterQueryCameraState();
		let zc = max( st.x - underwaterParams.camPos.y, 0.0 ); // camera depth below the surface
		let sigA = frame.waterAbsorption;
		let sigS = frame.waterScattering;
		let sigT = sigA + sigS;

		let Ls = - refract( - frame.sunDir, vec3f( 0.0, 1.0, 0.0 ), 1.0 / UW_IOR ); // toward the sun, underwater
		let mu = max( Ls.y, 0.15 );
		let cosPh = dot( dir, Ls );
		let g = 0.85;
		let phase = ( 1.0 - g * g ) / ( 4.0 * PI ) / pow( max( 1.0 + g * g - cosPh * 2.0 * g, 1e-4 ), 1.5 ) * 0.75 + 0.25 / ( 4.0 * PI );

		// light arriving at depth z: E0 exp(-sigT z / m); along the ray z(s) = zc - dir.y s, seen through
		// exp(-sigT s). The in-scatter integral is (exp(-a) - exp(-(a + k d))) / k with a = sigT zc / m
		// and k = sigT (1 - dir.y / m): both exponents stay <= 0 while the ray is in the water, so it
		// can't overflow looking up through deep water (exp(-a) (1 - exp(-k d)) / k does, and the
		// Inf / NaN would stick in the TAA history)
		let sunE = frame.sunColor * 0.96;
		let ambE = frame.skyIrradiance * PI * 0.9;

		let bb = sigS * 0.035;
		let msAlb = bb * 1.3 / ( sigA + bb );
		let inSun = sunE * ( sigS * phase + msAlb * sigT * ( 1.0 / PI ) ) * _uwLit( mu, sigT, zc, dir.y, dist );
		let inAmb = ambE * ( sigS * ( 1.0 / ( 4.0 * PI ) ) + msAlb * sigT * ( 1.0 / PI ) ) * _uwLit( 0.8, sigT, zc, dir.y, dist );

		// caustic light shafts and the torch beam: the half resolution march (underwaterShafts), depth-aware
		// upsampled (bilinear weights times the view distance similarity)
		var extra = vec3f( 0.0 );
		if ( underwaterParams.hasShafts > 0.5 ) {
			let ls = vec2i( textureDimensions( underwaterShaftTex ) );
			let pa = uv * vec2f( ls ) - 0.5;
			let q0 = floor( pa );
			let fr = pa - q0;
			var acc = vec3f( 0.0 );
			var wSum = 1e-6;
			for ( var k = 0; k < 4; k++ ) {
				let o = vec2i( k & 1, k >> 1u );
				let sm = textureLoad( underwaterShaftTex, clamp( vec2i( q0 ) + o, vec2i( 0 ), ls - 1 ), 0 );
				let wb = select( 1.0 - fr.x, fr.x, o.x == 1 ) * select( 1.0 - fr.y, fr.y, o.y == 1 );
				let rel = abs( sm.w - dist ) / max( dist, 0.5 );
				let wt = wb / pow2( rel * 10.0 + 1.0 ) + 1e-5;
				acc += sm.rgb * wt;
				wSum += wt;
			}
			extra = acc / wSum;
		}

		let T = exp( - sigT * dist );
		result = base * T + inSun + inAmb + extra;
	}

	// meniscus contact line and bright rim
	let line = smoothstep( 2.0, 0.0, lineDist );
	let rim = smoothstep( bandW, bandW * 0.4, lineDist ) * smoothstep( 0.5, 2.5, lineDist );
	let withLine = result * ( 1.0 - line * 0.55 ) + rim * 0.15 * ( frame.skyIrradiance * 2.5 + frame.sunColor * 0.02 );
	return vec4f( withLine, 1.0 );
}
`}},ju=[60,300,180,240,120,0],Mu=[0,.5,.25,.75],Nu=class{constructor(e,t,{samples:n=16,depthIsColor:r=!1}={}){this.depthTexture=e,this.depthIsColor=r,this.camera=t,this.resolutionScale=1,this.useTemporalFiltering=!1,this.uniforms=new L(`GTAOParams`,{proj:[`mat4x4f`,new P],invProj:[`mat4x4f`,new P],resolution:[`vec2f`,new E],radius:[`f32`,.25],thickness:[`f32`,1],distanceExponent:[`f32`,1],distanceFallOff:[`f32`,1],scale:[`f32`,1],temporalDirection:[`f32`,0],temporalOffset:[`f32`,0],resolutionScaleU:[`f32`,0]},{label:`gtao`});let i=this.uniforms.fields;this.radius=i.radius,this.thickness=i.thickness,this.distanceExponent=i.distanceExponent,this.distanceFallOff=i.distanceFallOff,this.scale=i.scale,this.samples={value:n},this.target=new Cn(1,1,{colors:[`r8unorm`],label:`GTAO.AO`}),this.noiseTexture=Pu(),this._currentSamples=-1,this._pass=null,this._frame=0,this._jp=new P}get texture(){return this.target.texture}getTextureNode(){return this.target.texture}setSize(e,t){e=Math.round(this.resolutionScale*e),t=Math.round(this.resolutionScale*t),this.uniforms.fields.resolutionScaleU.value=this.resolutionScale,this.uniforms.fields.resolution.value.set(e,t),this.target.setSize(e,t)}_build(){let e=this.samples.value,t=e<30?3:5,n=Math.ceil(e/t);this._pass=new Vr({label:`GTAO`,colorFormats:[`r8unorm`],bindings:{gtao:{uniform:this.uniforms},gtaoDepth:{texture:()=>this.depthTexture},gtaoNoise:{texture:this.noiseTexture}},code:`
const GTAO_DIRECTIONS: i32 = ${t};
const GTAO_STEPS: i32 = ${n};

// (a colour depth copy may mark texels negative: under the water, no AO wanted; see PostFX)
fn gtaoSampleDepthRaw( uv: vec2f ) -> f32 {
	let s = vec2i( textureDimensions( gtaoDepth ) );
	return textureLoad( gtaoDepth, clamp( vec2i( floor( uv * vec2f( s ) ) ), vec2i( 0 ), s - 1 ), 0 )${this.depthIsColor?`.x`:``};
}
fn gtaoSampleDepth( uv: vec2f ) -> f32 { return abs( gtaoSampleDepthRaw( uv ) ); }
fn gtaoLoad( p: vec2i ) -> f32 {
	let s = vec2i( textureDimensions( gtaoDepth ) );
	return abs( textureLoad( gtaoDepth, clamp( p, vec2i( 0 ), s - 1 ), 0 )${this.depthIsColor?`.x`:``} );
}
// three's getViewPosition (WebGPU coordinate system)
fn gtaoViewPosition( uv: vec2f, depth: f32 ) -> vec3f {
	let sp = vec2f( uv.x, 1.0 - uv.y ) * 2.0 - 1.0;
	let v = gtao.invProj * vec4f( sp, depth, 1.0 );
	return v.xyz / v.w;
}
fn gtaoScreenFromClip( c: vec4f ) -> vec2f {
	let s = c.xy / c.w * 0.5 + 0.5;
	return vec2f( s.x, 1.0 - s.y );
}
// three's getNormalFromDepth
fn gtaoNormalFromDepth( uv: vec2f ) -> vec3f {
	let size = vec2f( textureDimensions( gtaoDepth ) );
	let p = vec2i( uv * size );
	let c0 = gtaoLoad( p );
	let l2 = gtaoLoad( p - vec2i( 2, 0 ) ); let l1 = gtaoLoad( p - vec2i( 1, 0 ) );
	let r1 = gtaoLoad( p + vec2i( 1, 0 ) ); let r2 = gtaoLoad( p + vec2i( 2, 0 ) );
	let b2 = gtaoLoad( p + vec2i( 0, 2 ) ); let b1 = gtaoLoad( p + vec2i( 0, 1 ) );
	let t1 = gtaoLoad( p - vec2i( 0, 1 ) ); let t2 = gtaoLoad( p - vec2i( 0, 2 ) );
	let dl = abs( ( 2.0 * l1 - l2 ) - c0 );
	let dr = abs( ( 2.0 * r1 - r2 ) - c0 );
	let db = abs( ( 2.0 * b1 - b2 ) - c0 );
	let dt = abs( ( 2.0 * t1 - t2 ) - c0 );
	let ce = gtaoViewPosition( uv, c0 );
	let dpdx = select( - ce + gtaoViewPosition( uv + vec2f( 1.0 / size.x, 0.0 ), r1 ), ce - gtaoViewPosition( uv - vec2f( 1.0 / size.x, 0.0 ), l1 ), dl < dr );
	let dpdy = select( - ce + gtaoViewPosition( uv - vec2f( 0.0, 1.0 / size.y ), t1 ), ce - gtaoViewPosition( uv + vec2f( 0.0, 1.0 / size.y ), b1 ), db < dt );
	return normalize( cross( dpdx, dpdy ) );
}
fn gtaoRand( uv: vec2f ) -> f32 {
	let dt = dot( uv, vec2f( 12.9898, 78.233 ) );
	let sn = dt - PI * floor( dt / PI );
	return fract( sin( sn ) * 43758.5453 );
}

fn fragment( in: FSIn ) -> vec4f {
	let uvNode = in.uv;
	// Sidestep the nearest-rounding during depth access for the unjittered center pixel to avoid banding
	var depth: f32;
	if ( gtao.resolutionScaleU < 1.0 ) {
		let g = abs( textureGather( ${this.depthIsColor?`0, `:``}gtaoDepth, smpNearestClamp, uvNode ) );
		depth = min( min( g.x, g.y ), min( g.z, g.w ) );
	} else {
		depth = gtaoSampleDepth( uvNode );
	}
	// nothing there (sky: the depth is reversed-Z, 0 at infinity): unoccluded, and never shown
	if ( depth <= 0.0 || gtaoSampleDepthRaw( uvNode ) < 0.0 ) { return vec4f( 1.0 ); }
	let viewPosition = gtaoViewPosition( uvNode, depth );
	let viewNormal = gtaoNormalFromDepth( uvNode );
	let radius = gtao.radius;
	let invRadius = 1.0 / radius;
	let viewDir = normalize( - viewPosition );
	let clipPosition = gtao.proj * vec4f( viewPosition, 1.0 );

	// 5x5 magic square rotation noise (nearest, repeat)
	let noiseRes = vec2f( textureDimensions( gtaoNoise ) );
	let noiseUv = vec2f( uvNode.x, 1.0 - uvNode.y ) * ( gtao.resolution / noiseRes );
	let nt = vec2i( floor( fract( noiseUv ) * noiseRes ) );
	let noiseTexel = textureLoad( gtaoNoise, nt, 0 );
	let randomVec = noiseTexel.xyz * 2.0 - 1.0;
	let tangent = normalize( vec3f( randomVec.xy, 0.0 ) );
	let bitangent = vec3f( - tangent.y, tangent.x, 0.0 );
	let kernelMatrix = mat3x3f( tangent, bitangent, vec3f( 0.0, 0.0, 1.0 ) );

	let invSteps = 1.0 / f32( GTAO_STEPS );
	var ao = 0.0;
	// Per-step phase jitter for spatio-temporal decorrelation.
	let noiseJitterIdx = gtao.temporalDirection * 0.02;
	let stepJitter = interleavedGradientNoise( in.pos.xy + gtao.temporalOffset ) + gtaoRand( ( uvNode + noiseJitterIdx ) * 2.0 - 1.0 );

	// Each iteration analyzes one vertical "slice" of the 3D space around the fragment.
	for ( var i = 0; i < GTAO_DIRECTIONS; i++ ) {
		let angle = f32( i ) / f32( GTAO_DIRECTIONS ) * PI + gtao.temporalDirection;
		let sampleDir = kernelMatrix * vec3f( cos( angle ), sin( angle ), 0.0 );
		let clipDirRadius = gtao.proj * vec4f( sampleDir, 0.0 ) * radius;
		let sliceBitangent = normalize( cross( sampleDir, viewDir ) );
		let sliceTangent = cross( sliceBitangent, viewDir );
		// Project the view normal onto the slice plane (remove component along sliceBitangent).
		// The unnormalized length is the foreshortening weight applied at slice integration.
		// (Activision GTAO paper, Section 3.2 "Per-pixel sampling".)
		let projNRaw = viewNormal - sliceBitangent * dot( viewNormal, sliceBitangent );
		let projNLen = length( projNRaw );
		let projN = projNRaw / max( projNLen, 0.0001 );
		// gamma: angle of projN within the slice plane, signed by the tangent direction.
		let nSin = dot( projN, sliceTangent );
		let nCos = clamp( dot( projN, viewDir ), 0.0, 1.0 );
		let signNSin = select( -1.0, 1.0, nSin >= 0.0 );
		let angleN = signNSin * acos( nCos );
		let tangentToNormalInSlice = cross( projN, sliceBitangent );
		let cosHorizon = dot( viewDir, tangentToNormalInSlice );
		var cosHorizons = vec2f( cosHorizon, - cosHorizon );
		// For each slice, the inner loop performs ray marching to find the horizons.
		for ( var j = 0; j < GTAO_STEPS; j++ ) {
			// Quadratic step distribution ( sampleDist = t^2 ) concentrates samples in the
			// near-field. (Blender's Eevee adaptation)
			let t = ( f32( j ) + 1.0 + stepJitter ) * invSteps;
			let sampleDist = t * t;
			let clipOffset = clipDirRadius * sampleDist;
			// The loop marches in two opposite directions (x and y) along the slice's line to find the horizon on both sides.
			// x
			let sampleScreenPositionX = gtaoScreenFromClip( clipPosition + clipOffset );
			let sampleDepthX = gtaoSampleDepth( sampleScreenPositionX );
			let viewDeltaX = gtaoViewPosition( sampleScreenPositionX, sampleDepthX ) - viewPosition;
			let lenX = length( viewDeltaX );
			// Manual normalize guards against zero-length delta.
			let sHX = dot( viewDir, viewDeltaX ) / max( lenX, 0.0001 );
			// Sphere falloff: ( dist / radius )^2 fades the sample's horizon contribution
			// back toward the prior horizon as it approaches the radius boundary.
			// (squared variant of the paper's near-field attenuation;
			// Activision GTAO paper, Section 4.3 "Bounding the sampling area")
			let distFacX = min( lenX * invRadius, 1.0 );
			let distFacSqX = distFacX * distFacX;
			if ( abs( viewDeltaX.z ) < gtao.thickness ) {
				cosHorizons.x = mix( max( cosHorizons.x, sHX ), cosHorizons.x, distFacSqX );
			}
			// y
			let sampleScreenPositionY = gtaoScreenFromClip( clipPosition - clipOffset );
			let sampleDepthY = gtaoSampleDepth( sampleScreenPositionY );
			let viewDeltaY = gtaoViewPosition( sampleScreenPositionY, sampleDepthY ) - viewPosition;
			let lenY = length( viewDeltaY );
			let sHY = dot( viewDir, viewDeltaY ) / max( lenY, 0.0001 );
			let distFacY = min( lenY * invRadius, 1.0 );
			let distFacSqY = distFacY * distFacY;
			if ( abs( viewDeltaY.z ) < gtao.thickness ) {
				cosHorizons.y = mix( max( cosHorizons.y, sHY ), cosHorizons.y, distFacSqY );
			}
		}
		// Cosine-weighted inner integral, closed-form (Activision GTAO paper, Eq. 7).
		// Per horizon h_i:    term_i = -cos( 2 h_i - gamma ) + cos( gamma ) + 2 h_i sin( gamma )
		// The 0.25 factor is 1/2 (integral normalization) x 1/2 (averaging the two horizons).
		// In this slice setup sliceTangent = cross( sliceBitangent, viewDir ) works out
		// opposite to sampleDir, so the +sampleDir samples (cosHorizons.x) live on the
		// -T side of the slice and -sampleDir samples (cosHorizons.y) on the +T side.
		// gamma is signed by +T (sliceTangent), so hPos must read from cosHorizons.y.
		let hPos = acos( clamp( cosHorizons.y, -1.0, 1.0 ) );
		let hNeg = - acos( clamp( cosHorizons.x, -1.0, 1.0 ) );
		let termPos = - cos( hPos * 2.0 - angleN ) + nCos + hPos * 2.0 * nSin;
		let termNeg = - cos( hNeg * 2.0 - angleN ) + nCos + hNeg * 2.0 * nSin;
		let a = ( termPos + termNeg ) * 0.25;
		// |projN| is the foreshortening weight from the per-slice normal projection.
		ao += projNLen * a;
	}
	ao = clamp( ao / f32( GTAO_DIRECTIONS ), 0.0, 1.0 );
	ao = pow( ao, gtao.scale );
	return vec4f( ao, 0.0, 0.0, 1.0 );
}
`}),this._currentSamples=e}render(){let e=this.uniforms.fields;if(this.useTemporalFiltering===!0){let t=this._frame++;e.temporalDirection.value=ju[t%6]/360,e.temporalOffset.value=Mu[t%4]}else e.temporalDirection.value=0,e.temporalOffset.value=1;this.samples.value!==this._currentSamples&&this._build();let t=br.fields,n=t.jitter.value;this._jp.makeTranslation(n.x,n.y,0).multiply(t.proj.value),e.proj.value.copy(this._jp),e.invProj.value.copy(this._jp).invert(),this._pass.render({colorViews:[this.target.texture],clear:[1,1,1,1]})}};function Pu(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=Fu(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new A(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}return new I({label:`GTAO.noise`,width:t,height:t,format:`rgba8unorm`,data:i,sampler:`nearestRepeat`})}function Fu(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Iu=[0,0,0,0],Lu=`
fn aaIn( uv: vec2f ) -> vec3f { return textureSampleLevel( aaSrc, smpLinearClamp, uv, 0.0 ).rgb; }
// display-like value for edge detection: exposed, Reinhard on the max channel, square root
fn aaP( c: vec3f ) -> vec3f {
	let e = max( c, vec3f( 0.0 ) ) * aaExposure[ 0 ] * frame.exposure;
	return sqrt( e / ( 1.0 + max( e.r, max( e.g, e.b ) ) ) );
}
fn aaLuma( uv: vec2f ) -> f32 { return dot( aaP( aaIn( uv ) ), vec3f( 0.3, 0.59, 0.11 ) ); }
`,Ru=class{constructor({src:e,exposure:t}){this.src=e,this.exposure=t,this.edges=new Cn(1,1,{colors:[`rgba8unorm`],label:`smaaEdges`}),this.weights=new Cn(1,1,{colors:[`rgba8unorm`],label:`smaaWeights`}),this.area=null,this.search=null,this._passes=null,this._load()}async _load(){let e=async(e,t)=>{let n=await Oa(new Uint8Array(await(await fetch(`./textures/smaa/`+e)).arrayBuffer()),`image/png`);return new I({label:t,width:n.width,height:n.height,format:`rgba8unorm`,data:n.data})};try{[this.area,this.search]=await Promise.all([e(`area.png`,`smaaArea`),e(`search.png`,`smaaSearch`)])}catch(e){console.warn(`SMAA textures failed to load`,e)}}_build(){let e={aaSrc:{texture:this.src},aaExposure:{storage:this.exposure,access:`read`}},t=new Vr({label:`AA none`,colorFormats:[`rgba16float`],bindings:{aaSrc:{texture:this.src}},code:`fn fragment( in: FSIn ) -> vec4f { return textureSampleLevel( aaSrc, smpLinearClamp, in.uv, 0.0 ); }`}),n=new Vr({label:`FXAA`,colorFormats:[`rgba16float`],bindings:e,code:Lu+`
fn fragment( in: FSIn ) -> vec4f {
	var FXAA_STEPS = array<f32, 6>( 1.0, 1.5, 2.0, 2.0, 2.0, 4.0 );
	let uv = in.uv;
	let ts = 1.0 / vec2f( textureDimensions( aaSrc ) );
	let m = aaLuma( uv );
	let n = aaLuma( uv + ts * vec2f( 0.0, -1.0 ) ); let e = aaLuma( uv + ts * vec2f( 1.0, 0.0 ) );
	let s = aaLuma( uv + ts * vec2f( 0.0, 1.0 ) ); let w = aaLuma( uv + ts * vec2f( -1.0, 0.0 ) );
	let ne = aaLuma( uv + ts * vec2f( 1.0, -1.0 ) ); let nw = aaLuma( uv + ts * vec2f( -1.0, -1.0 ) );
	let se = aaLuma( uv + ts * vec2f( 1.0, 1.0 ) ); let sw = aaLuma( uv + ts * vec2f( -1.0, 1.0 ) );
	let highest = max( max( max( s, e ), max( n, w ) ), m );
	let lowest = min( min( min( s, e ), min( n, w ) ), m );
	let contrast = highest - lowest;
	if ( contrast < max( 0.0312, 0.063 * highest ) ) { return vec4f( aaIn( uv ), 1.0 ); }

	// sub-pixel blend
	var f = ( 2.0 * ( s + e + n + w ) + ( se + sw + ne + nw ) ) / 12.0;
	f = clamp( abs( f - m ) / max( contrast, 1e-6 ), 0.0, 1.0 );
	let bf = smoothstep( 0.0, 1.0, f );
	let pixelBlend = bf * bf;

	// edge orientation and the side the edge lies on
	let horizontal = abs( s + n - 2.0 * m ) * 2.0 + abs( se + ne - 2.0 * e ) + abs( sw + nw - 2.0 * w );
	let vertical = abs( e + w - 2.0 * m ) * 2.0 + abs( se + sw - 2.0 * s ) + abs( ne + nw - 2.0 * n );
	let isH = horizontal >= vertical;
	let pL = select( e, s, isH ); let nL = select( w, n, isH );
	let pG = abs( pL - m ); let nG = abs( nL - m );
	var pixelStep = select( ts.x, ts.y, isH );
	var oppL = pL; var grad = pG;
	if ( pG < nG ) { pixelStep = - pixelStep; oppL = nL; grad = nG; }

	// walk along the edge both ways to its ends
	var uvEdge = uv;
	var edgeStep = vec2f( 0.0, ts.y );
	if ( isH ) { uvEdge.y += pixelStep * 0.5; edgeStep = vec2f( ts.x, 0.0 ); } else { uvEdge.x += pixelStep * 0.5; }
	let edgeL = ( m + oppL ) * 0.5;
	let gt = grad * 0.25;
	var puv = uvEdge + edgeStep * FXAA_STEPS[ 0 ];
	var pD = aaLuma( puv ) - edgeL;
	var pEnd = abs( pD ) >= gt;
	for ( var i = 1; i < 6 && ! pEnd; i++ ) { puv += edgeStep * FXAA_STEPS[ i ]; pD = aaLuma( puv ) - edgeL; pEnd = abs( pD ) >= gt; }
	if ( ! pEnd ) { puv += edgeStep * 8.0; }
	var nuv = uvEdge - edgeStep * FXAA_STEPS[ 0 ];
	var nD = aaLuma( nuv ) - edgeL;
	var nEnd = abs( nD ) >= gt;
	for ( var i = 1; i < 6 && ! nEnd; i++ ) { nuv -= edgeStep * FXAA_STEPS[ i ]; nD = aaLuma( nuv ) - edgeL; nEnd = abs( nD ) >= gt; }
	if ( ! nEnd ) { nuv -= edgeStep * 8.0; }
	let pDist = select( puv.y - uv.y, puv.x - uv.x, isH );
	let nDist = select( uv.y - nuv.y, uv.x - nuv.x, isH );
	let shortest = min( pDist, nDist );
	let deltaSign = select( nD >= 0.0, pD >= 0.0, pDist <= nDist );
	let edgeBlend = select( 0.5 - shortest / ( pDist + nDist ), 0.0, deltaSign == ( m - edgeL >= 0.0 ) );

	let fb = max( pixelBlend, edgeBlend );
	var fuv = uv;
	if ( isH ) { fuv.y += pixelStep * fb; } else { fuv.x += pixelStep * fb; }
	return vec4f( aaIn( fuv ), 1.0 );
}
`});this._passes={none:t,fxaa:n}}_buildSMAA(){let e=new Vr({label:`SMAA edges`,colorFormats:[`rgba8unorm`],bindings:{aaSrc:{texture:this.src},aaExposure:{storage:this.exposure,access:`read`}},code:Lu+`
fn smaaDelta( a: vec3f, b: vec3f ) -> f32 { let t = abs( a - b ); return max( t.r, max( t.g, t.b ) ); }
fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let px = 1.0 / vec2f( textureDimensions( aaSrc ) );
	let C = aaP( aaIn( uv ) );
	var delta = vec4f( smaaDelta( C, aaP( aaIn( uv + vec2f( - px.x, 0.0 ) ) ) ), smaaDelta( C, aaP( aaIn( uv + vec2f( 0.0, - px.y ) ) ) ), 0.0, 0.0 );
	var edges = step( vec2f( 0.1 ), delta.xy );
	if ( dot( edges, vec2f( 1.0 ) ) == 0.0 ) { return vec4f( 0.0 ); }
	delta.z = smaaDelta( C, aaP( aaIn( uv + vec2f( px.x, 0.0 ) ) ) );
	delta.w = smaaDelta( C, aaP( aaIn( uv + vec2f( 0.0, px.y ) ) ) );
	var maxDelta = max( max( delta.x, delta.y ), max( delta.z, delta.w ) );
	let dLL = smaaDelta( C, aaP( aaIn( uv + vec2f( - 2.0 * px.x, 0.0 ) ) ) );
	let dTT = smaaDelta( C, aaP( aaIn( uv + vec2f( 0.0, - 2.0 * px.y ) ) ) );
	maxDelta = max( maxDelta, max( dLL, dTT ) );
	// local contrast adaptation
	edges *= step( vec2f( 0.5 * maxDelta ), delta.xy );
	return vec4f( edges, 0.0, 0.0 );
}
`}),t=new Vr({label:`SMAA weights`,colorFormats:[`rgba8unorm`],bindings:{aaEdges:{texture:()=>this.edges.texture},aaArea:{texture:()=>this.area},aaSearch:{texture:()=>this.search}},code:`
const SMAA_STEPS: i32 = 8;
fn smaaE( uv: vec2f ) -> vec2f { return textureSampleLevel( aaEdges, smpLinearClamp, uv, 0.0 ).rg; }
fn smaaSearchLength( e: vec2f, bias: f32, scale: f32 ) -> f32 {
	return 255.0 * textureSampleLevel( aaSearch, smpNearestClamp, vec2f( bias + e.x * scale, e.y ), 0.0 ).r;
}
fn smaaArea( dist: vec2f, e1: f32, e2: f32, offset: f32 ) -> vec2f {
	let ps = vec2f( 1.0 / 160.0, 1.0 / 560.0 );
	var tc = ps * ( 16.0 * round( 4.0 * vec2f( e1, e2 ) ) + dist ) + 0.5 * ps;
	tc.y += offset / 7.0;
	return textureSampleLevel( aaArea, smpLinearClamp, tc, 0.0 ).rg;
}
fn smaaXLeft( tc: vec2f, end: f32, inv: vec2f ) -> f32 {
	var e = vec2f( 0.0, 1.0 ); var c = tc;
	for ( var i = 0; i < SMAA_STEPS; i++ ) {
		e = smaaE( c ); c.x -= 2.0 * inv.x;
		if ( c.x <= end || e.y <= 0.8281 || e.x != 0.0 ) { break; }
	}
	c.x += 0.25 * inv.x + inv.x + 2.0 * inv.x;
	return c.x - inv.x * smaaSearchLength( e, 0.0, 0.5 );
}
fn smaaXRight( tc: vec2f, end: f32, inv: vec2f ) -> f32 {
	var e = vec2f( 0.0, 1.0 ); var c = tc;
	for ( var i = 0; i < SMAA_STEPS; i++ ) {
		e = smaaE( c ); c.x += 2.0 * inv.x;
		if ( c.x >= end || e.y <= 0.8281 || e.x != 0.0 ) { break; }
	}
	c.x -= 0.25 * inv.x + inv.x + 2.0 * inv.x;
	return c.x + inv.x * smaaSearchLength( e, 0.5, 0.5 );
}
fn smaaYUp( tc: vec2f, end: f32, inv: vec2f ) -> f32 {
	var e = vec2f( 1.0, 0.0 ); var c = tc;
	for ( var i = 0; i < SMAA_STEPS; i++ ) {
		e = smaaE( c ); c.y -= 2.0 * inv.y;
		if ( c.y <= end || e.x <= 0.8281 || e.y != 0.0 ) { break; }
	}
	c.y += 0.25 * inv.y + inv.y + 2.0 * inv.y;
	return c.y - inv.y * smaaSearchLength( e.yx, 0.0, 0.5 );
}
fn smaaYDown( tc: vec2f, end: f32, inv: vec2f ) -> f32 {
	var e = vec2f( 1.0, 0.0 ); var c = tc;
	for ( var i = 0; i < SMAA_STEPS; i++ ) {
		e = smaaE( c ); c.y += 2.0 * inv.y;
		if ( c.y >= end || e.x <= 0.8281 || e.y != 0.0 ) { break; }
	}
	c.y -= 0.25 * inv.y + inv.y + 2.0 * inv.y;
	return c.y + inv.y * smaaSearchLength( e.yx, 0.5, 0.5 );
}
fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let inv = 1.0 / vec2f( textureDimensions( aaEdges ) );
	let pix = uv / inv;
	let o0 = vec4f( uv, uv ) + vec4f( inv, inv ) * vec4f( -0.25, -0.125, 1.25, -0.125 );
	let o1 = vec4f( uv, uv ) + vec4f( inv, inv ) * vec4f( -0.125, -0.25, -0.125, 1.25 );
	let o2 = vec4f( o0.xz, o1.yw ) + vec4f( -2.0, 2.0, -2.0, 2.0 ) * vec4f( inv.xx, inv.yy ) * f32( SMAA_STEPS );
	var w = vec4f( 0.0 );
	let e = smaaE( uv );
	if ( e.y > 0.0 ) {
		// edge at north: distances to its ends left and right, and the crossing edges there
		let xl = smaaXLeft( o0.xy, o2.x, inv );
		let e1 = textureSampleLevel( aaEdges, smpLinearClamp, vec2f( xl, o1.y ), 0.0 ).r;
		let xr = smaaXRight( o0.zw, o2.y, inv );
		let d = vec2f( xl, xr ) / inv.x - pix.x;
		let e2 = textureSampleLevel( aaEdges, smpLinearClamp, vec2f( xr + inv.x, o1.y ), 0.0 ).r;
		let a = smaaArea( sqrt( abs( d ) ), e1, e2, 0.0 );
		w = vec4f( a, w.zw );
	}
	if ( e.x > 0.0 ) {
		// edge at west: up and down
		let yu = smaaYUp( o1.xy, o2.z, inv );
		let e1 = textureSampleLevel( aaEdges, smpLinearClamp, vec2f( o0.x, yu ), 0.0 ).g;
		let yd = smaaYDown( o1.zw, o2.w, inv );
		let d = vec2f( yu, yd ) / inv.y - pix.y;
		let e2 = textureSampleLevel( aaEdges, smpLinearClamp, vec2f( o0.x, yd + inv.y ), 0.0 ).g;
		let a = smaaArea( sqrt( abs( d ) ), e1, e2, 0.0 );
		w = vec4f( w.xy, a );
	}
	return w;
}
`}),n=new Vr({label:`SMAA blend`,colorFormats:[`rgba16float`],bindings:{aaSrc:{texture:this.src},aaWeights:{texture:()=>this.weights.texture}},code:`
fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let inv = 1.0 / vec2f( textureDimensions( aaWeights ) );
	let w0 = textureSampleLevel( aaWeights, smpLinearClamp, uv, 0.0 );
	let a = vec4f( w0.x, textureSampleLevel( aaWeights, smpLinearClamp, uv + vec2f( 0.0, inv.y ), 0.0 ).y,
		w0.z, textureSampleLevel( aaWeights, smpLinearClamp, uv + vec2f( inv.x, 0.0 ), 0.0 ).w );
	let C = textureSampleLevel( aaSrc, smpLinearClamp, uv, 0.0 );
	if ( dot( a, vec4f( 1.0 ) ) < 1e-5 ) { return C; }
	// the line with the largest weight through each direction; the stronger direction wins
	var off = vec2f( select( - a.z, a.w, a.w > a.z ), select( - a.x, a.y, a.y > a.x ) );
	if ( abs( off.x ) > abs( off.y ) ) { off.y = 0.0; } else { off.x = 0.0; }
	let Cop = textureSampleLevel( aaSrc, smpLinearClamp, uv + sign( off ) * inv, 0.0 );
	return mix( C, Cop, max( abs( off.x ), abs( off.y ) ) );
}
`});Object.assign(this._passes,{edges:e,weights:t,blend:n}),this._smaa=!0}render(e,t){this._passes||this._build();let n=this._passes;if(e===`smaa`&&this.area&&this.search){this._smaa||this._buildSMAA();let e=typeof this.src==`function`?this.src():this.src;this.edges.setSize(e.width,e.height),this.weights.setSize(e.width,e.height),n.edges.render({colorViews:[this.edges.texture],clear:Iu}),n.weights.render({colorViews:[this.weights.texture],clear:Iu}),n.blend.render({colorViews:[t],clear:Iu})}else e===`fxaa`||e===`smaa`?n.fxaa.render({colorViews:[t],clear:Iu}):n.none.render({colorViews:[t],clear:Iu})}},zu=[0,0,0,0];function Bu(e,t){let n=1,r=0;for(;e>0;)n/=t,r+=e%t*n,e=Math.floor(e/t);return r}var Vu=class{static DEBUG_VIEWS=[`Off`,`Locks (green: holding, blue: new)`,`Luma instability (red)`,`Clamped (red) / kept (green)`,`New frame weight`,`Motion (px / frame)`,`Resampling blur (blue)`,`Still pixels kept (yellow)`];constructor(e,t,n,r,i=null,a=null){this.beauty=e,this.depthTexture=t,this.velocityTexture=n,this.waterMaskTexture=i,this.camera=r,this.exposure=a||new Tn({label:`taauExposure`,count:1,type:`f32`,data:new Float32Array([1])}),this.uniforms=new L(`TAAUParams`,{prevInvViewProj:[`mat4x4f`,new P],jitterOffset:[`vec2f`,new E],cameraNearFar:[`vec2f`,new E(.1,1e3)],depthThreshold:[`f32`,5e-4],edgeDepthDiff:[`f32`,.001],hasWaterMask:[`f32`,+!!i],jitterPhases:[`f32`,8],reset:[`f32`,1],debugView:[`f32`,0],boxStill:[`f32`,3],boxMotion:[`f32`,1],maxAccumulation:[`f32`,2],motionAccumulation:[`f32`,10],blurComp:[`f32`,.5],locks:[`f32`,1],instability:[`f32`,1],lockThreshold:[`f32`,1.05],staticKeep:[`f32`,1]},{label:`taau`}),this.settings=this.uniforms.fields,this.jitterPhaseOverride=4,this.jitterScale=.5,this.jitterMoving=.35,this._camMotion=0,this._camPrev=null,this.debugView=0;let o=this.uniforms.fields;this._jitterOffset=o.jitterOffset,this._jitterIndex=0,this._outW=1;let s=()=>({colors:[{format:`rgba16float`,name:`color`},{format:`rgba16float`,name:`lock`},{format:`rgba8unorm`,name:`lumaHistory`}],label:`taauHistory`});this.history=[new Cn(1,1,s()),new Cn(1,1,s())],this._cur=0,this._prevDepth=new I({label:`taauPrevDepth`,width:1,height:1,format:`depth32float`,usage:[`sample`,`copyDst`]}),this._hasPrevInvVP=!1,this._needsRestart=!0,this._build()}get texture(){return this.history[this._cur].textures[0]}get output(){return this.debugView>0&&this._debugTarget?this._debugTarget.texture:this.texture}getTextureNode(){return this.texture}setSize(e,t){let n=this.history[0].setSize(e,t);this.history[1].setSize(e,t),this._outW=e,n&&(this._needsRestart=!0)}_beautyTexture(){return typeof this.beauty==`function`?this.beauty():this.beauty}jitter(){let e=this._beautyTexture(),t=e&&e.width?this._outW/e.width:1,n=this.jitterPhaseOverride||Math.max(1,Math.ceil(8*t*t));this.uniforms.fields.jitterPhases.value=n;let r=this._jitterIndex%n,i=this.jitterScale*(1+(this.jitterMoving-1)*this._cameraMotion());this.jitterNow=i;let a=(Bu(r+1,2)-.5)*i,o=(Bu(r+1,3)-.5)*i;return this._jitterOffset.value.set(a,o),[a,o]}_cameraMotion(){let e=this.camera&&this.camera.matrixWorld;if(!e)return 0;let t=e.elements,n=[t[12],t[13],t[14],t[8],t[9],t[10]],r=0;if(this._camPrev){let e=this._camPrev,t=Math.hypot(n[0]-e[0],n[1]-e[1],n[2]-e[2]),i=Math.hypot(n[3]-e[3],n[4]-e[4],n[5]-e[5]);r=Math.min(1,Math.max((t-.002)/.008,(i-5e-4)/.0015)),r=Math.max(0,r)}return this._camPrev=n,this._camMotion=r>this._camMotion?r:this._camMotion+(r-this._camMotion)*.15,this._camMotion}clearViewOffset(){this._jitterIndex=(this._jitterIndex+1)%1024}_build(){let e=()=>this._beautyTexture(),t=t=>({taau:{uniform:this.uniforms},taauBeauty:{texture:e},taauDepth:{texture:()=>this.depthTexture},taauPrevDepth:{texture:()=>this._prevDepth},taauVelocity:{texture:()=>this.velocityTexture},taauMask:{texture:()=>this.waterMaskTexture||this.velocityTexture},taauHistory:{texture:()=>this.history[t].textures[0]},taauLock:{texture:()=>this.history[t].textures[1]},taauLumaHistory:{texture:()=>this.history[t].textures[2]},taauExposure:{storage:this.exposure,access:`read`}}),n=`
const TAAU_EPS = 1e-3;
const TAAU_LANCZOS_WEIGHT_SCALE = 1.0 / 12.0;
const TAAU_AVG_LANCZOS_WEIGHT_PER_FRAME = 0.74 / 12.0;

fn taauToYCoCg( c: vec3f ) -> vec3f {
	return vec3f( dot( c, vec3f( 0.25, 0.5, 0.25 ) ), dot( c, vec3f( 0.5, 0.0, -0.5 ) ), dot( c, vec3f( -0.25, 0.5, -0.25 ) ) );
}
fn taauFromYCoCg( c: vec3f ) -> vec3f { return vec3f( c.x + c.y - c.z, c.x + c.z, c.x - c.y - c.z ); }
// FSR2 Tonemap / InverseTonemap (max channel Reinhard)
fn taauTonemap( c: vec3f ) -> vec3f { return c / ( max( max( 0.0, c.r ), max( c.g, c.b ) ) + 1.0 ); }
fn taauTonemapInverse( c: vec3f ) -> vec3f { return c / max( 1e-4, 1.0 - max( c.r, max( c.g, c.b ) ) ); }
fn taauMinDivMax( a: f32, b: f32 ) -> f32 { let m = max( a, b ); return select( 0.0, min( a, b ) / m, m != 0.0 ); }
// Lanczos-2 of the squared distance (FSR2 Lanczos2ApproxSq)
fn taauLanczos2Sq( x2In: f32 ) -> f32 {
	let x2 = min( x2In, 4.0 );
	let a = 0.4 * x2 - 1.0;
	let b = 0.25 * x2 - 1.0;
	return ( 1.5625 * a * a - 0.5625 ) * ( b * b );
}
// luma for the lock logic (FSR2 ComputeLockInputLuma: perceived lightness of the tone mapped colour, ^1/6)
fn taauLockLuma( rgb: vec3f ) -> f32 {
	let l = luminance( taauTonemap( rgb ) );
	let p = select( pow( l, 1.0 / 3.0 ) * 116.0 - 16.0, l * ( 24389.0 / 27.0 ), l <= 216.0 / 24389.0 ) * 0.01;
	return pow( max( p, 0.0 ), 1.0 / 6.0 );
}

// Catmull-Rom history lookup with 5 bilinear taps (the 4 corner taps are dropped)
fn taauSampleHistory( uvIn: vec2f ) -> vec4f {
	let size = vec2f( textureDimensions( taauHistory ) );
	let samplePos = uvIn * size;
	let texPos1 = floor( samplePos - 0.5 ) + 0.5;
	let f = samplePos - texPos1;
	let w0 = f * ( f * ( f * -0.5 + 1.0 ) - 0.5 );
	let w1 = f * f * ( f * 1.5 - 2.5 ) + 1.0;
	let w2 = f * ( f * ( f * -1.5 + 2.0 ) + 0.5 );
	let w3 = f * f * ( f * 0.5 - 0.5 );
	let w12 = w1 + w2;
	let tp0 = ( texPos1 - 1.0 ) / size;
	let tp3 = ( texPos1 + 2.0 ) / size;
	let tp12 = ( texPos1 + w2 / w12 ) / size;
	let wa = w12.x * w0.y; let wb = w0.x * w12.y; let wc = w12.x * w12.y; let wd = w3.x * w12.y; let we = w12.x * w3.y;
	let sum = textureSampleLevel( taauHistory, smpLinearClamp, vec2f( tp12.x, tp0.y ), 0.0 ) * wa
		+ textureSampleLevel( taauHistory, smpLinearClamp, vec2f( tp0.x, tp12.y ), 0.0 ) * wb
		+ textureSampleLevel( taauHistory, smpLinearClamp, vec2f( tp12.x, tp12.y ), 0.0 ) * wc
		+ textureSampleLevel( taauHistory, smpLinearClamp, vec2f( tp3.x, tp12.y ), 0.0 ) * wd
		+ textureSampleLevel( taauHistory, smpLinearClamp, vec2f( tp12.x, tp3.y ), 0.0 ) * we;
	return max( sum / ( wa + wb + wc + wd + we ), vec4f( 0.0 ) );
}

fn taauLoadBeauty( p: vec2i ) -> vec4f {
	let s = vec2i( textureDimensions( taauBeauty ) );
	return textureLoad( taauBeauty, clamp( p, vec2i( 0 ), s - 1 ), 0 );
}

// standard (0 near .. 1 far) perspective depth of the reversed-Z buffer at p (clamped)
fn taauDepthAt( p: vec2i ) -> f32 {
	let s = vec2i( textureDimensions( taauDepth ) );
	return 1.0 - textureLoad( taauDepth, clamp( p, vec2i( 0 ), s - 1 ), 0 );
}

// last frame's depth at uv, reprojected into this frame's camera (standard perspective depth)
fn taauPreviousDepth( uv: vec2f ) -> f32 {
	let s = vec2i( textureDimensions( taauPrevDepth ) );
	let d = textureLoad( taauPrevDepth, clamp( vec2i( uv * vec2f( s ) ), vec2i( 0 ), s - 1 ), 0 );
	let pw = taau.prevInvViewProj * vec4f( uv.x * 2.0 - 1.0, 1.0 - uv.y * 2.0, d, 1.0 );
	let world = pw.xyz / pw.w;
	let viewZ = ( frame.view * vec4f( world, 1.0 ) ).z;
	let near = taau.cameraNearFar.x; let far = taau.cameraNearFar.y;
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

fn taauInside( uv: vec2f ) -> bool { return all( uv >= vec2f( 0.0 ) ) && all( uv <= vec2f( 1.0 ) ); }

struct TaauOut { @location( 0 ) color: vec4f, @location( 1 ) lock: vec4f, @location( 2 ) lumaHistory: vec4f, DEBUG_FIELD };
@fragment fn fs( in: FSIn ) -> TaauOut {
	let uv = in.uv;
	let inSize = vec2f( textureDimensions( taauBeauty ) );
	let outSize = vec2f( textureDimensions( taauHistory ) );
	let downscale = inSize / outSize; // FSR2 DownscaleFactor (render / display)
	let exposure = taauExposure[ 0 ] * frame.exposure;

	// output pixel centre in input pixels; the input tap whose jittered sample is closest
	let pIn = uv * inSize;
	let closestTap = vec2i( round( pIn - ( vec2f( 0.5 ) + taau.jitterOffset ) ) );

	// ---- reprojection (three's TAAUNode): velocity of the nearest depth in the 3x3, disocclusion
	var closestDepth = 2.0;
	var closestPositionTexel = vec2i( 0 );
	var farthestDepth = -1.0;
	for ( var y = -1; y <= 1; y++ ) {
		for ( var x = -1; x <= 1; x++ ) {
			let neighbor = closestTap + vec2i( x, y );
			let depth = taauDepthAt( neighbor );
			if ( depth < closestDepth ) {
				closestDepth = depth;
				closestPositionTexel = neighbor;
			}
			farthestDepth = max( farthestDepth, depth );
		}
	}
	let vs = vec2i( textureDimensions( taauVelocity ) );
	let velocity = textureLoad( taauVelocity, clamp( closestPositionTexel, vec2i( 0 ), vs - 1 ), 0 ).xy;
	let historyUV = uv - velocity;
	let hrVelocity = length( velocity * outSize ); // output pixels per frame
	let isEdge = farthestDepth - closestDepth > taau.edgeDepthDiff;
	let isDisocclusion = closestDepth - taauPreviousDepth( historyUV ) > taau.depthThreshold;
	// the water surface keeps its history (its depth changes with the waves, not with occlusion)
	let ms = vec2i( textureDimensions( taauMask ) );
	let isWater = taau.hasWaterMask > 0.5 && textureLoad( taauMask, clamp( closestTap, vec2i( 0 ), ms - 1 ), 0 ).g > 0.5;
	let isExistingSample = taauInside( historyUV );
	let depthClip = select( 0.0, 1.0, isDisocclusion && ! isEdge && ! isWater );
	let isNewSample = ! isExistingSample || taau.reset > 0.5;

	// ---- history (FSR2 ReprojectHistoryColor / ReprojectHistoryLockStatus)
	var historyColor = vec3f( 0.0 );
	var lockStatus = vec2f( 0.0 );
	var temporalReactive = 0.0;
	var inMotionLastFrame = false;
	var blurPrev = 0.0;
	if ( ! isNewSample ) {
		historyColor = taauToYCoCg( min( taauSampleHistory( historyUV ).rgb * exposure, vec3f( 65504.0 ) ) );
		let ls = textureSampleLevel( taauLock, smpLinearClamp, historyUV, 0.0 );
		lockStatus = ls.xy;
		temporalReactive = sat( abs( ls.z ) );
		inMotionLastFrame = ls.z < 0.0;
		blurPrev = ls.w;
	}

	// ---- the 3x3 input taps: prepared (exposed) YCoCg colour, lock luma
	var samples: array<vec3f, 9>;
	var lumas: array<f32, 9>;
	var lumaSum = 0.0;
	for ( var i = 0; i < 9; i++ ) {
		let tap = closestTap + vec2i( i % 3 - 1, i / 3 - 1 );
		let rgb = min( max( taauLoadBeauty( tap ).rgb, vec3f( 0.0 ) ) * exposure, vec3f( 65504.0 ) );
		samples[ i ] = taauToYCoCg( rgb );
		lumas[ i ] = taauLockLuma( rgb );
		lumaSum += lumas[ i ];
	}

	// ---- new lock: the centre tap is a thin feature (FSR2 ComputeThinFeatureConfidence)
	var newLock = false;
	{
		let nucleus = lumas[ 4 ];
		var mask = 1u << 4u;
		var dMin = 3.4e38;
		var dMax = 0.0;
		for ( var i = 0; i < 9; i++ ) {
			if ( i == 4 ) { continue; }
			let l = lumas[ i ];
			let diff = max( l, nucleus ) / min( l, nucleus );
			if ( diff > 0.0 && diff < taau.lockThreshold ) { mask |= 1u << u32( i ); } else { dMin = min( dMin, l ); dMax = max( dMax, l ); }
		}
		let isRidge = nucleus > dMax || nucleus < dMin;
		let q0 = ( 1u << 0u ) | ( 1u << 1u ) | ( 1u << 3u ) | ( 1u << 4u );
		let q1 = ( 1u << 1u ) | ( 1u << 2u ) | ( 1u << 4u ) | ( 1u << 5u );
		let q2 = ( 1u << 3u ) | ( 1u << 4u ) | ( 1u << 6u ) | ( 1u << 7u );
		let q3 = ( 1u << 4u ) | ( 1u << 5u ) | ( 1u << 7u ) | ( 1u << 8u );
		newLock = isRidge && ( mask & q0 ) != q0 && ( mask & q1 ) != q1 && ( mask & q2 ) != q2 && ( mask & q3 ) != q3;
	}

	// ---- lock status (FSR2 UpdateLockStatus). The shading change luma is the local mean lock luma
	// (FSR2 reads a coarse mip of the luma)
	var thisFrameReactive = temporalReactive;
	let shadingLuma = lumaSum / 9.0;
	if ( lockStatus.y == 0.0 ) { lockStatus.y = shadingLuma; }
	let luminanceDiff = 1.0 - taauMinDivMax( lockStatus.y, shadingLuma );
	if ( newLock ) {
		lockStatus.y = shadingLuma;
		lockStatus.x = select( 1.0, 2.0, lockStatus.x != 0.0 );
	} else if ( lockStatus.x <= 1.0 ) {
		lockStatus.y = mix( lockStatus.y, shadingLuma, 0.5 );
	} else if ( luminanceDiff > 0.1 ) {
		lockStatus.x = 0.0;
	}
	thisFrameReactive = max( thisFrameReactive, sat( ( luminanceDiff - 0.1 ) * 10.0 ) );
	lockStatus.x *= 1.0 - thisFrameReactive;
	lockStatus.x *= select( 0.0, 1.0, depthClip < 0.1 );
	let lockContribution = sat( sat( sat( lockStatus.x - 1.0 ) * 4.0 ) * sat( taauMinDivMax( lockStatus.y, shadingLuma ) ) ) * taau.locks;

	// ---- this frame at the output pixel: Lanczos-2 over the 3x3 taps, and the rectification box
	// (FSR2 ComputeUpsampledColorAndWeight)
	let kernelReactive = max( thisFrameReactive, select( 0.0, 1.0, isNewSample ) );
	let maxKernelWeight = min( 1.99, 1.0 + ( 1.0 / downscale.x - 1.0 ) );
	let kernelBiasMax = maxKernelWeight * ( 1.0 - kernelReactive );
	let kernelBiasMin = max( 1.0, ( 1.0 + kernelBiasMax ) * 0.3 );
	let kernelBias = mix( kernelBiasMax, kernelBiasMin, max( 0.25 * depthClip, kernelReactive ) );
	let rectCurveBias = mix( -2.0, -3.0, sat( hrVelocity / 50.0 ) );
	var colorSum = vec3f( 0.0 );
	var weightSum = 0.0;
	var boxCenter = vec3f( 0.0 );
	var boxVec = vec3f( 0.0 );
	var boxWeight = 0.0;
	var aabbMin = vec3f( 3.4e38 );
	var aabbMax = vec3f( -3.4e38 );
	let iSize = vec2i( inSize );
	for ( var i = 0; i < 9; i++ ) {
		let tap = closestTap + vec2i( i % 3 - 1, i / 3 - 1 );
		let offset = vec2f( tap ) + vec2f( 0.5 ) + taau.jitterOffset - pIn; // sample position - output position
		let onScreen = all( tap >= vec2i( 0 ) ) && all( tap < iSize );
		let ob = offset * kernelBias;
		let w = select( 0.0, taauLanczos2Sq( dot( ob, ob ) ), onScreen );
		let c = samples[ i ];
		colorSum += c * w;
		weightSum += w;
		let bw = exp( rectCurveBias * dot( offset, offset ) );
		boxCenter += c * bw;
		boxVec += c * c * bw;
		boxWeight += bw;
		aabbMin = min( aabbMin, c );
		aabbMax = max( aabbMax, c );
	}
	boxCenter /= boxWeight;
	boxVec = sqrt( abs( boxVec / boxWeight - boxCenter * boxCenter ) );
	var upsampledWeight = select( 0.0, weightSum, weightSum > TAAU_EPS );
	var upsampled = vec3f( 0.0 );
	if ( upsampledWeight > TAAU_EPS ) {
		// deringing: the Lanczos lobes can't leave the neighbourhood's range
		upsampled = clamp( colorSum / upsampledWeight, aabbMin, aabbMax );
		upsampledWeight *= TAAU_LANCZOS_WEIGHT_SCALE;
	}

	// ---- luma instability (FSR2 ComputeLumaInstabilityFactor): the local luma returning to an older
	// value instead of the last one
	var lumaInstability = 0.0;
	var lumaHist = vec4f( 0.0 );
	var staticKeep = 0.0;
	{
		var curLuma = boxCenter.x / ( 1.0 + max( 0.0, boxCenter.x ) );
		curLuma = round( curLuma * 255.0 ) / 255.0;
		let sampleHist = max( depthClip, luminanceDiff ) < 0.1 && ! isNewSample;
		if ( sampleHist ) { lumaHist = textureSampleLevel( taauLumaHistory, smpLinearClamp, historyUV, 0.0 ); }
		let d0 = curLuma - lumaHist.x;
		var dmin = abs( d0 );
		if ( dmin >= 1.0 / 255.0 ) {
			for ( var i = 1; i < 4; i++ ) {
				let d1 = curLuma - lumaHist[ i ];
				if ( sign( d0 ) == sign( d1 ) ) { dmin = min( dmin, abs( d1 ) ); }
			}
			let boxSizeFactor = pow( sat( boxVec.x / 0.1 ), 6.0 );
			lumaInstability = select( 0.0, 1.0, dmin != abs( d0 ) ) * boxSizeFactor;
			lumaInstability = select( 0.0, 1.0, lumaInstability > 1.0 / 255.0 );
		}
		lumaInstability *= select( 0.0, 1.0, lumaHist.w != 0.0 ) * taau.instability;
		// Still pixels (not in FSR2): with the camera and the surface still, a clamp can only be the
		// jitter's doing (a sub-pixel plank gap that the 3x3 misses in this frame's samples), unless the
		// lighting changed. A real change (a shadow moving in) leaves the local luma away from all of
		// the last 4 frames'; the jitter brings it back to one of them. Such pixels keep their history.
		let dAll = min( min( abs( curLuma - lumaHist.x ), abs( curLuma - lumaHist.y ) ), min( abs( curLuma - lumaHist.z ), abs( curLuma - lumaHist.w ) ) );
		staticKeep = taau.staticKeep * select( 0.0, 1.0, hrVelocity < 0.05 && lumaHist.w != 0.0 && ! isWater ) * sat( 1.0 - ( dAll - 0.01 ) / 0.03 );
		lumaHist = vec4f( curLuma, lumaHist.xyz );
	}

	// ---- accumulation weight (FSR2 ComputeBaseAccumulationWeight)
	var accumulation = taau.maxAccumulation * select( 0.0, 1.0, isExistingSample ) * ( 1.0 - thisFrameReactive ) * ( 1.0 - depthClip );
	accumulation = min( accumulation, mix( accumulation, upsampledWeight * taau.motionAccumulation, max( select( 0.0, 1.0, inMotionLastFrame ), sat( hrVelocity * 10.0 ) ) ) );
	accumulation = min( accumulation, mix( accumulation, upsampledWeight, sat( hrVelocity / 20.0 ) ) );

	// Resampling blur (not in FSR2): even the Catmull-Rom loses fine detail when it samples between
	// texels, and in motion the history is resampled that way every frame (at 0.2 px ~80% of the
	// finest detail survives a resample). The blur the history has gathered (the variance its
	// resamples added, f (1 - f) per axis, decayed by the blend) caps the accumulation, so a blurred
	// history takes a larger share of the sharp new frame; a still camera resamples at texel centres.
	let hf = fract( historyUV * outSize - 0.5 );
	let hv = hf * ( 1.0 - hf );
	let blurAcc = blurPrev + hv.x + hv.y;
	let blurAlpha = min( blurAcc * taau.blurComp, select( 1.0, 0.15, isWater ) );
	accumulation = min( accumulation, upsampledWeight * ( 1.0 - blurAlpha ) / max( blurAlpha, 1e-3 ) );

	var outColor: vec3f;
	var alphaOut = 1.0;
	var dbgClamp = vec2f( 0.0 );
	if ( isNewSample ) {
		outColor = taauFromYCoCg( upsampled );
	} else {
		// rectify (FSR2 RectifyHistory): clamp to the variance box, but keep locked and oscillating
		// pixels' history; a clamp drops the accumulated weight
		// FSR2 widens the box while still by the upscale factor (1 at native: a 1 sigma box that clamped
		// the sub-pixel plank gaps out of the history, frame after frame); at least 3 sigma here
		let scaleInfluence = max( taau.boxStill, min( 20.0, pow( 1.0 / abs( downscale.x * downscale.y ), 3.0 ) ) );
		let boxScaleT = max( depthClip, sat( hrVelocity / 20.0 ) );
		let boxScale = mix( scaleInfluence, taau.boxMotion, boxScaleT );
		let boxMin = max( aabbMin, boxCenter - boxVec * boxScale );
		let boxMax = min( aabbMax, boxCenter + boxVec * boxScale );
		if ( any( boxMin > historyColor ) || any( historyColor > boxMax ) ) {
			let clamped = clamp( historyColor, boxMin, boxMax );
			// (not on the water: its glints move on their own and would leave trails)
			let contribution = select( sat( max( max( lumaInstability, lockContribution ), staticKeep ) ), 0.0, isWater );
			dbgClamp = vec2f( length( clamped - historyColor ) / max( boxVec.x * 2.0, 0.02 ), contribution );
			historyColor = mix( clamped, historyColor, contribution );
			accumulation = mix( min( accumulation, 0.1 ), accumulation, contribution );
		}
		// accumulate (FSR2 Accumulate), blending tone mapped colours
		let acc = max( TAAU_EPS, accumulation + upsampledWeight );
		let alpha = upsampledWeight / acc;
		alphaOut = alpha;
		let up = taauToYCoCg( taauTonemap( taauFromYCoCg( upsampled ) ) );
		let hi = taauToYCoCg( taauTonemap( taauFromYCoCg( historyColor ) ) );
		outColor = taauTonemapInverse( taauFromYCoCg( mix( hi, up, alpha ) ) );
	}

	// ---- lock lifetime (FSR2 FinalizeLockStatus)
	if ( ! taauInside( uv + velocity ) ) {
		lockStatus.x = 0.0;
	} else {
		lockStatus.x = max( 0.0, lockStatus.x - upsampledWeight / ( taau.jitterPhases * TAAU_AVG_LANCZOS_WEIGHT_PER_FRAME ) );
	}

	// ---- temporal reactive factor for the next frame (FSR2 ComputeTemporalReactiveFactor)
	var newReactive = min( 0.99, thisFrameReactive );
	newReactive = max( newReactive, mix( newReactive, 0.4, sat( hrVelocity ) ) );
	newReactive = max( newReactive * newReactive, depthClip * 0.1 );
	newReactive = select( newReactive, 1.0, isNewSample );
	if ( sat( hrVelocity * 10.0 ) >= 1.0 ) { newReactive = -max( TAAU_EPS, newReactive ); }

	var out: TaauOut;
	out.color = vec4f( max( outColor, vec3f( 0.0 ) ) / exposure, 1.0 );
	out.lock = vec4f( lockStatus, newReactive, select( blurAcc * ( 1.0 - alphaOut ), 0.0, isNewSample ) );
	out.lumaHistory = lumaHist;
DEBUG_OUTPUT
	return out;
}
`,r=[`rgba16float`,`rgba16float`,`rgba8unorm`],i=n.replace(`, DEBUG_FIELD`,``).replace(`DEBUG_OUTPUT
`,``);this._resolve=[0,1].map(e=>new Vr({label:`TAAU`,bindings:t(e),colorFormats:r,code:i})),this._buildDebug=()=>{let e=n.replace(`DEBUG_FIELD`,`@location( 3 ) debug: vec4f`).replace(`DEBUG_OUTPUT`,`
	// grey image, the chosen quantity over it (colours are divided by the exposure: the final pass
	// multiplies them back)
	let gray = vec3f( luminance( taauTonemap( outColor * exposure ) ) * 0.35 );
	let view = u32( taau.debugView );
	var v = gray;
	if ( view == 1u ) { v = gray + vec3f( 0.0, lockContribution, select( 0.0, 1.0, newLock ) ); }
	else if ( view == 2u ) { v = gray + vec3f( lumaInstability, 0.0, 0.0 ); }
	else if ( view == 3u ) { v = gray + vec3f( sat( dbgClamp.x ) * ( 1.0 - dbgClamp.y ), sat( dbgClamp.x ) * dbgClamp.y, 0.0 ); }
	else if ( view == 7u ) { v = gray + vec3f( staticKeep * 0.8, staticKeep * 0.8, 0.0 ); }
	else if ( view == 4u ) { v = vec3f( sat( alphaOut * 3.0 ) ); }
	else if ( view == 5u ) { v = gray + vec3f( sat( hrVelocity / 4.0 ), sat( hrVelocity / 16.0 ), 0.0 ); }
	else if ( view == 6u ) { v = gray + vec3f( 0.0, 0.0, sat( blurAlpha * 2.0 ) ); }
	out.debug = vec4f( v / max( exposure, 1e-4 ), 1.0 );`),i=[...r,`rgba16float`];this._resolveDebug=[0,1].map(n=>new Vr({label:`TAAU debug`,bindings:t(n),colorFormats:i,code:e})),this._debugTarget=new Cn(1,1,{colors:[`rgba16float`],label:`taauDebug`})}}render(){let e=br.fields,t=this.uniforms.fields;t.cameraNearFar.value.set(e.near.value,e.far.value),this._hasPrevInvVP||t.prevInvViewProj.value.copy(e.invViewProj.value),this._hasPrevInvVP=!0;let n=this.depthTexture;(this._prevDepth.width!==n.width||this._prevDepth.height!==n.height)&&(this._prevDepth.resize(n.width,n.height),this._needsRestart=!0),t.reset.value=+!!this._needsRestart,this._needsRestart=!1;let r=1-this._cur;if(this.debugView>0){this._resolveDebug||this._buildDebug();let e=this.history[r];this._debugTarget.setSize(e.textures[0].width,e.textures[0].height),t.debugView.value=this.debugView,this._resolveDebug[this._cur].render({colorViews:[...e.textures,this._debugTarget.texture],clear:zu})}else this._resolve[this._cur].render({colorViews:this.history[r].textures,clear:zu});this._cur=r;let i=this.depthTexture;F.getEncoder().copyTextureToTexture({texture:i.getGPU()},{texture:this._prevDepth.getGPU()},{width:i.width,height:i.height})}endFrame(){this._nextPrev=this._nextPrev||new P,this._nextPrev.copy(br.fields.invViewProj.value)}advance(){this._nextPrev&&this.uniforms.fields.prevInvViewProj.value.copy(this._nextPrev)}},Hu=class{constructor(){this.uniforms=new L(`LensParams`,{wet:[`f32`,0],age:[`f32`,100],seed:[`f32`,0],aspect:[`f32`,16/9]},{label:`lens`});let e=this.uniforms.fields;this.wet=e.wet,this.age=e.age,this.seed=e.seed,this.aspect=e.aspect,this.duration=9,this._wasUnder=!1,this.module=new R({name:`lens`,uniforms:this.uniforms,uniformName:`lensParams`,code:Uu})}update(e,t){t?this.wet.value=0:(this._wasUnder&&(this.wet.value=1,this.age.value=0,this.seed.value=Math.random()*97),this.age.value+=e,this.wet.value=Math.max(0,this.wet.value-e/this.duration)),this._wasUnder=t}build(){return this.module}},Uu=`
// integer hash (pcg2d) of the float bits: no transcendentals (18 cells x 2 hashes per pixel)
fn lensHash2( p: vec2f ) -> vec2f {
	var v = bitcast<vec2u>( p ) * 1664525u + 1013904223u;
	v.x += v.y * 1664525u; v.y += v.x * 1664525u;
	v = v ^ ( v >> vec2u( 16u ) );
	v.x += v.y * 1664525u; v.y += v.x * 1664525u;
	v = v ^ ( v >> vec2u( 16u ) );
	return vec2f( v >> vec2u( 8u ) ) / 16777216.0;
}

struct LensAcc { n2: vec2f, cover: f32, trail: f32 };

// one layer of droplets (clinging, or sliding: heavy drops that start sliding after a delay)
fn lensLayer( p: vec2f, cell: f32, rMin: f32, rMax: f32, density: f32, slide: bool, acc: ptr<function, LensAcc> ) {
	let wet = lensParams.wet; let age = lensParams.age; let seed = lensParams.seed;
	let c0 = floor( p / cell );
	for ( var j = -1; j <= 1; j++ ) {
		for ( var i = -1; i <= 1; i++ ) {
			let c = c0 + vec2f( f32( i ), f32( j ) );
			let h = lensHash2( c + seed );
			// no drop in this cell: it adds nothing (skip the outline math, most cells are empty)
			if ( h.x >= density ) { continue; }
			let h2 = lensHash2( c + seed + 17.3 );
			var center = ( c + ( vec2f( 0.2 ) + h2 * 0.6 ) ) * cell;
			// evaporation shrinks drops; big ones last longer
			let life = clamp( wet * 1.6 - h2.y * 0.6, 0.0, 1.0 );
			let r = mix( rMin, rMax, h.y * h.y ) * sqrt( life );
			if ( slide ) {
				// heavy drops start sliding after a delay and accelerate
				let t0 = h2.x * 3.0 + 0.4;
				let s = max( age - t0, 0.0 );
				let dy = s * s * ( r * 3.5 );
				center.y += dy;
				// wet streak above a sliding drop
				let dxT = abs( p.x - center.x );
				let above = center.y - p.y;
				let tr = smoothstep( r * 0.45, 0.0, dxT ) * smoothstep( 0.0, 0.01, above ) * smoothstep( dy + 0.01, 0.0, above );
				( *acc ).trail = max( ( *acc ).trail, tr * life );
			}
			// irregular outline: a few lobes, sliding drops stretched vertically
			let d = ( p - center ) * vec2f( 1.0, select( 1.0, 0.8, slide ) );
			// outside the largest outline (wobble <= 1.18): no coverage, skip the lobes
			let rB = max( r * 1.18, 1e-4 );
			if ( dot( d, d ) >= rB * rB ) { continue; }
			let ang = atan2( d.y, d.x );
			let wobble = 1.0 + sin( ang * 3.0 + h.x * 40.0 ) * 0.12 + sin( ang * 5.0 + h2.y * 30.0 ) * 0.06;
			let q = d / max( r * wobble, 1e-4 );
			let rq = dot( q, q );
			let a = smoothstep( 1.0, 0.7, rq );
			if ( a > ( *acc ).cover ) {
				( *acc ).n2 = q;
				( *acc ).cover = a;
			}
		}
	}
}

fn lensDroplets( uv: vec2f ) -> vec3f {
	var col = lensSharp( uv );
	let wet = lensParams.wet;
	if ( wet > 0.001 ) {
		let aspect = lensParams.aspect;
		let p = vec2f( uv.x * aspect, uv.y ); // y grows downward on screen

		// ---- droplets (two layers: clinging small drops, sliding large drops)
		var acc: LensAcc;
		acc.n2 = vec2f( 0.0 ); // droplet normal (xy) of the drop covering this pixel
		acc.cover = 0.0; // soft coverage (drops are out of focus)
		acc.trail = 0.0;
		lensLayer( p, 0.05, 0.003, 0.011, wet * 0.5, false, &acc );
		lensLayer( p, 0.13, 0.01, 0.026, wet * 0.22, true, &acc );

		if ( acc.cover > 0.001 ) {
			let n2 = acc.n2;
			let r2 = min( dot( n2, n2 ), 1.0 );
			let nz = sqrt( max( 1.0 - r2, 0.0 ) );
			// a drop is a strong fisheye lens: the image inside is inverted and blurred
			let off = n2 * -0.05 * ( 1.0 - nz * 0.5 );
			let inside = lensBlurred( uv + vec2f( off.x / aspect, off.y ) );
			let edge = smoothstep( 0.45, 1.0, r2 );
			let highlight = smoothstep( 0.3, 0.0, length( n2 - vec2f( -0.3, -0.4 ) ) ) * 0.35;
			let dropCol = inside * mix( 1.04, 0.7, edge ) + inside * highlight;
			col = mix( col, dropCol, acc.cover );
		}

		// wet trails: slight blur and darkening
		col = mix( col, lensBlurred( uv ) * 0.9, acc.trail * 0.6 );
	}
	return col;
}
`,Wu=7,Gu=.3,Ku=[{a:.72,r:.018,tint:[1,.85,.6],k:.55},{a:.44,r:.045,tint:[.55,.9,1],k:.35},{a:.16,r:.022,tint:[.8,1,.7],k:.45},{a:-.18,r:.07,tint:[.6,.75,1],k:.22},{a:-.42,r:.03,tint:[1,.7,.9],k:.4},{a:-.75,r:.11,tint:[.7,1,.85],k:.14},{a:-1.15,r:.05,tint:[1,.8,.55],k:.28}],qu=24,Ju=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Yu=class{constructor({depthTexture:e,clouds:t=null,sunDir:n}){this.sunDir=n,this.uniforms=new L(`FlareParams`,{sunDir:[`vec3f`,new A(0,1,0)],strength:[`f32`,1],sunUV:[`vec2f`,new E(.5,.5)],inView:[`f32`,0],aboveWater:[`f32`,1],aspect:[`f32`,16/9],discPx:[`f32`,6],dt:[`f32`,1/60]},{label:`flare`});let r=this.uniforms.fields;this.strength=r.strength,this.sunUV=r.sunUV,this.inView=r.inView,this.aboveWater=r.aboveWater,this.aspect=r.aspect,this.discPx=r.discPx,this.dt=r.dt,this.visibility=new Tn({label:`flareVisibility`,count:1,type:`f32`,data:new Float32Array([0])}),this.depthTexture=e,this.clouds=t;let i=``;for(let e=0;e<qu;e++){let t=Math.sqrt((e+.5)/qu),n=e*2.39996323;i+=`\tsky += flareSkyTap( c + vec2f( ${Ju(Math.cos(n)*t)}, ${Ju(Math.sin(n)*t)} ) * flareParams.discPx, size );\n`}let a=!!(t&&t.module);this.kernel=new yi({label:`Lens Flare Visibility`,modules:[z,a?t.module:null].filter(Boolean),bindings:{flareParams:{uniform:this.uniforms},flareDepth:{texture:()=>this.depthTexture},flareVisRW:{storage:this.visibility,access:`read_write`}},workgroupSize:[1,1,1],code:`
fn flareSkyTap( p: vec2f, size: vec2i ) -> f32 {
	let q = clamp( vec2i( p ), vec2i( 0 ), size - 1 );
	// reversed depth: the sky is at 0
	return select( 0.0, 1.0, textureLoad( flareDepth, q, 0 ) < 1e-7 );
}
@compute @workgroup_size( 1 )
fn main() {
	let size = vec2i( textureDimensions( flareDepth ) );
	let c = flareParams.sunUV * vec2f( size );
	var sky = 0.0;
${i}
	let cloudT = ${a?`cloudsSunTransmittance( cloudsSampleView( flareParams.sunDir ).a )`:`1.0`};
	let up = smoothstep( -0.02, 0.04, flareParams.sunDir.y );
	let tgt = sky / ${Ju(qu)} * cloudT * up * flareParams.inView * flareParams.aboveWater;
	let v = flareVisRW[ 0 ];
	flareVisRW[ 0 ] = mix( v, tgt, 1.0 - exp( flareParams.dt * -14.0 ) );
}
`});let o=``;for(let e of Ku)o+=`
	{
		let pd = flarePolyDist( p - s * ${Ju(e.a)} );
		let body = vec3f( smoothstep( ${Ju(e.r*.975)}, ${Ju(e.r*.975*.9)}, pd ), smoothstep( ${Ju(e.r)}, ${Ju(e.r*.9)}, pd ), smoothstep( ${Ju(e.r*1.025)}, ${Ju(e.r*1.025*.9)}, pd ) );
		let rim = smoothstep( ${Ju(e.r*.55)}, ${Ju(e.r)}, pd ) * 0.7 + 0.3;
		// smaller ghosts concentrate the same reflected energy: brighter
		ghosts += body * rim * vec3f( ${e.tint.map(Ju).join(`, `)} ) * ${Ju(e.k*.0028/(e.r*e.r))};
	}`;this.module=new R({name:`flare`,deps:[z],uniforms:this.uniforms,uniformName:`flareParams`,bindings:{flareVis:{storage:this.visibility,access:`read`}},code:`
const FLARE_SEG: f32 = ${Ju(2*Math.PI/Wu)};

// aperture polygon: distance scaled so the polygon edge sits at the given radius
fn flarePolyDist( d: vec2f ) -> f32 {
	let a = atan2( d.y, d.x ) + ${Ju(Gu)};
	return length( d ) * cos( floor( a / FLARE_SEG + 0.5 ) * FLARE_SEG - a );
}

// HDR flare light for this screen position (added before exposure / tone mapping)
fn flareLight( uv: vec2f ) -> vec3f {
	let asp = vec2f( flareParams.aspect, 1.0 );
	let p = ( uv - 0.5 ) * asp * vec2f( 1.0, -1.0 );
	let s = ( flareParams.sunUV - 0.5 ) * asp * vec2f( 1.0, -1.0 );
	let vis = flareVis[ 0 ];
	// light arriving from the sun disc (the key light colour follows the atmosphere's
	// transmittance; at night the moon is the key light and flares only faintly)
	let light = frame.sunColor * vis * flareParams.strength * 0.02;
	if ( vis <= 0.0 ) { return vec3f( 0.0 ); }

	var ghosts = vec3f( 0.0 );
${o}

	// fade the ghosts as the sun nears the centre (they collapse onto it and vanish)
	let offAxis = smoothstep( 0.02, 0.2, length( s ) );

	// halo: dispersive ring about the image centre
	let rc = length( p );
	let halo = vec3f( smoothstep( 0.03, 0.0, abs( rc - 0.43 ) ), smoothstep( 0.03, 0.0, abs( rc - 0.445 ) ), smoothstep( 0.03, 0.0, abs( rc - 0.46 ) ) ) * smoothstep( 0.25, 0.8, length( s ) ) * 0.12;

	// starburst and veiling glare around the sun (distances in image heights)
	let q = p - s;
	let rq = max( length( q ), 1e-4 );
	let aq = atan2( q.y, q.x ) + ${Ju(Gu)};
	let px = 1.0 / max( frame.outputResolution.y, 1.0 );
	// the nearest spike (two per blade) and this pixel's distance from its line
	let seg = ${Ju(Math.PI/Wu)};
	let k = floor( aq / seg + 0.5 );
	let perp = abs( sin( aq - k * seg ) ) * rq;
	let ki = k - ${Ju(14)} * floor( k / ${Ju(14)} ); // same spike across the atan2 seam
	let h1 = fract( sin( ki * 12.9898 + 4.1 ) * 43758.5453 );
	let h2 = fract( sin( ki * 78.233 + 1.7 ) * 43758.5453 );
	// thin at the disc, a little softer outward (same energy across the line: dimmer as it widens)
	let width = px * 0.8 + rq * 0.003;
	let line = exp( - ( perp * perp ) / ( width * width ) ) * ( px * 0.8 / width );
	let len = 0.05 + 0.08 * h1;
	let lenC = vec3f( len * 1.12, len, len * 0.88 );
	let taper = exp( - rq / lenC - ( rq * rq ) / ( lenC * lenC * 4.0 ) );
	let spikes = line * taper * ( 0.45 + 0.55 * h2 ) * 1.4;
	// fine streaks around the disc: smooth angular noise, short
	let t = ( aq * ${Ju(1/(2*Math.PI))} + 0.5 ) * 48.0;
	let ti = floor( t );
	let hA = fract( sin( ( ti - 48.0 * floor( ti / 48.0 ) ) * 91.345 ) * 43758.5453 );
	let hB = fract( sin( ( ti + 1.0 - 48.0 * floor( ( ti + 1.0 ) / 48.0 ) ) * 91.345 ) * 43758.5453 );
	let n = mix( hA, hB, smoothstep( 0.0, 1.0, t - ti ) );
	let fine = pow( n, 5.0 ) * exp( - rq / 0.03 ) * 0.3;
	let glow = exp( rq * -5.0 ) * 0.05 + exp( rq * -40.0 ) * 0.4;
	let burst = spikes + vec3f( fine + glow );

	return light * ( ghosts * offAxis + halo + burst );
}
`})}update(e,t,{aboveWater:n=!0}={}){let r=this.uniforms.fields.sunDir.value.copy(this.sunDir.value||this.sunDir);e.updateMatrixWorld();let i=Xu.copy(e.position).addScaledVector(r,1e3).project(e),a=Zu.set(0,0,-1).applyQuaternion(e.quaternion).dot(r)>.05;this.sunUV.value.set(i.x*.5+.5,.5-i.y*.5);let o=Math.max(Math.abs(i.x),Math.abs(i.y));this.inView.value=a?T.clamp((1-o)/.1,0,1):0,this.aboveWater.value=+!!n,this.aspect.value=e.aspect,this.dt.value=Math.min(t,.1);let s=this._depthH||1080;this.discPx.value=Math.max(1.5,.004625/Math.tan(T.degToRad(e.fov)*.5)*s*.5)}setDepthHeight(e){this._depthH=e}},Xu=new A,Zu=new A,Qu=20,$u=10,ed=400,td=224,nd=`
const MB_TILE: f32 = ${Qu}.0;
const MB_MAX_TILES_X: i32 = ${ed};

// uv motion (current - previous) of the pixel at uv with reversed-Z depth d (sky = 0): sky pixels
// reproject their far-plane points with last frame's unjittered camera
fn mbUvVelocity( vel: vec4f, uv: vec2f, d: f32 ) -> vec2f {
	let ndc = ( uv * 2.0 - 1.0 ) * vec2f( 1.0, -1.0 );
	let prev = mbParams.skyReproj * vec4f( ndc, 0.0, 1.0 );
	return select( ( ndc - prev.xy / prev.w ) * vec2f( 0.5, -0.5 ), vel.xy, d > 1e-7 );
}

// uv velocity -> half streak vector in output pixels (shutter applied, capped at one tile)
fn mbToPx( vel: vec2f ) -> vec2f {
	let v = vel * mbParams.outSize * ( mbParams.shutter * 0.5 );
	let l = length( v );
	return v * min( 1.0, MB_TILE / max( l, 1e-6 ) );
}
`,rd=class{constructor({velocityTexture:e,depthTexture:t,color:n}){this.uniforms=new L(`MotionBlurParams`,{skyReproj:[`mat4x4f`,new P],outSize:[`vec2f`,new E(1,1)],tileCount:[`vec2f`,new E(1,1)],shutter:[`f32`,.5],frameIndex:[`f32`,0]},{label:`motionBlur`});let r=this.uniforms.fields;this.shutter=r.shutter,this.outSize=r.outSize,this.tileCount=r.tileCount,this.frameIndex=r.frameIndex,this.skyReproj=r.skyReproj,this._vp=new P,this._prevVP=new P,this._hasPrev=!1,this.color=n,this.velocityTexture=e,this.depthTexture=t,this.tileMax=new Tn({label:`mbTileMax`,count:ed*td,type:`vec4f`}),this.neighborMax=new Tn({label:`mbNeighborMax`,count:ed*td,type:`vec4f`}),this._frame=0,this._buildKernels();let i=()=>typeof this.color==`function`?this.color():this.color;this.module=new R({name:`motionBlur`,deps:[z],uniforms:this.uniforms,uniformName:`mbParams`,bindings:{mbVelocity:{texture:()=>this.velocityTexture},mbDepth:{texture:()=>this.depthTexture},mbColor:{texture:i},mbNeighbor:{storage:this.neighborMax,access:`read`}},code:nd+`
fn mbTexel( uv: vec2f, inSize: vec2f ) -> vec2i { return clamp( vec2i( uv * inSize ), vec2i( 0 ), vec2i( inSize ) - 1 ); }
fn mbSample( uv: vec2f ) -> vec3f { return textureSampleLevel( mbColor, smpLinearClamp, uv, 0.0 ).rgb; }

// Motion-blurred colour at uv. sharpColor = the (sharpened) unblurred colour at uv, returned
// unchanged where nothing moves; the blur itself reads the unsharpened resolved image, so
// sharpening never acts on blurred pixels.
fn mbApply( sharpColor: vec3f, uvIn: vec2f ) -> vec3f {
	var out = sharpColor;
	if ( mbParams.shutter > 0.0 ) {
		let pix = uvIn * mbParams.outSize;
		let tile = clamp( vec2i( floor( pix / MB_TILE ) ), vec2i( 0 ), vec2i( mbParams.tileCount ) - 1 );
		let nm = mbNeighbor[ tile.y * MB_MAX_TILES_X + tile.x ];
		let nmLen = nm.z;
		if ( nmLen >= 0.5 ) {
			let inSize = vec2f( textureDimensions( mbVelocity ) );
			let cX = mbTexel( uvIn, inSize );
			let dX = textureLoad( mbDepth, cX, 0 );
			let vX = mbToPx( mbUvVelocity( textureLoad( mbVelocity, cX, 0 ), uvIn, dX ) );
			let lenX = length( vX );
			// interleaved gradient noise, shifted every frame
			let pn = floor( pix ) + mbParams.frameIndex * 5.588238;
			let jitter = fract( fract( dot( pn, vec2f( 0.06711056, 0.00583715 ) ) ) * 52.9829189 ) - 0.5;
			// sample pairs: ~3 px apart along the streak, 2..6 pairs
			let pairs = i32( clamp( ceil( nmLen / 3.0 ), 2.0, 6.0 ) );
			let invSize = 1.0 / mbParams.outSize;
			var acc = vec3f( 0.0 );
			let fade = sat( nmLen - 0.5 ); // continuous with the early-out below 0.5 px

			if ( nm.w > nmLen * 0.75 ) {
				// fast path: all streaks in the neighbourhood alike (camera rotation, distant scenery):
				// a plain directional average along the pixel's own motion
				for ( var i = 0; i < pairs; i++ ) {
					let tt = ( f32( i ) + 0.5 + jitter ) / f32( pairs );
					let o = vX * tt * invSize;
					acc += mbSample( uvIn + o );
					acc += mbSample( uvIn - o );
				}
				out = mix( sharpColor, acc / ( f32( pairs ) * 2.0 ), fade );
			} else {
				// full reconstruction: soft depth classification of each sample against the centre
				var wSum = 0.0;
				let dirX = select( nm.xy, vX, lenX > 0.5 );
				for ( var i = 0; i < pairs; i++ ) {
					let tt = ( f32( i ) + 0.5 + jitter ) / f32( pairs );
					// alternate between the neighbourhood's dominant direction and the pixel's own (Jimenez 2014)
					let dir = select( nm.xy, dirX, ( i & 1 ) == 1 );
					let off = dir * tt;
					let offLen = length( off );
					for ( var k = 0; k < 2; k++ ) {
						let sgn = select( -1.0, 1.0, k == 0 );
						let uvY = uvIn + off * invSize * sgn;
						let tY = mbTexel( uvY, inSize );
						let dY = textureLoad( mbDepth, tY, 0 );
						let lenY = length( mbToPx( mbUvVelocity( textureLoad( mbVelocity, tY, 0 ), uvY, dY ) ) );
						// reversed-Z depth ~ 1/distance: q > 0 when the sample is farther than the centre
						let q = ( dX - dY ) / max( max( dX, dY ), 1e-12 );
						let behind = sat( q * 40.0 + 0.5 );
						// a sample behind the centre shows through the centre's own streak; one in front
						// covers the centre when its streak reaches it (1 px soft cylinders)
						let spreadX = sat( lenX - max( offLen - 1.0, 0.0 ) );
						let spreadY = sat( lenY - max( offLen - 1.0, 0.0 ) );
						let w = behind * spreadX + ( 1.0 - behind ) * spreadY;
						acc += mbSample( uvY ) * w;
						wSum += w;
					}
				}
				// whatever the samples don't cover is this pixel's own (sharpened) colour
				let n = f32( pairs ) * 2.0;
				let res = acc / n + sharpColor * max( 1.0 - wSum / n, 0.0 );
				out = mix( sharpColor, res, fade );
			}
		}
	}
	return out;
}
`})}_buildKernels(){let e=``;for(let t=64;t>0;t>>=1)e+=`
	if ( t < ${t}u && t + ${t}u < 100u ) {
		let a = mbShared[ t ];
		let b = mbShared[ t + ${t}u ];
		let m = select( a, b, b.z > a.z );
		mbShared[ t ] = vec4f( m.xyz, min( a.w, b.w ) );
	}
	workgroupBarrier();`;let t={mbParams:{uniform:this.uniforms}};this.tileKernel=new yi({label:`Motion Blur Tiles`,modules:[z],bindings:{...t,mbVelocity:{texture:()=>this.velocityTexture},mbDepth:{texture:()=>this.depthTexture},mbTileMaxRW:{storage:this.tileMax,access:`read_write`}},workgroupSize:[$u,$u,1],code:nd+`
var<workgroup> mbShared: array<vec4f, 100>;
@compute @workgroup_size( WG_X, WG_Y, 1 )
fn main( @builtin( local_invocation_id ) lid: vec3u, @builtin( workgroup_id ) wid: vec3u ) {
	let t = lid.y * ${$u}u + lid.x;
	let inSize = vec2i( textureDimensions( mbVelocity ) );
	var best = vec2f( 0.0 ); var bestL = 0.0; var minL = 1e8;
	for ( var k = 0; k < 4; k++ ) {
		let o = vec2u( u32( k & 1 ), u32( k >> 1u ) );
		let p = vec2f( wid.xy * ${Qu}u + lid.xy * 2u + o ) + 0.5;
		let q = min( vec2i( p / mbParams.outSize * vec2f( inSize ) ), inSize - 1 );
		let v = mbToPx( mbUvVelocity( textureLoad( mbVelocity, q, 0 ), p / mbParams.outSize, textureLoad( mbDepth, q, 0 ) ) );
		let l = dot( v, v );
		if ( l > bestL ) {
			bestL = l;
			best = v;
		}
		minL = min( minL, l );
	}
	mbShared[ t ] = vec4f( best, bestL, minL );
	workgroupBarrier();
${e}
	if ( t == 0u ) {
		let r = mbShared[ 0 ];
		let idx = i32( wid.y ) * MB_MAX_TILES_X + i32( wid.x );
		// xy = longest half streak (px), z = its length, w = shortest length in the tile
		mbTileMaxRW[ idx ] = vec4f( r.xy, sqrt( r.z ), sqrt( r.w ) );
	}
}
`});let n=``;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let r=`m.z > best.z`;if(t!==0&&e!==0){let n=[-t*Math.SQRT1_2,-e*Math.SQRT1_2];r+=` && abs( dot( m.xy, vec2f( ${n[0]}, ${n[1]} ) ) ) > m.z * 0.7`}n+=`
		{
			let x = clamp( tx + ${t}, 0, nx - 1 ); let y = clamp( ty + ${e}, 0, ny - 1 );
			let m = mbTileMaxR[ y * MB_MAX_TILES_X + x ];
			if ( ${r} ) { best = m; }
			minL = min( minL, m.w );
		}`}this.neighborKernel=new yi({label:`Motion Blur Neighbourhood`,modules:[z],bindings:{...t,mbTileMaxR:{storage:this.tileMax,access:`read`},mbNeighborRW:{storage:this.neighborMax,access:`read_write`}},workgroupSize:[8,8,1],code:`
const MB_MAX_TILES_X: i32 = ${ed};
@compute @workgroup_size( WG_X, WG_Y, 1 )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let tx = i32( gid.x ); let ty = i32( gid.y );
	let nx = i32( mbParams.tileCount.x ); let ny = i32( mbParams.tileCount.y );
	if ( tx < nx && ty < ny ) {
		var best = vec4f( 0.0 ); var minL = 1e8;
${n}
		// xy = dominant half streak (px), z = its length, w = shortest streak in the neighbourhood
		mbNeighborRW[ ty * MB_MAX_TILES_X + tx ] = vec4f( best.xyz, minL );
	}
}
`})}updateCamera(e){e.updateMatrixWorld(),e.matrixWorldInverse&&e.matrixWorldInverse.copy(e.matrixWorld).invert(),this._vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._hasPrev||this._prevVP.copy(this._vp),this._hasPrev=!0,this.skyReproj.value.copy(this._vp).invert().premultiply(this._prevVP),this._prevVP.copy(this._vp)}compute(e,t){if(this.shutter.value<=0)return;let n=Math.min(ed,Math.ceil(e/Qu)),r=Math.min(td,Math.ceil(t/Qu));this.outSize.value.set(e,t),this.tileCount.value.set(n,r),this._frame=(this._frame+1)%64,this.frameIndex.value=this._frame,this.tileKernel.dispatch([n,r,1]),this.neighborKernel.dispatch([Math.ceil(n/8),Math.ceil(r/8),1])}},id=[0,0,0,0],ad=`
fn RRTAndODTFit( v: vec3f ) -> vec3f {
	let a = v * ( v + 0.0245786 ) - 0.000090537;
	let b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
fn acesFilmicToneMapping( colorIn: vec3f, exposure: f32 ) -> vec3f {
	let ACESInputMat = transpose( mat3x3f(
		0.59719, 0.35458, 0.04823,
		0.07600, 0.90834, 0.01566,
		0.02840, 0.13383, 0.83777 ) );
	let ACESOutputMat = transpose( mat3x3f(
		1.60475, -0.53108, -0.07367,
		-0.10208, 1.10813, -0.00605,
		-0.00327, -0.07276, 1.07602 ) );
	var color = colorIn * exposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return clamp( color, vec3f( 0.0 ), vec3f( 1.0 ) );
}
`,od=class{constructor(e,{sceneRenderer:t,camera:n,underwater:r,clouds:i=null,sunDir:a=null,haze:o=null}){this.renderer=e,this.camera=n,this.sceneRenderer=t,this.underwater=r,this.scale=1,this.outputTexture=null,this.outputSize=null,this.outputFormat=F.context?F.format:`rgba8unorm`,this.uniforms=new L(`PostParams`,{aoStrength:[`f32`,1],bloom:[`f32`,.05],vignette:[`f32`,.28],saturation:[`f32`,1.06],contrast:[`f32`,1.04],warmth:[`f32`,.02],grain:[`f32`,.012],sharpen:[`f32`,.45]},{label:`post`}),this.params=this.uniforms.fields,this.aeUniforms=new L(`AutoExposureParams`,{enabled:[`f32`,1],refLum:[`f32`,.25],min:[`f32`,.6],max:[`f32`,6],up:[`f32`,1.6],down:[`f32`,1.1]},{label:`autoExposure`}),this.autoExposure={...this.aeUniforms.fields,ref:this.aeUniforms.fields.refLum},this.exposure=new Tn({label:`autoExposure`,count:1,type:`f32`,data:new Float32Array([1])});let s=t.sceneRT,c=t.opaqueCopy;this.sceneColor=s.texture,this.opaqueDepth=c.depthTexture,this.finalDepth=s.depthTexture,this.aoDepth=new Cn(1,1,{colors:[`r16float`],label:`aoDepth`}),this._aoDepthPass=new Vr({label:`AO depth`,colorFormats:[`r16float`],bindings:{aoFullDepth:{texture:()=>this.opaqueDepth},aoFinalDepth:{texture:()=>this.finalDepth}},code:`
// negative where the water covers the opaque surface: its AO is never shown (the beauty pass skips
// covered pixels), so GTAO leaves those texels alone; everything else reads the magnitude
fn fragment( in: FSIn ) -> vec4f {
	let s = vec2i( textureDimensions( aoFullDepth ) );
	let p = min( vec2i( in.pos.xy ) * 2, s - 1 );
	let d = textureLoad( aoFullDepth, p, 0 );
	let covered = textureLoad( aoFinalDepth, p, 0 ) > d + 1e-7;
	return vec4f( select( d, - d, covered ), 0.0, 0.0, 1.0 );
}
`}),this.aoPass=new Nu(this.aoDepth.texture,n,{samples:12,depthIsColor:!0}),this.aoPass.resolutionScale=.5,this.aoPass.radius.value=2.2,this.aoPass.thickness.value=2,this.aoPass.distanceExponent.value=1.4,this.aoPass.scale.value=1.6,this.aoPass.samples.value=12,this.aoPass.useTemporalFiltering=!0,this.aoBlurX=new Cn(1,1,{colors:[`r16float`],label:`aoBlurX`}),this.aoBlurY=new Cn(1,1,{colors:[`r16float`],label:`aoBlurY`});let l=(e,t,n)=>{let r=``;for(let e=-2;e<=2;e++)r+=`
	{
		let uvK = in.uv + vec2f( ${t*e}.0, ${n*e}.0 ) / size;
		let rel = abs( postDepthOpaque( uvK ) - dC ) / max( dC, 1e-7 );
		let w = 1.0 / pow2( rel * 40.0 + 1.0 );
		sum += textureSampleLevel( aoSrc, smpLinearClamp, uvK, 0.0 ).r * w;
		wSum += w;
	}`;return new Vr({label:`AO blur `+(t?`x`:`y`),colorFormats:[`r16float`],bindings:{aoSrc:{texture:e},postAODepth:{texture:()=>this.aoDepth.texture}},code:`
fn postDepthOpaque( uv: vec2f ) -> f32 {
	let s = vec2i( textureDimensions( postAODepth ) );
	return abs( textureLoad( postAODepth, clamp( vec2i( floor( uv * vec2f( s ) ) ), vec2i( 0 ), s - 1 ), 0 ).r );
}
fn fragment( in: FSIn ) -> vec4f {
	let size = vec2f( textureDimensions( aoSrc ) );
	let dC = postDepthOpaque( in.uv );
	var sum = 0.0; var wSum = 0.0;
${r}
	return vec4f( sum / wSum, 0.0, 0.0, 1.0 );
}
`})};this._aoBlurXPass=l(()=>this.aoPass.texture,1,0),this._aoBlurYPass=l(()=>this.aoBlurX.texture,0,1),this.medium=new Cn(1,1,{colors:[`r8unorm`],label:`medium`}),r.mediumTexture=this.medium.texture,this.haze=o,o&&(o.mediumTexture=this.medium.texture),this.beauty=new Cn(1,1,{colors:[`rgba16float`],label:`beauty`}),this.smaaIn=new Cn(1,1,{colors:[`rgba16float`],label:`smaaBeforeTAA`}),this.taau=new Vu(()=>this.aaMode===`smaataa`?this.smaaIn.texture:this.beauty.texture,this.finalDepth,t.velocityTexture,n,t.waterMaskTexture,this.exposure),this.aaMode=`taa`,this.aa=new Ru({src:()=>this.beauty.texture,exposure:this.exposure}),this.motionBlur=new rd({velocityTexture:t.velocityTexture,depthTexture:s.depthTexture,color:()=>this.taau.output}),this.flare=a?new Yu({depthTexture:s.depthTexture,clouds:i,sunDir:a}):null,this.lens=new Hu,this._outW=0,this._outH=0,this._inW=0,this._inH=0,this._prevVP=new P,this._prevCamPos=new A,this._hasPrev=!1,this._size=new E,this._built=!1,this.profiler=null}_build(){this._built=!0;let e=this.underwater,t=this.haze;if(this._mediumPass=new Vr({label:`medium`,colorFormats:[`r8unorm`],modules:[e.module],code:`fn fragment( in: FSIn ) -> vec4f { return vec4f( underwaterMedium( in.uv ), 0.0, 0.0, 1.0 ); }`}),this._beautyPass=new Vr({label:`beauty (AO + haze + underwater)`,colorFormats:[`rgba16float`],modules:[e.compositeModule,t?t.compositeModule:null].filter(Boolean),defines:t?t._defines():{},bindings:{post:{uniform:this.uniforms},postScene:{texture:()=>this.sceneColor},postOpaqueDepth:{texture:()=>this.opaqueDepth},postFinalDepth:{texture:()=>this.finalDepth},postAO:{texture:()=>this.aoBlurY.texture},postAODepth:{texture:()=>this.aoDepth.texture}},code:`
fn postDepthLoad( uv: vec2f, which: i32 ) -> f32 {
	if ( which == 0 ) {
		let s = vec2i( textureDimensions( postOpaqueDepth ) );
		return textureLoad( postOpaqueDepth, clamp( vec2i( floor( uv * vec2f( s ) ) ), vec2i( 0 ), s - 1 ), 0 );
	}
	let s = vec2i( textureDimensions( postFinalDepth ) );
	return textureLoad( postFinalDepth, clamp( vec2i( floor( uv * vec2f( s ) ) ), vec2i( 0 ), s - 1 ), 0 );
}

fn postColorAO( uv: vec2f ) -> vec3f {
	let c = textureSampleLevel( postScene, smpLinearClamp, uv, 0.0 ).rgb;
	let dO = postDepthLoad( uv, 0 );
	let dF = postDepthLoad( uv, 1 );
	// reversed depth: sky = 0; water in front of the opaque surface has a larger depth value
	let isSky = dO < 1e-7;
	let covered = dF > dO + 1e-7;
	// no AO there (k = 0 below): skip the upsample
	if ( isSky || covered ) { return c; }
	// depth-aware upsample of the half-res AO: the 4 nearest AO texels, weighted by how close
	// their depth is to this pixel's (no dark halos bleeding across depth edges)
	// (the AO texels' depths: the half resolution copy the AO was computed from)
	let aoSizeI = vec2i( textureDimensions( postAO ) );
	let pa = uv * vec2f( aoSizeI ) - 0.5;
	let i0 = floor( pa );
	let fr = pa - i0;
	var aSum = 0.0; var wSum = 1e-4;
	for ( var k = 0; k < 4; k++ ) {
		let o = vec2i( k & 1, k >> 1u );
		let pT = clamp( vec2i( i0 ) + o, vec2i( 0 ), aoSizeI - 1 );
		let dT = abs( textureLoad( postAODepth, pT, 0 ).r );
		let wBil = select( 1.0 - fr.x, fr.x, o.x == 1 ) * select( 1.0 - fr.y, fr.y, o.y == 1 );
		// reversed-Z depth ~ near / z, so the relative depth difference ~ |dT - dO| / dO
		let rel = abs( dT - dO ) / max( dO, 1e-7 );
		let wDepth = 1.0 / pow2( rel * 40.0 + 1.0 );
		let wt = wBil * wDepth + 1e-5;
		aSum += textureLoad( postAO, pT, 0 ).r * wt;
		wSum += wt;
	}
	let a = aSum / wSum;
	// multi-bounce approximation (Jimenez 2016) for a typical outdoor albedo of ~0.35
	let aMB = max( a, ( ( a * 0.382 - 1.036 ) * a + 1.654 ) * a );
	// AO only removes ambient light: full effect where the pixel is lit by the sky alone,
	// a third of it on sunlit surfaces (still grounds objects without dirty halos)
	let ambientOnly = 1.0 - smoothstep( 0.12, 0.9, luminance( c ) );
	let k = select( post.aoStrength * mix( 0.35, 1.0, ambientOnly ), 0.0, isSky || covered );
	return c * mix( 1.0, aMB, k );
}

fn postSceneSample( uv: vec2f ) -> vec3f {
	${t?`return hazeApply( uv, vec4f( postColorAO( uv ), 1.0 ) ).rgb;`:`return postColorAO( uv );`}
}

fn fragment( in: FSIn ) -> vec4f {
	return underwaterComposite( in.uv, in.pos.xy );
}
`}),this.aoPass._pass||this.aoPass._build(),t&&!t._passes&&t._build(),e.renderShafts&&e.shaftPass,this._buildBloom(),this._buildMeter(),this._buildFinal(),this.profiler)for(let[e,t]of this.passes())this.profiler.track(`post `+e,t)}_buildBloom(){let e=e=>new Cn(1,1,{colors:[`rgba16float`],label:e});this.bloomScales=[.5,.25,.125,.0625,.03125],this.bloomDown=this.bloomScales.map((t,n)=>e(`bloomDown`+(n+1))),this.bloomUp=this.bloomScales.slice(0,4).map((t,n)=>e(`bloomUp`+(n+1)));let t=(e,t)=>new Vr({label:`bloom down`,colorFormats:[`rgba16float`],bindings:{bSrc:{texture:e}},code:`
fn bTap( uv: vec2f, texel: vec2f, x: f32, y: f32 ) -> vec3f { return textureSampleLevel( bSrc, smpLinearClamp, uv + texel * vec2f( x, y ), 0.0 ).rgb; }
fn karis( c: vec3f ) -> vec3f { return c / ( luminance( c ) + 1.0 ); }

fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let texel = 1.0 / vec2f( textureDimensions( bSrc ) );
	let a = bTap( uv, texel, -2.0, -2.0 ); let b = bTap( uv, texel, 0.0, -2.0 ); let c = bTap( uv, texel, 2.0, -2.0 );
	let d = bTap( uv, texel, -2.0, 0.0 ); let e = bTap( uv, texel, 0.0, 0.0 ); let f = bTap( uv, texel, 2.0, 0.0 );
	let g = bTap( uv, texel, -2.0, 2.0 ); let h = bTap( uv, texel, 0.0, 2.0 ); let i = bTap( uv, texel, 2.0, 2.0 );
	let j = bTap( uv, texel, -1.0, -1.0 ); let k = bTap( uv, texel, 1.0, -1.0 ); let l = bTap( uv, texel, -1.0, 1.0 ); let m = bTap( uv, texel, 1.0, 1.0 );
${t?`
	// weighted groups of four (Karis average) suppress fireflies
	let g0 = karis( ( j + k + l + m ) * 0.25 ) * 0.5;
	let g1 = karis( ( a + b + d + e ) * 0.25 ) * 0.125;
	let g2 = karis( ( b + c + e + f ) * 0.25 ) * 0.125;
	let g3 = karis( ( d + e + g + h ) * 0.25 ) * 0.125;
	let g4 = karis( ( e + f + h + i ) * 0.25 ) * 0.125;
	let s = g0 + g1 + g2 + g3 + g4;
	// undo the Karis tonemap on the result
	return vec4f( s / max( 1.0 - luminance( s ), 0.02 ), 1.0 );`:`
	let s = e * 0.125 + ( a + c + g + i ) * 0.03125 + ( b + d + f + h ) * 0.0625 + ( j + k + l + m ) * 0.125;
	return vec4f( s, 1.0 );`}
}
`}),n=(e,t)=>new Vr({label:`bloom up`,colorFormats:[`rgba16float`],bindings:{bSrc:{texture:e},bBase:{texture:t}},code:`
fn bTap( uv: vec2f, texel: vec2f, x: f32, y: f32 ) -> vec3f { return textureSampleLevel( bSrc, smpLinearClamp, uv + texel * vec2f( x, y ), 0.0 ).rgb; }
fn karis( c: vec3f ) -> vec3f { return c / ( luminance( c ) + 1.0 ); }

fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let texel = 1.0 / vec2f( textureDimensions( bSrc ) );
	let s = ( bTap( uv, texel, 0.0, 0.0 ) * 4.0
		+ ( bTap( uv, texel, -1.0, 0.0 ) + bTap( uv, texel, 1.0, 0.0 ) + bTap( uv, texel, 0.0, -1.0 ) + bTap( uv, texel, 0.0, 1.0 ) ) * 2.0
		+ ( bTap( uv, texel, -1.0, -1.0 ) + bTap( uv, texel, 1.0, -1.0 ) + bTap( uv, texel, -1.0, 1.0 ) + bTap( uv, texel, 1.0, 1.0 ) ) ) / 16.0;
	return vec4f( textureSampleLevel( bBase, smpLinearClamp, uv, 0.0 ).rgb + s, 1.0 );
}
`}),r=this.bloomDown,i=this.bloomUp;this._bloomPasses=[[t(()=>this.taau.texture,!0),r[0]],[t(()=>r[0].texture,!1),r[1]],[t(()=>r[1].texture,!1),r[2]],[t(()=>r[2].texture,!1),r[3]],[t(()=>r[3].texture,!1),r[4]],[n(()=>r[4].texture,()=>r[3].texture),i[3]],[n(()=>i[3].texture,()=>r[2].texture),i[2]],[n(()=>i[2].texture,()=>r[1].texture),i[1]],[n(()=>i[1].texture,()=>r[0].texture),i[0]]],this.bloomTex=i[0],this.half=r[0],this.meterRT=r[3]}_buildMeter(){let e=``;for(let t=128;t>0;t>>=1)e+=`
	if ( t < ${t}u ) {
		sumL[ t ] += sumL[ t + ${t}u ];
		sumW[ t ] += sumW[ t + ${t}u ];
	}
	workgroupBarrier();`;this.meterKernel=new yi({label:`Auto Exposure`,modules:[z],bindings:{ae:{uniform:this.aeUniforms},aeTex:{texture:()=>this.meterRT.texture},aeExposure:{storage:this.exposure,access:`read_write`}},workgroupSize:[256,1,1],code:`
var<workgroup> sumL: array<f32, 256>;
var<workgroup> sumW: array<f32, 256>;
@compute @workgroup_size( WG_X, 1, 1 )
fn main( @builtin( local_invocation_id ) lid: vec3u ) {
	let t = lid.x;
	let size = textureDimensions( aeTex );
	let n = size.x * size.y;
	var accL = 0.0; var accW = 0.0;
	for ( var i = 0u; i < 160u; i++ ) {
		let idx = t + i * 256u;
		if ( idx < n ) {
			let x = idx % size.x; let y = idx / size.x;
			let c = textureLoad( aeTex, vec2i( i32( x ), i32( y ) ), 0 ).rgb;
			let l = log2( max( luminance( c ), 1e-4 ) );
			let uvc = vec2f( ( f32( x ) + 0.5 ) / f32( size.x ), ( f32( y ) + 0.5 ) / f32( size.y ) ) - 0.5;
			let w = max( 1.0 - length( uvc * vec2f( 1.0, 1.4 ) ) * 1.2, 0.15 );
			accL += l * w;
			accW += w;
		}
	}
	sumL[ t ] = accL;
	sumW[ t ] = accW;
	workgroupBarrier();
${e}
	if ( t == 0u ) {
		let avg = exp2( sumL[ 0 ] / max( sumW[ 0 ], 1e-4 ) );
		// the eye only partly compensates: dark scenes stay darker (dusk and night must not
		// look like day), and at night at most one extra stop
		let ratio = ae.refLum / avg;
		let partial = select( ratio, pow( ratio, 0.8 ), ratio > 1.0 );
		let tgt = clamp( partial, ae.min, mix( ae.max, 2.0, frame.night ) );
		let cur = aeExposure[ 0 ];
		let rate = select( ae.down, ae.up, tgt > cur );
		let k = 1.0 - exp( - frame.dt * rate );
		let next = exp2( mix( log2( max( cur, 1e-3 ) ), log2( tgt ), k ) );
		aeExposure[ 0 ] = select( 1.0, next, ae.enabled > 0.5 );
	}
}
`})}_buildFinal(){let e=[z,this.motionBlur.module,this.lens.module];this.flare&&e.push(this.flare.module),this._finalPass=new Vr({label:`final (grade + tonemap)`,colorFormats:[this.outputFormat],modules:e,bindings:{post:{uniform:this.uniforms},postResolved:{texture:()=>this.taau.output},postBloom:{texture:()=>this.bloomTex.texture},postHalf:{texture:()=>this.half.texture},postExposure:{storage:this.exposure,access:`read`}},code:ad+`
fn tm( c: vec3f ) -> vec3f { return c / ( max( c.r, max( c.g, c.b ) ) + 1.0 ); }
fn loadResolved( p: vec2i ) -> vec3f { return textureLoad( postResolved, p, 0 ).rgb; }

// RCAS (AMD FSR1 robust contrast-adaptive sharpening) on the resolved image: TAA converges to a
// slightly soft image, RCAS restores the detail without halos (the lobe is limited by local
// contrast). Done on a tonemapped proxy of the HDR values and inverted afterwards.
fn rcas( uvIn: vec2f ) -> vec3f {
	let size = vec2i( textureDimensions( postResolved ) );
	let pc = clamp( vec2i( uvIn * vec2f( size ) ), vec2i( 1 ), size - 2 );
	let e = tm( loadResolved( pc ) );
	let b = tm( loadResolved( pc + vec2i( 0, -1 ) ) ); let d = tm( loadResolved( pc + vec2i( -1, 0 ) ) );
	let f = tm( loadResolved( pc + vec2i( 1, 0 ) ) ); let h = tm( loadResolved( pc + vec2i( 0, 1 ) ) );
	let mn4 = min( min( b, d ), min( f, h ) );
	let mx4 = max( max( b, d ), max( f, h ) );
	let hitMin = min( mn4, e ) / ( mx4 * 4.0 + 1e-5 );
	let hitMax = ( vec3f( 1.0 ) - max( mx4, e ) ) / ( mn4 * 4.0 - 4.0 );
	let lobeRGB = max( - hitMin, hitMax );
	// the sky (depth 0) is only sharpened lightly: clouds and cirrus are soft by nature, and the lobe
	// turned their sampling noise into fine grain (mbDepth: the scene depth, bound by the blur module)
	let dS = textureLoad( mbDepth, clamp( vec2i( uvIn * vec2f( textureDimensions( mbDepth ) ) ), vec2i( 0 ), vec2i( textureDimensions( mbDepth ) ) - 1 ), 0 );
	let skyK = select( 1.0, 0.3, dS < 1e-7 );
	let lobe = max( -0.1875, min( max( lobeRGB.r, max( lobeRGB.g, lobeRGB.b ) ), 0.0 ) ) * post.sharpen * skyK;
	let r = max( ( ( b + d + f + h ) * lobe + e ) / ( lobe * 4.0 + 1.0 ), vec3f( 0.0 ) );
	// back to HDR (inverse of the max-channel Reinhard)
	return r / max( 1.0 - max( r.r, max( r.g, r.b ) ), 1e-3 );
}

// integer hash (per pixel and frame) -> [0, 1)
fn postHash( p: vec2u, f: u32 ) -> f32 {
	var x = p.x * 1664525u + p.y * 1013904223u + f * 2654435761u;
	x ^= x >> 16u; x *= 0x7feb352du; x ^= x >> 15u; x *= 0x846ca68bu; x ^= x >> 16u;
	return f32( x >> 8u ) / 16777216.0;
}

fn bloomAt( uv: vec2f ) -> vec3f { return textureSampleLevel( postBloom, smpLinearClamp, uv, 0.0 ).rgb * post.bloom; }

fn lensSharp( uv: vec2f ) -> vec3f {
	var c = mbApply( rcas( uv ), uv ) + bloomAt( uv );
${this.flare?`	c += flareLight( uv );`:``}
	return c;
}
fn lensBlurred( uv: vec2f ) -> vec3f { return textureSampleLevel( postHalf, smpLinearClamp, uv, 0.0 ).rgb + bloomAt( uv ); }

fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	var c = lensDroplets( uv ) * postExposure[ 0 ];
	// white balance nudge + saturation + contrast around mid grey (in linear HDR)
	c = c * vec3f( 1.0 + post.warmth, 1.0, 1.0 - post.warmth );
	let l = luminance( c );
	c = mix( vec3f( l ), c, post.saturation );
	c = pow( max( c, vec3f( 0.0 ) ) / 0.18, vec3f( post.contrast ) ) * 0.18;
	// vignette (elliptical, soft)
	let dv = ( uv - 0.5 ) * vec2f( 1.0, 0.8 );
	let v = 1.0 - smoothstep( 0.25, 0.75, length( dv ) ) * post.vignette;
	c = c * v;
	// fine film grain (luminance-weighted): triangular white noise on the real pixel grid, new every
	// frame (a fixed pattern on a fixed grid showed as diagonal hatching in dark gradients)
	let px = vec2u( in.pos.xy );
	let fi = frame.frameIndex;
	let n = ( postHash( px, fi ) + postHash( px + vec2u( 7919u, 104729u ), fi ) - 1.0 ) * 0.5;
	c = c + c * ( n * post.grain );
	// renderOutput: ACES filmic tone mapping with the exposure, sRGB transfer
	let t = acesFilmicToneMapping( c, frame.exposure );
	// +-1 LSB triangular dither before the 8-bit output: no banding in the sky gradients
	let dq = ( postHash( px + vec2u( 31337u, 271u ), fi ) + postHash( px + vec2u( 1013u, 65537u ), fi ) - 1.0 ) / 255.0;
	return vec4f( linearToSrgb( t ) + vec3f( dq ), 1.0 );
}
`})}_outputSize(){if(this.outputSize)return this.outputSize;let e=this.renderer;return e&&e.width?{width:e.width,height:e.height}:F.canvas?{width:F.canvas.width,height:F.canvas.height}:{width:1,height:1}}_resize(){let{width:e,height:t}=this._outputSize(),n=Math.max(1,Math.round(e*this.scale)),r=Math.max(1,Math.round(t*this.scale));if(e===this._outW&&t===this._outH&&n===this._inW&&r===this._inH)return;this._outW=e,this._outH=t,this._inW=n,this._inH=r,this.sceneRenderer.setSize(n,r),this.beauty.setSize(n,r),this.smaaIn.setSize(n,r),this.medium.setSize(n,r),this.underwater.setSize&&this.underwater.setSize(n,r),this.aoPass.resolutionScale=.5*this.scale,this.aoPass.setSize(e,t);let i=Math.round(e*.5*this.scale),a=Math.round(t*.5*this.scale);this.aoDepth.setSize(i,a),this.aoBlurX.setSize(i,a),this.aoBlurY.setSize(i,a),this.haze&&this.haze.setSize(e,t),this.taau.setSize(e,t),this.bloomDown&&(this.bloomScales.forEach((n,r)=>this.bloomDown[r].setSize(Math.round(e*n),Math.round(t*n))),this.bloomScales.slice(0,4).forEach((n,r)=>this.bloomUp[r].setSize(Math.round(e*n),Math.round(t*n)))),this.flare&&this.flare.setDepthHeight(r),this.lens.aspect.value=e/t}setScale(e){e!==this.scale&&(this.scale=e,this.sceneRenderer.scale=e,this.haze&&this.haze.setScale(e))}setBloom(e){this.params.bloom.value=e}internalSize(e=new E){return e.set(this._inW,this._inH)}beginFrame(){this._built||(this._build(),this._outW=0),this._resize();let e=this.camera;e.updateMatrixWorld(),e.matrixWorldInverse&&e.matrixWorldInverse.copy(e.matrixWorld).invert(),this.motionBlur.updateCamera(e),this.taau.advance();let[t,n]=this.aaMode===`taa`||this.aaMode===`smaataa`?this.taau.jitter():[0,0];wr(e,this._inW,this._inH,{jitterX:-t,jitterY:n,prevViewProj:this._hasPrev?this._prevVP:null,prevCameraPos:this._hasPrev?this._prevCamPos:null});let r=br.fields;r.outputResolution.value.set(this._outW,this._outH),this._prevVP.copy(r.viewProjNoJitter.value),this._prevCamPos.copy(r.cameraPos.value),this._hasPrev=!0}render(){if(this._built||this.beginFrame(),this._timers,this.motionBlur.compute(this._outW,this._outH),this._aoDepthPass.render({colorViews:[this.aoDepth.texture],clear:id}),this.aoPass.render(),this._aoBlurXPass.render({colorViews:[this.aoBlurX.texture],clear:id}),this._aoBlurYPass.render({colorViews:[this.aoBlurY.texture],clear:id}),this._mediumPass.render({colorViews:[this.medium.texture],clear:id}),this.underwater.renderShafts&&this.underwater.renderShafts(this.camera.position.y<B.cameraWaterHeight.value+Tu+1),this.haze&&(this.haze.update(),this.haze.render()),this._beautyPass.render({colorViews:[this.beauty.texture],clear:id}),this.aaMode===`taa`||this.aaMode===`smaataa`)this.aaMode===`smaataa`&&this.aa.render(`smaa`,this.smaaIn.texture),this.taau.render();else{let e=this.taau,t=1-e._cur;this.aa.render(this.aaMode,e.history[t].textures[0]),e._cur=t,e._needsRestart=!0}for(let[e,t]of this._bloomPasses)e.render({colorViews:[t.texture],clear:id});let e=this.outputTexture?this.outputTexture.view({dimension:`2d`,mipLevelCount:1}):F.context.getCurrentTexture().createView();this._finalPass.render({colorViews:[e],clear:id}),this.meterKernel.dispatch([1,1,1])}endFrame(){this.taau.clearViewOffset(),this.taau.endFrame()}passes(){let e=[[`motion blur tiles`,this.motionBlur.tileKernel],[`motion blur neighbours`,this.motionBlur.neighborKernel],[`GTAO`,this.aoPass._pass],[`AO blur x`,this._aoBlurXPass],[`AO blur y`,this._aoBlurYPass],[`medium`,this._mediumPass]];return this.haze&&this.haze._passes&&(e.push([`haze march`,this.haze._passes.march],[`haze sun mask`,this.haze._passes.mask]),this.haze._passes.blur.forEach((t,n)=>e.push([`haze god rays `+n,t]))),this.underwater._shaftPass&&e.push([`underwater shafts`,this.underwater._shaftPass]),e.push([`beauty`,this._beautyPass],[`TAAU`,this.taau._resolve[0]],[`TAAU `,this.taau._resolve[1]]),this._bloomPasses.forEach(([t],n)=>e.push([`bloom `+n,t])),e.push([`final`,this._finalPass],[`auto exposure`,this.meterKernel]),this.flare&&e.push([`flare visibility`,this.flare.kernel]),e}},sd=[0,0,0,0],cd=16,ld=2500,ud=900,dd=6e4,fd=8,pd=[.9,.97,1],md=3.5,hd={sigma:15e-5,H:110},gd={sigma:32e-6,H:1400},_d=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},vd=new R({name:`haze-shadow-hard`,deps:[hr],code:`
fn sunShadowHard( P: vec3f ) -> f32 {
	if ( shadowParams.enabled < 0.5 ) { return 1.0; }
	let dist = dot( P - frame.cameraPos, - vec3f( frame.view[ 0 ][ 2 ], frame.view[ 1 ][ 2 ], frame.view[ 2 ][ 2 ] ) );
	let c = shadowCascadeOf( dist );
	if ( c < 0 ) { return 1.0; }
	let sc = shadowParams.matrices[ c ] * vec4f( P, 1.0 );
	let uvz = vec3f( sc.x * 0.5 + 0.5, 0.5 - sc.y * 0.5, sc.z );
	if ( any( uvz.xy < vec2f( 0.0 ) ) || any( uvz.xy > vec2f( 1.0 ) ) || uvz.z > 1.0 ) { return 1.0; }
	return select( 1.0, 0.0, _shadowDepth( uvz.xy, c ) < uvz.z - 2e-5 );
}
`}),yd=class{constructor({depthTexture:e,underwater:t,atmosphere:n,sky:r=null,clouds:i=null,terrain:a=null,csm:o=null}){this.depthTexture=e,this.uw=t,this.atmosphere=n,this.sky=r,this.clouds=i,this.terrain=a,this.csm=o,this.uniforms=new L(`HazeParams`,{density:[`f32`,1.6],shafts:[`f32`,1],enabled:[`f32`,1],frame:[`f32`,0],sunUV:[`vec2f`,new E(.5,.5)],ssFade:[`f32`,0],hasMedium:[`f32`,0],histValid:[`f32`,0]},{label:`haze`});let s=this.uniforms.fields;this.density=s.density,this.shafts=s.shafts,this.enabled=s.enabled,this.frame=s.frame,this.sunUV=s.sunUV,this.ssFade=s.ssFade,this.mediumTexture=null,this.low=new Cn(1,1,{colors:[`rgba16float`],label:`hazeShafts`}),this.hist=[0,1].map(e=>new Cn(1,1,{colors:[`rgba16float`],label:`hazeShaftsHistory`+e})),this._hc=0,this._histValid=!1,this.ssTargets=[0,1,2,3].map(e=>new Cn(1,1,{colors:[`r16float`],label:`hazeSS`+e})),this.ssShafts=this.ssTargets[3],this.godRays=!0,this.scale=1,this._module=null,this._passes=null}setScale(e){this.scale=e}setSize(e,t){let n=this.scale;this.low.setSize(Math.round(e*.5*n),Math.round(t*.5*n));for(let r of this.hist)r.setSize(Math.round(e*.5*n),Math.round(t*.5*n));this._histValid=!1;for(let r of this.ssTargets)r.setSize(Math.round(e*.25*n),Math.round(t*.25*n))}update(){this.frame.value=(this.frame.value+1)%1024;let e=this.uw.camWorld.value.elements,t=B.sunDir.value,n=this.uw.proj.value,r=e[0]*t.x+e[1]*t.y+e[2]*t.z,i=e[4]*t.x+e[5]*t.y+e[6]*t.z,a=e[8]*t.x+e[9]*t.y+e[10]*t.z,o=T.smoothstep,s=0;if(a<-.02){let e=.5+.5*(r/-a)*n.x,c=.5-.5*(i/-a)*n.y;this.sunUV.value.set(e,c),s=(1-o(Math.max(Math.abs(e-.5),Math.abs(c-.5)),.6,1.15))*o(-a,.02,.25)*(1-o(t.y,.3,.75))}(B.cameraUnderwater.value>.5||this.enabled.value<.5||this.shafts.value<=0||!this.godRays)&&(s=0),this.ssFade.value=s,this.uniforms.fields.hasMedium.value=+!!this.mediumTexture}render(){this._passes||this._build();let e=this._passes;e.march.render({colorViews:[this.low.texture],clear:sd});let t=this.enabled.value>.5&&this.shafts.value>0;if(this.uniforms.fields.histValid.value=this._histValid&&t?1:0,e.temporal[this._hc].render({colorViews:[this.hist[1-this._hc].texture],clear:sd}),this._hc=1-this._hc,this._histValid=t,this.ssFade.value>.001){e.mask.render({colorViews:[this.ssTargets[0].texture],clear:sd});for(let t=0;t<3;t++)e.blur[t].render({colorViews:[this.ssTargets[t+1].texture],clear:sd})}}_deps(){let e=hr.code.includes(`fn sunShadowHard`)?hr:vd;return[z,this.uw.module,this.atmosphere&&this.atmosphere.module,this.sky&&this.sky.module,this.clouds&&this.clouds.module,this.terrain&&this.terrain.module,e]}_defines(){return{HZ_CLOUDS:this.clouds&&this.clouds.module?1:0,HZ_TERRAIN:this.terrain&&this.terrain.module?1:0,HZ_MOON:this.sky&&this.sky.module?1:0}}get module(){return this._module||=new R({name:`haze`,deps:this._deps(),uniforms:this.uniforms,uniformName:`hazeParams`,bindings:{hazeDepth:{texture:()=>this.depthTexture}},code:`
const HZ_MARINE_SIGMA: f32 = ${_d(hd.sigma)};
const HZ_MARINE_H: f32 = ${_d(hd.H)};
const HZ_AEROSOL_SIGMA: f32 = ${_d(gd.sigma)};
const HZ_AEROSOL_H: f32 = ${_d(gd.H)};
const HZ_FAR_CLAMP: f32 = ${_d(dd)};
const HZ_NEAR: f32 = ${_d(ud)};

// optical depth of one exponential layer from height hc along a ray with direction y component
// vy over distance d
fn hazeLayerDepth( sigma: f32, H: f32, hc: f32, vy: f32, d: f32 ) -> f32 {
	let base = exp( hc / - H ) * sigma;
	let k = vy * d / H;
	let fk = select( H * ( 1.0 - exp( - k ) ) / vy, d, abs( k ) < 1e-3 );
	return base * fk;
}

// unshadowed in-scatter depth of both layers from height hc along a ray (direction y component vy)
// over distance d: 1 - their transmittance
fn hazeInScatter( hc: f32, vy: f32, d: f32 ) -> f32 {
	return 1.0 - exp( - ( hazeLayerDepth( HZ_MARINE_SIGMA, HZ_MARINE_H, hc, vy, d ) + hazeLayerDepth( HZ_AEROSOL_SIGMA, HZ_AEROSOL_H, hc, vy, d ) ) * hazeParams.density );
}

// Cornette-Shanks (strong forward lobe) plus a little isotropic scattering
// (a softer lobe than coastal aerosol's ~0.76: toward the sun the haze glared over everything
// in front of it and washed distant foliage out to white)
fn hazePhase( cosT: f32 ) -> f32 {
	let g = 0.62; let g2 = g * g;
	let cs = 3.0 * ( 1.0 - g2 ) / ( 8.0 * PI * ( 2.0 + g2 ) ) * ( cosT * cosT + 1.0 ) / pow( max( 1.0 + g2 - cosT * 2.0 * g, 1e-4 ), 1.5 );
	return cs * 0.7 + 0.3 / ( 4.0 * PI );
}

struct HazeRay { dist: f32, dir: vec3f, sky: bool, rayLen: f32 };

// view distance of the pixel (reversed-Z depth, sky = 0) and its world direction
fn hazeRay( uv: vec2f ) -> HazeRay {
	let size = vec2f( textureDimensions( hazeDepth ) );
	let d = textureLoad( hazeDepth, vec2i( clamp( uv, vec2f( 0.0 ), vec2f( 0.9999 ) ) * size ), 0 );
	let ray = underwaterViewRay( uv );
	var r: HazeRay;
	r.rayLen = length( ray );
	r.sky = d < 1e-7;
	r.dist = select( min( - underwaterViewZ( max( d, 1e-9 ) ) * r.rayLen, HZ_FAR_CLAMP ), HZ_FAR_CLAMP, r.sky );
	r.dir = normalize( ( underwaterParams.camWorld * vec4f( ray, 0.0 ) ).xyz );
	return r;
}

// the march's hill shadow: terrainSunShadowAt with one filtered fetch instead of four loads (the
// texture is half float, filterable; the materials keep the loads: they are short of samplers)
fn hazeTerrainSun( P: vec3f ) -> f32 {
#if HZ_TERRAIN
	let s = textureSampleLevel( terrainSunShadowTex, smpLinearClamp, terrainUvOf( P.xz ), 0.0 );
	let w = s.y * 0.012 + 0.35;
	return mix( 1.0, smoothstep( -w, w, P.y - s.x ), terrainParams.sunBaked );
#else
	return 1.0;
#endif
}

// the march's sun visibility after the shadow map (hills, clouds), only where light is left
fn hazeVisibilityRest( P: vec3f, v0: f32 ) -> f32 {
	var v = v0;
#if HZ_TERRAIN
	if ( v > 0.0 ) { v *= hazeTerrainSun( P ); }
#endif
#if HZ_CLOUDS
	if ( v > 0.0 ) {
		let L = frame.sunDir;
		let g = P.xz - L.xz * ( max( P.y, 0.0 ) / max( L.y, 0.08 ) );
		v *= cloudsShadow( g );
	}
#endif
	return v;
}

// sun visibility at world position P: shadow cascades, hills, clouds
fn hazeVisibility( P: vec3f ) -> f32 {
	// (each lookup only where the ones before left some light)
	var v = sunShadowHard( P );
#if HZ_TERRAIN
	if ( v > 0.0 ) { v *= terrainSunShadowAt( P ); }
#endif
#if HZ_CLOUDS
	if ( v > 0.0 ) {
		// the cloud shadow map is the ground's shadow along the key light: follow the light down
		let L = frame.sunDir;
		let g = P.xz - L.xz * ( max( P.y, 0.0 ) / max( L.y, 0.08 ) );
		v *= cloudsShadow( g );
	}
#endif
	return v;
}

`}),this._module}get compositeModule(){return this._compositeModule||=new R({name:`haze-composite`,deps:[this.module],bindings:{hazeLow:{texture:()=>this.hist[this._hc].texture},hazeSS:{texture:()=>this.ssShafts.texture},hazeMedium:{texture:()=>this.mediumTexture||this.low.texture}},code:`
// c: the scene colour at uv. Returns the hazed colour.
//   geometry: c T + (1 - T) fog (1 - fSun (1 - h)) + (1 - h) E p(θ) lit - h fSun fog (all - lit)
//   sky:      c - fSun fog (all - lit)
// fog: sky radiance just above the horizon in the view direction; fSun: its sunlit share (phase
// weighted); lit / all: shadowed / unshadowed in-scatter depth from the march; h: 0 near the
// camera (explicit, shadowed sun single scattering: bright shafts) -> 1 far away and for the sky
// (only the shadowed share of the sky-coloured haze is removed: consistent with the sky)
fn hazeApply( uv: vec2f, c: vec4f ) -> vec4f {
	var out = c.rgb;
	let isActive = hazeParams.enabled > 0.5 && frame.cameraUnderwater < 0.5;
	if ( isActive ) {
		var inAir = 1.0;
		if ( hazeParams.hasMedium > 0.5 ) {
			let ms = vec2i( textureDimensions( hazeMedium ) );
			inAir = select( 1.0, 0.0, textureLoad( hazeMedium, clamp( vec2i( uv * vec2f( ms ) ), vec2i( 0 ), ms - 1 ), 0 ).r > 0.5 );
		}
		if ( inAir > 0.5 ) {
			let R = hazeRay( uv );
			let dist = R.dist; let dir = R.dir; let sky = R.sky;
			let camH = max( underwaterParams.camPos.y - frame.seaLevel, 0.0 );

			// the haze looks like the sky just above the horizon in this direction
			let vh = normalize( vec3f( dir.x, max( dir.y, 0.02 ), dir.z ) );
			var fog = atmosphereSkyLuminance( vh );
#if HZ_MOON
			fog += skyMoonSky( vh );
#endif

			// sun (moon) light scattered toward the eye, and its share of the haze radiance
			let Ep = frame.sunColor * hazePhase( dot( dir, frame.sunDir ) );
			let eL = luminance( Ep );
			let fSun = eL / ( eL + luminance( frame.skyIrradiance ) + 1e-5 ) * min( hazeParams.shafts, 1.0 );
			let h = select( smoothstep( 0.0, HZ_NEAR, dist ), 1.0, sky );

			// ---- aerial perspective / marine haze on geometry (the water surface included)
			if ( ! sky ) {
				let tau = ( hazeLayerDepth( HZ_MARINE_SIGMA, HZ_MARINE_H, camH, dir.y, dist ) + hazeLayerDepth( HZ_AEROSOL_SIGMA, HZ_AEROSOL_H, camH, dir.y, dist ) ) * hazeParams.density;
				let T = exp( - tau );
				out = out * T + fog * ( 1.0 - T ) * ( 1.0 - fSun * ( 1.0 - h ) );
			}

			// ---- sun shafts: depth-aware upsample of the half resolution march
			if ( hazeParams.shafts > 0.0 ) {
				let ls = vec2i( textureDimensions( hazeLow ) );
				let pa = uv * vec2f( ls ) - 0.5;
				let i0 = floor( pa );
				let fr = pa - i0;
				var acc = vec2f( 0.0 );
				var wSum = 1e-6;
				for ( var k = 0; k < 4; k++ ) {
					let o = vec2i( k & 1, k >> 1u );
					let s = textureLoad( hazeLow, clamp( vec2i( i0 ) + o, vec2i( 0 ), ls - 1 ), 0 );
					let wb = select( 1.0 - fr.x, fr.x, o.x == 1 ) * select( 1.0 - fr.y, fr.y, o.y == 1 );
					let rel = abs( s.z - dist ) / max( dist, 0.5 );
					let wd = 1.0 / pow2( rel * 10.0 + 1.0 );
					let wt = wb * wd + 1e-5;
					acc += s.xy * wt;
					wSum += wt;
				}
				// The upsample carries the lit share of the in-scatter and the march's ratio to the exact
				// in-scatter; the exact in-scatter is then taken over this pixel's own ray. Upsampling the
				// in-scatter itself gave a thin frond in front of the low sun, whose half resolution
				// neighbours all lie far behind it, their long rays' in-scatter: bright, flickering specks.
				let sh = acc / wSum;
				let all = sh.y * hazeInScatter( camH, dir.y, min( dist, ${_d(ld)} ) );
				let lit = sat( sh.x ) * all;
				let near = Ep * lit * ( 1.0 - h ) * hazeParams.shafts;
				let deficit = fog * fSun * ( all - lit ) * h;
				out = max( out + near - deficit, vec3f( 0.0 ) );
			}

			// ---- screen-space god rays: sun colour x phase x the near air's haze depth
			if ( hazeParams.ssFade > 0.001 ) {
				let rays = textureSampleLevel( hazeSS, smpLinearClamp, uv, 0.0 ).r;
				let k = 1.0 - exp( - HZ_MARINE_SIGMA * 300.0 * hazeParams.density );
				out += Ep * rays * k * hazeParams.shafts * hazeParams.ssFade * ${_d(md)};
			}
		}
	}
	return vec4f( out, c.a );
}
`}),this._compositeModule}_build(){let e=this.module,t=this._defines(),n=new Vr({label:`haze march`,modules:[e],defines:t,colorFormats:[`rgba16float`],code:`
fn fragment( in: FSIn ) -> vec4f {
	let uv = in.uv;
	let R = hazeRay( uv );
	var out = vec4f( 0.0, 0.0, R.dist, 1.0 );
	if ( hazeParams.enabled > 0.5 && frame.cameraUnderwater < 0.5 && hazeParams.shafts > 0.0 ) {
		let cam = underwaterParams.camPos;
		let tMax = min( R.dist, ${_d(ld)} );
		// interleaved gradient noise, decorrelated per frame (golden ratio sequence)
		let jitter = fract( interleavedGradientNoise( in.pos.xy ) + hazeParams.frame * 0.61803398875 );
		let sigM = HZ_MARINE_SIGMA * hazeParams.density;
		let sigA = HZ_AEROSOL_SIGMA * hazeParams.density;
		var lit = 0.0; var all = 0.0; var tau = 0.0; var tPrev = 0.0;
		// the ray in each cascade's light space is linear in t: its end points, once
		let fwd = - vec3f( frame.view[ 0 ][ 2 ], frame.view[ 1 ][ 2 ], frame.view[ 2 ][ 2 ] );
		var sc0: array<vec4f, 4>; var scd: array<vec4f, 4>;
		for ( var c = 0; c < i32( shadowParams.count ); c++ ) {
			sc0[ c ] = shadowParams.matrices[ c ] * vec4f( cam, 1.0 );
			scd[ c ] = shadowParams.matrices[ c ] * vec4f( R.dir, 0.0 );
		}
		for ( var i = 0; i < ${cd}; i++ ) {
			// quadratic spacing: dense near the camera (palm and pier shafts), sparse far out (clouds, hills)
			let u = ( f32( i ) + jitter ) / ${_d(cd)};
			let t = u * u * tMax;
			let dt = u * ${_d(2/cd)} * tMax;
			let P = cam + R.dir * t;
			let h = max( P.y - frame.seaLevel, 0.0 );
			let sig = exp( h / - HZ_MARINE_H ) * sigM + exp( h / - HZ_AEROSOL_H ) * sigA;
			tau += sig * ( t - tPrev );
			tPrev = t;
			let Tr = exp( - tau );
			let w = sig * Tr * dt;
			// sunShadowHard( P ) with the hoisted light-space ray
			var v = 1.0;
			if ( shadowParams.enabled > 0.5 ) {
				let c = shadowCascadeOf( dot( P - frame.cameraPos, fwd ) );
				if ( c >= 0 ) {
					let sc = sc0[ c ] + scd[ c ] * t;
					let suv = vec2f( sc.x * 0.5 + 0.5, 0.5 - sc.y * 0.5 );
					if ( ! ( any( suv <= vec2f( 0.0 ) ) || any( suv >= vec2f( 1.0 ) ) || sc.z > 1.0 ) ) {
						v = select( 0.0, 1.0, sc.z - 2e-5 <= _shadowDepth( suv, c ) );
					}
				}
			}
			lit += w * hazeVisibilityRest( P, v );
			all += w;
		}
		// The lit share of the in-scatter (0..1) and the ratio of the marched in-scatter to its exact
		// value over this ray: both smooth across depth edges, unlike the in-scatter itself, which
		// grows with the distance (see the composite)
		let exact = hazeInScatter( max( cam.y - frame.seaLevel, 0.0 ), R.dir.y, tMax );
		out = vec4f( lit / max( all, 1e-12 ), all / max( exact, 1e-12 ), R.dist, 1.0 );
	}
	return out;
}
`}),r=new Vr({label:`haze sun mask`,modules:[e],defines:t,colorFormats:[`r16float`],code:`
fn fragment( in: FSIn ) -> vec4f {
	var out = vec4f( 0.0 );
	if ( hazeParams.ssFade > 0.001 ) {
		let uv = in.uv;
		let dir = underwaterWorldDir( uv );
#if HZ_CLOUDS
		let cloudT = cloudsSunTransmittance( cloudsSampleView( dir ).a );
#else
		let cloudT = 1.0;
#endif
		let size = vec2f( textureDimensions( hazeDepth ) );
		let d = textureLoad( hazeDepth, vec2i( clamp( uv, vec2f( 0.0 ), vec2f( 0.9999 ) ) * size ), 0 );
		let c = dot( dir, frame.sunDir );
		let glow = exp( ( c - 1.0 ) * 600.0 ) + exp( ( c - 1.0 ) * 50.0 ) * 0.25;
		out = vec4f( select( 0.0, glow * cloudT, d < 1e-7 ), 0.0, 0.0, 1.0 );
	}
	return out;
}
`}),i=[0,1,2].map(t=>{let n=.95/fd**+t,r=pd[t],i=``,a=0;for(let e=0;e<fd;e++){let t=r**+e;i+=`\t\tacc += textureSampleLevel( hzSrc, smpLinearClamp, uv + step * ( ${_d(e)} + jit ), 0.0 ).r * ${_d(t)};\n`,a+=t}return new Vr({label:`haze god rays `+t,modules:[e],bindings:{hzSrc:{texture:()=>this.ssTargets[t].texture}},colorFormats:[`r16float`],code:`
fn fragment( in: FSIn ) -> vec4f {
	var out = vec4f( 0.0 );
	if ( hazeParams.ssFade > 0.001 ) {
		let uv = in.uv;
		let step = ( hazeParams.sunUV - uv ) * ${_d(n/fd)};
		// taps shifted by a per pixel, per frame fraction of a step: the fixed taps drew hard radial
		// streaks through cloud gaps and foliage; jittered, the temporal resolve blends them
		// (centred on 0: the average over frames keeps the fixed taps' result)
		let jit = fract( interleavedGradientNoise( in.pos.xy ) + hazeParams.frame * 0.61803398875 + ${_d(t*.37)} ) - 0.5;
		var acc = 0.0;
${i}
		out = vec4f( acc / ${_d(a)}, 0.0, 0.0, 1.0 );
	}
	return out;
}
`})}),a=[0,1].map(n=>new Vr({label:`haze shafts temporal`,modules:[e],defines:t,bindings:{hzCur:{texture:()=>this.low.texture},hzPrev:{texture:()=>this.hist[n].texture}},colorFormats:[`rgba16float`],code:`
fn fragment( in: FSIn ) -> vec4f {
	let size = vec2i( textureDimensions( hzCur ) );
	let p = vec2i( in.pos.xy );
	let cur = textureLoad( hzCur, p, 0 );
	var out = cur;
	if ( hazeParams.histValid > 0.5 ) {
		var lo = cur.xy; var hi = cur.xy;
		for ( var k = 0; k < 9; k++ ) {
			let s = textureLoad( hzCur, clamp( p + vec2i( k % 3 - 1, k / 3 - 1 ), vec2i( 0 ), size - 1 ), 0 ).xy;
			lo = min( lo, s ); hi = max( hi, s );
		}
		let R = hazeRay( in.uv );
		let world = underwaterParams.camPos + R.dir * cur.z;
		let clip = frame.prevViewProjNoJitter * vec4f( world, 1.0 );
		if ( clip.w > 1e-4 ) {
			let puv = clip.xy / clip.w * vec2f( 0.5, -0.5 ) + 0.5;
			if ( all( puv >= vec2f( 0.0 ) ) && all( puv <= vec2f( 1.0 ) ) ) {
				let prev = textureSampleLevel( hzPrev, smpLinearClamp, puv, 0.0 );
				let expect = length( world - frame.prevCameraPos );
				if ( abs( prev.z - expect ) < expect * 0.05 + 0.3 ) {
					out = vec4f( mix( clamp( prev.xy, lo, hi ), cur.xy, 0.12 ), cur.z, 1.0 );
				}
			}
		}
	}
	return out;
}
`}));this._passes={march:n,mask:r,blur:i,temporal:a}}},bd=class{constructor(e,t,n){this.camera=e,this.dom=t,this.input=n,this.yaw=0,this.pitch=0,this.speed=8,this.enabled=!0,this.velocity=new A,this._fwd=new A,this._right=new A}setPose(e,t,n){this.camera.position.copy(e),this.yaw=t,this.pitch=n,this.apply()}apply(){this.camera.rotation.set(this.pitch,this.yaw,0,`YXZ`)}update(e){if(!this.enabled)return;let t=this.input,n=t.consumeLook();this.yaw-=n.x*.0022,this.pitch-=n.y*.0022,this.pitch=Math.max(-1.55,Math.min(1.55,this.pitch)),this.apply();let r=t.down(`ShiftLeft`)||t.down(`ShiftRight`),i=this.speed*(r?6:1);this.camera.getWorldDirection(this._fwd),this._right.crossVectors(this._fwd,this.camera.up).normalize();let a=new A;t.down(`KeyW`)&&a.add(this._fwd),t.down(`KeyS`)&&a.sub(this._fwd),t.down(`KeyD`)&&a.add(this._right),t.down(`KeyA`)&&a.sub(this._right),(t.down(`KeyE`)||t.down(`Space`))&&(a.y+=1),(t.down(`KeyQ`)||t.down(`KeyC`))&&--a.y,a.lengthSq()>0&&a.normalize().multiplyScalar(i),this.velocity.lerp(a,1-Math.exp(-e*8)),this.camera.position.addScaledVector(this.velocity,e)}};new Se,new A,new D,new ue,new A;var xd={gelcoat:15855334,lining:15328988,deck:14867919,antifouling:8002837,stainless:13685718};xd.stainless;var Sd={wallT:.045,wsBottomY:1.48,wsTopY:2.24,roofUnderY:2.31,roofZ0:-.95,roofZ1:1.34,winBottom:1.56,winTop:2.12,dash:{zFace:.98,yKnee:1.08,zTop:1.16,yTop:1.4,zBack:1.41,halfW:1.1},helmX:-.55,seatZ:.22};xd.stainless;var Cd={x:Sd.helmX,z:Sd.seatZ},wd=1.62,Td=wd*.1,Ed=.3,Dd=1.75,Od=1.35,kd=1.1,Ad=new A,jd=new A,Md=new A,Nd=new A,Pd=new D,Fd=new ue(0,0,0,`YXZ`),Id=new A(0,1,0),Ld=new D,Rd=new D,zd=new D,Bd=new A,Vd=.24,Hd=.36,Ud=.75,Wd=class{constructor({camera:e,input:t,terrain:n,colliders:r,query:i,boat:a,reef:o=null,audio:s=null}){this.camera=e,this.input=t,this.terrain=n,this.colliders=r,this.query=i,this.boat=a,this.reef=o,this.audio=s,this.mode=`walk`,this.camMode=`third`;let c=W.start||W.spawn;this.position=new A().copy(c.position),this.position.y=Math.max(n.heightAt(this.position.x,this.position.z),r?r.groundHeightAt(this.position.x,this.position.z,50):-1/0),this.velocity=new A,this.yaw=c.yaw,this.pitch=-.05,this.grounded=!1,this.bob=0,this.stepDist=0,this.waterH=0,this.waterMean=null,this.wade=0,this.camOff=0,this.camOffV=0,this._camY=null,this.floating=!0,this.slot=i.allocate(`player`,1),this.prompt=null,this.surface=`sand`,this.orbitYaw=0,this.orbitPitch=.22,this.orbitDist=13,this.helmYaw=0,this.helmPitch=-.05,this.camPos=new A,this.camInit=!1,this.wasUnder=!1,this.deckPos=new A,this.deckVel=new A,this.deckYaw=0,this.deckGrounded=!0,this._ashore=null,this._ashoreT=0,this.busy=!1}getViewDir(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}waterHeight(){let e=this.query;if(!e.cpuValid)return 0;let t=e.cpu[this.slot*4];return Number.isFinite(t)?t:this.waterH||0}groundAt(e,t,n){let r=this.terrain.heightAt(e,t),i=this.colliders.groundHeightAt(e,t,n);return i>r&&(r=i),this.reef&&this.reef.floorHeightAt&&(r=Math.max(r,this.reef.floorHeightAt(e,t))),r}nearBoat(){if(!this.boat)return!1;let e=this.boat.toWorld(this.boat.model.boardPoint,Ad),t=Math.hypot(e.x-this.position.x,e.z-this.position.z),n=Math.abs(e.y-this.position.y);return t<4.2&&n<3.2}update(e){let t=this.input;if(this.query.setPoint(this.slot,this.position.x,this.position.z),this.waterH=this.waterHeight(),this.waterMean=this.waterMean===null?this.waterH:this.waterMean+(this.waterH-this.waterMean)*(1-Math.exp(-e/4)),this.prompt=null,this.mode===`boat`){this.updateBoat(e);return}if(this.mode===`deck`){this.updateDeck(e);return}let n=t.consumeLook();if(this.yaw-=n.x*.0022,this.pitch=T.clamp(this.pitch-n.y*.0022,-1.5,1.5),this.nearBoat()&&!this.busy&&(this.prompt={key:`E`,text:`Board boat`},t.hit(`KeyE`))){this.boardBoat();return}let r=this.mode;this.mode===`walk`?this.updateWalk(e):this.updateSwim(e);let i=this.position.clone();this.mode===`walk`?i.y+=wd+Math.sin(this.bob)*.035*(1-.6*this.wade):i.y+=Td,this._camY===null||this.camera.position.y!==this._camY?(this.camOff=0,this.camOffV=0):this.mode!==r&&(this.camOff=this._camY-i.y);let a=Math.exp(-6*e),o=(this.camOffV+6*this.camOff)*e;this.camOff=(this.camOff+o)*a,this.camOffV=(this.camOffV-6*o)*a,i.y+=this.camOff,this.camera.position.copy(i),this._camY=this.camera.position.y,this.camera.quaternion.setFromEuler(Fd.set(this.pitch,this.yaw,0))}updateWalk(e){let t=this.input;Md.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),Nd.set(-Md.z,0,Md.x);let n=new A;t.down(`KeyW`)&&n.add(Md),t.down(`KeyS`)&&n.sub(Md),t.down(`KeyD`)&&n.add(Nd),t.down(`KeyA`)&&n.sub(Nd),n.lengthSq()>0&&n.normalize();let r=this.waterH-this.position.y,i=T.clamp(r/1.2,0,1);this.wade=i;let a=t.down(`ShiftLeft`)||t.down(`ShiftRight`),o=(a?6.2:3)*T.lerp(1,.42,i),s=this.grounded?14:2.5,c=1-Math.exp(-s*e);this.velocity.x+=(n.x*o-this.velocity.x)*c,this.velocity.z+=(n.z*o-this.velocity.z)*c,this.grounded&&t.hit(`Space`)&&r<.9&&(this.velocity.y=4.6,this.grounded=!1),this.velocity.y-=9.81*e,r>0&&this.velocity.multiplyScalar(Math.exp(-e*r*.8));let l=this.position,u=l.clone();if(l.addScaledVector(this.velocity,e),this.colliders.resolveCapsule(l,Ed,Dd,.4),this.terrain.grassland){let e=Math.hypot(l.x,l.z),t=2850;e>t&&(l.x*=t/e,l.z*=t/e)}let d=this.groundAt(l.x,l.z,l.y+.45);l.y<=d?(l.y=d,this.velocity.y<0&&(this.velocity.y=0),this.grounded=!0):this.grounded=l.y-d<.06;let f=Math.hypot(l.x-u.x,l.z-u.z);if(this.grounded){this.bob+=f*2.4,this.stepDist+=f;let e=a?.9:.62;this.stepDist>e&&(this.stepDist=0,this.surface=this.surfaceType(r),this.audio&&this.audio.footstep(this.surface))}if(this.waterMean-l.y>Od){let e=this.grounded;this.mode=`swim`,e&&(l.y=Math.max(l.y,this.waterH-Td+.1)),this.velocity.y=e?0:Math.max(this.velocity.y*.3,-2.5),this.audio&&this.audio.splash(e?.2:.5,l)}}surfaceType(e){let t=this.position;if(e>.12)return`water`;let n=this.colliders.groundHeightAt(t.x,t.z,t.y+.1)>this.terrain.heightAt(t.x,t.z)+.05;if(this.terrain.grassland)return n?`rock`:`grass`;if(n)return`wood`;let r=this.terrain.heightAt(t.x,t.z);return r<.6?`wetsand`:r>3.6?`grass`:`sand`}updateSwim(e){let t=this.input,n=this.position,r=this.waterH;Md.set(0,0,-1).applyEuler(Fd.set(this.pitch,this.yaw,0)),Nd.set(-Math.cos(this.yaw),0,Math.sin(this.yaw)).negate();let i=new A;t.down(`KeyW`)&&i.add(Md),t.down(`KeyS`)&&i.sub(Md),t.down(`KeyD`)&&i.add(Nd),t.down(`KeyA`)&&i.sub(Nd),t.down(`Space`)&&(i.y+=1),(t.down(`KeyC`)||t.down(`ControlLeft`))&&--i.y,i.lengthSq()>0&&i.normalize(),this.floating&&n.y>r-.45&&i.y>-.25&&!t.down(`KeyC`)&&(i.y=Math.max(i.y,0));let a=t.down(`ShiftLeft`)||t.down(`ShiftRight`)?2.5:1.5,o=1-Math.exp(-e*3);this.velocity.lerp(i.multiplyScalar(a),o);let s=r-Td+.1;t.down(`KeyC`)||t.down(`KeyW`)&&this.pitch<-.35||i.y<-.1?this.floating=!1:n.y>s-.15&&(this.floating=!0),this.floating&&(n.y+=(s-n.y)*(1-Math.exp(-e*5)),this.velocity.y>0&&(this.velocity.y*=.5)),n.addScaledVector(this.velocity,e),n.y=Math.min(n.y,r+.05),this.colliders.resolveCapsule(n,Ed,1,0);let c=this.groundAt(n.x,n.z,n.y+.3);n.y<c+.25&&(n.y=c+.25),this.stepDist+=this.velocity.length()*e,this.stepDist>1.3&&(this.stepDist=0,this.audio&&this.audio.swimStroke());let l=this.camera.position.y<r-.05;if(l!==this.wasUnder&&this.audio&&(l?this.audio.submerge():this.audio.emerge()),this.wasUnder=l,this.waterMean-c<kd&&(this.mode=`walk`,n.y=c,this.velocity.set(this.velocity.x,0,this.velocity.z)),this.colliders.boxes){for(let r of this.colliders.boxes)if(r.tag===`ladder`&&Math.hypot(r.center.x-n.x,r.center.z-n.z)<1.1){if(this.prompt={key:`Space`,text:`Climb ladder`},t.down(`Space`)||t.down(`KeyW`)){let t=this.colliders.groundHeightAt(r.center.x,r.center.z,10);if(t>n.y&&(n.y+=e*1.6,n.y>t-1)){let e=W.pier.deckHeight;n.set(r.center.x-Math.sign(r.center.x-W.pier.x)*1.2,e,r.center.z),this.mode=`walk`,this.velocity.set(0,0,0)}}break}}}boardBoat(){let e=this.boat;this.mode=`deck`,this.deckPos.copy(e.model.boardPoint),this.deckVel.set(0,0,0),this.deckYaw=this.yaw-(e.getYaw()+Math.PI),this.deckGrounded=!0,this._ashore=null,this._ashoreT=0,this.velocity.set(0,0,0),this._camY=null,this.deckToWorld()}takeHelm(){this.mode=`boat`,this.boat.driven=!0,this.boat.moored=!1,this.helmYaw=0,this.helmPitch=-.05,this.orbitYaw=this.boat.getYaw()+Math.PI,this.camInit=!1,this.audio&&this.audio.engineStart()}leaveHelm(){let e=this.boat;e.driven=!1,e.throttle=0,this.mode=`deck`,this.deckPos.set(Cd.x+.45,e.model.lines.deckY,Cd.z-.1),this.deckVel.set(0,0,0),this.deckYaw=this.helmYaw,this.pitch=this.helmPitch,this.deckGrounded=!0,this._camY=null,this.audio&&this.audio.engineStop(),this.deckToWorld()}enterBoat(){this.boardBoat(),this.takeHelm()}exitBoat(e=null,t=0){let n=this.boat,r=n.driven;n.driven=!1,n.throttle=0;let i=t?null:this.ashoreTarget(),a=W.boatDock.position;if(n.position.distanceTo(a)<14&&n.speed<1.5&&(n.moored=!0,n.mooring.anchor.set(n.position.x,0,n.position.z),n.mooring.heading=n.getYaw()),e&&(i=e),i)this.position.set(i.out.x,i.g,i.out.z),this.mode=`walk`;else{let e=n.toWorld(new A(2.2*(t||1),0,0),new A);this.waterH=this.waterMean=n.position.y,this.position.set(e.x,n.position.y-.2,e.z),this.mode=`swim`,this.audio&&this.audio.splash(.8,this.position)}this.velocity.set(0,0,0),this.yaw=n.getYaw()+Math.PI,this._camY=null,this.audio&&r&&this.audio.engineStop()}ashoreTarget(){let e=this.boat,t=this.query.cpuValid?this.query.cpu[0]:0,n=jd.set(1,0,0).applyQuaternion(e.quaternion).setY(0).normalize(),r=n.x,i=n.z,a=null,o=1/0;for(let n of e.model.exitPoints){let s=e.toWorld(n,new A),c=Math.sign(n.x)||1;for(let e of[.9,1.4,2]){let l=new A(s.x+r*c*e,s.y,s.z+i*c*e),u=this.groundAt(l.x,l.z,s.y+2.5),d=u-s.y;if(d>1.7||d<-1.2||u<t-.3)continue;let f=Math.abs(d)+e*.2;f<o&&(o=f,a={out:l,g:u,ep:n})}}return a}deckBase(e){let t=this.boat;return Ld.setFromAxisAngle(Id,t.getYaw()+Math.PI),Rd.copy(t.quaternion).multiply(zd.setFromAxisAngle(Id,Math.PI)),e.slerpQuaternions(Rd,Ld,.55)}deckToWorld(){let e=this.boat;e.toWorld(this.deckPos,this.position),this.yaw=e.getYaw()+Math.PI+this.deckYaw}deckGroundAt(e,t,n){let r=this.boat.model.lines.deckY;for(let i of this.boat.model.colliders){if(!i.walkable||Math.abs(e-i.center.x)>i.half.x||Math.abs(t-i.center.z)>i.half.z)continue;let a=i.center.y+i.half.y;a<=n&&a>r&&(r=a)}return r}updateDeck(e){let t=this.input,n=this.boat,r=n.model.lines,i=t.consumeLook();this.deckYaw-=i.x*.0022,this.pitch=T.clamp(this.pitch-i.y*.0022,-1.5,1.5);let a=Math.sin(this.deckYaw),o=Math.cos(this.deckYaw);Md.set(a,0,o),Nd.set(-o,0,a),Bd.set(0,0,0),t.down(`KeyW`)&&Bd.add(Md),t.down(`KeyS`)&&Bd.sub(Md),t.down(`KeyD`)&&Bd.add(Nd),t.down(`KeyA`)&&Bd.sub(Nd),Bd.lengthSq()>0&&Bd.normalize();let s=t.down(`ShiftLeft`)?2.6:1.6,c=1-Math.exp(-12*e),l=this.deckVel;l.x+=(Bd.x*s-l.x)*c,l.z+=(Bd.z*s-l.z)*c,this.deckGrounded&&t.hit(`Space`)&&(l.y=3.2,this.deckGrounded=!1),l.y-=9.81*e;let u=this.deckPos,d=u.x,f=u.z;u.addScaledVector(l,e);for(let e=0;e<2;e++)for(let e of n.model.colliders){if(!e.solid)continue;let t=e.center.y+e.half.y,n=e.center.y-e.half.y;if(t<=u.y+Hd||n>=u.y+Dd)continue;let r=e.half.x+Vd,i=e.half.z+Vd,a=u.x-e.center.x,o=u.z-e.center.z;if(Math.abs(a)>=r||Math.abs(o)>=i)continue;let s=r-Math.abs(a),c=i-Math.abs(o);s<c?(u.x+=Math.sign(a||d-e.center.x||1)*s,l.x=0):(u.z+=Math.sign(o||f-e.center.z||1)*c,l.z=0)}u.z=T.clamp(u.z,r.zAft+r.shell+Vd,4);let p=Math.max(.15,r.halfBreadth(r.tAtSheerZ(u.z),Math.max(u.y,r.deckY))-r.shell-Vd);u.x=T.clamp(u.x,-p,p);let m=this.deckGroundAt(u.x,u.z,u.y+Hd);u.y<=m?(u.y=m,l.y<0&&(l.y=0),this.deckGrounded=!0):this.deckGrounded=u.y-m<.04;let h=Math.hypot(u.x-d,u.z-f);this.deckGrounded&&(this.bob+=h*2.4,this.stepDist+=h,this.stepDist>.6&&(this.stepDist=0,this.audio&&this.audio.footstep(`wood`))),this.deckToWorld();let g=Cd.x,_=Cd.z,v=Math.hypot(u.x-g,u.z-_)<Ud&&!this.busy;if(this._ashoreT-=e,this._ashoreT<=0&&(this._ashoreT=.25,this._ashore=n.speed<2.5?this.ashoreTarget():null),v){if(this.prompt={key:`E`,text:`Take the helm`},t.hit(`KeyE`)){this.takeHelm();return}}else if(!this.busy){let e=this._ashore&&this._ashore.ep,r=n.model.exitPoints.some(e=>Math.hypot(u.x-e.x,u.z-e.z)<1.3);if(e&&Math.hypot(u.x-e.x,u.z-e.z)<1.3){if(this.prompt={key:`E`,text:`Step ashore`},t.hit(`KeyE`)){this.exitBoat(this._ashore);return}}else if(r&&(this.prompt={key:`E`,text:`Jump overboard`},t.hit(`KeyE`))){this.exitBoat(null,Math.sign(u.x)||1);return}}let y=Ad.set(u.x,u.y+wd+Math.sin(this.bob)*.02,u.z);n.toWorld(y,this.camera.position),this._camY=this.camera.position.y,this.deckBase(Pd),this.camera.quaternion.copy(Pd).multiply(Ld.setFromEuler(Fd.set(this.pitch,this.deckYaw,0)))}updateBoat(e){let t=this.input,n=this.boat,r=t.consumeLook(),i=t.consumeWheel();if(t.hit(`KeyV`)&&(this.camMode=this.camMode===`first`?`third`:`first`),t.hit(`KeyE`)){this.leaveHelm();return}let a=0;t.down(`KeyW`)&&(a=t.down(`ShiftLeft`)?1:.7),t.down(`KeyS`)&&(a=-.6);let o=0;if(t.down(`KeyA`)&&(o+=1),t.down(`KeyD`)&&--o,n.setInput(a,o,e),this.prompt={key:`E`,text:`Leave helm   ·   V  camera`},n.toWorld(n.model.helmEye,this.position),this.position.y-=wd,this.camMode===`first`){this.helmYaw=T.clamp(this.helmYaw-r.x*.0022,-2.2,2.2),this.helmPitch=T.clamp(this.helmPitch-r.y*.0022,-1.2,1);let e=n.toWorld(n.model.helmEye,new A);this.camera.position.copy(e);let t=n.quaternion,i=new D().setFromAxisAngle(new A(0,1,0),n.getYaw()+Math.PI),a=new D().slerpQuaternions(t.clone().multiply(new D().setFromAxisAngle(new A(0,1,0),Math.PI)),i,.55),o=new D().setFromEuler(Fd.set(this.helmPitch,this.helmYaw,0));this.camera.quaternion.copy(a).multiply(o)}else{if(this.orbitYaw-=r.x*.003,this.orbitPitch=T.clamp(this.orbitPitch+r.y*.003,-.05,1.2),this.orbitDist=T.clamp(this.orbitDist*(1+i*.08),6,40),n.speed>2&&Math.abs(r.x)<.5){let t=n.getYaw()+Math.PI-this.orbitYaw;t=Math.atan2(Math.sin(t),Math.cos(t)),this.orbitYaw+=t*(1-Math.exp(-e*.8))}let t=n.toWorld(new A(0,1.4,0),new A),a=new A(Math.sin(this.orbitYaw)*Math.cos(this.orbitPitch),Math.sin(this.orbitPitch),Math.cos(this.orbitYaw)*Math.cos(this.orbitPitch)).multiplyScalar(this.orbitDist),o=t.clone().add(a);o.y=Math.max(o.y,this.waterH+.7),this.camInit||=(this.camPos.copy(o),!0),this.camPos.lerp(o,1-Math.exp(-e*6)),this.camera.position.copy(this.camPos),this.camera.lookAt(t)}}},Gd={surf_far:{file:`surf_far.sfx`,loop:!0,lufs:-23},wind:{file:`wind.sfx`,loop:!0,lufs:-23.6},palms:{file:`palms.sfx`,loop:!0,lufs:-23.3},crickets:{file:`crickets.sfx`,loop:!0,lufs:-23},pier_lap:{file:`pier_lap.sfx`,loop:!0,lufs:-30.7},under_reef:{file:`under_reef.sfx`,loop:!0,lufs:-23},boat_engine:{file:`boat_engine.sfx`,loop:!0,lufs:-23},boat_lap:{file:`boat_lap.sfx`,loop:!0,lufs:-32.2},boat_rush:{file:`boat_rush.sfx`,loop:!0,lufs:-23.4},birds_dawn:{file:`birds_dawn.sfx`,loop:!0,lufs:-23.3},whale_song:{file:`whale_song.sfx`,loop:!0,lufs:-25.5},step_sand:{file:`step_sand.sfx`,slices:[[.08,.191],[.351,.3153],[.7463,.2237],[1.05,.516],[1.646,.436]],lufs:[-25,-25.4,-27,-22.5,-19.8]},step_wetsand:{file:`step_wetsand.sfx`,slices:[[.08,.171],[.331,.376],[.787,.226],[1.093,.246],[1.419,.221]],lufs:[-27.4,-19.6,-21.7,-20.9,-20.1]},surf_crash:{file:`surf_crash.sfx`,slices:[[.08,3.254],[3.414,2.504],[5.998,2.554],[8.632,1.304],[10.016,2.804],[12.9,2.204],[15.184,2.7493]],lufs:[-13,-13.4,-14.1,-17,-13,-14,-12.7]},surf_wash:{file:`surf_wash.sfx`,slices:[[.08,1.404],[1.564,2.054],[3.698,1.504],[5.282,1.354],[6.716,1.904],[8.7,1.154]],lufs:[-12.4,-11.3,-16.5,-13.7,-14.5,-22.3]},surf_backwash:{file:`surf_backwash.sfx`,slices:[[.08,1.804],[1.964,1.904],[3.948,3.804],[7.832,2.254],[10.166,2.394],[12.64,2.404]],lufs:[-13.1,-17.7,-22.1,-16.6,-14.4,-15.9]},step_wood:{file:`step_wood.sfx`,slices:[[.08,.4267],[.5867,.424],[1.0907,.424],[1.5947,.417],[2.0917,.4326]],lufs:[-22.5,-20.9,-20.8,-20.2,-20.8]},step_water:{file:`step_water.sfx`,slices:[[.08,.854],[1.014,.704],[1.798,.624],[2.502,.624],[3.206,.854]],lufs:[-17.5,-16,-19.5,-23,-14.9]},step_grass:{file:`step_grass.sfx`,slices:[[.08,.304],[.464,.3553],[.8993,.284],[1.2633,.254],[1.5973,.2473]],lufs:[-20.7,-18,-19.3,-19.5,-18.6]},step_rock:{file:`step_rock.sfx`,slices:[[.08,.504],[.664,.504],[1.248,.504],[1.832,.504],[2.416,.504]],lufs:[-27.1,-24.8,-24.7,-24.8,-25.6]},swim:{file:`swim.sfx`,slices:[[.08,.754],[.914,.5547],[1.5487,.604],[2.2327,.804]],lufs:[-18.5,-21.2,-15.6,-23.2]},uw_swim:{file:`uw_swim.sfx`,slices:[[.08,.626],[.786,.836],[1.702,.786],[2.568,1.1053]],lufs:[-16,-23.9,-25.6,-18.6]},submerge:{file:`submerge.sfx`,slices:[[.08,.804],[.964,.754]],lufs:[-24.7,-26.6]},emerge:{file:`emerge.sfx`,slices:[[.08,.904]],lufs:[-18.8]},splash:{file:`splash.sfx`,slices:[[.08,1.604],[1.764,2.2067],[4.0507,2.2133],[6.344,1.906]],lufs:[-19,-18,-14.1,-15.5]},hull_slap:{file:`hull_slap.sfx`,slices:[[.08,.554],[.714,.754],[1.548,.404],[2.032,.5087],[2.6207,.406]],lufs:[-20.7,-18.4,-20.2,-17.7,-16.4]},gull:{file:`gull.sfx`,slices:[[.08,1.001],[1.161,1.404],[2.645,.904],[3.629,1.114],[4.823,1.044],[5.947,.5267]],lufs:[-15.9,-16.2,-18.1,-11.8,-12.8,-12.8]},bird_forest:{file:`bird_forest.sfx`,slices:[[.08,1.47],[1.63,1.45],[3.16,1.23],[4.47,1.59],[6.14,1.55],[7.77,1.38],[9.23,1.16],[10.47,1.3],[11.85,1.12],[13.05,1.45],[14.58,1.99],[16.65,1.2],[17.93,1.06]],lufs:[-12.8,-12,-10.9,-11.8,-12,-11.3,-11.9,-13.4,-13.7,-11.9,-7.7,-12.1,-11]},bird_dove:{file:`bird_dove.sfx`,slices:[[.08,3.12],[3.28,3.18],[6.54,3.13],[9.75,3.36],[13.19,3.31]],lufs:[-7.7,-7.3,-7.2,-7.4,-7.6]},tern:{file:`tern.sfx`,slices:[[.08,2.1097],[2.2697,1.85],[4.1997,2.4098],[6.6894,1.3657],[8.1351,1.02],[9.2351,1.99]],lufs:[-9.8,-10.7,-12.4,-12,-9,-12.9]},whale_blow:{file:`whale_blow.sfx`,slices:[[.08,2.0057],[2.1657,1.3331],[3.5789,1.5137]],lufs:[-13.3,-14.2,-14.4]},big_splash:{file:`big_splash.sfx`,slices:[[.08,2.1477],[2.3077,1.7777]],lufs:[-15.6,-18.7]},reel_wind:{file:`reel_wind.sfx`,loop:!0,lufs:-23},reel_drag:{file:`reel_drag.sfx`,loop:!0,lufs:-22.6},line_strain:{file:`line_strain.sfx`,loop:!0,lufs:-24.4},rod_swish:{file:`rod_swish.sfx`,slices:[[.08,.404],[.564,.4453],[1.0893,.604],[1.7733,.424],[2.2773,.604]],lufs:[-18.3,-22.1,-20.9,-18.4,-16]},bail_click:{file:`bail_click.sfx`,slices:[[.08,.164],[.324,.174],[.578,.144],[.802,.184]],lufs:[-30,-29.8,-31.1,-29.3]},line_out:{file:`line_out.sfx`,slices:[[.08,.644]],lufs:[-15.9]},plop:{file:`plop.sfx`,slices:[[.08,.624],[.784,.264]],lufs:[-21.4,-20.7]},line_snap:{file:`line_snap.sfx`,slices:[[.08,.554],[.714,.504],[1.298,.504],[1.882,.504]],lufs:[-17.9,-23.4,-20.8,-23.2]},fish_splash:{file:`fish_splash.sfx`,slices:[[.08,.464],[.624,.324],[1.028,.504],[1.612,1.204],[2.896,1.304]],lufs:[-16,-14.2,-16.6,-17,-15.8]},fish_flop:{file:`fish_flop.sfx`,slices:[[.08,1.354],[1.514,.304],[1.898,.304],[2.282,.324]],lufs:[-24.6,-23.9,-23,-17]},coins:{file:`coins.sfx`,slices:[[.08,1.604]],lufs:[-16.5]}},Y=(e,t,n)=>e<t?t:e>n?n:e,Kd=(e,t,n)=>e+(t-e)*n,X=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t,qd=(e,t,n)=>{let r=Y((n-e)/(t-e),0,1);return r*r*(3-2*r)},Z=e=>10**(e/20),Jd=Z(-3),Q={crash:-15,wash:-20,backwash:-23,surfFar:-31,wind:-36,palms:-39,crickets:-33,pierLap:-32,reef:-43,engineIdle:-30,engineRun:-22,boatRush:-27,boatLap:-34,hullSlap:-24,spray:-30,step:-56,swim:-43,uwSwim:-43,splashSoft:-38,splash:-30,submerge:-36,emerge:-38,gull:-21,tern:-25,bird:-31,dove:-34,birdChorus:-35,whaleSong:-26,whaleBlow:-20,whaleBurst:-17,whaleSplash:-11,whaleDrip:-30,whaleFluke:-22,rodSwish:-30,bail:-40,lineOut:-38,plop:-30,reelWind:-36,reelDrag:-29,lineStrain:-44,lineSnap:-24,fishSplash:-24,fishFlop:-32,coins:-30},Yd=[`reel_wind`,`reel_drag`,`line_strain`,`rod_swish`,`bail_click`,`line_out`,`plop`,`line_snap`,`fish_splash`,`fish_flop`],Xd=[[0,1,2,3,4,5,6],[7,8,9,10,11,12]],Zd=[`whale_blow`,`big_splash`,`emerge`],Qd=100,$d={sand:[`step_sand`,0],wetsand:[`step_wetsand`,0],wood:[`step_wood`,2],water:[`step_water`,0],grass:[`step_grass`,2],rock:[`step_rock`,1]},ef={step:3,swim:2,splash:3,trans:2,hull:3,gull:2,crash:7,wash:5,back:5,bird:4,tern:2,whale:4,rod:4,fish:3,coin:1},tf=[`surf_crash`,`surf_wash`,`surf_backwash`,`surf_far`,`wind`,`palms`,`step_sand`,`step_wetsand`,`step_wood`,`step_water`,`step_grass`,`splash`,`swim`],nf=[`wind`,`palms`,`step_grass`,`step_rock`],rf=9,af=11,of=110,sf=.4,cf={},lf=class{constructor({baseUrl:e=`./audio/`,shore:t=null,grassland:n=!1}={}){this.baseUrl=e,this.grassland=n,this.ctx=null,this._failed=!1,this._muted=!1,this._volume=.8,this._buffers=new Map,this._loading=new Map,this._beds=new Map,this._voices={},this._last={},this._acc=0,this._gullT=6,this._ternT=4,this._birdT=2,this._singers=[],this._wh={blow:!1,breaches:-1,splashes:-1,fluke:0,sing:1},this._slapT=0,this._engine=0,this._engineOn=!1,this._gust={v:.4,target:.6,t:0},this._shore=t,this._stations=null,this._stAt={x:1e9,z:1e9,t:-1e9},this._fakeT=3,this._warned=new Set,this.env={lx:0,ly:1.7,lz:0,fx:0,fy:0,fz:-1,ux:0,uy:1,uz:0,u:0,depth:0,surf:.5,shoreDist:60,onLand:!0,wind:7,day:1,nearPier:!1,hour:null,shoreX:0,shoreZ:1,boat:{active:!1,rpm:0,speed:0,x:0,y:0,z:0,inside:!1}};let r=W.swellDir||{x:-.12,y:-1},i=Math.hypot(r.x,r.y)||1;this._swell={x:r.x/i,z:r.y/i}}attachShore({shore:e,field:t,terrain:n}){this._shore=e&&t&&n?{shore:e,field:t,terrain:n}:null,this._stations=null}async resume(){if(this._failed)return!1;if(!this.ctx){let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(typeof e!=`function`)return this._failed=!0,!1;try{this.ctx=new e({latencyHint:`balanced`}),this._build()}catch(e){return this._warn(e),this._failed=!0,!1}for(let e of this.grassland?nf:tf)this._want(e)}try{this.ctx.state===`suspended`&&await Promise.race([this.ctx.resume(),new Promise(e=>setTimeout(e,1500))])}catch(e){this._warn(e)}return this.enabled}get enabled(){return!!this.ctx&&!this._failed&&this.ctx.state===`running`}get muted(){return this._muted}get volume(){return this._volume}setMuted(e){this._muted=!!e,this._applyVolume()}setMasterVolume(e){this._volume=Y(X(e,this._volume),0,1),this._applyVolume()}update(e,t){if(this.ctx&&!this._failed)try{if(this._readState(t&&typeof t==`object`?t:cf),this.ctx.state!==`running`||(this._acc+=Y(X(e,1/60),0,.25),this._acc<1/30))return;let n=Math.min(this._acc,.25);this._acc=0;let r=this.ctx.currentTime;if(this._placeListener(),this.grassland){this._mixLand(r,n),this._birds(r,n);return}this._mix(r,n),this._surf(n),this._life(n),this._birds(r,n),this._whale(r,n),this._reel(r)}catch(e){this._warn(e)}}footstep(e){let[t,n]=$d[e]||$d.sand;this._shot(t,`step`,this.foot,Q.step+n+(Math.random()-.5)*3,.94+Math.random()*.12)}splash(e){let t=Y(X(e,.5),0,1);t<.6?this._shot(`swim`,`splash`,this.above,Q.splashSoft+t*6,.9+Math.random()*.1):this._shot(`splash`,`splash`,this.above,Q.splash-(1-t)*8,.95+Math.random()*.1)}swimStroke(){this.env.u>.5?this._shot(`uw_swim`,`swim`,this.under,Q.uwSwim+(Math.random()-.5)*3,.9+Math.random()*.2):this._shot(`swim`,`swim`,this.above,Q.swim+(Math.random()-.5)*3,.92+Math.random()*.16)}submerge(){this._shot(`submerge`,`trans`,this.near,Q.submerge,.95+Math.random()*.1)}emerge(){this._shot(`emerge`,`trans`,this.near,Q.emerge,.95+Math.random()*.1)}engineStart(){this._engineOn=!0;for(let e of[`boat_engine`,`boat_rush`,`boat_lap`,`hull_slap`])this._want(e)}engineStop(){this._engineOn=!1}hullSlap(e){let t=Y(X(e,.5),0,1);this._shot(`hull_slap`,`hull`,this.boatSum,Q.hullSlap-(1-t)*10,.85+Math.random()*.2),t>.45&&this._shot(`splash`,`hull`,this.boatSum,Q.spray-(1-t)*6,1.15+Math.random()*.2)}rodReady(){for(let e of Yd)this._want(e)}whoosh(e=1){let t=Y(X(e,1),0,1);this._shot(`rod_swish`,`rod`,this.rod,Q.rodSwish-(1-t)*9,.9+t*.2+Math.random()*.06)}bail(e){this._shot(`bail_click`,`rod`,this.rod,Q.bail+(e?0:2),e?1.08+Math.random()*.06:.92+Math.random()*.06)}lineOut(e=1){let t=Y(X(e,1),0,1);this._shot(`line_out`,`rod`,this.rod,Q.lineOut-(1-t)*6,1.25-t*.35)}plop(e){e&&this._shotAt(`plop`,`fish`,e.x,e.y,e.z,Q.plop,.95+Math.random()*.15,0,4,1)}fishSplash(e,t=.5){if(!e)return;let n=Y(X(t,.5),0,1);this._shotAt(`fish_splash`,`fish`,e.x,e.y,e.z,Q.fishSplash-(1-n)*10,.9+Math.random()*.2+(1-n)*.15,0,6,1)}fishFlop(){this._shot(`fish_flop`,`rod`,this.near,Q.fishFlop,.9+Math.random()*.2)}lineSnap(){this._shot(`line_snap`,`rod`,this.rod,Q.lineSnap,.95+Math.random()*.1)}coin(){this._shot(`coins`,`coin`,this.near,Q.coins,.97+Math.random()*.06)}rodLoop(e,t,n){let r=this._rod||={crank:0,drag:0,tension:0};r.crank=Y(X(e,0),0,3),r.drag=Y(X(t,0),0,5),r.tension=Y(X(n,0),0,2)}_reel(e){let t=this._rod;if(!t)return;let n=qd(.05,.35,t.crank);(n>0||this._beds.has(`reel_wind`))&&this._bed(`reel_wind`,Z(Q.reelWind)*n*(.8+.2*Math.min(1,t.crank))/Z(Gd.reel_wind.lufs),e,.08,Y(t.crank/1.4,.45,1.3));let r=qd(.05,.7,t.drag);(r>0||this._beds.has(`reel_drag`))&&this._bed(`reel_drag`,Z(Q.reelDrag)*r/Z(Gd.reel_drag.lufs),e,.06,Y(.7+t.drag*.25,.7,1.25));let i=qd(.7,1,t.tension);(i>0||this._beds.has(`line_strain`))&&this._bed(`line_strain`,Z(Q.lineStrain)*i/Z(Gd.line_strain.lufs),e,.1,.9+.2*i)}bubbles(){}waveBreak(){}dispose(){if(this.ctx){try{let e=this.ctx.close();e&&e.catch&&e.catch(()=>{})}catch{}this.ctx=null,this._failed=!0}}_build(){let e=this.ctx,t=(t,n)=>{let r=e.createGain();return r.gain.value=t,n&&r.connect(n),r},n=(t,n,r)=>{let i=e.createBiquadFilter();return i.type=`lowpass`,i.frequency.value=t,i.Q.value=n,r&&i.connect(r),i},r=(t,n,r)=>{let i=e.createPanner();return i.panningModel=`HRTF`,i.distanceModel=`inverse`,i.refDistance=n,i.rolloffFactor=r,i.maxDistance=1e4,i.connect(t),i};this._panner=r,this.limiter=e.createDynamicsCompressor(),this.limiter.threshold.value=-4,this.limiter.knee.value=4,this.limiter.ratio.value=16,this.limiter.attack.value=.003,this.limiter.release.value=.25,this.limiter.connect(e.destination),this.master=t(0,this.limiter),this._applyVolume(),this.aboveOut=t(1,this.master);let i=n(2e4,.54,this.aboveOut),a=n(2e4,.707,i);this.muffle=[a,i],this.above=t(1,a),this.under=t(0,this.master),this.near=t(1,this.master),this.foot=t(1,this.above),this.surfPan=r(this.above,1,0),this.surfFar=t(1,this.surfPan),this.boatPan=r(this.above,3,1),this.boatOut=t(1,this.boatPan),this.boatIn=t(0,this.above),this.boatSum=t(1,this.boatOut),this.boatSum.connect(this.boatIn),this.engineLP=n(1200,.6,this.boatSum),this.pierPan=r(this.above,3,1.3),this.windLP=n(1400,.5,this.above),this.rodPan=e.createStereoPanner?e.createStereoPanner():null,this.rodPan&&(this.rodPan.pan.value=.25,this.rodPan.connect(this.above)),this.rod=t(1,this.rodPan||this.above),this.songOut=t(Z(-20),this.master),this.songLP=n(420,.6,this.songOut),this.songPan=r(this.songLP,30,.5),this._dest={surf_far:this.surfFar,wind:this.windLP,palms:this.above,crickets:this.above,pier_lap:this.pierPan,under_reef:this.under,birds_dawn:this.above,whale_song:this.songPan,boat_engine:this.engineLP,boat_rush:this.boatSum,boat_lap:this.boatSum,reel_wind:this.rod,reel_drag:this.rod,line_strain:this.rod}}_applyVolume(){if(!this.master)return;let e=this._muted?0:this._volume*this._volume;this._ramp(this.master.gain,e,.05)}_want(e){let t=this._buffers.get(e);if(t)return t;if(!this._loading.has(e)&&Gd[e]&&this.ctx){let t=fetch(this.baseUrl+Gd[e].file).then(t=>{if(!t.ok)throw Error(`audio ${e}: HTTP ${t.status}`);return t.arrayBuffer()}).then(e=>this.ctx.decodeAudioData(e)).then(t=>(this._buffers.set(e,t),t)).catch(e=>this._warn(e));this._loading.set(e,t)}return null}_bed(e,t,n,r=.25,i=1){let a=this._beds.get(e);if(!a){if(t<1e-4)return;let o=this._want(e);if(!o)return;let s=this.ctx,c=s.createBufferSource();c.buffer=o,c.loop=!0,c.playbackRate.value=i;let l=s.createGain();l.gain.value=0,c.connect(l).connect(this._dest[e]),c.start(n+.02,Math.random()*o.duration),a={src:c,gain:l,trim:o.numberOfChannels===1?Jd:1},this._beds.set(e,a),this._dest[e]!==this.rod&&(r=Math.max(r,.8))}this._ramp(a.gain.gain,t*a.trim,r),this._ramp(a.src.playbackRate,i,.15)}_shot(e,t,n,r,i=1,a=0,o=-1){if(!this.enabled||!n)return null;let s=Gd[e],c=this._want(e);if(!c||!s)return null;let l=s.slices.length,u=o>=0&&o<l?o:Math.floor(Math.random()*l);o<0&&l>1&&u===this._last[e]&&(u=(u+1+Math.floor(Math.random()*(l-1)))%l),this._last[e]=u;let[d,f]=s.slices[u],p=this.ctx,m=Math.max(p.currentTime+.005,a),h=p.createBufferSource();h.buffer=c,h.playbackRate.value=i;let g=p.createGain();g.gain.value=Z(Y(r-s.lufs[u],-80,24))*(c.numberOfChannels===1?Jd:1),h.connect(g).connect(n),h.start(m,d,f);let _=this._voices[t]||(this._voices[t]=[]),v={src:h,gain:g,end:m+f/i,extra:null};for(_.push(v),h.onended=()=>{let e=_.indexOf(v);if(e>=0&&_.splice(e,1),g.disconnect(),v.extra)for(let e of v.extra)e.disconnect()};_.length>(ef[t]||3);){let e=_.shift();e.gain.gain.setTargetAtTime(0,p.currentTime,.05);try{e.src.stop(p.currentTime+.3)}catch{}}return v}_shotAt(e,t,n,r,i,a,o,s,c,l=1,u=-1){if(!this.enabled||!this._want(e))return null;let d=this.ctx,f=this.env,p=Math.hypot(n-f.lx,r-f.ly,i-f.lz),m=this._panner(this.above,c,l);m.positionX.value=n,m.positionY.value=r,m.positionZ.value=i;let h=d.createBiquadFilter();h.type=`lowpass`,h.frequency.value=Y(18e3/(1+p/45),1500,18e3),h.connect(m);let g=this._shot(e,t,h,a,o,s,u);return g?(g.extra=[h,m],g):(h.disconnect(),m.disconnect(),null)}_gull(){let e=this.env,t=Math.atan2(e.shoreZ,e.shoreX)+(Math.random()-.5)*2.4,n=25+Math.random()*55;this._shotAt(`gull`,`gull`,e.lx+Math.cos(t)*n,e.ly+6+Math.random()*19,e.lz+Math.sin(t)*n,Q.gull+(Math.random()-.5)*4,.93+Math.random()*.14,0,10)}_shoreSrc(){if(this._shore)return this._shore;let e=globalThis.__app;return e&&e.shore&&e.shoreField&&e.shoreField.data&&e.terrainData&&(this._shore={shore:e.shore,field:e.shoreField,terrain:e.terrainData}),this._shore}_field(e,t,n){let{field:r,terrain:i}=this._shore,a=r.res,o=r.data,s=Y((e-i.origin)/i.size*a-.5,0,a-1.001),c=Y((t-i.origin)/i.size*a-.5,0,a-1.001),l=Math.floor(s),u=Math.floor(c),d=s-l,f=c-u,p=(u*a+l)*4,m=p+a*4;for(let e=0;e<4;e++){let t=o[p+e],r=o[p+4+e],i=o[m+e],a=o[m+4+e];n[e]=(t*(1-d)+r*d)*(1-f)+(i*(1-d)+a*d)*f}return n}_wobble(e){return Math.sin(e*.029+.7)*.07+Math.sin(e*.083+2.1)*.035}_waveAmp(e,t){let n=this._shore.shore,r=n.amplitude.value,i=n.variation.value,a=Math.abs(Math.sin(e*Math.PI/7))*.6+.55,o=Math.sin(e*127.1+311.7)*43758.5453,s=(o-Math.floor(o)-.5)*2,c=Math.sin(t*.016+e*.9)*1.6,l=Math.sin(t*.062+e*1.7+c),u=Math.sin(t*.13+e*4.1+1.3-c*.7),d=l*.6+u*.4;return Math.max(.02,r*a*(1+s*i*.5+d*i*.7))}_buildStations(){let e=this.env,{terrain:t}=this._shore,n=[0,0,0,0],r=(e,n)=>t.heightAt(e,n)-0;this._field(e.lx,e.lz,n);let i=Math.hypot(n[1],n[2]),a=i>.001?n[1]/i:this._swell.x,o=i>.001?n[2]/i:this._swell.z,s=r(e.lx,e.lz),c=s>0?-1:1,l=null;for(let t=1;t<400;t+=1.5){let n=e.lx+a*c*t,i=e.lz+o*c*t;if(r(n,i)>0!=s>0){l={x:n,z:i};break}}let u=[];if(l)for(let e=0;e<rf;e++){let t=(e-4)*af,s=l.x-o*t,c=l.z+a*t;if(this._field(s,c,n),i=Math.hypot(n[1],n[2]),i<.03)continue;let d=n[1]/i,f=n[2]/i,p=r(s,c)>0?-1:1,m=!1;for(let e=0;e<60;e+=.5){let t=s+d*p*e,n=c+f*p*e;if(r(t,n)>0!=p<0){s=t,c=n,m=!0;break}}if(!m)continue;this._field(s,c,n);let h={x:s,z:c,dx:d,dz:f,Ts:n[3],exposure:Y(i*1.4,0,1),along:-s*f+c*d,depth:new Float32Array(of),T:new Float32Array(of),last:{crash:-1e9,wash:-1e9,back:-1e9}};for(let e=0;e<of;e++){let t=s-d*e,i=c-f*e;h.depth[e]=-r(t,i),h.T[e]=this._field(t,i,n)[0]}h.T[0]<1e4&&h.Ts<1e4&&u.push(h)}this._stations=u}_surf(e){let t=this.env,n=this._shoreSrc();if(!n||!n.shore.enabled||n.shore.enabled.value<.5){this._fakeSurf(e,+!n);return}let r=n.shore,i=Math.hypot(t.lx-this._stAt.x,t.lz-this._stAt.z);(!this._stations||i>12)&&(this._stAt.x=t.lx,this._stAt.z=t.lz,this._buildStations());let a=Math.max(1,r.period.value),o=r.time.value,s=r.gamma.value,c=this.ctx.currentTime,l=.2,u=Math.max(.05,r.amplitude.value);for(let e of this._stations){let n=Math.hypot(e.x-t.lx,e.z-t.lz);if(n>160)continue;let r=this._wobble(e.along),i=Math.floor((o-e.Ts)/a+r);for(let d=i;d<=i+2;d++){let i=this._waveAmp(d,e.along),f=i/u,p=16*Math.log10(Y(f*e.exposure,.05,3)),m=(i*3.556/s)**.8*.92,h=0;for(;h<109&&e.depth[h]<m;)h++;let g=e.T[h]+(d-r)*a;if(d>e.last.crash&&g>=o-.1&&g<o+l){e.last.crash=d;let n=e.x-e.dx*h,r=e.z-e.dz*h;Math.hypot(n-t.lx,r-t.lz)<150&&i>.06&&this._shotAt(`surf_crash`,`crash`,n,.4,r,Q.crash+p+(Math.random()-.5)*3,Y(1.06-.25*f,.82,1.08)*(.96+Math.random()*.08),c+Math.max(0,g-o),10,.65)}let _=e.Ts+(d-r)*a,v=_+sf*a;d>e.last.wash&&_>=o-.1&&_<o+l&&(e.last.wash=d,n<70&&this._shotAt(`surf_wash`,`wash`,e.x-e.dx,.1,e.z-e.dz,Q.wash+p+(Math.random()-.5)*3,.95+Math.random()*.1,c+Math.max(0,_-o),5,.8)),d>e.last.back&&v>=o-.1&&v<o+l&&(e.last.back=d,n<60&&this._shotAt(`surf_backwash`,`back`,e.x-e.dx*2,0,e.z-e.dz*2,Q.backwash+p+(Math.random()-.5)*3,.95+Math.random()*.1,c+Math.max(0,v-o),5,.8))}}}_fakeSurf(e,t){if(!t)return;let n=this.env;if(this._fakeT-=e,this._fakeT>0)return;this._fakeT=2.5+Math.random()*4;let r=Math.max(6,n.shoreDist),i=(Math.random()-.5)*60,a=n.lx+n.shoreX*(r+12)-n.shoreZ*i,o=n.lz+n.shoreZ*(r+12)+n.shoreX*i,s=this.ctx.currentTime;this._shotAt(`surf_crash`,`crash`,a,.4,o,Q.crash+(Math.random()-.5)*6,.92+Math.random()*.12,s,10);let c=n.lx+n.shoreX*r-n.shoreZ*i,l=n.lz+n.shoreZ*r+n.shoreX*i;r<70&&(this._shotAt(`surf_wash`,`wash`,c,.1,l,Q.wash+(Math.random()-.5)*4,1,s+3.5,5),this._shotAt(`surf_backwash`,`back`,c,0,l,Q.backwash+(Math.random()-.5)*4,1,s+7,5))}_readState(e){let t=this.env,n=e.listener||cf,r=n.position||cf,i=n.forward||cf,a=n.up||cf;t.lx=X(r.x,t.lx),t.ly=X(r.y,t.ly),t.lz=X(r.z,t.lz);let o=X(i.x,0),s=X(i.y,0),c=X(i.z,-1),l=Math.hypot(o,s,c)||1;o/=l,s/=l,c/=l;let u=X(a.x,0),d=X(a.y,1),f=X(a.z,0),p=Math.hypot(u,d,f)||1;u/=p,d/=p,f/=p,t.fx=o,t.fy=s,t.fz=c,t.ux=u,t.uy=d,t.uz=f,t.u=Y(X(e.underwater,0),0,1),t.depth=Math.max(0,X(e.depthBelowSurface,0)),t.surf=Y(X(e.surfIntensity,.5),0,1),t.shoreDist=Math.max(0,X(e.distanceToShore,60)),t.wind=Y(X(e.windSpeed,7),0,40),t.day=Y(X(e.daylight,1),0,1),t.nearPier=!!e.nearPier,t.hour=typeof e.timeOfDay==`number`&&Number.isFinite(e.timeOfDay)?(e.timeOfDay%24+24)%24:null;let m=e.boat||cf,h=m.position||cf,g=t.boat;g.active=!!m.active,g.rpm=Y(X(m.rpm,0),0,1),g.speed=Math.abs(X(m.speed,0)),g.x=X(h.x,g.x),g.y=X(h.y,g.y),g.z=X(h.z,g.z),g.inside=!!m.listenerInside,t.onLand=typeof e.coastDistance==`number`&&Number.isFinite(e.coastDistance)?e.coastDistance<0:!0,(t.u>.01||g.active)&&(t.onLand=!1);let _=this._swell,v=t.lx*_.x+(t.lz+42)*_.z>0;t.shoreX=v?-_.x:_.x,t.shoreZ=v?-_.z:_.z}_placeListener(){let e=this.ctx.listener,t=this.env;e.positionX?(this._ramp(e.positionX,t.lx,.03),this._ramp(e.positionY,t.ly,.03),this._ramp(e.positionZ,t.lz,.03),this._ramp(e.forwardX,t.fx,.02),this._ramp(e.forwardY,t.fy,.02),this._ramp(e.forwardZ,t.fz,.02),this._ramp(e.upX,t.ux,.02),this._ramp(e.upY,t.uy,.02),this._ramp(e.upZ,t.uz,.02)):(e.setPosition(t.lx,t.ly,t.lz),e.setOrientation(t.fx,t.fy,t.fz,t.ux,t.uy,t.uz)),this._pos(this.surfPan,t.lx+t.shoreX*40,t.ly-1.5,t.lz+t.shoreZ*40),this._pos(this.boatPan,t.boat.x,t.boat.y+.3,t.boat.z),this._ramp(this.boatIn.gain,+!!t.boat.inside,.1),this._ramp(this.boatOut.gain,+!t.boat.inside,.1);let n=W.pier;this._pos(this.pierPan,n.x,0,Y(t.lz,Math.max(n.zStart,-40),n.zEnd))}_mix(e,t){let n=this.env,r=n.u,i=n.shoreDist,a=n.boat,o=Y(n.depth/12,0,1),s=Math.exp(Kd(Math.log(2e4),Math.log(Kd(520,260,o)),r));this._ramp(this.muffle[0].frequency,s,.04),this._ramp(this.muffle[1].frequency,Math.min(2e4,s*1.4),.04),this._ramp(this.aboveOut.gain,Kd(1,.4/(1+n.depth/5),r),.05),this._ramp(this.under.gain,r,.06);let c=r>0||!n.onLand&&n.ly<2.5;this._bed(`under_reef`,c?Z(Q.reef)*(.8+.3*o)/Z(Gd.under_reef.lufs):0,e,.5),c&&(this._want(`uw_swim`),this._want(`submerge`),this._want(`emerge`));let l=.6+.7*n.surf;this._bed(`surf_far`,Z(Q.surfFar)*1.25/(1+i/200)*l/Z(Gd.surf_far.lufs),e,.5);let u=this._gust;u.t-=t,u.t<=0&&(u.target=Math.random()<.35?.03+Math.random()*.12:.3+Math.random()*.7,u.t=2+Math.random()*6),u.v+=(u.target-u.v)*(1-Math.exp(-t/1.4));let d=Math.hypot(n.wind,a.active?a.speed*.9:0),f=a.active&&a.speed>3?Math.max(u.v,.5):u.v;this._bed(`wind`,Z(Q.wind)*Y(d/7,0,2.5)*f/Z(Gd.wind.lufs),e,.3),this._ramp(this.windLP.frequency,400+(80+60*f)*d,.4);let p=n.onLand?qd(6,30,i):0;this._bed(`palms`,Z(Q.palms)*p*Y(n.wind/7,.2,1.8)*u.v*(.3+.7*n.day)/Z(Gd.palms.lufs),e,.5);let m=qd(.3,.12,n.day);this._bed(`crickets`,Z(Q.crickets)*m*(n.onLand?.35+.65*qd(5,40,i):.1)/Z(Gd.crickets.lufs),e,1),this._bed(`pier_lap`,(n.nearPier?Z(Q.pierLap):0)/Z(Gd.pier_lap.lufs),e,.6),this._engine+=(+!!this._engineOn-this._engine)*(1-Math.exp(-t*(this._engineOn?3:1.2)));let h=Math.hypot(a.x-n.lx,a.z-n.lz),g=a.active||h<60,_=this._engine,v=a.rpm;this._bed(`boat_engine`,Z(Kd(Q.engineIdle,Q.engineRun,v**.8))*_/Z(Gd.boat_engine.lufs),e,.12,(.8+.85*v)*Kd(.75,1,_)),this._ramp(this.engineLP.frequency,900+6500*v**1.3,.12);let y=a.speed;if(this._bed(`boat_rush`,g?Z(Q.boatRush)*qd(.4,9,y)/Z(Gd.boat_rush.lufs):0,e,.3,.85+.02*Math.min(y,12)),this._bed(`boat_lap`,g?Z(Q.boatLap)*(1-qd(1.5,5,y))/Z(Gd.boat_lap.lufs):0,e,.5),g&&y>1.2&&n.u<.5&&(this._slapT-=t,this._slapT<=0)){let e=qd(1.2,9,y);this._slapT=.3+Math.random()*(2.2-1.6*e),this._shot(`hull_slap`,`hull`,this.boatSum,Q.hullSlap-14+8*e+(Math.random()-.5)*4,.85+Math.random()*.3)}}_mixLand(e,t){let n=this.env,r=this._gust;r.t-=t,r.t<=0&&(r.target=Math.random()<.3?.08+Math.random()*.15:.35+Math.random()*.65,r.t=2+Math.random()*6),r.v+=(r.target-r.v)*(1-Math.exp(-t/1.4));let i=n.wind;this._bed(`wind`,Z(Q.wind+5)*Y(i/7,0,2.5)*r.v/Z(Gd.wind.lufs),e,.3),this._ramp(this.windLP.frequency,450+(90+70*r.v)*i,.4),this._bed(`palms`,Z(Q.palms-4)*Y(i/7,.2,1.8)*(.25+.75*r.v)*(.4+.6*n.day)/Z(Gd.palms.lufs),e,.5);let a=qd(.3,.12,n.day);this._bed(`crickets`,Z(Q.crickets)*a/Z(Gd.crickets.lufs),e,1)}_life(e){let t=this.env;if(t.day<.35||t.u>.5)return;let n=this._flock();if(this._gullT-=e,this._gullT<=0){if(n){let e=this._pickBird(n,`gull`,170);if(this._gullT=e?5+Math.random()*15:3,e){let t=e.f.P.pos;this._shotAt(`gull`,`gull`,t[0],t[1],t[2],Q.gull+(Math.random()-.5)*4,.93+Math.random()*.14,0,10)}}else t.shoreDist<300&&(this._gullT=7+Math.random()*18+t.shoreDist*.05,this._want(`gull`)&&this._gull())}if(this._ternT-=e,this._ternT<=0){let e=n?this._pickBird(n,`tern`,190):null;if(this._ternT=e?7+Math.random()*18:4,e){let t=e.f.P.pos;this._shotAt(`tern`,`tern`,t[0],t[1],t[2],Q.tern+(Math.random()-.5)*4,.95+Math.random()*.1,0,10)}}}_flock(){let e=globalThis.__app,t=e&&e.wildlife,n=t&&t.birds;return n&&Array.isArray(n.agents)&&n.agents.length?n.agents:null}_pickBird(e,t,n){let r=this.env,i=this._cand||=[];i.length=0;let a=0;for(let o of e){if(o.kind!==t||o.visible===!1||!o.f||!o.f.P||!o.f.P.pos)continue;let e=o.f.P.pos,s=Math.hypot(e[0]-r.lx,e[1]-r.ly,e[2]-r.lz);if(!(s<n))continue;let c=1/(15+s);i.push(o,c),a+=c}if(a<=0)return null;let o=Math.random()*a;for(let e=0;e<i.length;e+=2)if(o-=i[e+1],o<=0)return i[e];return i[i.length-2]}_hour(){if(this.env.hour!==null)return this.env.hour;let e=globalThis.__app,t=e&&e.settings&&e.settings.timeOfDay;return typeof t==`number`&&Number.isFinite(t)?(t%24+24)%24:null}_birdActivity(){let e=this._hour();if(e===null)return{act:qd(.35,.6,this.env.day),chorus:0,lull:0};let t=qd(4.9,5.7,e)*(1-qd(18.2,19.3,e)),n=qd(5,5.8,e)*(1-qd(6.6,7.9,e)),r=qd(10.5,12,e)*(1-qd(14.5,16,e)),i=qd(17.2,18.6,e);return{act:t*Math.max(0,1+2.5*n-.6*r-.55*i),chorus:t*n,lull:r}}_perch(){let e=this.env,t=globalThis.__app,n=this._shore&&this._shore.terrain||t&&t.terrainData;for(let t=0;t<8;t++){let t=Math.random()*Math.PI*2,r=10+Math.random()*70,i=e.lx+Math.cos(t)*r,a=e.lz+Math.sin(t)*r,o,s;if(n&&n.coastDistance&&n.heightAt){let e=n.coastDistance(i,a);o=-X(e&&e.d,1),s=X(n.heightAt(i,a),0)}else o=e.onLand?e.shoreDist+(Math.random()-.5)*r:-1,s=e.ly-1.7;if(!(o<8||Math.random()>.25+.75*qd(8,45,o)))return{x:i,y:s+3+Math.random()*9,z:a}}return null}_birds(e,t){let n=this.env,{act:r,chorus:i,lull:a}=this._birdActivity(),o=n.onLand?qd(0,45,n.shoreDist):0,s=n.onLand?.25+.75*o:.25*(1-qd(20,90,n.shoreDist)),c=i*(n.onLand?.3+.7*o:.3*(1-qd(20,150,n.shoreDist)))*(1-n.u);this._bed(`birds_dawn`,Z(Q.birdChorus)*c/Z(Gd.birds_dawn.lufs),e,2),this._birdT-=t;let l=r*s;if(this._birdT<=0&&(this._birdT=l>.02?(4+Math.random()*20)/l:3,l>.02&&n.u<.5&&this._singers.length<3)){let e=this._perch();if(e){let t=Math.random()<.15+.25*a,n=t?`bird_dove`:`bird_forest`,r=t?null:Xd[Math.floor(Math.random()*Xd.length)];this._want(n),e.bank=n,e.group=r,e.n=1+Math.floor(Math.random()*(t?2:4)),e.t=Math.random()*.5,e.rate=.93+Math.random()*.14,e.lvl=(t?Q.dove:Q.bird)+(Math.random()-.5)*6,this._singers.push(e)}}for(let e=this._singers.length-1;e>=0;e--){let i=this._singers[e];if(i.t-=t,i.t>0)continue;if(i.n<=0||n.u>.5||r<.01){this._singers.splice(e,1);continue}let a=Gd[i.bank];if(!this._want(i.bank)){i.t=1;continue}let o=-1;i.group&&(o=i.group[Math.floor(Math.random()*i.group.length)],o===this._last[i.bank]&&(o=i.group[(i.group.indexOf(o)+1)%i.group.length]));let s=this._shotAt(i.bank,`bird`,i.x,i.y,i.z,i.lvl+(Math.random()-.5)*2,i.rate*(.98+Math.random()*.04),0,10,1,o)?a.slices[this._last[i.bank]][1]/i.rate:0;i.n--,i.t=s+.8+Math.random()*4.5}}_whale(e,t){let n=this.env,r=this._wh,i=globalThis.__app,a=i&&i.whale,o=a&&a.ready&&a.brain;if(!o||!o.position){this._beds.has(`whale_song`)&&this._bed(`whale_song`,0,e,1);return}let s=o.position,c=n.u,l=Math.hypot(s.x-n.lx,s.y-n.ly,s.z-n.lz);r.sing+=((o.state===`cruise`?1:.1)-r.sing)*(1-Math.exp(-t/4));let u=l<Qd;(u||this._beds.has(`whale_song`))&&(this._pos(this.songPan,s.x,s.y,s.z),this._ramp(this.songLP.frequency,Math.exp(Kd(Math.log(420),Math.log(16e3),c)),.08),this._ramp(this.songOut.gain,Kd(Z(-20),1,c),.08),this._bed(`whale_song`,u?Z(Q.whaleSong)*r.sing*(1-qd(70,Qd,l))/Z(Gd.whale_song.lufs):0,e,1.5));let d=X(o.water,0),f=Math.sin(X(o.yaw,0)),p=Math.cos(X(o.yaw,0)),m=o.blow>0,h=X(o.flukeUp,0),g=l<Qd;if(l<Qd*1.5)for(let e of Zd)this._want(e);if(g&&r.breaches>=0){m&&!r.blow&&this._shotAt(`whale_blow`,`whale`,s.x+f*4,d+1,s.z+p*4,Q.whaleBlow+(Math.random()-.5)*3,.72+Math.random()*.12,0,10),o.breaches>r.breaches&&this._shotAt(`big_splash`,`whale`,s.x,d+1,s.z,Q.whaleBurst,.6+Math.random()*.1,0,10),o.splashes>r.splashes&&(this._shotAt(`big_splash`,`whale`,s.x,d+.5,s.z,Q.whaleSplash,.5+Math.random()*.08,0,12),this._shotAt(`surf_crash`,`whale`,s.x+f*3,d+.5,s.z+p*3,Q.whaleSplash-4,.72+Math.random()*.08,e+.06,12));let t=s.x-f*9,n=s.z-p*9;h>.05&&r.fluke<=.05&&this._shotAt(`emerge`,`whale`,t,d+2,n,Q.whaleDrip,.7+Math.random()*.1,0,8),h===0&&r.fluke>.8&&this._shotAt(`big_splash`,`whale`,t,d,n,Q.whaleFluke,.78+Math.random()*.1,0,10)}r.blow=m,r.fluke=h,r.breaches=X(o.breaches,0),r.splashes=X(o.splashes,0)}_ramp(e,t,n){if(!Number.isFinite(t))return;let r=e._t;r!==void 0&&Math.abs(t-r)<=Math.abs(r)*.004+1e-6||(e._t=t,e.setTargetAtTime(t,this.ctx.currentTime,n))}_pos(e,t,n,r){e.positionX?(this._ramp(e.positionX,t,.05),this._ramp(e.positionY,n,.05),this._ramp(e.positionZ,r,.05)):e.setPosition(t,n,r)}_warn(e){let t=e&&e.message||String(e);this._warned.has(t)||this._warned.size>20||(this._warned.add(t),console.warn(`[SoundScape]`,e))}},uf={value:new P},df=new P,ff=new P,pf=!1;function mf(e){e.updateMatrixWorld(),e.matrixWorldInverse&&e.matrixWorldInverse.copy(e.matrixWorld).invert(),ff.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),pf?uf.value.copy(df):uf.value.copy(ff),df.copy(ff),pf=!0}function hf(e){e.traverse(e=>{e.staticVelocity=!0})}var gf=-1e3,_f=new R({name:`waterQueryDry`,deps:[z],code:`
const WATER_DRY: f32 = ${gf}.0;
fn waterQueryResult( slot: u32 ) -> vec4f { return vec4f( WATER_DRY, 0.0, 0.0, WATER_DRY ); }
fn waterQueryHeightAt( slot: u32 ) -> f32 { return WATER_DRY; }
fn waterQueryCameraState() -> vec4f { return vec4f( WATER_DRY, 0.0, 0.0, WATER_DRY ); }
fn waterQueryHeightAtXZ( p: vec2f ) -> f32 { return WATER_DRY; }
`}),vf=class{constructor(){this.module=_f,this.resultsModule=_f,this.heightModule=_f,this.count=1,this.cpu=new Float32Array(256).fill(0);for(let e=0;e<64;e++)this.cpu[e*4]=gf,this.cpu[e*4+3]=gf;this.cpuValid=!0,this.version=0}allocate(e,t=1){let n=this.count;return this.count+=t,n}setPoint(){}setCamera(){}update(){}};function yf({clouds:e=null,terrain:t=null}={}){let n=new R({name:`hook-directModulation-dry`,deps:[z,gr,e&&(e.shadowModule||e.module),t&&t.module].filter(Boolean),code:`
fn hookDirectModulation( P: vec3f, N: vec3f ) -> vec3f {
	let cloudShadow = ${e?`cloudsShadow( P.xz )`:`1.0`};
#if HILL_SHADOW_SELF
	let hill = 1.0;
#else
	let hill = ${t?`terrainSunShadowAt( P )`:`1.0`};
#endif
	return vec3f( cloudShadow * hill );
}
`});return sr.set(`directModulation`,n),{direct:n}}var bf=class{constructor(e,{enabled:t=!0,min:n=.6,max:r=1,down:i=48,up:a=57}={}){this.app=e,this.enabled=t,this.min=n,this.max=r,this.downFps=i,this.upFps=a,this.acc=0,this.n=0,this.goodFor=0,this.settle=4,this.clock=0,this.badUntil={},this.changes=0}update(e){if(!this.enabled||!(e>0)||(this.clock+=e,e>.25))return null;if(this.settle>0)return this.settle-=e,null;if(this.acc+=e,this.n++,this.acc<2)return null;let t=this.n/this.acc;this.acc=0,this.n=0;let n=this.app.settings.renderScale,r=n;if(t<this.downFps&&n>this.min+.001)this.badUntil[Math.round(n*100)]=this.clock+40,r=Math.max(this.min,n-.1),this.goodFor=0;else if(t>=this.upFps){this.goodFor+=2;let e=Math.min(this.max,n+.05);this.goodFor>=8&&e>n+.001&&!(this.clock<(this.badUntil[Math.round(e*100)]||0))&&(r=e,this.goodFor=0)}else this.goodFor=0;return Math.abs(r-n)<.001?null:(this.app.setRenderScale(r),this.settle=3,this.changes++,this.app.settings.renderScale)}},xf=[{R:4,wallH:1.95,crownH:3.35,crownR:.8},{R:3.5,wallH:1.85,crownH:3.1,crownR:.72},{R:4.4,wallH:2,crownH:3.55,crownR:.85}],Sf={minDist:95,maxDist:260,idealDist:120,halfCone:32*Math.PI/180,maxRange:.5,maxSlope:.1,ropeClear:1.25,treeClear:3,shrubClear:1.2,rockClear:1.5};function Cf(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function wf(e,t,n,r){let i=1/0,a=-1/0,o=1/0,s=(e,t)=>{i=Math.min(i,e),a=Math.max(a,e),t&&(o=Math.min(o,e))};s(e.heightAt(t,n),!1);for(let i=0;i<20;i++){let a=i/20*Math.PI*2;s(e.heightAt(t+Math.sin(a)*r,n+Math.cos(a)*r),!0),i%2==0&&s(e.heightAt(t+Math.sin(a)*r*.5,n+Math.cos(a)*r*.5),!1)}return{min:i,max:a,range:a-i,ringMin:o}}function Tf(e,t,n){if(!e.rock||!e.res)return 0;let r=Math.floor((t-e.origin)/e.texel),i=Math.floor((n-e.origin)/e.texel);return r<0||i<0||r>=e.res||i>=e.res?1:e.rock[i*e.res+r]||0}function Ef({terrain:e,trees:t=[],shrubs:n=[],rocks:r=[]}){let i=[];for(let e of t)i.push({x:e.x,z:e.z,r:5.5*(e.s||1)+Sf.treeClear,kind:`tree`});for(let e of n)i.push({x:e.x,z:e.z,r:1.4*(e.s||1)+Sf.shrubClear,kind:`shrub`});for(let e of r)i.push({x:e.x,z:e.z,r:(e.radius||e.size||1)+Sf.rockClear,kind:`rock`});for(let t of e.rockSites||[])i.push({x:t.x,z:t.z,r:t.r*1.8+4,kind:`tor`});return i}function Df(e,t,n,r){for(let i of e)if(Math.hypot(t-i.x,n-i.z)<r+i.r)return i;return null}function Of(e,t,n,r,i){let a=Math.hypot(n-t.x,r-t.z);for(let o=1;o<60;o++){let s=o/60;if(s*a<25)continue;let c=t.x+(n-t.x)*s,l=t.z+(r-t.z)*s,u=t.y+(i-t.y)*s;if(e.heightAt(c,l)>u-.25)return!1}return!0}function kf(e,t,n,r,i,a=i){return Math.abs(n)>e.size/2-50||Math.abs(r)>e.size/2-50||e.slopeAt(n,r)>Sf.maxSlope||Tf(e,n,r)>.04||wf(e,n,r,i).range>Sf.maxRange?!1:!Df(t,n,r,a)}function Af({terrain:e,spawn:t,viewYaw:n,sunDir:r=null,trees:i=[],shrubs:a=[],rocks:o=[],seed:s=5,count:c=3}){let l=Cf(s),u=Ef({terrain:e,trees:i,shrubs:a,rocks:o}),d={x:t.x,y:(t.h??t.y)+1.62,z:t.z},f={x:-Math.sin(n),z:-Math.cos(n)},p=xf[0],m=e=>e.R+Sf.ropeClear,h=r?Math.atan2(f.x*r.z-f.z*r.x,f.x*r.x+f.z*r.z):null,g=null;for(let n=Sf.minDist+2;n<=Sf.maxDist-10;n+=4)for(let r=-Math.PI;r<Math.PI;r+=.01){let i=Math.cos(r),a=Math.sin(r),o=f.x*i-f.z*a,s=f.x*a+f.z*i,c=t.x+o*n,l=t.z+s*n;if(!kf(e,u,c,l,p.R+.4,m(p)))continue;let _=wf(e,c,l,p.R);if(!Of(e,d,c,l,_.ringMin+p.crownH-.5))continue;let v=Of(e,d,c,l,_.ringMin+.9),y=Math.max(0,Math.abs(r)-Sf.halfCone),b=h===null?Math.PI:Math.abs(r-h);b>Math.PI&&(b=Math.PI*2-b);let x=Math.max(0,1.4-b),S=y*2+x*2.5+(v?0:.8)+Math.abs(n-Sf.idealDist)/120+_.range*2+e.slopeAt(c,l)*5;(!g||S<g.score)&&(g={x:c,z:l,score:S,a:r,d:n,wall:v,toSun:b})}if(!g)return{yurts:[],cart:null,line:null,center:null,reason:`no flat, clear, visible site in the start view 95-260 m out`};let _=[],v=[],y=(t,n,r)=>{let i=wf(e,t,n,r.R),a=Math.atan2(d.x-t,d.z-n)+(l()-.5)*.9,o={x:t,z:n,y:i.ringMin,yaw:a,type:xf.indexOf(r),...r,seed:Math.floor(l()*1e6)};return _.push(o),v.push({x:t,z:n,r:m(r),kind:`yurt`}),o};y(g.x,g.z,p);for(let n=1;n<c;n++){let r=xf[n%xf.length],i=!1;for(let n=0;n<400&&!i;n++){let n=l()*Math.PI*2,a=12+l()*7,o=_[Math.floor(l()*_.length)],s=o.x+Math.sin(n)*a,c=o.z+Math.cos(n)*a,d=Math.hypot(s-t.x,c-t.z);d<Sf.minDist-15||d>Sf.maxDist||Df(v,s,c,m(r)+2.5)||kf(e,u,s,c,r.R+.4,m(r))&&(y(s,c,r),i=!0)}}let b=u.concat(v),x=null,S=null;for(let t=0;t<200&&!x;t++){let t=_[Math.floor(l()*_.length)],n=l()*Math.PI*2,r=t.R+4.5+l()*3,i=t.x+Math.sin(n)*r,a=t.z+Math.cos(n)*r;kf(e,b,i,a,2.2,2.4)&&(x={x:i,z:a,y:e.heightAt(i,a),yaw:l()*Math.PI*2})}x&&b.push({x:x.x,z:x.z,r:2.4,kind:`cart`});for(let t=0;t<200&&!S;t++){let t=_[Math.floor(l()*_.length)],n=l()*Math.PI*2,r=t.R+7+l()*5,i=t.x+Math.sin(n)*r,a=t.z+Math.cos(n)*r,o=l()*Math.PI,s=i-Math.sin(o)*2.5,c=a-Math.cos(o)*2.5,u=i+Math.sin(o)*2.5,d=a+Math.cos(o)*2.5;kf(e,b,s,c,.6)&&kf(e,b,u,d,.6)&&!Df(b,i,a,.8)&&(S={x0:s,z0:c,x1:u,z1:d,y0:e.heightAt(s,c),y1:e.heightAt(u,d)})}let C=0,w=0;for(let e of _)C+=e.x,w+=e.z;return{yurts:_,cart:x,line:S,center:{x:C/_.length,z:w/_.length},best:g,obstacles:u}}function jf(e,t,n,r){let{data:i,res:a}=e,o=[];for(let e of n.yurts)o.push({x:e.x,z:e.z,r0:e.R-.5,r1:e.R+7,h:.4,d:.65});n.cart&&o.push({x:n.cart.x,z:n.cart.z,r0:1.5,r1:5,h:.6,d:.8}),n.line&&o.push({x:(n.line.x0+n.line.x1)/2,z:(n.line.z0+n.line.z1)/2,r0:2.5,r1:7,h:.45,d:.7});let s=0;for(let e of o){let n=Math.max(0,Math.floor((e.x-e.r1-t.origin)/r)),o=Math.min(a-1,Math.ceil((e.x+e.r1-t.origin)/r)),c=Math.max(0,Math.floor((e.z-e.r1-t.origin)/r)),l=Math.min(a-1,Math.ceil((e.z+e.r1-t.origin)/r));for(let u=c;u<=l;u++)for(let c=n;c<=o;c++){let n=t.origin+(c+.5)*r,o=t.origin+(u+.5)*r,l=Math.hypot(n-e.x,o-e.z);if(l>e.r1)continue;let d=Math.min(1,Math.max(0,(l-e.r0)/(e.r1-e.r0))),f=d*d*(3-2*d),p=(u*a+c)*4;i[p]=Math.round(i[p]*(e.h+(1-e.h)*f)),i[p+1]=Math.round(i[p+1]*(e.d+(1-e.d)*f)),i[p+2]=Math.round(i[p+2]*f*f),i[p+3]=Math.round(i[p+3]*(.3+.7*f)),s++}}return s}var Mf=`./models/yurt/`,Nf=[`felt`,`canvas`,`wood`,`paint`,`rope`],Pf={FELT:0,CANVAS:1,WOOD:2,PAINT:3,ROPE:4,DARK:-1,METAL:-4},$={felt:.3,canvas:.11,wood:1.1,paint:1.7,rope:.16},Ff={WALL:0,ROOF:1,FLAP:2,OTHER:3,TRIM:4};async function If(e){if(globalThis.__assetFile)return globalThis.__assetFile(e);let t=await fetch(e);if(!t.ok)throw Error(`Yurt: `+e+` `+t.status);return t.arrayBuffer()}function Lf(e,t,n){let r=t[0].width,i=t[0].height,a=new Uint8Array(r*i*4*t.length);t.forEach((t,n)=>{if(t.width!==r||t.height!==i)throw Error(`Yurt: `+e+` layer `+n+` is `+t.width+`x`+t.height);a.set(t.data,r*i*4*n)});let o=new I({label:e,width:r,height:i,depth:t.length,dimension:`2d-array`,format:n?`rgba8unorm-srgb`:`rgba8unorm`,mips:!0,usage:[`sample`,`copyDst`],data:a});return o.getGPU(),Gi(o),o}function Rf(e){let t=new Uint8Array(64);for(let n=0;n<16;n++)t.set(e,n*4);return Nf.map(()=>({width:4,height:4,data:t}))}var zf=null;function Bf(){return zf||=(async()=>{let e,t,n,r=!1;try{let r=e=>Promise.all(Nf.map(async t=>Oa(new Uint8Array(await If(Mf+t+`_`+e+`.jpg`)),`image/jpeg`)));[e,t,n]=await Promise.all([r(`a`),r(`n`),r(`r`)])}catch(i){console.warn(`Yurt: textures failed to load, using flat stand-ins`,i&&i.message),e=Rf([200,196,186,255]),t=Rf([128,128,255,255]),n=Rf([255,210,0,255]),r=!0}return{a:Lf(`yurtA`,e,!0),n:Lf(`yurtN`,t,!1),r:Lf(`yurtR`,n,!1),flat:r}})()}var Vf=new R({name:`yurtKit`,deps:[z],code:`
fn ytHash( p: vec3f ) -> f32 { return fract( sin( dot( p, vec3f( 127.1, 311.7, 74.7 ) ) ) * 43758.5453 ); }
fn ytNoise( p: vec3f ) -> f32 {
	let i = floor( p ); let f = fract( p ); let u = f * f * ( 3.0 - 2.0 * f );
	let a = mix( mix( ytHash( i ), ytHash( i + vec3f( 1, 0, 0 ) ), u.x ), mix( ytHash( i + vec3f( 0, 1, 0 ) ), ytHash( i + vec3f( 1, 1, 0 ) ), u.x ), u.y );
	let b = mix( mix( ytHash( i + vec3f( 0, 0, 1 ) ), ytHash( i + vec3f( 1, 0, 1 ) ), u.x ), mix( ytHash( i + vec3f( 0, 1, 1 ) ), ytHash( i + vec3f( 1, 1, 1 ) ), u.x ), u.y );
	return mix( a, b, u.z );
}
fn ytFbm( p: vec3f ) -> f32 { return ytNoise( p ) * 0.55 + ytNoise( p * 2.13 + 7.1 ) * 0.3 + ytNoise( p * 4.7 + 3.3 ) * 0.15; }
// perturbed normal from a scalar height (screen-space derivatives)
fn ytBump( P: vec3f, N: vec3f, h: f32 ) -> vec3f {
	let dPdx = dpdx( P ); let dPdy = dpdy( P );
	let r1 = cross( dPdy, N ); let r2 = cross( N, dPdx );
	let det = dot( dPdx, r1 );
	let grad = sign( det ) * ( dpdx( h ) * r1 + dpdy( h ) * r2 );
	return normalize( abs( det ) * N - grad + N * 1e-12 );
}
// the lattice (khana) under the wall cover: crossed slats at ±45°, 0.3 m diamonds
fn ytLattice( s: f32, h: f32 ) -> f32 {
	let q1 = abs( fract( ( s + h ) / 0.42 ) - 0.5 );
	let q2 = abs( fract( ( s - h ) / 0.42 ) - 0.5 );
	let slat = max( smoothstep( 0.1, 0.0, q1 ), smoothstep( 0.1, 0.0, q2 ) );
	return slat * smoothstep( 0.06, 0.2, h );
}
`});function Hf(e){let t=Ko({vertexColors:!0,modules:[Vf],attributes:{aLayer:`f32`,aUV2:`vec2f`,aPar:`vec2f`},varyings:{vLayer:`f32`,vUV2:`vec2f`,vPar:`vec2f`},textures:{ytA:e.a,ytN:e.n,ytR:e.r},vertex:`
	o.vLayer = v.aLayer;
	o.vUV2 = v.aUV2;
	o.vPar = v.aPar;
`});return t.name=`yurt`,t.setDefine(`SHEEN`,1),t.surface=`
	let Lr = round( in.vs.vLayer );
	let uv = in.uv;
	let arc = in.vs.vUV2.x;    // metres around the yurt (or along the piece)
	let hgt = in.vs.vUV2.y;    // metres above the ground under this point
	let part = round( in.vs.vPar.x );
	let tpar = in.vs.vPar.y;   // roof: 0 eave .. 1 crown; pipe: 0 bottom .. 1 top
	let P = in.P;
	let N0 = s.normal;
	// tangent frame from derivatives (uniform control flow): OpenGL normal maps, image v runs down
	let dp1 = dpdx( P ); let dp2 = dpdy( P ); let duv1 = dpdx( uv ); let duv2 = dpdy( uv );
	let dp2perp = cross( dp2, N0 ); let dp1perp = cross( N0, dp1 );
	let Tt = dp2perp * duv1.x + dp1perp * duv2.x;
	let Bt = dp2perp * duv1.y + dp1perp * duv2.y;
	let tInv = inverseSqrt( max( max( dot( Tt, Tt ), dot( Bt, Bt ) ), 1e-24 ) );
	let TBN = mat3x3f( Tt * tInv, - Bt * tInv, N0 );
	// relief computed in uniform control flow (derivatives): the lattice under the wall cover and
	// the stitched seams of the roof cover's panels (radial, ~0.95 m apart at the eave)
	let lat = ytLattice( arc, hgt ) * select( 0.0, 1.0, part < 0.5 && Lr > 0.5 && Lr < 1.5 );
	let seamD = abs( fract( arc / 0.95 + 0.5 ) - 0.5 ) * 0.95;
	let seam = smoothstep( 0.014, 0.004, seamD ) * select( 0.0, 1.0, part > 0.5 && part < 1.5 );
	let relief = lat * 0.0035 + seam * 0.0012;
	let Nrel = ytBump( P, N0, relief );
	let tint = in.color.rgb;
	var alb = tint;
	var rough = 0.85;
	var metal = 0.0;
	var ao = 1.0;
	var nrm = N0;
	var sheen = vec3f( 0.0 );
	if ( Lr > -0.5 ) {
		let li = i32( Lr );
		let a = textureSampleGrad( ytA, smpAnisoRepeat, uv, li, duv1, duv2 );
		let n = textureSampleGrad( ytN, smpAnisoRepeat, uv, li, duv1, duv2 );
		let r = textureSampleGrad( ytR, smpAnisoRepeat, uv, li, duv1, duv2 );
		let fabric = Lr < 1.5;
		let strength = select( 1.0, 0.5, fabric );
		var tn = n.xyz * 2.0 - 1.0;
		tn = vec3f( tn.xy * strength, max( tn.z, 0.05 ) );
		// the texture's normal on top of the relief frame
		let T2 = normalize( TBN[ 0 ] - Nrel * dot( TBN[ 0 ], Nrel ) );
		let B2 = cross( Nrel, T2 ) * sign( dot( cross( N0, TBN[ 0 ] ), TBN[ 1 ] ) );
		nrm = normalize( mat3x3f( T2, B2, Nrel ) * tn );
		alb = a.rgb * tint;
		ao = r.r; rough = r.g; metal = r.b;
		if ( abs( Lr - 3.0 ) < 0.5 ) {
			// painted wood: the scan's blue-grey paint becomes the vertex colour (Mongolian orange /
			// red), keeping its shading; where it is chipped the weathered timber shows
			let lum = dot( a.rgb, vec3f( 0.3, 0.55, 0.15 ) );
			// (paint pixels are near-neutral dark grey-blue: b - r > -0.02; the bare timber is brown)
			let paintMask = smoothstep( -0.06, -0.03, a.b - a.r ); // ~70 % painted (v4: more chipped), the rest chipped to the timber
			let dyed = tint * ( 0.6 + 2.2 * lum );
			alb = mix( a.rgb * vec3f( 1.0, 0.92, 0.82 ), dyed, paintMask );
			rough = mix( rough, 0.62, paintMask );
		}
		if ( fabric ) {
			// large-scale weathering of the felt and canvas: blotchy sun bleaching and yellowing,
			// rain streaks down the wall (more under the eave and the belts), soot and run-off on
			// the roof (more around the smoke opening), the panel seams, soil splashed up the hem
			let big = ytFbm( P * 0.55 );
			alb = alb * mix( 0.8, 1.04, big ) * mix( vec3f( 1.0 ), vec3f( 0.97, 0.92, 0.82 ), ytFbm( P * 0.23 + 4.0 ) );
			// v4: dust and grime in small blotches (hands, smoke, dried rain spots)
			let grime = smoothstep( 0.55, 0.85, ytFbm( P * 2.7 + 13.0 ) );
			alb = mix( alb, alb * vec3f( 0.78, 0.72, 0.62 ), grime * 0.55 );
			if ( part < 0.5 ) {
				let streak = ytNoise( vec3f( arc * 6.5, hgt * 0.7, 2.0 ) ) * 0.6 + ytNoise( vec3f( arc * 19.0, hgt * 1.5, 5.0 ) ) * 0.4;
				let under = 0.35 + 0.65 * smoothstep( 0.7, 1.45, hgt );
				alb = alb * ( 1.0 - 0.28 * smoothstep( 0.45, 0.85, streak ) * under );
				alb = alb * ( 1.0 - 0.05 * lat );
			} else if ( part < 1.5 ) {
				let run = ytNoise( vec3f( arc * 5.0, tpar * 2.0, 4.0 ) );
				alb = alb * ( 1.0 - 0.22 * smoothstep( 0.5, 0.9, run ) * ( 1.0 - tpar ) );
				let soot = smoothstep( 0.72, 1.0, tpar ) * ( 0.5 + 0.5 * ytNoise( P * 3.0 ) );
				alb = mix( alb, alb * vec3f( 0.38, 0.35, 0.32 ), soot * 0.6 );
				alb = alb * ( 1.0 - 0.1 * seam );
			} else if ( part < 2.5 ) {
				let soot = ytFbm( P * 2.2 + 9.0 );
				alb = alb * mix( 0.7, 1.0, smoothstep( 0.25, 0.65, soot ) );
			}
			rough = clamp( rough * 1.05 + 0.04, 0.0, 1.0 );
			sheen = alb * 0.22;
		} else if ( abs( Lr - 2.0 ) < 0.5 ) {
			// raw timber out in the weather: silvered toward grey on its upper faces
			let lumw = dot( alb, vec3f( 0.3, 0.55, 0.15 ) );
			let up = smoothstep( 0.2, 0.9, N0.y );
			alb = mix( alb, vec3f( lumw * 1.15 ) * vec3f( 1.0, 0.97, 0.92 ), 0.25 + 0.25 * up );
		}
		// soil splashed up by rain on everything near the ground
		let splash = smoothstep( 0.7, 0.0, hgt ) * ( 0.55 + 0.45 * ytNoise( vec3f( arc * 4.0, hgt * 9.0, 1.0 ) ) );
		alb = mix( alb, vec3f( 0.16, 0.12, 0.085 ), splash * select( 0.3, 0.55, fabric ) );
	} else if ( Lr > -1.5 ) {
		// the dark inside of the tent seen through the smoke opening
		alb = tint;
		rough = 1.0;
		ao = 0.4;
	} else {
		// galvanised stove pipe: dull, rust spots, black soot toward the top
		let g = ytFbm( P * 18.0 );
		alb = vec3f( 0.5, 0.5, 0.48 ) * mix( 0.8, 1.05, g );
		metal = 0.85;
		rough = 0.42 + 0.2 * g;
		let rust = smoothstep( 0.62, 0.8, ytFbm( P * 30.0 + 3.0 ) );
		alb = mix( alb, vec3f( 0.22, 0.1, 0.045 ), rust * 0.7 );
		metal = mix( metal, 0.0, rust );
		rough = mix( rough, 0.9, rust );
		let soot = smoothstep( 0.45, 0.95, tpar + ( g - 0.5 ) * 0.25 );
		alb = mix( alb, vec3f( 0.025 ), soot );
		metal = mix( metal, 0.0, soot );
		rough = mix( rough, 0.95, soot );
	}
	s.albedo = alb;
	s.roughness = rough;
	s.metalness = metal;
	s.ao = ao;
	s.normal = nrm;
	s.sheenColor = sheen;
	s.sheenRoughness = 0.65;
`,t}var Uf=Math.PI*2,Wf=(e,t,n)=>Math.max(t,Math.min(n,e)),Gf=(e,t,n)=>e+(t-e)*n,Kf=(e,t,n)=>{let r=Wf((n-e)/(t-e),0,1);return r*r*(3-2*r)};function qf(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Jf(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a);return Gf(Gf(qf(n,r),qf(n+1,r),o),Gf(qf(n,r+1),qf(n+1,r+1),o),s)}var Yf=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Xf=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Zf=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Qf=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],$f=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],ep=e=>Math.hypot(e[0],e[1],e[2]),tp=e=>{let t=ep(e)||1;return[e[0]/t,e[1]/t,e[2]/t]},np=class{constructor(e,t){this.T=e,this.O=t,this.pos=[],this.nrm=[],this.uv=[],this.col=[],this.layer=[],this.uv2=[],this.par=[],this.idx=[],this.frame(t.x,t.y,t.z,0)}frame(e,t,n,r){this.F={x:e,y:t,z:n,c:Math.cos(r),s:Math.sin(r)}}_p(e){let t=this.F;return[e[0]*t.c+e[2]*t.s+t.x-this.O.x,e[1]+t.y-this.O.y,-e[0]*t.s+e[2]*t.c+t.z-this.O.z]}_n(e){let t=this.F;return[e[0]*t.c+e[2]*t.s,e[1],-e[0]*t.s+e[2]*t.c]}ground(e,t){let n=this.F;return this.T.heightAt(e*n.c+t*n.s+n.x,-e*n.s+t*n.c+n.z)-n.y}_vert(e,t,n,r,i,a,o){let s=this._p(e),c=this._n(t);return this.pos.push(s[0],s[1],s[2]),this.nrm.push(c[0],c[1],c[2]),this.uv.push(n[0],n[1]),this.col.push(r[0],r[1],r[2],1),this.layer.push(i),this.uv2.push(a[0],a[1]),this.par.push(o[0],o[1]),this.pos.length/3-1}_tri(e,t,n,r){let i=this.pos,a=[i[e*3],i[e*3+1],i[e*3+2]],o=[i[t*3],i[t*3+1],i[t*3+2]],s=[i[n*3],i[n*3+1],i[n*3+2]];Qf($f(Yf(o,a),Yf(s,a)),r)>=0?this.idx.push(e,t,n):this.idx.push(e,n,t)}surface(e,t,n,{layer:r,col:i,out:a,keep:o=null}){let s=this.pos.length/3,c=.001;for(let o=0;o<=t;o++)for(let s=0;s<=e;s++){let l=s/e,u=o/t,d=n(l,u),f=tp($f(Yf(n(Math.min(1,l+c),u).p,n(Math.max(0,l-c),u).p),Yf(n(l,Math.min(1,u+c)).p,n(l,Math.max(0,u-c)).p))),p=a(d.p,l,u);Qf(f,p)<0&&(f=Zf(f,-1)),(!isFinite(f[0])||ep(f)<.5)&&(f=tp(p)),this._vert(d.p,f,d.uv,d.col||i,d.layer??r,d.uv2,d.par)}let l=e+1;for(let n=0;n<t;n++)for(let r=0;r<e;r++){if(o&&!o((r+.5)/e,(n+.5)/t))continue;let i=s+n*l+r,a=i+1,c=i+l+1,u=i+l,d=this.nrm,f=[d[i*3]+d[c*3],d[i*3+1]+d[c*3+1],d[i*3+2]+d[c*3+2]];this._tri(i,a,c,f),this._tri(i,c,u,f)}}tube(e,t,{sides:n=6,layer:r=Pf.ROPE,col:i=[1,1,1],tile:a=$.rope,part:o=Ff.OTHER,caps:s=!1,alongU:c=!1}={}){let l=e.length;if(l<2)return;let u=typeof t==`function`?t:()=>t,d=[];for(let t=0;t<l;t++)d.push(tp(Yf(e[Math.min(l-1,t+1)],e[Math.max(0,t-1)])));let f=Math.abs(d[0][1])<.9?[0,1,0]:[1,0,0],p=tp($f($f(d[0],f),d[0])),m=this.pos.length/3,h=[],g=0;for(let t=0;t<l;t++){if(t>0){g+=ep(Yf(e[t],e[t-1]));let n=$f(d[t-1],d[t]);if(ep(n)>1e-6){let e=tp(n),r=Math.acos(Wf(Qf(d[t-1],d[t]),-1,1)),i=Math.cos(r),a=Math.sin(r);p=Xf(Xf(Zf(p,i),Zf($f(e,p),a)),Zf(e,Qf(e,p)*(1-i)))}}h.push(p);let s=$f(d[t],p),f=t/(l-1),m=u(f);for(let l=0;l<=n;l++){let u=l/n*Uf,d=Xf(Zf(p,Math.cos(u)),Zf(s,Math.sin(u))),h=Xf(e[t],Zf(d,m)),_=l/n*Uf*m,v=c?[g/a,_/a]:[_/a,g/a],y=h[1]-this.ground(h[0],h[2]);this._vert(h,d,v,i,r,[g,y],[o,f])}}let _=n+1;for(let e=0;e<l-1;e++)for(let t=0;t<n;t++){let n=m+e*_+t,r=n+1,i=n+_+1,a=n+_,o=this.nrm,s=[o[n*3]+o[i*3],o[n*3+1]+o[i*3+1],o[n*3+2]+o[i*3+2]];this._tri(n,r,i,s),this._tri(n,i,a,s)}if(s)for(let t of[0,l-1]){let s=t===0?Zf(d[0],-1):d[l-1],c=h[t],f=e[t],p=f[1]-this.ground(f[0],f[2]),m=this._vert(f,s,[0,0],i,r,[0,p],[o,+!!t]),g=this.pos.length/3;for(let e=0;e<=n;e++){let l=e/n*Uf,m=u(+!!t),h=$f(d[t],c),g=Xf(Zf(c,Math.cos(l)),Zf(h,Math.sin(l)));this._vert(Xf(f,Zf(g,m)),s,[Math.cos(l)*m/a,Math.sin(l)*m/a],i,r,[0,p],[o,+!!t])}let _=this._n(s);for(let e=0;e<n;e++)this._tri(m,g+e,g+e+1,_)}}box(e,t,n,r,i,a,o,{layer:s=Pf.WOOD,col:c=[1,1,1],tile:l=$.wood,part:u=Ff.OTHER}={}){let d=[[t,i],[n,a],[r,o]],f=[i,a,o].indexOf(Math.max(i,a,o)),p=qf(e[0]*3.1,e[2]*7.7),m=qf(e[2]*1.3,e[1]*5.1);for(let t=0;t<6;t++){let n=t>>1,r=t&1?-1:1,i=(n+1)%3,a=(n+2)%3,o=i,h=a;o===f&&(o=a,h=i);let g=Zf(d[n][0],r),_=Xf(e,Zf(g,d[n][1])),v=[];for(let[e,t]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let n=Xf(Xf(_,Zf(d[o][0],e*d[o][1])),Zf(d[h][0],t*d[h][1])),r=[(e+1)*d[o][1]/l+p,(t+1)*d[h][1]/l+m],i=n[1]-this.ground(n[0],n[2]);v.push(this._vert(n,g,r,c,s,[0,i],[u,0]))}let y=this._n(g);this._tri(v[0],v[1],v[2],y),this._tri(v[0],v[2],v[3],y)}}beam(e,t,n,r,i={},a=[0,1,0]){let o=tp(Yf(t,e)),s=$f(a,o);ep(s)<.001&&(s=$f([1,0,0],o)),s=tp(s);let c=$f(o,s);this.box(Zf(Xf(e,t),.5),s,c,o,n/2,r/2,ep(Yf(t,e))/2,i)}build(){let e=new Wt;return e.setAttribute(`position`,new jt(this.pos,3)),e.setAttribute(`normal`,new jt(this.nrm,3)),e.setAttribute(`uv`,new jt(this.uv,2)),e.setAttribute(`color`,new jt(this.col,4)),e.setAttribute(`aLayer`,new jt(this.layer,1)),e.setAttribute(`aUV2`,new jt(this.uv2,2)),e.setAttribute(`aPar`,new jt(this.par,2)),e.setIndex(new At(this.idx,1)),e.computeBoundingBox(),e.computeBoundingSphere(),e}},rp={canvas:[.7,.66,.58],trim:[.15,.22,.36],piping:[.85,.84,.8],felt:[.86,.8,.7],orange:[.42,.17,.07],red:[.36,.1,.055],wood:[.95,.88,.8],rope:[.95,.93,.88],hairRope:[.3,.27,.24],dark:[.02,.018,.016]};function ip(e,t,n){let{R:r,wallH:i,crownH:a,crownR:o}=t;e.frame(t.x,t.y,t.z,t.yaw);let s=n(),c=rp.canvas.map((e,t)=>e*(.93+.08*s)*(t===2?.97+.03*s:1)),l=.9,u=1.38,d=.52/r,f=[.3,.8,1.27].map(e=>e*i/1.55),p=Math.round(Uf*r/.27),m=(t,n)=>e.ground(Math.sin(t)*n,Math.cos(t)*n),h=(e,n,a)=>{let o=n-a,s=r+.03;s+=.012*Kf(.05,.25,o)*(1-Kf(i-.25,i-.05,n));for(let e of f)s-=.016*Math.exp(-(((n-e)/.045)**2));s+=.03*Kf(.16,0,o),s+=.006*(Jf(e*6+t.seed%97,n*2.2)-.5);let c=Jf(e*r/.09+11,n*.8);return s-=.0035*Kf(.6,.9,c)*Kf(.1,.3,o),s+=.004*Math.sin(e*r/.11+Jf(e*3,1.7)*6)*Kf(.2,0,o),s};e.surface(170,34,(e,t)=>{let n=Gf(d,Uf-d,e),a=m(n,r)-.04,o=Gf(a,i-.02,t),s=h(n,o,a+.04);return{p:[Math.sin(n)*s,o,Math.cos(n)*s],uv:[n*r/$.canvas,-o/$.canvas],uv2:[n*r,o-a-.04],par:[Ff.WALL,t]}},{layer:Pf.CANVAS,col:c,out:e=>[e[0],0,e[2]]});{let t=Math.min(m(-.12,r),m(.12,r))+u+.12+.08;e.surface(12,3,(e,n)=>{let a=Gf(-d-.01,d+.01,e),o=Gf(t,i-.02,n),s=h(a,o,m(a,r));return{p:[Math.sin(a)*s,o,Math.cos(a)*s],uv:[a*r/$.canvas,-o/$.canvas],uv2:[a*r,o-m(a,r)],par:[Ff.WALL,.9]}},{layer:Pf.CANVAS,col:c,out:e=>[e[0],0,e[2]]})}let g=r+.14,_=i+.04,v=o+.07,y=a+.03,b=(e,t)=>{let n=Gf(g,v,t),r=Gf(_,y,t)-.035*Math.sin(Math.PI*t),i=Math.sin(e*p/2)**2;return r-=.009*i**1.5*Math.sqrt(Math.max(0,t*(1-t)*4))*(1.2-.6*t),r+=.008*(Jf(e*5+3,t*4)-.5),[n,r]},x=e=>{let t=Wf((g-e)/(g-v),0,1);return Gf(_,y,t)-.035*Math.sin(Math.PI*t)};e.surface(p*3,20,(e,t)=>{let n=e*Uf,[r,i]=b(n,t);return{p:[Math.sin(n)*r,i,Math.cos(n)*r],uv:[n*r/$.canvas,r/$.canvas],uv2:[n*g,i-m(n,r)],par:[Ff.ROOF,t]}},{layer:Pf.CANVAS,col:c,out:e=>[e[0]*.4,1,e[2]*.4]});let S=_,C=i-.12;for(let[t,n,i]of[[S,S-.025,rp.piping],[S-.025,C+.025,rp.trim],[C+.025,C,rp.piping]])e.surface(160,1,(e,i)=>{let a=e*Uf,o=Gf(t,n,i),s=(o-S)/(C-S),c=g+.006*Math.sin(a*p/2)**2*s+.004*(Jf(a*9,2)-.5);return{p:[Math.sin(a)*c,o,Math.cos(a)*c],uv:[a*c/$.canvas,-o/$.canvas],uv2:[a*r,o-m(a,c)],par:[Ff.TRIM,s]}},{layer:Pf.CANVAS,col:i,out:e=>[e[0],0,e[2]]});e.surface(120,1,(e,t)=>{let n=e*Uf,i=Gf(g,r-.05,t);return{p:[Math.sin(n)*i,C,Math.cos(n)*i],uv:[n*i/$.canvas,i/$.canvas],uv2:[n*r,C-m(n,i)],par:[Ff.OTHER,0]}},{layer:Pf.CANVAS,col:c.map(e=>e*.6),out:()=>[0,-1,0]});let w=[];for(let e=0;e<=48;e++){let t=e/48*Uf;w.push([Math.sin(t)*(o+.02),a+.06,Math.cos(t)*(o+.02)])}e.tube(w,.055,{sides:8,layer:Pf.PAINT,col:rp.orange,tile:$.paint});for(let t of[.25,.25+Math.PI/2]){let n=[];for(let e=0;e<=16;e++){let r=e/16,i=Gf(-o,o,r);n.push([Math.sin(t)*i,a+.08+.2*Math.sin(Math.PI*r),Math.cos(t)*i])}e.tube(n,.03,{sides:6,layer:Pf.PAINT,col:rp.orange,tile:$.paint})}e.surface(24,2,(e,t)=>{let n=e*Uf,r=t*o;return{p:[Math.sin(n)*r,a-.18,Math.cos(n)*r],uv:[0,0],uv2:[0,3],par:[Ff.OTHER,0]}},{layer:Pf.DARK,col:rp.dark,out:()=>[0,1,0]});let T=o+.58,E=[[-1,-1],[1,-1],[-1,1]],D=0;for(let e=0;e<64;e++){D=n()*Uf;let e=Math.cos(D),t=Math.sin(D);if(E.every(([n,r])=>{let i=Math.atan2(n*e+r*t,-n*t+r*e);return i=Math.abs(i),i>d+.55}))break}let O=Math.cos(D),k=Math.sin(D),A=T*.45,j=(e,t)=>{let n=Math.hypot(e,t);return n<o+.08?a+.13+.12*(1-(n/(o+.08))**2)+.01*Jf(e*4,t*4):Math.max(x(n)+.035,a+.13-(n-o-.08)*.9)+.012*Jf(e*3+5,t*3)},M=(e,t)=>[e*O+t*k,-e*k+t*O];e.surface(26,26,(e,t)=>{let n=Gf(-T,T,e),r=Gf(-T,Math.min(T,A-n),t),[i,a]=M(n,r),o=j(i,a);return{p:[i,o,a],uv:[n/$.felt,r/$.felt],uv2:[n,o-m(0,0)],par:[Ff.FLAP,0]}},{layer:Pf.FELT,col:rp.felt,out:()=>[0,1,0]}),e.surface(14,14,(e,t)=>{let n=Gf(A-T,T,e),r=Gf(Math.max(-T,A-n),T,t),i=Math.max(0,n+r-A),a=n-i,o=r-i,[s,c]=M(a,o),l=j(s,c)+.03+.02*Kf(0,.3,i);return{p:[s,l,c],uv:[n/$.felt,r/$.felt],uv2:[a,l-m(0,0)],par:[Ff.FLAP,0]}},{layer:Pf.FELT,col:rp.felt.map(e=>e*.92),out:()=>[0,1,0]});{let[t,n]=M(o*.42,o*.42),r=[];for(let e=0;e<=6;e++){let i=e/6;r.push([t+.03*i,Gf(a-.5,a+.8,i),n-.02*i])}e.tube(r,.065,{sides:12,layer:Pf.METAL,col:[1,1,1],part:Ff.OTHER,caps:!0})}{let t=r*Math.cos(d)+.04,i=Math.min(m(-.12,r),m(.12,r)),a=i+u+.12,o=[1,0,0],s=[0,1,0],c=[0,0,1],f={layer:Pf.PAINT,col:rp.orange,tile:$.paint};for(let n of[-1,1])e.box([n*.5,(i-.05+a)/2,t],o,s,c,.05,(a-i+.05)/2,.07,f);e.box([0,a+.05,t],o,s,c,.5700000000000001,.06,.075,f),e.box([0,i+.04,t+.01],o,s,c,.48,.06,.08,{layer:Pf.WOOD,col:rp.wood});let p=l/2-.01,h=i+.1,g=a-.01;for(let r of[-1,1]){let i=r*.225,a={layer:Pf.PAINT,col:n()<.5?rp.orange:rp.red,tile:$.paint};e.box([i,(h+g)/2,t-.01],o,s,c,p/2,(g-h)/2,.025,a);let l=t+.02,u={...a,col:a.col.map(e=>e*1.12)};e.box([i,g-.06,l],o,s,c,p/2-.04,.018,.012,u),e.box([i,h+.06,l],o,s,c,p/2-.04,.018,.012,u),e.box([i,(h+g)/2,l],o,s,c,p/2-.04,.018,.012,u);for(let t of[-1,1])e.box([i+t*(p/2-.05),(h+g)/2,l],o,s,c,.018,(g-h)/2-.05,.012,u)}let _=[];for(let e=0;e<=10;e++){let n=Gf(-.9/2-.1,.55,e/10);_.push([n,a+.07+.008*Math.sin(e*1.3),t+.15])}for(let n of[-.9/4,l/4]){let r=[];for(let e=0;e<=12;e++){let i=e/12*Uf;r.push([n,a+.07+Math.cos(i)*.072,t+.15+Math.sin(i)*.072])}e.tube(r,.007,{sides:4,col:rp.hairRope})}e.tube(_,e=>.065+.006*Math.sin(e*9),{sides:10,layer:Pf.FELT,col:rp.felt.map(e=>e*.85),tile:$.felt,part:Ff.FLAP,caps:!0,alongU:!0})}for(let t of f){let n=[];for(let e=0;e<=96;e++){let i=Gf(d-.02,Uf-d+.02,e/96),a=m(i,r),o=Math.max(t,a+.06),s=h(i,o,a)+.009;n.push([Math.sin(i)*s,o,Math.cos(i)*s])}e.tube(n,.011,{sides:6,col:rp.rope})}for(let t=0;t<4;t++)for(let n of[-1,1]){let i=(t+.5)/4*Uf+.3,a=i+n*.55,o=Math.atan2(Math.sin(a),Math.cos(a));Math.abs(o)<d+.12&&(a+=(o>=0?1:-1)*(d+.12-Math.abs(o)));let s=[];for(let e=0;e<=18;e++){let t=1-e/18,n=Gf(a,i,t),[r,o]=b(n,t);s.push([Math.sin(n)*r,o+.016,Math.cos(n)*r])}let c=a,l=g+.02;s.push([Math.sin(c)*l,C-.01,Math.cos(c)*l]);let u=h(c,f[2],m(c,r))+.015;s.push([Math.sin(c)*u,f[2]+.01,Math.cos(c)*u]),e.tube(s,.009,{sides:5,col:rp.rope})}for(let[t,n]of[[-T,-T],[T,-T],[-T,T]]){let[i,a]=M(t,n),o=Math.atan2(i,a),s=Math.hypot(i,a),c=[[i,j(i,a)+.01,a]];for(let e=1;e<=10;e++){let t=Gf(s,g,e/10);c.push([Math.sin(o)*t,x(t)+.018,Math.cos(o)*t])}let l=r+1,u=m(o,l),d=[Math.sin(o)*l,u+.22,Math.cos(o)*l],f=[Math.sin(o)*(g+.02),S-.02,Math.cos(o)*(g+.02)];c.push(f);for(let e=1;e<=6;e++){let t=e/6,n=Xf(f,Zf(Yf(d,f),t));n[1]-=.04*Math.sin(Math.PI*t),c.push(n)}e.tube(c,.008,{sides:5,col:rp.hairRope});let p=[Math.sin(o),0,Math.cos(o)];e.beam([d[0]-p[0]*.05,u-.15,d[2]-p[2]*.05],[d[0]+p[0]*.06,u+.28,d[2]+p[2]*.06],.05,.04,{layer:Pf.WOOD,col:rp.wood})}}function ap(e,t,n){e.frame(t.x,t.y,t.z,t.yaw);let r=.62,i=.86,a=r+Math.max(e.ground(i,0),e.ground(-.86,0))-.02,o={layer:Pf.WOOD,col:rp.wood.map(e=>e*.92)};for(let t of[-1,1]){let s=[];for(let e=0;e<=36;e++){let n=e/36*Uf;s.push([t*i,a+Math.cos(n)*r,Math.sin(n)*r])}e.tube(s,.045,{sides:6,layer:Pf.WOOD,col:o.col,tile:$.wood,alongU:!1});for(let r=0;r<12;r++){let s=(r+n()*.1)/12*Uf;e.tube([[t*i,a,0],[t*.84,a+Math.cos(s)*.59,Math.sin(s)*.59]],.022,{sides:5,layer:Pf.WOOD,col:o.col,tile:$.wood})}e.tube([[t*.72,a,0],[t*.96,a,0]],.09,{sides:10,layer:Pf.WOOD,col:o.col,tile:$.wood,caps:!0})}e.tube([[-.86-.06,a,0],[.9199999999999999,a,0]],.045,{sides:6,layer:Pf.WOOD,col:o.col,tile:$.wood});let s=a+.12,c=e.ground(0,2.7)+.05,l=Math.atan2(s-c,3.6),u=(e,t,n)=>[e,s+t*Math.cos(l)-n*Math.sin(l),t*Math.sin(l)+n*Math.cos(l)];for(let t of[-1,1])e.beam(u(t*.42,0,-1),u(t*.3,0,3.6),.09,.08,o);for(let t=0;t<7;t++){let n=-.95+t*.27;e.beam(u(-.62,.07,n),u(.62,.07,n),.24,.035,o)}for(let t of[-1,1]){e.beam(u(t*.6,.32,-.95),u(t*.6,.32,.85),.05,.05,o);for(let n of[-.9,-.3,.3,.8])e.beam(u(t*.6,.07,n),u(t*.6,.34,n),.04,.04,o)}let d=[];for(let e=0;e<=60;e++){let t=e/60*Uf*3.2,n=.2+.015*Math.sin(t*.5);d.push(u(.25+Math.cos(t)*n,.11+e*.0012,-.5+Math.sin(t)*n))}e.tube(d,.014,{sides:5,col:rp.hairRope});let f=u(-.2,.17,.25);e.box(f,[1,0,0],tp(u(0,1,0).map((e,t)=>e-u(0,0,0)[t])),tp(u(0,0,1).map((e,t)=>e-u(0,0,0)[t])),.36,.08,.45,{layer:Pf.FELT,col:rp.felt.map(e=>e*.8),tile:$.felt,part:Ff.FLAP})}function op(e,t){let n=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2;e.frame(n,0,r,0);let i={layer:Pf.WOOD,col:rp.wood.map(e=>e*.85)},a=[[t.x0-n,t.y0,t.z0-r],[t.x1-n,t.y1,t.z1-r]],o=[];for(let[t,n,r]of a){let a=.04;e.beam([t,n-.4,r],[t+a,n+1.35,r-a*.5],.13,.11,i),o.push([t+a,n+1.22,r-a*.5])}let s=[];for(let e=0;e<=20;e++){let t=e/20,n=Xf(o[0],Zf(Yf(o[1],o[0]),t));n[1]-=.16*Math.sin(Math.PI*t),s.push(n)}e.tube(s,.013,{sides:6,col:rp.hairRope})}function sp(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cp(e,t,n=3){let r=sp(n),i=t.center,a=new np(e,{x:i.x,y:e.heightAt(i.x,i.z),z:i.z});for(let e of t.yurts)ip(a,e,sp(e.seed));return t.cart&&ap(a,t.cart,r),t.line&&op(a,t.line),{geometry:a.build(),origin:a.O,triangles:a.idx.length/3}}var lp=class e{static async create({scene:t,terrain:n,spawn:r,viewYaw:i,sunDir:a,vegetation:o=null,rocks:s=null,colliders:c=null}){let l=performance.now(),u=Af({terrain:n,spawn:r,viewYaw:i,sunDir:a,trees:o?o.records.trees:[],shrubs:o?o.records.shrubs:[],rocks:s?s.instances:[]}),d=new e;if(d.camp=u,d.group=new bt,d.group.name=`YurtCamp`,!u.yurts.length)return console.warn(`YurtCamp: `+u.reason),d;let f=o&&o.grass;if(o&&o.grassMask&&f&&f.maskTex){let e=n.size/o.grassMask.res;d.trampled=jf(o.grassMask,n,u,e),f.maskTex.gpu&&f.maskTex.upload(o.grassMask.data)}let p=await Bf();d.material=Hf(p),d.material.underwaterLighting=`none`,d.material.localLightsCheap=!0,d.material.appliesHillShadow=!0;let{geometry:m,origin:h,triangles:g}=cp(n,u),_=new Kt(m,d.material);if(_.name=`YurtCampMesh`,_.castShadow=!0,_.receiveShadow=!0,d.group.position.set(h.x,h.y,h.z),d.group.add(_),d.group.updateMatrixWorld(!0),hf(d.group),t.add(d.group),c){for(let e of u.yurts)c.addCylinder(e.x,e.z,e.R+.12,e.y-.5,e.y+e.crownH,{tag:`yurt`});if(u.cart&&c.addCylinder(u.cart.x,u.cart.z,1,u.cart.y-.3,u.cart.y+1.3,{tag:`cart`}),u.line)for(let[e,t,n]of[[u.line.x0,u.line.z0,u.line.y0],[u.line.x1,u.line.z1,u.line.y1]])c.addCylinder(e,t,.12,n-.4,n+1.4,{tag:`post`})}return d.stats={yurts:u.yurts.length,triangles:g,ms:performance.now()-l,flatTextures:p.flat},d}};function up(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var dp=.55;function fp(e,t,n,r){let i=Math.cos(r),a=Math.sin(r),o=1/0,s=-1/0;for(let[r,c]of[[-.55,-.1],[dp,-.1],[-.55,.1],[dp,.1],[0,0]]){let l=e.heightAt(t+r*i+c*a,n-r*a+c*i);o=Math.min(o,l),s=Math.max(s,l)}return{y:o,range:s-o}}function pp(e,t,n){if(!e.rock||!e.res)return 0;let r=Math.floor((t-e.origin)/e.texel),i=Math.floor((n-e.origin)/e.texel);return r<0||i<0||r>=e.res||i>=e.res?1:e.rock[i*e.res+r]||0}var mp={count:48,minR:8,maxR:150,spacing:3.2,maxRange:.35,maxSlope:.28,portalMin:20,portalMax:30};function hp({terrain:e,spawn:t,viewYaw:n,trees:r=[],shrubs:i=[],rocks:a=[],yurts:o=[],seed:s=21,count:c=mp.count}){let l=up(s),u=Ef({terrain:e,trees:r,shrubs:i,rocks:a});for(let e of o)u.push({x:e.x,z:e.z,r:(e.R||4)+4,kind:`yurt`});let d={x:t.x,z:t.z},f={x:-Math.sin(n),z:-Math.cos(n)},p=[],m=(e,t)=>Math.atan2(d.x-e,d.z-t),h=null;for(let t=0;t<400&&!h;t++){let n=(t%2?1:-1)*Math.floor((t+1)/2)*.035%.6,r=mp.portalMin+t*.37%1*(mp.portalMax-mp.portalMin),i=Math.cos(n),a=Math.sin(n),o=f.x*i-f.z*a,s=f.x*a+f.z*i,c=d.x+o*r,l=d.z+s*r,p=m(c,l),g=fp(e,c,l,p);g.range>.25||e.slopeAt(c,l)>.22||pp(e,c,l)>.04||Df(u,c,l,3)||(h={x:c,y:g.y,z:l,yaw:p,scale:1,open:1.25,portal:!0})}h&&p.push(h);let g=0;for(;p.length<c+ +!!h&&g++<6e3;){let t=l(),n=p.length<10,r=n?Math.atan2(f.x,f.z)+(l()-.5)*1.6:l()*Math.PI*2,i=mp.minR+(mp.maxR-mp.minR)*t**(n?1.6:1.25),a=d.x+Math.sin(r)*i,o=d.z+Math.cos(r)*i;if(Math.abs(a)>e.size/2-60||Math.abs(o)>e.size/2-60)continue;let s=l()*Math.PI*2,c=fp(e,a,o,s);if(c.range>mp.maxRange||e.slopeAt(a,o)>mp.maxSlope||pp(e,a,o)>.04||Df(u,a,o,1.2)||p.some(e=>Math.hypot(e.x-a,e.z-o)<(e.portal?6:mp.spacing)))continue;if(h){let e=h.x-d.x,t=h.z-d.z,n=e*e+t*t,r=Math.max(0,Math.min(1,((a-d.x)*e+(o-d.z)*t)/n));if(Math.hypot(d.x+e*r-a,d.z+t*r-o)<2.5)continue}let m=l();p.push({x:a,y:c.y,z:o,yaw:s,scale:.94+l()*.12,open:m<.22?.12+l()*.5:0,portal:!1})}return{doors:p,portal:h,reason:h?``:`no level ground for the portal door ahead of the spawn`}}var gp={w:.9,h:2.05,jamb:.085,depth:.14,slabT:.045,sink:.18},_p=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},vp=e=>`
	let Nw = normalize( in.N );
	let P = in.P;
	let fuv = in.uv * vec2f( ${_p(gp.w-.006)}, ${_p(gp.h-.008)} );
	// wood grain under the paint (stiles and rails run vertically / horizontally: grain along v)
	let g1 = perlin3( vec3f( fuv.x * 38.0, fuv.y * 2.2, 3.1 ) );
	let g2 = perlin3( vec3f( fuv.x * 120.0, fuv.y * 6.0, 7.7 ) );
	var albedo = vec3f( 0.8, 0.79, 0.76 );
	var rough = 0.42 + g1 * 0.04;
	var tilt = vec2f( g2 * 0.012, 0.0 );
	var ao = 1.0;
${e?`
	// four raised panels: bevel 0.04 m rising from a 6 mm groove to the flat field
	var pd = 1e3;
	var pg = vec2f( 0.0 );
	for ( var k = 0; k < 4; k++ ) {
		let col = f32( k % 2 );
		let row = f32( k / 2 );
		let x0 = 0.12 + col * 0.35;
		let x1 = x0 + 0.304;
		let y0 = select( 0.2, 1.13, row > 0.5 );
		let y1 = select( 0.98, 1.92, row > 0.5 );
		let dx0 = fuv.x - x0; let dx1 = x1 - fuv.x; let dy0 = fuv.y - y0; let dy1 = y1 - fuv.y;
		let d = min( min( dx0, dx1 ), min( dy0, dy1 ) );
		if ( d > -0.004 && d < pd ) {
			pd = d;
			if ( d == dx0 ) { pg = vec2f( 1.0, 0.0 ); } else if ( d == dx1 ) { pg = vec2f( -1.0, 0.0 ); } else if ( d == dy0 ) { pg = vec2f( 0.0, 1.0 ); } else { pg = vec2f( 0.0, -1.0 ); }
		}
	}
	if ( pd < 0.05 ) {
		let aa = fwidth( pd ) + 1e-4;
		// groove (0..0.008), bevel (0.008..0.044) rising inward, then the flat field
		let groove = 1.0 - smoothstep( 0.006, 0.006 + aa * 1.5, pd );
		let bevel = smoothstep( 0.006, 0.01, pd ) * ( 1.0 - smoothstep( 0.04, 0.046, pd ) );
		tilt += -pg * bevel * 0.32 + pg * groove * 0.5;
		ao *= 1.0 - groove * 0.55 - bevel * 0.06;
		rough += groove * 0.15;
	}
	// a darker bottom rail: scuffs and dirt
	let low = 1.0 - smoothstep( 0.0, 0.32, fuv.y );
	let dirt = smoothstep( 0.1, 0.7, perlin3( P * 3.0 ) * 0.5 + 0.5 ) * low;
	albedo *= 1.0 - dirt * 0.22 - low * 0.05;
	rough += low * 0.15;
	// faint hand marks around the knob
	let kn = length( ( fuv - vec2f( ${_p(gp.w-.075)}, 0.98 ) ) * vec2f( 1.0, 0.6 ) );
	albedo *= 1.0 - ( 1.0 - smoothstep( 0.04, 0.16, kn ) ) * 0.06 * ( perlin3( P * 11.0 ) * 0.5 + 0.6 );
`:`
	let low = 1.0 - smoothstep( 0.0, 0.25, fuv.y );
	albedo *= 1.0 - low * 0.1 * ( perlin3( P * 4.0 ) * 0.5 + 0.7 );
`}
	// weathering everywhere: faint chalky mottling of old paint
	albedo *= 0.97 + perlin3( P * 1.7 ) * 0.03;
	s.albedo = albedo;
	s.roughness = clamp( rough, 0.3, 0.8 );
	s.ao = ao;
	// tangent frame of a vertical face: T = up x N
	let up = vec3f( 0.0, 1.0, 0.0 );
	var T = cross( up, Nw );
	if ( length( T ) > 0.2 ) {
		T = normalize( T );
		s.normal = normalize( Nw + T * tilt.x + up * tilt.y );
	}
`;function yp(){let e=qo({name:`doorSlabPaint`,color:new Se(.8,.79,.76),roughness:.42});e.surface=vp(!0);let t=qo({name:`doorFramePaint`,color:new Se(.8,.79,.76),roughness:.45});t.surface=vp(!1);let n=qo({name:`doorBrass`,color:new Se(.78,.58,.3),metalness:1,roughness:.28});n.surface=`
	let tarnish = smoothstep( 0.2, 0.8, perlin3( in.P * 40.0 ) * 0.5 + 0.5 );
	s.albedo = mix( vec3f( 0.78, 0.58, 0.3 ), vec3f( 0.42, 0.32, 0.18 ), tarnish * 0.6 );
	s.roughness = mix( 0.22, 0.45, tarnish );
`;let r=qo({name:`doorHinge`,color:new Se(.32,.31,.3),metalness:1,roughness:.5}),i=Ko({name:`doorLight`,lit:!1,uniforms:{lightLevel:[`f32`,14]}});return i.surface=`
	let c = abs( in.uv - 0.5 ) * 2.0;
	let edge = max( c.x, c.y );
	s.albedo = vec3f( 0.0 );
	s.emissive = vec3f( 1.0, 0.985, 0.96 ) * mat.lightLevel * ( 0.75 + 0.25 * ( 1.0 - edge * edge ) );
`,i.receiveShadows=!1,{slab:e,frame:t,brass:n,hinge:r,light:i}}var bp=new P,xp=new D,Sp=new A(1,1,1),Cp=new A,wp=new A(0,1,0);function Tp(e,t,n,r,i,a){let o=new sn(t-e,r-n,a-i);return o.translate((e+t)/2,(n+r)/2,(i+a)/2),o}function Ep(e=0,t=!1){let n=gp,r=n.w,i=n.h,a=n.jamb,o=n.depth/2,s=[],c=[],l=[],u=[],d=[];s.push(Tp(-r/2-a,-r/2,-n.sink,i+a,-o,o)),s.push(Tp(r/2,r/2+a,-n.sink,i+a,-o,o)),s.push(Tp(-r/2-a,r/2+a,i,i+a,-o,o)),s.push(Tp(-r/2,-r/2+.014,0,i,-o,-n.slabT/2-.001)),s.push(Tp(r/2-.014,r/2,0,i,-o,-n.slabT/2-.001)),s.push(Tp(-r/2,r/2,i-.014,i,-o,-n.slabT/2-.001));let f=r-.006,p=i-.008,m=n.slabT,h=new sn(f,p,m);h.translate(0,.004+p/2,0);let g={slab:[h],brass:[],hinge:[]},_=r/2-.075,v=.98;for(let e of[-1,1]){let t=new ln(.028,.028,.008,20);t.rotateX(Math.PI/2),t.translate(_,v,e*(m/2+.004));let n=new ln(.009,.011,.05,12);n.rotateX(Math.PI/2),n.translate(_,v,e*(m/2+.03));let r=new cn(.027,18,12);r.scale(1,1,.8),r.translate(_,v,e*(m/2+.062)),g.brass.push(t,n,r)}for(let e of[.24,1,1.8])g.hinge.push(Tp(-r/2-.004,-r/2+.03,e-.05,e+.05,-m/2-.002,-m/2+.003));if(e!==0){let t=new P().makeTranslation(-r/2,0,-m/2).multiply(new P().makeRotationY(e)).multiply(new P().makeTranslation(r/2,0,m/2));for(let e in g)for(let n of g[e])n.applyMatrix4(t)}if(c.push(...g.slab),l.push(...g.brass),u.push(...g.hinge),t){let e=new on(r,i);e.translate(0,i/2,.01),d.push(e)}return{frame:s,slab:c,brass:l,hinge:u,light:d}}function Dp({doors:e,origin:t=new A,materials:n=null}){let r=n||yp(),i={frame:[],slab:[],brass:[],hinge:[],light:[]};for(let n of e){let e=Ep(n.open||0,!!n.portal);xp.setFromAxisAngle(wp,n.yaw),Cp.set(n.x-t.x,n.y-t.y,n.z-t.z);let r=n.scale||1;Sp.set(r,r,r),bp.compose(Cp,xp,Sp);for(let t in e)for(let n of e[t])n.applyMatrix4(bp),i[t].push(n)}let a=new bt;a.name=`Doors`,a.position.copy(t);for(let e in i){if(!i[e].length)continue;let t=new Kt(vn(i[e]),r[e]);t.name=`doors-`+e,t.castShadow=e!==`light`,t.receiveShadow=e!==`light`,t.staticVelocity=!0,t.frustumCulled=!1,a.add(t)}return a.updateMatrixWorld(!0),{group:a,materials:r,portals:e.filter(e=>e.portal)}}function Op(e,t){let n=gp;for(let r of t){let t=r.scale||1,i=Math.cos(r.yaw),a=Math.sin(r.yaw),o=(e,n,o)=>new A(r.x+(e*i+o*a)*t,r.y+n*t,r.z+(-e*a+o*i)*t),s=n.h+n.jamb;if(!r.open){e.addBox(o(0,s/2,0),new A((n.w/2+n.jamb)*t,s/2*t,n.depth/2*t),r.yaw,{tag:`door`});continue}for(let i of[-1,1])e.addBox(o(i*(n.w/2+n.jamb/2),s/2,0),new A(n.jamb/2*t,s/2*t,n.depth/2*t),r.yaw,{tag:`doorJamb`});let c=r.open,l=-n.w/2+Math.cos(c)*n.w/2,u=-n.slabT/2-Math.sin(c)*n.w/2;e.addBox(o(l,n.h/2,u),new A(n.w/2*t,n.h/2*t,n.slabT/2*t),r.yaw+c,{tag:`doorSlab`})}}function kp(e,t,n={x:0,y:0,z:0}){let r=e.scale||1,i=t.x-e.x,a=t.z-e.z,o=Math.cos(e.yaw),s=Math.sin(e.yaw);return n.x=(i*o-a*s)/r,n.z=(i*s+a*o)/r,n.y=(t.y-e.y)/r,n}var Ap=class{constructor(e){this.portals=e,this.prev=e.map(()=>null),this._o={x:0,y:0,z:0}}update(e){for(let t=0;t<this.portals.length;t++){let n=this.portals[t],r=kp(n,e,this._o),i=Math.abs(r.x)<gp.w/2-.05&&r.y>-.6&&r.y<1,a=this.prev[t];if(this.prev[t]=r.z,a!==null&&i&&a>0&&r.z<=0)return n}return null}},jp=new A(0,1,0),Mp=class{constructor(){this.settings={timeOfDay:17.35,sunAzimuth:0,timeSpeed:0,exposure:.6,renderScale:1,windSpeed:6.5},this.qs=new URLSearchParams(location.search)}async init(e=()=>{}){let t=this.qs,n=async(t,n,r)=>{e(t,n,r),typeof requestAnimationFrame==`function`&&await new Promise(e=>requestAnimationFrame(()=>setTimeout(e,0)))};await n(.02,`启动 WebGPU…`);let r=this.engine=new vi(document.getElementById(`app`));await r.init();let i=r,{scene:a,camera:o}=r;o.near=.1,o.updateProjectionMatrix(),this.renderer=i,this.scene=a,this.camera=o,this.input=new Nr(r.domElement),this.fly=new bd(o,r.domElement,this.input),B.windSpeed.value=this.settings.windSpeed,B.windDir.value.set(.62,-.78).normalize(),await n(.04,`计算大气…`),this.atmosphere=new Mi(i),this.sky=new Ri(this.atmosphere),t.has(`noClouds`)||(this.clouds=t.has(`oldClouds`)?new Ea(i,this.atmosphere):new Ha(i,this.atmosphere),this.clouds.ready&&await this.clouds.ready,this.sky.clouds=this.clouds),this.csm=this.shadows=new jr({size:2048,splits:[10,60,400],lightMargin:200,normalBias:[.015,.06,.3],bias:2e-5}),this.shadows.layerMask=1<<qr.OPAQUE|1<<qr.TRANSPARENT,this.environment=new Ja(i,a,this.sky),await n(.07,`生成草原地形…`),this.terrainData=new co,this.colliders=new Qo,t.has(`noVeg`)||(await n(.12,`种草…`),this.vegetation=new Zl({scene:a,terrain:this.terrainData,grassland:!0}),hf(this.vegetation.group)),await n(.2,`烘焙地形…`),this.terrainGPU=new Ro(this.terrainData,null),this.terrain=new Yo({scene:a,terrainData:this.terrainData,terrainGPU:this.terrainGPU,renderer:i}),this.rocks=new ps({scene:a,terrain:this.terrain,village:null,colliders:this.colliders}),this.terrain.mesh.material.appliesHillShadow=!0,this.rocks.material.appliesHillShadow=!0;for(let e of[this.terrain.mesh,this.rocks.group,this.vegetation&&this.vegetation.group])e&&e.traverse(e=>{if(e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.underwaterLighting=`none`,t.localLightsCheap=!0});if(t.has(`noYurts`)||(await n(.22,`搭蒙古包…`),this.yurts=await lp.create({scene:a,terrain:this.terrainData,spawn:this.terrainData.spawn,viewYaw:this.startYaw(),sunDir:zi(this.settings.timeOfDay),vegetation:this.vegetation,rocks:this.rocks,colliders:this.colliders})),!t.has(`noDoors`)){await n(.23,`立门…`);let e=this.doorField=hp({terrain:this.terrainData,spawn:this.terrainData.spawn,viewYaw:this.startYaw(),trees:this.vegetation?this.vegetation.records.trees:[],shrubs:this.vegetation?this.vegetation.records.shrubs:[],rocks:this.rocks?this.rocks.instances:[],yurts:this.yurts&&this.yurts.camp?this.yurts.camp.yurts:[]});e.reason&&console.warn(`门阵: `+e.reason);let r=this.terrainData.spawn;this.doors=Dp({doors:e.doors,origin:new A(r.x,r.h,r.z)});for(let e of Object.values(this.doors.materials))e.underwaterLighting=`none`;Op(this.colliders,e.doors),a.add(this.doors.group),this.portalWatch=new Ap(this.doors.portals),this.portalUrl=t.get(`portal`)||`bowling/?door=1`}if(yf({clouds:this.clouds,terrain:this.terrainGPU}),iu({terrain:this.terrainGPU,clouds:this.clouds}),this.sceneRenderer=new Xr(r.meshRenderer,a,o),this.sky.background&&(this.sceneRenderer.background=this.sky.background),this.localLights=new yu,this.doors)for(let e of this.doors.portals){let t=Math.sin(e.yaw),n=Math.cos(e.yaw);this.localLights.add({always:!0,kind:`portal`,position:new A(e.x+t*.05,e.y+gp.h*.55,e.z+n*.05),dir:new A(t,-.25,n).normalize(),color:new Se(1,.98,.95),intensity:9,range:12,cosInner:Math.cos(.6),cosOuter:Math.cos(1.45)})}hf(this.terrain.mesh),hf(this.rocks.group),this.doors&&hf(this.doors.group),this.query=new vf,this.cameraWaterHeight=gf,B.cameraUnderwater.value=0,B.cameraWaterHeight.value=gf,this.airMotes=new Cu({terrain:this.terrainGPU,clouds:this.clouds,csm:this.csm,reversedDepth:!0}),a.add(this.airMotes.mesh),this.player=new Wd({camera:o,input:this.input,terrain:this.terrainData,colliders:this.colliders,query:this.query,boat:null,reef:null}),this.player.yaw=this.startYaw(),this.player.pitch=-.04,this.freeCam=t.has(`fly`);let s=W.spawn.position;this.fly.setPose(new A(s.x,s.y+6,s.z),this.player.yaw,-.1),await n(.3,`准备着色器…`),this.underwater=new Au({depthTexture:this.sceneRenderer.sceneRT.depthTexture,maskTexture:this.sceneRenderer.waterMaskTexture,query:this.query,caustics:null,fft:null}),this.haze=t.has(`noHaze`)?null:new yd({depthTexture:this.sceneRenderer.sceneRT.depthTexture,underwater:this.underwater,atmosphere:this.atmosphere,sky:this.sky,clouds:this.clouds,terrain:this.terrainGPU,csm:this.csm}),this.haze&&(this.haze.density.value=2.2),this.post=new od(i,{sceneRenderer:this.sceneRenderer,camera:o,underwater:this.underwater,clouds:this.clouds,sunDir:this.atmosphere.sunDir,haze:this.haze}),B.exposure.value=this.settings.exposure,this.dynScale=new bf(this,{enabled:!t.has(`scale`)}),t.has(`scale`)&&(this.settings.renderScale=Number(t.get(`scale`))||1),this.setRenderScale(this.settings.renderScale),this.audio=t.has(`noAudio`)?null:new lf({grassland:!0}),this.player.audio=this.audio,r.domElement.addEventListener(`click`,()=>{this.input.requestLock(),this.audio&&this.audio.resume()}),this.updateSun(),window.__app=this,this.gpu=F,await n(.36,`编译着色器…`,.95),await this.precompile(),await n(.96,`预热…`);for(let e=0;e<2;e++)this.frame(1/60),await F.queue.onSubmittedWorkDone()}startYaw(){let e=zi(this.settings.timeOfDay);return Math.atan2(-e.x,-e.z)+T.degToRad(55)}async precompile(){let e=this.engine.meshRenderer;this.post._built||(this.post._build(),this.post._outW=0),await F.pipelinesReady(),e.precompiling=!0;try{this.frame(1/60)}catch(e){console.warn(`precompile failed`,e)}e.precompiling=!1,await F.pipelinesReady(),await F.queue.onSubmittedWorkDone()}updateSun(){let e=this.settings,t=zi(e.timeOfDay).applyAxisAngle(jp,T.degToRad(e.sunAzimuth||0));this.atmosphere.sunDir.value.copy(t);let n=T.smoothstep(-t.y,.02,.18);B.night.value=n,this.sky.starIntensity.value=n;let r=new A(-t.x,Math.abs(t.y)*.8+.25,-t.z).normalize();this.sky.moonDir.value.copy(r);let i=t.y>-.07?t:r;B.sunDir.value.copy(i)}applyAtmosphereReadback(){let e=this.atmosphere;if(!e.sunTransmittance)return;let t=e.sunDir.value,n=t.y>-.07,r=e.sunTransmittance,i=T.smoothstep(t.y,-.03,.02);n?B.sunColor.value.setRGB(r[0],r[1],r[2]).multiplyScalar(11*i):B.sunColor.value.setRGB(.6,.7,1).multiplyScalar(.12*B.night.value);let a=e.skyIrradiance,o=.012*B.night.value;B.skyIrradiance.value.setRGB(a[0]+o*.6,a[1]+o*.7,a[2]+o),B.horizonColor.value.setRGB(e.horizon[0],e.horizon[1],e.horizon[2])}toggleTime(){let e=this.settings;e.timeSpeed===0?e.timeSpeed=this._timeSpeed||.05:(this._timeSpeed=e.timeSpeed,e.timeSpeed=0)}setFreeCam(e){if(e!==this.freeCam){if(this.freeCam=e,e){let e=new ue().setFromQuaternion(this.camera.quaternion,`YXZ`);this.fly.setPose(this.camera.position.clone(),e.y,e.x),this.fly.velocity.set(0,0,0)}else{let e=this.player,t=this.camera.position,n=new ue().setFromQuaternion(this.camera.quaternion,`YXZ`);e.yaw=n.y,e.pitch=T.clamp(n.x,-1.5,1.5),e.velocity.set(0,0,0);let r=Math.hypot(t.x,t.z),i=r>2850?2850/r:1,a=t.x*i,o=t.z*i,s=this.terrainData.heightAt(a,o);e.mode=`walk`,e.position.set(a,Math.max(t.y-1.62,s),o),e.grounded=!1}}}enterPortal(){if(this._leaving=!0,typeof document>`u`)return;let e=document.getElementById(`whiteout`);e&&e.classList.add(`on`),this.audio&&this.audio.setMuted&&setTimeout(()=>this.audio.setMuted(!0),500);let t=this.portalUrl,n=performance.now(),r=()=>{location.href=t},i=()=>{fetch(t.split(`?`)[0],{cache:`no-store`}).then(e=>{e.ok?r():a()}).catch(a)},a=()=>{performance.now()-n>2e4?r():setTimeout(i,500)};setTimeout(i,900)}start(){this.engine.start(e=>this.frame(e))}updateFPS(e){let t=this._fps||={el:document.getElementById(`fps`),acc:0,n:0,worst:0};if(t.acc+=e,t.n++,t.worst=Math.max(t.worst,e),t.acc>=.5){let e=t.n/t.acc;this.fps=e,t.el&&t.el.style.display!==`none`&&(t.el.textContent=`${e.toFixed(0)} fps · ${(1e3*t.acc/t.n).toFixed(1)} ms · 渲染 ${Math.round(this.settings.renderScale*100)}%`),t.acc=0,t.n=0,t.worst=0}}frame(e){let t=performance.now();this._frame(e);let n=performance.now()-t;this.cpuMs=this.cpuMs===void 0?n:this.cpuMs*.95+n*.05}_frame(e){F.beginFrame(),br.fields.frameIndex.value=F.frame;let t=this.settings;if(this.updateFPS(e),this.dynScale&&this.dynScale.update(e),B.dt.value=e,B.time.value+=e,t.timeSpeed!==0&&(t.timeOfDay=(t.timeOfDay+e*t.timeSpeed+24)%24),this.input.hit(`KeyF`)&&this.setFreeCam(!this.freeCam),this.input.hit(`KeyT`)&&this.toggleTime(),this.input.hit(`KeyL`)&&this.localLights.toggleFlashlight(),this.input.hit(`KeyM`)&&this.audio&&this.audio.setMuted(!this.audio.muted),this.input.hit(`KeyP`)){let e=document.getElementById(`fps`);e&&(e.style.display=e.style.display===`none`?``:`none`)}if(this.freeCam?this.fly.update(e):this.player.update(e),this.portalWatch&&!this.freeCam&&!this._leaving){let e=this.portalWatch.update(this.player.position);e&&this.enterPortal(e)}this.updateSun(),this.atmosphere.update(e,this.camera.position.y),this.applyAtmosphereReadback(),B.cameraUnderwater.value=0,B.cameraWaterHeight.value=gf,this.airMotes.update(e,this.camera,gf),this.clouds&&this.clouds.update(e,this.camera),this.environment.update(e),this.terrain.update(this.camera),this.rocks.update(this.camera),this.vegetation&&this.vegetation.update(e,this.camera),this.localLights.update(this.camera,e),B.exposure.value=t.exposure,mf(this.camera),this.post.lens.update(e,!1),this.post.flare&&(this.post.flare.setDepthHeight(this.sceneRenderer.sceneRT.height),this.post.flare.update(this.camera,e,{aboveWater:!0})),this.post.beginFrame(),this.underwater.updateCamera(this.camera),this.shadows.render(this.scene,this.engine.meshRenderer,this.shadows.update(this.camera,B.sunDir.value)),this.sceneRenderer.render(),this.post.flare&&this.post.flare.kernel.dispatch(1),this.post.render(),this.post.endFrame(),F.submit(),this.updateAudio(e),this.input.endFrame()}setRenderScale(e){let t=T.clamp(Math.round(e*20)/20,.5,1);this.settings.renderScale=t,this.post.setScale(t),this.clouds&&(this.clouds.resolutionScale=t)}updateAudio(e){if(!this.audio||!this.audio.enabled)return;let t=this.camera,n=this._af||={fwd:new A,up:new A};t.getWorldDirection(n.fwd),n.up.set(0,1,0).applyQuaternion(t.quaternion),this.audio.update(e,{listener:{position:t.position,forward:n.fwd,up:n.up},underwater:0,depthBelowSurface:0,surfIntensity:0,distanceToShore:5e3,coastDistance:-5e3,windSpeed:B.windSpeed.value,windDir:B.windDir.value,daylight:1-B.night.value,timeOfDay:this.settings.timeOfDay,nearPier:!1,boat:{active:!1,rpm:0,throttle:0,speed:0,position:t.position,listenerInside:!1}})}},Np=e=>`dreamShot:`+e,Pp=()=>globalThis.HARK_ASSET_BASE||`./`;function Fp(e){if(typeof document>`u`)return;let t=document.getElementById(`loader`);if(!t)return;let n=null;try{n=localStorage.getItem(Np(e))}catch{}let r=new Image;r.className=`loadShot`,r.alt=``,r.onload=()=>{t.insertBefore(r,t.firstChild),document.body.classList.add(`hasShot`),requestAnimationFrame(()=>r.classList.add(`on`))},r.onerror=()=>{n&&!r._fallback&&(r._fallback=!0,r.src=Pp()+`loading/`+e+`.jpg`)},r.src=n||Pp()+`loading/`+e+`.jpg`,n||(r._fallback=!0)}function Ip(e,t,n=40){if(typeof document>`u`||new URLSearchParams(location.search).has(`manual`))return;let r=e.frame.bind(e),i=0;e.frame=e=>{if(r(e),++i===n)try{let e=document.querySelector(`#app canvas`)||document.querySelector(`canvas`);if(!e)return;let n=Math.min(1600,e.width),r=Math.round(n*e.height/e.width),i=document.createElement(`canvas`);i.width=n,i.height=r,i.getContext(`2d`).drawImage(e,0,0,n,r);let a=i.getContext(`2d`).getImageData(0,0,n,r).data,o=0;for(let e=0;e<a.length;e+=3988)o+=a[e]+a[e+1]+a[e+2];if(o===0)return;localStorage.setItem(Np(t),i.toDataURL(`image/jpeg`,.82))}catch(e){console.warn(`load shot`,e)}}}var Lp=e=>document.getElementById(e),Rp=Lp(`loader`),zp=Lp(`bar`),Bp=Lp(`status`),Vp=Lp(`overlay`),Hp=0,Up=0,Wp=(e,t)=>{Up=Math.max(Up,e),t&&(Bp.textContent=t)};if((function e(){Hp+=(Up-Hp)*.12,zp.style.width=(Hp*100).toFixed(1)+`%`,Rp.style.display!==`none`&&requestAnimationFrame(e)})(),!navigator.gpu)Bp.textContent=`这个浏览器没有 WebGPU。请用最新版 Chrome 或 Edge 打开（Windows / macOS）。`,Bp.classList.add(`err`);else{Fp(`grass`);let e=new Mp;e.init(Wp).then(()=>{Wp(1,`完成`),Rp.classList.add(`out`),setTimeout(()=>Rp.style.display=`none`,700),new URLSearchParams(location.search).has(`manual`)||(Ip(e,`grass`),e.start()),window.__ready=!0,Vp.classList.add(`on`),Vp.addEventListener(`click`,()=>{e.input.requestLock(),e.audio&&e.audio.resume(),Vp.classList.remove(`on`)}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement?Vp.classList.remove(`on`):Vp.classList.add(`on`)})}).catch(e=>{console.error(e),Bp.textContent=`出错了：`+(e&&e.message?e.message:e),Bp.classList.add(`err`)})}