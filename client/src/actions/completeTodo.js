import {COMPLETE_TODO_SUCCESS} from '../constants/actionTypes';
import {complete} from '../api/Todo/complete';

const completeTodoSuccess = (id) => {
    return {
        type: COMPLETE_TODO_SUCCESS,
        id: id
    }
}

const completeTodo = (id) => {
    return dispatch => {
        return complete(id).then(response => {
            dispatch(completeTodoSuccess(response._id));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default completeTodo