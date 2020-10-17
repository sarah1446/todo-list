import React from 'react';
class ToggleTodo extends React.Component {
    
    toggleAll = e => {
        if(e.target.checked) {
            console.log('전체선택')
            this.props.toggleAll()
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

export default ToggleTodo;