import {TODO} from '../models/index';

export default (id, text, completed, userId) => {
    return TODO.findByIdAndUpdate(id, {$set: {text: text}}, {new: true});
};