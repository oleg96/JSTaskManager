import {GET_TODOS_SUCCESS} from '../constants/actionTypes';
import {getTodos} from '../api/Todo/getTodos';


const getTodosSuccess = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        todos
    }
}

const getTodoList = (userId) => {
    return dispatch => {
        return getTodos(userId).then(response => {
            dispatch(getTodosSuccess(response));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default getTodoList