import React, { useState, useEffect, useRef } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  const intervalRef = useRef();

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button onClick={() => clearInterval(intervalRef.current)}>Stop!</button>
    </div>
  );
};

export default Time;
