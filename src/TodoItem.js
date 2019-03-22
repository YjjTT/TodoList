import React, { Component } from 'react'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this)
    }
    handleClickDelete = ()=>{
        // 修改父组件内容
        const { deleteItem, index } = this.props; 
        deleteItem(index)
    }
    render(){
        const { content } = this.props;
        return(
            <div onClick={ this.handleClickDelete }>{content}</div>
        )
    }
}
export default TodoItem;