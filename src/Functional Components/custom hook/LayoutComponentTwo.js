import React from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const LayoutComponentTwo = () => {
  const onSmallscreen = useWindowWidth(700);

  return (
    <div className={onSmallscreen ? "Small" : "Big"}>
      <h1> This is Componenmt Two. </h1>
    </div>
  );
};

export default LayoutComponentTwo;
