import Joi from 'joi';

export default {
    body: {
        id: Joi.string().required()
    },
};