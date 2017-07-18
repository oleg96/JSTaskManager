import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers/'
import App from './components/App'
import { MuiThemeProvider } from 'material-ui/styles';
import thunk from 'redux-thunk'
import addTodo from './actions/addTodo'

let store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

//store.dispatch(addTodo());

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);