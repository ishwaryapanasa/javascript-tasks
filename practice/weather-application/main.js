const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const icon = document.querySelector('.weather-icon');
const dateElement = document.querySelector(".dateele");
const forecastContainer = document.querySelector("#forecast-container");
const precipitation = document.querySelector('.precipitation');
const day1Element = document.getElementById('day1');
const day2Element = document.getElementById('day2');
const day3Element = document.getElementById('day3');
const element=document.querySelector('.forecast');

const apiKey = '328d723a9a423c665cdd72906f0c6589'; // my actual API key

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim(); // Get city name
    if (city) {
        getWeatherAndForecast(city);
    } else {
        alert("Please enter a city name.");
    }
    // forecast.style.display = "block";
    forecastContainer.style.display='block';
});

// Function to fetch weather and forecast data
function getWeatherAndForecast(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then((response) => {
            // console.log(response);
            if (!response.ok) {
                throw new Error('City not found');
            }
            
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // Extract current weather (first entry in the list)
            const currentWeather = data.list[0];
            updateCurrentWeather(data.city.name, currentWeather);

            // Filter the forecast to get one entry per day
            const forecastData = [];
            const seenDates = new Set();

            data.list.forEach((entry) => {
                const entryDate = entry.dt_txt.split(' ')[0]; // Get date in 'YYYY-MM-DD' format
                if (!seenDates.has(entryDate)) {
                    seenDates.add(entryDate);
                    forecastData.push(entry);
                    // console.log(seenDates);
                }
            });

            // Update the 3-day forecast
            updateForecast(forecastData); 
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            forecastContainer.style.display='none';
            showError();
        });
}

// Function to update the current weather UI
function updateCurrentWeather(city, weather) {
    cityName.textContent = city;
    cityName.style.color = "yellow";
    temperature.textContent = `${weather.main.temp}°C`;
    humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    windspeed.textContent = `Wind Speed: ${weather.wind.speed} km/h`;
    precipitation.textContent = `Precipitation: ${weather.clouds.all}%`;

    // Logic to change the image for current weather based on temperature
    if (weather.main.temp < 10) {
        icon.src = 'images/cool.png';
    } else if (weather.main.temp >= 10 && weather.main.temp < 20) {
        icon.src = 'images/sun2.png';
    } else {
        icon.src = 'images/sun.jpg';
    }

    // Update date
    const now = new Date(weather.dt_txt);
    // console.log(now);
    const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
    const fullDate = now.toLocaleDateString();

    dateElement.innerHTML = `
        <h1 class="date">${dayName}</h1><br>
        <p class="day">${fullDate}</p>
    `;
}

// Function to update the 3-day forecast
function updateForecast(forecastData) {
    [day1Element, day2Element, day3Element].forEach((element, index) => {
        const forecast = forecastData[index];
        if (forecast) {
            const forecastDate = new Date(forecast.dt_txt);
            const day = forecastDate.getDate();
            const month = forecastDate.toLocaleString('en-US', { month: 'short' });
            const year = forecastDate.getFullYear();
            const displayDate = `${day} ${month} ${year}`;

            const forecastTemp = forecast.main.temp;
            const forecastDescription = forecast.weather[0].description;
            const forecastIcon = forecast.weather[0].icon;

            // Check if the forecast date is today
            // console.log(new Date());
            const today = new Date().toISOString().split('T')[0];
            // console.log( new Date().toISOString().split('T'));
            const isToday = forecast.dt_txt.split(' ')[0] === today;


            // Apply different styles if it's today
            element.innerHTML = `
                <div class="forecast-container ${isToday ? 'highlight' : ''}">
                    <div class="forecast-details">
                        <h3>${isToday ? 'Today' : displayDate}</h3>
                        <p>Weather: ${forecastDescription}</p>
                        <p>Temperature: ${forecastTemp}°C</p>
                    </div>
                    <img src="http://openweathermap.org/img/wn/${forecastIcon}@2x.png" alt="Weather Icon">
                </div>
            `;
        }
    });
}

// Function to handle errors
function showError() {
    cityName.textContent = "City not found";
    cityName.style.color = "red";
    temperature.textContent = "--°C";
    humidity.textContent = "Humidity: --%";
    windspeed.textContent = "Wind Speed: -- km/h";
    precipitation.textContent = "Precipitation: --%";
}