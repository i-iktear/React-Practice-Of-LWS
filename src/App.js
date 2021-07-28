import React from "react";
import ClickCounter from "./components/L13: High order Component/ClickCounter";
import Counter from "./components/L14: react render props/Counter";
import Section from "./components/L16: React Context API/Section";
import ThemeContext from "./components/L16: React Context API/Contexts/ThemeContexts";
export default class App extends React.Component {
  state = {
    theme: "dark",
  };

  switchTheme = () => {
    this.setState(({ theme }) => {
      if (theme === "dark") {
        return {
          theme: "light",
        };
      } else {
        return {
          theme: "dark",
        };
      }
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <>
        <Counter>
          {(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <ThemeContext.Provider
          value={{ theme: theme, switchTheme: this.switchTheme }}
        >
          <Section />
        </ThemeContext.Provider>
      </>
    );
  }
}
