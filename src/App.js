import React, { useState } from "react";
// import MyComponentClass from "./Functional Components/useEffect/MyComponentClass";
import MyComponentFunction from "./Functional Components/useEffect/MyComponentFunction";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* <MyComponentClass /> */}
      <div>{show && <MyComponentFunction />}</div>
      <p>
        <button onClick={() => setShow((prev) => !prev)}>
          {" "}
          {show ? "Hide component" : "Show component"}{" "}
        </button>
      </p>
    </>
  );
}
