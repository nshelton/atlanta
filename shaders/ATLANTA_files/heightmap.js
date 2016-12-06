var heightmap = {
    bottom_left : {
        x : -85.31474123362409,
        y : 32.9821742543956
    },
    width : 1.8535184672482075,
    height : 1.526845254609995,
    res : 500
}
var shadermat;

function genHeightmap() {


	var t0 = THREE.ImageUtils.loadTexture( "images/b0.png" );
	var t1 = THREE.ImageUtils.loadTexture( "images/b1.png" );
	var t2 = THREE.ImageUtils.loadTexture( "images/b2.png" );
	var t3 = THREE.ImageUtils.loadTexture( "images/b3.png" );
	var t4 = THREE.ImageUtils.loadTexture( "images/b4.png" );
	var t5 = THREE.ImageUtils.loadTexture( "images/b5.png" );
	
	shadermat = new THREE.ShaderMaterial( {

		uniforms: {
			time: { type: "f", value: 0 },
			extrude: { type: "f", value: 0.2 },
			tex0: { type: "t", value: t0 },
			tex1: { type: "t", value: t1 },
			tex2: { type: "t", value: t2 },
			tex3: { type: "t", value: t3 },
			tex4: { type: "t", value: t4 },
			tex5: { type: "t", value: t5 }
		},
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		// transparent:true,
		// opacity:0.5,
		wireframe:true,
		wireframeLinewidth:5,
		side: THREE.DoubleSide
	} );

	var geo = new THREE.PlaneGeometry( 
		heightmap.width, 
		heightmap.height, 
		heightmap.res, 
		heightmap.res );

	var object = new THREE.Mesh( geo, shadermat);
	object.position.set(
		heightmap.bottom_left.x + heightmap.width/2,
		heightmap.bottom_left.y + heightmap.height/2,
		-0.05)
	return object;
}