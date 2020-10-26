import React from 'react';
import styled from 'styled-components';

const SearchBox = styled.div`
    float:right;
    padding: 0 10px 0 3px;
    width: calc(100% - 50px);
    height: 50px;
`

const Input = styled.input`
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
    ::placeholder{
        font-size:1.3rem;
        line-height:30px;
        font-style:italic;
        color:#ccc;
    }
`
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
            <SearchBox>
               <Input type="text" 
                placeholder="I have to do..."
                onKeyPress={this.sendData}
                onChange={this.changeText}
                value={this.state.text}
                autoFocus
                />
            </SearchBox>
        )
    }
}

export default AddTodo;

  