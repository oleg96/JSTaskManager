import {TODO} from '../models/index';

export default (userId) => {
    return TODO.find({userId: userId}).then(todos => {
        let allCompleted = todos.every(todo => todo.completed);
        todos.forEach(todo => todo.completed = !allCompleted);
        return todos.map(todo => todo.save());
    })
};