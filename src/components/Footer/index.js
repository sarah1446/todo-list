import React from 'react';
import Left from './Left';
import Showing from './Showing';
import ClearCompleted from './ClearCompleted';

class Footer extends React.Component {
    
    render() {
        return(
            <div>
                <Left 
                    totalCount={this.props.totalCount}
                    leftCount={this.props.leftCount}
                />
                <Showing
                    todoShow={this.props.todoShow}
                />
                <ClearCompleted clearCompleted={this.props.clearCompleted}/>
            </div>
        )
    }
}

export default Footer;