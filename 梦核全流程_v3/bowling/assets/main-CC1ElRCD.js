import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,I as c,J as l,K as u,L as d,M as f,O as p,P as m,Q as h,R as g,S as _,T as v,V as y,W as b,X as x,Y as S,Z as ee,_ as C,a as w,at as te,b as ne,c as re,ct as ie,d as ae,dt as oe,et as se,f as T,ft as E,h as ce,i as le,it as ue,j as D,k as O,l as de,lt as k,m as fe,n as pe,nt as me,o as he,ot as ge,p as _e,q as ve,rt as A,s as ye,st as be,t as xe,tt as Se,u as Ce,ut as j,v as we,w as Te,x as Ee,y as De,z as M}from"./LoadShot-6GiQl15a.js";import{t as Oe}from"./Mipmaps-BOD7d-pb.js";import{n as ke,t as Ae}from"./Neon-CB7FfhY_.js";var je=.00537625,Me=class{constructor(e,t=e.label){let n=e.width;if(e.height!==n||n&n-1||n<32||n>512)throw Error(`ComputeMips: square power-of-two 32..512 only`);this.res=n,this.layers=e.dimension===`3d`?1:e.depth;let r=e.mipLevelCount,i=Math.min(5,r-1);if((M.device&&M.device.limits?M.device.limits.maxStorageTexturesPerShaderStage:8)<i&&(e.usageList||[]).includes(`render`)){this.tex=e,this.fallback=!0;return}let a=t=>({storageTexture:e,access:`write`,view:{dimension:`2d-array`,baseMipLevel:t,mipLevelCount:1}}),o=t=>({texture:e,view:{dimension:`2d-array`,baseMipLevel:t,mipLevelCount:1}}),s=(e,t,n,r)=>`
	if ( lx < ${n}u && ly < ${n}u ) {
		let i = ly * ${4*n}u + lx * 2u;
		let v = ( ${e}[ i ] + ${e}[ i + 1u ] + ${e}[ i + ${2*n}u ] + ${e}[ i + ${2*n+1}u ] ) * 0.25;
		textureStore( out${r}, vec2u( gx * ${n}u + lx, gy * ${n}u + ly ), layer, v );
		${t?`${t}[ ly * ${n}u + lx ] = v;`:``}
	}
	workgroupBarrier();`,c={src0:o(0)},l=``;for(let e=1;e<=i;e++)c[`out`+e]=a(e);for(let e=2,t=8;e<=i;e++,t>>=1)l+=s(`s`+(e-1),e<i?`s`+e:null,t,e);this.kernelA=new Ee({label:t+` mips A`,bindings:c,workgroupSize:[16,16,1],code:`
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
}`}),this.kernelB=null;let u=n>>5;if(r>6&&u>1){let e={src5:o(5)},n=``,i=``,c=`s5`;for(let t=6,o=u>>1;t<r&&o>=1;t++,o>>=1){e[`out`+t]=a(t);let l=o>1&&t<r-1?`s`+t:null;l&&(i+=`var<workgroup> ${l}: array<vec4f, ${o*o}>;\n`),n+=s(c,l,o,t),c=l}this.kernelB=new Ee({label:t+` mips B`,bindings:e,workgroupSize:[u,u,1],code:`
var<workgroup> s5: array<vec4f, ${u*u}>;
${i}
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( local_invocation_id ) lid: vec3u, @builtin( workgroup_id ) wid: vec3u ) {
	let lx = lid.x; let ly = lid.y; let layer = wid.z;
	let gx = 0u; let gy = 0u;
	s5[ ly * ${u}u + lx ] = textureLoad( src5, vec2u( lx, ly ), layer, 0 );
	workgroupBarrier();
${n}
}`})}}dispatch(e=null){if(this.fallback){e||Oe(this.tex);return}let t=e?{pass:e}:void 0;this.kernelA.dispatch([this.res/32,this.res/32,this.layers],t),this.kernelB&&this.kernelB.dispatch([1,1,this.layers],t)}},Ne=6,Pe=32,Fe=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Ie=`
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
`,Le=class{constructor(e,t,n,r=128){this.renderer=e,this.scene=t,this.sky=n,this.size=r,t&&(t.environmentIntensity=1),this.source=new g({label:`envSource`,width:r,height:r,dimension:`cube`,format:`rgba16float`,mips:!0,usage:[`sample`,`storage`,`render`]});let i=e=>new g({label:e,width:r,height:r,dimension:`cube`,format:`rgba16float`,mips:Ne,usage:[`sample`,`storage`]});this.targets=[i(`envSpecularA`),i(`envSpecularB`)],this.front=0,this.sh=[new d({label:`envSH_A`,count:9,type:`vec4f`,data:Re()}),new d({label:`envSH_B`,count:9,type:`vec4f`})],this.lastSun=new k(0,-2,0),this.timer=0,this.interval=3,this.step=-1,this.primed=!1,this._build(),this.steps=this._buildSteps()}_build(){let e=this.sky,t=this.size;this.faceParams=[],this.faceKernels=[];for(let n=0;n<6;n++)this.faceKernels.push(new Ee({label:`Env Face `+n,modules:[m,e.module],bindings:{outCube:{storageTexture:this.source,viewDimension:`2d-array`}},workgroupSize:[8,8,1],code:`${Ie}
@compute @workgroup_size( WG_X, WG_Y, WG_Z ) fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	if ( gid.x >= ${t}u || gid.y >= ${t}u ) { return; }
	let dir = envCubeDir( ${n}u, gid.x, gid.y, ${t}u );
	// no sun or moon disk: the key light is lit directly
	textureStore( outCube, gid.xy, ${n}, vec4f( skyRadianceWithClouds( dir, false ), 1.0 ) );
}`}));this.filterKernels=[[],[]];for(let e=0;e<2;e++)for(let n=0;n<Ne;n++){let r=n/5,i=t>>n;this.filterKernels[e].push(new Ee({label:`Env GGX `+n,modules:[m],bindings:{srcCube:{texture:this.source,viewDimension:`cube`},outCube:{storageTexture:this.targets[e],view:{dimension:`2d-array`,baseMipLevel:n,mipLevelCount:1}}},workgroupSize:[8,8,1],code:`${Ie}
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
	let alpha = ${Fe(r*r)};
	let a2 = alpha * alpha;
	let tb = basis( N );
	const COUNT = 96u;
	let saTexel = ${Fe(4*Math.PI/(6*t*t))};
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
			let lod = clamp( 0.5 * log2( saSample / saTexel ) + 1.0, 0.0, ${Fe(Math.log2(t))} );
			sum += textureSampleLevel( srcCube, smpLinearClamp, L, lod ).rgb * NdotL;
			wsum += NdotL;
		}
	}
	textureStore( outCube, gid.xy, gid.z, vec4f( sum / max( wsum, 1e-4 ), 1.0 ) );
}`}`}))}let n=Math.max(0,Math.log2(t/Pe));this.shKernels=[0,1].map(e=>new Ee({label:`Env SH`,modules:[m],bindings:{srcCube:{texture:this.source,viewDimension:`2d-array`},shOut:{storage:this.sh[e],access:`read_write`}},workgroupSize:[128,1,1],code:`${Ie}
var<workgroup> acc: array<array<vec3f, 9>, 128>;
@compute @workgroup_size( 128 ) fn main( @builtin( local_invocation_index ) li: u32 ) {
	var c: array<vec3f, 9>;
	for ( var k = 0; k < 9; k++ ) { c[ k ] = vec3f( 0.0 ); }
	let total = 6144u;
	for ( var idx = li; idx < total; idx += 128u ) {
		let face = idx / 1024u;
		let r = idx % 1024u;
		let x = r % ${Pe}u; let y = r / ${Pe}u;
		let d = envCubeDir( face, x, y, ${Pe}u );
		// solid angle of the texel
		let u = ( f32( x ) + 0.5 ) / ${Fe(Pe)} * 2.0 - 1.0;
		let v = ( f32( y ) + 0.5 ) / ${Fe(Pe)} * 2.0 - 1.0;
		let tmp = 1.0 + u * u + v * v;
		let w = 4.0 / ( sqrt( tmp ) * tmp ) * ${Fe(1/1024)};
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
}`})),this.envUniforms=new c(`EnvParams`,{levels:[`f32`,5]},{label:`env`}),f.set(`envSpecular`,new o({name:`hook-envSpecular`,deps:[m],uniforms:this.envUniforms,uniformName:`envParams`,bindings:{envSpecularCube:{texture:()=>this.targets[this.front],viewDimension:`cube`}},code:`
fn hookEnvSpecular( R: vec3f, roughness: f32 ) -> vec3f {
	return textureSampleLevel( envSpecularCube, smpLinearClamp, R, roughness * envParams.levels ).rgb * frame.envIntensity;
}
`})),f.set(`envDiffuse`,new o({name:`hook-envDiffuse`,deps:[m],bindings:{envSH:{storage:()=>this.sh[this.front],access:`read`,type:`vec4f`}},code:`
fn hookEnvDiffuse( N: vec3f ) -> vec3f {
	let d = N;
	var e = envSH[ 0 ].rgb * 0.282095
		+ envSH[ 1 ].rgb * 0.488603 * d.y + envSH[ 2 ].rgb * 0.488603 * d.z + envSH[ 3 ].rgb * 0.488603 * d.x
		+ envSH[ 4 ].rgb * 1.092548 * d.x * d.y + envSH[ 5 ].rgb * 1.092548 * d.y * d.z
		+ envSH[ 6 ].rgb * 0.315392 * ( 3.0 * d.z * d.z - 1.0 ) + envSH[ 7 ].rgb * 1.092548 * d.x * d.z
		+ envSH[ 8 ].rgb * 0.546274 * ( d.x * d.x - d.y * d.y );
	return max( e, vec3f( 0.0 ) ) * frame.envIntensity;
}
`}))}_buildSteps(){let e=[],t=this.size;for(let n=0;n<6;n++)e.push(()=>this.faceKernels[n].dispatch([t/8,t/8,1]));let n=this._mips||=new Me(this.source,`envSource`);e.push(()=>n.dispatch());for(let n=0;n<Ne;n++){let r=Math.max(1,Math.ceil((t>>n)/8));e.push(()=>this.filterKernels[1-this.front][n].dispatch([r,r,6]))}return e.push(()=>this.shKernels[1-this.front].dispatch(1)),e.push(()=>{this.front=1-this.front}),e}update(e,t=!1){this.timer-=e;let n=this.sky.atmosphere.sunDir.value;if(t||!this.primed){this.primed=!0,this.timer=this.interval,this.lastSun.copy(n);for(let e of this.steps)e();this.step=-1;return}if(this.step<0){if(!(n.angleTo(this.lastSun)>.004)&&this.timer>0)return;this.timer=this.interval,this.lastSun.copy(n),this.step=0}this.steps[this.step++](),this.step===this.steps.length&&(this.step=-1)}get texture(){return this.targets[this.front]}};function Re(){let e=new Float32Array(36),t=[.3,.4,.6];for(let n=0;n<3;n++)e[n]=t[n]/.282095;return e}var ze=[4,8,13,19,27,38,52,72,100],Be=8;function Ve(e){let t=performance.now(),{res:n,heights:r,rock:i,texel:a,origin:o}=e,s=n/4,c=a*4,l=new Float32Array(s*s);for(let e=0;e<s;e++)for(let t=0;t<s;t++){let i=0;for(let a=0;a<4;a++){let o=(e*4+a)*n+t*4;for(let e=0;e<4;e++)i+=r[o+e]}l[e*s+t]=i/16}let u=new Float32Array(s*s).fill(1),d=[];for(let e=0;e<Be;e++){let t=(e+.5)/Be*Math.PI*2;d.push([Math.cos(t),Math.sin(t)])}for(let e=1;e<s-1;e++)for(let t=1;t<s-1;t++){let n=l[e*s+t];if(n<-25)continue;let r=0;for(let i=0;i<Be;i++){let[a,o]=d[i],u=0;for(let r=0;r<ze.length;r++){let i=ze[r],d=Math.round(t+a*i/c),f=Math.round(e+o*i/c);if(d<0||f<0||d>=s||f>=s)break;let p=(l[f*s+d]-n-.3)/i;p>u&&(u=p)}r+=1/(1+u*u)}u[e*s+t]=r/Be}let f=performance.now(),p=new Uint8Array(n*n*4),m=new Uint8Array(n*n*4),h=e.sand,g=e.path,_=e.gully,v=e.seagrass,y=e.rubble,b=e.scarp,x=1/(2*a);for(let e=0;e<n;e++){let t=e>0?e-1:0,a=e<n-1?e+1:n-1,o=e>1?e-2:0,c=e<n-2?e+2:n-1,l=(e+.5)/4-.5;l=l<0?0:l>s-1.001?s-1.001:l;let d=l|0,f=l-d;for(let l=0;l<n;l++){let S=e*n+l,ee=l>0?l-1:0,C=l<n-1?l+1:n-1,w=(r[e*n+C]-r[e*n+ee])*x,te=(r[a*n+l]-r[t*n+l])*x,ne=1/Math.sqrt(w*w+1+te*te),re=-w*ne,ie=-te*ne,ae=l>1?l-2:0,oe=l<n-2?l+2:n-1,se=r[S],T=.5+(r[e*n+ae]+r[e*n+oe]+r[o*n+l]+r[c*n+l]-4*se)*.25*.9;T=T<0?0:T>1?1:T;let E=(l+.5)/4-.5;E=E<0?0:E>s-1.001?s-1.001:E;let ce=E|0,le=E-ce,ue=d*s+ce,D=((u[ue]*(1-le)+u[ue+1]*le)*(1-f)+(u[ue+s]*(1-le)+u[ue+s+1]*le)*f)*(1-Math.max(0,T-.5)*.7);D=D<0?0:D;let O=S*4;p[O]=(re*.5+.5)*255+.5,p[O+1]=(ie*.5+.5)*255+.5,p[O+2]=i[S]*255+.5,p[O+3]=D*255+.5,m[O]=h[S],m[O+1]=g[S],m[O+2]=v?Math.max(_[S],v[S]):_[S],m[O+3]=Math.max(y?y[S]:0,b?b[S]:0)}}if(e.pads)for(let t of e.pads){let e=t.radius+3.5,r=Math.max(0,Math.floor((t.x-e-o)/a)),i=Math.min(n-1,Math.ceil((t.x+e-o)/a)),s=Math.max(0,Math.floor((t.z-e-o)/a)),c=Math.min(n-1,Math.ceil((t.z+e-o)/a));for(let e=s;e<=c;e++)for(let s=r;s<=i;s++){let r=o+(s+.5)*a,i=o+(e+.5)*a,c=Math.hypot(r-t.x,i-t.z),l=Math.atan2(i-t.z,r-t.x),u=1.2+1.8*(.5+.5*Math.sin(l*3+t.x)*Math.sin(l*5-t.z)),d=c<t.radius?1:Math.max(0,1-(c-t.radius)/u),f=(e*n+s)*4+1,p=Math.round(d*d*150);p>m[f]&&(m[f]=p)}}return{normal:p,splat:m,ms:{ao:f-t,maps:performance.now()-f}}}function He(t,n=4){let{res:r,heights:i}=t,a=r/n,o=new Float32Array(a*a),s=-1/0,c=1/(n*n);for(let e=0;e<a;e++)for(let t=0;t<a;t++){let l=0;for(let a=0;a<n;a++){let o=(e*n+a)*r+t*n;for(let e=0;e<n;e++)l+=i[o+e]}let u=l*c;o[e*a+t]=u,u>s&&(s=u)}let l=t=>{let n=new Uint16Array(t.length);for(let r=0;r<t.length;r++)n[r]=e.toHalfFloat(t[r]);return n},u=[{data:l(o),width:a,height:a}],d=a;for(;d>1;){let e=d>>1,t=new Float32Array(e*e);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let i=2*n*d+2*r;t[n*e+r]=Math.max(o[i],o[i+1],o[i+d],o[i+d+1])}u.push({data:l(t),width:e,height:e}),o=t,d=e}return{levels:u,texel:t.texel*n,maxHeight:s}}function Ue(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function We(e,t,n=!0){let r=t*2,i=new Float32Array(r*t),a=new Float32Array(r*r),o=n?Ge:Ke,s=o(.75),c=o(.25),l=e=>e<0?0:e>=t?t-1:e;for(let n=0;n<t;n++){let a=n*t;for(let t=0;t<r;t++){let o=t&1?t-1>>1:(t>>1)-1,u=t&1?c:s;i[n*r+t]=e[a+l(o-1)]*u[0]+e[a+l(o)]*u[1]+e[a+l(o+1)]*u[2]+e[a+l(o+2)]*u[3]}}for(let e=0;e<r;e++){let t=e&1?e-1>>1:(e>>1)-1,n=e&1?c:s,o=l(t-1)*r,u=l(t)*r,d=l(t+1)*r,f=l(t+2)*r,p=e*r;for(let e=0;e<r;e++)a[p+e]=i[o+e]*n[0]+i[u+e]*n[1]+i[d+e]*n[2]+i[f+e]*n[3]}return a}function Ge(e){let t=e*e,n=t*e;return[-.5*n+t-.5*e,1.5*n-2.5*t+1,-1.5*n+2*t+.5*e,.5*n-.5*t]}function Ke(e){return[0,1-e,e,0]}var N=512;function qe(e,t){let n=new Float32Array(e*e),r=new Float32Array(e*e);for(let i=0;i<e;i++)for(let a=0;a<e;a++){let o=Ue(a,i,t)*6.2831853;n[i*e+a]=Math.cos(o),r[i*e+a]=Math.sin(o)}return(t,i)=>{let a=Math.floor(t),o=Math.floor(i),s=t-a,c=i-o,l=(a%e+e)%e,u=(o%e+e)%e,d=l+1===e?0:l+1,f=u+1===e?0:u+1,p=u*e+l,m=u*e+d,h=f*e+l,g=f*e+d,_=n[p]*s+r[p]*c,v=n[m]*(s-1)+r[m]*c,y=n[h]*s+r[h]*(c-1),b=n[g]*(s-1)+r[g]*(c-1),x=s*s*s*(s*(s*6-15)+10),S=c*c*c*(c*(c*6-15)+10);return(_+(v-_)*x+(y-_+(_-v-y+b)*x)*S)*1.414}}function Je(e,t,n){let r=[];for(let i=0;i<t;i++)r.push(qe(e<<i,n+i*17));return(e,n)=>{let i=0,a=1,o=0,s=1;for(let c=0;c<t;c++)i+=r[c](e*s,n*s)*a,o+=a,a*=.5,s*=2;return i/o}}function Ye(e,t){let n=e+4,r=new Float32Array(n*n),i=new Float32Array(n*n),a=new Float32Array(n*n);for(let o=0;o<n;o++)for(let s=0;s<n;s++){let c=(s-2+e)%e,l=(o-2+e)%e;r[o*n+s]=Ue(c,l,t)+s-2,i[o*n+s]=Ue(c,l,t+1)+o-2,a[o*n+s]=Ue(c,l,t+2)}let o={f1:0,edge:0,id:0};return(e,t,s=2)=>{let c=Math.floor(e),l=Math.floor(t),u=99,d=0,f=0;for(let o=-1;o<=1;o++){let s=(l+o+2)*n+2+c;for(let n=-1;n<=1;n++){let o=s+n,c=r[o]-e,l=i[o]-t,p=c*c+l*l;p<u&&(u=p,d=a[o],f=o)}}let p=99;if(s>1){let a=r[f],o=i[f];for(let s=-2;s<=2;s++){let u=(l+s+2)*n+2+c;for(let n=-2;n<=2;n++){let s=u+n;if(s===f)continue;let c=r[s],l=i[s],d=c-a,m=l-o,h=Math.sqrt(d*d+m*m),g=((a+c)*.5-e)*d/h+((o+l)*.5-t)*m/h;g<p&&(p=g)}}}return o.f1=Math.sqrt(u),o.edge=p,o.id=d,o.dx=e-r[f],o.dy=t-i[f],o}}var Xe=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Ze=null;function Qe(){if(Ze)return Ze;let e=performance.now(),t=Je(4,2,11),n=Je(4,2,23),r=Ye(7,101),i=Ye(23,211),a=Je(16,3,307),o=Ye(26,401),s=Ye(12,601),c=Je(10,3,503),l=qe(180,701),u=qe(90,709),d=Ye(18,801),f=Je(4,5,907),p=new Uint8Array(N*N*4);for(let e=0;e<N;e++){let m=e/N;for(let h=0;h<N;h++){let g=h/N,_=(e*N+h)*4,v=g+t(g*4,m*4)*.035,y=m+n(g*4,m*4)*.035;v-=Math.floor(v),y-=Math.floor(y);let b=r(v*7,y*7),x=b.id*40,S=Xe(0,.2,b.edge),ee=((b.dx*Math.cos(x)+b.dy*Math.sin(x))*.5+(b.id-.5)*.22)*S,C=Xe(0,.1+.08*b.id,b.edge),w=i(v*23,y*23,2),te=w.id*40,ne=Xe(0,.14,w.edge),re=((w.dx*Math.cos(te)+w.dy*Math.sin(te))*.22+(w.id-.5)*.1)*ne,ie=a(g*16,m*16),ae=(.45+ee+re*.6+.16*ie)*(.66+.34*C)*(.94+.06*ne);b=o(g*26,m*26,1);let oe=b.id<.6?(1-Xe(.1+.15*b.id,.45,b.f1))*(.4+.6*b.id):0,se=c(g*10,m*10),T=s(g*12,m*12,1),E=T.id<.15?1-Xe(.06,.28,T.f1):0,ce=.34+.3*se+.26*oe+.45*E,le=l(g*180,m*180)*.55+u(g*90,m*90)*.45,ue=d(g*18,m*18,1),D=ue.id<.2?Math.max(0,1-(ue.f1/(.14+.12*ue.id*5))**2):0,O=.45+.2*le+.5*Math.sqrt(D),de=.5+.55*f(g*4,m*4);ae=ae<0?0:ae>1?1:ae,ce=ce<0?0:ce>1?1:ce,O=O<0?0:O>1?1:O,de=de<0?0:de>1?1:de,p[_]=ae*255,p[_+1]=ce*255,p[_+2]=O*255,p[_+3]=de*255}}let m=new g({label:`terrainDetail`,width:N,height:N,format:`rgba8unorm`,mips:!0,usage:[`sample`,`copyDst`],sampler:`aniso4Repeat`,data:p});return m.getGPU(),Oe(m),m.userData={},m.image={width:N,height:N,data:p},m.userData.ms=performance.now()-e,Ze=m,m}var P=(e,t,n)=>{let r=new A().setRGB(e,t,n,ue);return`vec3f( ${et(r.r)}, ${et(r.g)}, ${et(r.b)} )`},$e=(e,t)=>{let n=Math.cos(t),r=Math.sin(t);return`( mat2x2f( ${et(n)}, ${et(r)}, ${et(-r)}, ${et(n)} ) * ( ${e} ) )`};function et(e){let t=Number(e).toPrecision(9);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`}var tt={rockDark:P(.15,.145,.135),rockMid:P(.3,.285,.265),rockLight:P(.48,.455,.42),rockWarm:P(.44,.37,.3),lichenPale:P(.7,.7,.64),lichenOrange:P(.78,.5,.2),blackZone:P(.075,.075,.07),barnacle:P(.78,.76,.7),algae:P(.2,.27,.1),coralline:P(.62,.44,.46),moss:P(.19,.29,.08),mossDry:P(.3,.34,.14)},nt={lush:P(.13,.2,.05),green:P(.25,.32,.1),olive:P(.36,.37,.14),yellow:P(.5,.46,.2),straw:P(.62,.54,.33),soil:P(.17,.13,.08)},rt=(e,t)=>Object.entries(t).map(([t,n])=>`const ${e}${t}: vec3f = ${n};`).join(`
`),it=`
${rt(`PAL_`,tt)}
${rt(`MEADOW_`,nt)}

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
`,at=null,ot=null;function st(){return ot||={texture:Qe()}}function ct(){return at||(at=new o({name:`terrainShading`,deps:[m],bindings:{terrainDetailTex:st()},code:it}),at)}var lt=512,ut=24,dt=6,ft=1.22,pt=24;function mt(e,t,n,r,i,a=!1){let o=new g({label:i,width:t,height:n,format:r,mips:a,usage:[`sample`,`copyDst`],data:e});return o.getGPU(),a===!0&&Oe(o),o}var ht=class{constructor(e,t){this.terrain=e;let n=e.res,r=performance.now();this.heightTexture=mt(e.heights,n,n,`r32float`,`terrainHeights`);let i=Ve(e);this.normalTexture=mt(i.normal,n,n,`rgba8unorm`,`terrainNormalRockAO`,!0),this.splatTexture=mt(i.splat,n,n,`rgba8unorm`,`terrainSplat`,!0),this.detailTexture=Qe();let a=He(e,4),s=new g({label:`terrainShadowHeights`,width:a.levels[0].width,height:a.levels[0].height,format:`r16float`,mips:a.levels.length,usage:[`sample`,`copyDst`]});s.getGPU(),a.levels.forEach((e,t)=>s.upload(e.data,{mip:t,width:e.width,height:e.height})),this.shadowHeightTexture=s,this.shadowTexel=a.texel,this.maxHeight=a.maxHeight,this.size=e.size,this.origin=e.origin,this.res=n,this.uniforms=new c(`TerrainParams`,{origin:[`f32`,e.origin],size:[`f32`,e.size],res:[`f32`,n],shoreRes:[`f32`,1],sunBake:[`vec3f`,new k(0,1,0)],sunBaked:[`f32`,0]},{label:`terrainParams`}),this.uOrigin=this.uniforms.fields.origin,this.uSize=this.uniforms.fields.size,this.shoreTexture=mt(new Float32Array([1e4,0,0,0]),1,1,`rgba32float`,`terrainShoreField`),t&&this.setShoreField(t),this._initSunShadow(),this.module=new o({name:`terrain`,deps:[m],uniforms:this.uniforms,bindings:{terrainHeightTex:{texture:this.heightTexture,sampleType:`unfilterable-float`},terrainNormalTex:{texture:this.normalTexture},terrainSplatTex:{texture:this.splatTexture},terrainDetailTex:st(),terrainShoreTex:{texture:()=>this.shoreTexture,sampleType:`unfilterable-float`},terrainSunShadowTex:{texture:this.sunShadowTexture}},code:gt}),this.sunModulationModule=new o({name:`terrainSunModulation`,deps:[this.module],code:`fn materialSunModulation( P: vec3f, N: vec3f ) -> vec3f { return vec3f( terrainSunShadowAt( P ) ); }`}),this.timings={...i.ms,detail:this.detailTexture.userData.ms,total:performance.now()-r}}_initSunShadow(){this.sunShadowTexture=new g({label:`terrainSunShadow`,width:lt,height:lt,format:`rgba16float`,usage:[`sample`,`storage`]}),this.uSunBake=this.uniforms.fields.sunBake,this.uSunBaked=this.uniforms.fields.sunBaked,this._sunBaked=!1;let e=1/this.shadowTexel;this.sunShadowKernel=new Ee({label:`Terrain Sun Shadow`,modules:[m],bindings:{terrainParams:{uniform:this.uniforms},terrainShadowHeights:{texture:this.shadowHeightTexture},terrainSunShadowOut:{storageTexture:this.sunShadowTexture,access:`write`}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	if ( gid.x >= ${lt}u || gid.y >= ${lt}u ) { return; }
	let ij = vec2f( gid.xy );
	let xz = ( ij + 0.5 ) / ${lt}.0 * terrainParams.size + terrainParams.origin;
	let L = terrainParams.sunBake;
	let lxz = max( length( L.xz ), 1e-4 );
	let dir = L.xz / lxz;
	let tanEl = L.y / lxz;
	var top = -1e4;
	var occ = 0.0;
	var t = f32( ${ut} );
	var dt = f32( ${dt} );
	for ( var i = 0; i < ${pt}; i++ ) {
		let q = xz + dir * t;
		let uv = ( q - terrainParams.origin ) / terrainParams.size;
		let hq = textureSampleLevel( terrainShadowHeights, smpLinearClamp, uv, log2( max( dt * ${e.toFixed(8)}, 1.0 ) ) ).x;
		let v = hq - t * tanEl;
		if ( v > top ) {
			top = v;
			occ = t;
		}
		dt *= ${ft};
		t += dt;
	}
	textureStore( terrainSunShadowOut, vec2u( gid.xy ), vec4f( top, occ, 0.0, 1.0 ) );
}
`})}updateSunShadow(e,t=!1){let n=D.sunDir.value;return!t&&this._sunBaked&&n.angleTo(this.uSunBake.value)<.0015?!1:(this.uSunBake.value.copy(n),this.sunShadowKernel.dispatch([lt/8,lt/8,1]),this._sunBaked=!0,this.uSunBaked.value=1,!0)}setShoreField(e){this.shoreRes=e.res,this.shoreTexture.width===e.res?this.shoreTexture.upload(e.data):(this.shoreTexture.destroy(),this.shoreTexture=mt(e.data,e.res,e.res,`rgba32float`,`terrainShoreField`)),this.uniforms.fields.shoreRes.value=e.res}},gt=`
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
`,_t=class{constructor({gridSize:e=64,leafSize:t=8,levels:n=12,rangeFactor:r=2.5,morphStartRatio:i=.66,maxInstances:a=1500,minY:s=-20,maxY:u=20,heightBounds:d=null,center:f=null,prefix:p=`cdlod`}={}){this.G=e,this.leafSize=t,this.levels=n,this.minY=s,this.maxY=u,this.heightBounds=d,this.fixedRoot=f,this.ranges=[];let m=[],h=0;for(let e=0;e<n;e++){let n=t*2**e*r;this.ranges.push(n);let a=h+(n-h)*i;m.push(new oe(a,1/Math.max(.001,n-a))),h=n}let g=[];for(let r=0;r<n;r++)g.push(t*2**r/e);this.uMorph={array:m},this.uSpacing={array:g};let _=p,v=_[0].toUpperCase()+_.slice(1);this.params=new c(v+`Params`,{morph:[`vec4f[${n}]`,m.map((e,t)=>new ie(e.x,e.y,g[t],0))]},{label:_}),this.module=new o({name:_,uniforms:this.params,uniformName:_,code:`
struct ${v}Vertex { worldXZ: vec2f, spacing: f32, morphK: f32, lod: f32, size: f32 };

// Morph in world space on the LOD's own vertex lattice (spacing h). Quarter nodes of a
// partially subdivided parent carry the parent's LOD, so their extra vertices first snap
// onto that lattice; every node covering a point then computes the same position.
fn ${_}Snapped( node: vec4f, grid: vec2f ) -> vec2f {
	let h = ${_}.morph[ i32( node.w ) ].z;
	let p = node.xy + grid * node.z;
	return floor( p / h + 1e-3 ) * h;
}

fn ${_}Morph( node: vec4f, grid: vec2f, viewPos: vec3f, y0: f32 ) -> ${v}Vertex {
	let lod = i32( node.w );
	let m = ${_}.morph[ lod ];
	let h = m.z;
	let p = node.xy + grid * node.z;
	let idx = floor( p / h + 1e-3 );
	let snapped = idx * h;
	let dist = length( viewPos - vec3f( snapped.x, y0, snapped.y ) );
	let morphK = clamp( ( dist - m.x ) * m.y, 0.0, 1.0 );
	let odd = fract( idx * 0.5 ) * 2.0;
	var o: ${v}Vertex;
	o.worldXZ = snapped - odd * h * morphK;
	o.spacing = h * ( morphK + 1.0 );
	o.morphK = morphK;
	o.lod = node.w;
	o.size = node.z;
	return o;
}
`});let y=e,b=new Float32Array((y+1)*(y+1)*3),x=0;for(let e=0;e<=y;e++)for(let t=0;t<=y;t++)b[x++]=t/y,b[x++]=0,b[x++]=e/y;let C=new Uint32Array(y*y*6);x=0;for(let e=0;e<y;e+=8)for(let t=0;t<y;t++)for(let n=e;n<Math.min(e+8,y);n++){let e=t*(y+1)+n,r=e+1,i=e+(y+1),a=i+1;(n+t)%2==0?(C[x++]=e,C[x++]=i,C[x++]=r,C[x++]=r,C[x++]=i,C[x++]=a):(C[x++]=e,C[x++]=i,C[x++]=a,C[x++]=e,C[x++]=a,C[x++]=r)}let w=new l;w.setAttribute(`position`,new S(b,3)),w.setIndex(new S(C,1)),this.nodeArray=new Float32Array(a*4),this.nodeAttr=new ee(this.nodeArray,4),w.setAttribute(`nodeData`,this.nodeAttr),w.instanceCount=0,w.boundingSphere=new Se(new k,1e7),w.boundingBox=new me(new k(-1e7,-1e7,-1e7),new k(1e7,1e7,1e7)),this.geometry=w,this.maxInstances=a,this.count=0,this._box=new me,this._frustum=new se,this._mat=new be,this._cam=new k,this.lodCounts=Array(n).fill(0)}vertexNodes(e=null,{out:t=`lod`,viewPos:n=`frame.cameraPos`}={}){let r=this.module.name;return`let ${t} = ${r}Morph( v.nodeData, v.position.xz, ${n}, ${e?`${e}( ${r}Snapped( v.nodeData, v.position.xz ) )`:`0.0`} );`}update(e){e.updateMatrixWorld(),this._mat.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._mat,e.coordinateSystem,e.reversedDepth),e.getWorldPosition(this._cam),this.count=0,this.lodCounts.fill(0);let t=this.levels-1,n=this.leafSize*2**t;if(this.fixedRoot){let{x:e,z:r,size:i}=this.fixedRoot,a=Math.ceil(i/n);for(let i=0;i<a;i++)for(let o=0;o<a;o++)this._select(e+o*n,r+i*n,n,t)}else{let e=Math.floor(this._cam.x/n),r=Math.floor(this._cam.z/n);for(let i=-1;i<=1;i++)for(let a=-1;a<=1;a++)this._select((e+a)*n,(r+i)*n,n,t)}let r=this.count,i=this._order||=[];i.length=r;let a=this.nodeArray,o=this._cam;for(let e=0;e<r;e++){let t=a[e*4+2],n=Math.max(a[e*4]-o.x,0,o.x-a[e*4]-t),r=Math.max(a[e*4+1]-o.z,0,o.z-a[e*4+1]-t);i[e]={d:n*n+r*r,x:a[e*4],z:a[e*4+1],s:t,l:a[e*4+3]}}i.sort((e,t)=>e.d-t.d);for(let e=0;e<r;e++){let t=i[e];a[e*4]=t.x,a[e*4+1]=t.z,a[e*4+2]=t.s,a[e*4+3]=t.l}this.geometry.instanceCount=this.count,this.nodeAttr.clearUpdateRanges(),this.nodeAttr.addUpdateRange(0,this.count*4),this.nodeAttr.needsUpdate=!0}_bounds(e,t,n){if(this.heightBounds){let[r,i]=this.heightBounds(e,t,e+n,t+n);this._box.min.set(e,r,t),this._box.max.set(e+n,i,t+n)}else this._box.min.set(e,this.minY,t),this._box.max.set(e+n,this.maxY,t+n);return this._box}_intersectsSphere(e,t){let n=this._cam,r=Math.max(e.min.x-n.x,0,n.x-e.max.x),i=Math.max(e.min.y-n.y,0,n.y-e.max.y),a=Math.max(e.min.z-n.z,0,n.z-e.max.z);return r*r+i*i+a*a<=t*t}_add(e,t,n,r){if(this.count>=this.maxInstances)return;let i=this.count*4;this.nodeArray[i]=e,this.nodeArray[i+1]=t,this.nodeArray[i+2]=n,this.nodeArray[i+3]=r,this.count++,this.lodCounts[r]++}_select(e,t,n,r){let i=this._bounds(e,t,n);if(!this._intersectsSphere(i,this.ranges[r]))return!1;if(!this._frustum.intersectsBox(i))return!0;if(r===0||!this._intersectsSphere(i,this.ranges[r-1]))return this._add(e,t,n,r),!0;let a=n*.5,o=[[e,t],[e+a,t],[e,t+a],[e+a,t+a]];for(let[e,t]of o)if(!this._select(e,t,a,r-1)){let n=this._bounds(e,t,a);this._frustum.intersectsBox(n)&&this._add(e,t,a,r)}return!0}},vt=1e5,F={terrainSize:6144,terrainRes:2048,beach:{xMin:-150,xMax:170},pier:{x:vt,zStart:-64,zEnd:40,deckHeight:2.3,width:2.6,headWidth:14,headDepth:7},boatDock:{position:new k(vt,-50,vt),heading:0},village:{center:new k(vt,0,vt),radius:95},reef:{center:new k(-1e5,0,vt),radius:58},spawn:{position:new k(18,0,-60),yaw:Math.PI},start:{position:new k(53.6,0,-77),yaw:Math.PI},swellDir:new oe(-.12,-1).normalize()},yt=[248,297],bt=class{constructor({scene:e,terrainData:t,terrainGPU:n,gridSize:r=40,rangeFactor:i=2,sunShadow:a=!0,renderer:o=null}){this.data=t,this.gpu=n;let s=t.size/2;this.lod=new _t({gridSize:r,leafSize:8,levels:9,heightBounds:(e,n,r,i)=>t.boundsFor(e,n,r,i),center:{x:-s,z:-s,size:t.size},rangeFactor:i,prefix:`terrainLod`}),this.wetness=null,this.sunShadow=a,this.renderer=o,this.uViewPos={value:new k},this.gustOffset=new oe;let c=this.material=De({name:`Terrain`,roughness:.9,metalness:0,uniforms:{viewPos:[`vec3f`,this.uViewPos.value],wetDarken:[`f32`,.58],gustOffset:[`vec2f`,this.gustOffset]},attributes:{nodeData:`vec4f`}});this.params={wetDarken:c.uniforms.wetDarken},this.uViewPos=c.uniforms.viewPos,c.vertex=`
	// CDLOD vertex (same lattice snapping and geomorph as the CDLOD module) morphing toward viewPos
	let snapped = terrainLodSnapped( v.nodeData, v.position.xz );
	let y0 = terrainHeightAt( snapped );
	let cv = terrainLodMorph( v.nodeData, v.position.xz, mat.viewPos, y0 );
	v.useWorld = true;
	v.worldPos = vec3f( cv.worldXZ.x, terrainHeightAt( cv.worldXZ ), cv.worldXZ.y );
	v.worldNormal = vec3f( 0.0, 1.0, 0.0 );
`,this.finalizeMaterial(),this.mesh=new u(this.lod.geometry,c),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,this.mesh.castShadow=!0,this.mesh.staticVelocity=!0,this.mesh.name=`Terrain`,e.add(this.mesh)}finalizeMaterial(){let e=this.material,t=[this.gpu.module,ct(),this.lod.module];this.wetness&&(t.push(...this.wetness.modules||[]),t.push(new o({name:`terrainWetness`,deps:[this.gpu.module,...this.wetness.modules||[]],code:this.wetness.code}))),t.push(new o({name:`terrainMaterial`,deps:[this.gpu.module,ct()],code:xt})),e.modules=t,e.defines.HAS_WETNESS=+!!this.wetness,e.defines.MATERIAL_SUN_MODULATION=+!!this.sunShadow,e.defines.GRASSLAND=+!!this.data.grassland,e.surface=St,e.needsUpdate=!0}update(e){e.getWorldPosition(this.uViewPos.value),this.lod.update(e);let t=D.windDir.value,n=.7*D.windSpeed.value+1.5,r=D.dt.value;this.gustOffset.x+=t.x*n*r,this.gustOffset.y+=t.y*n*r,this.gpu.updateSunShadow(this.renderer)}},I=P,xt=`
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
`,St=`
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
	let macroA = terDetail( ${$e(`xz`,.7)} / 173.0 ).w;
	let macroB = terDetail( ${$e(`xz`,2.1)} / 47.0 ).w;
	let mcr = macroA * 0.6 + macroB * 0.4;
	let dN = terDetail( xz / 1.9 );
	let dM = terDetail( ${$e(`xz`,1.3)} / 6.7 + 0.21 );
	let dF = terDetail( ${$e(`xz`,2.4)} / 0.63 + 0.53 );
	let grain = min( dN.z, 0.62 );
	let grainF = min( dF.z, 0.62 );
#if REFRACTION_CLIP
	// the refraction source (half resolution, seen blurred through the water): every non-rock
	// fragment under the water takes the cheap seabed path
	let seabedPath = h < 0.4 && nr.z < 0.05;
#else
	let seabedPath = h < -0.8 && nr.z < 0.05 && slope < 0.18;
#endif
	let sw = vec2f( ${F.swellDir.x}, ${F.swellDir.y} );
	let swDir = sw;
	let rc = vec2f( ${F.reef.center.x.toFixed(3)}, ${F.reef.center.z.toFixed(3)} );
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
		let reefW = 1.0 - smoothstep( ${F.reef.radius*.5}, ${F.reef.radius*1.15}, reefD + ( mcr - 0.5 ) * 30.0 );
		var under = mix( ${I(.84,.78,.64)}, ${I(.72,.7,.58)}, smoothstep( 1.0, 9.0, depth ) );
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
		var meadow = mix( ${I(.12,.16,.07)}, ${I(.27,.29,.15)}, smoothstep( 0.35, 0.75, blades ) );
		meadow = mix( meadow, ${I(.24,.2,.11)}, smoothstep( 0.55, 0.8, dM.y + ( macroB - 0.5 ) * 0.4 ) * 0.5 );
		// sparse at the fringe: sand shows between the blades; thinner, paler patches inside
		meadow = mix( under, meadow, smoothstep( 0.3, 0.85, sp.z + clumps * 0.5 ) * 0.35 + 0.65 );
		meadow = mix( meadow, mix( meadow, under, 0.45 ), smoothstep( 0.58, 0.8, macroB + ( dM.w - 0.5 ) * 0.4 ) );
		under = mix( under, meadow, seagrassW );
		// rubble heads: coral rubble and rock turfed with algae, pink coralline crusts
		let rubbleW = smoothstep( 0.3, 0.6, sp.w + ( dN.x - 0.5 ) * 0.4 + ( dM.w - 0.5 ) * 0.3 ) * underW;
		var rubble = mix( ${I(.2,.19,.15)}, ${I(.36,.33,.26)}, smoothstep( 0.3, 0.7, dN.x ) );
		rubble = mix( rubble, ${I(.2,.24,.1)}, smoothstep( 0.5, 0.7, dF.y ) * 0.6 );
		rubble = mix( rubble, ${I(.58,.38,.44)}, smoothstep( 0.62, 0.74, dM.x ) * 0.6 );
		under = mix( under, rubble, rubbleW );
		// reef flat: coral rubble and pink crusts toward the reef
		under = mix( under, mix( ${I(.56,.5,.44)}, ${I(.6,.43,.46)}, smoothstep( 0.45, 0.7, dM.x ) ), reefW * 0.7 * smoothstep( 0.4, 0.6, dN.x ) );

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
			basalt = mix( basalt, mix( ${I(.13,.1,.07)}, ${I(.2,.2,.1)}, dF.y ), joints * 0.7 );
			// moss / small plants on every ledge and on the less steep parts, more near the edges
			let ledgeMoss = smoothstep( 0.4, 0.75, N0.y + ( dN.y - 0.45 ) * 0.6 ) * smoothstep( 0.25, 0.55, macroB + dM.y * 0.4 );
			let fringe = smoothstep( 0.5, 0.58, rv ) * smoothstep( 0.8, 0.6, rv ) * smoothstep( 0.3, 0.6, dM.w + dN.y * 0.4 );
			let mossK = sat( max( ledgeMoss * 0.75, fringe * 0.8 ) + R.moss * 0.3 + joints * 0.25 );
			rockAlbedo = mix( basalt, mix( ${I(.12,.17,.05)}, ${I(.22,.26,.09)}, dF.y ), mossK );
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
		var sand = mix( ${I(.83,.75,.6)}, ${I(.9,.84,.72)}, smoothstep( 0.3, 0.72, mcr + dryK * 0.2 ) );
		sand = mix( sand, ${I(.84,.72,.55)}, smoothstep( 0.55, 0.8, dM.w + ( macroB - 0.5 ) * 0.6 ) * 0.45 );
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
		let pebCol = mix( mix( ${I(.86,.82,.74)}, ${I(.78,.64,.6)}, smoothstep( 0.45, 0.75, dM.x ) ), ${I(.36,.33,.3)}, smoothstep( 0.74, 0.82, dM.y ) );
		sand = mix( sand, pebCol, pebW * 0.75 );
		let wrack = wrackBand * smoothstep( 0.58, 0.72, dN.y ) * smoothstep( 0.4, 0.6, macroB );
		sand = mix( sand, ${I(.24,.18,.11)}, wrack * 0.8 );
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
			let reefW = 1.0 - smoothstep( ${F.reef.radius*.5}, ${F.reef.radius*1.15}, reefD + ( mcr - 0.5 ) * 30.0 );
			under = mix( ${I(.84,.78,.64)}, ${I(.72,.7,.58)}, smoothstep( 1.0, 9.0, depth ) );
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
			var meadow = mix( ${I(.12,.16,.07)}, ${I(.27,.29,.15)}, smoothstep( 0.35, 0.75, blades ) );
			meadow = mix( meadow, ${I(.24,.2,.11)}, smoothstep( 0.55, 0.8, dM.y + ( macroB - 0.5 ) * 0.4 ) * 0.5 );
			// sparse at the fringe: sand shows between the blades; thinner, paler patches inside
			meadow = mix( under, meadow, smoothstep( 0.3, 0.85, sp.z + clumps * 0.5 ) * 0.35 + 0.65 );
			meadow = mix( meadow, mix( meadow, under, 0.45 ), smoothstep( 0.58, 0.8, macroB + ( dM.w - 0.5 ) * 0.4 ) );
			under = mix( under, meadow, seagrassW );
			// rubble heads: coral rubble and rock turfed with algae, pink coralline crusts
			rubbleW = smoothstep( 0.3, 0.6, sp.w + ( dN.x - 0.5 ) * 0.4 + ( dM.w - 0.5 ) * 0.3 ) * underW;
			var rubble = mix( ${I(.2,.19,.15)}, ${I(.36,.33,.26)}, smoothstep( 0.3, 0.7, dN.x ) );
			rubble = mix( rubble, ${I(.2,.24,.1)}, smoothstep( 0.5, 0.7, dF.y ) * 0.6 );
			rubble = mix( rubble, ${I(.58,.38,.44)}, smoothstep( 0.62, 0.74, dM.x ) * 0.6 );
			under = mix( under, rubble, rubbleW );
			// reef flat: coral rubble and pink crusts toward the reef
			under = mix( under, mix( ${I(.56,.5,.44)}, ${I(.6,.43,.46)}, smoothstep( 0.45, 0.7, dM.x ) ), reefW * 0.7 * smoothstep( 0.4, 0.6, dN.x ) );
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
		lawn = mix( lawn, ${I(.4,.33,.23)}, smoothstep( 0.72, 0.84, dN.y + ( dM.y - 0.5 ) * 0.5 ) * 0.25 );
		lawn = mix( lawn, ${I(.6,.52,.38)}, sat( sp.x * 1.6 ) * smoothstep( 0.45, 0.62, dN.z + dM.y * 0.3 ) * 0.7 );
		// inside the geometric grass field (GrassField) the ground is only seen between the blades:
		// the shaded base of the sward, dark and brownish with dead leaves; it hands over to the
		// sward's own look (above) where the blades thin out
		let grassHere = smoothstep( 2.5, 4.5, h ) * ( 1.0 - smoothstep( 0.45, 0.85, jungleW ) ) * ( 1.0 - sat( sp.x * 1.6 ) );
		let fieldK = ( 1.0 - smoothstep( ${yt[0].toFixed(1)}, ${yt[1].toFixed(1)}, length( p.xz - frame.cameraPos.xz ) ) ) * grassHere;
		let swardBase = mix( mt.tone * 0.4, MEADOW_soil, 0.4 ) * ( ( dN.y - 0.45 ) * 0.6 + 1.0 ) * ( ( dF.y - 0.4 ) * 0.3 + 1.0 );
		// (草原 v2, grass to ~300 m: far out the sward base is seen less (grazing view, blades cover
		// it) and eases toward the lawn tone before the blades thin out, so there is no dark ring)
		let swardK = 0.85 - 0.35 * smoothstep( 120.0, 280.0, length( p.xz - frame.cameraPos.xz ) );
		lawn = mix( lawn, swardBase, fieldK * swardK );
		let litter = mix( ${I(.2,.15,.09)}, ${I(.34,.25,.13)}, dF.y );
		var jungle = mix( ${I(.1,.16,.05)}, litter, smoothstep( 0.52, 0.7, dN.y ) );
		jungle = mix( jungle, ${I(.12,.1,.06)}, gully * 0.3 );
		let far = smoothstep( 40.0, 160.0, camDist );
		var cover = mix( ${I(.08,.13,.04)}, ${I(.17,.24,.07)}, smoothstep( 0.3, 0.7, mcr ) );
		cover = mix( cover, ${I(.27,.29,.12)}, smoothstep( 0.66, 0.84, macroB + dM.w * 0.2 ) * 0.45 );
		jungle = mix( jungle, cover, far * 0.8 );
		jungle = jungle * ( ( mcr - 0.5 ) * 0.3 + 1.0 );
		// canopy: seen from a distance (or on slopes too steep for the trees) the forest reads as
		// a carpet of lumpy crowns with dark gaps
		let canopyW = jungleW * max( smoothstep( 0.2, 0.4, slope ), smoothstep( 90.0, 260.0, camDist ) ) * smoothstep( 25.0, 70.0, camDist ) * notRock * ( 1.0 - screeW * 0.7 );
		var canopyH = 0.0;
		if ( canopyW > 0.0 ) {
			let crowns = terDetail( ${$e(`xz`,.9)} / 61.0 ).w;
			let crownsB = terDetail( ${$e(`xz`,2.3)} / 13.0 + 0.37 ).w;
			canopyH = smoothstep( 0.32, 0.7, crowns * 0.45 + crownsB * 0.4 + dM.w * 0.15 );
			var canopy = mix( ${I(.05,.08,.025)}, mix( ${I(.14,.21,.06)}, ${I(.22,.27,.09)}, macroB ), canopyH );
			// steep faces: the canopy hangs in streaks down the fall line
			canopy = canopy * ( ( streak - 0.5 ) * 0.5 * smoothstep( 0.3, 0.5, slope ) + 1.0 );
			jungle = mix( jungle, canopy, canopyW );
		}
		var ground = mix( lawn, jungle, jungleW );
		// around the bare rock: dark humus, stones and moss, with the surrounding plants creeping
		// in (a soft, noisy band; no speckle)
		let creepIn = smoothstep( 0.4, 0.75, dM.w + ( dN.y - 0.45 ) * 0.5 + ( macroB - 0.5 ) * 0.3 );
		var scree = mix( ${I(.16,.13,.1)}, ${I(.27,.24,.2)}, smoothstep( 0.45, 0.75, dM.x + ( dN.x - 0.5 ) * 0.3 ) );
		scree = mix( scree, mix( ${I(.13,.18,.06)}, ${I(.22,.26,.09)}, dF.y ), smoothstep( 0.45, 0.7, dM.y + ( dN.y - 0.45 ) * 0.5 ) * 0.7 );
		ground = mix( ground, scree, screeW * ( 1.0 - creepIn * 0.7 ) );
		let laterite = mix( ${I(.42,.25,.16)}, ${I(.52,.36,.24)}, dM.w ) * ( ( dN.y - 0.4 ) * 0.3 + 1.0 );
		ground = mix( ground, laterite, lateriteW );

		// ---- worn dirt paths / trampled ground (darker, redder soil in the forest)
		var dirt = mix( ${I(.38,.31,.23)}, ${I(.5,.43,.32)}, dM.w ) * ( ( dN.y - 0.4 ) * 0.35 + 0.95 );
		dirt = mix( dirt, ${I(.3,.22,.15)}, jungleW * 0.7 );
		dirt = mix( dirt, ${I(.56,.53,.48)}, smoothstep( 0.72, 0.82, dN.z ) * 0.5 );
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
			var soil = mix( ${I(.5,.42,.31)}, ${I(.68,.6,.46)}, smoothstep( 0.3, 0.8, layerMix ) * 0.45 + lamB * 0.2 + ( grain - 0.45 ) * 0.5 + ( dM.w - 0.5 ) * 0.3 );
			// humus-stained, rootier soil in patches (the old dune surface caught in the cut)
			soil = mix( soil, ${I(.26,.2,.14)}, smoothstep( 0.55, 0.8, dM.y + ( macroB - 0.5 ) * 0.5 ) * 0.55 );
			// roots: horizontal coordinate along the face, stretched down the fall line
			let ru = terDetail( vec2f( dot( xz, tanF ) / 0.8, h / 0.5 ) + vec2f( 0.37, 0.11 ) );
			let rv = terDetail( vec2f( dot( xz, tanF ) / 1.7 + h * 0.6, h / 0.9 ) + vec2f( 0.71, 0.29 ) );
			let rootLive = smoothstep( 0.035, 0.0, abs( ru.x - 0.5 ) ) * smoothstep( 0.45, 0.62, ru.w );
			let rootDead = smoothstep( 0.03, 0.0, abs( rv.z - 0.52 ) ) * smoothstep( 0.5, 0.66, rv.y );
			soil = mix( soil, ${I(.17,.12,.08)}, rootLive * 0.85 );
			soil = mix( soil, ${I(.8,.75,.66)}, rootDead * 0.75 );
			// damp, darker sand toward the toe and in seepage streaks
			let seep = smoothstep( 0.6, 0.8, terDetail( vec2f( dot( xz, tanF ) / 2.3, h / 6.0 ) ).w ) * 0.35;
			soil = soil * ( 1.0 - seep - smoothstep( 0.5, 1.0, sp.w ) * 0.08 );
			// under the lip: the dark, rooty topsoil the grass grows in, overhanging the cut
			let lip = smoothstep( 0.86, 0.97, sp.w + ( dN.y - 0.45 ) * 0.1 );
			soil = mix( soil, ${I(.2,.15,.1)} * ( dN.x * 0.4 + 0.8 ), lip * 0.85 );
			// foot of the face: undercut by the swash of storm waves, in its own shadow
			soil *= 1.0 - ( 1.0 - smoothstep( 0.6, 0.78, sp.w ) ) * smoothstep( 0.35, 0.55, sp.w ) * 0.25;
			// slumped sand and fallen chunks at the toe: damp beach sand rather than soil
			soil = mix( ${I(.63,.56,.44)} * ( grain * 0.3 + 0.85 ), soil, smoothstep( 0.35, 0.75, sp.w ) );
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
		albedo = mix( albedo * ( 1.0 - swashLine * 0.3 ), ${I(.9,.88,.84)}, swashLine * smoothstep( 0.6, 0.75, dF.z ) * 0.5 );
		// foam residue: lacy patterns stranded on the sand
		var residue = sat( wetFoam.y ) * landW * notRock;
		if ( residue > 0.0 ) { residue *= smoothstep( 0.42, 0.18, terDetail( ${$e(`xz`,.4)} / 0.9 ).x ) * 0.7 + 0.3; }
		albedo = mix( albedo, ${I(.88,.9,.9)}, residue );

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
`,Ct=512,wt=.6,Tt=.08,Et=new c(`GroundBounceParams`,{sun:[`vec3f`,new k(0,1,0)],strength:[`f32`,1],ready:[`f32`,0]},{label:`groundBounce`}),Dt={strength:Et.fields.strength,module:null,exclude(e){e&&e.setDefine&&e.setDefine(`NO_GROUND_BOUNCE`,1)}},Ot=(e,t,n)=>{let r=new A().setRGB(e,t,n,ue);return`vec3f( ${r.r.toFixed(6)}, ${r.g.toFixed(6)}, ${r.b.toFixed(6)} )`};function kt({terrain:e,clouds:t=null,moon:n=null}){let r=e=>new g({label:e,width:Ct,height:Ct,format:`rgba16float`,usage:[`sample`,`storage`]}),i=r(`groundBounceRaw`),a=r(`groundBounce`),s=Et.fields.sun,c=Et.fields.ready,l=new Ee({label:`Ground Bounce Bake`,modules:[m,e.module],bindings:{groundBounceParams:{uniform:Et},gbRawOut:{storageTexture:i,access:`write`}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let ij = vec2f( gid.xy );
	let xz = ( ij + 0.5 ) / ${Ct}.0 * terrainParams.size + terrainParams.origin;
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
	let veg = mix( ${Ot(.3,.36,.16)}, ${Ot(.12,.17,.07)}, jungleW );
	// dry coral sand, darker where damp near the water line
	let sand = ${Ot(.86,.79,.66)} * mix( 0.6, 1.0, smoothstep( 0.2, 1.2, h ) );
	let land = mix( mix( veg, sand, sandW ), vec3f( 0.08, 0.075, 0.065 ), rockW );
	// sea: the seabed (sand in the bay) seen through the water column, down and back up
	let depth = max( frame.seaLevel - h, 0.0 );
	let seabed = mix( ${Ot(.62,.58,.48)}, ${Ot(.25,.3,.22)}, smoothstep( 0.3, 0.7, sp.y ) );
	let sea = seabed * exp( ( frame.waterAbsorption + frame.waterScattering ) * depth * -2.4 ) * 0.9 + vec3f( 0.01, 0.025, 0.03 );
	let wet = ${n?`0.0`:`smoothstep( 0.05, -0.1, h - frame.seaLevel )`};
${n?`	let albedo = vec3f( ${n.albedo.toFixed(4)} ) * vec3f( 1.0, 0.97, 0.92 ) * ( 1.0 + sp.x * 0.9 );`:`	let albedo = mix( land, sea, wet );`}
	let nSurf = mix( n, vec3f( 0.0, 1.0, 0.0 ), wet );
	// heightfield sun shadow at the ground (same filtering as terrainSunShadowAt)
	let top = max( h, frame.seaLevel );
	let vis = terrainSunShadowAt( vec3f( xz.x, top, xz.y ) );
	let E = max( dot( nSurf, L ), 0.0 ) * vis * smoothstep( -0.02, 0.05, L.y );
	let o = max( albedo * E - ${n?n.envGround.toFixed(4):Tt} * max( L.y, 0.0 ), vec3f( 0.0 ) );
	textureStore( gbRawOut, vec2u( gid.xy ), vec4f( o, top ) );
}
`}),u=[1,4,6,4,1],d=``;for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++)d+=`	sum += textureLoad( gbRaw, clamp( c + vec2i( ${t}, ${e} ), vec2i( 0 ), vec2i( 511 ) ), 0 ) * ${(u[t+2]*u[e+2]/256).toFixed(8)};\n`;let p=new Ee({label:`Ground Bounce Blur`,bindings:{gbRaw:{texture:i,sampleType:`unfilterable-float`},gbMapOut:{storageTexture:a,access:`write`}},workgroupSize:[8,8,1],code:`
@compute @workgroup_size( WG_X, WG_Y, WG_Z )
fn main( @builtin( global_invocation_id ) gid: vec3u ) {
	let c = vec2i( gid.xy );
	var sum = vec4f( 0.0 );
${d}	textureStore( gbMapOut, vec2u( gid.xy ), sum );
}
`}),h=()=>{s.value.copy(D.sunDir.value),l.dispatch([Ct/8,Ct/8,1]),p.dispatch([Ct/8,Ct/8,1]),c.value=1},_=!1,v=e.updateSunShadow.bind(e);e.updateSunShadow=(e,t=!1)=>{let n=v(e,t);return(n||!_)&&h(e),_=!0,n};let y=t&&t.module?`let cloud = cloudsShadow( P.xz );`:`let cloud = 1.0;`;return Dt.module=new o({name:`hook-bounce`,deps:[m,e.module,...t&&t.module?[t.module]:[]],uniforms:Et,uniformName:`groundBounceParams`,bindings:{groundBounceMap:{texture:a,sampleType:`unfilterable-float`}},code:`
fn hookBounce( P: vec3f, Nw: vec3f ) -> vec3f {
#if IS_WATER || NO_GROUND_BOUNCE
	return vec3f( 0.0 );
#else
	let view = sat( Nw.y * -0.5 + 0.5 );
	var E = vec3f( 0.0 );
	if ( view > 0.03 && P.y > frame.seaLevel - 0.3 && groundBounceParams.strength > 0.0 && groundBounceParams.ready > 0.0 ) {

		let st = clamp( terrainUvOf( P.xz ) * ${Ct}.0 - 0.5, vec2f( 0.0 ), vec2f( ${Ct}.0 - 1.001 ) );
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
		${y}
		// a face turned away from a low sun looks at the ground its object shades (a long shadow)
		let Lh = frame.sunDir.xz / max( length( frame.sunDir.xz ), 1e-3 );
		let selfShade = 1.0 - sat( -dot( Nw.xz, Lh ) ) * sat( 1.0 - frame.sunDir.y ) * 0.6;
		E = s.xyz * frame.sunColor * cloud * ( view * fade * selfShade * groundBounceParams.strength * ${wt} );

	}
	// the lighting adds hookBounce * diffuse colour: irradiance / PI (three: E * diffuse / PI)
	return E * INV_PI;
#endif
}
`}),f.set(`bounce`,Dt.module),{bake:h,map:a,raw:i}}new A,new k,new j,new ge,new k;var At={gelcoat:15855334,lining:15328988,deck:14867919,antifouling:8002837,stainless:13685718};At.stainless;var jt={wallT:.045,wsBottomY:1.48,wsTopY:2.24,roofUnderY:2.31,roofZ0:-.95,roofZ1:1.34,winBottom:1.56,winTop:2.12,dash:{zFace:.98,yKnee:1.08,zTop:1.16,yTop:1.4,zBack:1.41,halfW:1.1},helmX:-.55,seatZ:.22};At.stainless;var Mt={x:jt.helmX,z:jt.seatZ},Nt=1.62,Pt=Nt*.1,Ft=.3,It=1.75,Lt=1.35,Rt=1.1,zt=new k,Bt=new k,L=new k,Vt=new k,Ht=new j,Ut=new ge(0,0,0,`YXZ`),Wt=new k(0,1,0),Gt=new j,Kt=new j,qt=new j,Jt=new k,Yt=.24,Xt=.36,Zt=.75,Qt=class{constructor({camera:e,input:t,terrain:n,colliders:r,query:i,boat:a,reef:o=null,audio:s=null}){this.camera=e,this.input=t,this.terrain=n,this.colliders=r,this.query=i,this.boat=a,this.reef=o,this.audio=s,this.mode=`walk`,this.gravity=9.81,this.jumpSpeed=4.6,this.walkRadius=2850,this.camMode=`third`;let c=F.start||F.spawn;this.position=new k().copy(c.position),this.position.y=Math.max(n.heightAt(this.position.x,this.position.z),r?r.groundHeightAt(this.position.x,this.position.z,50):-1/0),this.velocity=new k,this.yaw=c.yaw,this.pitch=-.05,this.grounded=!1,this.bob=0,this.stepDist=0,this.waterH=0,this.waterMean=null,this.wade=0,this.camOff=0,this.camOffV=0,this._camY=null,this.floating=!0,this.slot=i.allocate(`player`,1),this.prompt=null,this.surface=`sand`,this.orbitYaw=0,this.orbitPitch=.22,this.orbitDist=13,this.helmYaw=0,this.helmPitch=-.05,this.camPos=new k,this.camInit=!1,this.wasUnder=!1,this.deckPos=new k,this.deckVel=new k,this.deckYaw=0,this.deckGrounded=!0,this._ashore=null,this._ashoreT=0,this.busy=!1}getViewDir(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}waterHeight(){let e=this.query;if(!e.cpuValid)return 0;let t=e.cpu[this.slot*4];return Number.isFinite(t)?t:this.waterH||0}groundAt(e,t,n){let r=this.terrain.heightAt(e,t),i=this.colliders.groundHeightAt(e,t,n);return i>r&&(r=i),this.reef&&this.reef.floorHeightAt&&(r=Math.max(r,this.reef.floorHeightAt(e,t))),r}nearBoat(){if(!this.boat)return!1;let e=this.boat.toWorld(this.boat.model.boardPoint,zt),t=Math.hypot(e.x-this.position.x,e.z-this.position.z),n=Math.abs(e.y-this.position.y);return t<4.2&&n<3.2}update(e){let t=this.input;if(this.query.setPoint(this.slot,this.position.x,this.position.z),this.waterH=this.waterHeight(),this.waterMean=this.waterMean===null?this.waterH:this.waterMean+(this.waterH-this.waterMean)*(1-Math.exp(-e/4)),this.prompt=null,this.mode===`boat`){this.updateBoat(e);return}if(this.mode===`deck`){this.updateDeck(e);return}let n=t.consumeLook();if(this.yaw-=n.x*.0022,this.pitch=E.clamp(this.pitch-n.y*.0022,-1.5,1.5),this.nearBoat()&&!this.busy&&(this.prompt={key:`E`,text:`Board boat`},t.hit(`KeyE`))){this.boardBoat();return}let r=this.mode;this.mode===`walk`?this.updateWalk(e):this.updateSwim(e);let i=this.position.clone();this.mode===`walk`?i.y+=Nt+Math.sin(this.bob)*.035*(1-.6*this.wade):i.y+=Pt,this._camY===null||this.camera.position.y!==this._camY?(this.camOff=0,this.camOffV=0):this.mode!==r&&(this.camOff=this._camY-i.y);let a=Math.exp(-6*e),o=(this.camOffV+6*this.camOff)*e;this.camOff=(this.camOff+o)*a,this.camOffV=(this.camOffV-6*o)*a,i.y+=this.camOff,this.camera.position.copy(i),this._camY=this.camera.position.y,this.camera.quaternion.setFromEuler(Ut.set(this.pitch,this.yaw,0))}updateWalk(e){let t=this.input;L.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),Vt.set(-L.z,0,L.x);let n=new k;t.down(`KeyW`)&&n.add(L),t.down(`KeyS`)&&n.sub(L),t.down(`KeyD`)&&n.add(Vt),t.down(`KeyA`)&&n.sub(Vt),n.lengthSq()>0&&n.normalize();let r=this.waterH-this.position.y,i=E.clamp(r/1.2,0,1);this.wade=i;let a=t.down(`ShiftLeft`)||t.down(`ShiftRight`),o=(a?6.2:3)*E.lerp(1,.42,i),s=this.grounded?14:2.5,c=1-Math.exp(-s*e);this.velocity.x+=(n.x*o-this.velocity.x)*c,this.velocity.z+=(n.z*o-this.velocity.z)*c,this.grounded&&t.hit(`Space`)&&r<.9&&(this.velocity.y=this.jumpSpeed,this.grounded=!1),this.velocity.y-=this.gravity*e,r>0&&this.velocity.multiplyScalar(Math.exp(-e*r*.8));let l=this.position,u=l.clone();if(l.addScaledVector(this.velocity,e),this.colliders.resolveCapsule(l,Ft,It,.4),this.terrain.grassland||this.terrain.moon){let e=Math.hypot(l.x,l.z),t=this.walkRadius;e>t&&(l.x*=t/e,l.z*=t/e)}let d=this.groundAt(l.x,l.z,l.y+.45);l.y<=d?(l.y=d,this.velocity.y<0&&(this.velocity.y=0),this.grounded=!0):this.grounded=l.y-d<.06;let f=Math.hypot(l.x-u.x,l.z-u.z);if(this.grounded){this.bob+=f*2.4,this.stepDist+=f;let e=a?.9:.62;this.stepDist>e&&(this.stepDist=0,this.surface=this.surfaceType(r),this.audio&&this.audio.footstep(this.surface))}if(this.waterMean-l.y>Lt){let e=this.grounded;this.mode=`swim`,e&&(l.y=Math.max(l.y,this.waterH-Pt+.1)),this.velocity.y=e?0:Math.max(this.velocity.y*.3,-2.5),this.audio&&this.audio.splash(e?.2:.5,l)}}surfaceType(e){let t=this.position;if(e>.12)return`water`;let n=this.colliders.groundHeightAt(t.x,t.z,t.y+.1)>this.terrain.heightAt(t.x,t.z)+.05;if(this.terrain.grassland)return n?`rock`:`grass`;if(this.terrain.moon)return n?`wood`:`regolith`;if(n)return`wood`;let r=this.terrain.heightAt(t.x,t.z);return r<.6?`wetsand`:r>3.6?`grass`:`sand`}updateSwim(e){let t=this.input,n=this.position,r=this.waterH;L.set(0,0,-1).applyEuler(Ut.set(this.pitch,this.yaw,0)),Vt.set(-Math.cos(this.yaw),0,Math.sin(this.yaw)).negate();let i=new k;t.down(`KeyW`)&&i.add(L),t.down(`KeyS`)&&i.sub(L),t.down(`KeyD`)&&i.add(Vt),t.down(`KeyA`)&&i.sub(Vt),t.down(`Space`)&&(i.y+=1),(t.down(`KeyC`)||t.down(`ControlLeft`))&&--i.y,i.lengthSq()>0&&i.normalize(),this.floating&&n.y>r-.45&&i.y>-.25&&!t.down(`KeyC`)&&(i.y=Math.max(i.y,0));let a=t.down(`ShiftLeft`)||t.down(`ShiftRight`)?2.5:1.5,o=1-Math.exp(-e*3);this.velocity.lerp(i.multiplyScalar(a),o);let s=r-Pt+.1;t.down(`KeyC`)||t.down(`KeyW`)&&this.pitch<-.35||i.y<-.1?this.floating=!1:n.y>s-.15&&(this.floating=!0),this.floating&&(n.y+=(s-n.y)*(1-Math.exp(-e*5)),this.velocity.y>0&&(this.velocity.y*=.5)),n.addScaledVector(this.velocity,e),n.y=Math.min(n.y,r+.05),this.colliders.resolveCapsule(n,Ft,1,0);let c=this.groundAt(n.x,n.z,n.y+.3);n.y<c+.25&&(n.y=c+.25),this.stepDist+=this.velocity.length()*e,this.stepDist>1.3&&(this.stepDist=0,this.audio&&this.audio.swimStroke());let l=this.camera.position.y<r-.05;if(l!==this.wasUnder&&this.audio&&(l?this.audio.submerge():this.audio.emerge()),this.wasUnder=l,this.waterMean-c<Rt&&(this.mode=`walk`,n.y=c,this.velocity.set(this.velocity.x,0,this.velocity.z)),this.colliders.boxes){for(let r of this.colliders.boxes)if(r.tag===`ladder`&&Math.hypot(r.center.x-n.x,r.center.z-n.z)<1.1){if(this.prompt={key:`Space`,text:`Climb ladder`},t.down(`Space`)||t.down(`KeyW`)){let t=this.colliders.groundHeightAt(r.center.x,r.center.z,10);if(t>n.y&&(n.y+=e*1.6,n.y>t-1)){let e=F.pier.deckHeight;n.set(r.center.x-Math.sign(r.center.x-F.pier.x)*1.2,e,r.center.z),this.mode=`walk`,this.velocity.set(0,0,0)}}break}}}boardBoat(){let e=this.boat;this.mode=`deck`,this.deckPos.copy(e.model.boardPoint),this.deckVel.set(0,0,0),this.deckYaw=this.yaw-(e.getYaw()+Math.PI),this.deckGrounded=!0,this._ashore=null,this._ashoreT=0,this.velocity.set(0,0,0),this._camY=null,this.deckToWorld()}takeHelm(){this.mode=`boat`,this.boat.driven=!0,this.boat.moored=!1,this.helmYaw=0,this.helmPitch=-.05,this.orbitYaw=this.boat.getYaw()+Math.PI,this.camInit=!1,this.audio&&this.audio.engineStart()}leaveHelm(){let e=this.boat;e.driven=!1,e.throttle=0,this.mode=`deck`,this.deckPos.set(Mt.x+.45,e.model.lines.deckY,Mt.z-.1),this.deckVel.set(0,0,0),this.deckYaw=this.helmYaw,this.pitch=this.helmPitch,this.deckGrounded=!0,this._camY=null,this.audio&&this.audio.engineStop(),this.deckToWorld()}enterBoat(){this.boardBoat(),this.takeHelm()}exitBoat(e=null,t=0){let n=this.boat,r=n.driven;n.driven=!1,n.throttle=0;let i=t?null:this.ashoreTarget(),a=F.boatDock.position;if(n.position.distanceTo(a)<14&&n.speed<1.5&&(n.moored=!0,n.mooring.anchor.set(n.position.x,0,n.position.z),n.mooring.heading=n.getYaw()),e&&(i=e),i)this.position.set(i.out.x,i.g,i.out.z),this.mode=`walk`;else{let e=n.toWorld(new k(2.2*(t||1),0,0),new k);this.waterH=this.waterMean=n.position.y,this.position.set(e.x,n.position.y-.2,e.z),this.mode=`swim`,this.audio&&this.audio.splash(.8,this.position)}this.velocity.set(0,0,0),this.yaw=n.getYaw()+Math.PI,this._camY=null,this.audio&&r&&this.audio.engineStop()}ashoreTarget(){let e=this.boat,t=this.query.cpuValid?this.query.cpu[0]:0,n=Bt.set(1,0,0).applyQuaternion(e.quaternion).setY(0).normalize(),r=n.x,i=n.z,a=null,o=1/0;for(let n of e.model.exitPoints){let s=e.toWorld(n,new k),c=Math.sign(n.x)||1;for(let e of[.9,1.4,2]){let l=new k(s.x+r*c*e,s.y,s.z+i*c*e),u=this.groundAt(l.x,l.z,s.y+2.5),d=u-s.y;if(d>1.7||d<-1.2||u<t-.3)continue;let f=Math.abs(d)+e*.2;f<o&&(o=f,a={out:l,g:u,ep:n})}}return a}deckBase(e){let t=this.boat;return Gt.setFromAxisAngle(Wt,t.getYaw()+Math.PI),Kt.copy(t.quaternion).multiply(qt.setFromAxisAngle(Wt,Math.PI)),e.slerpQuaternions(Kt,Gt,.55)}deckToWorld(){let e=this.boat;e.toWorld(this.deckPos,this.position),this.yaw=e.getYaw()+Math.PI+this.deckYaw}deckGroundAt(e,t,n){let r=this.boat.model.lines.deckY;for(let i of this.boat.model.colliders){if(!i.walkable||Math.abs(e-i.center.x)>i.half.x||Math.abs(t-i.center.z)>i.half.z)continue;let a=i.center.y+i.half.y;a<=n&&a>r&&(r=a)}return r}updateDeck(e){let t=this.input,n=this.boat,r=n.model.lines,i=t.consumeLook();this.deckYaw-=i.x*.0022,this.pitch=E.clamp(this.pitch-i.y*.0022,-1.5,1.5);let a=Math.sin(this.deckYaw),o=Math.cos(this.deckYaw);L.set(a,0,o),Vt.set(-o,0,a),Jt.set(0,0,0),t.down(`KeyW`)&&Jt.add(L),t.down(`KeyS`)&&Jt.sub(L),t.down(`KeyD`)&&Jt.add(Vt),t.down(`KeyA`)&&Jt.sub(Vt),Jt.lengthSq()>0&&Jt.normalize();let s=t.down(`ShiftLeft`)?2.6:1.6,c=1-Math.exp(-12*e),l=this.deckVel;l.x+=(Jt.x*s-l.x)*c,l.z+=(Jt.z*s-l.z)*c,this.deckGrounded&&t.hit(`Space`)&&(l.y=3.2,this.deckGrounded=!1),l.y-=9.81*e;let u=this.deckPos,d=u.x,f=u.z;u.addScaledVector(l,e);for(let e=0;e<2;e++)for(let e of n.model.colliders){if(!e.solid)continue;let t=e.center.y+e.half.y,n=e.center.y-e.half.y;if(t<=u.y+Xt||n>=u.y+It)continue;let r=e.half.x+Yt,i=e.half.z+Yt,a=u.x-e.center.x,o=u.z-e.center.z;if(Math.abs(a)>=r||Math.abs(o)>=i)continue;let s=r-Math.abs(a),c=i-Math.abs(o);s<c?(u.x+=Math.sign(a||d-e.center.x||1)*s,l.x=0):(u.z+=Math.sign(o||f-e.center.z||1)*c,l.z=0)}u.z=E.clamp(u.z,r.zAft+r.shell+Yt,4);let p=Math.max(.15,r.halfBreadth(r.tAtSheerZ(u.z),Math.max(u.y,r.deckY))-r.shell-Yt);u.x=E.clamp(u.x,-p,p);let m=this.deckGroundAt(u.x,u.z,u.y+Xt);u.y<=m?(u.y=m,l.y<0&&(l.y=0),this.deckGrounded=!0):this.deckGrounded=u.y-m<.04;let h=Math.hypot(u.x-d,u.z-f);this.deckGrounded&&(this.bob+=h*2.4,this.stepDist+=h,this.stepDist>.6&&(this.stepDist=0,this.audio&&this.audio.footstep(`wood`))),this.deckToWorld();let g=Mt.x,_=Mt.z,v=Math.hypot(u.x-g,u.z-_)<Zt&&!this.busy;if(this._ashoreT-=e,this._ashoreT<=0&&(this._ashoreT=.25,this._ashore=n.speed<2.5?this.ashoreTarget():null),v){if(this.prompt={key:`E`,text:`Take the helm`},t.hit(`KeyE`)){this.takeHelm();return}}else if(!this.busy){let e=this._ashore&&this._ashore.ep,r=n.model.exitPoints.some(e=>Math.hypot(u.x-e.x,u.z-e.z)<1.3);if(e&&Math.hypot(u.x-e.x,u.z-e.z)<1.3){if(this.prompt={key:`E`,text:`Step ashore`},t.hit(`KeyE`)){this.exitBoat(this._ashore);return}}else if(r&&(this.prompt={key:`E`,text:`Jump overboard`},t.hit(`KeyE`))){this.exitBoat(null,Math.sign(u.x)||1);return}}let y=zt.set(u.x,u.y+Nt+Math.sin(this.bob)*.02,u.z);n.toWorld(y,this.camera.position),this._camY=this.camera.position.y,this.deckBase(Ht),this.camera.quaternion.copy(Ht).multiply(Gt.setFromEuler(Ut.set(this.pitch,this.deckYaw,0)))}updateBoat(e){let t=this.input,n=this.boat,r=t.consumeLook(),i=t.consumeWheel();if(t.hit(`KeyV`)&&(this.camMode=this.camMode===`first`?`third`:`first`),t.hit(`KeyE`)){this.leaveHelm();return}let a=0;t.down(`KeyW`)&&(a=t.down(`ShiftLeft`)?1:.7),t.down(`KeyS`)&&(a=-.6);let o=0;if(t.down(`KeyA`)&&(o+=1),t.down(`KeyD`)&&--o,n.setInput(a,o,e),this.prompt={key:`E`,text:`Leave helm   ·   V  camera`},n.toWorld(n.model.helmEye,this.position),this.position.y-=Nt,this.camMode===`first`){this.helmYaw=E.clamp(this.helmYaw-r.x*.0022,-2.2,2.2),this.helmPitch=E.clamp(this.helmPitch-r.y*.0022,-1.2,1);let e=n.toWorld(n.model.helmEye,new k);this.camera.position.copy(e);let t=n.quaternion,i=new j().setFromAxisAngle(new k(0,1,0),n.getYaw()+Math.PI),a=new j().slerpQuaternions(t.clone().multiply(new j().setFromAxisAngle(new k(0,1,0),Math.PI)),i,.55),o=new j().setFromEuler(Ut.set(this.helmPitch,this.helmYaw,0));this.camera.quaternion.copy(a).multiply(o)}else{if(this.orbitYaw-=r.x*.003,this.orbitPitch=E.clamp(this.orbitPitch+r.y*.003,-.05,1.2),this.orbitDist=E.clamp(this.orbitDist*(1+i*.08),6,40),n.speed>2&&Math.abs(r.x)<.5){let t=n.getYaw()+Math.PI-this.orbitYaw;t=Math.atan2(Math.sin(t),Math.cos(t)),this.orbitYaw+=t*(1-Math.exp(-e*.8))}let t=n.toWorld(new k(0,1.4,0),new k),a=new k(Math.sin(this.orbitYaw)*Math.cos(this.orbitPitch),Math.sin(this.orbitPitch),Math.cos(this.orbitYaw)*Math.cos(this.orbitPitch)).multiplyScalar(this.orbitDist),o=t.clone().add(a);o.y=Math.max(o.y,this.waterH+.7),this.camInit||=(this.camPos.copy(o),!0),this.camPos.lerp(o,1-Math.exp(-e*6)),this.camera.position.copy(this.camPos),this.camera.lookAt(t)}}},$t=`./moon/`,en={regolithA:{file:`moon_dusted_02_a.jpg`,srgb:!0,flat:[128,126,122,255]},regolithNR:{file:`moon_dusted_02_nr.jpg`,srgb:!1,flat:[128,128,235,255]},moonMacroA:{file:`moon_01_a.jpg`,srgb:!0,flat:[120,118,115,255]},moonMacroNR:{file:`moon_01_nr.jpg`,srgb:!1,flat:[128,128,200,255]},mapleA:{file:`white_maple_veneer_a.jpg`,srgb:!0,flat:[214,178,128,255]},mapleNR:{file:`white_maple_veneer_nr.jpg`,srgb:!1,flat:[128,128,120,255]},concreteA:{file:`brushed_concrete_a.jpg`,srgb:!0,flat:[150,146,140,255]},concreteNR:{file:`brushed_concrete_nr.jpg`,srgb:!1,flat:[128,128,210,255]},earthDay:{file:`earth_day.jpg`,srgb:!0,flat:[30,60,120,255]},earthClouds:{file:`earth_clouds.jpg`,srgb:!1,flat:[60,60,60,255]}};async function tn(e){if(globalThis.__assetFile)return globalThis.__assetFile(e);let t=await fetch(e);if(!t.ok)throw Error(e+` `+t.status);return t.arrayBuffer()}function nn(e,t,n){let r=new g({label:e,width:t.width,height:t.height,format:n?`rgba8unorm-srgb`:`rgba8unorm`,mips:!0,usage:[`sample`,`copyDst`],data:t.data});return r.getGPU(),Oe(r),r}var rn=null;function an(){return rn||=(async()=>{let e={},t=[];return await Promise.all(Object.entries(en).map(async([n,r])=>{let i;try{if(i=await ne(new Uint8Array(await tn($t+r.file)),`image/jpeg`),!i||!i.width)throw Error(`empty image`)}catch{t.push(n);let e=new Uint8Array(64);for(let t=0;t<16;t++)e.set(r.flat,t*4);i={width:4,height:4,data:e}}e[n]=nn(`moon_`+n,i,r.srgb)})),t.length&&console.warn(`月球保龄球: textures not loaded, flat stand-ins used:`,t.join(`, `)),{textures:e,failed:t}})()}var on=.165,sn=.1,cn=170,R=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},ln=class{constructor({textures:e,sunDir:t,earthDir:n}){this.textures=e;let r=n.clone().normalize(),i=new k(0,1,0),a=r.clone().negate(),o=i.clone().addScaledVector(r,-i.dot(r)).normalize(),s=new k().crossVectors(o,a).normalize(),l=.38,u=.28,d=o.clone().multiplyScalar(Math.cos(l)).addScaledVector(s,Math.sin(l)).normalize();d.multiplyScalar(Math.cos(u)).addScaledVector(a,Math.sin(u)).normalize();let f=a.clone().addScaledVector(d,-a.dot(d)).normalize(),p=new k().crossVectors(d,f).normalize(),m=new k(.72,.5,-.48).normalize(),h=new k(-.55,.62,.55).normalize(),g=new k().crossVectors(m,h).normalize();this.params=new c(`MoonSkyParams`,{sunDir:[`vec3f`,t.clone()],sunDiskIntensity:[`f32`,1],sunIllum:[`vec3f`,new A(1,.985,.96).multiplyScalar(11)],starIntensity:[`f32`,1],earthDir:[`vec3f`,r],earthSpin:[`f32`,.26],earthX:[`vec3f`,p],cloudSpin:[`f32`,0],earthY:[`vec3f`,d],pixelAngle:[`f32`,8e-4],earthZ:[`vec3f`,f],milkyWay:[`f32`,1],mwPole:[`vec3f`,g],envLod:[`f32`,4.5],mwCenter:[`vec3f`,m],groundAlbedo:[`f32`,sn]},{label:`moonSky`});let _=this.params.fields;this.sunDir=_.sunDir,this.sunIllum=_.sunIllum,this.earthSpin=_.earthSpin,this.cloudSpin=_.cloudSpin,this.pixelAngle=_.pixelAngle,this.starIntensity=_.starIntensity,this.sunDiskIntensity=_.sunDiskIntensity,this.atmosphere={sunDir:_.sunDir},this.clouds=null,this._module=null,this._background=null}get module(){return this._module||=this._buildModule(),this._module}update(e,t,n){this.earthSpin.value+=2*Math.PI/2400*e,this.cloudSpin.value+=2*Math.PI/9e3*e,t&&n&&(this.pixelAngle.value=t.fov*Math.PI/180/n)}_buildModule(){let e=this.textures;return new o({name:`sky`,deps:[m],uniforms:this.params,uniformName:`skyParams`,bindings:{moonEarthDay:{texture:e.earthDay},moonEarthClouds:{texture:e.earthClouds}},code:`
fn skyHash13( p: vec3f ) -> f32 {
	var p3 = fract( p * vec3f( 0.1031, 0.1030, 0.0973 ) );
	p3 += dot( p3, p3.yzx + 33.33 );
	return fract( ( p3.x + p3.y ) * p3.z );
}

// sun disk (no atmosphere: the full solar radiance, clamped for fp16) with a faint lens glow
fn skySunDisk( dir: vec3f ) -> vec3f {
	let cosA = dot( dir, skyParams.sunDir );
	let ang = acos( clamp( cosA, -1.0, 1.0 ) );
	let r = ang / ${R(je)};
	let mask = smoothstep( 1.0, 0.9, r );
	let mu = sqrt( max( 1.0 - r * r, 0.0 ) );
	let limb = 1.0 - 0.55 * ( 1.0 - mu );
	let glow = exp( -ang * 90.0 ) * 0.35 + exp( -ang * 18.0 ) * 0.012;
	return skyParams.sunIllum / ${R(11)} * ( mask * limb * 2500.0 + glow ) * skyParams.sunDiskIntensity;
}

fn galactic( dir: vec3f ) -> vec2f {
	let b = asin( clamp( dot( dir, skyParams.mwPole ), -1.0, 1.0 ) );
	let gy = cross( skyParams.mwPole, skyParams.mwCenter );
	let l = atan2( dot( dir, gy ), dot( dir, skyParams.mwCenter ) );
	return vec2f( l, b );
}

// Stars: one candidate per cell of a cube-face grid, power-law magnitudes, denser along the band.
// Space: no extinction, no scintillation, all of them out.
fn skyStars( dir: vec3f ) -> vec3f {
	let a = abs( dir );
	let onX = a.x > a.y && a.x > a.z;
	let onY = a.y > a.z;
	let face = select( select( sign( dir.z ) + 8.0, sign( dir.y ) + 5.0, onY ), sign( dir.x ) + 2.0, onX );
	let uv = select( select( dir.xy / a.z, dir.xz / a.y, onY ), dir.yz / a.x, onX ) * ${R(cn)};
	let cell = vec3f( floor( uv ), face );
	let h = skyHash13( cell );
	let gb = galactic( dir ).y;
	let band = exp( -gb * gb * 30.0 );
	let has = h < band * 0.05 + 0.03;
	let uc = max( skyHash13( cell + 7.7 ), 2e-4 );
	let sp = ( floor( uv ) + vec2f( skyHash13( cell + 3.1 ), skyHash13( cell + 5.7 ) ) * 0.5 + 0.25 ) / ${R(cn)};
	let sdir = normalize( select( select( vec3f( sp, sign( dir.z ) ), vec3f( sp.x, sign( dir.y ), sp.y ), onY ), vec3f( sign( dir.x ), sp ), onX ) );
	let d = length( dir - sdir ) * ${R(cn)};
	let flux = pow( uc, -0.62 );
	let size = log2( flux ) * 0.07 + 1.0;
	let psf = exp( -d * d / ( size * size ) * 40.0 ) / ( size * size );
	let col = mix( vec3f( 1.0, 0.78, 0.58 ), vec3f( 0.72, 0.84, 1.0 ), skyHash13( cell + 17.0 ) ) * 0.45 + 0.55;
	return col * ( psf * flux * select( 0.0, 1.0, has ) * 0.05 ) * skyParams.starIntensity;
}

// Milky Way: a soft band with clumpy structure, a brighter bulge around the galactic centre and
// dark dust lanes along its middle
fn skyMilkyWay( dir: vec3f ) -> vec3f {
	let g = galactic( dir );
	let b = g.y; let l = g.x;
	let core = exp( -b * b / 0.018 );
	let wide = exp( -b * b / 0.16 ) * 0.35;
	let bulge = exp( -( l * l ) / 0.45 - b * b / 0.06 ) * 1.6;
	let base = core + wide + bulge;
	if ( base < 0.004 ) { return vec3f( 0.0 ); }
	let q = dir * 7.0;
	let n1 = perlin3( q ) * 0.5 + perlin3( q * 2.3 + 4.1 ) * 0.3 + perlin3( q * 5.1 - 2.7 ) * 0.2;
	let clump = sat( 0.55 + n1 * 0.9 );
	let dn = perlin3( dir * 11.0 + 9.3 ) * 0.6 + perlin3( dir * 26.0 - 3.3 ) * 0.4;
	let dust = smoothstep( -0.05, 0.4, dn ) * exp( -b * b / 0.006 ) * 0.8;
	let tint = mix( vec3f( 0.62, 0.7, 0.95 ), vec3f( 1.0, 0.86, 0.68 ), sat( bulge * 0.8 + core * 0.15 ) );
	return tint * ( base * clump * ( 1.0 - dust ) * 0.03 * skyParams.milkyWay );
}

// Earth: rgb = radiance, a = coverage (1 on the disc, 0..1 in the atmosphere limb). lod: texture
// level of detail at the disc centre.
fn skyEarth( dir: vec3f, lod: f32 ) -> vec4f {
	let e = skyParams.earthDir;
	let rs = ${R(Math.sin(on))};
	let ra = rs * 1.022;
	let b = dot( dir, e );
	if ( b < 0.0 ) { return vec4f( 0.0 ); }
	let h2 = max( 1.0 - b * b, 0.0 ); // squared distance of the ray from the centre
	if ( h2 > ra * ra ) { return vec4f( 0.0 ); }
	let s = skyParams.sunDir;
	let E = skyParams.sunIllum;
	var col = vec3f( 0.0 );
	var cover = 0.0;
	if ( h2 < rs * rs ) {
		let t = b - sqrt( rs * rs - h2 );
		let n = ( dir * t - e ) / rs;
		let mu = sat( dot( n, -dir ) );
		// earth-fixed coordinates
		let q = vec3f( dot( n, skyParams.earthX ), dot( n, skyParams.earthY ), dot( n, skyParams.earthZ ) );
		let lat = asin( clamp( q.y, -1.0, 1.0 ) );
		let lon = atan2( q.x, q.z ) + skyParams.earthSpin;
		let uv = vec2f( fract( lon * ${R(1/(2*Math.PI))} + 0.5 ), 0.5 - lat * ${R(1/Math.PI)} );
		let lodE = lod + log2( 1.0 / max( mu, 0.08 ) ) * 0.5;
		let alb = textureSampleLevel( moonEarthDay, smpLinearRepeat, uv, lodE ).rgb;
		// clouds: a layer ~40 km up (parallax toward the limb), drifting slowly
		let tc = b - sqrt( max( rs * rs * 1.012 - h2, 0.0 ) );
		let nc = normalize( dir * tc - e );
		let qc = vec3f( dot( nc, skyParams.earthX ), dot( nc, skyParams.earthY ), dot( nc, skyParams.earthZ ) );
		let lonc = atan2( qc.x, qc.z ) + skyParams.earthSpin + skyParams.cloudSpin;
		let uvc = vec2f( fract( lonc * ${R(1/(2*Math.PI))} + 0.5 ), 0.5 - asin( clamp( qc.y, -1.0, 1.0 ) ) * ${R(1/Math.PI)} );
		let cloud = textureSampleLevel( moonEarthClouds, smpLinearRepeat, uvc, lodE ).r;
		// cloud shadow: the layer sampled toward the sun
		let ns = normalize( n + s * 0.012 );
		let qs = vec3f( dot( ns, skyParams.earthX ), dot( ns, skyParams.earthY ), dot( ns, skyParams.earthZ ) );
		let uvs = vec2f( fract( ( atan2( qs.x, qs.z ) + skyParams.earthSpin + skyParams.cloudSpin ) * ${R(1/(2*Math.PI))} + 0.5 ), 0.5 - asin( clamp( qs.y, -1.0, 1.0 ) ) * ${R(1/Math.PI)} );
		let cshadow = textureSampleLevel( moonEarthClouds, smpLinearRepeat, uvs, lodE + 1.0 ).r;
		let ndl = dot( n, s );
		let lambert = max( ndl, 0.0 );
		var ground = alb * lambert * ( 1.0 - cshadow * 0.55 ) * E * INV_PI;
		// sun glint on the open ocean (dark, blue texels)
		let ocean = smoothstep( 0.06, 0.02, luminance( alb ) ) * step( alb.r, alb.b );
		let R = reflect( dir, n );
		let glint = pow( max( dot( R, s ), 0.0 ), 900.0 ) * 60.0 + pow( max( dot( R, s ), 0.0 ), 60.0 ) * 0.6;
		ground += vec3f( 1.0, 0.95, 0.85 ) * glint * ocean * ( 1.0 - cloud ) * lambert * E * 0.02;
		let ca = sat( cloud * 1.15 );
		let cloudL = vec3f( 0.86 ) * smoothstep( -0.02, 0.15, ndl ) * max( ndl, 0.0 ) * E * INV_PI;
		var surf = mix( ground, cloudL, ca );
		// Rayleigh haze: bluer and brighter toward the limb on the day side
		let haze = pow( 1.0 - mu, 2.5 ) * 0.75 + 0.06;
		surf = mix( surf, vec3f( 0.32, 0.55, 1.0 ) * smoothstep( -0.15, 0.25, ndl ) * E * INV_PI * 0.38, sat( haze ) * 0.55 );
		col = surf;
		cover = 1.0;
	}
	// thin atmosphere limb: glow by the chord through the shell, lit where the limb faces the sun
	let h = sqrt( h2 );
	let shell = sqrt( max( ra * ra - h2, 0.0 ) ) - select( 0.0, sqrt( max( rs * rs - h2, 0.0 ) ), h2 < rs * rs );
	let chord = shell / ( ra - rs ) * 0.18;
	let pc = normalize( dir * b - e );
	let lit = smoothstep( -0.25, 0.35, dot( pc, s ) );
	let limb = vec3f( 0.28, 0.52, 1.0 ) * ( 1.0 - exp( -chord * 1.6 ) ) * lit * E * INV_PI * 0.55;
	let edge = smoothstep( ra, rs, h );
	return vec4f( col + limb * select( edge, 1.0, h2 < rs * rs ), cover );
}

// regolith seen below the crater rim (environment map only)
fn skyGround( dir: vec3f ) -> vec3f {
	let g = skyParams.groundAlbedo * max( skyParams.sunDir.y, 0.0 ) * INV_PI;
	return skyParams.sunIllum * g * vec3f( 0.98, 0.97, 0.95 ) * ( 1.0 - smoothstep( 0.03, 0.1, dir.y ) );
}

// the sky behind the Earth: stars + Milky Way (starK scales the point stars)
fn skyBackground( dir: vec3f, starK: f32 ) -> vec3f {
	return skyStars( dir ) * starK + skyMilkyWay( dir ) + vec3f( 0.0004, 0.0005, 0.0008 );
}

fn skySpace( dir: vec3f, starK: f32, lod: f32 ) -> vec3f {
	let ea = skyEarth( dir, lod );
	return skyBackground( dir, starK ) * ( 1.0 - ea.a ) + ea.rgb;
}

fn skyMoon( dir: vec3f ) -> vec3f { return vec3f( 0.0 ); }
fn skyMoonSky( dir: vec3f ) -> vec3f { return vec3f( 0.0 ); }

fn skyRadiance( dir: vec3f, withSun: bool ) -> vec3f {
	var L = skySpace( dir, 1.0, skyParams.envLod );
	if ( withSun ) { L += skySunDisk( dir ); }
	return L;
}

// environment map: no sun disk (the key light is lit directly), a trace of the stars, the Earth,
// and the sunlit regolith below the rim
fn skyRadianceWithClouds( dir: vec3f, withSun: bool ) -> vec3f {
	let gw = 1.0 - smoothstep( 0.03, 0.1, dir.y );
	// v2: no Earth in the environment map: at 128 texels a face its reflection in the lacquered
	// lanes was a soft white smudge (its light on the scene is ~1 % of the sun's: the earthshine term)
	var L = skyBackground( dir, 0.1 ) * ( 1.0 - gw ) + skyGround( dir );
	if ( withSun ) { L += skySunDisk( dir ); }
	return L;
}

fn skyReflectionRadiance( dir: vec3f ) -> vec3f {
	return skyRadianceWithClouds( dir, false );
}

// main view background
fn skyViewRadiance( dir: vec3f ) -> vec3f {
	let lod = log2( max( skyParams.pixelAngle / ${R(2*Math.PI*Math.sin(on)/2048)}, 1.0 ) );
	return skySpace( dir, 1.0, lod ) + skySunDisk( dir );
}
`})}get background(){if(!this._background){let e=new i({label:`moon sky background`,modules:[this.module],colorFormats:v,depthFormat:r,depthCompare:`equal`,depthWrite:!1,depth:0,code:`
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
	let c = frame.viewProjNoJitter * vec4f( dir, 0.0 );
	let p = frame.prevViewProjNoJitter * vec4f( dir, 0.0 );
	let cur = c.xy / max( abs( c.w ), 1e-6 ) * sign( c.w );
	let prev = p.xy / max( abs( p.w ), 1e-6 ) * sign( p.w );
	o.velocity = vec4f( select( vec2f( 0.0 ), ( cur - prev ) * vec2f( 0.5, -0.5 ), c.w > 1e-6 && p.w > 1e-6 ), 0.0, 1.0 );
	o.mask = vec4f( 0.0 );
	return o;
}
`});this._background={pass:e,draw:t=>e.draw(t)}}return this._background}};function un(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var dn=class{constructor(e=1){let t=un(e),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=Math.floor(t()*(e+1)),i=n[e];n[e]=n[r],n[r]=i}this.perm=new Uint8Array(512);for(let e=0;e<512;e++)this.perm[e]=n[e&255];this.grad=new Float32Array(512);for(let e=0;e<256;e++){let n=t()*Math.PI*2;this.grad[e*2]=Math.cos(n),this.grad[e*2+1]=Math.sin(n)}}noise(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=n&255,s=r&255,c=this.perm,l=this.grad,u=c[o+c[s]],d=c[o+1+c[s]],f=c[o+c[s+1]],p=c[o+1+c[s+1]],m=l[u*2]*i+l[u*2+1]*a,h=l[d*2]*(i-1)+l[d*2+1]*a,g=l[f*2]*i+l[f*2+1]*(a-1),_=l[p*2]*(i-1)+l[p*2+1]*(a-1),v=i*i*i*(i*(i*6-15)+10),y=a*a*a*(a*(a*6-15)+10),b=m+(h-m)*v;return(b+(g+(_-g)*v-b)*y)*1.414}fbm(e,t,n=5,r=2,i=.5){let a=0,o=1,s=1,c=0;for(let l=0;l<n;l++)a+=this.noise(e*s+l*17.13,t*s-l*9.71)*o,c+=o,o*=i,s*=r;return a/c}ridged(e,t,n=5){let r=0,i=.5,a=1,o=1;for(let s=0;s<n;s++){let n=1-Math.abs(this.noise(e*a+s*31.7,t*a+s*11.3));n*=n,r+=n*i*o,o=n,i*=.5,a*=2.03}return r}},z=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},fn=(e,t,n)=>Math.min(n,Math.max(t,e)),pn=(e,t,n)=>e+(t-e)*n,B={x:0,z:0,r:260,h:34},mn={start:1650,full:2950,height:120,vary:75};function hn(e,t,n,r,i){let a=e+n.fbm(e/700,t/700,3)*170,o=t+n.fbm(e/700+5.2,t/700-1.3,3)*170,s=n.fbm(a/1100,o/1100,3),c=r.fbm(a/380,o/380,4),l=1-Math.abs(r.noise(a/520+3.7,o/520-8.1)),u=i.fbm(e/140,t/140,3),d=i.noise(e/38+11.1,t/38-4.4),f=34+s*58+c*24+(l*l-.45)*12+u*5+d*.7,p=24-f;f+=2.7*Math.log(1+Math.exp(p/6))-2.7*Math.LN2;let m=e-B.x,h=t-B.z;f+=B.h*Math.exp(-(m*m+h*h)/(B.r*B.r));let g=Math.hypot(e,t);if(g>mn.start){let i=z(mn.start,mn.full,g)**1.5,a=r.fbm(e/520+1.9,t/520+7.3,3)*mn.vary+n.fbm(e/180,t/180,2)*12;f+=i*(mn.height+a)}return fn(f,8,1e4)}var gn=class{constructor(e=11){this.size=F.terrainSize,this.res=F.terrainRes,this.texel=this.size/this.res,this.origin=-this.size/2,this.noise=new dn(e),this.noise2=new dn(e*31+5),this.noise3=new dn(e*131+17);let t=this.res*this.res;this.heights=new Float32Array(t),this.rock=new Float32Array(t),this.sand=new Uint8Array(t),this.path=new Uint8Array(t),this.gully=new Uint8Array(t),this.seagrass=new Uint8Array(t),this.rubble=new Uint8Array(t),this.scarp=new Uint8Array(t),this.rockSites=[],this.pads=[],this.paths=[],this.grassland=!0,this.timings={},this.generate(),this.buildMinMax()}coastDistance(){return{d:-5e3,beachZone:0}}heightFn(e,t){return{h:hn(e,t,this.noise,this.noise2,this.noise3),rock:0}}generate(){let e=this.timings,t=performance.now(),n=this.res/2,r=this.size/n,i=this.origin,a=new Float32Array(n*n);for(let e=0;e<n;e++){let t=i+(e+.5)*r;for(let o=0;o<n;o++)a[e*n+o]=hn(i+(o+.5)*r,t,this.noise,this.noise2,this.noise3)}e.grid=Math.round(performance.now()-t),t=performance.now(),this.heights=We(a,n,!0),e.upsample=Math.round(performance.now()-t),t=performance.now(),this._spawn(),this._outcrops(),e.features=Math.round(performance.now()-t),e.total=e.grid+e.upsample+e.features}_spawn(){let e=-1/0,t=B.x,n=B.z;for(let r=-90;r<=90;r+=3)for(let i=-90;i<=90;i+=3){let a=this.heightAt(B.x+i,B.z+r);a>e&&(e=a,t=B.x+i,n=B.z+r)}this.spawn={x:t,z:n,h:e},F.spawn.position.set(t,e,n),F.start.position.set(t,e,n)}slopeAt(e,t){let n=this.heightAt(e+3,t)-this.heightAt(e-3,t),r=this.heightAt(e,t+3)-this.heightAt(e,t-3);return Math.hypot(n,r)/6}_outcrops(){let e=un(1777),t=this.noise2,n=this.rockSites,r=this.spawn,i=(e,t,i)=>{if(Math.hypot(e-r.x,t-r.z)<45+i)return!1;for(let r of n)if(Math.hypot(e-r.x,t-r.z)<160)return!1;return!0};for(let t=0;t<60;t++){let t=2.3+(e()-.5)*1.2,i=70+e()*50,a=r.x+Math.cos(t)*i,o=r.z+Math.sin(t)*i;if(!(this.slopeAt(a,o)>.3)){n.push({x:a,z:o,r:5+e()*2,h:this.heightAt(a,o),kind:`outcrop`});break}}for(let a=0;a<4e3&&n.length<34;a++){let a=e()*Math.PI*2,o=120+Math.sqrt(e())*2200,s=r.x+Math.cos(a)*o,c=r.z+Math.sin(a)*o,l=this.heightAt(s,c),u=z(-.5,2.5,l-(this.heightAt(s+40,c)+this.heightAt(s-40,c)+this.heightAt(s,c+40)+this.heightAt(s,c-40))*.25),d=z(-.1,.35,t.noise(s/400+2.2,c/400-6.1));if(e()>u*d*.9+.03||this.slopeAt(s,c)>.35)continue;let f=2.5+e()*e()*7;i(s,c,f)&&n.push({x:s,z:c,r:f,h:l,kind:`outcrop`})}let{res:a,texel:o,origin:s}=this;for(let e of n){let t=e.r*1.6+3,n=Math.max(0,Math.floor((e.x-t-s)/o)),r=Math.min(a-1,Math.ceil((e.x+t-s)/o)),i=Math.max(0,Math.floor((e.z-t-s)/o)),c=Math.min(a-1,Math.ceil((e.z+t-s)/o));for(let l=i;l<=c;l++)for(let i=n;i<=r;i++){let n=s+(i+.5)*o,r=s+(l+.5)*o,c=(1-z(.35,1,Math.hypot(n-e.x,r-e.z)/t+this.noise3.noise(n/4,r/4)*.25))*.75,u=l*a+i;this.rock[u]=Math.max(this.rock[u],fn(c,0,1))}}}flatten(e,t,n,r,i=4){let{res:a,texel:o,origin:s}=this,c=n+i;this.pads.push({x:e,z:t,radius:n,height:r});let l=Math.max(0,Math.floor((e-c-s)/o)),u=Math.min(a-1,Math.ceil((e+c-s)/o)),d=Math.max(0,Math.floor((t-c-s)/o)),f=Math.min(a-1,Math.ceil((t+c-s)/o));for(let i=d;i<=f;i++)for(let d=l;d<=u;d++){let l=s+(d+.5)*o,u=s+(i+.5)*o,f=1-z(n,c,Math.hypot(l-e,u-t)),p=i*a+d;this.heights[p]=pn(this.heights[p],r,f)}}heightAt(e,t){let{res:n,texel:r,origin:i,heights:a}=this,o=(e-i)/r-.5,s=(t-i)/r-.5;o=o<0?0:o>n-1.001?n-1.001:o,s=s<0?0:s>n-1.001?n-1.001:s;let c=Math.floor(o),l=Math.floor(s),u=o-c,d=s-l,f=l*n+c,p=a[f],m=a[f+1],h=a[f+n],g=a[f+n+1];return(p*(1-u)+m*u)*(1-d)+(h*(1-u)+g*u)*d}normalAt(e,t,n){let r=this.texel,i=this.heightAt(e+r,t)-this.heightAt(e-r,t),a=this.heightAt(e,t+r)-this.heightAt(e,t-r);return n.set(-i,2*r,-a).normalize(),n}pathDistance(){return 1/0}buildMinMax(){let e=this.res/8;this.mmTile=8,this.mmN=e;let t=new Float32Array(e*e),n=new Float32Array(e*e),r=this.heights,i=this.res;for(let a=0;a<e;a++)for(let o=0;o<e;o++){let s=1/0,c=-1/0,l=Math.min(i-1,(a+1)*8),u=Math.min(i-1,(o+1)*8);for(let e=a*8;e<=l;e++){let t=e*i;for(let e=o*8;e<=u;e++){let n=r[t+e];n<s&&(s=n),n>c&&(c=n)}}t[a*e+o]=s,n[a*e+o]=c}this.mmMin=t,this.mmMax=n,this.mmLevels=[{n:e,min:t,max:n}];let a=this.mmLevels[0];for(;a.n>1;){let e=a.n>>1,t=new Float32Array(e*e),n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++){let o=2*r*a.n+2*i,s=o+a.n;t[r*e+i]=Math.min(a.min[o],a.min[o+1],a.min[s],a.min[s+1]),n[r*e+i]=Math.max(a.max[o],a.max[o+1],a.max[s],a.max[s+1])}a={n:e,min:t,max:n},this.mmLevels.push(a)}}boundsFor(e,t,n,r){let{origin:i,texel:a,mmTile:o}=this,s=Math.max(n-e,r-t)/(a*o),c=Math.max(0,Math.min(this.mmLevels.length-1,Math.ceil(Math.log2(Math.max(1,s/2))))),l=this.mmLevels[c],u=a*o*(1<<c),d=Math.floor((e-i)/u),f=Math.floor((n-i)/u),p=Math.floor((t-i)/u),m=Math.floor((r-i)/u),h=1/0,g=-1/0;for(let e=Math.max(0,p);e<=Math.min(l.n-1,m);e++)for(let t=Math.max(0,d);t<=Math.min(l.n-1,f);t++){let n=e*l.n+t;l.min[n]<h&&(h=l.min[n]),l.max[n]>g&&(g=l.max[n])}return h===1/0&&(h=0,g=0),[h-1,g+2]}},V=1.75,H=.0254,U={count:6,width:41.5*H*V,gutter:9.25*H*V,gutterDepth:1.875*H*V,cap:.17,length:720*H*V,approach:180*H*V*.6,thickness:.1,pinSpacing:12*H*V,deckExtra:.9*V,pitDepth:.36,pitLength:1.7,kickback:.95};U.pitch=U.width+2*U.gutter+U.cap,U.totalWidth=U.count*U.pitch+U.cap,U.rowDepth=U.pinSpacing*Math.sqrt(3)/2,U.deckEnd=U.length+U.deckExtra,U.pitEnd=U.deckEnd+U.pitLength;var W={h:.42,sink:.25,rim:.7,step:.14,tread:.34,stairWidth:7.2},G=0+W.h,K=G+.02,q=K+U.thickness,J={x0:-13.2,x1:13.2,z0:15,z1:-(U.pitEnd+2.4)},_n={x0:J.x0-W.rim,x1:J.x1+W.rim,z0:J.z0+W.rim,z1:J.z1-W.rim},Y={x:12.3,thick:.32,height:.86,z0:13,z1:-(U.pitEnd+1.2)},vn=e=>(e-(U.count-1)/2)*U.pitch;function yn(){let e=[],t=U.pinSpacing,n=U.rowDepth;for(let r=0;r<4;r++)for(let i=0;i<=r;i++)e.push({x:(i-r/2)*t,dz:r*n});return e}function bn(e){let t=U.totalWidth/2;if(e<-t||e>t)return-1;let n=Math.round(e/U.pitch+(U.count-1)/2);return Math.max(0,Math.min(U.count-1,n))}var xn=[[0,2.031],[.375,2.53],[.75,2.828],[1.5,3.43],[2.25,3.906],[3.375,4.51],[4.5,4.766],[5.875,4.563],[7.25,3.703],[8.625,2.472],[9.375,1.965],[10,1.797],[10.875,1.87],[11.75,2.064],[12.5,2.364],[13.5,2.547],[14.1,2.42],[14.55,2],[14.85,1.25],[15,0]],Sn=[[9.55,9.95],[10.45,10.85]],Cn={height:15*H*V,scale:H*V,mass:1.55*V*V*V,comY:5.8*H*V},wn={radius:8.5/2*H*V,mass:6.8*V*V*V},Tn=1.62,En=2048,Dn={x:0,z:-12,r:430,rim:46,vary:22},X={x0:J.x0-5,x1:J.x1+5,z0:J.z0+6,z1:J.z1-9,margin:14};function On(e,t){let n=Math.max(X.x0-e,0,e-X.x1),r=Math.max(t-X.z0,0,X.z1-t),i=Math.hypot(n,r);return 1-z(0,X.margin,i)}var kn=class extends gn{constructor(e=29){F.terrainSize=En,F.terrainRes=2048,super(e),this.grassland=!1,this.moon=!0}heightFn(e,t){return{h:this.heightAt(e,t),rock:0}}baseHeight(e,t){let n=this.noise,r=this.noise2,i=this.noise3,a=n.fbm(e/520,t/520,4)*9+r.fbm(e/140,t/140,3)*2.2+i.noise(e/37,t/37)*.35,o=Dn,s=e-o.x,c=t-o.z,l=Math.hypot(s,c),u=Math.atan2(c,s),d=Math.cos(u),f=Math.sin(u),p=o.r*(1+.07*r.noise(d*1.7+3.1,f*1.7-2.3)+.03*i.noise(d*5+1,f*5-4)),m=o.rim+o.vary*n.noise(d*1.3-5.5,f*1.3+.7)+8*i.noise(d*4.1+9,f*4.1),h=l/p,g;if(h<1){let r=z(.42,1,h);g=m*r**2.4+2.5*Math.sin(r*9+n.noise(e/60,t/60))*r*(1-r)}else g=m*h**-4.2-6*z(1,2.2,h);return a+g}generate(){let e=this.timings,t=performance.now(),n=this.res/2,r=this.size/n,i=this.origin,a=new Float32Array(n*n);for(let e=0;e<n;e++){let t=i+(e+.5)*r;for(let o=0;o<n;o++)a[e*n+o]=this.baseHeight(i+(o+.5)*r,t)}this.heights=We(a,n,!0),e.grid=Math.round(performance.now()-t),t=performance.now(),this._craters(),e.craters=Math.round(performance.now()-t),t=performance.now(),this._pad(),this._spawn(),e.features=Math.round(performance.now()-t),e.total=e.grid+e.craters+e.features}_craters(){let e=un(9021),{res:t,texel:n,origin:r,heights:i,sand:a,path:o,rock:s}=this,c=this.noise3,l=[[1.2,4,9e3],[4,12,950],[12,35,95],[35,90,11]],u=[];for(let[t,n,i]of l)for(let a=0;a<i;a++){let i=e(),a=1/(1/t-i*(1/t-1/n)),o=r+e()*this.size,s=r+e()*this.size,c=e()**1.6*.75+.25;u.push({x:o,z:s,r:a,fresh:c,seed:e()*1e3})}u.sort((e,t)=>e.fresh-t.fresh),this.craters=[];for(let e of u){let o=e.r*2.4,l=Math.max(X.x0-e.x,0,e.x-X.x1),u=Math.max(e.z-X.z0,0,X.z1-e.z);if(Math.hypot(l,u)<o+4)continue;this.craters.push(e);let d=.38*e.r*e.fresh*(e.r>30?.75:1),f=.084*e.r*e.fresh,p=Math.max(0,Math.floor((e.x-o-r)/n)),m=Math.min(t-1,Math.ceil((e.x+o-r)/n)),h=Math.max(0,Math.floor((e.z-o-r)/n)),g=Math.min(t-1,Math.ceil((e.z+o-r)/n)),_=e.fresh**4,v=e.fresh>.85&&e.r>3;for(let o=h;o<=g;o++){let l=r+(o+.5)*n;for(let u=p;u<=m;u++){let p=r+(u+.5)*n-e.x,m=l-e.z,h=1+.08*c.noise(p/e.r*1.3+e.seed,m/e.r*1.3-e.seed),g=Math.hypot(p,m)/(e.r*h);if(g>2.4)continue;let y=f+(d+f)*(g**2.2-1),b=f*Math.max(g,1)**-3.2*(1-z(1.9,2.4,g)),x=z(.9,1.1,g),S=y*(1-x)+b*x,ee=o*t+u;if(i[ee]+=S,_>.02){let t=g<1?.55+.45*g:g**-2.2;if(v){let n=Math.atan2(m,p),r=Math.abs(Math.sin(n*7+e.seed)*Math.sin(n*11.3-e.seed))**3;t+=r*Math.max(0,1-(g-1)/1.4)*.6}a[ee]=Math.min(255,a[ee]+t*_*200),e.r>5&&g>.8&&g<1.3&&e.fresh>.6&&(s[ee]=Math.max(s[ee],(1-Math.abs(g-1.02)/.28)*e.fresh))}}}}let d=this.noise2;for(let e=0;e<t;e+=4)for(let i=0;i<t;i+=4){let a=r+(i+2)*n,s=r+(e+2)*n,c=fn(z(-.05,.35,d.fbm(a/330+7.7,s/330-2.2,3))*255,0,255);for(let n=0;n<4;n++)o.fill(c,(e+n)*t+i,(e+n)*t+i+4)}}_pad(){let{res:e,texel:t,origin:n,heights:r,sand:i,rock:a}=this,o=Math.max(0,Math.floor((X.x0-X.margin-n)/t)),s=Math.min(e-1,Math.ceil((X.x1+X.margin-n)/t)),c=Math.max(0,Math.floor((X.z1-X.margin-n)/t)),l=Math.min(e-1,Math.ceil((X.z0+X.margin-n)/t));for(let u=c;u<=l;u++)for(let c=o;c<=s;c++){let o=On(n+(c+.5)*t,n+(u+.5)*t);if(o<=0)continue;let s=u*e+c;r[s]=r[s]*(1-o)+0*o,i[s]*=1-o,a[s]*=1-o}}_spawn(){let e=vn(2),t=3.2;this.spawn={x:e,z:t,h:0},F.spawn.position.set(e,0,t),F.spawn.yaw=0,F.start.position.set(e,0,t),F.start.yaw=0}},An=`
fn materialSunModulation( P: vec3f, N: vec3f ) -> vec3f {
	return vec3f( terrainSunShadowAt( P ) );
}

fn mtHash2( p: vec2f ) -> vec2f {
	var q = fract( p * vec2f( 0.1031, 0.1030 ) );
	q += dot( q, q.yx + 33.33 );
	return fract( ( q.xx + q.yx ) * q.xy );
}

// little craters on a jittered cell grid: height (m) of the field at xz
fn mtCraterField( xz: vec2f, cell: f32, prob: f32 ) -> f32 {
	let g = xz / cell;
	let c0 = floor( g );
	var hsum = 0.0;
	for ( var j = -1; j <= 1; j++ ) {
		for ( var i = -1; i <= 1; i++ ) {
			let c = c0 + vec2f( f32( i ), f32( j ) );
			let r2 = mtHash2( c + 17.3 );
			if ( r2.x > prob ) { continue; }
			let ctr = c + 0.25 + mtHash2( c ) * 0.5;
			let R = ( 0.12 + 0.33 * r2.y * r2.y ); // in cells
			let d = length( g - ctr ) / R;
			if ( d > 2.2 ) { continue; }
			let fresh = fract( r2.y * 13.7 ) * 0.7 + 0.3;
			let depth = 0.36 * R * cell * fresh;
			let rim = 0.08 * R * cell * fresh;
			let inner = rim + ( depth + rim ) * ( pow( d, 2.0 ) - 1.0 );
			let outer = rim * pow( max( d, 1.0 ), -3.0 ) * ( 1.0 - smoothstep( 1.7, 2.2, d ) );
			hsum += mix( inner, outer, smoothstep( 0.88, 1.12, d ) );
		}
	}
	return hsum;
}

fn mtRot( v: vec2f, a: f32 ) -> vec2f { let c = cos( a ); let s = sin( a ); return vec2f( c * v.x - s * v.y, s * v.x + c * v.y ); }

// tangent-space (GL) normal map sample -> world-space offset in xz (planar projection along y)
fn mtNrm( t: vec4f, rot: f32, k: f32 ) -> vec2f {
	let n = ( t.xy * 2.0 - 1.0 ) * k;
	// u along +x, v along +z: the map's +y (up in the image) is -z
	return mtRot( vec2f( n.x, -n.y ), rot );
}
`,jn=`
	let p = in.P;
	let xz = p.xz;
	let nr = terrainNormalRock( xz );
	let N0 = normalize( vec3f( nr.x, sqrt( max( 1.0 - nr.x * nr.x - nr.y * nr.y, 0.0025 ) ), nr.y ) );
	let sp = terrainSplat( xz );
	let camDist = length( frame.cameraPos - p );

	// ---- textures (four planar layers, rotated to hide the repeat)
	let uvA = xz / 4.0;
	let uvB = mtRot( xz, 1.1 ) / 10.7 + 0.37;
	let uvC = mtRot( xz, 0.4 ) / 31.0;
	let uvD = mtRot( xz, 2.3 ) / 87.0 + 0.61;
	let aA = textureSample( moonRegA, smpAnisoRepeat, uvA ).rgb;
	let aB = textureSample( moonRegA, smpAnisoRepeat, uvB ).rgb;
	let aC = textureSample( moonMacA, smpAnisoRepeat, uvC ).rgb;
	let aD = textureSample( moonMacA, smpAnisoRepeat, uvD ).rgb;
	let nA = textureSample( moonRegNR, smpAnisoRepeat, uvA );
	let nB = textureSample( moonRegNR, smpAnisoRepeat, uvB );
	let nC = textureSample( moonMacNR, smpAnisoRepeat, uvC );
	let nD = textureSample( moonMacNR, smpAnisoRepeat, uvD );

	// near detail fades into the macro layers with distance (no visible tile beyond ~60 m)
	let nearW = 1.0 - smoothstep( 25.0, 90.0, camDist );
	let lumC = luminance( aC ) / 0.2;
	let lumD = luminance( aD ) / 0.2;
	let near = mix( aA, aB, 0.4 ) / 0.21;
	let far = aC / 0.2;
	var albedo = mix( far, near * mix( 1.0, lumC, 0.5 ), nearW ) * mix( 1.0, lumD, 0.45 );
	// the scans are flat-albedo dust: mottling at three scales, and micro-shadowing from the
	// normal maps (tilted texels are the sides of clods, pits and pebbles)
	let mott = perlin2( xz / 1.7 ) * 0.07 + perlin2( xz / 13.0 + 4.0 ) * 0.11 + perlin2( xz / 71.0 - 9.0 ) * 0.1;
	let tiltA = length( nA.xy * 2.0 - 1.0 );
	let tiltC = length( nC.xy * 2.0 - 1.0 );
	albedo *= ( 1.0 + mott ) * mix( 1.0, 1.0 - smoothstep( 0.15, 0.7, tiltA ) * 0.3, nearW ) * ( 1.0 - smoothstep( 0.2, 0.8, tiltC ) * 0.2 );
	// lunar tones: neutral to faintly warm grey, albedo ~0.12
	albedo = mix( vec3f( luminance( albedo ) ), albedo, 0.35 ) * vec3f( 0.125, 0.12, 0.112 );
	// mare-like patches (darker, a touch bluer), fresh ejecta (brighter), blocky rims
	let mare = sp.y;
	albedo *= mix( vec3f( 1.0 ), vec3f( 0.68, 0.7, 0.74 ), mare * 0.8 );
	let ej = sp.x;
	albedo *= 1.0 + ej * 0.9;
	let rockW = smoothstep( 0.25, 0.7, nr.z + ( lumC - 1.0 ) * 0.4 );
	albedo = mix( albedo, albedo * vec3f( 0.72, 0.71, 0.7 ), rockW * 0.6 );

	// ---- normal: texture normals (whiteout) over the macro normal
	let tN = mtNrm( nA, 0.0, 1.0 ) * nearW + mtNrm( nB, 1.1, 0.8 ) * nearW * 0.6 + mtNrm( nC, 0.4, 1.0 + rockW ) * mix( 0.6, 1.0, 1.0 - nearW ) + mtNrm( nD, 2.3, 0.7 );
	var Nt = normalize( vec3f( N0.x / max( N0.y, 0.2 ) + tN.x, 1.0, N0.z / max( N0.y, 0.2 ) + tN.y ) );

	// ---- procedural little craters (sub-metre .. 2 m), faded out with distance
	let cf = 1.0 - smoothstep( 18.0, 60.0, camDist );
	let hd = ( mtCraterField( xz, 2.4, 0.32 ) + mtCraterField( xz + 31.7, 0.7, 0.4 ) * ( 1.0 - smoothstep( 6.0, 18.0, camDist ) ) ) * cf;
	let Nb = terrainPerturbNormal( p, Nt, hd, 1.0 );

	// ---- roughness / AO
	let rough = mix( nA.z, nC.z, 1.0 - nearW ) * 0.15 + 0.82;
	s.albedo = albedo;
	s.roughness = clamp( rough, 0.82, 0.98 );
	s.normal = Nb;
	s.ao = sat( nr.w * mix( 1.0, 0.86, rockW ) );
`;function Mn(e,t){let n=e.material,r=new o({name:`moonTerrainMaterial`,deps:[e.gpu.module,ct()],bindings:{moonRegA:{texture:t.regolithA},moonRegNR:{texture:t.regolithNR},moonMacA:{texture:t.moonMacroA},moonMacNR:{texture:t.moonMacroNR}},code:An});return n.modules=[e.gpu.module,ct(),e.lod.module,r],n.defines.HAS_WETNESS=0,n.defines.MATERIAL_SUN_MODULATION=1,n.defines.GRASSLAND=0,n.surface=jn,n.needsUpdate=!0,n}var Z=e=>{let t=String(e);return t.includes(`.`)||t.includes(`e`)?t:t+`.0`},Nn=new o({name:`memphis`,deps:[m],code:`
fn mpHash( p: vec2f ) -> vec4f {
	let q = vec4f( dot( p, vec2f( 127.1, 311.7 ) ), dot( p, vec2f( 269.5, 183.3 ) ), dot( p, vec2f( 419.2, 371.9 ) ), dot( p, vec2f( 91.7, 239.1 ) ) );
	return fract( sin( q ) * 43758.5453 );
}
fn mpRot( v: vec2f, a: f32 ) -> vec2f { let c = cos( a ); let s = sin( a ); return vec2f( c * v.x - s * v.y, s * v.x + c * v.y ); }
// signed distance to an equilateral triangle of circumradius r
fn mpTri( p0: vec2f, r: f32 ) -> f32 {
	let k = sqrt( 3.0 );
	var p = p0;
	p.x = abs( p.x ) - r * 0.866;
	p.y = p.y + r * 0.5;
	if ( p.x + k * p.y > 0.0 ) { p = vec2f( p.x - k * p.y, -k * p.x - p.y ) / 2.0; }
	p.x -= clamp( p.x, -r * 1.732, 0.0 );
	return -length( p ) * sign( p.y );
}
fn mpPalette( i: f32 ) -> vec3f {
	// cyan, hot pink, yellow, mint green, lavender (linear albedo)
	if ( i < 1.0 ) { return vec3f( 0.02, 0.56, 0.72 ); }
	if ( i < 2.0 ) { return vec3f( 0.82, 0.07, 0.33 ); }
	if ( i < 3.0 ) { return vec3f( 0.86, 0.58, 0.04 ); }
	if ( i < 4.0 ) { return vec3f( 0.06, 0.6, 0.22 ); }
	return vec3f( 0.55, 0.42, 0.8 );
}
// one shape per cell (kept inside the cell): rgb colour, coverage
fn mpCell( xz: vec2f, cell: f32, salt: f32, aa: f32, small: bool ) -> vec4f {
	let g = xz / cell;
	let id = floor( g );
	let h = mpHash( id + salt );
	if ( h.x > select( 0.62, 0.8, small ) ) { return vec4f( 0.0 ); }
	let p = mpRot( ( fract( g ) - 0.5 - ( h.zw - 0.5 ) * 0.16 ) * cell, h.y * 6.2832 );
	let kind = floor( fract( h.y * 7.31 + h.z * 3.7 ) * 6.0 );
	let col = mpPalette( floor( fract( h.w * 5.13 + h.x * 2.1 ) * 5.0 ) );
	let s = cell * select( 0.34, 0.26, small );
	let line = cell * 0.03;
	var d = 1e3;
	if ( small ) {
		// confetti: dots and tiny solid triangles
		if ( kind < 3.0 ) { d = length( p ) - s * 0.28; } else { d = mpTri( p, s * 0.45 ); }
	} else if ( kind < 1.0 ) {
		d = mpTri( p, s * 0.8 ); // solid triangle
	} else if ( kind < 2.0 ) {
		d = abs( mpTri( p, s * 0.85 ) ) - line; // triangle outline
	} else if ( kind < 3.0 ) {
		// squiggle
		let x = clamp( p.x, -s, s );
		d = length( vec2f( p.x - x, p.y - sin( x / s * 7.0 ) * s * 0.22 ) ) - line * 1.2;
	} else if ( kind < 4.0 ) {
		// zigzag
		let x = clamp( p.x, -s, s );
		let tri = abs( fract( x / s * 1.5 ) * 2.0 - 1.0 ) * 2.0 - 1.0;
		d = length( vec2f( p.x - x, p.y - tri * s * 0.25 ) ) - line * 1.1;
	} else if ( kind < 5.0 ) {
		d = abs( length( p ) - s * 0.55 ) - line; // ring
	} else {
		// dot grid (3 x 3)
		let q = p / ( s * 0.42 );
		let qc = clamp( round( q ), vec2f( -1.0 ), vec2f( 1.0 ) );
		d = ( length( q - qc ) - 0.2 ) * s * 0.42;
	}
	let cov = 1.0 - smoothstep( -aa, aa, d );
	return vec4f( col, cov );
}
`});function Pn(){let e=we({name:`carpet`,roughness:.95,sheen:1,sheenColor:new A(.5,.42,.7),sheenRoughness:.45,modules:[Nn]});return e.surface=`
	let xz = in.P.xz;
	let aa = max( fwidth( xz.x ), fwidth( xz.y ) ) * 1.2 + 1e-4;
	// deep purple ground, a slightly mottled dye
	var albedo = vec3f( 0.034, 0.009, 0.1 ) * ( 1.0 + perlin2( xz * 1.3 ) * 0.08 );
	let big = mpCell( xz, 0.62, 0.0, aa, false );
	albedo = mix( albedo, big.rgb, big.a );
	let small = mpCell( xz + 0.21, 0.29, 17.0, aa, true );
	albedo = mix( albedo, small.rgb, small.a * ( 1.0 - big.a ) );
	// cut pile: tufts break up the print at the millimetre scale, fading with distance
	let fine = smoothstep( 0.02, 0.004, aa );
	let tuft = hash21( floor( xz * 260.0 ) );
	albedo *= 1.0 + ( tuft - 0.5 ) * 0.22 * fine;
	// the side faces of the carpet slab: the dark binding tape
	let side = 1.0 - smoothstep( 0.4, 0.8, abs( in.N.y ) );
	s.albedo = mix( albedo, vec3f( 0.02, 0.012, 0.03 ), side );
	s.roughness = 0.95;
	s.sheenColor = mix( vec3f( 0.32, 0.26, 0.45 ), s.albedo * 1.5 + 0.05, 0.5 ) * ( 1.0 - side );
`,e}function Fn(e){let t=U,n=we({name:`laneMaple`,roughness:.32,clearcoat:1,clearcoatRoughness:.035,textures:{mapleA:e.mapleA,mapleNR:e.mapleNR}});return n.surface=`
	let P = in.P;
	// lane-local coordinates: lx across the lane (0 .. width between the gutters), z along it
	let u = P.x / ${Z(t.pitch)} + ${Z(t.count/2)};
	let lane = floor( u );
	let lx = ( u - lane ) * ${Z(t.pitch)} - ${Z(t.cap/2+t.gutter)};
	let bw = ${Z(t.width/39)};
	let bf = lx / bw;
	let board = floor( bf );
	let inB = fract( bf );
	let z = P.z;
	// butt joints: boards come in staggered lengths
	let seg = floor( ( -z + hash21( vec2f( board, lane ) ) * 5.0 ) / 4.6 );
	let hb = hash33( vec3f( board, lane, seg ) );
	// grain runs along the lane (the texture's u); each board shows its own strip of the veneer
	let uvT = vec2f( -z / 1.35 + hb.x * 13.0, ( inB * bw ) / 1.35 + hb.y * 7.0 );
	let tA = textureSample( mapleA, smpAnisoRepeat, uvT ).rgb;
	let tN = textureSample( mapleNR, smpAnisoRepeat, uvT );
	// varnished hard maple: honey tone, board-to-board variation
	var albedo = tA * vec3f( 0.9, 0.74, 0.5 ) * ( 0.86 + hb.z * 0.2 );
	albedo = mix( albedo, albedo * vec3f( 1.04, 0.93, 0.8 ), hb.x * 0.5 );
	// board seams (thin, darker) and butt joints
	let aaB = fwidth( bf ) * 1.5 + 1e-4;
	let seam = 1.0 - smoothstep( 0.0, aaB + 0.04, min( inB, 1.0 - inB ) );
	let jz = -z + hash21( vec2f( board, lane ) ) * 5.0;
	let jf = fract( jz / 4.6 );
	let aaJ = fwidth( jz / 4.6 ) * 1.5 + 1e-5;
	let joint = 1.0 - smoothstep( 0.0, aaJ + 0.0015, min( jf, 1.0 - jf ) );
	albedo *= 1.0 - max( seam * 0.35, joint * 0.4 ) * smoothstep( 0.03, 0.005, aaB * bw );
	// markings: foul line, approach dots, target arrows, pin spots (dark inlays)
	var ink = 0.0;
	let aa = max( fwidth( P.x ), fwidth( P.z ) ) + 1e-4;
	ink = max( ink, ( 1.0 - smoothstep( 0.0, aa, abs( z + 0.0175 ) - 0.0175 ) ) * step( 0.0, lx ) * step( lx, ${Z(t.width)} ) );
	let mid = ${Z(t.width/2)};
	for ( var k = 0; k < 7; k++ ) {
		let ax = mid + f32( k - 3 ) * 5.0 * bw;
		let az = -( ${Z(4.6*1.75)} + abs( f32( k - 3 ) ) * 0.33 * 1.75 * 0.3048 );
		// arrow pointing down the lane (-z): a slim triangle
		let qx = abs( lx - ax );
		let qz = z - az; // 0 at the tip, grows toward the bowler
		let inside = step( 0.0, qz ) * step( qz, 0.24 ) * step( qx, qz * 0.12 );
		ink = max( ink, inside );
		// approach dots
		let dz = z - 2.0;
		ink = max( ink, 1.0 - smoothstep( 0.0, aa, length( vec2f( lx - ax, dz ) ) - 0.018 ) );
	}
	// pin spots on the deck
	let hz = -z - ${Z(t.length)};
	if ( hz > -0.2 && hz < ${Z(t.rowDepth*3+.2)} ) {
		for ( var row = 0; row < 4; row++ ) {
			for ( var k2 = 0; k2 <= row; k2++ ) {
				let sx = mid + ( f32( k2 ) - f32( row ) * 0.5 ) * ${Z(t.pinSpacing)};
				let sz = f32( row ) * ${Z(t.rowDepth)};
				ink = max( ink, 1.0 - smoothstep( 0.0, aa, length( vec2f( lx - sx, hz - sz ) ) - 0.02 ) );
			}
		}
		// the pin deck wears a slightly paler, matt finish
		albedo *= vec3f( 1.04, 1.03, 1.0 );
	}
	albedo = mix( albedo, vec3f( 0.025, 0.018, 0.014 ), ink * 0.92 );
	s.albedo = albedo;
	// grain relief through the varnish (subtle; the clear coat stays flat)
	let n2 = ( tN.xy * 2.0 - 1.0 ) * 0.35;
	s.normal = normalize( in.N + vec3f( n2.y, 0.0, -n2.x ) * vec3f( 1.0, 0.0, 1.0 ) );
	s.roughness = 0.24 + tN.z * 0.15;
	s.clearcoatNormal = in.N;
	// lane oil: glassier down the middle of the front two thirds
	let oil = smoothstep( 0.0, 0.4, min( lx, ${Z(t.width)} - lx ) ) * smoothstep( -( ${Z(t.length*.72)} ), -( ${Z(t.length*.6)} ), z );
	s.clearcoatRoughness = mix( 0.06, 0.025, oil ) + seam * 0.05;
`,n}function In(e){let t=we({name:`plinthConcrete`,roughness:.85,textures:{concA:e.concreteA,concNR:e.concreteNR}});return t.surface=`
	let P = in.P;
	let Nw = normalize( in.N );
	let an = abs( Nw );
	var uv = P.xz;
	var side = 0.0;
	if ( an.x > an.y && an.x > an.z ) { uv = vec2f( P.z, P.y ); side = 1.0; }
	else if ( an.z > an.y ) { uv = vec2f( P.x, P.y ); side = 1.0; }
	uv = uv / 1.6;
	let tA = textureSample( concA, smpAnisoRepeat, uv ).rgb;
	let tN = textureSample( concNR, smpAnisoRepeat, uv );
	// large-scale tone (pour to pour)
	let big = perlin3( vec3f( P.x * 0.13, P.y * 0.5, P.z * 0.13 ) ) * 0.5 + 0.5;
	var albedo = tA * 1.75 * mix( 0.9, 1.08, big );
	// lunar dust: thick at the foot of the walls, a film on the horizontal faces
	let foot = ( 1.0 - smoothstep( ${Z(.02)}, ${Z(.22)}, P.y ) ) * side;
	let dust = sat( foot * 0.85 + ( 1.0 - side ) * 0.18 * ( perlin3( P * 0.9 ) * 0.5 + 0.6 ) );
	albedo = mix( albedo, vec3f( 0.115, 0.11, 0.104 ), dust );
	s.albedo = albedo;
	let n2 = ( tN.xy * 2.0 - 1.0 ) * ( 1.0 - dust * 0.6 );
	var t1 = vec3f( 1.0, 0.0, 0.0 );
	var t2 = vec3f( 0.0, 0.0, 1.0 );
	if ( an.x > an.y && an.x > an.z ) { t1 = vec3f( 0.0, 0.0, 1.0 ); t2 = vec3f( 0.0, 1.0, 0.0 ); }
	else if ( an.z > an.y ) { t1 = vec3f( 1.0, 0.0, 0.0 ); t2 = vec3f( 0.0, 1.0, 0.0 ); }
	s.normal = normalize( Nw + t1 * n2.x + t2 * n2.y );
	s.roughness = mix( 0.62 + tN.z * 0.35, 0.95, dust );
`,t}function Ln(e,t,{roughness:n=.35,clearcoat:r=1,clearcoatRoughness:i=.05,metalness:a=0}={}){return we({name:e,color:t,roughness:n,clearcoat:r,clearcoatRoughness:i,metalness:a})}function Rn(e,t,n=.85){return we({name:e,color:t,roughness:n})}function zn(){let e=we({name:`pinLacquer`,color:new A(.86,.85,.82),roughness:.38,clearcoat:1,clearcoatRoughness:.045}),[t,n]=Sn.map(([e,t])=>[e/15,t/15]);return e.surface=`
	let v = in.uv.y;
	let ang = in.uv.x * 6.2831853;
	let cp = vec3f( cos( ang ), sin( ang ), v * 4.0 );
	let aa = fwidth( v ) * 1.2 + 1e-5;
	let band = ( smoothstep( ${t[0]} - aa, ${t[0]} + aa, v ) - smoothstep( ${t[1]} - aa, ${t[1]} + aa, v ) )
		+ ( smoothstep( ${n[0]} - aa, ${n[0]} + aa, v ) - smoothstep( ${n[1]} - aa, ${n[1]} + aa, v ) );
	var albedo = mix( vec3f( 0.86, 0.85, 0.82 ), vec3f( 0.62, 0.025, 0.03 ), sat( band ) );
	// wear: scuffs on the belly band, a dirty ring at the base
	let belly = smoothstep( 0.08, 0.2, v ) * smoothstep( 0.52, 0.32, v );
	let n1 = perlin3( cp * 3.0 + 7.0 ) * 0.5 + perlin3( cp * 9.0 ) * 0.3 + perlin3( cp * 31.0 ) * 0.2;
	let scuff = smoothstep( 0.18, 0.5, n1 ) * belly;
	let chip = smoothstep( 0.62, 0.7, perlin3( cp * 23.0 + 3.3 ) ) * belly;
	let base = smoothstep( 0.05, 0.0, v );
	albedo = albedo * ( 1.0 - scuff * 0.12 - base * 0.35 ) * mix( vec3f( 1.0 ), vec3f( 0.92, 0.9, 0.86 ), chip );
	s.albedo = albedo;
	s.roughness = 0.38 + scuff * 0.2;
	s.clearcoat = 1.0 - chip * 0.8;
	s.clearcoatRoughness = 0.04 + scuff * 0.12 + base * 0.2;
`,e}function Bn(){let e=we({name:`ballUrethane`,color:new A(.3,.05,.3),roughness:.3,clearcoat:1,clearcoatRoughness:.02,varyings:{vLocalN:`vec3f`}});return e.vertex=`
	o.vLocalN = v.normal;
`,e.surface=`
	let p = normalize( in.vs.vLocalN );
	// domain-warped marbling
	let w1 = perlin3( p * 1.7 + 3.1 );
	let w2 = perlin3( p * 2.3 - 1.7 );
	let q = p * 2.6 + vec3f( w1, w2, w1 * w2 ) * 1.35;
	let m = perlin3( q ) * 0.6 + perlin3( q * 2.1 + 5.0 ) * 0.3 + perlin3( q * 4.7 ) * 0.1;
	let swirl = sin( ( m * 4.2 + p.y * 1.2 ) * 3.14159 ) * 0.5 + 0.5;
	let violet = vec3f( 0.08, 0.012, 0.2 );
	let magenta = vec3f( 0.62, 0.04, 0.36 );
	let teal = vec3f( 0.03, 0.42, 0.5 );
	var albedo = mix( violet, magenta, smoothstep( 0.3, 0.7, swirl ) );
	albedo = mix( albedo, teal, smoothstep( 0.82, 0.95, swirl ) * 0.85 );
	// pearl flecks
	let fl = smoothstep( 0.72, 0.8, perlin3( p * 90.0 ) * 0.5 + 0.5 );
	// finger holes: thumb + two fingers
	var hole = 0.0;
	var rim = 0.0;
	var hd = array<vec3f, 3>( normalize( vec3f( 0.0, 1.0, -0.42 ) ), normalize( vec3f( -0.16, 1.0, 0.22 ) ), normalize( vec3f( 0.16, 1.0, 0.22 ) ) );
	var hr = array<f32, 3>( 0.17, 0.13, 0.13 );
	for ( var i = 0; i < 3; i++ ) {
		let d = acos( clamp( dot( p, hd[ i ] ), -1.0, 1.0 ) );
		hole = max( hole, 1.0 - smoothstep( hr[ i ] - 0.012, hr[ i ], d ) );
		rim = max( rim, smoothstep( hr[ i ] - 0.01, hr[ i ] + 0.01, d ) * smoothstep( hr[ i ] + 0.06, hr[ i ] + 0.01, d ) );
	}
	s.albedo = mix( albedo, vec3f( 0.01 ), hole );
	s.metalness = fl * 0.6 * ( 1.0 - hole );
	s.roughness = mix( mix( 0.3, 0.16, fl ), 0.8, hole );
	s.clearcoat = 1.0 - hole;
	s.clearcoatRoughness = mix( 0.02, 0.12, rim );
	s.ao = 1.0 - hole * 0.9;
`,e}function Vn(e,t,n,r,i){let a=i*i,o=a*i;return .5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*a+(-e+3*t-3*n+r)*o)}function Hn(e=96){let t=xn.map(([e,t])=>({y:e,r:t/2})),n=[],r=t.length-1;for(let i=0;i<=e;i++){let a=i/e*r,o=Math.min(r-1,Math.floor(a)),s=a-o,c=t[Math.max(0,o-1)],l=t[o],u=t[o+1],d=t[Math.min(r,o+2)];n.push({y:Vn(c.y,l.y,u.y,d.y,s),r:Math.max(0,Vn(c.r,l.r,u.r,d.r,s))})}n[n.length-1].r=0,n[n.length-1].y=15;let i=1.273,a=13.727;for(let e of n)e.y>13.877&&(e.r=Math.min(e.r,Math.sqrt(Math.max(0,i*i-(e.y-a)*(e.y-a)))));for(let e=1;e<n.length;e++)n[e].y<n[e-1].y&&(n[e].y=n[e-1].y+1e-4);return n}function Un(e=.0254,t=48,n=96){let r=Hn(n),i=r.length,a=[],o=[];for(let e=0;e<i;e++){let t=r[Math.max(0,e-1)],n=r[Math.min(i-1,e+1)],s=n.y-t.y,c=n.r-t.r,l=Math.hypot(s,c)||1;s/=l,c/=l,a.push(s),o.push(-c)}a[i-1]=0,o[i-1]=1;let s=[],c=[],l=[],u=[];for(let n=0;n<=t;n++){let u=n/t*Math.PI*2,d=Math.sin(u),f=Math.cos(u);for(let u=0;u<i;u++){let i=r[u];s.push(i.r*d*e,i.y*e,i.r*f*e),c.push(a[u]*d,o[u],a[u]*f),l.push(n/t,i.y/15)}}for(let e=0;e<t;e++)for(let t=0;t<i-1;t++){let n=e*i+t,r=(e+1)*i+t;u.push(n,r,n+1,r,r+1,n+1)}let d=s.length/3,f=r[0].r,p=f*.62;for(let n=0;n<=t;n++){let r=n/t*Math.PI*2,i=Math.sin(r),a=Math.cos(r);s.push(f*i*e,0,f*a*e,p*i*e,0,p*a*e,p*i*e*.9,.06*e,p*a*e*.9),c.push(0,-1,0,0,-1,0,0,-1,0),l.push(n/t,0,n/t,0,n/t,.004)}let m=s.length/3;s.push(0,.06*e,0),c.push(0,-1,0),l.push(.5,.004);for(let e=0;e<t;e++){let t=d+e*3,n=d+(e+1)*3;u.push(t,t+1,n,n,t+1,n+1),u.push(t+1,t+2,n+1,n+1,t+2,n+2),u.push(t+2,m,n+2)}let h=new ve;return h.setAttribute(`position`,new x(s,3)),h.setAttribute(`normal`,new x(c,3)),h.setAttribute(`uv`,new x(l,2)),h.setIndex(u),h.computeBoundingBox(),h.computeBoundingSphere(),h}var Wn=(()=>{let e=[],t=.78,n=.24;for(let r=0;r<6;r++){let i=r/6*Math.PI*2;e.push([Math.cos(i)*t,n,Math.sin(i)*t,n])}return e.push([0,2.1,0,1.75],[0,4.4,0,2.36],[0,6.7,0,2],[0,9.9,0,.95],[0,13.3,0,1.26]),e})(),Q=new k,Gn=new k,Kn=new k;new k;var qn=new k,Jn=new k,Yn=new k,Xn=new k,Zn=new j,Qn=0,$n=class{constructor({kind:e,mass:t,inertia:n,spheres:r,pos:i,quat:a}){this.id=Qn++,this.kind=e,this.invMass=1/t,this.mass=t,this.invI=new k(1/n.x,1/n.y,1/n.z),this.spheres=r,this.world=r.map(()=>new k),this.pos=i.clone(),this.quat=a?a.clone():new j,this.vel=new k,this.ang=new k,this.R=new te,this.Iw=new te,this.bound=Math.max(...r.map(e=>e.p.length()+e.r)),this.sleeping=!1,this.rest=0,this.lane=-1,this.updateFrame()}updateFrame(){let e=this.quat,t=e.x,n=e.y,r=e.z,i=e.w,a=this.R.elements;a[0]=1-2*(n*n+r*r),a[3]=2*(t*n-r*i),a[6]=2*(t*r+n*i),a[1]=2*(t*n+r*i),a[4]=1-2*(t*t+r*r),a[7]=2*(n*r-t*i),a[2]=2*(t*r-n*i),a[5]=2*(n*r+t*i),a[8]=1-2*(t*t+n*n);let o=this.Iw.elements,s=this.invI;for(let e=0;e<3;e++)for(let t=0;t<3;t++)o[t*3+e]=a[e]*s.x*a[t]+a[3+e]*s.y*a[3+t]+a[6+e]*s.z*a[6+t];for(let e=0;e<this.spheres.length;e++)this.world[e].copy(this.spheres[e].p).applyMatrix3(this.R).add(this.pos)}pointVel(e,t){return t.crossVectors(this.ang,e).add(this.vel)}applyImpulse(e,t){this.vel.addScaledVector(e,this.invMass),Yn.crossVectors(t,e).applyMatrix3(this.Iw),this.ang.add(Yn)}invMassAlong(e,t){return Yn.crossVectors(e,t).applyMatrix3(this.Iw),Xn.crossVectors(Yn,e),this.invMass+Xn.dot(t)}up(e=new k){let t=this.R.elements;return e.set(t[3],t[4],t[5])}};function er(){let e=[],t=(t,n,r,i,a,o,s)=>e.push({c:new k(t,n,r),h:new k(i,a,o),tag:s}),n=U,r=-n.deckEnd,i=-n.pitEnd,a=-(n.length-1.4);for(let e=0;e<=n.count;e++){let r=(e-n.count/2)*n.pitch,o=q+.035;t(r,(o+K)/2,(0+a)/2,n.cap/2,(o-K)/2,(0-a)/2,`cap`);let s=q+n.kickback;t(r,(s+q-n.pitDepth)/2,(a+i)/2,n.cap/2,(s-(q-n.pitDepth))/2,(a-i)/2,`kickback`)}t(0,(q+q-n.pitDepth)/2-.01,r+.15,n.totalWidth/2,n.pitDepth/2,.15,`deckEdge`),t(0,(q+K)/2,n.approach/2,n.totalWidth/2,(q-K)/2,n.approach/2,`approach`),t(0,q+.5,i-.2,n.totalWidth/2,.9,.2,`cushion`);for(let e of[-1,1])t(e*Y.x,K+Y.height/2,(Y.z0+Y.z1)/2,Y.thick/2,Y.height/2,(Y.z0-Y.z1)/2,`wall`);return e}function tr(e=()=>0){let t=U,n=t.totalWidth/2;return function(r,i,a){if(a.nx=0,a.ny=1,a.nz=0,r>=J.x0&&r<=J.x1&&i<=J.z0&&i>=J.z1){if(a.h=K,Math.abs(r)<=n){if(i>=0&&i<=t.approach)a.h=q;else if(i<0&&i>=-t.deckEnd){let e=r/t.pitch+t.count/2,n=(e-Math.floor(e))*t.pitch-t.cap/2;if(n<0||n>t.pitch-t.cap)a.h=q+.035;else if(n<t.gutter||n>t.gutter+t.width){let e=(n-(n<t.gutter?t.gutter/2:t.gutter*1.5+t.width))/(t.gutter/2);a.h=q-t.gutterDepth*(1-e*e);let r=2*t.gutterDepth*e/(t.gutter/2),i=1/Math.hypot(r,1);a.nx=-r*i,a.ny=i}else a.h=q}else i<-t.deckEnd&&i>=-t.pitEnd&&(a.h=q-t.pitDepth)}return a}let o=_n;if(r>=o.x0&&r<=o.x1&&i<=o.z0&&i>=o.z1)return a.h=G,a;a.h=e(r,i);let s=.5,c=e(r+s,i)-e(r-s,i),l=e(r,i+s)-e(r,i-s),u=1/Math.hypot(c/(2*s),1,l/(2*s));return a.nx=-c/(2*s)*u,a.ny=u,a.nz=-l/(2*s)*u,a}}var nr=Cn.scale,rr=Cn.comY,ir=class{constructor({terrainHeight:e=null,gravity:t=Tn}={}){this.gravity=t,this.floor=tr(e||(()=>0)),this.boxes=er(),this.bodies=[],this.pins=[],this.balls=[],this.substeps=4,this.iterations=8,this.time=0,this.onImpact=null,this._f={h:0,nx:0,ny:1,nz:0},this.pinSpheres=Wn.map(([e,t,n,r])=>({p:new k(e*nr,t*nr-rr,n*nr),r:r*nr}));let n=Cn.mass,r=1.9*nr,i=Cn.height;this.pinInertia=new k(n*(3*r*r+i*i)/12+n*.04*i*i,n*r*r/2,n*(3*r*r+i*i)/12+n*.04*i*i);for(let e=0;e<U.count;e++){let t=[];for(let n of yn()){let r=new $n({kind:`pin`,mass:Cn.mass,inertia:this.pinInertia,spheres:this.pinSpheres,pos:new k});r.lane=e,r.spot=new k(vn(e)+n.x,q+rr,-(U.length+n.dz)),t.push(r),this.bodies.push(r)}this.pins.push(t)}this.resetPins()}resetLane(e){for(let t of this.pins[e])t.pos.copy(t.spot),t.quat.identity(),t.vel.set(0,0,0),t.ang.set(0,0,0),t.sleeping=!0,t.rest=0,t.updateFrame()}resetPins(){for(let e=0;e<U.count;e++)this.resetLane(e);for(let e of this.balls)this.bodies.splice(this.bodies.indexOf(e),1);this.balls.length=0}throwBall(e,t,n=null,r=3){for(;this.balls.length>=r;){let e=this.balls.shift();this.bodies.splice(this.bodies.indexOf(e),1)}let i=wn.radius,a=wn.mass,o=.4*a*i*i,s=new $n({kind:`ball`,mass:a,inertia:new k(o,o,o),spheres:[{p:new k,r:i}],pos:e});return s.vel.copy(t),n&&s.ang.copy(n),s.age=0,this.balls.push(s),this.bodies.push(s),s}pinsDown(e){let t=0,n=new k;for(let r of this.pins[e]){r.up(n);let e=Math.hypot(r.pos.x-r.spot.x,r.pos.z-r.spot.z);(n.y<.866||e>.35||r.pos.y<r.spot.y-.08)&&t++}return t}step(e){e=Math.min(e,1/20);let t=e/this.substeps;for(let e=0;e<this.substeps;e++)this._substep(t);this.time+=e;for(let t=this.balls.length-1;t>=0;t--){let n=this.balls[t];n.age+=e,(n.pos.y<-50||n.age>40||n.sleeping&&n.age>4&&n.pos.z<-U.deckEnd)&&(this.balls.splice(t,1),this.bodies.splice(this.bodies.indexOf(n),1))}}_substep(e){let t=this.gravity,n=this.bodies.filter(e=>!e.sleeping);for(let r of n)r.vel.y-=t*e,r.updateFrame();let r=this._collide(n);for(let t=0;t<this.iterations;t++)for(let t of r)this._solve(t,e);for(let t of n){t.pos.addScaledVector(t.vel,e);let n=t.ang,r=t.quat;if(Zn.set(n.x,n.y,n.z,0).multiply(r),r.x+=Zn.x*.5*e,r.y+=Zn.y*.5*e,r.z+=Zn.z*.5*e,r.w+=Zn.w*.5*e,r.normalize(),t.ang.multiplyScalar(1-.15*e),t.pos.z<-U.deckEnd-.05&&t.pos.y<q+1.2&&Math.abs(t.pos.x)<U.totalWidth/2){t.vel.z>0&&(t.vel.z*=Math.exp(-30*e));let n=Math.exp(-2.5*e);t.vel.x*=n,t.vel.z*=n,t.ang.multiplyScalar(Math.exp(-2*e))}t.updateFrame(),t.vel.lengthSq()+t.ang.lengthSq()*.05<(t.kind===`ball`?.002:.004)?(t.rest+=e,t.rest>.6&&(t.sleeping=!0,t.vel.set(0,0,0),t.ang.set(0,0,0))):t.rest=0}}_collide(e){let t=[],n=this._f;for(let r of e)for(let e=0;e<r.world.length;e++){let i=r.world[e],a=r.spheres[e].r;this.floor(i.x,i.z,n);let o=(i.y-n.h)*n.ny-a;o<.02&&o>-.12&&t.push(this._contact(r,null,i,a,n.nx,n.ny,n.nz,o,r.kind===`ball`?.06:.22,r.kind===`ball`?.1:.25));for(let e of this.boxes){let n=Math.max(e.c.x-e.h.x,Math.min(i.x,e.c.x+e.h.x)),o=Math.max(e.c.y-e.h.y,Math.min(i.y,e.c.y+e.h.y)),s=Math.max(e.c.z-e.h.z,Math.min(i.z,e.c.z+e.h.z)),c=i.x-n,l=i.y-o,u=i.z-s,d=Math.hypot(c,l,u);if(!(d>a+.02)){if(d<1e-6){let n=e.h.x-Math.abs(i.x-e.c.x),o=e.h.y-Math.abs(i.y-e.c.y),s=e.h.z-Math.abs(i.z-e.c.z);c=l=u=0,n<o&&n<s?c=Math.sign(i.x-e.c.x)||1:o<s?l=Math.sign(i.y-e.c.y)||1:u=Math.sign(i.z-e.c.z)||1,t.push(this._contact(r,null,i,a,c,l,u,-Math.min(n,o,s)-a,.3,.35))}else t.push(this._contact(r,null,i,a,c/d,l/d,u/d,d-a,.3,.35))}}}let r=this.bodies.length;for(let e=0;e<r;e++){let n=this.bodies[e];for(let i=e+1;i<r;i++){let e=this.bodies[i];if(n.sleeping&&e.sleeping)continue;let r=n.bound+e.bound+.02;if(!(n.pos.distanceToSquared(e.pos)>r*r))for(let r=0;r<n.world.length;r++)for(let i=0;i<e.world.length;i++){let a=n.world[r],o=e.world[i],s=n.spheres[r].r,c=e.spheres[i].r,l=a.x-o.x,u=a.y-o.y,d=a.z-o.z,f=Math.sqrt(l*l+u*u+d*d);if(f>s+c+.01||f<1e-6)continue;for(let t of[n,e])t.sleeping&&(t.sleeping=!1,t.rest=0);let p=n.kind===`ball`||e.kind===`ball`;t.push(this._contact(n,e,a,s,l/f,u/f,d/f,f-s-c,p?.55:.45,.2))}}}return t}_contact(e,t,n,r,i,a,o,s,c,l){let u=new k(i,a,o),d=n.clone().addScaledVector(u,-r-Math.min(s,0)*.5),f=d.clone().sub(e.pos),p=t?d.clone().sub(t.pos):null,m=e.invMassAlong(f,u)+(t?t.invMassAlong(p,u):0);e.pointVel(f,Q),t&&Q.sub(t.pointVel(p,Gn));let h=Q.dot(u);return this.onImpact&&h<-.8&&this.onImpact(t?`body`:`world`,-h,d,e,t),{A:e,B:t,n:u,ra:f,rb:p,kN:m,depth:s,bounce:h<-.5&&s<.005?-c*h:0,friction:l,jn:0,ft:new k}}_solve(e,t){let{A:n,B:r,n:i,ra:a,rb:o}=e;n.pointVel(a,Q),r&&Q.sub(r.pointVel(o,Gn));let s=Q.dot(i),c=Math.min(2.5,Math.max(0,-e.depth-.002)*.25/t),l=((e.depth>0?-e.depth/t:Math.max(e.bounce,c))-s)/e.kN,u=e.jn;e.jn=Math.max(0,u+l),l=e.jn-u,l!==0&&(qn.copy(i).multiplyScalar(l),n.applyImpulse(qn,a),r&&r.applyImpulse(qn.negate(),o)),n.pointVel(a,Q),r&&Q.sub(r.pointVel(o,Gn)),Jn.copy(Q).addScaledVector(i,-Q.dot(i));let d=Jn.length();if(d<1e-7)return;Jn.multiplyScalar(1/d);let f=n.invMassAlong(a,Jn)+(r?r.invMassAlong(o,Jn):0);Kn.copy(e.ft),e.ft.addScaledVector(Jn,-d/f);let p=e.friction*e.jn,m=e.ft.length();m>p&&e.ft.multiplyScalar(p/m),qn.copy(e.ft).sub(Kn),n.applyImpulse(qn,a),r&&r.applyImpulse(qn.negate(),o)}},$=(e,t,n,r,i,a)=>{let o=new y(Math.abs(t-e),Math.abs(r-n),Math.abs(a-i));return o.translate((e+t)/2,(n+r)/2,(i+a)/2),o};function ar(e,t,n,r,i,a,o=12){let s=[],c=[],l=[],u=[];for(let u=0;u<=o;u++){let d=u/o*2-1,f=e+d*t/2,p=a-n*(1-d*d),m=2*n*d/(t/2),h=1/Math.hypot(m,1);for(let e of[r,i])s.push(f,p,e),c.push(-m*h,h,0),l.push(u/o,e===r?0:1)}for(let e=0;e<o;e++){let t=e*2;u.push(t,t+2,t+1,t+1,t+2,t+3)}let d=new ve;return d.setAttribute(`position`,new x(s,3)),d.setAttribute(`normal`,new x(c,3)),d.setAttribute(`uv`,new x(l,2)),d.setIndex(u),d}var or={cyan:new A(.06,.78,1),magenta:new A(1,.07,.55),purple:new A(.5,.14,1)},sr=2.6,cr=class{constructor({scene:e,textures:t,colliders:r,terrain:i}){this.group=new h,this.group.name=`Alley`;let a=U,o=a.totalWidth/2,s={plinth:[],trim:[],lane:[],gutter:[],cap:[],kick:[],pit:[],cushion:[],wall:[],rail:[],carpet:[]},c=_n;s.plinth.push($(c.x0,c.x1,0-W.sink,G,c.z1,c.z0)),this.stairs=[];for(let e=0;e<2;e++){let t=0+W.step*(e+1),n=c.z0+W.tread*(2-e),r=W.stairWidth/2+(1-e)*0;s.plinth.push($(vn(2.5)-r,vn(2.5)+r,0-W.sink,t,c.z0-.01,n)),this.stairs.push({x0:vn(2.5)-r,x1:vn(2.5)+r,z0:c.z0,z1:n,top:t})}let l=.035;s.trim.push($(c.x0-.006,c.x1+.006,G-l,G+.003,c.z1-.006,c.z1+.04)),s.trim.push($(c.x0-.006,c.x0+.04,G-l,G+.003,c.z1,c.z0)),s.trim.push($(c.x1-.04,c.x1+.006,G-l,G+.003,c.z1,c.z0));for(let[e,t]of[[c.x0-.006,vn(2.5)-W.stairWidth/2],[vn(2.5)+W.stairWidth/2,c.x1+.006]])s.trim.push($(e,t,G-l,G+.003,c.z0-.04,c.z0+.006));s.carpet.push($(J.x0,J.x1,G-.005,K,J.z1,J.z0)),s.lane.push($(-o,o,K,q,0,a.approach)),-(a.length-1.4);for(let e=0;e<a.count;e++){let t=vn(e);s.lane.push($(t-a.width/2,t+a.width/2,K,q,-a.deckEnd,0));for(let e of[-1,1]){let n=t+e*(a.width/2+a.gutter/2);s.gutter.push(ar(n,a.gutter,a.gutterDepth,0,-a.deckEnd,q)),s.gutter.push($(n-a.gutter/2,n+a.gutter/2,K,q-a.gutterDepth-.004,-a.deckEnd,0))}s.pit.push($(t-a.pitch/2,t+a.pitch/2,q-a.pitDepth-.05,q-a.pitDepth,-a.pitEnd,-a.deckEnd))}for(let e of er()){let t=$(e.c.x-e.h.x,e.c.x+e.h.x,e.c.y-e.h.y,e.c.y+e.h.y,e.c.z-e.h.z,e.c.z+e.h.z);e.tag===`cap`?s.cap.push(t):e.tag===`kickback`?s.kick.push(t):e.tag===`cushion`?s.cushion.push(t):e.tag===`deckEdge`&&s.pit.push(t)}let d=q+1.4,f=q+2.05;s.cushion.push($(-o-.3,o+.3,d,f,-a.pitEnd-.42,-a.pitEnd-.12));for(let e of[-1,1])s.kick.push($(e*(o+.05),e*(o+.3),K,f,-a.pitEnd-.42,-a.deckEnd+.6));for(let e of[-1,1]){let t=e*Y.x;s.wall.push($(t-Y.thick/2,t+Y.thick/2,K,K+Y.height,Y.z1,Y.z0)),s.rail.push($(t-Y.thick/2-.02,t+Y.thick/2+.02,K+Y.height,K+Y.height+.035,Y.z1-.02,Y.z0+.02))}let p={plinth:In(t),trim:Ln(`plinthNosing`,new A(.56,.56,.58),{roughness:.38,metalness:1,clearcoat:0}),carpet:Pn(),lane:Fn(t),gutter:Ln(`gutter`,new A(.035,.035,.04),{roughness:.3,clearcoatRoughness:.08}),cap:Ln(`capping`,new A(.02,.012,.03),{roughness:.3}),kick:Ln(`kickback`,new A(.03,.01,.05),{roughness:.35}),pit:Rn(`pit`,new A(.012,.012,.014),.9),cushion:Rn(`cushion`,new A(.02,.015,.03),.95),wall:Ln(`wall`,new A(.05,.02,.09),{roughness:.25,clearcoatRoughness:.04}),rail:lr()};this.materials=p;for(let e in s){if(!s[e].length)continue;let t=new u(n(s[e]),p[e]);t.name=`alley-`+e,t.castShadow=e!==`carpet`&&e!==`pit`&&e!==`trim`,t.receiveShadow=!0,t.staticVelocity=!0,this.group.add(t)}let m=Y.z0-.4,g=Y.z1+.4,_=K+Y.height-.1,v=K+.26,y=e=>e*(Y.x-Y.thick/2-.07);if(this.neon=new Ae({scene:this.group,tubes:[{a:new k(y(-1),_,m),b:new k(y(-1),_,g),color:or.cyan,radiance:sr,mount:new k(-.07,0,0)},{a:new k(y(-1),v,m),b:new k(y(-1),v,g),color:or.magenta,radiance:sr,mount:new k(-.07,0,0)},{a:new k(y(1),_,m),b:new k(y(1),_,g),color:or.magenta,radiance:sr,mount:new k(.07,0,0)},{a:new k(y(1),v,m),b:new k(y(1),v,g),color:or.purple,radiance:sr*1.15,mount:new k(.07,0,0)},{a:new k(-o,(d+f)/2,-a.pitEnd-.06),b:new k(o,(d+f)/2,-a.pitEnd-.06),color:or.purple,radiance:sr*1.15,radius:.028,mount:new k(0,0,-.07)},{a:new k(-o,d-.08,-a.pitEnd-.06),b:new k(o,d-.08,-a.pitEnd-.06),color:or.cyan,radiance:sr,radius:.02,mount:new k(0,0,-.07)}]}),this.pinMaterial=zn(),this._giantPins(i,r),r){r.addBox(new k(0,(K+q)/2,(a.approach-a.deckEnd)/2),new k(o,(q-K)/2,(a.approach+a.deckEnd)/2),0,{walkable:!0,solid:!1,tag:`lanes`}),r.addBox(new k(0,(0+K)/2,(J.z0+J.z1)/2),new k((J.x1-J.x0)/2,(K-0)/2+.03,(J.z0-J.z1)/2),0,{walkable:!0,solid:!1,tag:`carpet`}),r.addBox(new k((c.x0+c.x1)/2,(0+G)/2,(c.z0+c.z1)/2),new k((c.x1-c.x0)/2,(G-0)/2,(c.z0-c.z1)/2),0,{walkable:!0,solid:!1,tag:`plinth`});for(let e of this.stairs)r.addBox(new k((e.x0+e.x1)/2,(0+e.top)/2,(e.z0+e.z1)/2),new k((e.x1-e.x0)/2,(e.top-0)/2,(e.z1-e.z0)/2),0,{walkable:!0,solid:!1,tag:`stair`});for(let e of er())e.tag!==`cap`&&e.tag!==`deckEdge`&&e.tag!==`approach`&&r.addBox(e.c,e.h,0,{walkable:e.tag!==`kickback`,solid:!0,tag:e.tag})}e.add(this.group)}_giantPins(e,t){let n=Un(.0254,64,120),r=[],i=U,a=e=>e/.381;for(let e=0;e<7;e++){let t=9-e*7.6;r.push({x:-16.2-e%2*.8,z:t,h:4.6+e*37%5*.32}),r.push({x:16.4+(e+1)%2*.8,z:t-2.2,h:4.4+e*53%5*.36})}let o=-(i.pitEnd+6.5);for(let[e,t,n]of[[0,0,6.4],[-3.4,2.6,5.6],[3.4,2.6,5.6],[-6.8,5.2,5],[0,5.2,5.2],[6.8,5.2,5],[-10.2,7.8,4.6],[-3.4,7.8,4.8],[3.4,7.8,4.8],[10.2,7.8,4.6]])r.push({x:e,z:o-t,h:n});r.push({x:-38,z:-70,h:9},{x:44,z:-58,h:7.5},{x:70,z:-140,h:12},{x:-85,z:-120,h:10}),r.push({x:27,z:-14,h:5.5,fallen:!0,yaw:.9});let c=new s(n,this.pinMaterial,r.length),l=new be,u=new j,d=new k,f=new k;r.forEach((n,r)=>{let i=a(n.h),o=e?e.heightAt(n.x,n.z):0,s=r*2.399%(Math.PI*2);n.fallen?(u.setFromAxisAngle(new k(0,1,0),n.yaw).multiply(new j().setFromAxisAngle(new k(0,0,1),Math.PI/2-.06)),f.set(n.x,o+2.3*.0254*i,n.z)):(u.setFromAxisAngle(new k(0,1,0),s),f.set(n.x,o-.02*i,n.z)),d.set(i,i,i),l.compose(f,u,d),c.setMatrixAt(r,l),t&&!n.fallen&&t.addCylinder(n.x,n.z,.05588*i,o-1,o+n.h,{tag:`giantPin`})}),c.castShadow=!0,c.receiveShadow=!0,c.staticVelocity=!0,c.frustumCulled=!1,c.name=`giantPins`,this.group.add(c),this.giantPins=r}};function lr(){return Ln(`chromeRail`,new A(.9,.9,.92),{roughness:.12,metalness:1,clearcoat:0})}var ur=new k,dr=new j,fr=new k,pr=new k,mr=new k,hr={minSpeed:5,maxSpeed:15,chargeTime:1.1},gr=class{constructor({scene:e,terrain:t}){this.world=new ir({terrainHeight:t?(e,n)=>t.heightAt(e,n):null,gravity:Tn}),this.group=new h,this.group.name=`BowlingGame`;let n=Un(Cn.scale,48,96);this.pinMat=zn(),this.ballMat=Bn(),this.ballGeo=new b(wn.radius,48,32),this.pinMeshes=[];for(let e of this.world.pins)for(let t of e){let e=new u(n,this.pinMat);e.castShadow=!0,e.receiveShadow=!0,e.name=`pin`,e.body=t,this.group.add(e),this.pinMeshes.push(e)}this.ballMeshes=[];for(let e=0;e<4;e++){let e=new u(this.ballGeo,this.ballMat);e.castShadow=!0,e.receiveShadow=!0,e.visible=!1,e.name=`ball`,this.group.add(e),this.ballMeshes.push(e)}this.held=new u(this.ballGeo,this.ballMat),this.held.castShadow=!1,this.held.receiveShadow=!0,this.held.name=`heldBall`,this.group.add(this.held),e.add(this.group),this.charge=0,this.charging=!1,this.cooldown=0,this.hook=0,this.frames=Array.from({length:U.count},()=>this._newFrame()),this.state={lane:-1,down:0,ball:1,result:``,resultAge:99,charge:0,charging:!1,total:0,strikes:0},this.onEvent=null,this.sync(0)}_newFrame(){return{ball:1,firstDown:0,down:0,result:``,resetIn:-1,watching:null}}resetAll(){this.world.resetPins(),this.frames=this.frames.map(()=>this._newFrame()),this.state.result=``,this.onEvent&&this.onEvent(`reset`,{})}resetLane(e){for(let t=this.world.balls.length-1;t>=0;t--){let n=this.world.balls[t];bn(n.pos.x)===e&&n.pos.z<0&&(this.world.balls.splice(t,1),this.world.bodies.splice(this.world.bodies.indexOf(n),1))}this.world.resetLane(e),this.frames[e]=this._newFrame()}update(e,{down:t,left:n,right:r,reset:i},a,o,s){i&&this.resetAll(),this.cooldown=Math.max(0,this.cooldown-e);let c=this.cooldown<=0;t&&c?(this.charging=!0,this.charge=Math.min(1,this.charge+e/hr.chargeTime),this.hook+=(!!r-+!!n)*e*1.6,this.hook=Math.max(-1,Math.min(1,this.hook))):this.charging&&(this.throw(o,s),this.charging=!1,this.charge=0,this.hook=0),this.world.step(e),this._score(e),this.sync(e,a,c);let l=bn(o.x),u=this.state;if(u.lane=l,u.charge=this.charge,u.charging=this.charging,u.hook=this.hook,u.resultAge+=e,l>=0){let e=this.frames[l];u.down=this.world.pinsDown(l),u.ball=e.ball}}throw(e,t){pr.set(-Math.sin(t),0,-Math.cos(t)),mr.set(-pr.z,0,pr.x);let n=hr.minSpeed+(hr.maxSpeed-hr.minSpeed)*this.charge**1.2;ur.copy(e).addScaledVector(pr,.75).addScaledVector(mr,.22),ur.y=this.world.floor(ur.x,ur.z,this.world._f).h+wn.radius+.01;let r=pr.clone().multiplyScalar(n),i=pr.clone().multiplyScalar(this.hook*n/wn.radius*.35);i.addScaledVector(mr,-n/wn.radius*.6);let a=this.world.throwBall(ur.clone(),r,i,3);a.lane=bn(ur.x),a.thrownAt=this.world.time,this.cooldown=.9;let o=a.lane;o>=0&&(this.frames[o].resetIn>0&&this.resetLane(o),this.frames[o].watching=a),this.onEvent&&this.onEvent(`throw`,{speed:n,lane:o})}_score(e){let t=this.world;for(let n=0;n<this.frames.length;n++){let r=this.frames[n];if(r.resetIn>0){r.resetIn-=e,r.resetIn<=0&&(this.resetLane(n),this.onEvent&&this.onEvent(`rerack`,{lane:n}));continue}let i=r.watching;if(!i)continue;let a=t.balls.includes(i),o=t.time-i.thrownAt,s=i.pos.z<-U.deckEnd,c=i.sleeping||i.vel.lengthSq()<.01;if(!r.settleAt){if(!((!a||s||c)&&o>1.5||o>12))continue;r.settleAt=t.time+(s?2:.6)}let l=this.world.pins[n].some(e=>!e.sleeping);if((t.time<r.settleAt||l&&t.time<r.settleAt+5)&&o<18)continue;r.settleAt=0,r.watching=null;let u=t.pinsDown(n),d=``;r.ball===1?(r.firstDown=u,u===10?(d=`strike`,r.resetIn=3):(r.ball=2,d=u===0?`miss`:`count`)):(d=u===10?`spare`:u===r.firstDown?`miss`:`count`,r.resetIn=2.6),this.state.total+=r.ball===2&&d!==`strike`&&r.resetIn>0?u-r.firstDown:u,r.down=u,r.result=d,d===`strike`&&this.state.strikes++,this.state.result=d,this.state.resultLane=n,this.state.resultDown=u,this.state.resultAge=0,this.onEvent&&this.onEvent(d,{lane:n,down:u})}}sync(e,t=null,n=!0){for(let e of this.pinMeshes){let t=e.body;fr.set(0,-Cn.comY,0).applyQuaternion(t.quat),e.position.copy(t.pos).add(fr),e.quaternion.copy(t.quat)}let r=this.world.balls;for(let e=0;e<this.ballMeshes.length;e++){let t=this.ballMeshes[e],n=r[e];t.visible=!!n,n&&(t.position.copy(n.pos),t.quaternion.copy(n.quat))}let i=this.held;if(i.visible=!!t&&n,t&&n){let e=this.charge;fr.set(.3+e*.04,-.5-e*.14,-.62+e*.4),fr.applyQuaternion(t.quaternion),i.position.copy(t.position).add(fr),dr.copy(t.quaternion),i.quaternion.copy(dr)}}},_r=class{constructor(){this.ctx=null,this.muted=!1,this.enabled=!1,this._last=0,this._hits=0}resume(){if(!this.ctx){let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=.8,this.master.connect(t.destination);let n=t.sampleRate*2;this.noise=t.createBuffer(1,n,t.sampleRate);let r=this.noise.getChannelData(0);for(let e=0;e<n;e++)r[e]=Math.random()*2-1;let i=t.createBuffer(1,n,t.sampleRate),a=i.getChannelData(0),o=0;for(let e=0;e<n;e++)o=(o+.02*(Math.random()*2-1))/1.02,a[e]=o*3.5;let s=t.createBufferSource();s.buffer=i,s.loop=!0,this.rollFilter=t.createBiquadFilter(),this.rollFilter.type=`lowpass`,this.rollFilter.frequency.value=200,this.rollGain=t.createGain(),this.rollGain.gain.value=0,s.connect(this.rollFilter).connect(this.rollGain).connect(this.master),s.start(),this.enabled=!0}this.ctx.state===`suspended`&&this.ctx.resume()}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.8)}_att(e,t){return t?1/(1+Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z)*.09):1}impact(e,t,n,r){if(!this.enabled||this.muted)return;let i=this.ctx,a=i.currentTime;if(a-this._last<.025)return;this._last=a;let o=e.startsWith(`ball`),s=e.endsWith(`floor`),c=Math.min(1,t/(o?6:3.5)),l=c*c*this._att(n,r)*(s?.35:.8);if(l<.004)return;let u=i.createGain();u.gain.value=l,u.connect(this.master);let d=i.createBufferSource();d.buffer=this.noise;let f=i.createBiquadFilter();f.type=`bandpass`,f.frequency.value=(o?900:2600)*(.85+Math.random()*.3)*(s?.6:1),f.Q.value=1.4;let p=i.createGain();p.gain.setValueAtTime(1,a),p.gain.exponentialRampToValueAtTime(.001,a+(o?.09:.05)),d.connect(f).connect(p).connect(u),d.start(a,Math.random()*1.5,.12);let m=o?[[180,.5,.18],[520,.25,.08]]:[[690,.6,.12],[1870,.35,.05]];for(let[e,t,n]of m){let r=i.createOscillator();r.type=`sine`,r.frequency.value=e*(.92+Math.random()*.16);let o=i.createGain();o.gain.setValueAtTime(t*(s?.4:1),a),o.gain.exponentialRampToValueAtTime(.001,a+n),r.connect(o).connect(u),r.start(a),r.stop(a+n+.02)}}update(e,t,n,r){if(!this.enabled)return;let i=this.ctx.currentTime,a=Math.min(1,t/12),o=t>.2?(.15+.6*a)*this._att(n,r):0;this.rollGain.gain.setTargetAtTime(this.muted?0:o,i,.05),this.rollFilter.frequency.setTargetAtTime(90+260*a,i,.1)}chime(e){if(!this.enabled||this.muted)return;let t=this.ctx,n=t.currentTime;(e?[659.25,987.77,1318.5]:[659.25,880]).forEach((e,r)=>{let i=t.createOscillator();i.type=`sine`,i.frequency.value=e;let a=t.createGain(),o=n+r*.11;a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.08,o+.01),a.gain.exponentialRampToValueAtTime(.001,o+1.2),i.connect(a).connect(this.master),i.start(o),i.stop(o+1.3)})}},vr=new k(-.32,.4,.86).normalize(),yr=new k(.05,.3,-1).normalize(),br=class{constructor(){this.settings={exposure:.6,renderScale:1},this.qs=new URLSearchParams(location.search)}async init(e=()=>{}){let t=this.qs,n=async(t,n,r)=>{e(t,n,r),typeof requestAnimationFrame==`function`&&await new Promise(e=>requestAnimationFrame(()=>setTimeout(e,0)))};await n(.02,`启动 WebGPU…`);let r=this.engine=new _(document.getElementById(`app`));await r.init();let i=r,{scene:o,camera:s}=r;s.near=.05,s.updateProjectionMatrix(),this.renderer=i,this.scene=o,this.camera=s,this.input=new p(r.domElement),this.fly=new _e(s,r.domElement,this.input),D.windSpeed.value=0,D.windDir.value.set(1,0),D.seaLevel.value=-1e3,await n(.04,`载入月面贴图…`);let{textures:c,failed:l}=await an();this.textureFailures=l,this.sunDir=vr.clone(),this.sky=new ln({textures:c,sunDir:this.sunDir,earthDir:yr}),this.sky.starIntensity.value=+!t.has(`noStars`),D.sunDir.value.copy(this.sunDir),D.night.value=0,D.sunColor.value.copy(this.sky.sunIllum.value),D.skyIrradiance.value.setRGB(.0015,.002,.0032),D.horizonColor.value.setRGB(.11,.105,.1),this.csm=this.shadows=new O({size:2048,splits:[8,45,320],lightMargin:120,normalBias:[.012,.05,.25],bias:2e-5}),this.shadows.layerMask=1<<Te.OPAQUE|1<<Te.TRANSPARENT,this.environment=new Le(i,o,this.sky),ke(),await n(.08,`生成陨石坑…`),this.terrainData=new kn,this.colliders=new C,await n(.18,`烘焙地形…`),this.terrainGPU=new ht(this.terrainData,null),this.terrain=new bt({scene:o,terrainData:this.terrainData,terrainGPU:this.terrainGPU,renderer:i}),Mn(this.terrain,c),this.terrain.mesh.material.appliesHillShadow=!0,await n(.24,`铺球道…`),this.alley=new cr({scene:o,textures:c,colliders:this.colliders,terrain:this.terrainData}),this.game=new gr({scene:o,terrain:this.terrainData}),this.nextDoor={x:-8.6,y:K,z:9.2,yaw:2.27,scale:1,open:1.25,portal:!0},this.portalWatch=new le([this.nextDoor]),this.portalUrl=t.get(`portal`)||`maze/?door=1`;let u=t.has(`doorPreview`)?[{x:-6.6,y:K,z:10.6,yaw:2.27,open:1.25,portal:!0},{x:-10.6,y:K,z:7.4,yaw:2,open:.35}]:[];this.doors=he({doors:[this.nextDoor,...u]}),o.add(this.doors.group),w(this.colliders,[this.nextDoor]);for(let e of[this.terrain.mesh,this.alley.group,this.game.group,this.doors.group])e.traverse(e=>{if(e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.underwaterLighting=`none`});this.terrain.mesh.material.localLightsCheap=!0,Ce({clouds:null,terrain:this.terrainGPU}),kt({terrain:this.terrainGPU,clouds:null,moon:{albedo:.12,envGround:sn}}),this.sceneRenderer=new a(r.meshRenderer,o,s),this.sceneRenderer.background=this.sky.background,T(this.terrain.mesh),T(this.alley.group),T(this.doors.group),this.query=new de,D.cameraUnderwater.value=0,D.cameraWaterHeight.value=re,this.player=new Qt({camera:s,input:this.input,terrain:this.terrainData,colliders:this.colliders,query:this.query,boat:null,reef:null}),this.player.gravity=Tn,this.player.jumpSpeed=2.4,this.player.walkRadius=900;let d=F.spawn.position;this.player.position.set(d.x,q,d.z),this.player.yaw=0,this.player.pitch=-.06,this.freeCam=t.has(`fly`),this.fly.setPose(new k(d.x,q+4,d.z+4),0,-.12),await n(.3,`准备着色器…`),this.underwater=new ce({depthTexture:this.sceneRenderer.sceneRT.depthTexture,maskTexture:this.sceneRenderer.waterMaskTexture,query:this.query,caustics:null,fft:null}),this.haze=null,this.post=new fe(i,{sceneRenderer:this.sceneRenderer,camera:s,underwater:this.underwater,clouds:null,sunDir:this.sky.sunDir,haze:null}),D.exposure.value=this.settings.exposure;let f=this.post.autoExposure;f.min.value=.85,f.max.value=1.1,this.dynScale=new ye(this,{enabled:!t.has(`scale`)}),t.has(`scale`)&&(this.settings.renderScale=Number(t.get(`scale`))||1),this.setRenderScale(this.settings.renderScale),this.audio=t.has(`noAudio`)?null:new _r,this.game.world.onImpact=(e,t,n,r,i)=>{if(!this.audio)return;let a=e===`world`?r.kind===`ball`?`ballfloor`:`pinfloor`:r.kind===`ball`||i&&i.kind===`ball`?`ballpin`:`pinpin`;a===`ballfloor`&&t<1.2||this.audio.impact(a,t,n,this.camera.position)},this.game.onEvent=e=>{e===`strike`&&this.audio&&this.audio.chime(!0),e===`spare`&&this.audio&&this.audio.chime(!1)},r.domElement.addEventListener(`click`,()=>{this.input.requestLock(),this.audio&&this.audio.resume()}),window.__app=this,this.gpu=M,await n(.36,`编译着色器…`,.95),await this.precompile(),await n(.96,`预热…`);for(let e=0;e<2;e++)this.frame(1/60),await M.queue.onSubmittedWorkDone()}async precompile(){let e=this.engine.meshRenderer;this.post._built||(this.post._build(),this.post._outW=0),await M.pipelinesReady(),e.precompiling=!0;let t=this.game.ballMeshes.filter(e=>!e.visible);for(let e of t)e.visible=!0;try{this.frame(1/60)}catch(e){console.warn(`precompile failed`,e)}for(let e of t)e.visible=!1;e.precompiling=!1,await M.pipelinesReady(),await M.queue.onSubmittedWorkDone()}setFreeCam(e){if(e!==this.freeCam){if(this.freeCam=e,e){let e=new ge().setFromQuaternion(this.camera.quaternion,`YXZ`);this.fly.setPose(this.camera.position.clone(),e.y,e.x),this.fly.velocity.set(0,0,0)}else{let e=this.player,t=this.camera.position,n=new ge().setFromQuaternion(this.camera.quaternion,`YXZ`);e.yaw=n.y,e.pitch=E.clamp(n.x,-1.5,1.5),e.velocity.set(0,0,0);let r=Math.hypot(t.x,t.z),i=r>900?900/r:1,a=t.x*i,o=t.z*i,s=Math.max(this.terrainData.heightAt(a,o),this.colliders.groundHeightAt(a,o,t.y));e.mode=`walk`,e.position.set(a,Math.max(t.y-1.62,s),o),e.grounded=!1}}}enterPortal(){if(this._leaving=!0,typeof document>`u`)return;let e=document.getElementById(`whiteout`);e&&e.classList.add(`on`),this.audio&&this.audio.setMuted&&setTimeout(()=>this.audio.setMuted(!0),500);let t=this.portalUrl,n=performance.now(),r=()=>{location.href=t},i=()=>{fetch(t.split(`?`)[0],{cache:`no-store`}).then(e=>{e.ok?r():a()}).catch(a)},a=()=>{performance.now()-n>2e4?r():setTimeout(i,500)};setTimeout(i,900)}start(){this.engine.start(e=>this.frame(e))}updateFPS(e){let t=this._fps||={el:document.getElementById(`fps`),acc:0,n:0};if(t.acc+=e,t.n++,t.acc>=.5){let e=t.n/t.acc;this.fps=e,t.el&&t.el.style.display!==`none`&&(t.el.textContent=`${e.toFixed(0)} fps · ${(1e3*t.acc/t.n).toFixed(1)} ms · 渲染 ${Math.round(this.settings.renderScale*100)}%`),t.acc=0,t.n=0}}frame(e){let t=performance.now();this._frame(e);let n=performance.now()-t;this.cpuMs=this.cpuMs===void 0?n:this.cpuMs*.95+n*.05}_frame(e){M.beginFrame(),t.fields.frameIndex.value=M.frame;let n=this.input;this.updateFPS(e),this.dynScale&&this.dynScale.update(e),D.dt.value=e,D.time.value+=e,n.hit(`KeyF`)&&this.setFreeCam(!this.freeCam),n.hit(`KeyM`)&&this.audio&&this.audio.setMuted(!this.audio.muted),n.hit(`KeyP`)&&(this._fpsLog=!this._fpsLog,this._fpsN=0,this._fpsT=0,this._fpsWorst=0,console.log(this._fpsLog?`[fps] 开始记录（每 2 秒一行，再按 P 停）`:`[fps] 停止`)),this._fpsLog&&(this._fpsN++,this._fpsT+=e,this._fpsWorst=Math.max(this._fpsWorst,e),this._fpsT>=2&&(console.log(`[fps] 平均 ${(this._fpsN/this._fpsT).toFixed(0)} fps，最慢一帧 ${(this._fpsWorst*1e3).toFixed(1)} ms，渲染比例 ${(this.settings.renderScale*100).toFixed(0)}%`),this._fpsN=0,this._fpsT=0,this._fpsWorst=0)),this.freeCam?this.fly.update(e):this.player.update(e),!this.freeCam&&!this._leaving&&this.portalWatch.update(this.player.position)&&this.enterPortal();let r=this.player,i=this.freeCam?this.camera.position.clone().setY(this.camera.position.y-1.62):r.position,a=this.freeCam?new ge().setFromQuaternion(this.camera.quaternion,`YXZ`).y:r.yaw;this.game.update(Math.min(e,1/20),{down:n.mouseDown&&(n.locked||this._forceThrow),left:n.down(`KeyQ`),right:n.down(`KeyE`),reset:n.hit(`KeyR`)},this.camera,i,a),this.game.held.visible=this.game.held.visible&&!this.freeCam,this.sky.update(e,this.camera,this.sceneRenderer.sceneRT.height),this.environment.update(e),this.terrain.update(this.camera),D.exposure.value=this.settings.exposure,ae(this.camera),this.post.lens.update(e,!1),this.post.flare&&(this.post.flare.setDepthHeight(this.sceneRenderer.sceneRT.height),this.post.flare.update(this.camera,e,{aboveWater:!0})),this.post.beginFrame(),this.underwater.updateCamera(this.camera),this.shadows.render(this.scene,this.engine.meshRenderer,this.shadows.update(this.camera,D.sunDir.value)),this.sceneRenderer.render(),this.post.flare&&this.post.flare.kernel.dispatch(1),this.post.render(),this.post.endFrame(),M.submit(),this.updateAudio(e),n.endFrame()}setRenderScale(e){let t=E.clamp(Math.round(e*20)/20,.5,1);this.settings.renderScale=t,this.post.setScale(t)}updateAudio(e){if(!this.audio||!this.audio.enabled)return;let t=0,n=null,r={h:0,nx:0,ny:1,nz:0};for(let e of this.game.world.balls){this.game.world.floor(e.pos.x,e.pos.z,r);let i=e.pos.y-r.h-e.spheres[0].r<.03,a=Math.hypot(e.vel.x,e.vel.z);i&&a>t&&(t=a,n=e.pos)}this.audio.update(e,t,n||this.camera.position,this.camera.position)}},xr=e=>document.getElementById(e),Sr=xr(`loader`),Cr=xr(`bar`),wr=xr(`status`),Tr=xr(`overlay`),Er=0,Dr=0,Or=(e,t)=>{Dr=Math.max(Dr,e),t&&(wr.textContent=t)};if((function e(){Er+=(Dr-Er)*.12,Cr.style.width=(Er*100).toFixed(1)+`%`,Sr.style.display!==`none`&&requestAnimationFrame(e)})(),!navigator.gpu)wr.textContent=`这个浏览器没有 WebGPU。请用最新版 Chrome 或 Edge 打开（Windows / macOS）。`,wr.classList.add(`err`);else{pe(`moon`);let e=new br;e.init(Or).then(()=>{Or(1,`完成`),Sr.classList.add(`out`),setTimeout(()=>Sr.style.display=`none`,700),new URLSearchParams(location.search).has(`manual`)||(xe(e,`moon`),e.start()),window.__ready=!0,Tr.classList.add(`on`),Tr.addEventListener(`click`,()=>{e.input.requestLock(),e.audio&&e.audio.resume(),Tr.classList.remove(`on`)}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement?Tr.classList.remove(`on`):Tr.classList.add(`on`)})}).catch(e=>{console.error(e),wr.textContent=`出错了：`+(e&&e.message?e.message:e),wr.classList.add(`err`)})}