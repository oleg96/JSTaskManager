import {UPDATE_TODO} from '../constants/actionTypes';

const updateTodo = (id, text) => {
    return {
        type: UPDATE_TODO,
        id: id,
        text: text
    }
}

export default updateTodo