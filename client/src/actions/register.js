import {REGISTER_SUCCESS} from '../constants/actionTypes';
import {registerUser} from '../api/User/registerUser';


const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS,
    }
}

const register = (username, email, password) => {
    return dispatch => {
        return registerUser(username, email, password).then(response => {
            dispatch(registerSuccess());
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export default register
