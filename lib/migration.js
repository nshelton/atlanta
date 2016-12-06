var magma = [0x0d0887, 0x100788, 0x130789, 0x16078a, 0x19068c, 0x1b068d, 0x1d068e, 0x20068f, 0x220690, 0x240691, 0x260591, 0x280592, 0x2a0593, 0x2c0594, 0x2e0595, 0x2f0596, 0x310597, 0x330597, 0x350498, 0x370499, 0x38049a, 0x3a049a, 0x3c049b, 0x3e049c, 0x3f049c, 0x41049d, 0x43039e, 0x44039e, 0x46039f, 0x48039f, 0x4903a0, 0x4b03a1, 0x4c02a1, 0x4e02a2, 0x5002a2, 0x5102a3, 0x5302a3, 0x5502a4, 0x5601a4, 0x5801a4, 0x5901a5, 0x5b01a5, 0x5c01a6, 0x5e01a6, 0x6001a6, 0x6100a7, 0x6300a7, 0x6400a7, 0x6600a7, 0x6700a8, 0x6900a8, 0x6a00a8, 0x6c00a8, 0x6e00a8, 0x6f00a8, 0x7100a8, 0x7201a8, 0x7401a8, 0x7501a8, 0x7701a8, 0x7801a8, 0x7a02a8, 0x7b02a8, 0x7d03a8, 0x7e03a8, 0x8004a8, 0x8104a7, 0x8305a7, 0x8405a7, 0x8606a6, 0x8707a6, 0x8808a6, 0x8a09a5, 0x8b0aa5, 0x8d0ba5, 0x8e0ca4, 0x8f0da4, 0x910ea3, 0x920fa3, 0x9410a2, 0x9511a1, 0x9613a1, 0x9814a0, 0x99159f, 0x9a169f, 0x9c179e, 0x9d189d, 0x9e199d, 0xa01a9c, 0xa11b9b, 0xa21d9a, 0xa31e9a, 0xa51f99, 0xa62098, 0xa72197, 0xa82296, 0xaa2395, 0xab2494, 0xac2694, 0xad2793, 0xae2892, 0xb02991, 0xb12a90, 0xb22b8f, 0xb32c8e, 0xb42e8d, 0xb52f8c, 0xb6308b, 0xb7318a, 0xb83289, 0xba3388, 0xbb3488, 0xbc3587, 0xbd3786, 0xbe3885, 0xbf3984, 0xc03a83, 0xc13b82, 0xc23c81, 0xc33d80, 0xc43e7f, 0xc5407e, 0xc6417d, 0xc7427c, 0xc8437b, 0xc9447a, 0xca457a, 0xcb4679, 0xcc4778, 0xcc4977, 0xcd4a76, 0xce4b75, 0xcf4c74, 0xd04d73, 0xd14e72, 0xd24f71, 0xd35171, 0xd45270, 0xd5536f, 0xd5546e, 0xd6556d, 0xd7566c, 0xd8576b, 0xd9586a, 0xda5a6a, 0xda5b69, 0xdb5c68, 0xdc5d67, 0xdd5e66, 0xde5f65, 0xde6164, 0xdf6263, 0xe06363, 0xe16462, 0xe26561, 0xe26660, 0xe3685f, 0xe4695e, 0xe56a5d, 0xe56b5d, 0xe66c5c, 0xe76e5b, 0xe76f5a, 0xe87059, 0xe97158, 0xe97257, 0xea7457, 0xeb7556, 0xeb7655, 0xec7754, 0xed7953, 0xed7a52, 0xee7b51, 0xef7c51, 0xef7e50, 0xf07f4f, 0xf0804e, 0xf1814d, 0xf1834c, 0xf2844b, 0xf3854b, 0xf3874a, 0xf48849, 0xf48948, 0xf58b47, 0xf58c46, 0xf68d45, 0xf68f44, 0xf79044, 0xf79143, 0xf79342, 0xf89441, 0xf89540, 0xf9973f, 0xf9983e, 0xf99a3e, 0xfa9b3d, 0xfa9c3c, 0xfa9e3b, 0xfb9f3a, 0xfba139, 0xfba238, 0xfca338, 0xfca537, 0xfca636, 0xfca835, 0xfca934, 0xfdab33, 0xfdac33, 0xfdae32, 0xfdaf31, 0xfdb130, 0xfdb22f, 0xfdb42f, 0xfdb52e, 0xfeb72d, 0xfeb82c, 0xfeba2c, 0xfebb2b, 0xfebd2a, 0xfebe2a, 0xfec029, 0xfdc229, 0xfdc328, 0xfdc527, 0xfdc627, 0xfdc827, 0xfdca26, 0xfdcb26, 0xfccd25, 0xfcce25, 0xfcd025, 0xfcd225, 0xfbd324, 0xfbd524, 0xfbd724, 0xfad824, 0xfada24, 0xf9dc24, 0xf9dd25, 0xf8df25, 0xf8e125, 0xf7e225, 0xf7e425, 0xf6e626, 0xf6e826, 0xf5e926, 0xf5eb27, 0xf4ed27, 0xf3ee27, 0xf3f027, 0xf2f227, 0xf1f426, 0xf1f525, 0xf0f724, 0xf0f921]

