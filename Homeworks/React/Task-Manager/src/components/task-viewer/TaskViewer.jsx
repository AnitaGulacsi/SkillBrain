import React from "react";
import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
    return (
        <div className="task-viewer-container">
            <div className="task-list-container">
            {/* map() function is used to transform elements in an array and create a new array of React elements
            The map() function is called on an array and takes a callback function as an argument. 
            This callback function is applied to each element in the array, and the result is used to create a new array.
            the key differences between map() and a traditional for loop in React:
            
            Immutability:
            The map() function creates a new array with transformed elements, leaving the original array unchanged. 
            In contrast, a for loop can directly mutate the original array. 
            React relies on immutability to efficiently update the UI, so using map() is often a safer choice.

            Readability:
            map() can make your code more concise and readable when transforming arrays and rendering lists of elements. 
            It promotes a declarative style, where you describe what you want to do with each element 
            rather than explicitly managing the loop and indices.

            Performance and Optimization:
            React can optimize updates when you use map() because it knows which elements are added, 
            removed, or updated based on the key prop. In contrast, with a for loop, you'd need to manually handle these updates, 
            which can be error-prone and less efficient. */}
                {props.taskList.map((item, index) => (
                    <TaskCard
                    key = {index}
                    id = {item.id}
                    status = {item.status}
                    name = {item.name}
                    dueDate = {item.dueDate}
                    />
                ))}
                {/* <TaskCard 
                id = {props.taskList[0].id}
                status = {props.taskList[0].status}
                name = {props.taskList[0].name}
                dueDate = {props.taskList[0].dueDate}
                />
                <TaskCard 
                id = {props.taskList[1].id}
                status = {props.taskList[1].status}
                name = {props.taskList[1].name}
                dueDate = {props.taskList[1].dueDate}
                />
                <TaskCard 
                id = {props.taskList[2].id}
                status = {props.taskList[2].status}
                name = {props.taskList[2].name}
                dueDate = {props.taskList[2].dueDate}
                />
                <TaskCard 
                id = {props.taskList[3].id}
                status = {props.taskList[3].status}
                name = {props.taskList[3].name}
                dueDate = {props.taskList[3].dueDate}
                /> */}
            </div>
        </div>
    )
}

export default TaskViewer;