import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import Todo from '../components/Todo.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                        text: 'clean room'
                    }, {
                    id: 2,
                        text: 'wash the dishes'
                    }, {
                    id: 3,
                        text: 'feed my cat'
                    }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    render() {
        const tasks = this.state.data.length
        return (
            <div className={style.TodoApp}>
                <Title/>
                <h2>Liczba zadań: {tasks}</h2> 
                <TodoList tasks={this.state.data} remove={this.removeTodo.bind(this)} />
            </div>
        );
    }
}

export default App;