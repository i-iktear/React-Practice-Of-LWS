import React, { useState, useCallback, useMemo } from "react";
import Tittle from "./Functional Components/useCallback & useMemo/Tittle";
import ShowCount from "./Functional Components/useCallback & useMemo/ShowCount";
import Button from "./Functional Components/useCallback & useMemo/Button";

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prev) => prev + 1);
  }, []);

  const isEvenOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count1 % 2 === 0;
  }, [count1]);

  const incrementByFive = useCallback(() => {
    setCount2((prev) => prev + 5);
  }, []);
  return (
    <div className="app">
      <Tittle />
      <ShowCount count={count1} title="Counter-1" />
      <span> {isEvenOrOdd ? "Even " : "Odd"} </span>
      <Button handleClick={incrementByOne}>Incremen One</Button>
      <hr />
      <ShowCount count={count2} title="Counter-2" />
      <Button handleClick={incrementByFive}>Incremen Five</Button>
    </div>
  );
}
