import {SERVER_URL} from '../../constants/serverURL'

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
        .then(
            response => response.json(),
            error => console.log('An error occured.', error)
        )
};