import React, { Fragment } from 'react';
import styled from 'styled-components';

const LeftCount = styled.div`
    float:left;
    
    span{
        font-weight:300;
    }
`
class Left extends React.Component {
    render() {
        return(
            <LeftCount>
                <span> {this.props.leftCount} item left</span>
                {/*<div> 총 개수: {this.props.totalCount}</div>*/}
            </LeftCount>
        )
    }
}

export default Left;