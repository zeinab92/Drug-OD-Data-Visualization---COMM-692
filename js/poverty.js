//POVERTY 2005
//Width and height of map
var width = 600;
var height = 350;

var lowColor = '#F9CE4D'
var highColor = '#BE1F24'

// D3 Projection
var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2]) // translate to center of screen
    .scale([800]); // scale things down so see entire US

// Define path generator
var path = d3.geoPath() // path generator that will convert GeoJSON to SVG paths
    .projection(projection); // tell path generator to use albersUsa projection

//Create SVG element and append map to the SVG
var svg_pov_2005 = d3.select(".factor-poverty .factor-tab-2005")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2005.call(tip2);

// Load in my states data!
d3.csv("data/poverty/poverty-2005.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
    var ramp = d3.scaleLinear().domain([minVal, maxVal]).range([lowColor, highColor])

    // Load GeoJSON data and merge with states data
    d3.json("us-states.json", function (json) {

        // Loop through each state data value in the .csv file
        for (var i = 0; i < data.length; i++) {

            // Grab State Name
            var dataState = data[i].state;

            // Grab data value 
            var dataValue = data[i].value;

            // Find the corresponding state inside the GeoJSON
            for (var j = 0; j < json.features.length; j++) {
                var jsonState = json.features[j].properties.name;

                if (dataState == jsonState) {

                    // Copy the data value into the JSON
                    json.features[j].properties.value = dataValue;

                    // Stop looking through the JSON
                    break;
                }
            }
        }

        // Bind the data to the SVG and create one path per GeoJSON feature
        svg_pov_2005.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });

        // add a legend
        var w = 140,
            h = 300;

        var key = d3.select(".factor-poverty")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "legend");

        var legend = key.append("defs")
            .append("svg:linearGradient")
            .attr("id", "gradient")
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
            .style("fill", "url(#gradient)")
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
//END OF POVERTY 2005



//POVERTY 2006
var svg_pov_2006 = d3.select(".factor-poverty .factor-tab-2006")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2006.call(tip2);

d3.csv("data/poverty/poverty-2006.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2006.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2006



//POVERTY 2007
var svg_pov_2007 = d3.select(".factor-poverty .factor-tab-2007")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2007.call(tip2);

d3.csv("data/poverty/poverty-2007.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2007.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2007



//POVERTY 2008
var svg_pov_2008 = d3.select(".factor-poverty .factor-tab-2008")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2008.call(tip2);

// Load in my states data!
d3.csv("data/poverty/poverty-2008.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2008.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2008



//POVERTY 2009
var svg_pov_2009 = d3.select(".factor-poverty .factor-tab-2009")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2009.call(tip2);

d3.csv("data/poverty/poverty-2009.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2009.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2009



//POVERTY 2010
var svg_pov_2010 = d3.select(".factor-poverty .factor-tab-2010")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2010.call(tip2);

d3.csv("data/poverty/poverty-2010.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2010.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2010 



//POVERTY 2011
var svg_pov_2011 = d3.select(".factor-poverty .factor-tab-2011")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2011.call(tip2);

d3.csv("data/poverty/poverty-2011.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2011.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2011



//POVERTY 2012
var svg_pov_2012 = d3.select(".factor-poverty .factor-tab-2012")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2012.call(tip2);

d3.csv("data/poverty/poverty-2012.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2012.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2012



//POVERTY 2013
var svg_pov_2013 = d3.select(".factor-poverty .factor-tab-2013")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2013.call(tip2);

d3.csv("data/poverty/poverty-2013.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2013.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2013



//POVERTY 2014
var svg_pov_2014 = d3.select(".factor-poverty .factor-tab-2014")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2014.call(tip2);

d3.csv("data/poverty/poverty-2014.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2014.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2014



//POVERTY 2015
var svg_pov_2015 = d3.select(".factor-poverty .factor-tab-2015")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2015.call(tip2);

d3.csv("data/poverty/poverty-2015.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2015.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2015



//POVERTY 2016
var svg_pov_2016 = d3.select(".factor-poverty .factor-tab-2016")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pov_2016.call(tip2);

d3.csv("data/poverty/poverty-2016.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 10
    var maxVal = 24
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

        svg_pov_2016.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip2.show)
            .on('mouseout', tip2.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".poverty-linegraph").find(state_hover).removeClass("hovered");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF POVERTY 2016