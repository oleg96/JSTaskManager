import {TODO} from '../models/index';

export default (completed, userId) => {
    return TODO.updateMany({userId: userId}, {$set: {completed: completed}}, {new: true});
};