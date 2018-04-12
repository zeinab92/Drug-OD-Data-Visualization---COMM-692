//MENTAL FACILITY 2006
var width = 500;
var height = 300;

var lowColor = '#F9CE4D'
var highColor = '#BE1F24'

var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale([500]);

var path = d3.geoPath()
    .projection(projection); 

var svg_mf_2010 = d3.select(".fac-map-1")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_mf_2010.call(tip);

d3.csv("data/mental-facilities/mental-facilities-2010.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 1
    var maxVal = 12
    var ramp = d3.scaleLinear().domain([minVal, maxVal]).range([lowColor, highColor])

    d3.json("us-states.json", function (json) {

        for (var i = 0; i < data.length; i++) {

            var dataState = data[i].state;

            var dataValue = data[i].value;

            for (var j = 0; j < json.features.length; j++) {
                var jsonState = json.features[j].properties.name;

                if (dataState == jsonState) {

                    json.features[j].properties.value = dataValue;

                    break;
                }
            }
        }

        svg_mf_2010.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
//            .on('mouseenter', function (d) {
//                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
//                $(".prescription-linegraph").find(state_hover).addClass("hovered");
//            })
//            .on('mouseleave', function (d) {
//                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
//                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
//            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });

        var w = 140,
            h = 300;

        var key = d3.select(".fac-map-1")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "legend");

        var legend = key.append("defs")
            .append("svg:linearGradient")
            .attr("id", "gradient-mf")
            .attr("x1", "100%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "100%")
            .attr("spreadMethod", "pad");

        legend.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", highColor)
            .attr("stop-opacity", 1);

        legend.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", lowColor)
            .attr("stop-opacity", 1);

        key.append("rect")
            .attr("width", w - 100)
            .attr("height", h)
            .style("fill", "url(#gradient-mf)")
            .attr("transform", "translate(0,10)");

        var y = d3.scaleLinear()
            .range([h, 0])
            .domain([minVal, maxVal]);

        var yAxis = d3.axisRight(y);

        key.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(21,10)")
            .call(yAxis)        
    });
});
//END OF MENTAL FACILITIES 2006

//PERSCRIPTION 2007
//var width = 600;
//var height = 350;
//
//var lowColor = '#F9CE4D'
//var highColor = '#BE1F24'
//
//var projection = d3.geoAlbersUsa()
//    .translate([width / 2, height / 2])
//    .scale([800]);
//
//var path = d3.geoPath()
//    .projection(projection); 
//
//var svg_pres_2007 = d3.select(".factor-prescription .factor-tab-2007")
//    .append("svg")
//    .attr("width", width)
//    .attr("height", height);
//
//var tip = d3.tip()
//    .attr('class', 'd3-tip')
//    .offset([-10, 0])
//    .html(function(d) {
//        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
//    });
//
//svg_pov_2007.call(tip);
//
//d3.csv("data/prescription/prescription-2007.csv", function (data) {
//    var dataArray = [];
//    for (var d = 0; d < data.length; d++) {
//        dataArray.push(parseFloat(data[d].value))
//    }
//    var minVal = 32
//    var maxVal = 150
//    var ramp = d3.scaleLinear().domain([minVal, maxVal]).range([lowColor, highColor])
//
//    d3.json("us-states.json", function (json) {
//
//        for (var i = 0; i < data.length; i++) {
//
//            var dataState = data[i].state;
//
//            var dataValue = data[i].value;
//
//            for (var j = 0; j < json.features.length; j++) {
//                var jsonState = json.features[j].properties.name;
//
//                if (dataState == jsonState) {
//
//                    json.features[j].properties.value = dataValue;
//
//                    break;
//                }
//            }
//        }
//
//        svg_pres_2007.selectAll("path")
//            .data(json.features)
//            .enter()
//            .append("path")
//            .attr("d", path)
//            .attr("class", function (d) {
//                return d.properties.name.replace(/\s+/g, '');
//            })
//            .on('mouseover', tip.show)
//            .on('mouseout', tip.hide)
//            .on('mouseenter', function (d) {
//                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
//                $(".prescription-linegraph").find(state_hover).addClass("hovered");
//            })
//            .on('mouseleave', function (d) {
//                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
//                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
//            })
//            .style("stroke", "#fff")
//            .style("stroke-width", "1")
//            .style("fill", function (d) {
//                return ramp(d.properties.value)
//            });     
//    });
//});
//END OF MENTAL FACILITIES 2007