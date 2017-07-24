import Auth from '../../security/auth'
import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from '../validateResponse';

export const deleteTodo = (id) => {

    return fetch(SERVER_URL + '/todos/remove/' + id,
        {
            method: 'DELETE',
            headers: {
                'x-access-token': Auth.getUserToken(),
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json().then(json => {
                return validateResponse(response) ? json : Promise.reject(json);
            })
        })
};