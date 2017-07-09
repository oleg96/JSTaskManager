import {TODO} from '../models/index';

export default (id) => {
    return TODO.deleteOne({_id: id});
};