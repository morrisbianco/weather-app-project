var APIkey = "29493053217f1ef1695fd8cf41f19d5e";

var submitBtn = document.querySelector("#submitBtn");
var input = document.querySelector("#cityInput");
var cityBox = document.querySelector("#cityWeather");
var forecast = document.querySelector("#forecast");
var forecastTimeEl = document.querySelector(".forecastTime0");
var forecasticonEl = document.querySelector(".forecastIcon0");
var forecastTempEl = document.querySelector(".forecastTemp0");
var forecastWindEl = document.querySelector(".forecastWind0");
var forecastHumidityEl = document.querySelector(".forecastHumidity0");
var forecastTimeEl1 = document.querySelector(".forecastTime1");
var forecasticonEl1 = document.querySelector(".forecastIcon1");
var forecastTempEl1 = document.querySelector(".forecastTemp1");
var forecastWindEl1 = document.querySelector(".forecastWind1");
var forecastHumidityEl1 = document.querySelector(".forecastHumidity1");
var forecastTimeEl2 = document.querySelector(".forecastTime2");
var forecasticonEl2 = document.querySelector(".forecastIcon2");
var forecastTempEl2 = document.querySelector(".forecastTemp2");
var forecastWindEl2 = document.querySelector(".forecastWind2");
var forecastHumidityEl2 = document.querySelector(".forecastHumidity2");
var forecastTimeEl3 = document.querySelector(".forecastTime3");
var forecasticonEl3 = document.querySelector(".forecastIcon3");
var forecastTempEl3 = document.querySelector(".forecastTemp3");
var forecastWindEl3 = document.querySelector(".forecastWind3");
var forecastHumidityEl3 = document.querySelector(".forecastHumidity3");
var forecastTimeEl4 = document.querySelector(".forecastTime4");
var forecasticonEl4 = document.querySelector(".forecastIcon4");
var forecastTempEl4 = document.querySelector(".forecastTemp4");
var forecastWindEl4 = document.querySelector(".forecastWind4");
var forecastHumidityEl4 = document.querySelector(".forecastHumidity4");
var searchHistory = document.querySelector("#searchHistory");

var formSubmitHandler = function (event) {
    event.preventDefault();

    var city = input.value.trim();

    if (city) {
        getCity(city);
        getForecast(city);
        input.value = '';
    } else {
        return;
    }

    var historyBtn = document.createElement('button');
    historyBtn.classList = 'btn btn-info button-block m-2';
    historyBtn.textContent = city;
    searchHistory.appendChild(historyBtn);
};

