import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducers/";
import {MuiThemeProvider} from "material-ui/styles";
import thunk from "redux-thunk";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import registerForm from "./components/registerForm";
import loginForm from "./components/loginForm";
import visibleTodoList from "./containers/visibleTodoList";
import App from "./components/App";
import Auth from "./security/auth";

let store = createStore(reducer, compose(
    applyMiddleware(thunk)
));

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/register" component={registerForm}/>
                        <Route path="/login" component={loginForm}/>
                        <AuthenticatedRoute path="/todos" component={visibleTodoList}/>
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