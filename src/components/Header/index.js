import React, { Fragment } from 'react';
import AddTodo from './AddTodo';
import ToggleAll from './ToggleAll';
import styled from 'styled-components';

class Header extends React.Component {
    render() {
        const todos = this.props.todos;
        return(
            <TodoHeader>
            {todos.length > 0 &&
                <Fragment>
                    <ToggleAll toggleAll={this.props.toggleAll} />
                </Fragment>
            }
                <AddTodo addTodo={this.props.addTodo}/>
            </TodoHeader>
        )
    }
}

const TodoHeader  = styled.div`
    overflow:hidden;
    border-bottom:1px solid #eee;
`

export default Header;