import React from "react";
// import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./Weather.css";
import search_icon from "../../assets/images/weather-icons/search.png";
import clear_icon from "../../assets/images/weather-icons/clear.png";
import cloud_icon from "../../assets/images/weather-icons/cloud.png";
import drizzle_icon from "../../assets/images/weather-icons/drizzle.png";
import rain_icon from "../../assets/images/weather-icons/rain.png";
import snow_icon from "../../assets/images/weather-icons/snow.png";
import wind_icon from "../../assets/images/weather-icons/wind.png";
import humidity_icon from "../../assets/images/weather-icons/humidity.png";

const Weather = () => {
  // const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: "69a915e9ee14831c618b7397cb2fafc5",
  //   // key: {apiKey},
  //   lat: "47.445011",
  //   lon: "-122.146500",
  //   // location: "seattle,usa",
  //   lang: "en",
  //   unit: "imperial", // values are (metric, standard, imperial)
  // });

  // return (
  //   <div className="weather-page">
  //     <h1 className="weather-title">WEATHER</h1>
  //     <div className="weather-container">
  //       <ReactWeather
  //       isLoading={isLoading}
  //       errorMessage={errorMessage}
  //       data={data}
  //       lang="en"
  //       locationLabel="Renton"
  //       unitsLabels={{ temperature: "F", windSpeed: "mph" }}
  //       showForecast
  //     />
  //     </div>

  //   </div>
  // );
  return (
    <div className="weather">
      <div className="weather-container">
        <div className="weather-top-bar">
          <input type="text" className="city-input" placeholder="Search" />
          <div className="search-icon">
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="weather-image">
          <img src={cloud_icon} alt="" />
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
              <div className="humidity-percent">17 mph</div>
              <div className="weather-text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;