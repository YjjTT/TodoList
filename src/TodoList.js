import React, { Component }  from 'react';
import './App.css';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }
    handleInputChange = (value) =>{
        this.setState({ 
            inputValue: value.target.value
        })
    }
    handleButtonClick = () =>{
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete = (index) =>{
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
    render(){
        return(
            <div>
                <label htmlFor="insertArea">输入内容</label>
                <input id="insertArea" className="input" value={ this.state.inputValue } onChange={ this.handleInputChange.bind(this) }/>
                <button onClick={ this.handleButtonClick.bind(this) }>提交</button>
                <ul>
                    { this.state.list.map( (item, index)=>{
                        return <li 
                        key={index} 
                        onClick={this.handleItemDelete.bind(this, index)} 
                        dangerouslySetInnerHTML={{__html: item}}
                        >
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;