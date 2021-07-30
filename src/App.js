import React, { useReducer } from "react";
import ComponentA from "./Functional Components/useReducer/ComponentA";

export const counterContext = React.createContext();

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

export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="app">
      <div> Count: {count} </div>
      <counterContext.Provider value={{ dispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}
