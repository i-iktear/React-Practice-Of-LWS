import React from "react";
import { useState } from "react";

const TodoFunctional = () => {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(null);
  const [input, setInput] = useState({
    title: "",
    description: "",
  });

  const { title, description } = input;

  const handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes("js")
      ? "You need Js Skill to complete the task"
      : null;

    setTodo(inputValue);
    setWarning(warning);
  };
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
          onChange={handleInput}
        />
      </p>
      <hr />
      <h2> {warning || "Good choice Brother!!"} </h2>
      <hr />
      <p> {title} </p>
      <textarea
        name=""
        id=""
        value={title}
        onChange={(e) =>
          setInput({
            ...input,
            title: e.target.value,
          })
        }
        cols="30"
        rows="10"
      ></textarea>
      <p> {description} </p>
      <textarea
        name=""
        id=""
        value={description}
        onChange={(e) =>
          setInput({
            ...input,
            description: e.target.value,
          })
        }
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
};

export default TodoFunctional;
