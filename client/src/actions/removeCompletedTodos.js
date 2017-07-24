import {REMOVE_COMPLETED_TODOS_SUCCESS} from '../constants/actionTypes';
import {deleteCompletedTodos} from '../api/Todo/deleteCompletedTodos';


const removeCompletedTodosSuccess = () => {
    return {
        type: REMOVE_COMPLETED_TODOS_SUCCESS
    }
}

const removeCompletedTodos = (userId) => {
    return dispatch => {
        return deleteCompletedTodos(userId).then(response => {
            dispatch(removeCompletedTodosSuccess());
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default removeCompletedTodos