import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatingMode: false,
            activeMode: true
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
    
    toggleSelect = e => {
        if(e.target.checked) { //체크박스 체크하면  
            this.setState({
                activeMode: false
            })
        }else{
            this.setState({
                activeMode: true
            })
        }
    }
    
    
    render() {
        const { text, id } = this.props.list;
        return(
            
            <li className="todo-list"
                onDoubleClick={this.updatingMode}
                onMouseOver={this.listHover}
                onMouseOut={this.listHoverOut}
            >
                <input type="checkbox" className="toggle" onClick={this.toggleSelect}/>
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
                        this.state.activeMode === true ?
                            <p>{text}</p>
                        :
                            <p className="completed">{text}</p>
                    )
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