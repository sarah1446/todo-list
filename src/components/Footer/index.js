import React, { Fragment } from 'react';
import Left from './Left';
import Showing from './Showing';
import ClearCompleted from './ClearCompleted';
import styled from 'styled-components';

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
                    todoShowBtn={this.props.todoShowBtn}
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

const TodoFooter = styled.div`
    position:relative;
    overflow:hidden;
    padding:10px 13px;
    height:40px;
`
export default Footer;