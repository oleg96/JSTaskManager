import express from 'express';
import validate from 'express-validation';
const router = express.Router();

import {getById, getList, create, update} from '../controllers';
import {
    getList as getListValidator,
    getById as getByIdValidator,
} from '../validators';

// middleware for authorization
// router.use(auth);

// get all todos
router.get('/', validate(getListValidator), getList, json);

// get todo by ID
router.get('/:id', validate(getByIdValidator), getById, json);

// create todo
router.post('/', validate(), create, json);

// update todo
router.put('/:id', validate(), update, json);

export default router;