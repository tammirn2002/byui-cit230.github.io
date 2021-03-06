var requestURL = 'https://api.wunderground.com/api/ffbb53a904bff0c1/conditions/q/MN/Franklin.json';

var currentcond = new XMLHttpRequest();
currentcond.open('GET', requestURL, true);
currentcond.send();

currentcond.onload = function () {
    var fweather = JSON.parse(currentcond.responseText);
    console.log(fweather);
    document.getElementById('curtemp').innerHTML = fweather.current_observation.temp_f;
    document.getElementById('weathericon').src = fweather.current_observation.icon_url.replace("http", "https");
    document.getElementById('currentW').innerHTML = fweather.current_observation.weather;
    document.getElementById('wspeed').innerHTML = fweather.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = fweather.current_observation.windchill_f;
    document.getElementById('precip').innerHTML = fweather.current_observation.precip_1hr_in;

}
//forecast conditions

var requestfore = 'http://api.wunderground.com/api/ffbb53a904bff0c1/forecast/q/mn/Franklin.json';

var forecon = new XMLHttpRequest();
forecon.open('GET', requestfore, true);
forecon.send();

forecon.onload = function () {
    var curcon = JSON.parse(forecon.responseText);
    console.log(curcon);
    document.getElementById('weatherfore').innerHTML = curcon.forecast.txt_forecast.forecastday["0"].fcttext;
}
