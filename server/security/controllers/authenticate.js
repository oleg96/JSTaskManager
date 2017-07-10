import {authenticate} from '../services/index';

export default (req, res, next) => {
    authenticate(req.body.email, req.body.password).then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(500).send(error);
    });
};