import Joi from 'joi';

export default {
    body: {
        username: Joi.string().min(6).required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        password: Joi.string().min(6).required(),
    },
};