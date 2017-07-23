import {create} from '../services/index';

export default (req, res, next) => {
    create(req.body.text, req.body.completed, req.body.userId).then(newTODO => {
        res.status(201).json(newTODO);
    }).catch((error) => {
        res.status(422).json({'message': 'Todo add failed'});
    });
};