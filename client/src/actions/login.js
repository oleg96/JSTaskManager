import {loginUser} from '../api/User/loginUser';
import auth from '../security/auth';

const register = (email, password) => {
    return response => {
        return loginUser(email, password).then(response => {
            console.log(response);
            auth.authenticateUser(response.token);
            return response;
        }).catch(error => {
            console.log(error);
            throw(error);
        });
    };
}

export default register
