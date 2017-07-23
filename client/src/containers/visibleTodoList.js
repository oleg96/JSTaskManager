import { connect } from 'react-redux'
import completeTodo from '../actions/completeTodo'
import removeTodo from '../actions/removeTodo'
import getTodoList from '../actions/getTodoList'
import TodoList from '../components/todoList'
import setMessage from '../actions/setMessage'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
})

const mapDispatchToProps = {
    setMessage: setMessage,
    getTodoList: getTodoList,
    onTodoClick: completeTodo,
    onDeleteClick: removeTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList