import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return(
        <div style={{marginTop: 10, marginLeft: 10}}>
            <Input value={props.inputValue} 
                placeholder="search" 
                style={{ width: 300, marginRight: 10}} 
                onChange={props.handleInputChange}
                />
            <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            <List
                style={{marginTop: 10, width: 300}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
            <List.Item 
                onClick={(index) => {props.handleItemClick(index)}}>
                {item}
            </List.Item>
            )}
            />
        </div>
    )
}
// class TodoListUI extends Component{
//     render(){
//         return(
            
//         )
//     }
// }
export default TodoListUI;