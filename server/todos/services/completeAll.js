const TODO = require('../models/todo');

module.exports = function (completed, userId) {
    return TODO.updateMany({userId: userId}, {$set: {completed: completed}}, {new: true});
};