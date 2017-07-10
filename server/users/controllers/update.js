import {update} from '../services/index';

export default (req, res, next) => {
    update(req.body.id, req.body.username, req.body.email, req.body.password).then(updateUser => {
        res.status(202).json(updateUser);
    }).catch((error) => {
        res.status(500).send(error);
    });
};