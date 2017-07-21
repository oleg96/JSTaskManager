import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import message from './message'
import {reducer as formReducer} from 'redux-form'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    message,
    form: formReducer
})

export default todoApp