var greenish = [
  "#440154",   "#440256",   "#450457",   "#450559",   "#46075a",   "#46085c",   "#460a5d",   "#460b5e",   "#470d60",   "#470e61",   "#471063",   "#471164",   "#471365",   "#481467",   "#481668",   "#481769",   "#48186a",   "#481a6c",   "#481b6d",   "#481c6e",   "#481d6f",   "#481f70",   "#482071",   "#482173",   "#482374",   "#482475",   "#482576",   "#482677",   "#482878",   "#482979",   "#472a7a",   "#472c7a",   "#472d7b",   "#472e7c",   "#472f7d",   "#46307e",   "#46327e",   "#46337f",   "#463480",   "#453581",   "#453781",   "#453882",   "#443983",   "#443a83",   "#443b84",   "#433d84",   "#433e85",   "#423f85",   "#424086",   "#424186",   "#414287",   "#414487",   "#404588",   "#404688",   "#3f4788",   "#3f4889",   "#3e4989",   "#3e4a89",   "#3e4c8a",   "#3d4d8a",   "#3d4e8a",   "#3c4f8a",   "#3c508b",   "#3b518b",   "#3b528b",   "#3a538b",   "#3a548c",   "#39558c",   "#39568c",   "#38588c",   "#38598c",   "#375a8c",   "#375b8d",   "#365c8d",   "#365d8d",   "#355e8d",   "#355f8d",   "#34608d",   "#34618d",   "#33628d",   "#33638d",   "#32648e",   "#32658e",   "#31668e",   "#31678e",   "#31688e",   "#30698e",   "#306a8e",   "#2f6b8e",   "#2f6c8e",   "#2e6d8e",   "#2e6e8e",   "#2e6f8e",   "#2d708e",   "#2d718e",   "#2c718e",   "#2c728e",   "#2c738e",   "#2b748e",   "#2b758e",   "#2a768e",   "#2a778e",   "#2a788e",   "#29798e",   "#297a8e",   "#297b8e",   "#287c8e",   "#287d8e",   "#277e8e",   "#277f8e",   "#27808e",   "#26818e",   "#26828e",   "#26828e",   "#25838e",   "#25848e",   "#25858e",   "#24868e",   "#24878e",   "#23888e",   "#23898e",   "#238a8d",   "#228b8d",   "#228c8d",   "#228d8d",   "#218e8d",   "#218f8d",   "#21908d",   "#21918c",   "#20928c",   "#20928c",   "#20938c",   "#1f948c",   "#1f958b",   "#1f968b",   "#1f978b",   "#1f988b",   "#1f998a",   "#1f9a8a",   "#1e9b8a",   "#1e9c89",   "#1e9d89",   "#1f9e89",   "#1f9f88",   "#1fa088",   "#1fa188",   "#1fa187",   "#1fa287",   "#20a386",   "#20a486",   "#21a585",   "#21a685",   "#22a785",   "#22a884",   "#23a983",   "#24aa83",   "#25ab82",   "#25ac82",   "#26ad81",   "#27ad81",   "#28ae80",   "#29af7f",   "#2ab07f",   "#2cb17e",   "#2db27d",   "#2eb37c",   "#2fb47c",   "#31b57b",   "#32b67a",   "#34b679",   "#35b779",   "#37b878",   "#38b977",   "#3aba76",   "#3bbb75",   "#3dbc74",   "#3fbc73",   "#40bd72",   "#42be71",   "#44bf70",   "#46c06f",   "#48c16e",   "#4ac16d",   "#4cc26c",   "#4ec36b",   "#50c46a",   "#52c569",   "#54c568",   "#56c667",   "#58c765",   "#5ac864",   "#5cc863",   "#5ec962",   "#60ca60",   "#63cb5f",   "#65cb5e",   "#67cc5c",   "#69cd5b",   "#6ccd5a",   "#6ece58",   "#70cf57",   "#73d056",   "#75d054",   "#77d153",   "#7ad151",   "#7cd250",   "#7fd34e",   "#81d34d",   "#84d44b",   "#86d549",   "#89d548",   "#8bd646",   "#8ed645",   "#90d743",   "#93d741",   "#95d840",   "#98d83e",   "#9bd93c",   "#9dd93b",   "#a0da39",   "#a2da37",   "#a5db36",   "#a8db34",   "#aadc32",   "#addc30",   "#b0dd2f",   "#b2dd2d",   "#b5de2b",   "#b8de29",   "#bade28",   "#bddf26",   "#c0df25",   "#c2df23",   "#c5e021",   "#c8e020",   "#cae11f",   "#cde11d",   "#d0e11c",   "#d2e21b",   "#d5e21a",   "#d8e219",   "#dae319",   "#dde318",   "#dfe318",   "#e2e418",   "#e5e419",   "#e7e419",   "#eae51a",   "#ece51b",   "#efe51c",   "#f1e51d",   "#f4e61e",   "#f6e620",   "#f8e621",   "#fbe723",   "#fde725"];

