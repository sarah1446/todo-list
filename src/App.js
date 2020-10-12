import React from 'react';
import Header from './components/Header';
import ListWrap from './components/Contents/ListWrap';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {
                    text: 'good moring!',
                    id: 6783,
                    completed: true
                },
                {
                    text: 'studying javascript!',
                    id: 10,
                    completed: true
                }
            ]
        }
    }
    addTodo = ( todo ) => {
        // const newTodo = this.state.todos.slice();
        // newTodo.push({
        //     text: todo, //todoText일땐 안됨
        //     id: uuidv4(),
        // });
        this.setState({
            todos: [
                ...this.state.todos, 
                {text:todo, id:uuidv4(), completed: true}
            ],
        })
    }
    //render에선 this.addTodo로 해야함.. 클래스에서 this...란?

    updatingTodo = (updatedTodo) => {
        const todos = this.state.todos.slice();
        const { id, text } = updatedTodo;
        
        for(var i = 0; i < todos.length; i++) {
            if(todos[i].id === updatedTodo.id){
                todos[i].text = updatedTodo.text;
            }
        }
        this.setState({
            todos: [...todos]
        })
    }
    
    deleteTodo = (deleteTodo) => {
        //console.log(id)
        const todos = this.state.todos.slice();
        
        this.setState({
            todos: todos.filter(list => list !== deleteTodo)
        })
    }
    
    toggleAll = () => {
        //리스트의 체크박스에 체크되게 
        const newTodos = this.state.todos.slice();
        for(var i =0; i < newTodos.length; i++) {
            newTodos[i].completed = false;
        }
        this.setState({
            todos : [...newTodos]
        })
    }
    
    render() {
        return(
            <div className="App">
                <Header 
                    addTodo={this.addTodo}
                    toggleAll={this.toggleAll}
                ></Header>
                <ListWrap 
                    todos={this.state.todos}
                    updatingTodo={this.updatingTodo}
                    deleteTodo={this.deleteTodo}
                    // toggleAll={this.toggleAll}
                ></ListWrap>
            </div>
        )
    }
}

export default App;
