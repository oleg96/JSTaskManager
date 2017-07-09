const completeAll = require('../services/completeAll');

module.exports = function (req, res, next) {
    completeAll(req.body.completed, req.body.userId).then(todos => {
        res.status(202).json(todos);
    }).catch((error) => {
        res.status(500).send(error);
    });
};