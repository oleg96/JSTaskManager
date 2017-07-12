import {COMPLETE_TODO} from '../constants/actionTypes';

const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id: id
    }
}

export default completeTodo