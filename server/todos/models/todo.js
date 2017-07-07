const mongoose = require('mongoose');
const TODOSchema = require('../shemas/todo');

const TODO = mongoose.model('TODO', TODOSchema);

module.exports = TODO;