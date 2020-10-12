import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatingMode: false,
            completed: true
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
    
    
    // shouldComponentUpdate = () => {
    //     console.log('전체선택을 눌렀다면!! 현재 list 컴포넌트!')
        
    // }
    
    toggleAll = () => {
        this.toggleSelect();
    }
    
    toggleSelect = e => {
        if(e.target.checked) { //체크박스 체크하면  
            this.setState({
                // completed: false
                completed: !this.state.completed
            })
        }else{
            this.setState({
                // completed: true
                completed: !this.state.completed
            })
        }
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
                <input type="checkbox" className="toggle" onClick={this.toggleSelect} checked={!this.state.completed}/>
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