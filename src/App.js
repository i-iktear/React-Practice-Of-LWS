import ClickCounter from "./components/L13: High order Component/ClickCounter";
import HoverCounter from "./components/L13: High order Component/HoverCounter";
import Counter from "./components/L14: react render props/Counter";

function App() {
  return (
    <>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </>
  );
}

export default App;
