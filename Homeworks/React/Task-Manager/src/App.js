import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

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
      <TaskCard 
      id = {data[0].id}
      status = {data[0].status}
      name = {data[0].name}
      dueDate = {data[0].dueDate}
      />
      <TaskCard 
      id = {data[1].id}
      status = {data[1].status}
      name = {data[1].name}
      dueDate = {data[1].dueDate}
      />
      <TaskCard 
      id = {data[2].id}
      status = {data[2].status}
      name = {data[2].name}
      dueDate = {data[2].dueDate}
      />
      <TaskCard 
      id = {data[3].id}
      status = {data[3].status}
      name = {data[3].name}
      dueDate = {data[3].dueDate}
      />
    </div>
  );
}

export default App;
