import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increase":
      return state + 1;

    case "decrease":
      return state - 1;

    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span> Loaded from Counter.js file </span>
      <h1>Count : {count} </h1>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
    </div>
  );
};

export default Counter;
