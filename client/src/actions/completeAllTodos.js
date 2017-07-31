import {COMPLETE_ALL_TODOS_SUCCESS} from '../constants/actionTypes';
import {completeAll} from '../api/Todo/completeAll';

const completeAllTodosSuccess = () => {
    return {
        type: COMPLETE_ALL_TODOS_SUCCESS
    }
};

const completeAllTodos = (complete, userId) => {
    return dispatch => {
        return completeAll(complete, userId).then(response => {
            dispatch(completeAllTodosSuccess());
            return response;
        }).catch(error => {
            throw(error);
        });
    };
};

export default completeAllTodos