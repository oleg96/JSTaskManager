import {
    ADD_TODO_SUCCESS,
    GET_TODOS_SUCCESS,
    UPDATE_TODO_SUCCESS,
    COMPLETE_TODO_SUCCESS,
    REMOVE_TODO_SUCCESS,
    REMOVE_COMPLETED_TODOS_SUCCESS
} from '../constants/actionTypes';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO_SUCCESS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }
            ];
        case 'GET_TODOS_SUCCESS':
            return action.todos.map(todo => {
                todo.id = todo._id;
                return todo;
            });
        case 'UPDATE_TODO_SUCCESS':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            );
        case 'COMPLETE_TODO_SUCCESS':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case 'REMOVE_TODO_SUCCESS':
            return state.filter((todo) => todo.id !== action.id);
        case 'REMOVE_COMPLETED_TODOS_SUCCESS':
            return state.filter(todo => !todo.completed);
        default:
            return state
    }
};

export default todos