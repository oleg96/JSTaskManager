import Joi from 'joi';

export default {
    body: {
        userId: Joi.string().required()
    },
};