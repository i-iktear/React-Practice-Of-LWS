import React from "react";

const InputCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <input onKeyPress={incrementCount} type="textbox" />
      <p> {count} times </p>
    </div>
  );
};

export default InputCounter;
