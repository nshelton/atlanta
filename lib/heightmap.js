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


function loadImage(path) {

	var t = THREE.ImageUtils.loadTexture(path );

	t.magFilter = THREE.NearestFilter;

	// t.generateMipmaps();
	return t;
}

function genHeightmap(path) {
	var dir = path;


	var t0 = loadImage( "images/households/" + path + "/1940.png" );
	var t1 = loadImage( "images/households/" + path + "/1950.png" );
	var t2 = loadImage( "images/households/" + path + "/1960.png" );
	var t3 = loadImage( "images/households/" + path + "/1970.png" );
	var t4 = loadImage( "images/households/" + path + "/1980.png" );
	var t5 = loadImage( "images/households/" + path + "/1990.png" );
	var t6 = loadImage( "images/households/" + path + "/2000.png" );

	var t7 = loadImage( "images/households/" + path + "/2010.png" );
	var t8 = loadImage( "images/households/" + path + "/2020.png" );
	var t9 = loadImage( "images/households/" + path + "/2030.png" );
	var t10 = loadImage( "images/households/" + path + "/2040.png" );
	


	shadermat = new THREE.ShaderMaterial( {

		uniforms: {
			time: { type: "f", value: 0 },
			extrude: { type: "f", value: 0.2 },
			tex0: { type: "t", value: t0 },
			tex1: { type: "t", value: t1 },
			tex2: { type: "t", value: t2 },
			tex3: { type: "t", value: t3 },
			tex4: { type: "t", value: t4 },
			tex5: { type: "t", value: t5 },
			tex6: { type: "t", value: t6 },
			tex7: { type: "t", value: t7 },
			tex8: { type: "t", value: t8 },
			tex9: { type: "t", value: t9 },
			tex10: { type: "t", value: t10 }
		},
		vertexShader: document.getElementById( 'vertexShader' ).textContent,
		fragmentShader: document.getElementById( 'fragmentShader' ).textContent,
		// transparent:true,
		// opacity:0.5,
		wireframe:true,
		// wireframeLinewidth:2,
		side: THREE.DoubleSide,

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