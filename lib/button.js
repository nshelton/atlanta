var doAnimate = true;

var timeTo = function(x) {
	doAnimate = false;
	var t = new TWEEN.Tween(shadermat.uniforms.time).to({value:x},500).start();
}

var camTransition = function(x) {
	var noRotation = {x:0, y:0, z:0};
	var t = new TWEEN.Tween(camera.position).to(x.position,1000).start();
	var u = new TWEEN.Tween(camera.up).to(x.up,1000).start()
	var a = new TWEEN.Tween(controls.target).to(x.target,1000).start()
	var f = new TWEEN.Tween(SceneRoot.rotation).to(noRotation,1000).start()

}

var c0 = {
	position: 	{x: -84.3900, y: 33.7550,	z: 1},
	up : 		{x: 0, 		y: 1, 	z: 0 },
	target :{x:-84.3900, y:33.7550, z:0}
} 
var c1 = {
	position: 	{x: -83.4, 	y: 33.4, z: 0.6},
	up : 		{x: 0, 		y: 0, 	z: 1 },
	target :{x:-84.3900, y:33.7550, z:0}
} 

var c2 = {
	position:  {x: -84.20056000510517, y: 33.865357724514666, z: 0.41352237554213805},
	target :{x: -84.2130617873479, y: 34.09665162603775, z: -0.0026300491392573433},
	up:  {x: 0, y: 0, z:1}
}

var debug = {
	position:  {x: -84.39, y: 33.755, z: 7.631706858576437},
	target :{x: -84.2130617873479, y: 34.09665162603775, z: -0.0026300491392573433},
	up:  {x: 0, y: 1, z:0}
}

var mousedown = false;

function checkLimits() {
	SceneRoot.rotation.x = Math.max(Math.min(0, SceneRoot.rotation.x), -1);
	SceneRoot.rotation.y = Math.max(Math.min(0, SceneRoot.rotation.y), -1);
	if(controls.eye.length() > 2.3)
		controls.eye.setLength(2.3)
}	


var smoothFunc = function (callback) {
		var interval = 1;
		var progress = 0;
  		setTimeout(function() {
            if ( progress < 20 || mousedown) { 
            	callback ();
				progress ++;
				checkLimits() ;
                setTimeout(arguments.callee, interval);  
 				
            } 
          }, interval);
}

$(document).ready(function() { 

	camTransition(c0)


	$("#zoomin").on( "mousedown", function(){
		mousedown = true;
		var factor = 0.995 ;

		smoothFunc( function() {
			controls.object.position.addVectors( 
				controls.target, controls.eye.multiplyScalar( factor) );

			// for (var i = layers.labels.children.length - 1; i >= 0; i--) {
			// 	var n = layers.labels.children[i];
			// 	n.children[0].scale.multiplyScalar( factor );
			// }

		});


	}).on('mouseup',  function() {
		mousedown = false;
	});


	$("#zoomout").on( "mousedown", function(){
		mousedown = true;

		var factor = 1.003;
		smoothFunc( function() {
			controls.object.position.addVectors( 
				controls.target, controls.eye.multiplyScalar( factor) );

			// for (var i = layers.labels.children.length - 1; i >= 0; i--) {
			// 	var n = layers.labels.children[i];
			// 	n.children[0].scale.multiplyScalar( factor );
			// }

		});
	}).on('mouseup',  function() {
		mousedown = false;
	});


	$("#left").on( "mousedown", function(){
		// var t = new TWEEN.Tween(shadermat.uniforms.time).to({value:x},500).start();
		mousedown = true;
		smoothFunc( function() {SceneRoot.rotateZ(0.0349066 / 20)});
	}).on('mouseup',  function() {
		mousedown = false;
	});

	$("#right").on( "mousedown", function(){
		mousedown = true;
		smoothFunc( function() {SceneRoot.rotateZ(-0.0349066 / 20)});
	}).on('mouseup', function() {
		mousedown = false;
	});

	$("#forward").on( "mousedown", function(){
		mousedown = true;
		var horiz = new THREE.Vector3(-1., 0., 0.);
		horiz.applyQuaternion(SceneRoot.rotation._quaternion.clone().inverse());
		
		// 0.0872665rad = 5 deg
		smoothFunc( function() {SceneRoot.rotateOnAxis(horiz,0.0872665/20)});
	}).on('mouseup', function() {
		mousedown = false;
	});

	$("#back").on( "mousedown", function(){
		mousedown = true;
		var horiz = new THREE.Vector3(1., 0., 0.);
		horiz.applyQuaternion(SceneRoot.rotation._quaternion.clone().inverse());
		// 0.0872665rad = 5 deg
		smoothFunc( function() {SceneRoot.rotateOnAxis(horiz, 0.0872665/30)});	
	}).on('mouseup', function() {
	    // clearTimeout(id);
		mousedown = false;
	});



	// CONTROLS LIKE CAMERA VIEWS AND STUFF
	$("#play").click(function(){doAnimate = true;})

	$("#cam0").click(function(){camTransition(c0)});
	$("#cam1").click(function(){camTransition(c1)});
	$("#cam2").click(function(){camTransition(c2)});
	$("#wire").click(function(){shadermat.wireframe = !shadermat.wireframe; });


	updateLayers = [
		function(b) {
			b.text( 'No Labels' )
			SceneRoot.remove(layers.labels.counties);
			SceneRoot.remove(layers.labels.hoods);
		},
		function(b) {
			b.text( 'Neighborhood Labels' )
			SceneRoot.remove(layers.labels.counties);
			SceneRoot.add(layers.labels.hoods);
		},
		function(b) {
			b.text( 'County Labels' )
			SceneRoot.add(layers.labels.counties);
			SceneRoot.remove(layers.labels.hoods);
		}
	];
	

	layerIndex = 0
	$("#labels").click(function(){
 		layerIndex = ++layerIndex %3;
		updateLayers[layerIndex]($(this))

 	});

	$("#heightmap").click(function(){
		shadermat.visible = !shadermat.visible
	});
	$("#countyoutlines").click(function(){
		layers.counties.changeVisibility(!layers.counties.visible, true)
	});


	$("#migration").click(function(){
		layers.migrationRoot.changeVisibility(!layers.migrationRoot.visible, true)
	});

	$("#heightmap").click();

	$("body").keypress(function(e) {
		console.log(e.charCode)
		if (e.charCode == 113/*q*/){
			shadermat.uniforms.extrude.value += 0.1;
			layers['migration'].scale.z *=  1.1;
		}
			
		if ( e.charCode == 119/*w*/) {
			shadermat.uniforms.extrude.value -= 0.1;
			layers['migration'].scale.z *= 0.9;
		}

		if ( e.charCode == 97/*w*/)
			for(l in layers.labels){
				for (var i = layers.labels[l].children.length - 1; i >= 0; i--) {
					console.log( layers.labels[l].children[i])
					 layers.labels[l].children[i].children[0].scale.multiplyScalar( 0.9 );
					}
				}

		if ( e.charCode == 115/*w*/) 
			for(l in layers.labels)
				for (var i = layers.labels[l].children.length - 1; i >= 0; i--)
					 layers.labels[l].children[i].children[0].scale.multiplyScalar( 1.1 );

		if ( e.charCode == 122/*z*/) 
			spinSpeed *= 2;

		if ( e.charCode == 120/*x*/) 
			spinSpeed *=  0.5;

	});

});


