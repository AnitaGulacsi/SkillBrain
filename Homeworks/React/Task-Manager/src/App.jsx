import React from "react";
import "./App.css";
import TaskViewer from "./components/task-viewer/TaskViewer";

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

  return (
    <div className="app-container">
      <div className="app-content">

        <TaskViewer taskList={data} />

        <div className="side-bar-right">
          <div className='card-xl'>
            
            <div/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
