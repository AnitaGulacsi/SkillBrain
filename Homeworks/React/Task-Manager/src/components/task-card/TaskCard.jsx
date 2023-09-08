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

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <p className="task-id"> {props.id} </p>
        <Badge status={props.status}/>
        {/* <div className="badge">
          <p> {props.status} </p>
        </div> */}
      </div>
      <div className="card-content">
        <p> {props.name} </p>
      </div>
      <div className="card-footer">
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