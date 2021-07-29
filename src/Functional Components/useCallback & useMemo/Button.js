import React from "react";

const Button = ({ handleClick, children }) => {
  console.log(`Rendering Button ... ${children} `);
  return (
    <div>
      <p>
        <button onClick={handleClick}>{children}</button>
      </p>
    </div>
  );
};

export default React.memo(Button);
