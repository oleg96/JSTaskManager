const TODO = require('../models/todo');

module.exports = function (userId) {
    return TODO.deleteMany({userId: userId, completed: true});
};