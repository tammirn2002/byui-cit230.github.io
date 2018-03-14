var requestURL = 'http://api.wunderground.com/api/ffbb53a904bff0c1/conditions/q/OR/Springfield.json';

var currentcond = new XMLHttpRequest();
currentcond.open('GET', requestURL, true);
currentcond.send();

currentcond.onload = function () {
    var fweather = JSON.parse(currentcond.responseText);
    console.log(fweather);

    document.getElementById('weathericon').src = fweather.current_observation.icon_url;
    document.getElementById('currentW').innerHTML = fweather.current_observation.weather;
    document.getElementById('wspeed').innerHTML = fweather.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = fweather.current_observation.windchill_f;
    document.getElementById('precip').innerHTML = fweather.current_observation.precip_1hr_in;
    document.getElementById('place').innerHTML = fweather.current_observation.display_location.city;

}
//forecast conditions

var requestfore = 'http://api.wunderground.com/api/ffbb53a904bff0c1/forecast/q/OR/Springfield.json';

var curconditions = new XMLHttpRequest();
curconditions.open('GET', requestfore, true);
curconditions.send();

curconditions.onload = function () {
    var curcon = JSON.parse(curconditions.responseText);
    console.log(curcon);
    document.getElementById('weatherfore').innerHTML = curcon.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('lowtemp').innerHTML = curcon.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('hightemp').innerHTML = curcon.forecast.simpleforecast.forecastday["0"].high.fahrenheit;


}
