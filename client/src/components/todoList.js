import React from 'react'
import PropTypes from 'prop-types'
import Todo from './todo'

const TodoList = ({todos, onTodoClick, onTodoDblClick}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} onDblClick={() => onTodoDblClick(todo.id)}/>
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onTodoDblClick: PropTypes.func.isRequired
}

export default TodoList