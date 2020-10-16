import React, { Fragment } from 'react';

class Showing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoShow: 'all'
        }
    }
    
    todoShow = (e) => {
        console.dir(e.target)
        this.props.todoShow(e.target.textContent)
    }
    
    render() {
        return(
            <Fragment>
               <button onClick={this.todoShow}>All</button>
               <button onClick={this.todoShow}>Active</button>
               <button onClick={this.todoShow}>Completed</button>
            </Fragment>
        )
    }
}

export default Showing;