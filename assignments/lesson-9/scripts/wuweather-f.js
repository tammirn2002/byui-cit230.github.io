var section = document.querySelector('section');

var requestURL = 'http://api.wunderground.com/api/ffbb53a904bff0c1/conditions/q/MN/Franklin.json'
var currentcond = new XMLHttpRequest();
currentcond.open('GET' , requestURL, true);
currentcond.send();

currentcond.onload = function () {
    var fweather = JSON.parse(currentcond.responseText);
    console.log(fweather);
    document.getElementById('currentTemp').innerHTML =
}
