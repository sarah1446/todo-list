import React, { Fragment } from 'react';
import AddTodo from './AddTodo';
import ToggleAll from './ToggleAll';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
 
    render() {
        const todos = this.props.todos;
        console.log(todos);
        return(
            <div>
            {todos.length > 0 &&
                <Fragment>
                    <ToggleAll toggleAll={this.props.toggleAll} />
                </Fragment>
            }
                <AddTodo addTodo={this.props.addTodo}/>
            </div>
        )
    }
}

export default Header;