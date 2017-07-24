import {update} from '../services/index';

export default (req, res, next) => {
    update(req.body.id, req.body.text).then(updateTODO => {
        res.status(202).json(updateTODO);
    }).catch((error) => {
        res.status(422).json({'message': 'Todo edit failed'});
    });
};