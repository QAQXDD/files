import{B as e,F as t,H as n,I as r,K as i,M as a,N as o,P as s,V as c,ct as l,lt as u,rt as d,v as f,y as p}from"./LoadShot-6GiQl15a.js";var m=8,h=()=>Array.from({length:m},()=>new l),g=new r(`NeonParams`,{a:[`vec4f[${m}]`,h()],b:[`vec4f[${m}]`,h()],c:[`vec4f[${m}]`,h()],count:[`i32`,0],diffuseBoost:[`f32`,1.6],fold:[`f32`,0]},{label:`neon`}),_=g,v=new t({name:`neonLights`,deps:[s,o],uniforms:g,uniformName:`neon`,code:`
fn neonCover( P: vec3f, R: vec3f, a: vec3f, t: vec3f, len: f32, rad: f32, rough: f32 ) -> f32 {
	// closest approach between the reflected ray P + R u (u >= 0) and the segment a + t v
	let w0 = P - a;
	let bb = dot( R, t );
	let dd = dot( R, w0 );
	let ee = dot( t, w0 );
	let den = max( 1.0 - bb * bb, 1e-5 );
	let v = clamp( ( ee - bb * dd ) / den, 0.0, len );
	let q = a + t * v;
	let u = max( dot( q - P, R ), 0.0 );
	let dist = max( length( q - P ), 0.05 );
	let ang = length( q - ( P + R * u ) ) / dist;
	let w = rad / dist;
	let sig = rough * rough * 0.85 + 0.0015;
	let s2 = sig * sig + w * w * 0.4;
	return min( 1.0, 2.0 * w / sqrt( 6.2832 * s2 ) ) * exp( -ang * ang / ( 2.0 * s2 ) ) * step( 0.0, u );
}

fn hookLocalLights( s: Surface, P0: vec3f, N0: vec3f, V0: vec3f, acc: ptr<function, LightAccum> ) {
#if !IS_WATER && !NO_LOCAL_LIGHTS
	var P = P0;
	var N = N0;
	var V = V0;
	if ( neon.fold > 0.0 ) {
		let k = floor( P0.z / neon.fold );
		let lz = P0.z - k * neon.fold;
		if ( ( k - 2.0 * floor( k * 0.5 ) ) > 0.5 ) {
			P.z = neon.fold - lz;
			N.z = -N0.z;
			V.z = -V0.z;
		} else {
			P.z = lz;
		}
	}
	let diffuseColor = s.albedo * ( 1.0 - s.metalness );
	let F0 = mix( vec3f( 0.04 ) * s.specularIntensity, s.albedo, s.metalness );
	let NdV = max( dot( N, V ), 1e-3 );
	let Fr = F0 + ( vec3f( 1.0 ) - F0 ) * pow5( 1.0 - NdV );
	let Fcc = 0.04 + 0.96 * pow5( 1.0 - NdV );
	let R = reflect( -V, N );
	let rough = clamp( s.roughness, 0.03, 1.0 );
	for ( var i = 0; i < neon.count; i++ ) {
		let A = neon.a[ i ];
		let a = A.xyz;
		let rad = A.w;
		let ab = neon.b[ i ].xyz - a;
		let len = max( length( ab ), 1e-3 );
		let t = ab / len;
		let Le = neon.c[ i ].xyz;
		let ap = P - a;
		let s0 = dot( ap, t );
		let dperp = max( length( ap - t * s0 ), rad * 2.0 );
		if ( dperp > 34.0 ) { continue; }
		let win = 1.0 - smoothstep( 20.0, 34.0, dperp );
		let sa = -s0 / sqrt( dperp * dperp + s0 * s0 );
		let sb = ( len - s0 ) / sqrt( dperp * dperp + ( len - s0 ) * ( len - s0 ) );
		let E = Le * ( 2.0 * rad * ( sb - sa ) / dperp ) * neon.diffuseBoost * win;
		let foot = a + t * clamp( s0, 0.0, len );
		let L = normalize( foot - P );
		let ndl = sat( dot( N, L ) * 0.85 + 0.15 ) * step( -0.15, dot( N, L ) );
		( *acc ).directDiffuse += E * ndl * diffuseColor * INV_PI;
#if !LOCAL_LIGHTS_CHEAP
		let cov = neonCover( P, R, a, t, len, rad, rough ) * win;
		( *acc ).directSpecular += Fr * Le * cov * step( 0.0, dot( N, L ) + 0.2 );
		if ( s.clearcoat > 0.0 ) {
			let Rc = reflect( -V, s.clearcoatNormal );
			let covc = neonCover( P, Rc, a, t, len, rad, clamp( s.clearcoatRoughness, 0.03, 1.0 ) ) * win;
			( *acc ).directSpecular += vec3f( Fcc * s.clearcoat ) * Le * covc;
		}
#endif
	}
#endif
}
`});function y(){a.set(`localLights`,v)}var b=new u,x=new u,S=class{constructor({scene:t,tubes:r}){this.tubes=r,this.meshes=[];let a=g.fields;a.count.value=Math.min(m,r.length);let o=[];if(r.forEach((e,r)=>{let s=e.radius??.022;r<m&&(a.a.value[r].set(e.a.x,e.a.y,e.a.z,s),a.b.value[r].set(e.b.x,e.b.y,e.b.z,0),a.c.value[r].set(e.color.r*e.radiance,e.color.g*e.radiance,e.color.b*e.radiance,0));let l=b.copy(e.b).sub(e.a).length(),f=new n(s,s,l,12,1,!1),h=p({name:`neon`+r,lit:!1,uniforms:{neonColor:[`vec3f`,new d(e.color.r*e.radiance,e.color.g*e.radiance,e.color.b*e.radiance)]}});h.surface=`
	// a lit glass tube: the gas glows through the whole width, a bit brighter through the middle
	let facing = abs( dot( normalize( in.N ), normalize( in.V ) ) );
	s.albedo = vec3f( 0.0 );
	s.emissive = mat.neonColor * ( 0.6 + 0.4 * facing );
`,h.receiveShadows=!1;let g=new i(f,h);g.castShadow=!1,g.receiveShadow=!1;let _=x.copy(e.a).add(e.b).multiplyScalar(.5);g.position.copy(_);let v=b.normalize();if(g.quaternion.setFromUnitVectors(new u(0,1,0),v),g.staticVelocity=!0,g.name=`neon`+r,t.add(g),this.meshes.push(g),e.mount){let t=Math.max(2,Math.round(l/1.6));for(let n=0;n<=t;n++){let r=x.copy(e.a).lerp(e.b,(n+1e-4)/(t+2e-4)),i=new c(Math.abs(e.mount.x)+.015,.03,Math.abs(e.mount.z)+.015);i.translate(r.x+e.mount.x*.5,r.y,r.z+e.mount.z*.5),o.push(i)}}}),o.length){let n=f({name:`neonBrackets`,color:14211292,metalness:1,roughness:.22}),r=new i(e(o),n);r.castShadow=!1,r.staticVelocity=!0,t.add(r),this.meshes.push(r)}}};export{y as n,_ as r,S as t};