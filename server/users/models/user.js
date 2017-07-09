import mongoose from 'mongoose';
import {UserSchema} from '../schemas/index';

const User = mongoose.model('TODO', UserSchema);

export default User;