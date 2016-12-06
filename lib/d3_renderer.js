
var magma = [
"#0d0887", "#100788", "#130789", "#16078a", "#19068c", "#1b068d", "#1d068e", "#20068f", "#220690", "#240691", "#260591", "#280592", "#2a0593", "#2c0594", "#2e0595", "#2f0596", "#310597", "#330597", "#350498", "#370499", "#38049a", "#3a049a", "#3c049b", "#3e049c", "#3f049c", "#41049d", "#43039e", "#44039e", "#46039f", "#48039f", "#4903a0", "#4b03a1", "#4c02a1", "#4e02a2", "#5002a2", "#5102a3", "#5302a3", "#5502a4", "#5601a4", "#5801a4", "#5901a5", "#5b01a5", "#5c01a6", "#5e01a6", "#6001a6", "#6100a7", "#6300a7", "#6400a7", "#6600a7", "#6700a8", "#6900a8", "#6a00a8", "#6c00a8", "#6e00a8", "#6f00a8", "#7100a8", "#7201a8", "#7401a8", "#7501a8", "#7701a8", "#7801a8", "#7a02a8", "#7b02a8", "#7d03a8", "#7e03a8", "#8004a8", "#8104a7", "#8305a7", "#8405a7", "#8606a6", "#8707a6", "#8808a6", "#8a09a5", "#8b0aa5", "#8d0ba5", "#8e0ca4", "#8f0da4", "#910ea3", "#920fa3", "#9410a2", "#9511a1", "#9613a1", "#9814a0", "#99159f", "#9a169f", "#9c179e", "#9d189d", "#9e199d", "#a01a9c", "#a11b9b", "#a21d9a", "#a31e9a", "#a51f99", "#a62098", "#a72197", "#a82296", "#aa2395", "#ab2494", "#ac2694", "#ad2793", "#ae2892", "#b02991", "#b12a90", "#b22b8f", "#b32c8e", "#b42e8d", "#b52f8c", "#b6308b", "#b7318a", "#b83289", "#ba3388", "#bb3488", "#bc3587", "#bd3786", "#be3885", "#bf3984", "#c03a83", "#c13b82", "#c23c81", "#c33d80", "#c43e7f", "#c5407e", "#c6417d", "#c7427c", "#c8437b", "#c9447a", "#ca457a", "#cb4679", "#cc4778", "#cc4977", "#cd4a76", "#ce4b75", "#cf4c74", "#d04d73", "#d14e72", "#d24f71", "#d35171", "#d45270", "#d5536f", "#d5546e", "#d6556d", "#d7566c", "#d8576b", "#d9586a", "#da5a6a", "#da5b69", "#db5c68", "#dc5d67", "#dd5e66", "#de5f65", "#de6164", "#df6263", "#e06363", "#e16462", "#e26561", "#e26660", "#e3685f", "#e4695e", "#e56a5d", "#e56b5d", "#e66c5c", "#e76e5b", "#e76f5a", "#e87059", "#e97158", "#e97257", "#ea7457", "#eb7556", "#eb7655", "#ec7754", "#ed7953", "#ed7a52", "#ee7b51", "#ef7c51", "#ef7e50", "#f07f4f", "#f0804e", "#f1814d", "#f1834c", "#f2844b", "#f3854b", "#f3874a", "#f48849", "#f48948", "#f58b47", "#f58c46", "#f68d45", "#f68f44", "#f79044", "#f79143", "#f79342", "#f89441", "#f89540", "#f9973f", "#f9983e", "#f99a3e", "#fa9b3d", "#fa9c3c", "#fa9e3b", "#fb9f3a", "#fba139", "#fba238", "#fca338", "#fca537", "#fca636", "#fca835", "#fca934", "#fdab33", "#fdac33", "#fdae32", "#fdaf31", "#fdb130", "#fdb22f", "#fdb42f", "#fdb52e", "#feb72d", "#feb82c", "#feba2c", "#febb2b", "#febd2a", "#febe2a", "#fec029", "#fdc229", "#fdc328", "#fdc527", "#fdc627", "#fdc827", "#fdca26", "#fdcb26", "#fccd25", "#fcce25", "#fcd025", "#fcd225", "#fbd324", "#fbd524", "#fbd724", "#fad824", "#fada24", "#f9dc24", "#f9dd25", "#f8df25", "#f8e125", "#f7e225", "#f7e425", "#f6e626", "#f6e826", "#f5e926", "#f5eb27", "#f4ed27", "#f3ee27", "#f3f027", "#f2f227", "#f1f426", "#f1f525", "#f0f724", "#f0f921"]

