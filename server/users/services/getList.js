import {User} from '../models/index';

export default () => {
    return User.find();
};