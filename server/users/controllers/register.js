import {register} from '../services/index';

export default (req, res, next) => {
    register(req.body.username, req.body.email, req.body.password).then(newUser => {
        res.status(201).json(newUser);
    }).catch((error) => {
        res.status(500).send(error);
    });
};