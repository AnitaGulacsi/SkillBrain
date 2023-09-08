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

  return (
    <div className="app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer taskList={data} />
      </div>
    </div>
  );
}

export default App;