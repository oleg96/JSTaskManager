const update = require('../services/update');

module.exports = function (req, res, next) {
    update(req.body.id, req.body.text, req.body.completed, req.body.userId).then(updateTODO => {
        res.status(202).json(updateTODO);
    }).catch((error) => {
        res.status(500).send(error);
    });
};