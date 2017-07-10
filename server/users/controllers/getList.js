import {getList} from '../services/index';

export default (req, res, next) => {
    getList().then(users => {
        res.status(200).json(users);
    }).catch((error) => {
        res.status(500).send(error);
    });
};