import {REMOVE_TODO_SUCCESS} from '../constants/actionTypes';
import {deleteTodo} from '../api/Todo/deleteTodo';

const removeTodoSuccess = (id) => {
    return {
        type: REMOVE_TODO_SUCCESS,
        id: id
    }
}

const removeTodo = (id) => {
    return dispatch => {
        return deleteTodo(id).then(response => {
            dispatch(removeTodoSuccess(id));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default removeTodo