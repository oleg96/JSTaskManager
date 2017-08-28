import {getList} from '../services/index';

export default (req, res, next) => {
    getList(req.headers.userid).then(todos => {
        res.status(200).json(todos);
    }).catch((error) => {
        res.status(422).json({'message': 'Todos load failed'});
    });
};