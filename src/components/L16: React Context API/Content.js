import HoverCounter from "../L13: High order Component/HoverCounter";
import Counter from "../L14: react render props/Counter";
import ThemeContext from "./Contexts/ThemeContexts";

import React from "react";

export default class Content extends React.Component {
  componentDidMount() {
    console.log(this.context);
    console.log(ThemeContext);
  }
  render() {
    return (
      <div>
        <h1>This is a Content</h1>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounter
              count={count}
              incrementCount={incrementCount}
              theme="dark"
              switchTheme={() => {}}
            />
          )}
        </Counter>
      </div>
    );
  }
}

Content.contextType = ThemeContext;