var particleMaterial;

// function getCurve(src, dst, amount) {
//   var up  = new THREE.Vector3();
//   up.set(0,0,Math.sqrt(amount)/3);

//   var c1  = new THREE.Vector3();
//   c1.copy(src);
//   c1.add(up);

//   var c2  = new THREE.Vector3();
//   c2.copy(dst);
//   c2.add(up);

//   var curve = new THREE.CubicBezierCurve3(src, c1, c2, dst);

//   var geometry = new THREE.Geometry();
//   var lineRes = 20;
//   for ( var i = 0; i < lineRes; i ++) {
//     var v = new THREE.Vector3()
//     geometry.vertices.push(v)
//   }

//   // console.log(src, c1, c2, dst)

//   // geometry.vertices.push(src)
//   // geometry.vertices.push(dst)



//   var index = Math.round((amount * 256 ) );
//   var material = new THREE.LineBasicMaterial( {  
//     linewidth:amount * 10.,
//      color :magma[index]} );

//   // Create the final Object3d to add to the sceneRoot
//   return new THREE.Line( geometry, material );
// }


function getPatricles(counties, matrix) {
  var counties_pos = []
  for (var i = 0; i < counties.children.length; i ++ ) {
    counties_pos.push(counties.children[i].center)
  }
  console.log(counties_pos)

  var npts = counties.children.length;

  particleMaterial = new THREE.ShaderMaterial( {
    uniforms: { 
     time : shadermat.uniforms.time,
     npoints : { type: "f", value: npts },
     selected : { type: "i", value: -1 },
     direction : { type: "i", value: 0 },
     counties : { type: "v3v", value: counties_pos },
     migrationMatrix : { type: "t", value: matrix },
     pointSprite : { type: "t", value: THREE.ImageUtils.loadTexture("images/particle.png")}
    },
    vertexShader: document.getElementById( 'vs-particle' ).textContent,
    fragmentShader: document.getElementById( 'fs-particle' ).textContent,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false
  } );


  lineMaterial = new THREE.ShaderMaterial( {
    uniforms: particleMaterial.uniforms,
    vertexShader: document.getElementById( 'vs-particle-line' ).textContent,
    fragmentShader: document.getElementById( 'fs-particle-line' ).textContent,
    blending: THREE.AdditiveBlending,
        depthTest:    false,
        depthWrite:    false,
        transparent:  true

  } );


  console.log(matrix)

  var lines = new THREE.Object3D();

  var points = new THREE.Geometry();

    for( var x = 0; x < npts; x++) {
      for( var y = 0; y < npts; y++) {
        var numParticles = 0.04 * matrix.image.data[3 * (x * npts + y)]

        for( var z = 0; z < numParticles; z++) {
          // points.vertices.push( new THREE.Vector3(x, y, Math.random()));
          points.vertices.push( new THREE.Vector3(x, y, z/numParticles));
        }


        var line = new THREE.Geometry()
        var lineSegments = 30;

        for( var z = 0; z < lineSegments; z++) {
          line.vertices.push( new THREE.Vector3(x, y, z/lineSegments));
        }
          line.vertices.push( new THREE.Vector3(x, y, 1));

        if ( numParticles > 0 ) {
          lineMaterial.lineWidth = numParticles;
          lines.add(new THREE.Line(line, lineMaterial));
        }
      }
    }
 
    var node = new THREE.Object3D();
    node.add(new THREE.ParticleSystem( points, particleMaterial ));
    node.add(lines);

    return node;
  }



