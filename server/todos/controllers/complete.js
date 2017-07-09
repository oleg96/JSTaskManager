const complete = require('../services/complete');

module.exports = function (req, res, next) {
    complete(req.body.id, req.body.completed).then(completeTODO => {
        res.status(202).json(completeTODO);
    }).catch((error) => {
        res.status(500).send(error);
    });
};