//Home page city info
var franklin = document.querySelector('div.franklin');
var greenville = document.querySelector('div.greenville');
var springfield = document.querySelector('div.springfield');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var cityinfo = request.response;
    showCities(cityinfo);
}

function showCities(jsonObj) {
    var city = jsonObj['towns'];
    for (var i = 0; i < city.length; i++) {
        var myArticle = document.createElement('article');
        var myH1 = document.createElement('h1');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH1.textContent = city[i].name;
        myH2.textContent = 'Motto: ' + city[i].motto;
        myPara1.textContent = 'Year Founded: ' + city[i].yearFounded;
        myPara2.textContent = 'Current Population: ' + city[i].currentPopulation;
        myPara3.textContent = 'Average Rainfall: ' + city[i].averageRainfall;
        myList.textContent = 'Event: ';

        var events = city[i].events;
        for (var j = 0; j < events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH1);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
        if (city[i].name == 'Franklin') {
            franklin.appendChild(myArticle);
        } else if (city[i].name == 'Greenville') {
            greenville.appendChild(myArticle);
        } else if (city[i].name == 'Springfield') {
            springfield.appendChild(myArticle);

        }
    }
}
