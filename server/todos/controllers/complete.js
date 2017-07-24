import {complete} from '../services/index';

export default (req, res, next) => {
    complete(req.body.id).then(completeTODO => {
        res.status(202).json(completeTODO);
    }).catch((error) => {
        res.status(422).json({'message': 'Todo complete failed'});
    });
};