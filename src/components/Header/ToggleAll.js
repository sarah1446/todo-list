import React from 'react';
import styled from 'styled-components';
import  { BiCheckDouble } from 'react-icons/bi';


const ToggleBox = styled.div`
    position:relative;
    float:left;
    width:50px;
    height:50px;
    
    > input[id="toggleAll"] + label {
        display: inline-block;
        cursor: pointer;
        opacity:0.2;
        color:#e91e63;
    }
    input[id="toggleAll"]:checked + label {
        opacity: 0.7;
    }
    input[id="toggleAll"] {
        display: none;
    }
`

const Label = styled.label`
    width: 40px;
    height: 40px;
    margin:5px 0 0 10px;
`
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
            <ToggleBox>
                <input 
                    type="checkbox" 
                    onClick={this.toggleAll}
                    className="toggleAll" 
                    id="toggleAll"
                />
                <Label htmlFor="toggleAll"><BiCheckDouble size="35px"/></Label>
            </ToggleBox>
        )
    }
}

export default ToggleAll;