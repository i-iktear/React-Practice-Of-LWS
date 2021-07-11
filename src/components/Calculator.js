import React, { Component } from "react";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends Component {
  state = {
    temperature: "",
  };

  ChangeTemperature = (e) => {
    this.setState({
      temperature: parseFloat(e.target.value),
    });
  };
  render() {
    const { temperature } = this.state;

    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in celsius</legend>
          <input
            type="text"
            value={temperature}
            onChange={this.ChangeTemperature}
          ></input>
        </fieldset>
        <BoilingVerdict celsius={temperature}></BoilingVerdict>
      </div>
    );
  }
}
