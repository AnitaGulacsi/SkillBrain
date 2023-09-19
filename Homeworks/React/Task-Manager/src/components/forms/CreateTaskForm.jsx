import React, { useState } from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = () => {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState();
    const [taskDetails, setDetails] = useState(" N   NN");

    //putem folosi si un singur state:
    const [formData, setFormDate] = useState({
        taskName: "",
        dueDate: "",
        taskDetails: "",
    });


    // console.log(formData);

    const handleNameChange = (event) => {
       
            // setFormDate({
            //     ...formData, //ia tot ce e in formData si daca avem ceva nou in objectul nostru o sa fie adaugat 
            //     taskName: event.target.value,
            // }) 
        
                     
            /* 
                in react nu folosim in modul acesta de state-ul precedent 
                tanand cont de natura stetului si cum el se apdateaza si cum trebuie 'sa astepte' sa se intample un process in spate 
                nu ne putem baza facand o declaratie de genu, ca ce e aici in formData este ultimul state, mai ales la randari asa de repede
                console.log(formData); deaoarece este pe pozitia 0 putem vedea ori de cate ori scriem ceva in form functia se apeleaza
                si de aceea riscam sa pierdem informatii   
            */
                

            //deaceea este un alt mod in care putem rezolva aceasta problema

        setFormDate((prevState) => ({
            ...prevState,
            taskName: event.target.value,
        }));

        setTaskName(event.target.value);
        console.log(event.target.value); // aflam ce valoare are 
    } 

    
    const handleDateChange = (event) => {

        setFormDate((prevState) => ({
            ...prevState,
            dueDate: event.target.value,
        }));

        setDueDate(event.target.value);
        console.log(event.target.value); // aflam ce valoare are 
    } 


   
    const handleDetailsChange = (event) => {

        setFormDate((prevState) => ({
            ...prevState,
            taskDetails: event.target.value,
        }));

        setDetails(event.target.value);
        console.log(event.target.value); // aflam ce valoare are 
    } 

    // console.log(newTask);

    //creacrea unei functii genarale 
/*     const handleInputChange = (event) => {
       console.log(event.target.name);
          
        setFormDate((prevState) => (
            {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        ));
    }; */

    const handleSubmit = (event) => {
        event.preventDefault(); // dezactivam mini revrash-ul pe care il face form-ul default 
        // console.log("taskName=", taskName);
        // console.log("dueDte=", dueDate);
        // console.log("taskDetails", taskDatails);
        // console.log("formDate", formData);

        const newTask = {
            name: taskName,
            dueDate: dueDate,
            taskDetails: taskDetails,
            status: "to do",
        } 

        console.log("newTask=", newTask);
        // dupa ce este apasat butonul de submit informatiile din form sunt stocate, dar formu se goleste
        setTaskName("") 
        setDueDate("")
        setDetails("")
    };


    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="label-md">Task Name</label>
            <input 
                value={taskName}
                name="taskName"
                onChange={handleNameChange} 
                className="input-primary" 
                type="text" 
            />
          </div>
  
          <div className="form-row">
            <label className="label-md">Due Date</label>
            <input 
                value={dueDate}
                name="dueData"
                onChange={handleDateChange} 
                className="input-primary" 
                type="date" 
            />
          </div>
  
          <div className="form-row">
            <label className="label-md">Task Details</label>
            <textarea 
                value={taskDetails}
                name="textDetails"
                onChange={handleDetailsChange} 
                className="input-primary" 
                cols="30" 
                rows="10">
            </textarea>
          </div>
  
          <button className="button-primary" type="submit">
            Create Task
          </button>
        </form>
      </div>
  
    )
}

export default CreateTaskForm

