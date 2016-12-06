function extrude(data, layers, name, index) {
    var obj = new THREE.Object3D();
    var tracts = layers.tracts.children;

    for (var i = 0; i < tracts.length; i++) {
    	var shape = new THREE.Shape(tracts[i].geometry.vertices)
    	// console.log(tracts[i].userData)

    	var name = tracts[i].userData["geoid10"]
    	var height =  data[name.toString()][index] ? data[name.toString()][index] : 0.001;
    	height /=  tracts[i].userData["shape_area"]
        height *= 400;
    	// height /= 100 + 0.001;
    	// console.log(tracts[i].userData)
    	// console.log(height)

	    var extrudeSettings = {
	                amount          : height,
	                steps           : 1,
	                extrudeMaterial : 1,
	                bevelEnabled    : false,
	            };

    	var line_geom = new THREE.ExtrudeGeometry( shape, extrudeSettings );

	    var line_material = new THREE.MeshLambertMaterial( {
	        side: THREE.DoubleSide,
	        // wireframe : true,
	        color: new THREE.Color(1.0, height * 7, height * 10),
	        shading: THREE.SmoothShading,
            // transparent: true,
            // opacity: 0.5
	     } );

	    var line = new THREE.Mesh(line_geom, line_material);
	    obj.add(line)
    }

    layers[name] = obj;
    scene.add(layers[name])

}

var raycaster = new THREE.Raycaster();
ray_dir = new THREE.Vector3(1.,0.,0.);

function inMesh(mesh, point) {
    // idea here is that odd number of raycasts in any direction = in mesh
    raycaster.set ( point, ray_dir )
    var ints = raycaster.intersectObject(mesh);

    return ints.length > 0 && ints.length %2 == 1

}
var grid = {
    bottom_left : {
        x : -85.5,
        y : 32.8
    },
    width : 2.2,
    res : 100
}

//init bins structure 
var bins = []
var totals = 0

function bin(p) {
    if ( p.y < grid.bottom_left.y  || grid.bottom_left.x > p.x)
        console.log(p)
    var x = Math.floor(grid.res * ((p.x - grid.bottom_left.x) / grid.width ) )
    var y = Math.floor(grid.res * ((p.y - grid.bottom_left.y) / grid.width ) )

    bins[x][y] += 1
    totals ++;
}



function plot(data, layers, name, index) {
    layers['meshes'] = []
    for( var x = 0; x< grid.res; x++){
        bins.push([])
        for(var y = 0; y < grid.res; y++){
            bins[x].push(0)
        }
    }
    var tracts = layers.tracts.children;
    for (var i = 0; i < tracts.length; i++) {
        var shape = new THREE.Shape(tracts[i].geometry.vertices)
        var extrudeSettings = {
                    amount          : 0.1,
                    steps           : 1,
                    extrudeMaterial : 1,
                    bevelEnabled    : false,
                };
        var mesh_geom = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        var mesh_material = new THREE.MeshLambertMaterial( {
            side: THREE.DoubleSide,
            wireframe : true,
            color: new THREE.Color(1.0,0, 1.0),
            shading: THREE.SmoothShading,
            // transparent: true,
            // opacity: 0.5
         } );
        var mesh = new THREE.Mesh(mesh_geom, mesh_material);
        // scene.add(mesh)
        layers.meshes.push(mesh)
        var bbox = new THREE.BoundingBoxHelper( mesh, 0xff0000 );
        bbox.update();
        // scene.add( bbox );

        var name = tracts[i].userData["geoid10"]
        var population =  data[name.toString()][index] ? data[name.toString()][index] : 0.001;
        var point_list = new THREE.Geometry();
        var mat = new THREE.ParticleBasicMaterial({size: 0.004, color:0xffff00, })



        // for(var i = 0; i < 3; i) {
            // alert(population/1000)
        while (point_list.vertices.length < population/1000) {
            p = new THREE.Vector3(
                (Math.random() - 0.5) * bbox.scale.x + bbox.position.x, 
                (Math.random() - 0.5) * bbox.scale.y + bbox.position.y, 
                0);
            if ( inMesh(mesh, p) ) {
                bin(p)
                point_list.vertices.push(p)
            }
        }
        var points = new THREE.ParticleSystem(point_list, mat)
        // scene.add(points)
    }
    scene.add(ComputeHistogram())

}

function LoadData(data, layers, name, index, callback) {
   $.ajax({
        type: "GET", url: data, dataType: "text",
        success: function(data) {
        	callback(loadCSV(data), layers, name, index);}
     });
}


function loadCSV(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];
    var geoid_indexed = {}

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        geoid_indexed[data[0]] = data;
    
    }
    return geoid_indexed
    // alert(lines);
}


function ComputeHistogram() {
    var w = grid.width / grid.res;




    console.log(grid, bins)
    var theGrid = new THREE.Object3D();
    for ( var x = 0; x < grid.res; x ++){
        for ( var y = 0; y < grid.res; y ++){
            if (  bins[x][y] > 0 ) { 
                var h = bins[x][y] / totals * 100;

                var mat = new THREE.MeshBasicMaterial( {
                    side: THREE.DoubleSide,
                    color: new THREE.Color(0xff00ff).multiplyScalar((h * 2) + 0.3), 
                            // opacity:0.5,
                    // transparent:true
                } );

                var geo = new THREE.BoxGeometry(w, w, h);
                var box = new THREE.Mesh(geo, mat);
                box.position.set(
                    grid.bottom_left.x + x * w + w/2, 
                    grid.bottom_left.y + y * w + w/2,
                    h / 2 + 1e-3)
                theGrid.add(box);
            }
        }
    }

    scene.add(theGrid)
    

}