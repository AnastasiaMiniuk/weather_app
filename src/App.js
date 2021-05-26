import React from "react";
import Info from "./Components/info";
import Form from "./Components/form";
import Weather from "./Components/weather";

const API_KEY = "b47c910b9d7c3d47c96cdb71cc59992a";

class App extends React.Component {
  gettingWeather = async () => {
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