var greenish = [
  "#440154",   "#440256",   "#450457",   "#450559",   "#46075a",   "#46085c",   "#460a5d",   "#460b5e",   "#470d60",   "#470e61",   "#471063",   "#471164",   "#471365",   "#481467",   "#481668",   "#481769",   "#48186a",   "#481a6c",   "#481b6d",   "#481c6e",   "#481d6f",   "#481f70",   "#482071",   "#482173",   "#482374",   "#482475",   "#482576",   "#482677",   "#482878",   "#482979",   "#472a7a",   "#472c7a",   "#472d7b",   "#472e7c",   "#472f7d",   "#46307e",   "#46327e",   "#46337f",   "#463480",   "#453581",   "#453781",   "#453882",   "#443983",   "#443a83",   "#443b84",   "#433d84",   "#433e85",   "#423f85",   "#424086",   "#424186",   "#414287",   "#414487",   "#404588",   "#404688",   "#3f4788",   "#3f4889",   "#3e4989",   "#3e4a89",   "#3e4c8a",   "#3d4d8a",   "#3d4e8a",   "#3c4f8a",   "#3c508b",   "#3b518b",   "#3b528b",   "#3a538b",   "#3a548c",   "#39558c",   "#39568c",   "#38588c",   "#38598c",   "#375a8c",   "#375b8d",   "#365c8d",   "#365d8d",   "#355e8d",   "#355f8d",   "#34608d",   "#34618d",   "#33628d",   "#33638d",   "#32648e",   "#32658e",   "#31668e",   "#31678e",   "#31688e",   "#30698e",   "#306a8e",   "#2f6b8e",   "#2f6c8e",   "#2e6d8e",   "#2e6e8e",   "#2e6f8e",   "#2d708e",   "#2d718e",   "#2c718e",   "#2c728e",   "#2c738e",   "#2b748e",   "#2b758e",   "#2a768e",   "#2a778e",   "#2a788e",   "#29798e",   "#297a8e",   "#297b8e",   "#287c8e",   "#287d8e",   "#277e8e",   "#277f8e",   "#27808e",   "#26818e",   "#26828e",   "#26828e",   "#25838e",   "#25848e",   "#25858e",   "#24868e",   "#24878e",   "#23888e",   "#23898e",   "#238a8d",   "#228b8d",   "#228c8d",   "#228d8d",   "#218e8d",   "#218f8d",   "#21908d",   "#21918c",   "#20928c",   "#20928c",   "#20938c",   "#1f948c",   "#1f958b",   "#1f968b",   "#1f978b",   "#1f988b",   "#1f998a",   "#1f9a8a",   "#1e9b8a",   "#1e9c89",   "#1e9d89",   "#1f9e89",   "#1f9f88",   "#1fa088",   "#1fa188",   "#1fa187",   "#1fa287",   "#20a386",   "#20a486",   "#21a585",   "#21a685",   "#22a785",   "#22a884",   "#23a983",   "#24aa83",   "#25ab82",   "#25ac82",   "#26ad81",   "#27ad81",   "#28ae80",   "#29af7f",   "#2ab07f",   "#2cb17e",   "#2db27d",   "#2eb37c",   "#2fb47c",   "#31b57b",   "#32b67a",   "#34b679",   "#35b779",   "#37b878",   "#38b977",   "#3aba76",   "#3bbb75",   "#3dbc74",   "#3fbc73",   "#40bd72",   "#42be71",   "#44bf70",   "#46c06f",   "#48c16e",   "#4ac16d",   "#4cc26c",   "#4ec36b",   "#50c46a",   "#52c569",   "#54c568",   "#56c667",   "#58c765",   "#5ac864",   "#5cc863",   "#5ec962",   "#60ca60",   "#63cb5f",   "#65cb5e",   "#67cc5c",   "#69cd5b",   "#6ccd5a",   "#6ece58",   "#70cf57",   "#73d056",   "#75d054",   "#77d153",   "#7ad151",   "#7cd250",   "#7fd34e",   "#81d34d",   "#84d44b",   "#86d549",   "#89d548",   "#8bd646",   "#8ed645",   "#90d743",   "#93d741",   "#95d840",   "#98d83e",   "#9bd93c",   "#9dd93b",   "#a0da39",   "#a2da37",   "#a5db36",   "#a8db34",   "#aadc32",   "#addc30",   "#b0dd2f",   "#b2dd2d",   "#b5de2b",   "#b8de29",   "#bade28",   "#bddf26",   "#c0df25",   "#c2df23",   "#c5e021",   "#c8e020",   "#cae11f",   "#cde11d",   "#d0e11c",   "#d2e21b",   "#d5e21a",   "#d8e219",   "#dae319",   "#dde318",   "#dfe318",   "#e2e418",   "#e5e419",   "#e7e419",   "#eae51a",   "#ece51b",   "#efe51c",   "#f1e51d",   "#f4e61e",   "#f6e620",   "#f8e621",   "#fbe723",   "#fde725"];
