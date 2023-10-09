import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkBox/CheckBox";

const TodoItem = (props) => {
  const handleCheckboxChange = (value) => {
    props.toggleTodoCompletion(props.id)
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            onChange={handleCheckboxChange}
          />

          <h4>{props.title}</h4>
        </div>
        <div>
          {/* If we click the `Edit` icon, we should call the `handleEditTodo` function from `App.jsx`*/}
          {/* We gave this function to `TodoItem` as prop, so we can call it from here like this*/}
          <i className="fa fa-pencil" aria-hidden="true" onClick={() => {props.handleEditTodo(props.id)}}></i>
          {/* As in case of edit, we should call the `handleDeleteTodo` function from the parent */}
          <i className="fa fa-trash" aria-hidden="true" onClick={() => props.handleDeleteTodo(props.id)}></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
