import React, { useState, useEffect } from "react";

const MyComponentFunction = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const addClick = () => {
    setCount((prev) => prev + 1);
  };

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    console.log("run");
    document.title = `Clicked ${count}  times`;
  }, [count]);

  useEffect(() => {
    console.log("Timer started");
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()} </p>
      <p>
        {" "}
        <button onClick={addClick}>Click</button>{" "}
      </p>
    </div>
  );
};

export default MyComponentFunction;
