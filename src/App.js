import React from "react";
import DisplayWeather from "./Components/DisplayWeather.js";
import "fontsource-roboto";
import Axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar.js";

// import { makeStyles } from "@material-ui/core/styles";

class App extends React.Component {
  //state
  state = {
    coords: {
      latitude: 45,
      longitude: 60,
    },
    data: {},
    inputData: "",
  };
  componentDidMount() {
    //get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        this.setState({ coords: newCoords });

        //Api call
        Axios.get(
          `http://api.weatherstack.com/current?access_key=d718dd3ef5874cbaf95760bb48c142aa&query=${this.state.coords.latitude},${this.state.coords.longitude}`
        ).then((res) => {
          let weatherData = {
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            country: res.data.location.country,
            wind_speed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            precip: res.data.current.precip,
            humidity: res.data.current.humidity,
            img: res.data.current.weather_icons,
            localtime: res.data.location.localtime,
            utc_offset: res.data.location.utc_offset,
          };
          this.setState({ data: weatherData });
        });
      });
    } else {
      console.log("not supported");
    }
  }

  //track the input field
  change = (value) => {
    this.setState({ inputData: value });
  };
  changeWeather = (event) => {
    event.preventDefault(); //убрать дефолтную перезагрузку страницы после submita какой-нибудь текста в form

    //Api call
    Axios.get(
      `http://api.weatherstack.com/current?access_key=d718dd3ef5874cbaf95760bb48c142aa&query=${this.state.inputData}`
    ).then((res) => {
      let weatherData = {
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        country: res.data.location.country,
        wind_speed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        precip: res.data.current.precip,
        humidity: res.data.current.humidity,
        img: res.data.current.weather_icons,
        localtime: res.data.location.localtime,
        utc_offset: res.data.location.utc_offset,
      };
      this.setState({ data: weatherData });
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Navbar
            changeWeather={this.changeWeather}
            changeRegion={this.change}
          />
          <DisplayWeather weatherData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
