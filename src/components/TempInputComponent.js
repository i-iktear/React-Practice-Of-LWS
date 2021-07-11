import React, { Component } from "react";

const scaleNmae = {
  c: "Celsius",
  f: "Fahrenheit",
};

export default class TempInputComponent extends Component {
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
    const { scale } = this.props;

    return (
      <div>
        <fieldset>
          <legend>Enter Temperature in {scaleNmae[scale]} </legend>
          <input
            type="text"
            value={temperature}
            onChange={this.ChangeTemperature}
          ></input>
        </fieldset>
      </div>
    );
  }
}
