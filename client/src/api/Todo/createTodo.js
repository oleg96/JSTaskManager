import addTodoSuccess from '../../actions/addTodo'
import Auth from '../../security/auth'
import {SERVER_URL} from '../../constants/serverURL'

export const createTodo = (text, completed) => {

    return fetch(SERVER_URL + '/todos/create',
        {
            method: 'POST',
            headers: {
                'x-access-token': Auth.getUserToken()
            },
            body: JSON.stringify({
                'text': text,
                'completed': completed,
            })
        })
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
};