// function drawMigration(yeardata, countiesHash) {
//     layer = new THREE.Object3D();

//     for ( var i = 0 ; i < yeardata.length; i++ ) {
//       var src = yeardata[i][0];
//       var dst = yeardata[i][1];
//       var amount = yeardata[i][5] / 400000;
//       var p_src = countiesHash[src].center;
//       var p_dst = countiesHash[dst].center;


//       // layer.add(getCurve(p_src, p_dst, amount));
//     }
//     return layer;
//  }

function buildMatrix(yeardata, countyIDs) {

    n_counties = countyIDs.length

    var tex = THREE.ImageUtils.generateDataTexture(n_counties, n_counties, {r: 0, g: 0, b:0});
    data = tex.image.data;
    tex.minFilter = THREE.NearestFilter;
    tex.magFilter = THREE.NearestFilter;

    for ( var i = 0 ; i < yeardata.length; i++ ) {
      var src = countyIDs.indexOf(yeardata[i][0])
      var dst = countyIDs.indexOf(yeardata[i][1])
      data[3 * (src * n_counties + dst) + 0] = yeardata[i][5] / 255 ;
      data[3 * (src * n_counties + dst) + 1] = yeardata[i][5] / 255 ;
      data[3 * (src * n_counties + dst) + 2] = yeardata[i][5] / 255 ;
      // data[4 * (src * n_counties + dst) + 3] = yeardata[i][4] / 160 ;
    }

    // for ( var x = 0 ; x < 20; x++ ) {
    // for ( var y = 0 ; y < 20; y++ ) {
    //   data[3. * (x * n_counties + y) + 0] = (x / 20 )* 255;
    //   data[3 * (x * n_counties + y) + 1] = (y / 20 )* 255;
    //   data[3 * (x * n_counties + y) + 2] = (x / 20 )* 255;
    //   // data[4 * (src * n_counties + dst) + 3] = yeardata[i][4] / 160 ;
    // }
    // }


    return tex;
}


