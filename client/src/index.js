import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers/'
import { MuiThemeProvider } from 'material-ui/styles';
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import registerForm from './components/registerForm';
import visibleTodoList from './containers/visibleTodoList';

let store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

//store.dispatch(addTodo());

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/register" component={registerForm}/>
                        <Route path="/todos" component={visibleTodoList}/>
                    </Switch>
                </App>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);