import Joi from 'joi';

export default {
    query: {
        filter: Joi.string().regex(/completed|all|active/),
    },
};