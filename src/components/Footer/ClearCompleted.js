import React, { Fragment } from 'react';

class clearCompleted extends React.Component {
    clearCompleted = () => {
        this.props.clearCompleted();
    }
    
    clearCompleted = () => {
        this.props.clearCompleted();
    }
    
    
    render() {
        return(
            <Fragment>
                <button onClick={this.clearCompleted}>Completed Clear</button>
            </Fragment>
        )
    }
}

export default clearCompleted;