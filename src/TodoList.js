import React, { Component }  from 'react';
import 'antd/dist/antd.css';
import './App.css';
import store from './store';
import { getInputChangeAction, getAddItemAction, deleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this)
        store.subscribe(this.handleStoreChange);
    }
    render (){
        return (
            <TodoListUI 
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleButtonClick={this.handleButtonClick}
            list={this.state.list}
            handleItemClick={this.handleItemClick} />
        )
    }
    handleInputChange = (e) =>{
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }
    handleStoreChange = () =>{
        this.setState(store.getState());
    }
    handleButtonClick = () =>{
        const action = getAddItemAction()
        store.dispatch(action);
    }
    handleItemClick = (index) =>{
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;