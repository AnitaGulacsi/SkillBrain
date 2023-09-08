import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
    return (
        <div className="task-viewer-container">
            <div className="task-list-container">
                <TaskCard 
                id = {props.data[0].id}
                status = {props.data[0].status}
                name = {props.data[0].name}
                dueDate = {props.data[0].dueDate}
                />
                <TaskCard 
                id = {props.data[1].id}
                status = {props.data[1].status}
                name = {props.data[1].name}
                dueDate = {props.data[1].dueDate}
                />
                <TaskCard 
                id = {props.data[2].id}
                status = {props.data[2].status}
                name = {props.data[2].name}
                dueDate = {props.data[2].dueDate}
                />
                <TaskCard 
                id = {props.data[3].id}
                status = {props.data[3].status}
                name = {props.data[3].name}
                dueDate = {props.data[3].dueDate}
                />
            </div>
        </div>
    )
}

export default TaskViewer;