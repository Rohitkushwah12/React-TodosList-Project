import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "./AddTodo.css";

const AddTodo = () => {
  const { addTodoAction } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoAction(title);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange} />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default AddTodo;
