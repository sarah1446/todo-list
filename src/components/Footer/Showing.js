import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

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
    opacity: 0.3;
    color: #E91E63;
    
    
    &:hover{
        opacity: 0.7;
        color: #E91E63;
    }

    ${props => props.selected && css`
        border: 1px solid #E91E63;
        opacity: 0.7;
        color: #E91E63;
    `};
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
               <Button onClick={this.todoShow} data-id="all" selected>All</Button>
               <Button onClick={this.todoShow} data-id="active">Active</Button>
               <Button onClick={this.todoShow} data-id="completed">Completed</Button>
            </StatusBtnBox>
        )
    }
}

export default Showing;