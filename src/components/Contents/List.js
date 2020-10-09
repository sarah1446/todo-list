import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatingMode: false,
        }
    }
    
    updatingMode = e => {
        this.setState({ // input나오게 함
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
        this.props.deleteTodo( this.props.list)
    }
    
    
    
    render() {
        const { text, id } = this.props.list;
        return(
            
            <li className="todo-list"
                onDoubleClick={this.updatingMode}
                onMouseOver={this.listHover}
                onMouseOut={this.listHoverOut}
            >
                <input type="checkbox" className="toggle"/>
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
                        <p>
                            {text}
                        </p>
                }
                <span 
                className="deleteBtn"
                onClick={this.deleteTodo}
                >x</span>
            </li>
        )
    }
}

export default List;