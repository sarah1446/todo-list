import React from 'react';
import styled from 'styled-components';

const CompletedClearBox = styled.div`
    float: right;
`
const Button = styled.button`
    &:hover {
        text-decoration: underline;
    }
`
class clearCompleted extends React.Component {
    clearCompleted = () => {
        this.props.clearCompleted();
    }
    
    render() {
        return(
            <CompletedClearBox>
                <Button onClick={this.clearCompleted}>Completed Clear</Button>
            </CompletedClearBox>
        )
    }
}

export default clearCompleted;