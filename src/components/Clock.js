import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale: "bn-BD",
    };
  }

  componentDidMount = () => {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.clockTimer);
  };

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  changeRegion = (locale) => {
    this.setState({
      locale,
    });
  };

  render() {
    const { locale } = this.state;
    console.log("from clock", locale);

    return (
      <>
        <h1 className="class1">
          Hey, Aurko -- {this.props.children}{" "}
          <span> {this.state.date.toLocaleString(locale)} </span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.changeRegion} locale="en-US" show={false} />
        ) : (
          <Button change={this.changeRegion} locale="bn-BD" show />
        )}
      </>
    );
  }
}

export default Clock;
