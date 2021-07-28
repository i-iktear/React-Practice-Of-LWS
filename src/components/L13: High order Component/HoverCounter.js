const HoverCounter = ({ count, incrementCount, theme, switchTheme }) => {
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
      <button onClick={switchTheme}>Change color</button>
    </div>
  );
};

export default HoverCounter;
