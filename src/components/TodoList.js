import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = ({tasks, remove}) => {
    const taskList = tasks.map((todoTask) => {
        return (<Todo todoTask={todoTask} key={todoTask.id} remove={remove}/>);
    });
    return (<ul>{taskList}</ul>);
}
            
export default TodoList;