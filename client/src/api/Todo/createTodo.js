import Auth from '../../security/auth'
import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from '../validateResponse';

export const createTodo = (text, completed) => {

    return fetch(SERVER_URL + '/todos/create',
        {
            method: 'POST',
            headers: {
                'x-access-token': Auth.getUserToken(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'text': text,
                'completed': completed,
                'userId': Auth.decodeToken()['_doc']['_id']
            })
        })
        .then(response => {
            return response.json().then(json => {
                return validateResponse(response) ? json : Promise.reject(json);
            })
        })
};