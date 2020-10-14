import React from 'react';
import Left from './Left';

class Footer extends React.Component {
    
    render() {
        return(
            <div>
                <Left 
                    totalCount={this.props.totalCount}
                    leftCount={this.props.leftCount}
                ></Left>
            </div>
        )
    }
}

export default Footer;