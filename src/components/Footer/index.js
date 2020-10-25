import React, { Fragment } from 'react';
import Left from './Left';
import Showing from './Showing';
import ClearCompleted from './ClearCompleted';
import styled from 'styled-components';

const TodoFooter = styled.div`
    position:relative;
    overflow:hidden;
    /* border:1px solid red; */
    padding:10px 13px;
    height:40px;
    
`
class Footer extends React.Component {
    
    render() {
        const checkedTodo = this.props.todos.filter(todo => todo.completed).length;
        
        return(
            <TodoFooter>
                <Left 
                    totalCount={this.props.totalCount}
                    leftCount={this.props.leftCount}
                />
                <Showing
                    todoShow={this.props.todoShow}
                />
                {
                    checkedTodo > 0 &&
                    <Fragment>
                        <ClearCompleted clearCompleted={this.props.clearCompleted}/>
                    </Fragment>
                }
            </TodoFooter>
        )
    }
}

export default Footer;