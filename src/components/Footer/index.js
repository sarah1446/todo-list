import React, { Fragment } from 'react';
import Left from './Left';
import Showing from './Showing';
import ClearCompleted from './ClearCompleted';

class Footer extends React.Component {
    
    render() {
        const checkedTodo = this.props.todos.filter(todo => todo.completed).length;
        
        return(
            <div>
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
            </div>
        )
    }
}

export default Footer;