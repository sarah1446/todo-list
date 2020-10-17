import React, { Fragment } from 'react';

class Left extends React.Component {
    
    render() {
        return(
            <Fragment>
                <div> {this.props.leftCount} 남음</div>
                <div> 총 개수: {this.props.totalCount}</div>
            </Fragment>
        )
    }
}

export default Left;