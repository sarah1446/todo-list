import React from 'react';

class ToggleAll extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            // toggleAll: false
        }
    }
    
    toggleAll = e => {
        if(e.target.checked) {
            console.log('전체선택')
            this.props.toggleAll()
        }else{
            
        }
    }
    
    render() {
        return(
            <div>
                <input 
                    type="checkbox" 
                    onClick={this.toggleAll}
                    className="toggleAll" 
                />
            </div>
        )
    }
}

export default ToggleAll;