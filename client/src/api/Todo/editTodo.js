import Auth from '../../security/auth'
import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from '../validateResponse';

export const editTodo = (id, text) => {

    return fetch(SERVER_URL + '/todos/update',
        {
            method: 'PUT',
            headers: {
                'x-access-token': Auth.getUserToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,
                'text': text
            })
        })
        .then(response => {
            return response.json().then(json => {
                return validateResponse(response) ? json : Promise.reject(json);
            })
        })
};