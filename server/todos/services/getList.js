import {TODO} from '../models/index';

export default (userId) => {
    return TODO.find({userId: userId});
};