import {remove} from '../services/index';

export default (req, res, next) => {
    remove(req.params.id).then(removeUser => {
        res.status(202).json(removeUser);
    }).catch((error) => {
        res.status(500).send(error);
    });
};