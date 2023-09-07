import "./TaskCard.css";

function TaskCard() {
    return (
    <div className="task-card-container">
        <div className="header">
            <p>T-1</p>
            <button className="status-btn">Todo</button>
        </div>
        <div className="content">
            <p>Create a Design System for Enum Workspace.</p>
        </div>
        <div className="footer">
            <p>Due Date</p>
            <p>24/ 01 /2021</p>
        </div>
    </div>
    );
}

export default TaskCard;