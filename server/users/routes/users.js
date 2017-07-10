import express from 'express';
import validate from 'express-validation';
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

router.get('/', getList);

router.post('/register', validate(registerValidator), register);

router.put('/update', validate(updateValidator), update);

router.delete('/remove/:id', validate(removeValidator), remove);

export default router;