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
            totalCount: 0,
            leftCount: 0
        }
    }
    
    addTodo = ( todo ) => {
        this.setState({
            todos: [
                ...this.state.todos, 
                {text:todo, id:uuidv4(), completed: false}
            ],
            totalCount: this.state.todos.length,
            leftCount: this.state.todos.filter((todo) => !todo.completed).length,
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
        const todos = this.state.todos.slice();
        this.setState({
            todos: [...todos.filter(list => list !== deleteTodo)],
            totalCount: this.state.todos.length,
            leftCount: this.state.todos.filter((todo) => !todo.completed).length
        })
    }
 
    toggleSelect = (id) => {
        // console.log(this.state.todos)
        const todos = this.state.todos.slice();
        for(var i=0; i < todos.length; i++) {
            if(todos[i].id === id) {
                todos[i].completed = !todos[i].completed;
            }
        }
        this.setState({
            todos : [ ...todos],
            leftCount: this.state.todos.filter((todo) => !todo.completed).length
        })
    }
    
    // leftCount = () => {
    //     const left = this.state.todos.filter((todo) => !todo.completed).length;
    //     console.log(left)
    // }
   
    
    
    render() {
        console.log('총 개수 ' + this.state.todos.length)
        console.log('남은거 ' + this.state.todos.filter((todo) => !todo.completed).length)
        //왜 여기에두면 정상인데, addTodo안에 넣으면 하나씩 느리게 찍히지?
        // console.log(this.state.todos) 
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
                    toggleSelect={this.toggleSelect}
                ></ListWrap>
                <Footer 
                    totalCount={this.state.totalCount}
                    leftCount={this.state.leftCount}
                ></Footer>
            </div>
        )
    }
}

export default App;
