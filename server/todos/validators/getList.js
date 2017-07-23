import Joi from 'joi';

export default {
    headers: {
        userid: Joi.string().required()
    },
};