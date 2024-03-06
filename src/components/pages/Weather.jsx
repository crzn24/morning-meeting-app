import React, { useState } from "react";
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

  // const [wicon, setWicon] = useState(cloud_icon);
  const [wicon, setWicon] = useState("");

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

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " mph";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name;


    // Update weather icon
    setWicon(`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    // if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
    //   setWicon(clear_icon);
    // } else if (
    //   data.weather[0].icon === "02d" ||
    //   data.weather[0].icon === "02n"
    // ) {
    //   setWicon(cloud_icon);
    // } else if (
    //   data.weather[0].icon === "03d" ||
    //   data.weather[0].icon === "03n"
    // ) {
    //   setWicon(cloud_icon);
    // } else if (
    //   data.weather[0].icon === "04d" ||
    //   data.weather[0].icon === "04n"
    // ) {
    //   setWicon(cloud_icon);
    // } else if (
    //   data.weather[0].icon === "09d" ||
    //   data.weather[0].icon === "09n"
    // ) {
    //   setWicon(rain_icon);
    // } else if (
    //   data.weather[0].icon === "10d" ||
    //   data.weather[0].icon === "10n"
    // ) {
    //   setWicon(rain_icon);
    // } else if (
    //   data.weather[0].icon === "11d" ||
    //   data.weather[0].icon === "11n"
    // ) {
    //   setWicon(rain_icon);
    // } else if (
    //   data.weather[0].icon === "13d" ||
    //   data.weather[0].icon === "13n"
    // ) {
    //   setWicon(snow_icon);
    // } else if (
    //   data.weather[0].icon === "50d" ||
    //   data.weather[0].icon === "50n"
    // ) {
    //   setWicon(snow_icon);
    // } else {
    //   setWicon(clear_icon);
    // }
    console.log(data.weather[0].icon);
  };

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
          {wicon && <img src={wicon} alt="Weather Icon" className="wicon"/>}
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
    </div>
  );
};

export default Weather;
