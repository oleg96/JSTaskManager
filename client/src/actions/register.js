import {registerUser} from '../api/User/registerUser';

const register = (username, email, password) => {
    return response => {
        return registerUser(username, email, password).then(response => {
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default register
