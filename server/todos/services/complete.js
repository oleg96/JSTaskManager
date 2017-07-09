const TODO = require('../models/todo');

module.exports = function (id, completed) {
    return TODO.findByIdAndUpdate(id, {$set: {completed: completed}}, {new: true});
};