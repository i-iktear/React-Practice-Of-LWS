import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        error: "",
        post: action.result,
      };
    case "failed":
      return {
        loading: false,
        error: "There is a problem",
        post: {},
      };

    default:
      return state;
  }
};

const Getpost2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "success", result: json });
      })
      .catch({
        type: "failed",
      });
  }, []);
  return (
    <div>
      <span>Result from GetPost2</span>
      <br />
      {state.loading ? "Loading..." : state.post.body}
      {state.error || null}
    </div>
  );
};

export default Getpost2;
