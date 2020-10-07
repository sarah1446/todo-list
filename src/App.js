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
                
            ]
        }
    }
    
    addTodo = ( todo ) => {
        const newTodo = this.state.todos;
        newTodo.push({
            text: todo, //todoText일땐 안됨
            id: uuidv4(),
        });
        this.setState({
            todos: [...newTodo],
        })
        // console.log(this.state)
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
    
    
    
    render() {
        return(
            <div className="App">
                <Header addTodo={this.addTodo}></Header>
                <ListWrap 
                    todos={this.state.todos}
                    updatingTodo={this.updatingTodo}
                ></ListWrap>
            </div>
        )
    }
}

export default App;
