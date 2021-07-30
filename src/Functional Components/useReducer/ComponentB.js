import React, { useContext } from "react";
import { counterContext } from "../../App";

const ComponentB = () => {
  const countContext = useContext(counterContext);

  const dispatch = countContext.dispatch;

  return (
    <div>
      <p>Component B</p>
      <button onClick={() => dispatch("increase")}>Increase</button>
      <button onClick={() => dispatch("decrease")}>Decrease</button>
    </div>
  );
};

export default ComponentB;
