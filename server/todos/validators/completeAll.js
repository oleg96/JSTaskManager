import Joi from 'joi';

export default {
    body: {
        completed: Joi.boolean().required(),
        userId: Joi.string().required(),
    },
};