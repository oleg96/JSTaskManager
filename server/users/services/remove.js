import {User} from '../models/index';

export default (id) => {
    return User.deleteOne({_id: id});
};