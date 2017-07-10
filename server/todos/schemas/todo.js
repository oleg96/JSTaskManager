import {Schema} from 'mongoose';

const TODOSchema = new Schema({
    text: {
        type: String,
        unique: false,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

export default TODOSchema;