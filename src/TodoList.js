import React, { Component }  from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction, getAddItemAction, deleteItemAction } from './store/actionCreators'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render (){
        return (
            <div style={{marginTop: 10, marginLeft: 10}}>
                <Input value={this.state.inputValue} 
                placeholder="search" 
                style={{ width: 300, marginRight: 10}} 
                onChange={this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemClick.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
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