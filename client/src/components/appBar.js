import React from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {NavLink} from 'react-router-dom'

class TodoAppBar extends React.Component {
    render() {
        return <AppBar position="static">
            <Toolbar>
                <Typography type="title" color="inherit">
                    Todo App
                </Typography>
                <NavLink to="/todos" style={{textDecoration: 'none'}}><Button color="contrast">Todos</Button></NavLink>
                <NavLink to="/register" style={{textDecoration: 'none'}}><Button color="contrast">Register</Button></NavLink>
                <NavLink to="/login" style={{textDecoration: 'none'}}><Button color="contrast">Login</Button></NavLink>
            </Toolbar>
        </AppBar>
    }
}

export default TodoAppBar