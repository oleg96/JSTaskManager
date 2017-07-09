import Joi from 'joi';

export default {
    body: {
        completed: Joi.string().required(),
        userId: Joi.string().required(),
    },
};