// **********************************************     DECLARING VARIABLES    ***************************************************************
const cityInput = document.querySelector('.header__input');
const searchBtn = document.querySelector('.header__button');
const cityTemperature = document.querySelector('.weather__temperature');
const cityName = document.querySelector('.weather__city');
const humidityValue = document.querySelector('.footer__value_humidity');
const windSpeedValue = document.querySelector('.footer__value_wind');
const apiKey = "a02d4c913b19cac84a4c93f38958208e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector('.weather__image');
const weather = document.querySelector('.weather');
const footer = document.querySelector('.footer');
const error = document.querySelector('.page__error-message');

console.log(cityInput);

// **********************************************     FUNCTION DECLARATIONS    ***************************************************************
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if(response.status === 404){
        error.classList.toggle('page__error-message_display_none');
        weather.classList.toggle('weather_display_none');
        footer.classList.toggle('footer_display_none');
    }
    else{
        console.log(data);

        cityName.innerHTML = data.name;
        cityTemperature.innerHTML = Math.round((data.main.temp * 9 / 5) + 32) + "°F";
        humidityValue.innerHTML = data.main.humidity + "%";
        windSpeedValue.innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=== "Clear"){
            weatherIcon.src = './images/clear.png';
        }
        else if(data.weather[0].main=== "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        }
        else if(data.weather[0].main=== "Rain"){
            weatherIcon.src = "./images/rain.png";
        }
        else if(data.weather[0].main=== "Drizzle"){
            weatherIcon.src = "./images/drizzle.png";
        }
        if(data.weather[0].main=== "Mist"){
            weatherIcon.src = "./images/misty.png";
        }

        weather.classList.toggle('weather_display_none');
        footer.classList.toggle('footer_display_none');
    }
}

checkWeather();

// *************************************************     EVENT LISTENERS    ******************************************************************
searchBtn.addEventListener('click', () => {
    checkWeather(cityInput.value);  
})