import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './components/Button';
import Form from './components/Form';

function Todos() {
  const [openForm, setOpenForm] = useState(false);

  // Récupérer les tâches depuis le store
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  // Action pour marquer une tâche comme terminée
  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  // Action pour supprimer une tâche
  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div className="container">
      <h2 className="transition">Todo App</h2>
      <div className="todos_wrapper">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-box"
            style={{ backgroundColor: todo.status ? "#9ff8a2" : "#f49a9a" }}
          >
            <h4>{todo.task}</h4>
            <p>{todo.status ? "done" : "pending"}</p>
            <div className="buttons">
              <Button onClick={() => handleToggle(todo.id)}>
                {todo.status ? "pending" : "done"}
              </Button>
              <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginLeft: "700px" }} onClick={() => setOpenForm(!openForm)}>
        <Button>Add TODO</Button>
      </div>
      <div
        style={{
          visibility: openForm ? "visible" : "hidden",
          position: "relative",
          top: openForm ? 0 : 50,
          opacity: openForm ? 1 : 0,
          transition: "all 0.2s ease",
        }}
      >
        {openForm ? <Form /> : null}
      </div>
    </div>
  );
}

export default Todos;
