import React, { Fragment } from 'react';

class Showing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoShow: 'all'
        }
    }
    
    todoShow = (e) => {
        this.props.todoShow(e.target.textContent) // 수정
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