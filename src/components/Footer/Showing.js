import React, { Fragment } from 'react';

class Showing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoShow: 'all'
        }
    }
    
    
    render() {
        return(
            <Fragment>
               <button>All</button>
               <button>Active</button>
               <button>Completed</button>
            </Fragment>
        )
    }
}

export default Showing;