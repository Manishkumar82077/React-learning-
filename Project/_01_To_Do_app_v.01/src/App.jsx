/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem01 from "./components/ToDoItemO1";
import ToDoItem2 from "./components/ToDoItem2";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItem01 />
      <ToDoItem2 />
    </center>
  );
}

export default App;
