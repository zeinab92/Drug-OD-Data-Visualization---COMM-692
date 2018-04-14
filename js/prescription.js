//PERSCRIPTION 2006
var svg_pres_2006 = d3.select(".factor-prescription .factor-tab-2006")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "</span>";
    });

svg_pres_2006.call(tip);

d3.csv("data/prescription/prescription-2006.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2006.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });

        var w = 140,
            h = 250;

        var key = d3.select(".factor-prescription")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "legend");

        var legend = key.append("defs")
            .append("svg:linearGradient")
            .attr("id", "gradient-pres")
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
            .style("fill", "url(#gradient-pres)")
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
//END OF PERSCRIPTION 2006

//PERSCRIPTION 2007
var svg_pres_2007 = d3.select(".factor-prescription .factor-tab-2007")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2007.call(tip);

d3.csv("data/prescription/prescription-2007.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2007.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2007

//PERSCRIPTION 2008
var svg_pres_2008 = d3.select(".factor-prescription .factor-tab-2008")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2008.call(tip);

d3.csv("data/prescription/prescription-2008.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2008.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2008

//PERSCRIPTION 2009
var svg_pres_2009 = d3.select(".factor-prescription .factor-tab-2009")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2009.call(tip);

d3.csv("data/prescription/prescription-2009.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2009.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2009

//PERSCRIPTION 2010
var svg_pres_2010 = d3.select(".factor-prescription .factor-tab-2010")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2010.call(tip);

d3.csv("data/prescription/prescription-2010.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2010.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2010

//PERSCRIPTION 2011
var svg_pres_2011 = d3.select(".factor-prescription .factor-tab-2011")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2011.call(tip);

d3.csv("data/prescription/prescription-2011.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2011.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2011

//PERSCRIPTION 2012
var svg_pres_2012 = d3.select(".factor-prescription .factor-tab-2012")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2012.call(tip);

d3.csv("data/prescription/prescription-2012.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2012.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2012

//PERSCRIPTION 2013
var svg_pres_2013 = d3.select(".factor-prescription .factor-tab-2013")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2013.call(tip);

d3.csv("data/prescription/prescription-2013.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2013.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2013

//PERSCRIPTION 2014
var svg_pres_2014 = d3.select(".factor-prescription .factor-tab-2014")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2014.call(tip);

d3.csv("data/prescription/prescription-2014.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2014.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2014

//PERSCRIPTION 2015
var svg_pres_2015 = d3.select(".factor-prescription .factor-tab-2015")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2015.call(tip);

d3.csv("data/prescription/prescription-2015.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2015.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2015

//PERSCRIPTION 2016
var svg_pres_2016 = d3.select(".factor-prescription .factor-tab-2016")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

svg_pres_2016.call(tip);

d3.csv("data/prescription/prescription-2016.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 32
    var maxVal = 150
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

        svg_pres_2016.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).addClass("hovered");
                $(".hovered .line").css("stroke", ramp(d.properties.value));
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".prescription-linegraph").find(state_hover).removeClass("hovered");
                $(".line").css("stroke", "rgba(0,0,0,0.1)");
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });     
    });
});
//END OF PERSCRIPTION 2016