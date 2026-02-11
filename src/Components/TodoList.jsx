import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInput, setlistInputs] = useState({});

  const handleAddToDo = () => {
    if (headingInput.trim() !== "") {
      setTodos([...todos, { headings: headinginput, list: [] }]);
      setHeadingInput("");
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => setHeadingInput(e.target.value)}
          />

          <button className="add-list-button" onClick={handleAddToDo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main"></div>
    </>
  );
};

export default TodoList;
