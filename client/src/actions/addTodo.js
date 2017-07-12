import {ADD_TODO} from '../constants/actionTypes';

const addTodo = (id, text) => {
    return {
        type: ADD_TODO,
        id: id,
        text: text
    }
}

export default addTodo