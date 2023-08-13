import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";

function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const renders = useRef(1);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  // useEffect with no dependencies (runs after every render)
  // useEffect with dependencies (run after dependencies changes)
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="form-control w-25"
      ></input>

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn-primary">
        Re Render
      </button>
      <h3> Render : {renders.current}</h3>
    </div>
  );
}

function getSqrt(num) {
  for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }
  console.log("expensive function called");
  return Math.sqrt(num);
}
export default UseMemoDemo;
