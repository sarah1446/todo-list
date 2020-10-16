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
            todoShowOption: 'All'
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
    
    todoShow = (option) => {
        this.setState({
            todoShowOption: option
        })
    }
    
    render() {
        const leftCount = this.state.todos.filter((todo) => !todo.completed).length;
        
        let todos = [];
        
        if(this.state.todoShowOption === 'All') {
            todos  =  this.state.todos;
            console.log(this.state.todos)
            console.log('all', todos)
        }else if(this.state.todoShowOption === 'Active') {
            todos  =  this.state.todos.filter(todo => !todo.completed);
            console.log(this.state.todos)
            console.log('Active', todos)
        }else if(this.state.todoShowOption === 'Completed') {
            todos  =  this.state.todos.filter(todo => todo.completed);
            console.log(this.state.todos)
            console.log('Completed', todos)
        }
        
        // console.log(this.state.todos) //정상
        // console.log('todos', todos) // 안들어감
        // console.log(this.state.todoShowOption)
        return(
            <div className="App">
                <Header 
                    addTodo={this.addTodo}
                    toggleAll={this.toggleAll}
                />
                <ListWrap 
                    todos={todos} 
                    updatingTodo={this.updatingTodo}
                    deleteTodo={this.deleteTodo}
                    toggleSelect={this.toggleSelect}
                />
                <Footer 
                    totalCount={this.state.todos.length}
                    leftCount={leftCount}
                    clearCompleted={this.clearCompleted} 
                    
                    todoShow={this.todoShow}
                />
            </div>
        )
    }
}

export default App;

