import React, { Fragment } from 'react';
import Header from './components/Header';
import ListWrap from './components/Contents/ListWrap';
import Footer from './components/Footer';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [],
            todoShowBtn: 'all'
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
            todoShowBtn: 'all'
        })
    }
 
    toggleAll = (check) => {
        const todos = this.state.todos.slice();
        if(check === 'checked'){
            todos.forEach(todo => todo.completed = true);
        }else{
            todos.forEach(todo => todo.completed = false);
        }
        
        this.setState({
            todos: [...todos]
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
            todos: [...todos.filter((todo)=> !todo.completed)],
            todoShowBtn: 'all'
        })
    }
    
    todoShow = (btnId) => {
        this.setState({
            todoShowBtn: btnId
        })
    }
    
    render() {
        const leftCount = this.state.todos.filter((todo) => !todo.completed).length;
        let todos = [];
        
        if(this.state.todoShowBtn === 'all') {
            todos  =  this.state.todos;
        }else if(this.state.todoShowBtn === 'active') {
            todos  =  this.state.todos.filter(todo => !todo.completed);
        }else if(this.state.todoShowBtn === 'completed') {
            todos  =  this.state.todos.filter(todo => todo.completed);
        }
        
        return(
            <TodoApp>
                <Title>
                    <span role="img" aria-label="fire">🔥</span> Todos <span role="img" aria-label="fire">🔥</span>
                </Title>
                <Content>
                    <Header 
                        addTodo={this.addTodo}
                        toggleAll={this.toggleAll}
                        todos={this.state.todos}
                    />
                    <ListWrap 
                        todos={todos} 
                        updatingTodo={this.updatingTodo}
                        deleteTodo={this.deleteTodo}
                        toggleSelect={this.toggleSelect}
                    />
                    {this.state.todos.length > 0 &&
                        <Fragment>
                            <Footer
                            todos={this.state.todos}
                            todoShowBtn={this.state.todoShowBtn}
                            totalCount={this.state.todos.length}
                            leftCount={leftCount}
                            todoShow={this.todoShow}
                            clearCompleted={this.clearCompleted} 
                            />
                        </Fragment>
                    }
                </Content>
            </TodoApp>
        )
    }
}

const TodoApp = styled.div`
    width:500px;
    margin:50px auto;
`

const Title = styled.p`
   font-size: 3.5rem;
    font-weight: 500;
    color: #e91e63;
    text-align: center;
    padding: 1.5rem 0;
`

const Content = styled.div`
    background-color:#fff;
    box-shadow: 1px 3px 9px 7px #f1f1f1;
`

export default App;

