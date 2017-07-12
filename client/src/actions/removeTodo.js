import {REMOVE_TODO} from '../constants/actionTypes';

const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    }
}

export default removeTodo