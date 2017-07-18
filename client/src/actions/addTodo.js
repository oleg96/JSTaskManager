import {ADD_TODO_SUCCESS} from '../constants/actionTypes';
import {createTodo} from '../api/Todo/createTodo';


const addTodoSuccess = (id, text, completed) => {
    return {
        type: ADD_TODO_SUCCESS,
        id: id,
        text: text,
        completed: completed
    }
}

const addTodo = (text) => {
    return dispatch => {
        return createTodo(text, false).then(response => {
            dispatch(addTodoSuccess(response._id, response.text, response.completed));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default addTodo