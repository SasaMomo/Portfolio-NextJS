import { useState } from "react";

export default function Buttons() {
  let [count, setCount] = useState<number>(0);
  let countv = 10;

  function add() {
    setCount(count++);
  }
  function sub() {
    setCount(count--);
  }
  return (
    <>
      <div>
        <h1>Buttons</h1>
        <div>{count}</div>
        <button onClick={add}>+1</button>
        <button onClick={sub}>-1</button>
      </div>
    </>
  );
}
