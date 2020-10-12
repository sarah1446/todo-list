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
            ],
            leftCount: 1
        }
    }
    addTodo = ( todo ) => {
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
        const todos = this.state.todos.slice();
        this.setState({
            todos: todos.filter(list => list !== deleteTodo)
        })
    }
    
    // toggleAll = () => {
    //     //리스트의 체크박스에 체크되게 
    //     const newTodos = this.state.todos.slice();
    //     for(var i =0; i < newTodos.length; i++) {
    //         newTodos[i].completed = false;
    //     }
    //     this.setState({
    //         todos : [...newTodos]
    //     })
    // }
    // componentDidUpdate() {
    //     console.log('변화있을떄마다')
    //       const left = this.state.todos.filter(c => c.completed === true);
    //     console.log(left);
    // }
   
    toggleAll = () => {
        console.log('app - 전체')
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
                <Footer ></Footer>
            </div>
        )
    }
}

export default App;
