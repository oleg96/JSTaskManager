import {
    ADD_TODO,
    UPDATE_TODO,
    COMPLETE_TODO
} from '../constants/actionTypes';

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'UPDATE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, text: todo.text}
                    : todo
            );
        case 'COMPLETE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export default todos