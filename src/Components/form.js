import React from "react";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.weatherMethod}>
        {/* обработчик нажатия на кнопку в форме */}
        {/* <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          name="city"
        /> */}
        <input type="text" name="city" placeholder="City" />

        <Button
          // onClick={this.props.weatherMethod}
          variant="contained"
          color="primary"
        >
          Weather
        </Button>
      </form>
    );
  }
}

export default Form;
