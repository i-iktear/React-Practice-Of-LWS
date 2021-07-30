import React, { useReducer } from "react";

const initialState = 0;
const initialState2 = 100;
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

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState2);
  return (
    <>
      <div>
        <span> Loaded from CounterThree.js file </span>
        <h1>Count : {count} </h1>
        <button onClick={() => dispatch("increase")}>Increase</button>
        <button onClick={() => dispatch("decrease")}>Decrease</button>
      </div>
      <div>
        <h1>Count2 : {count2} </h1>
        <button onClick={() => dispatch2("increase")}>Increase</button>
        <button onClick={() => dispatch2("decrease")}>Decrease</button>
      </div>
    </>
  );
};

export default CounterThree;
