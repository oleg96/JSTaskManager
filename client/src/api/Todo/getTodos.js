import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from '../validateResponse';
import auth from '../../security/auth'

export const getTodos = (userId) => {

    return fetch(SERVER_URL + '/todos/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': auth.getUserToken(),
                'userId': userId
            }
        })
        .then(response => {
            return response.json().then(json => {
                return validateResponse(response) ? json : Promise.reject(json);
            })
        })
};