import React, { Fragment } from 'react';
import styled from 'styled-components';

const StatusBtnBox = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
    display: inline-block;
    
`
const Button = styled.button`
    border:1px solid transparent;
    border-radius:4px;
    margin-right:4px;
    &:hover{
        border:1px solid #ffa5008a;
    }
`

class Showing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // selected: 'all'
        }
    }
    todoShow = (e) => {
        const btnId = e.target.dataset.id;
        this.props.todoShow(btnId);
    }
    
    render() {
        return(
            <StatusBtnBox>
               <Button onClick={this.todoShow} data-id="all">All</Button>
               <Button onClick={this.todoShow} data-id="active">Active</Button>
               <Button onClick={this.todoShow} data-id="completed">Completed</Button>
            </StatusBtnBox>
        )
    }
}

export default Showing;