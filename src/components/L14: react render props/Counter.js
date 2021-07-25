import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((pervState) => ({
      count: pervState.count + 1,
    }));
  };
  render() {
    const { children } = this.props;
    const { count } = this.state;
    return children(count, this.incrementCount);
  }
}
