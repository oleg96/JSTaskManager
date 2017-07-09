const TODO = require('../models/todo');

module.exports = function (id, text, completed, userId) {
    return TODO.findByIdAndUpdate(id, {$set: {text: text, completed: completed, userId: userId}}, {new: true});
};