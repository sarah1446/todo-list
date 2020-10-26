import React from 'react';
import styled from 'styled-components';
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

const CompletedClearBox = styled.div`
    float: right;
`
const Button = styled.button`
    &:hover {
        text-decoration: underline;
    }
`
    export default clearCompleted;