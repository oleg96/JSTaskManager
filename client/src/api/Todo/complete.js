import Auth from '../../security/auth'
import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from '../validateResponse';

export const complete = (id) => {

    return fetch(SERVER_URL + '/todos/complete',
        {
            method: 'PUT',
            headers: {
                'x-access-token': Auth.getUserToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id
            })
        })
        .then(response => {
            return response.json().then(json => {
                return validateResponse(response) ? json : Promise.reject(json);
            })
        })
};