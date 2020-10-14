import React from 'react';
import AddTodo from './AddTodo';
import ToggleAll from './ToggleAll';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return(
            <div>
                <ToggleAll toggleAll={this.props.toggleAll}></ToggleAll>
                <AddTodo addTodo={this.props.addTodo}></AddTodo>
            </div>
        )
    }
}

export default Header;