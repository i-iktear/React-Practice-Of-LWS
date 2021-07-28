import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    todo: "",
    warning: null,
  };
  handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes("js")
      ? "You need Js Skill to complete the task"
      : null;

    this.setState({
      todo: inputValue,
      warning,
    });
  };
  render() {
    const { todo, warning } = this.state;
    return (
      <div>
        <p> {todo} </p>
        <p>
          {" "}
          <textarea
            name="todo"
            value={todo}
            cols="30"
            rows="10"
            onChange={this.handleInput}
          />
        </p>
        <hr />
        <h2> {warning || "Good choice Brother!!"} </h2>
      </div>
    );
  }
}
