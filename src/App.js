import React from "react";
import Counter from "./Functional Components/useReducer/Counter";
import ComplexCounter from "./Functional Components/useReducer/ComplexCounter";
import CounterThree from "./Functional Components/useReducer/CounterThree";

export default function App() {
  return (
    <div className="app">
      <Counter />
      <ComplexCounter />
      <CounterThree />
    </div>
  );
}
