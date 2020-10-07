import React from 'react';
import useState from 'react';


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
            // console.log(this.state)
        }
    }

    render(){
        return (
            <div>
               <input type="text" 
                onKeyPress={this.sendData}
                onChange={this.changeText}
                value={this.state.text}
                />
            </div>
        )
    }
}

export default AddTodo;

   //input에 onChange로하면 enter인지 못함
    //onKeyDown, onKeyUp은 Keycode값
    //onKeyDown은 enter도 감지