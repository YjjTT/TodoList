import React, { Component, Fragment }  from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
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
    componentDidMount(){
        // 获取ajax数据, 应该放在这里
        // 在组件被挂载到页面的时候,只会被执行一次,以后都不被会执行
        axios.get('/api/get/users').then(()=>{
            alert('success');
        }).catch(()=>{
            alert('failed');
        })
    }
    handleInputChange = () =>{
        // e.target.value
        const value = this.input.value; 
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
        }), () =>{
            console.log(this.ul.querySelectorAll('div').length)
        })
        
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
                <input id="insertArea" 
                className="input" 
                value={ this.state.inputValue } 
                onChange={ this.handleInputChange }
                ref={(input) => {this.input = input}}
                />
                <button onClick={ this.handleButtonClick }>提交</button>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </div>
        )
    }
}

export default TodoList;