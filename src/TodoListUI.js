import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

class TodoListUI extends Component{
    render(){
        return(
            <div style={{marginTop: 10, marginLeft: 10}}>
                <Input value={this.props.inputValue} 
                placeholder="search" 
                style={{ width: 300, marginRight: 10}} 
                onChange={this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                    <List.Item 
                    onClick={(index) => {this.props.handleItemClick(index)}}>
                    {item}
                    </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default TodoListUI;