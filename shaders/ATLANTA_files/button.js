var doAnimate = true;

var timeTo = function(x) {
	doAnimate = false;
	var t = new TWEEN.Tween(shadermat.uniforms.time).to({value:x},500).start();
}

var camTransition = function(x) {
	var t = new TWEEN.Tween(camera.position).to(x.position,1000).start();
	var u = new TWEEN.Tween(camera.up).to(x.up,1000).start()
	var t = new TWEEN.Tween(controls.target).to(x.target,1000).start()
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
	up:  {x: 0, y: 0, z:1 }

}
$(document).ready(function() {
	camTransition(c0)
	$("#time0").click(function(){timeTo(0)});
	$("#time1").click(function(){timeTo(1)});
	$("#time2").click(function(){timeTo(2)});
	$("#time3").click(function(){timeTo(3)});
	$("#time4").click(function(){timeTo(4)})

	$("#time5").click(function(){timeTo(4.99)});

	$("#cam0").click(function(){camTransition(c0)});
	$("#cam1").click(function(){camTransition(c1)});
	$("#cam2").click(function(){camTransition(c2)});
	$("#wire").click(function(){shadermat.wireframe = !shadermat.wireframe; });


	$("body").keypress(function(e) {
		if (e.charCode == 113)
			shadermat.uniforms.extrude.value += 0.1;
		
		else if ( e.charcode = 119) 
			shadermat.uniforms.extrude.value -= 0.1;
	});

});