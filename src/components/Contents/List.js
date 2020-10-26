import React from 'react';
import styled from 'styled-components';
import  { CgClose } from 'react-icons/cg';
import  { IoIosCheckmarkCircleOutline } from 'react-icons/io';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatingMode: false,
            completed: false
        }
    }
    
    updatingMode = e => {
        this.setState({ 
            updatingMode: true
        })
        e.target.focus();
    }
    
    updatingContent = e => {   
        if(e.key === 'Enter' ) {
            this.props.updatingTodo({
                ...this.props.list,
                text: e.target.value
            })
            this.setState({
                updatingMode: false
            })
        }
    }
    
    hideInput = () => {
        this.setState({
            updatingMode: false,
        })
    }
    
    deleteTodo = e => {
        this.props.deleteTodo(this.props.list)
    }
    
    toggleSelect = e => {
        if(e.target.checked) {
            this.setState({
                completed: true
            })
        }else{
            this.setState({
                completed: false
            })
        }
        this.props.toggleSelect(this.props.list.id)
    }
    
    
    render() {
        const { text, id } = this.props.list;
        return(
            <Li className="todo-list"
                onDoubleClick={this.updatingMode}
                onMouseOver={this.listHover}
                onMouseOut={this.listHoverOut}
            >
                <Toggle>
                    <input type="checkbox" className="toggle" 
                        onChange={this.toggleSelect} 
                        checked={this.props.list.completed} 
                        id={id}
                    />
                    <label htmlFor={id}><IoIosCheckmarkCircleOutline size="30px" color="#e91e63"/></label>
                </Toggle>
                <TodoText>
                    {
                        this.state.updatingMode === true ?
                            <input type="text" 
                                className="todo-input"
                                defaultValue={text} 
                                onKeyDown={this.updatingContent}
                                onBlur={this.hideInput}
                                autoFocus
                            />
                        :
                        (
                            this.props.list.completed === true ?
                                <Done>{text}</Done>
                            :
                                <p>{text}</p>
                        )
                    }
                </TodoText>
                <DeleteTodo>
                    <span onClick={this.deleteTodo}><CgClose color="#e91e63"/></span>
                </DeleteTodo>
            </Li>
        )
    }
}

const Li = styled.li`
    overflow:hidden;
    border-bottom:1px solid #eee;
    > div{
        float:left;
        min-height:50px;
    }
    &:hover span{
        opacity:1;
    }
`

const Toggle = styled.div` 
    position:relative;
    width:50px;
    top:0;
    bottom:0;
    text-align: center;
    
    > input + label {
        position: absolute; 
        display: inline-block;
        opacity:0.1;
        top: 50%; 
        left: 50%; 
        margin: -15px 0 0 -15px;
        cursor: pointer;
    }
    input:checked + label {
        opacity:0.7;
    }
    input {
        display: none;
    }
`

const TodoText = styled.div`
    position:relative;
    width:calc(100% - 100px);
    > p {
        font-size: 1.25rem;
        padding: 11px 5px;
        line-height:1.7rem;
    }
    > input {
        position: absolute;
        z-index:99;
        left: 0;
        width: calc(100% + 50px);
        height: 50px;
        line-height: 50px;
        padding: 0 7px;
        font-size: 1.2rem;
        background-color: #fff;
        border:1px solid #ccc;
        box-shadow: 1px 1px 2px #ccc inset;
    } 
`

const Done = styled.p`
   text-decoration:line-through; 
   color:#ccc; 
`

const DeleteTodo = styled.div`
    width: 50px;
    text-align: center;
    cursor: pointer;
    opacity:0.9;
    > span {
        opacity:0;
        display: block;
        line-height: 50px;
    }
`

export default List;
