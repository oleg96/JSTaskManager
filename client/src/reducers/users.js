import React from 'react';
import {
    REGISTER_SUCCESS
} from '../constants/actionTypes';
import {Redirect} from 'react-router-dom';

const users = (state = [], action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return [
                <Redirect to={{ pathname: '/todos' }} />
            ];
        default:
            return state
    }
};

export default users