import React from 'react';
import styled from 'styled-components';
class Left extends React.Component {
    render() {
        return(
            <LeftCount>
                <span> {this.props.leftCount} item left</span>
            </LeftCount>
        )
    }
}

const LeftCount = styled.div`
    float:left;
    span{
        font-weight:300;
    }
`

export default Left;