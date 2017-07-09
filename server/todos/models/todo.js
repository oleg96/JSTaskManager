import mongoose from 'mongoose';
import {TODOSchema} from '../schemas/index';

const TODO = mongoose.model('TODO', TODOSchema);

export default TODO;