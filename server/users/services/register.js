import {User} from '../models/index';

export default (username, email, password) => {
    let newUser = new User({
        username,
        email,
        password
    });
    return newUser.save();
};