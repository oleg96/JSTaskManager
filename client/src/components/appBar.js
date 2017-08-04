import React, {Component} from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {NavLink} from 'react-router-dom'
import Auth from '../security/auth'
import Grid from 'material-ui/Grid';

class TodoAppBar extends Component {

    logOut(event) {
        Auth.deauthenticateUser();
    }

    render() {
        if (Auth.isUserAuthenticated()) {
            return <AppBar position="static">
                <Toolbar>
                    <Grid
                        container
                        align='center'
                        justify='flex-start'
                        direction='row'
                        gutter={0}
                    >
                        <Grid item>
                            <Typography type="title" color="inherit">
                                Todo App
                            </Typography>
                        </Grid>
                        <Grid item>
                            <NavLink to="/todos" className="navLink"><Button
                                color="contrast">Todos</Button></NavLink>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        align='center'
                        justify='flex-end'
                        direction='row'
                        gutter={0}
                    >
                        <Grid item>
                            <a href="/logout" className="navLink"><Button color="contrast"
                                                                          onClick={this.logOut}>Logout</Button></a>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        } else {
            return <AppBar position="static">
                <Toolbar>
                    <Grid
                        container
                        align='center'
                        justify='flex-start'
                        direction='row'
                        gutter={0}
                    >
                        <Grid item>
                            <Typography type="title" color="inherit">
                                Todo App
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        align='center'
                        justify='flex-end'
                        direction='row'
                        gutter={0}
                    >
                        <Grid item>
                            <NavLink to="/register" className="navLink"><Button
                                color="contrast">Register</Button></NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/login" className="navLink"><Button color="contrast">Login</Button></NavLink>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        }
    }
}

export default TodoAppBar;