const create = require('../services/create');

module.exports = function (req, res, next) {
    create(req.body.text, req.body.completed, req.body.userId).then(newTODO => {
        res.status(201).json(newTODO);
    }).catch((error) => {
        res.status(500).send(error);
    });
};