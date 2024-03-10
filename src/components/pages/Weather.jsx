import React, { useState, useEffect } from "react";
import "./Weather.css";
import search_icon from "../../assets/images/weather-icons/search.png";
// import clear_icon from "../../assets/images/weather-icons/clear.png";
// import cloud_icon from "../../assets/images/weather-icons/cloud.png";
// import drizzle_icon from "../../assets/images/weather-icons/drizzle.png";
// import rain_icon from "../../assets/images/weather-icons/rain.png";
// import snow_icon from "../../assets/images/weather-icons/snow.png";
import wind_icon from "../../assets/images/weather-icons/wind.png";
import humidity_icon from "../../assets/images/weather-icons/humidity.png";

const Weather = () => {
  let api_key = "69a915e9ee14831c618b7397cb2fafc5";

  const [wicon, setWicon] = useState("");
  const [weatherStatements, setWeatherStatements] = useState({
    outside: "Today's weather is...",
    feels: "It feels _____ outside.",
  });

  useEffect(() => {
    // Fetch default weather data when component mounts
    getDefaultWeather();
  }, []);

  const getDefaultWeather = async () => {
    // You can set a default city or use geolocation to get the user's current location
    let defaultCity = "Renton";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=imperial&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " mph";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °F";
    location[0].innerHTML = data.name;

    // Update weather icon
    setWicon(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);

    // Update default weather statements
    setDefaultWeatherStatement(data.weather[0].main.toLowerCase());
  };
  // Update weather statements based on weather condition
  const setDefaultWeatherStatement = (weatherCondition, temperature) => {
    switch (weatherCondition) {
      case "clear":
        setWeatherStatements({
          outside: "Today's weather is clear.",
          feels:
            temperature <= 10
              ? "Don't forget a jacket!"
              : "It feels great outside.",
        });
        break;
      case "clouds":
        setWeatherStatements({
          outside: "Today's weather is cloudy.",
          feels:
            temperature <= 10
              ? "Don't forget a jacket!"
              : "It feels a bit gloomy outside.",
        });
        break;
      case "rain":
        setWeatherStatements({
          outside: "Today's weather is rainy.",
          feels: "Don't forget your jacket and umbrella!",
        });
        break;
      case "thunderstorm":
        setWeatherStatements({
          outside: "Today's weather is stormy with thunderstorms.",
          feels: "Stay indoors and stay safe!",
        });
        break;
      case "snow":
        setWeatherStatements({
          outside: "Today's weather is snowy.",
          feels: "Bundle up before going out or stay cozy inside!",
        });
        break;
      case "mist":
        setWeatherStatements({
          outside: "Today's weather is misty.",
          feels: "Visibility might be reduced, drive carefully!",
        });
        break;
      case "smoke":
        setWeatherStatements({
          outside: "Today's weather is smoky.",
          feels:
            "Air quality may be poor, avoid outdoor activities if possible.",
        });
        break;
      case "haze":
        setWeatherStatements({
          outside: "Today's weather is hazy.",
          feels: "Visibility might be reduced due to haze.",
        });
        break;
      case "fog":
        setWeatherStatements({
          outside: "Today's weather is foggy.",
          feels:
            "Visibility might be significantly reduced, be cautious while driving!",
        });
        break;
      case "tornado":
        setWeatherStatements({
          outside: "Today's weather is dangerous with a tornado warning!",
          feels: "Seek shelter immediately and stay away from windows!",
        });
        break;
      case "hurricane":
        setWeatherStatements({
          outside: "Today's weather is severe with a hurricane warning!",
          feels: "Stay indoors, and follow evacuation orders if necessary!",
        });
        break;
      default:
        setWeatherStatements({
          outside: "Today's weather is unpredictable.",
          feels: "Be prepared for anything!",
        });
    }
  };

  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === "") {
      return 0;
    }
    // need to use template literals to insert value in string
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=imperial&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    const weatherStatements =
      document.getElementsByClassName("weather-statements");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " mph";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name;

    // Update weather icon
    setWicon(
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );

    // Update default weather statements
    setDefaultWeatherStatement(data.weather[0].main.toLowerCase());
  };

  // console.log(data.weather[0].icon);

  // ^^^ in the url we will get element.value and use our api key to fetch data. with the url variable, we are fetching the data and storing it in the response variable. after getting the data in the response variable, we pass the data into json

  return (
    <div className="weather">
      <div className="weather-container">
        <div className="weather-top-bar">
          <input type="text" className="city-input" placeholder="Search" />
          <div
            className="search-icon"
            onClick={() => {
              search();
            }}
          >
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          {wicon && <img src={wicon} alt="Weather Icon" className="wicon" />}
          {/* <img src={wicon} alt="Weather Icon" className="wicon"/> */}
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Los Angeles, CA</div>
        <div className="weather-data-container">
          <div className="weather-element">
            <img src={humidity_icon} alt="" className="weather-icon" />
            <div className="weather-data">
              <div className="humidity-percent">64%</div>
              <div className="weather-text">Humidity</div>
            </div>
          </div>
          <div className="weather-element">
            <img src={wind_icon} alt="" className="weather-icon" />
            <div className="weather-data">
              <div className="wind-rate">17 mph</div>
              <div className="weather-text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
      <div className="weather-statements">
        <p className="weather-outside">{weatherStatements.outside}</p>
        <p className="weather-feels">{weatherStatements.feels}</p>
      </div>
    </div>
  );
};

export default Weather;
