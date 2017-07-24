import {removeCompleted} from '../services/index';

export default (req, res, next) => {
    removeCompleted(req.params.userId).then(removeTODOs => {
        res.status(202).json(removeTODOs);
    }).catch((error) => {
        res.status(422).json({'message': 'Completed todos remove failed'});
    });
};
