import {remove} from '../services/index';

export default (req, res, next) => {
    remove(req.params.id).then(removeTODO => {
        res.status(202).json(removeTODO);
    }).catch((error) => {
        res.status(422).json({'message': 'Todo remove failed'});
    });
};