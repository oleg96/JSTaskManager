import {TODO} from '../models/index';

export default (id, completed) => {
    return TODO.findByIdAndUpdate(id, {$set: {completed: completed}}, {new: true});
};