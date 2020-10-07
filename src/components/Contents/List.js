import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updatingMode: false
        }
    }
    
    updatingMode = e => {
        this.setState({
            updatingMode: true
        })
        // console.log('zz');
    }
    
    updatingContent = e => {
        if(e.keyCode === 'Enter') {
            this.props.updatingTodo({
                ...this.props.list,
                text: e.target.value
            })
            this.setState({
                updatingMode: false
            })
            // 클릭시 닫히게 하는건?
        }
    }
    
    
    render() {
        const { text, id } = this.props.list;
        return(
            
            <li onDoubleClick={this.updatingMode}>
                {
                    this.state.updatingMode === true ?
                        <input type="text" 
                            defaultValue={text} 
                            onKeyDown={this.updatingContent}
                        />
                    :
                        <p>{text}</p>
                }
            </li>
        )
    }
}

export default List;