import Joi from 'joi';

export default {
    body: {
        id: Joi.string().required(),
        text: Joi.string().required(),
        completed: Joi.string().required(),
        userId: Joi.string().required(),
    },
};