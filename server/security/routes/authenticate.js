var express = require('express');
var validate = require('express-validation');
const router = express.Router();

import {
    authenticate
} from '../controllers/index'

import {
    authenticateValidator
} from '../validators/index'

router.post('/authenticate', validate(authenticateValidator), authenticate);

export default router;