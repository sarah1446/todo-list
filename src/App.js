import React from 'react';
import Header from './components/Header'
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
        console.log(this.state)
    }
    //render에선 this.addTodo로 해야함.. 클래스에서 this...란?
    
    render() {
        return(
            <div className="App">
                <Header addTodo={this.addTodo}></Header>
            </div>
        )
    }
}

export default App
