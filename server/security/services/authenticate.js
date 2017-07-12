import config from '../../config';
import {User} from '../../users/index';
import jwt from 'jsonwebtoken';

export default (email, password) => {
    var promise = User.findOne({email: email}).exec();

    return promise.then(function (user) {
        let result = {};
        if (!user) {
            result = {success: false, message: 'Authentication failed. User not found.'};
            return result;
        } else if (user) {
            if (user.password !== password) {
                result = {success: false, message: 'Authentication failed. Wrong password.'};
                return result;
            } else {
                var token = jwt.sign(user, config.jwtSecret, {
                    expiresIn: 3600
                });
                result = {
                    success: true,
                    message: 'Successful login',
                    token: token
                };
                return result;
            }
        }
    });
};