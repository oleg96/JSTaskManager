var express = require('express');
var validate = require('express-validation');
const router = express.Router();

var getList = require('../controllers/getList');
var create = require('../controllers/create');
//import {
    //getList as getListValidator,
    //getById as getByIdValidator,
//} from '../validators';

// middleware for authorization
// router.use(auth);

// get all todos
router.get('/', getList);

router.post('/create', create);

module.exports = router;