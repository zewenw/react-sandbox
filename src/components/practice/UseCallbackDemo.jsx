import React from "react";
import { useState, useCallback } from "react";

function UseCallbackDemo() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "add some tasks"]);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Tasks
      </button>
    </div>
  );
});
export default UseCallbackDemo;
