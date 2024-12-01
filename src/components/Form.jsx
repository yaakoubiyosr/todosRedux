import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';

function Form() {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const task = e.target.task.value;
        if (task) {
          dispatch({
            type: 'ADD_TODO',
            payload: { task, status: false }
          });
          e.target.task.value = ''; // Réinitialiser le champ de saisie après soumission
        }
      }}
    >
      <h4>Add your Task</h4>
      <input type="text" name="task" />
      <Button type="submit">ADD</Button>
    </form>
  );
}

export default Form;
