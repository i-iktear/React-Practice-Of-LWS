import React, { Component } from "react";

export default class Form extends Component {
  state = {
    tittle: "javascript",
    name: "javascript is love",
    library: "React",
    check: true,
    number1: 1,
    number2: 1,
  };

  handleChange = (e) => {
    if (e.target.type === "text") {
      this.setState({
        tittle: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        name: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        check: e.target.checked,
      });
    } else if (e.target.type === "number") {
      this.setState({
        [e.target.name]: Number(e.target.value),
      });
    }
  };

  submitForm = (e) => {
    const { tittle, name, library, check } = this.state;
    e.preventDefault();
    console.log({ tittle, name, library, check });
  };

  render() {
    const { tittle, name, library, check, number1, number2 } = this.state;
    return (
      <>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Enter your name"
            value={tittle}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <input
            type="number"
            name="number1"
            value={number1}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <br />
          <input
            type="number"
            name="number2"
            placeholder="Enter number2"
            value={number2}
            onChange={this.handleChange}
          />

          <br />
          <p> {number1 + number2} </p>
          <br />

          <textarea
            name="text"
            value={name}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <br />
          <select value={library} onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
          <br />
          <br />
          <input type="checkbox" checked={check} onChange={this.handleChange} />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}
