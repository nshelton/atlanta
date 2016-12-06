
var shadermat;


function loadImage(path) {

	var t = THREE.ImageUtils.loadTexture(path );

	t.magFilter = THREE.NearestFilter;

	// t.generateMipmaps();
	return t;
}

function genHeightmap(metadata) {
	
	var t = loadImage(metadata.tileFile );

	shadermat = new THREE.ShaderMaterial( {
		uniforms: {
			time: { type: "f", value: 0 },
			transition: { type: "f", value: 0 },
			channel_1: { type: "f", value: 0 },
			channel_0: { type: "f", value: 0 },
			total_channels: { type: "f", value: metadata.tiles },
			extrude: { type: "f", value: 0.4 },
			colorkey: { type: "f", value: (100/15 * 8.5) / 100},
			tex: { type: "t", value: t },
			colormap: { type: "t", value:  loadImage( "images/colormap.png" ) }
		},
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		// transparent:true,
		// opacity:0.5,
		// depthRead:false,
		// depthWrite:false,
		wireframe:true,
		wireframeLinewidth:2,
		side: THREE.DoubleSide,

	} );

	shadermat.uniforms.colormap.value.wrapS = THREE.RepeatWrapping;
	shadermat.uniforms.colormap.value.wrapT = THREE.RepeatWrapping;

	t.image.onload = function() {

        var pop_ui = $('<div>Population Density</div>');
		for(var i = 0; i < metadata.tiles; i ++) {
	      var b = $('<button/>')
	        .text(metadata.tileNames[i])
	        .data("channel", i)
	        .click(function () { 
	        	var u = shadermat.uniforms;
	        	
	        	u.channel_1.value = u.channel_0.value; 
	        	u.channel_0.value = ($(this).data("channel")) 
	        	u.transition.value = 1.;

				var anim = new TWEEN.Tween(u.transition).to({value:0}, 1000).start()
	        

	        });
	        pop_ui.append(b);
		}
		$("#ui").append(pop_ui)
	}

	var geo = new THREE.PlaneGeometry( 
		metadata.width, 
		metadata.height, 
		metadata.res, 
		metadata.res );

	var object = new THREE.Mesh( geo, shadermat);
	// object.position.set( metadata.center.x, metadata.center.y, -0.05);


	return object;
}