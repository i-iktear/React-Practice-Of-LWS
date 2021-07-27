const HoverCounter = ({ count, incrementCount, theme }) => {
  const style =
    theme === "dark"
      ? {
          backgroundColor: "#000",
          color: "#199",
        }
      : null;
  return (
    <div>
      <h1 type="button" style={style} onMouseOver={incrementCount}>
        Hovered {count} times
      </h1>
    </div>
  );
};

export default HoverCounter;
