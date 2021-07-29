import React from "react";

const Tittle = () => {
  console.log("Tittle rendered");
  return (
    <div>
      {" "}
      <h1>usecallback hook tuts </h1>
    </div>
  );
};

export default React.memo(Tittle);
