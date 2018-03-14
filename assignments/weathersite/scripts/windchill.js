var htemp = parseFloat(document.getElementById("hightemp").innerHTML);
var ltemp = parseFloat(document.getElementById("lowtemp").innerHTML);

var temp = (htemp + ltemp) /2;
var speed = parseFloat(document.getElementById('wspeed').innerHTML);



var f = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed,0.16));
var wchill = Math.round(f *10) / 10;


document.getElementById("windchill").innerHTML = wchill;