// make dataset globally available

var grayscale = ["black", "white"];
 
var useColors = true;


var metadata = {
  center : {
      x : 0,
      y : 0
  },
  width : 0,
  height : 0,
  tileFile: "",
  res : 500,
  tiles : 0,
  tileNames : [ ]
}

function toggleColors( ) {
  console.log(this)
  $("#gray").toggleClass("selected");
  useColors = ! useColors;
}

var dz;

var GeoIDupload = d3.map();
var uploadRanges = {};

var GeoIDpop = d3.map();
var GeoIDArea = d3.map();

var spread = 30;

var width = 150;
var height = 150;


// var width = 400;
// var height = 400;

var scale = width * spread;

function drawMap(key) {

  metadata.tileNames.push(key);
  metadata.tiles++;

  var container = d3.select("body");
  metadata.center.x = -84.387982;
  metadata.center.y =  33.748995;

  var my_proj = d3.geo.mercator()
      .center([metadata.center.x, metadata.center.y])
      .scale(scale)
      .translate([width / 2, height / 2]);

  var min_coord = my_proj.invert([0,0]);
  var max_coord = my_proj.invert([width,height]);

  metadata.width = (max_coord[0] - min_coord[0]);
  metadata.height = (max_coord[1] - min_coord[1]);



  var path = d3.geo.path()
      .projection(my_proj);

  var svg = container.append("svg")
      .attr("id", "svg")
      .attr("width", width)
      .attr("height", height)
      .on("click", function(){
        this.remove();
        metadata.tiles--;
        metadata.tileNames.splice(metadata.tileNames.indexOf(key), 1);

      });


  if ( useColors )
    svg.append("text")
      .attr("x", 0)
      .attr("y", height - 10)
      .attr("font-size","10px")
      .text(key)
      .style('fill', '#888888')
  // var color = d3.scale.linear()
      // .range(["black", "white"])

  // var color = d3.scale.linear()
    // .domain([uploadRanges[key].min, (uploadRanges[key].min + uploadRanges[key].max) / 2., uploadRanges[key].max])
    // .range(["#d7191c", "#ffffbf", "#2c7bb6"])
   // .interpolate(d3.interpolateHcl);

  var valueRange = [uploadRanges[key].min,      uploadRanges[key].max];
  var normRange =  [uploadRanges[key].normMin,  uploadRanges[key].normMax];

  var linColor = d3.scale.quantize()
    .domain( valueRange)
    .range(magma);

  var densityColor = d3.scale.quantize()
    .domain([0,1])
    .range(greenish);

  var densityGray = d3.scale.linear()
    .domain([0,1])
    .range(grayscale);

  var linearGray= d3.scale.linear()
    .domain(valueRange)
    .range(grayscale);


  var field = function(d){
    var geoid = d.properties.geoid10 || d.properties.GEOID10 || d.properties.Geoid; 

    var area = GeoIDArea.get(geoid);
    var upload = GeoIDupload.get(geoid)[key];


    if (uploadRanges[key].normalize == 1) {

      upload /= area;

      var range = (uploadRanges[key].normMax - uploadRanges[key].normMin)

      upload  = upload/range - uploadRanges[key].normMin

      if (!useColors)
        return densityGray(Math.sqrt(upload));
      else
        return densityColor(Math.sqrt(upload));
    } else {

      if (!useColors)
        return linearGray(upload);
      else
        return linColor(upload);

    }

  }

  function ready(error, world) {

    svg.selectAll("path")
        .data(world.features)
      .enter().append("path")
        .attr("stroke", field)
        .attr("fill", field)
        .attr("d", path);

  }

  queue()
    .defer(d3.json, "data/2010_census_tracts.geojson")
    .await(ready);

}

// load dataset and create table
function load_dataset(csv) {
  var data = d3.csv.parse(csv)

  d3.csv("data/Data/ARC_Population_Forecasts.csv", // just using this to get shape area
    function(d) {

      console.log(d)

      for( var i = 0 ; i < d.length; i++ ){
        var geoid = d[i].geoid10 || d[i].GEOID10 || d[i].Geoid; 
        GeoIDArea.set(geoid, d[i].Shape_Area);
      }

      make_buttons(data);

    });
}

