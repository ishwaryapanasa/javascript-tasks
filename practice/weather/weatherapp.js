const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windspeed = document.querySelector('.windspeed');
const icon=document.querySelector('.weather-icon');
const dateElement=document.querySelector(".dateele");
const imageText= document.querySelector(".image-text");
const forecastContainer=document.querySelector("#forecast-container");
const day=document.getElementById('day');
const precipitation = document.querySelector('.precipitation');
const day1Element = document.getElementById('day1');
const day2Element = document.getElementById('day2');
const day3Element = document.getElementById('day3');



const apiKey ='328d723a9a423c665cdd72906f0c6589';  
// Your actual API key


// Event listener for the search button
searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim(); // Get city name
    if (city) {
        getWeatherData(city);
        getThreeDayForecast(city);
    } else {
        alert("Please enter a city name.");
    }
    forecastContainer.style.display="block";
});

// Function to fetch weather data from OpenWeather API
function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Update the UI with the weather data
            console.log(data);
            cityName.textContent = data.name;
            cityName.style.color="yellow"
            temperature.textContent = `${data.main.temp}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
            windspeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
            precipitation.textContent=`precipitation: ${data.clouds.all}%`

            //logic to change the image o current day weather based on the condition
            if (data.main.temp<10) {
                  icon.src = 'images/cool.jpg';
            }else if(data.main.temp > 10 && data.main.temp<20){
                icon.src = 'images/sun2.jpg'; 
            }else{
                icon.src='images/sun.jpg';
            }
            //date of current day
            const now = new Date();
            const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }); // Get day name
            const fullDate = now.toLocaleDateString(); // Get full date

            // Update date container with day and date in separate lines
            dateElement.innerHTML = `
                <h1 class="date">${dayName}</h1><br>
                <p class="day">${fullDate}</p>
            `;
        })
        .catch(error => {
            // Handle errors (e.g., city not found)
            cityName.textContent = "City not found";
            cityName.style.color="red";
            temperature.textContent = "--°C";
            humidity.textContent = "Humidity: --%";
            windspeed.textContent = "Wind Speed: -- km/h";
        
        });
    
}

// Function to fetch and display the 3-day forecast
function getThreeDayForecast(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Filter forecast data to include the first occurrence for each day
            const forecastData = [];
            const seenDates = new Set();

            data.list.forEach(entry => {
                const entryDate = entry.dt_txt.split(' ')[0]; // Get date in 'YYYY-MM-DD' format
                if (!seenDates.has(entryDate)) {
                    seenDates.add(entryDate);
                    forecastData.push(entry);
                }
            });

            // Update each day's forecast data
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
                    const today = new Date().toISOString().split('T')[0];
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
        })
        .catch(error => {
            console.error('Error fetching 3-day forecast:', error);
        });
}

            