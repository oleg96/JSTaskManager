import {loginUser} from '../api/User/loginUser';
import Auth from '../security/auth';

const login = (email, password) => {
    return response => {
        return loginUser(email, password).then(response => {
            Auth.authenticateUser(response.token);
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default login
