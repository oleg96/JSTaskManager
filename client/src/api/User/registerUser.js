import {SERVER_URL} from '../../constants/serverURL'

function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

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
        .then(validateResponse)
        .then(
            response => response.json()
        )
        .catch((error) => {
            console.log('An error occured.', error)
            throw error;
        });
};