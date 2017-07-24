import Auth from '../../security/auth'
import {SERVER_URL} from '../../constants/serverURL'
import validateResponse from '../validateResponse';

export const deleteCompletedTodos = (userId) => {

    return fetch(SERVER_URL + '/todos/removeCompleted/' + userId,
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