import React from 'react';


class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    
    render() {
        return(
            <div> {this.props.leftCount} 남음</div>
        )
    }
}

export default Left;