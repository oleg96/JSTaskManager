import { connect } from 'react-redux'
import completeTodo from '../actions/completeTodo'
import completeAllTodos from '../actions/completeAllTodos'
import removeTodo from '../actions/removeTodo'
import getTodoList from '../actions/getTodoList'
import removeCompletedTodos from '../actions/removeCompletedTodos'
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
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeCount: state.todos.reduce((count, todo) => !todo.completed ? count + 1 : count, 0),
    checkboxStatus: state.todos.every(todo => todo.completed),
    visibility: Boolean(state.todos.length)
});

const mapDispatchToProps = {
    setMessage: setMessage,
    getTodoList: getTodoList,
    onTodoClick: completeTodo,
    onDeleteClick: removeTodo,
    onDeleteCompletedClick: removeCompletedTodos,
    onCompleteAllClick: completeAllTodos
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList