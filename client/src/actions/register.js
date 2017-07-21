import {registerUser} from '../api/User/registerUser';

const register = (username, email, password) => {
    return message => {
        return registerUser(username, email, password).then(() => {
            message = 'Registration completed'
        }).catch(error => {
            throw(error);
        });
    };
}

export default register
