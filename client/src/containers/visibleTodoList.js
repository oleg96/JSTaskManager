import { connect } from 'react-redux'
import completeTodo from '../actions/completeTodo'
import completeAllTodos from '../actions/completeAllTodos'
import removeTodo from '../actions/removeTodo'
import getTodoList from '../actions/getTodoList'
import removeCompletedTodos from '../actions/removeCompletedTodos'
import TodoList from '../components/todoList'
import setMessage from '../actions/setMessage'
import PropTypes from "prop-types";
import setVisibilityFilter from "../actions/setVisibilityFilter";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'all':
            return todos
        case 'completed':
            return todos.filter(t => t.completed)
        case 'active':
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state, {match}) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
    activeCount: state.todos.reduce((count, todo) => !todo.completed ? count + 1 : count, 0),
    haveCompleted: Boolean(state.todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)),
    checkboxStatus: state.todos.every(todo => todo.completed),
    visibility: Boolean(state.todos.length),
    filter: match.params.filter
});

const mapDispatchToProps = {
    setVisibilityFilter: setVisibilityFilter,
    setMessage: setMessage,
    getTodoList: getTodoList,
    onTodoClick: completeTodo,
    onDeleteClick: removeTodo,
    onDeleteCompletedClick: removeCompletedTodos,
    onCompleteAllClick: completeAllTodos
};

getVisibleTodos.propTypes = {
    setMessage: PropTypes.func.isRequired,
    getTodoList: PropTypes.func.isRequired,
    onTodoClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onDeleteCompletedClick: PropTypes.func.isRequired,
    onCompleteAllClick: PropTypes.func.isRequired,
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList