import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {reducer as formReducer} from 'redux-form'

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    form: formReducer
})

export default todoApp