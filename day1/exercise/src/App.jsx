import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./style.css";

function TodoApp() {
  return (
    <div className="todo-app">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <input type="text" placeholder="add item . . ." />
        <button className="add-btn">ADD</button>
      </div>
      <ul className="todo-list">
        <li className="todo-item">
          <span>Task 1</span>
          <button className="delete-btn">Delete</button>
          <button className="edit-btn">Edit</button>
        </li>
        <li className="todo-item">
          <span>Task 2</span>
          <button className="delete-btn">Delete</button>
          <button className="edit-btn">Edit</button>
        </li>
        <li className="todo-item">
          <span>Task 3</span>
          <button className="delete-btn">Delete</button>
          <button className="edit-btn">Edit</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoApp;
