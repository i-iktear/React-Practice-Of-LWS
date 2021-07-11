import React from "react";
import Clock from "./Clock";

const ClockList = ({ quantity = [] }) => {
  return (
    <>
      {quantity.map((el) => (
        <Clock key={el} />
      ))}
    </>
  );
};

export default ClockList;
