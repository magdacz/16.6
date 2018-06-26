import React from 'react';
 
const Todo = ({todoTask, remove}) => (
	<li>{todoTask.text} <button onClick={() => remove(todoTask.id)}>X</button></li> 
)

export default Todo; 