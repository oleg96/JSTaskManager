import {
    ADD_TODO_SUCCESS,
    GET_TODOS_SUCCESS,
    UPDATE_TODO,
    COMPLETE_TODO,
    REMOVE_TODO
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
                return todo;
            });
        case 'UPDATE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: action.text}
                    : todo
            );
        case 'COMPLETE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state
    }
};

export default todos