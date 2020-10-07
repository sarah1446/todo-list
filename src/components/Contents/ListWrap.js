import React, { Fragment } from 'react';
import List from './List';
// import App from '../App';

class ListWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        // console.log(this.props.todos)
        return(
            <Fragment>
                <ul>
                    {
                        this.props.todos.map((list, key) => {
                            return(
                                <List 
                                    key={key}
                                    list={list}
                                    updatingTodo={this.props.updatingTodo}
                                ></List>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default ListWrap;
            // <div>
            //     {
            //         this.props.todos.map((list, key) => {
            //             return(
            //                 <div key={key}>{list.text}</div>
            //             )
            //         })   
            //     }
            // </div>
            
            //순서 ...list, key지켜야하