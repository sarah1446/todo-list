import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatingMode: false,
            completed: false
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
    
    
    
    // toggleAll = () => {
    //     this.toggleSelect();
    // }
    
    toggleSelect = e => {
        // console.log(this.props.list.id)
        if(e.target.checked) { //체크박스 체크하면
            //app의 state에 반영이 안된듯!!  
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
        // console.log('list')
        // console.log(this.props.list)
        // console.log('list')
        const { text, id } = this.props.list;
        return(
            
            <li className="todo-list"
                onDoubleClick={this.updatingMode}
                onMouseOver={this.listHover}
                onMouseOut={this.listHoverOut}
            >
                <input type="checkbox" className="toggle" onChange={this.toggleSelect} checked={this.state.completed}/>
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
                        this.state.completed === true ?
                            <p className="completed">{text}</p>
                        :
                            <p>{text}</p>
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