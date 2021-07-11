import React from "react";

const scaleName = {
  c: "Celsius",
  f: "Fahrenheit",
};

const TempInputComponent = ({ scale, temperature, ChangeTemperature }) => {
  return (
    <fieldset>
      <legend>Enter Temperature in {scaleName[scale]} </legend>
      <input
        type="text"
        value={temperature}
        onChange={(e) => ChangeTemperature(e, scale)}
      ></input>
    </fieldset>
  );
};

export default TempInputComponent;
