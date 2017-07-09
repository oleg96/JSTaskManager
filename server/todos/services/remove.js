const TODO = require('../models/todo');

module.exports = function (id) {
    return TODO.deleteOne({_id: id});
};