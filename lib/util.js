function genText(text, height) {
    var textparam = {
        size : height, 
        height: height/10
    }

    var material = new THREE.MeshBasicMaterial({
    	opacity:1.0, transparent:true });
    var geometry = new THREE.TextGeometry(text, textparam);

    return new THREE.Mesh(geometry, material);
}