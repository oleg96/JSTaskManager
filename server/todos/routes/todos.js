import express from 'express';
import validate from 'express-validation';
const router = express.Router();

import {
    getList,
    create,
    update,
    completeAll,
    remove,
    removeCompleted,
    complete
} from '../controllers/index'

import {
    createValidator,
    updateValidator,
    completeAllValidator,
    removeValidator,
    removeCompletedValidator,
    completeValidator
} from '../validators/index'

// get all todos
router.get('/', getList);

router.post('/create', validate(createValidator), create);

router.put('/update', validate(updateValidator), update);

router.put('/completeAll', validate(completeAllValidator), completeAll);

router.delete('/remove/:id', validate(removeValidator), remove);

router.delete('/removeCompleted/:userId', validate(removeCompletedValidator), removeCompleted);

router.put('/complete', validate(completeValidator), complete);

export default router;