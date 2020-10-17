import React from 'react';
class ToggleAll extends React.Component {
    
    toggleAll = e => {
        if(e.target.checked) {
            this.props.toggleAll('checked');
        }else{
            this.props.toggleAll('unchecked');
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