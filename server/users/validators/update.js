import Joi from 'joi';

export default {
    body: {
        id: Joi.string().required(),
        username: Joi.string().min(6).required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        password: Joi.string().min(6).required(),
    },
};