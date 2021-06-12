import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export default function Navbar(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h1 className="title">Weather-app</h1>
      </div>
      <div className="col-md-6">
        <div>
          <form className="region" onSubmit={(e) => props.changeWeather(e)}>
            <input
              className="regionInput"
              placeholder="Enter Location"
              onChange={(e) => props.changeRegion(e.target.value)}
            />
          </form>
        </div>

        {/* button is still in progress */}

        {/* <div>
          <Button className="weatherByGeo" variant="contained">
            Weather by my geolocation
          </Button>
        </div> */}
      </div>
    </div>
  );
}
