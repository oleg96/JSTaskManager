const getList = require('../services/getList');
const TODO = require('../models/todo');

module.exports = function (req, res, next) {
    getList().then(todos => {
        res.status(200).json(todos);
    }).catch((error) => {
        res.status(500).send(error);
    });
};