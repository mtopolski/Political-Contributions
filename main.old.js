var width = 1000;
var height = 500;
var svg = d3.select(".map").append("svg")
  .attr("width", width)
  .attr("height", height);

var usMap = d3.geo.albersUsa();
var path = d3.geo.path()
  .projection(usMap);

var colour = d3.scale.linear()
  .domain([0, 2500])
  .range(["rgb(217,95,14)","rgb(254,196,79)",
  "rgb(255,247,188)"]);

d3.json("us-topo.json", function(us){
  svg.selectAll('append')
  .data(topojson.feature(us, us.objects.counties).features)
  .enter()
  .append('path')
  .attr('d', path)
  .attr("fill", function(d, i) {return colour(i); })
  .attr("stroke", '#fff')
});