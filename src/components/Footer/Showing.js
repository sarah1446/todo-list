import React, { Fragment } from 'react';
class Showing extends React.Component {
    todoShow = (e) => {
        const btnId = e.target.dataset.id;
        this.props.todoShow(btnId)
    }
    
    render() {
        return(
            <Fragment>
               <button onClick={this.todoShow} data-id="all">All</button>
               <button onClick={this.todoShow} data-id="active">Active</button>
               <button onClick={this.todoShow} data-id="completed">Completed</button>
            </Fragment>
        )
    }
}

export default Showing;