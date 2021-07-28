import React from "react";
import TodoFunctional from "./Functional Components/useState/TodoFunctional";
import Todo from "./Functional Components/useState/Todo";
import Counter from "./Functional Components/useState/Counter";
export default class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
        <Todo></Todo>
        <TodoFunctional></TodoFunctional>
      </>
    );
  }
}
