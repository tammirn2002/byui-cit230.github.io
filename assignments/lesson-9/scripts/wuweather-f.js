var requestURL = 'http://api.wunderground.com/api/ffbb53a904bff0c1/conditions/q/MN/Franklin.json';

var currentcond = new XMLHttpRequest();
currentcond.open('GET', requestURL, true);
currentcond.send();

currentcond.onload = function () {
    var fweather = JSON.parse(currentcond.responseText);
    console.log(fweather);
    document.getElementById('hightemp').innerHTML = fweather.current_observation.temp_f;
    document.getElementById('weathericon').src = fweather.current_observation.icon_url;
    document.getElementById('currentW').innerHTML = fweather.current_observation.weather;
    document.getElementById('wspeed').innerHTML = fweather.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = fweather.current_observation.windchill_f;
    document.getElementById('precip').innerHTML = fweather.current_observation.precip_1hr_in;

}
//forecast conditions

var curconditions = new XMLHttpRequest();
curconditions.open("GET", "http://api.wunderground.com/api/ffbb53a904bff0c1/forecast/q/MN/Franklin/json", true);
curconditions.send();

curconditions.onload = function () {
    var curcon = JSON.parse(curconditions.responseText);
    console.log(text);
    document.getElementById('weathercond').innerHTML = curcon.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowtemp').innerHTML = curcon.forecast.simpleforecast.forecastday["0"].low.fahrenheit;

}
