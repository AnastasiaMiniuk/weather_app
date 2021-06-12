import React from "react";
import DisplayWeather from "./Components/DisplayWeather.js";
import "fontsource-roboto";
import Axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar.js";

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

        //Api call with query of geolocation(latitude and longitude)
        Axios.get(
          `http://api.weatherstack.com/current?access_key=cb721bacf1044974f70324bb53816741&query=${this.state.coords.latitude},${this.state.coords.longitude}`
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
    event.preventDefault(); //убрать дефолтную перезагрузку страницы после submita  текста в form

    //Api call with query of dynamic data- inputData( which is typed in form)
    Axios.get(
      `http://api.weatherstack.com/current?access_key=cb721bacf1044974f70324bb53816741&query=${this.state.inputData}`
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
