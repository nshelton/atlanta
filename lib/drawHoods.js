

function makeTextSprite( message ) {
    var fontface = "Arial";
    // var fontface = "Anonymous Pro";

    var fontsize = 50;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;

    var textWidth = context.measureText(message).width;

    // reset canvas - have to update font size
    context.canvas.width = textWidth;
    context.canvas.height = fontsize * 1.2;
    context.font = "Bold " + fontsize + "px " + fontface;



    // context.fillStyle = "rgba(255, 0, 255, 1.0)";
    // context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = " rgba(200, 200, 200, 1.0)";

    context.shadowColor =  " rgba(0, 0, 0, 1.0)";
    context.shadowBlur = 20;
    // context.shadowOffsetX = 15;
    // context.shadowOffsetY = 15;
    context.fillText( message, 0, fontsize * 0.75);

    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas)
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial(
      { map: texture, blending: THREE.AdditiveBlending,
        depthTest : false, transparent : true, fog: true
    } );

    var sprite = new THREE.Sprite( spriteMaterial );

    sprite.scale.set( 
      context.canvas.width/100, 
      context.canvas.height/100, 1);
    // sprite.position.set(0, -1, 0);
    return sprite;

  }


function getHoodsAsync(meta, label_layer ) {


  $.getJSON("data/hoods.json", function (data) { 
      var labels = data.features;
      label_layer.hoods = new THREE.Object3D();
      for ( var i = 0; i < labels.length; i++ ) {
        var n = labels[i].properties.name;
        var c = labels[i].geometry.coordinates;

        // var title = genText(n, 0.01);
        var title = new THREE.Object3D();
        var sprite = makeTextSprite(n);
        sprite.scale.multiplyScalar(0.03);
        title.add(sprite);

// add a marker for the text??
//     var geometry = new THREE.SphereGeometry( 0.01, 5, 5);
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// var sphere = new THREE.Mesh( geometry, material );

//         title.add(sphere);

        title.position.set(c[0], c[1] , 0.0);

        label_layer.hoods.add(title);
      }

    label_layer.hoods.position.set(-meta.center.x, -meta.center.y, 0);

  });
 
}


function getCountiesLabels( counties ) {

    object = new THREE.Object3D();

      for ( var i = 0; i < counties.children.length; i++ ) {

        var n = counties.children[i].userData.label;
        var c = counties.children[i].center;

        // var title = genText(n, 0.01);
        var title = new THREE.Object3D();
        var sprite = makeTextSprite(n);
        sprite.scale.multiplyScalar(0.02);
        title.add(sprite);

        title.position.set(c.x , c.y , 0.0);

        object.add(title);
      }

      return object;
 
}
