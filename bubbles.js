/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function addBubbles(demo) { 
 
var total_particles = 1000

var width = window.innerWidth,
    height = window.innerHeight;

var hue = d3.scale.category10();

var luminance = d3.scale.sqrt()
    .domain([0,6])
    .clamp(true)
    .range([100, 0]);

function fill(field) {
  var c = d3.lab(hue(field));
  // c.l = luminance(d.age);
  return c;
}

console.log(demo)

var nodes = [];

var year = demo[0]



fields = ["Age Under 5", "Age 5-9", "Age 10-29", "Age 30-44", "Age 45-64", "Age 65+",  "Asian", "Black", "Hispanic", "Other Race", "White", "Total Population"]

// for ( f in fields ) {

//   console.log(fields[f], fields[year[f]]);
// }
for ( var i = 0; i < 6; i ++) {
  console.log(year)
  var n_particles =  (total_particles * year[fields[i]] / year["Total Population"])

  for(var j = 0; j < n_particles; j++) {
    nodes.push({
      age: i,
      index: 0,
      none: 0,
      px: 0,
      py: 0,
      race: 0,
      weight: 0,
      x: 0,
      y: 0,
    });

  }

}
shuffleArray(nodes)
var counter = 0;
for ( var j = 6; j < 11; j ++) {

  var n_particles =  total_particles * (year[fields[j]] / year["Total Population"])
  console.log(n_particles, fields[j])

  for(var k = 0; k < n_particles;  k ++) {
      nodes[counter++].race = j - 6

  }
}

console.log(nodes)

sortType = "none"

var force = d3.layout.force()
    .nodes(nodes)
    .charge(-1)
    .size([width, height])
    .on("tick", tick)
    .start();

var svg = d3.select("#bubbles").append("svg")
    .attr("width", width)
    .attr("height", height);





var node = svg.selectAll(".node")
    .data(nodes)
  .enter().append("circle")
    .attr("class", "node")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", 3)
    .call(force.drag)
    .style("fill", function(d, i) { return "#888888"; })
    .on("mousedown", function() { d3.event.stopPropagation(); });

svg.style("opacity", 1e-6)
  .transition()
    .duration(1000)
    .style("opacity", 1);


d3.select("#GroupByNone")
    .on("click", function() {
      sortType = "none"
      force.resume()
      svg.selectAll(".raceText").style("opacity", 0);
      svg.selectAll(".ageText").style("opacity", 0);

    });

d3.select("#GroupByAge")
    .on("click", function() {
      sortType = "age"
      force.resume()
      svg.selectAll(".raceText").style("opacity", 0);
      svg.selectAll(".ageText").style("opacity", 1);
      node.style("fill", function(d, i) { return fill(d.age); })

    });

d3.select("#GroupByRace")
    .on("click", function() {
      sortType = "race"
      force.resume()
      svg.selectAll(".raceText").style("opacity", 1);
      svg.selectAll(".ageText").style("opacity", 0);
      node.style("fill", function(d, i) { return fill(d.race); })

    });

var attractors = {
  "none" : [
        {
      x: width/2,
      y: height/2
    } 
  ],
  "age" : [
    {
      x: width/7 * 1,
      y: height/2
    },
        {
      x: width/7 * 2,
      y: height/2
    },
      {
      x: width/7 * 3,
      y: height/2
    },
    {
      x: width/7 * 4,
      y: height/2
    },
        {
      x: width/7 * 5,
      y: height/2
    },
        {
      x: width/7 * 6,
      y: height/2
    },
  ],
  "race" : [
    {
      x: width/6 * 1,
      y: height/2
    },
        {
      x: width/6 * 2,
      y: height/2
    },
      {
      x: width/6 * 3,
      y: height/2
    },
    {
      x: width/6 * 4,
      y: height/2
    },
        {
      x: width/6 * 5,
      y: height/2
    }
  ]
}



  for (var j = 0; j <  attractors['age'].length; j ++) {

     svg.append("text")
        .attr("x", attractors['age'][j].x)             
        .attr("y", 100)
        .attr("class", "ageText")
        .attr("text-anchor", "middle")  
        .style("font-size", width / 50 + "px") 
        .style("opacity", 0)
        .text(fields[j]);

  }

  for (var j = 0; j <  attractors['race'].length; j ++) {

     svg.append("text")
        .attr("x", attractors['race'][4-j].x)             
        .attr("y", 100)
        .attr("class", "raceText")
        .attr("text-anchor", "middle")  
        .style("font-size", width / 50 + "px")
        .style("opacity", 0)
        .text(fields[j+6]);

  }

function tick(e) {

  // Push different nodes in different directions for clustering.
  nodes.forEach(function(o, i) {

    a = attractors[sortType][o[sortType]]

    o.y += ( o.y - a.y) / 3000;
    o.x += ( o.x - a.x) / 1500;

  });



  node.attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

function mousedown() {

}



}