import {removeCompleted} from '../services/index';

export default (req, res, next) => {
    removeCompleted(req.params.userId).then(removeTODOs => {
        res.status(202).json(removeTODOs);
    }).catch((error) => {
        res.status(500).send(error);
    });
};
