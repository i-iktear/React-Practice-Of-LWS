import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TempInputComponent from "./TempInputComponent";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TempInputComponent
          scale="c"
          temperature={celsius}
          ChangeTemperature={this.handleChange}
        />
        <TempInputComponent
          scale="f"
          temperature={fahrenheit}
          ChangeTemperature={this.handleChange}
        />
        <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
      </div>
    );
  }
}
