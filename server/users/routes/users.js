var express = require('express');
var validate = require('express-validation');
const router = express.Router();

import {
    getList,
    register,
    update,
    remove,
} from '../controllers/index'

import {
    registerValidator,
    updateValidator,
    removeValidator,
} from '../validators/index'

// middleware for authorization
// router.use(auth);

// get all users
router.get('/', getList);

router.post('/register', validate(registerValidator), register);

router.put('/update', validate(updateValidator), update);

router.delete('/remove/:id', validate(removeValidator), remove);

export default router;