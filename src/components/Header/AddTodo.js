import React from 'react';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    
    changeText = e => {
        this.setState({
            text: e.target.value
        })
    }
    
    sendData = e => {
        if(e.key === 'Enter' && e.target.value !== '') {
            this.props.addTodo(this.state.text);
            this.setState({
                text: '',
            });
        }
    }

    render(){
        return (
            <div>
               <input type="text" 
                placeholder="I have to do..."
                onKeyPress={this.sendData}
                onChange={this.changeText}
                value={this.state.text}
                />
            </div>
        )
    }
}

export default AddTodo;

  