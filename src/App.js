import React from 'react';
import Header from './components/Header';
import ListWrap from './components/Contents/ListWrap';
import Footer from './components/Footer';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
        }
    }
    
    addTodo = ( todo ) => {
        this.setState({
            todos: [
                ...this.state.todos, 
                {text:todo, id:uuidv4(), completed: false}
            ],
        })
    }
    //render에선 this.addTodo로 해야함.. 클래스에서 this...란?

    updatingTodo = (updatedTodo) => {
        const todos = this.state.todos.slice();
        for(let i = 0; i < todos.length; i++) {
            if(todos[i].id === updatedTodo.id){
                todos[i].text = updatedTodo.text;
            }
        }
        this.setState({
            todos: [...todos]
        })
    }
    
    deleteTodo = (deleteTodo) => {
        const todos = this.state.todos.slice();
        this.setState({
            todos: [...todos.filter(list => list !== deleteTodo)],
        })
    }
 
    toggleSelect = (id) => {
        const todos = this.state.todos.slice();
        for(let i=0; i < todos.length; i++) {
            if(todos[i].id === id) {
                todos[i].completed = !todos[i].completed;
            }
        }
        this.setState({
            todos : [ ...todos],
        })
    }
    
    
    
    clearCompleted = () => {
        const todos = this.state.todos.slice();
        this.setState({
            todos: [...todos.filter((todo)=> !todo.completed)]
        })
    }
    
    
    
    render() {
        const leftCount = this.state.todos.filter((todo) => !todo.completed).length;
        
        return(
            <div className="App">
                <Header 
                    addTodo={this.addTodo}
                    toggleAll={this.toggleAll}
                />
                <ListWrap 
                    todos={this.state.todos}
                    updatingTodo={this.updatingTodo}
                    deleteTodo={this.deleteTodo}
                    toggleSelect={this.toggleSelect}
                />
                <Footer 
                    totalCount={this.state.todos.length}
                    leftCount={leftCount}
                    clearCompleted={this.clearCompleted} 
                />
            </div>
        )
    }
}

export default App;