function addMigrationAsync(sceneRoot, metadata) {
  $.getJSON("data/counties_georgia.geojson", function (geojson_data) { 
      countiesHash = {};
      var lineStyle = {
        color:0x666666, 
        linewidth:2,
      };
      console.log(geojson_data)
      drawThreeGeo(geojson_data, 10, 'plane',lineStyle , layers,10, countiesHash);

      layers["counties"] = new THREE.Object3D();

      var migrationByYear = {};
      var activeCounties = {};
      var countyIDs = [];

      // data pocessing!
      $.get("data/Data/GeorgiaCountyMigrations.csv", function (data) { 
        var allTextLines = data.split(/\r\n|\n/);
        var headers = allTextLines[0].split(',');
        var lines = [];
        var objects = {}

        for (var i=1; i<allTextLines.length; i++) {
            var line = allTextLines[i].split(',');

            if (!migrationByYear[line[0]]) {
              migrationByYear[line[0]] = []
              migrationByYear[line[0]].push(line.slice(1));
            } else {
              migrationByYear[line[0]].push(line.slice(1));
            }

            if(!activeCounties[line[1]]) {
              activeCounties[line[1]] = true;
            } 

            if(!activeCounties[line[2]]) {
              activeCounties[line[2]] = true;
            } 

        }
      // counties
      console.log(activeCounties)
      console.log(countiesHash)

      for(var i in activeCounties) {
        var cent = new THREE.Vector3();
        var bounds = countiesHash[i].children[0].geometry;

        for(var p = 0; p < bounds.vertices.length; p++) {
          cent.add(bounds.vertices[p])
        }
        cent.multiplyScalar(1.0 / bounds.vertices.length);

        // bounds.computeBoundingSphere();
        // bounds = bounds.boundingSphere;

        // var geo = new THREE.SphereGeometry(0.05, 1);
        // var mat = new THREE.MeshBasicMaterial({color:"red", wireframe:true});

        // var sphere = new THREE.Mesh(geo, mat);
        // sphere.position.copy(cent);

        if ( countiesHash[i].userData.label == "FULTON" )
          cent.sub(new THREE.Vector3(0.04,0.15,0))

        countiesHash[i].center = (new THREE.Vector3()).copy(cent);
        countyIDs.push(i)
        layers["counties"].add(countiesHash[i]);
      }

      console.log("ACTIVE", activeCounties)


      // do the years of migration
      layers['migration'] = []
      layers['particles'] = []
      migrationMatrix = []

      layers['migrationRoot'] = new THREE.Object3D();
      sceneRoot.add(layers['migrationRoot']);

      var mig_ui = $('<div>Migration</div>');

      for(year in migrationByYear) {


        // var mig = drawMigration( migrationByYear[year], countiesHash);
        // mig.position.set (-metadata.center.x, -metadata.center.y, 0.03);
        // layers['migration'].push(mig)

        var part = getPatricles(layers["counties"], buildMatrix(migrationByYear[year], countyIDs));
        part.position.set(-metadata.center.x, -metadata.center.y, 0.03);
        layers['particles'].push(part);

        var b = $('<button/>')
          .text(year)
          .data("particles", part)
          // .data("migration", mig)
          .click(function () { 

            // for (var i = 0 ; i < layers['migration'].length ; i ++ ) {
            //   layers['migrationRoot'].remove(layers['migration'][i]);
            // }

            for (var i = 0 ; i < layers['particles'].length ; i ++ ) {
              layers['migrationRoot'].remove(layers['particles'][i]);
            }

            layers['migrationRoot'].add($(this).data("particles"))
            // layers['migrationRoot'].add($(this).data("migration"))
   
          });

          mig_ui.append(b);
      }

      var b = $('<button/>')
          .text("ALL")
          .click(function () { 

            for (var i = 0 ; i < layers['particles'].length ; i ++ ) {
              layers['migrationRoot'].add(layers['particles'][i]);
            }

          });

          mig_ui.append(b);


      $("#ui").append(mig_ui);

      // select_buttons
      var select_buttons = $('<div/>');



      for(var i = 0; i < countyIDs.length; i ++) {

        var label = "";
        for (var j = 0; j < geojson_data.features.length; j ++) {
        
          if ( geojson_data.features[j].properties ) {
            var props = geojson_data.features[j].properties;

            if(Number(props.countyfp10) == Number(countyIDs[i])) {
              label = props.label
            }
          }
        } 

        var node = countiesHash[countyIDs[i]];

        var b = $('<button/>')
          .text(label) 
          .data("county_index", i)
          .data("county_node", node)
          .click(function () {

            for (var i = 0; i < layers['counties'].children.length; i ++) {
              for (var j = 0; j < layers['counties'].children[i].children.length; j ++) {
                // layers['counties'].children[i].children[j].material.color = 0.4
                layers['counties'].children[i].children[j].position.z = 0.0
                layers['counties'].children[i].children[j].material.color = {r:0.4, g:0.4,  b:0.4 }
                // layers['counties'].children[i].children[j].material.depthRead = true;
              }
            }
            for (var j = 0; j <  $(this).data("county_node").children.length; j ++) {
                // $(this).data("county_node").children[j].material.opacity = 1
                $(this).data("county_node").children[j].position.z = 0.01
                 $(this).data("county_node").children[j].material.color = {r:1.0, g:1.0 , b:0.0 }
                // layers['counties'].children[i].children[j].material.depthRead = false;
              }


            for (var i = 0; i < layers['particles'].length; i ++) {
              var mat = layers['particles'][i].children[0].material.uniforms;
              mat.selected.value = $(this).data("county_index")
              mat.direction.value ++;
              mat.direction.value %= 3;

              }
          });

        select_buttons.append(b);
      }

      var all = $('<button/>')
          .text("ALL")
          .click(function () { 

            for (var i = 0; i < layers['counties'].children.length; i ++) {
              for (var j = 0; j < layers['counties'].children[i].children.length; j ++) {
                layers['counties'].children[i].children[j].position.z = 0.0
                layers['counties'].children[i].children[j].material.color = {r:0.4, g:0.4,  b:0.4 }
              }
            }

            for (var i = 0; i < layers['particles'].length; i ++) {


              var mat = layers['particles'][i].children[0].material.uniforms;
              mat.selected.value = -1;
              mat.direction.value ++;
              mat.direction.value %= 3;
              }
          });

      select_buttons.append(all);

      $("#ui").append(select_buttons);

      layers['counties'].position.set (-metadata.center.x, -metadata.center.y, 0.03);
      SceneRoot.add(layers['counties'])

      layers.labels.counties = getCountiesLabels( layers.counties);

      layers.labels.counties.position.set (-metadata.center.x+ 0.01, -metadata.center.y+ 0.01, 0.05);
      SceneRoot.add(layers.labels.counties)

      });
  });
}