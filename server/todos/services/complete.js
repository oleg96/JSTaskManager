import {TODO} from '../models/index';

export default (id) => {
    return TODO.findById(id).then(todo => {
        todo.completed = !todo.completed;
        return todo.save();
    })
};