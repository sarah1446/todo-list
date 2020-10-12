import React from 'react';
import AddTodo from './AddTodo';
import ToggleTodo from './ToggleTodo';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return(
            <div>
                <ToggleTodo toggleAll={this.props.toggleAll}></ToggleTodo>
                <AddTodo addTodo={this.props.addTodo}></AddTodo>
            </div>
        )
    }
}

export default Header;