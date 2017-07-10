import Joi from 'joi';

export default {
    body: {
        username: Joi.string().required(),
        email: Joi.string().email({minDomainAtoms: 2}).required(),
        password: Joi.string().required(),
    },
};