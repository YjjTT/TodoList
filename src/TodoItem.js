import React, { Component } from 'react'
import PropTypes from 'prop-types'

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