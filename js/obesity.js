//OBESITY 2005
var width = 600;
var height = 350;

var lowColor = '#F9CE4D'
var highColor = '#BE1F24'

var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale([800]);

var path = d3.geoPath()
    .projection(projection);

var svg_obes_2005 = d3.select(".factor-obesity .factor-tab-2005")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2005.call(tip);

d3.csv("data/obesity/obesity-2005.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2005.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });

        var w = 140,
            h = 300;

        var key = d3.select(".factor-obesity")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "legend");

        var legend = key.append("defs")
            .append("svg:linearGradient")
            .attr("id", "gradient-obes")
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
            .style("fill", "url(#gradient-obes)")
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
//END OF OBESTIY 2005



//OBESTIY 2006
var svg_obes_2006 = d3.select(".factor-obesity .factor-tab-2006")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2006.call(tip);

d3.csv("data/obesity/obesity-2006.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2006.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2006



//OBESTIY 2007
var svg_obes_2007 = d3.select(".factor-obesity .factor-tab-2007")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2007.call(tip);

d3.csv("data/obesity/obesity-2007.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2007.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2007



//OBESTIY 2008
var svg_obes_2008 = d3.select(".factor-obesity .factor-tab-2008")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2008.call(tip);

d3.csv("data/obesity/obesity-2008.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2008.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2008



//OBESTIY 2009
var svg_obes_2009 = d3.select(".factor-obesity .factor-tab-2009")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2009.call(tip);

d3.csv("data/obesity/obesity-2009.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2009.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2009



//OBESTIY 2010
var svg_obes_2010 = d3.select(".factor-obesity .factor-tab-2010")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2010.call(tip);

d3.csv("data/obesity/obesity-2010.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2010.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2010



//OBESTIY 2011
var svg_obes_2011 = d3.select(".factor-obesity .factor-tab-2011")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2011.call(tip);

d3.csv("data/obesity/obesity-2011.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2011.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2011



//OBESTIY 2012
var svg_obes_2012 = d3.select(".factor-obesity .factor-tab-2012")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2012.call(tip);

d3.csv("data/obesity/obesity-2012.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2012.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2012



//OBESTIY 2013
var svg_obes_2013 = d3.select(".factor-obesity .factor-tab-2013")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2013.call(tip);

d3.csv("data/obesity/obesity-2013.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2013.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2013



//OBESTIY 2014
var svg_obes_2014 = d3.select(".factor-obesity .factor-tab-2014")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2014.call(tip);

d3.csv("data/obesity/obesity-2014.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2014.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2014



//OBESTIY 2015
var svg_obes_2015 = d3.select(".factor-obesity .factor-tab-2015")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2015.call(tip);

d3.csv("data/obesity/obesity-2015.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2015.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2015



//OBESTIY 2016
var svg_obes_2016 = d3.select(".factor-obesity .factor-tab-2016")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
        return "<span>" + d.properties.name + ": " + d.properties.value + "%" + "</span>";
    });

svg_obes_2016.call(tip);

d3.csv("data/obesity/obesity-2016.csv", function (data) {
    var dataArray = [];
    for (var d = 0; d < data.length; d++) {
        dataArray.push(parseFloat(data[d].value))
    }
    var minVal = 18
    var maxVal = 38
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

        svg_obes_2016.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)
            .on('mouseenter', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).addClass("hovered");
            })
            .on('mouseleave', function (d) {
                var state_hover = "." + d.properties.name.replace(/\s+/g, '');
                $(".obesity-linegraph").find(state_hover).removeClass("hovered");
            })
            .attr("class", function (d) {
                return d.properties.name.replace(/\s+/g, '');
            })
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                return ramp(d.properties.value)
            });
    });
});
//END OF OBESTIY 2016