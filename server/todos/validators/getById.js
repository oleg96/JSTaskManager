import Joi from 'joi';

export default {
    id: {
        filter: Joi.number().greater(-1),
    },
};