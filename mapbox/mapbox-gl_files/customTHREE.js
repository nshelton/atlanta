
function init (map ) {

    scene = new THREE.Scene();

    var canvas = map.getCanvas();
    var context = canvas.getContext("webgl");
    
    camera = new THREE.PerspectiveCamera(
          55, window.innerWidth / window.innerHeight, 0.001, 1000 );


    renderer = new THREE.WebGLRenderer(canvas,context);
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
	requestAnimationFrame( render );
	renderer.render( scene, camera );
}
render();

}