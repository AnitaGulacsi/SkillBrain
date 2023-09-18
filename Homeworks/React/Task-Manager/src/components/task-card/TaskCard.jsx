import React, { useState } from "react";
import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {

  //first step: 
  //extract the elements into constants
  // const id = "T-1";
  // const status = "Todo";
  // const name = "Create a Design System for Enum Workspace.";
  // const dueDate = new Date (2023, 7 , 15);

  //props => object argument with data and returns a React element

  const [taskId, setTaskId] = useState(props.id);  //hook => use...  //ne returneaza un array 
  // valoare + functia cu care facem update 
  //trebuie sa fie declarate le nivel 0 

  // const handleClick = () => {
  //   setTaskId("Clicked!");
  //   // console.log("hello" + taskId);
  //   // console.log("hello" + props.id);
  // }

  const [counter, setCounter ] = useState(0);
 
  console.log("RENDER" + counter + props.id);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log("cnt" , counter);
  }

  return (
    <div className="card-wrapper">
      <div className="card-header">
        {/* <p className="task-id">{taskId}</p> */}
        <p className="task-id"> {props.id} </p>
        <Badge status={props.status}/>
        {/* <div className="badge">
          <p> {props.status} </p>
        </div> */}
      </div>
      <div className="card-content">
        {/* <p> {props.name} </p> */}
        <p>{counter}</p>
      </div>
      <div className="card-footer">
        {/* difference between using onClick={handleClick} and onClick={handleClick()}
     1.onClick={handleClick}:
      It's important to note that you are passing a reference to the function, 
      so you don't invoke it immediately. The function will only be called when the button is clicked.
    2.onClick={handleClick()}:
      In this case, you are invoking the handleClick function immediately and assigning its return value (if any) as the event handler for the onClick event.
      This means that when the component renders, handleClick will be executed, and its return value will be used as the event handler. 
      If handleClick returns a function, that returned function will be executed when the button is clicked. */}
        {/* <button onClick={handleClick}>Click me </button> */}
        <button onClick={handleClick}>INCREMENT</button>
        <DateContainer date = {props.dueDate}/>
        {/* <div className="due-date">
          <p>Due Date</p>
          <p> {props.dueDate.toLocaleDateString()} </p>
        </div> */}
      </div>
    </div>
  );
}

// We can notice two components that we will manage in separate folders
// This two components are the following:
// <div className="badge">
// <p> {props.status} </p>
// </div> 

// <div className="due-date">
// <p>Due Date</p>
// <p> {props.dueDate.toLocaleDateString()} </p>
// </div>

export default TaskCard;