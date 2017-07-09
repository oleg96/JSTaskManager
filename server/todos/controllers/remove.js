const remove = require('../services/remove');

module.exports = function (req, res, next) {
    remove(req.params.id).then(removeTODO => {
        res.status(202).json(removeTODO);
    }).catch((error) => {
        res.status(500).send(error);
    });
};