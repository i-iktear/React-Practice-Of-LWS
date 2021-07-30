import React, { useReducer } from "react";

const initialState = {
  counter: 1,
  counter2: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.value };

    case "decrease":
      return { ...state, counter: state.counter - action.value };
    case "increase2":
      return { ...state, counter2: state.counter2 + action.value };

    case "decrease2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <hr />
      <div>
        <span> Loaded from ComplexCounter.js file </span>
        <h1>Count : {count.counter} </h1>
        <button onClick={() => dispatch({ type: "increase", value: 1 })}>
          Increase By 1
        </button>
        <button onClick={() => dispatch({ type: "decrease", value: 2 })}>
          Decrease by 2
        </button>
      </div>
      <div>
        <h1>Count2 : {count.counter2} </h1>
        <button onClick={() => dispatch({ type: "increase2", value: 5 })}>
          Increase By 5
        </button>
        <button onClick={() => dispatch({ type: "decrease2", value: 3 })}>
          Decrease by 3
        </button>
      </div>
      <hr />
    </>
  );
};

export default ComplexCounter;
