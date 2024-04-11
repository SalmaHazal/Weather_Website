const apiKey = "d662e6a76b01b465aa6abfc94ca1fcb2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.getElementById("input");
const searchbtn = document.getElementById("btn");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".meteo").style.display = "none";


    }
    else{
        let data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".meteo").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}   

searchbtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});