import React, { Component }  from 'react';
import TodoItem from './TodoItem';
import './App.css';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = (e) =>{
        const value = e.target.value; 
        this.setState(()=>{
            return { inputValue: value }
        })
        // this.setState({ 
        //     inputValue: value.target.value
        // })
    }
    handleButtonClick = () =>{
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }

    handleItemDelete = (index) =>{
        this.setState((prevState)=>{
            const list = [...prevState.list]
            list.splice(index, 1)
            return { list }
       })
        // this.setState({
        //     list: list
        // })
    }
    getTodoItem() {
        return (this.state.list.map((item, index)=>{
            return(
                // div的作用 包裹注释和JSX语法
                <div key={index}>
                    <TodoItem key={index} content={item} index={index} deleteItem={this.handleItemDelete } />
                {/*li 
                key={index} 
                onClick={this.handleItemDelete.bind(this, index)} 
                dangerouslySetInnerHTML={{__html: item}}
                >
                </li>*/}
                </div>
            )
        }))
    }
    render(){
        return(
            <div>
                <label htmlFor="insertArea">输入内容</label>
                <input id="insertArea" className="input" value={ this.state.inputValue } onChange={ this.handleInputChange }/>
                <button onClick={ this.handleButtonClick }>提交</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </div>
        )
    }
}

export default TodoList;