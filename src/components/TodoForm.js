import React from 'react';
import style from './TodoForm.css';

const TodoForm = ({addTodo}) => {
  let input;
  return (
      <div>
          <input ref={node => {
            input = node;
            }}/>
          <button onClick={() => {
            addTodo(input.value);
            input.value = '';
          }}>
              Add
          </button>
       </div>
    );
}; 

export default TodoForm;