import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/input/TextArea";
import Button from "./components/button/Button";
import "./App.css";
import Modal from "./components/modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App() {
  // Initialize the TODOs, store them in state
  const [todos, setTodos] = useState(TODOS_MOCK);

  // Todo data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleModalClose = () => {
    // This is called when we press that "X" icon on the Modal
    setEditTodo(null);
    setTitle('');
    setDescription('');
    setIsModalOpen(false);
  }

  const handleAddTodo = (e) => {
    // If we haven't provided a title or description, we shouldn't create a new TODO
    // That's why is that if check statement
    if (title !== '' && description !== '') {
      if (editTodo) {
        // If we have a TODO which need to be edited, it means we have to edit a TODO, so the Modal should contain it's `title` and `description`
        // We update the TODO
        setTodos(prevTodos => prevTodos.map(todo => 
          todo.id === editTodo.id ? { ...todo, title, description } : todo
        ));
        // Clear out, since we edited the TODO, so we have no more TODOs to edit at the moment
        setEditTodo(null);
      } else {
        // If we are here, it means we have no TODO to edit, so we are creating a new one
        setTodos(prevTodos => [
          ...prevTodos,
          {
            id: Date.now().toString(), // This is just for giving a unique ID for the new TODO, based on timestamp
            title: title,
            description: description,
            completed: false // As default, TODO aren't completedd
          }
        ]);
      }
  
      // At the end, whether we have edited or created a new one, we clear out the state variables and close the modal
      setTitle('');
      setDescription('');
      setIsModalOpen(false);
    }
  }

  const toggleTodoCompletion = (todoId) => {
    // Toggle the `Completed` state
    // If we pressed that button, it means the new state should be the opposite one of the before state
    setTodos(prevTodos => prevTodos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed} : todo))
  }

  // We get the TODOs id, which we want to delete
  // We use the `filter` function, to filter out those TODOs, who's ID is not that we want to delete
  // With this approach, the new TODO list won't contain the deleted TODO
  const handleDeleteTodo = (todoId) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  }

  const handleEditTodo = (todoId) => {
    // If we want to edit a TODO, we should first check which one should be edit, so we search by ID
    const todoToEdit = todos.find(todo => todo.id === todoId);

    // If the TODO was found, we should update the `title` and `description` state variables,
    // in order to display those inside the form
    setTitle(todoToEdit.title);
    setDescription(todoToEdit.description);

    // We store the TODO which we want to edit in a separate state variable
    setEditTodo(todoToEdit);

    // We also have to open the Modal, to see the TODO
    setIsModalOpen(true);
  }

  return (
    <div className="App">
      <div className="app-container">
        {/* 
            This is your Create Card component.

            // We wrap the form inside a Modal, as the requirement says
          */}
          {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <Card>
            <h2>Create Todo</h2>
            <form>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" />
              <TextArea value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder="Description" />
              <Button type="submit" onClick={handleAddTodo}>Create</Button>
            </form>
          </Card>
        </Modal>}
        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          {/* If we click the "Add" button, we change the state variable, which indicates if the Modal is open or not*/}
          <Button onClick={() => {setIsModalOpen(true)}}>Add +</Button>
          <div className="list-container">
            {
              todos.filter(todo => !todo.completed).map(todo => 
                <TodoItem 
                  id={todo.id} 
                  key={todo.id} // We should give a unique key, to avoid console error
                  title={todo.title} 
                  description={todo.description} 
                  completed={todo.completed} 
                  toggleTodoCompletion={toggleTodoCompletion}
                  handleDeleteTodo={handleDeleteTodo}
                  handleEditTodo={handleEditTodo}
                />)
            }
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
          {
            todos.filter(todo => todo.completed).map(todo => 
              <TodoItem 
                id={todo.id} 
                key={todo.id} // We should give a unique key, to avoid console error
                title={todo.title} 
                description={todo.description} 
                completed={todo.completed} 
                // We are passing callback functions to the child, so the `TodoItem` child can call our function through props
                toggleTodoCompletion={toggleTodoCompletion} 
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
              />)
          }
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
