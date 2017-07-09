import {TODO} from '../models/index';

export default (id, text, completed, userId) => {
    return TODO.findByIdAndUpdate(id, {$set: {text: text, completed: completed, userId: userId}}, {new: true});
};