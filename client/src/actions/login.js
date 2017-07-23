import {loginUser} from '../api/User/loginUser';
import auth from '../security/auth';

const register = (email, password) => {
    return response => {
        return loginUser(email, password).then(response => {
            auth.authenticateUser(response.token);
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default register
