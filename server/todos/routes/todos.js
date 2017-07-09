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
//import {
    //getList as getListValidator,
    //getById as getByIdValidator,
//} from '../validators';

// middleware for authorization
// router.use(auth);

// get all todos
router.get('/', getList);

router.post('/create', create);

router.put('/update', update);

router.put('/completeAll', completeAll);

router.delete('/remove/:id', remove);

router.delete('/removeCompleted/:userId', removeCompleted);

router.put('/complete', complete);

module.exports = router;