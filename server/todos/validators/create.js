import Joi from 'joi';

export default {
    body: {
        text: Joi.string().required(),
        completed: Joi.string().required(),
        userId: Joi.string().required(),
    },
};