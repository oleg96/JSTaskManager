import {UPDATE_TODO_SUCCESS} from '../constants/actionTypes';
import {editTodo} from '../api/Todo/editTodo';

const updateTodoSuccess = (id, text) => {
    return {
        type: UPDATE_TODO_SUCCESS,
        id: id,
        text: text
    }
}

const updateTodo = (id, text) => {
    return dispatch => {
        return editTodo(id, text).then(response => {
            dispatch(updateTodoSuccess(response._id, response.text));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default updateTodo