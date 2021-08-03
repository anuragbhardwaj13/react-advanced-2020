import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const Todolist = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      const person = { id: new Date().getTime.toString, task };
      setTasklist((tasklist) => {
        return [...tasklist, person];
      });
      setTask("");
    }
  };
  const removeTask = (index) => {
    let updatedTodos = [...task].filter((todo) => todo.id !== index);
    setTasklist(updatedTodos);
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="title">
              <h4>Enter Your task </h4>
            </div>

            <textarea
              type="text"
              id="task"
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>

          <button type="submit">Add Task</button>
        </form>
        {tasklist.map((person, index) => {
          const generateKey = (pre) => {
            return `${pre}_${new Date().getTime()}`;
          };

          const { task } = person;
          return (
            <div className="item" key={generateKey(task)}>
              <h4>{task}</h4>

              <button onClick={removeTask}>Delete</button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Todolist;