var getCity = function (city) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;

    fetch(queryUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } 
        })
        .then(function (cityWeather) {
            var uvUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityWeather.coord.lat}&lon=${cityWeather.coord.lon}&appid=${APIkey}`
            console.log(cityWeather);
            displayWeather(cityWeather, city);
            fetch(uvUrl)
                .then(function (response) {
                    return response.json();
                }).then(function (uvdata) {
                    var uv = uvdata.current.uvi
                    var uvEl = document.createElement('div');
                    var uv2El = document.createElement('span');
                    uv2El.classList = 'list-item p-2'
                    uv2El.textContent = "UV Index: " + uv;
                    uvEl.appendChild(uv2El);
                    cityBox.appendChild(uvEl);
                })
        })
};

var displayForecast = function (forecast) {
    console.log(forecast);

    var forecastTemp = forecast.list[0].main.temp;
    var forecastWind = forecast.list[0].wind.speed;
    var forecastHumidity = forecast.list[0].main.humidity;
    var forecastIcon = forecast.list[0].weather[0].icon;
    var forecastTime = moment(forecast.list[0].dt, "X").format("(MM/DD/YY)");

    forecastHumidityEl.textContent = "Humidity: " + forecastHumidity + " %";
    forecastWindEl.textContent = "Wind: " + forecastWind + " MPH";
    forecastTempEl.textContent = "Temp: " + forecastTemp + "°F";
    forecasticonEl.setAttribute('src', `http://openweathermap.org/img/wn/${forecastIcon}@2x.png`);
    forecastTimeEl.textContent = forecastTime;

    var forecastTemp1 = forecast.list[8].main.temp;
    var forecastWind1 = forecast.list[8].wind.speed;
    var forecastHumidity1 = forecast.list[8].main.humidity;
    var forecastIcon1 = forecast.list[8].weather[0].icon;
    var forecastTime1 = moment(forecast.list[8].dt, "X").format("(MM/DD/YY)");

    forecastHumidityEl1.textContent = "Humidity: " + forecastHumidity1 + " %";
    forecastWindEl1.textContent = "Wind: " + forecastWind1 + " MPH";
    forecastTempEl1.textContent = "Temp: " + forecastTemp1 + "°F";
    forecasticonEl1.setAttribute('src', `http://openweathermap.org/img/wn/${forecastIcon1}@2x.png`);
    forecastTimeEl1.textContent = forecastTime1;

    var forecastTemp2 = forecast.list[16].main.temp;
    var forecastWind2 = forecast.list[16].wind.speed;
    var forecastHumidity2 = forecast.list[16].main.humidity;
    var forecastIcon2 = forecast.list[16].weather[0].icon;
    var forecastTime2 = moment(forecast.list[16].dt, "X").format("(MM/DD/YY)");

    forecastHumidityEl2.textContent = "Humidity: " + forecastHumidity2 + " %";
    forecastWindEl2.textContent = "Wind: " + forecastWind2 + " MPH";
    forecastTempEl2.textContent = "Temp: " + forecastTemp2 + "°F";
    forecasticonEl2.setAttribute('src', `http://openweathermap.org/img/wn/${forecastIcon2}@2x.png`);
    forecastTimeEl2.textContent = forecastTime2;

    var forecastTemp3 = forecast.list[24].main.temp;
    var forecastWind3 = forecast.list[24].wind.speed;
    var forecastHumidity3 = forecast.list[24].main.humidity;
    var forecastIcon3 = forecast.list[24].weather[0].icon;
    var forecastTime3 = moment(forecast.list[24].dt, "X").format("(MM/DD/YY)");

    forecastHumidityEl3.textContent = "Humidity: " + forecastHumidity3 + " %";
    forecastWindEl3.textContent = "Wind: " + forecastWind3 + " MPH";
    forecastTempEl3.textContent = "Temp: " + forecastTemp3 + "°F";
    forecasticonEl3.setAttribute('src', `http://openweathermap.org/img/wn/${forecastIcon3}@2x.png`);
    forecastTimeEl3.textContent = forecastTime3;

    var forecastTemp4 = forecast.list[32].main.temp;
    var forecastWind4 = forecast.list[32].wind.speed;
    var forecastHumidity4 = forecast.list[32].main.humidity;
    var forecastIcon4 = forecast.list[32].weather[0].icon;
    var forecastTime4 = moment(forecast.list[32].dt, "X").format("(MM/DD/YY)");

    forecastHumidityEl4.textContent = "Humidity: " + forecastHumidity4 + " %";
    forecastWindEl4.textContent = "Wind: " + forecastWind4 + " MPH";
    forecastTempEl4.textContent = "Temp: " + forecastTemp4 + "°F";
    forecasticonEl4.setAttribute('src', `http://openweathermap.org/img/wn/${forecastIcon4}@2x.png`);
    forecastTimeEl4.textContent = forecastTime4;
};

var getForecast = function (city) {
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + APIkey;

    fetch(forecastUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.log('Error: ' + response.statusText);
            }
        })
        .then(function (cityForecast) {
            displayForecast(cityForecast);
        })
        .catch(function (error) {
            console.log(error);
        });
};

var displayWeather = function (weather) {
    cityBox.innerHTML = "";

    var cityName = weather.name;
    var cityIcon = weather.weather[0].icon;
    var cityTemp = weather.main.temp;
    var cityWind = weather.wind.speed;
    var cityHumidity = weather.main.humidity;
    var cityTime = moment(weather.dt, "X").format("(MM/DD/YY)");

    var weatherEl = document.createElement('h2');
    var iconEl = document.createElement('img');
    var tempEl = document.createElement('div');
    var windEl = document.createElement('div');
    var humidityEl = document.createElement('div');

    iconEl.setAttribute('src', `http://openweathermap.org/img/wn/${cityIcon}@2x.png`);

    weatherEl.classList = 'list-item p-1';
    tempEl.classList = 'list-item p-1';
    windEl.classList = 'list-item p-1';
    humidityEl.classList = 'list-item p-1';

    var humidity2El = document.createElement('span');
    var nameEl = document.createElement('span');
    var temp2El = document.createElement('span');
    var windSEl = document.createElement('span');

    nameEl.textContent = cityName + " " + cityTime;
    temp2El.textContent = "Temp: " + cityTemp + "°F";
    windSEl.textContent = "Wind: " + cityWind + " MPH";
    humidity2El.textContent = "Humidity: " + cityHumidity + " %";

    weatherEl.appendChild(nameEl);
    tempEl.appendChild(temp2El);
    windEl.appendChild(windSEl);
    humidityEl.appendChild(humidity2El);

    cityBox.appendChild(weatherEl);
    cityBox.appendChild(iconEl);
    cityBox.appendChild(tempEl);
    cityBox.appendChild(windEl);
    cityBox.appendChild(humidityEl);

};

submitBtn.addEventListener('click', formSubmitHandler);