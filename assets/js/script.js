// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, 
// the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, 
// the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var APIkey = "29493053217f1ef1695fd8cf41f19d5e";

var submitBtn = document.querySelector("#submitBtn");
var input = document.querySelector("#cityInput");
var cityBox = document.querySelector("#cityWeather");
var forecast = document.querySelector("#forecast");
var forecastTemp = document.querySelector("#forecastTemp");
var forecastWind = document.querySelector("#forecastWind");
var forecastHumidity = document.querySelector("#forecastHumidity");

var formSubmitHandler = function (event) {
    event.preventDefault();
    
    var city = input.value.trim();
    
    if (city) {
        getCity(city);
        getForecast(city);
        input.value = '';
    } else {
        alert('Please enter a city');
    }
};

// var buttonClickHandler = function (event) {
//     var language = event.target.getAttribute('data-language');
    
//     if (language) {
//         getFeaturedRepos(language);
        
//         repoContainerEl.textContent = '';
//     }
// };

var getCity = function (city) {
    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
    
    fetch(queryUrl)
    .then(function (response) {
        if (response.ok) {
        return response.json();
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .then(function (cityWeather) {
        console.log(cityWeather);
        displayWeather(cityWeather, city);
    })
    .catch(function (error) {
        alert('Unable to connect to Weather API');
    });
};

var getForecast = function (city) {
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&cnt=5&appid=" + APIkey;

    fetch(forecastUrl)
    .then(function (response) {
        if (response.ok) {
        return response.json();
      } else {
        alert('Error: ' + response.statusText);
      }
    })
    .then(function (cityForecast) {
        console.log(cityForecast);
        displayForcast(cityForcast, city);
    })
    .catch(function (error) {
      alert('Unable to connect to Weather Forcast API');
    });
};
// var getFeaturedRepos = function (language) {
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };

var displayWeather = function (weather) {
    console.log(weather);

  var cityName = weather.name;
  var cityTemp = weather.main.temp;
  var cityWind = weather.wind.speed;
  var cityHumidity = weather.main.humidity;
  var weatherEl = document.createElement('h2');
  var tempEl = document.createElement('div');
  var windEl = document.createElement('div');
  var humidityEl = document.createElement('div');
  weatherEl.classList = 'list-item p-3';
  tempEl.classList = 'list-item p-3';
  windEl.classList = 'list-item p-3';
  humidityEl.classList = 'list-item p-3';
  var humidity2El = document.createElement('span');
  var titleEl = document.createElement('span');
  var temp2El = document.createElement('span');
  var windSEl = document.createElement('span');
  titleEl.textContent = cityName;
  temp2El.textContent = "Temp: " + cityTemp + "°F";
  windSEl.textContent = "Wind: " + cityWind + " MPH";
  humidity2El.textContent = "Humidity: " + cityHumidity + " %";
  weatherEl.appendChild(titleEl);
  tempEl.appendChild(temp2El);
  windEl.appendChild(windSEl);
  humidityEl.appendChild(humidity2El);
  cityBox.appendChild(weatherEl);
  cityBox.appendChild(tempEl);
  cityBox.appendChild(windEl);
  cityBox.appendChild(humidityEl);
};

var displayForecast = function (forecast) {
    console.log(forecast);

  var forecastTemp = forecast.list[0].main.temp;
  var forecastWind = forecast.list[0].wind.speed;
  var forecastHumidity = forecast.list[0].main.humidity;
 
  var forecastTempEl = document.createElement('div');
  var forecastWindEl = document.createElement('div');
  var forecastHumidityEl = document.createElement('div');
  
  forecastTempEl.classList = 'list-item p-3';
  forecastWindEl.classList = 'list-item p-3';
  forecastHumidityEl.classList = 'list-item p-3';
 
  var forecastTemp2El = document.createElement('span');
  var forecastWindSEl = document.createElement('span');
  var forecastHumidity2El = document.createElement('span');
  
  forecastTemp2El.textContent = "Temp: " + forecastTemp + "°F";
  forecastWindSEl.textContent = "Wind: " + forecastWind + " MPH";
  forecastHumidity2El.textContent = "Humidity: " + forecastHumidity + " %";
  
  forecastTempEl.appendChild(forecastTemp2El);
  forecastWindEl.appendChild(forecastWindSEl);
  forecastHumidityEl.appendChild(forecastHumidity2El);
  
  forecastTemp.appendChild(forecastTempEl);
  forecastWind.appendChild(forecastWindEl);
  forecastHumidity.appendChild(forecastHumidityEl);


};

submitBtn.addEventListener('click', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler);