import {getList} from '../services/index';

export default (req, res, next) => {
    getList().then(todos => {
        res.status(200).json(todos);
    }).catch((error) => {
        res.status(500).send(error);
    });
};