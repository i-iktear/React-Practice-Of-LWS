import React from "react";

const BoilingVerdict = ({ celsius = 0 }) => {
  if (celsius >= 100) {
    return <p>The Water Would Boil</p>;
  }
  return <p>The Water Would Not Boil</p>;
};

export default BoilingVerdict;
