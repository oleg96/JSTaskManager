import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from "../validateResponse";

export const registerUser = (username, email, password) => {

    return fetch(SERVER_URL + '/users/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': username,
                'email': email,
                'password': password,
            })
        })
        .then(response => {
            return response.json().then(json => {
                return validateResponse(response) ? json : Promise.reject(json);
            })
        })
};