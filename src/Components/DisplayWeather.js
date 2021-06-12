import React, { useState } from "react";

export default function DisplayWeather(props) {
  const {
    temperature,
    description,
    location,
    // region,
    country,
    wind_speed,
    pressure,
    precip,
    humidity,
    img,
    localtime,
  } = props.weatherData;

  return (
    <div className="user-weather">
      <div className="row row_basic">
        <div className="col-md-6 weather-temp">
          <h1>
            {temperature}
            <sup>o</sup>C , {description}
          </h1>
          <h4>{location}</h4>
          <p>{country}</p>
        </div>
        <div className="col-md-4 img_and_date">
          <div className="col-md-3">
            <img className="mainImg" src={img} alt="weather-img" />
          </div>
          <div className="col-md-3">
            <h2>{localtime}</h2>
          </div>
        </div>
      </div>

      <div className="row row_details">
        <div className="col-md-3 weather-info">
          <p>
            <b>Wind Speed</b>(km/hr)
          </p>
          <h2>{wind_speed}</h2>
        </div>

        <div className="col-md-3 weather-info">
          <p>
            <b>Preassure</b>(millibar)
          </p>
          <h2>{pressure}</h2>
        </div>

        <div className="col-md-3 weather-info">
          <p>
            <b>Precipitation</b>(mm)
          </p>
          <h2>{precip}</h2>
        </div>

        <div className="col-md-3 weather-info">
          <p>
            <b>Humidity</b>(%)
          </p>
          <h2>{humidity}</h2>
        </div>
      </div>
    </div>
  );
}
