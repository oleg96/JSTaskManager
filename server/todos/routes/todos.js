var express = require('express');
var validate = require('express-validation');
const router = express.Router();

var getList = require('../controllers/getList');
var create = require('../controllers/create');
var update = require('../controllers/update');
var completeAll = require('../controllers/completeAll');
var remove = require('../controllers/remove');
var removeCompleted = require('../controllers/removeCompleted');
var complete = require('../controllers/complete');

import {
    getListValidator,
    createValidator,
    updateValidator,
    completeAllValidator,
    removeValidator,
    removeCompletedValidator,
    completeValidator
} from '../validators/index'

// middleware for authorization
// router.use(auth);

// get all todos
router.get('/', validate(getListValidator), getList);

router.post('/create', validate(createValidator), create);

router.put('/update', validate(updateValidator), update);

router.put('/completeAll', validate(completeAllValidator), completeAll);

router.delete('/remove/:id', validate(removeValidator), remove);

router.delete('/removeCompleted/:userId', validate(removeCompletedValidator), removeCompleted);

router.put('/complete', validate(completeValidator), complete);

module.exports = router;