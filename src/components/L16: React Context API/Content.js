import HoverCounter from "../L13: High order Component/HoverCounter";
import Counter from "../L14: react render props/Counter";
import ThemeContext from "./Contexts/ThemeContexts";

const Content = () => {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => {
          return (
            <ThemeContext.Consumer>
              {" "}
              {({ theme }) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                />
              )}
            </ThemeContext.Consumer>
          );
        }}
      </Counter>
    </div>
  );
};

export default Content;
