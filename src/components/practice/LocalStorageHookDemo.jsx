import React from "react";
import { useState } from "react";
import useLocalStorageDemo from "../../hooks/demo/useLocalStorageDemo";

function LocalStorageHookDemo() {
  const [task, setTask] = useLocalStorageDemo("task", "");
  const [tasks, setTasks] = useLocalStorageDemo("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form className="w-50" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Button
        </button>
      </form>
      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default LocalStorageHookDemo;
