const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        Click {count} times
      </button>
    </div>
  );
};

export default ClickCounter;
