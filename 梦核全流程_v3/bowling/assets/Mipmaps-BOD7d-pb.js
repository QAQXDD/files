import{z as e}from"./LoadShot-6GiQl15a.js";var t=new Map,n=null;function r(r){let i=t.get(r);return i||(n||=e.device.createShaderModule({label:`mipmap`,code:`
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
	`}),i=e.device.createRenderPipeline({label:`mipmap `+r,layout:`auto`,vertex:{module:n,entryPoint:`vs`},fragment:{module:n,entryPoint:`fs`,targets:[{format:r}]},primitive:{topology:`triangle-list`}}),t.set(r,i),i)}var i=new WeakMap;function a(t,n,r){let a=i.get(t);if(a&&a.gpu===n)return a;let o=t.mipLevelCount,s=t.dimension===`3d`?1:t.depth,c=[],l=r.getBindGroupLayout(0);for(let r=0;r<s;r++)for(let i=1;i<o;i++){let a=n.createView({dimension:`2d`,baseMipLevel:i-1,mipLevelCount:1,baseArrayLayer:r,arrayLayerCount:1}),o=n.createView({dimension:`2d`,baseMipLevel:i,mipLevelCount:1,baseArrayLayer:r,arrayLayerCount:1}),s=e.device.createBindGroup({label:`mipmap `+t.label,layout:l,entries:[{binding:0,resource:a},{binding:1,resource:e.samplers.linearClamp}]});c.push({bg:s,desc:{label:`mipmap`,colorAttachments:[{view:o,loadOp:`clear`,storeOp:`store`,clearValue:[0,0,0,0]}]}})}return a={gpu:n,pipeline:r,steps:c},i.set(t,a),a}function o(t,n=e.getEncoder()){if(t.mipLevelCount<2)return;let i=t.getGPU(),o=r(t.format),{steps:s}=a(t,i,o);for(let e=0;e<s.length;e++){let t=n.beginRenderPass(s[e].desc);t.setPipeline(o),t.setBindGroup(0,s[e].bg),t.draw(3),t.end()}}export{o as t};