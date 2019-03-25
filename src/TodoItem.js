import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClickDelete = this.handleClickDelete.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState){
        // 当组件被更新时, 会询问时候子组件应该被更新
        // 解决当父组件render函数执行时, 子组件的render也会被执行
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }
    handleClickDelete = ()=>{
        // 修改父组件内容
        const { deleteItem, index } = this.props; 
        deleteItem(index)
    }
    render(){
        const { content,test } = this.props;
        return(
            <div onClick={ this.handleClickDelete }>
                {test} - {content}
            </div>
        )
    }
}
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'Hello world'
}
export default TodoItem;