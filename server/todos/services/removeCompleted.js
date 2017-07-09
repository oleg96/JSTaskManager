import {TODO} from '../models/index';

export default (userId) => {
    return TODO.deleteMany({userId: userId, completed: true});
};