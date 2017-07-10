import {User} from '../models/index';

export default (id, username, email, password) => {
    return User.findByIdAndUpdate(id, {$set: {username: username, email: email, password: password}}, {new: true});
};