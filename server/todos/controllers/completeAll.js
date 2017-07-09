import {completeAll} from '../services/index';

export default (req, res, next) => {
    completeAll(req.body.completed, req.body.userId).then(todos => {
        res.status(202).json(todos);
    }).catch((error) => {
        res.status(500).send(error);
    });
};