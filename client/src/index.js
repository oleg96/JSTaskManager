import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import reducer from './reducers/';
import {MuiThemeProvider} from 'material-ui/styles';
import thunk from 'redux-thunk';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import registerForm from './components/registerForm';
import loginForm from './components/loginForm';
import visibleTodoList from './containers/visibleTodoList';
import App from './components/App';
import NotFound from './components/notFound';
import Auth from './security/auth';
import createMuiTheme from 'material-ui/styles/theme';

const muiTheme = createMuiTheme({
    overrides: {
        MuiListItemSecondaryAction: {
            root: {
                marginTop: -19
            }
        }
    }
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

render(
    <MuiThemeProvider theme={muiTheme}>
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact={true} path="/register" component={registerForm}/>
                        <Route exact={true} path="/login" component={loginForm}/>
                        <AuthenticatedRoute exact={true} path="/todos/:filter" component={visibleTodoList}/>
                        <Redirect exact={true} from="/logout" to="/login"/>
                        <Redirect exact={true} from="/" to="/todos/all"/>
                        <Route path="**" component={NotFound}/>
                    </Switch>
                </App>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

function AuthenticatedRoute({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => Auth.isUserAuthenticated()
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
}