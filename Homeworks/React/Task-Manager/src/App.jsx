import React, { useState } from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";
import CreateTaskForm from "./components/forms/CreateTaskForm";

function App() {

  // const id = "T-1";
  // const status = "Todo";
  // const name = "Create a Design System for Enum Workspace.";
  // const dueDate = new Date(2023, 7 , 15);

  //From the above constant declaration, we create an 
  //array that holds objects; we do this to store 
  //the passed parameters as dynamically as possible

  const data = [
    {
      id: "T-1",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2012, 3, 22),
    },
    {
      id: "T-2",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2012, 3, 22),
    },
    {
      id: "T-3",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2012, 3, 22),
    },
    {
      id: "T-4",
      status: "Todo",
      name: "Create a Design System for Enum Workspace.",
      dueDate: new Date(2012, 3, 22),
    },
  ]

  // return React.createElement(
  //   `div`,
  //   {
  //     className: "app-container"
  //   },
  //   React.createElement(
  //     `div`,
  //     {
  //       className: "app-content"
  //     },
  //     React.createElement(`h3`, {}, ""),
  //     React.createElement(TaskViewer, {taskList: data}),
  //   )
  // )

  const [taskList, setTaskList] = useState(data);

  const onNewTaskAdd = (newTask) => {
    console.log("task from APP.js" , newTask);
    // // din cauza id-ului si pentru un code mai clar in loc de folosirea aceasta o sa facem in urmatorul fel
    // const taskToAdd = {
    //   ...newTask,
    //   dueDate: new Date(newTask.dueDate),
    // }
    setTaskList((prevState=> [
      ...prevState, {
        ...newTask,
        dueDate: new Date(newTask.dueDate),
        id: "T-" + prevState.length,
      },
    ]))
  }

  return (
    <div className="app-container">
      <div className="app-content">

        <TaskViewer taskList={taskList} />

        <div className="side-bar-right">
          <div className='card-xl'>
            <h3>Create task</h3>
            <CreateTaskForm addNewTask={onNewTaskAdd}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
