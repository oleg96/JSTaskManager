import Joi from 'joi';

export default {
    body: {
        id: Joi.string().required(),
        completed: Joi.string().required(),
    },
};