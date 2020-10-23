import React, { Fragment } from 'react';
import List from './List';
import styled from 'styled-components';

class ListWrap extends React.Component {
    render() {
        return(
            <Fragment>
                <ul>
                    {
                        this.props.todos.map((list, key) => {
                            return(
                                <List 
                                    key={list.id}
                                    list={list}
                                    updatingTodo={this.props.updatingTodo}
                                    deleteTodo={this.props.deleteTodo}
                                    toggleSelect={this.props.toggleSelect}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default ListWrap;
        