function updateRanges(data) {
  var keys = d3.keys(data)

  for ( var i = 0; i < keys.length; i ++ ) {
    var val = data[keys[i]];

    var geoid = data.geoid10 || data.GEOID10 || data.Geoid; 

    if ( !GeoIDArea.get(geoid) ) 
      return;


    var normVal = data[keys[i]] / GeoIDArea.get(geoid);

    uploadRanges[keys[i]].max = Math.max ( uploadRanges[keys[i]].max , val);
    uploadRanges[keys[i]].min = Math.min ( uploadRanges[keys[i]].min , val);

    uploadRanges[keys[i]].normMax = Math.max ( uploadRanges[keys[i]].normMax, normVal);
    uploadRanges[keys[i]].normMin = Math.min ( uploadRanges[keys[i]].normMin, normVal);

  }
}

function make_buttons(data) {

  var keys = d3.keys(data[0])


    for ( var i = 0; i < keys.length; i ++ ) {
      uploadRanges[keys[i]] = ({
        "min" : Infinity,
        "normMin" : Infinity,
        "max" : -Infinity,
        "normMax" : -Infinity,
        "normalize": 0})
    }

  for ( var i = 0; i < data.length; i ++ ) {

    var geoid = data[i].geoid10 || data[i].GEOID10 || data[i].Geoid; 
    GeoIDupload.set(geoid, data[i]);
    updateRanges(data[i]);
  }

    for ( var i = 0; i < keys.length; i ++ ) {

      var item =  $('<div class="table_column" />')

      var b = $('<button/>')
        .text(keys[i])
        .data("key", keys[i])
        .click(function () { drawMap($(this).data("key")) });

      var min = $('<input class="min" type="number"/>')
        .data("key", keys[i])
        .val(uploadRanges[keys[i]].min)
        .change(function () { 

          var t_key = $(this).data("key");
          if ( uploadRanges[t_key].normalize == 0 ) {
            uploadRanges[$(this).data("key")].min = $( this ).val()
          } else {
            uploadRanges[$(this).data("key")].normMin = $( this ).val()
          }

        });

      var max = $('<input class="max" type="number"/>')
        .data("key", keys[i])
        .val(uploadRanges[keys[i]].max)
        .change(function () {


          var t_key = $(this).data("key");
          if ( uploadRanges[t_key].normalize == 0 ) {
            uploadRanges[$(this).data("key")].max = $( this ).val()
          } else {
            uploadRanges[$(this).data("key")].normMax = $( this ).val()
          }

         });

      var check = $('<input type="checkbox"/>')
        .data("key", keys[i]) 
        .click(function () { 

          var t_key = $(this).data("key");
          // toggle mode
          uploadRanges[t_key].normalize++;
          uploadRanges[t_key].normalize%=2;

          var t_min = $(this.parentNode).find(".min")
          var t_max = $(this.parentNode).find(".max")
          console.log(uploadRanges[t_key])

          if ( uploadRanges[t_key].normalize == 0 ) {
            t_min.val(uploadRanges[t_key].min)
            t_max.val(uploadRanges[t_key].max)

          } else {
            t_min.val(uploadRanges[t_key].normMin)
            t_max.val(uploadRanges[t_key].normMax)

          }

        }); 

      item.append(b);
      item.append(min);
      item.append(max);
      item.append(check);

      $("#ui").append(item)

  }


}


$( document ).ready(function() {

  var reader = new FileReader();

  document.getElementById("uploader").addEventListener("change", handleFiles, false);  

  function handleFiles() {
    reader.readAsText(this.files[0]);
  };

  reader.onload = function(e) {
      var contents = e.target.result;
      load_dataset(contents);
    };
});


save = function() {

  var svgs = document.getElementsByTagName("svg");
  var totalTiles = svgs.length;
  var numLoadedTiles = 0;


  var canvas = document.getElementById("canvas");
  canvas.height = height;
  canvas.width = width * totalTiles;

  var ctx = canvas.getContext("2d");
  var DOMURL = self.URL || self.webkitURL || self;


  for (var i = 0; i < totalTiles; i ++) {

    var svgString = new XMLSerializer().serializeToString(svgs[i]);
    var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
    var url = DOMURL.createObjectURL(svg);
    
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(this, this.offsetX, 0);

        if ( numLoadedTiles == totalTiles ) {

          var png = canvas.toDataURL("image/png");
          console.log(png)
          document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
          DOMURL.revokeObjectURL(png);

        } else {
          numLoadedTiles ++;

        }

    };
    img.src = url;
    img.offsetX = i * width;

  };


  // now save the metadata
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(metadata));

  var a = document.createElement('a');
  a.href = 'data:' + data;
  a.download = 'data.json';
  a.innerHTML = 'download metadata';

  var container = document.getElementById('stats');
  container.appendChild(a);

}

