
function tileURL(d, type) {
	return "http://" + ["a", "b", "c"][(d[0] * 31 + d[1]) % 3] + ".tile.openstreetmap.us/vectiles-"+type+"/" + d[2] + "/" + d[0] + "/" + d[1] + ".json";
}
var rest_data;

function line(outline, line_style) {
  var geometry = new THREE.Geometry();
  var material = new THREE.LineBasicMaterial(line_style);
  var positions = new Float32Array( outline.length * 3 );

  for( var i = 0; i < outline.length; i++) {
    geometry.vertices.push(new THREE.Vector3( outline[i][0], outline[i][1], 0
    ))
  }

  return new THREE.Line(geometry, material);
}

function style(type) {
  switch ( type ) {
    case "motorway" : return {color : 0xaaaaaa, linewidth: 10}; break;
    case "primary" : return {color : 0x888888,  linewidth: 5}; break;
    case "secondary" : return {color : 0x555555,  linewidth: 3}; break;
    case "tertiary" : return {color : 0x333333,  linewidth: 2}; break;
    default : console.log(type); return {color: 0xff00ff}
  }
}

function addTilesAsync( scene, layers ) {
  x_range = [1080, 1095];
  y_range = [1630, 1645];
  z = 12;

  layers["roads"] = new THREE.Object3D();
  scene.add(layers["roads"])

  for(var x = x_range[0]; x <= x_range[1]; x++) {
    for(var y = y_range[0]; y <= y_range[1]; y++) {
      $.get(tileURL([x, y, z], "highroad"), function(a,b) {
        for ( var i = 0 ; i < a.features.length; i ++){
          var type = a.features[i].properties.highway;
          // if (["motorway", "primary", "secondary", "tertiary"]. indexOf(type) > -1 )
          if (["motorway", "primary"]. indexOf(type) > -1 )
            layers["roads"].add(line(a.features[i].geometry.coordinates, style(type)));
        }

      })
      // $.get(tileURL([x, y, z], "water-areas"), function(a,b) {
      //   for ( var i = 0 ; i < a.features.length; i ++){

      //     var coords = [].concat.apply([], a.features[i].geometry.coordinates)
      //     console.log(coords)
      //     scene.add(line(coords, {color: 0x0000ff}));
      //   }

      // })

    }
  }
}