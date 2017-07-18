import Joi from 'joi';

export default {
    body: {
        id: Joi.string().required(),
        text: Joi.string().required(),
        completed: Joi.boolean().required(),
        userId: Joi.string().required(),
    },
};