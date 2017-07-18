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
                <Button color="contrast"><NavLink to="/todos">Todos</NavLink></Button>
                <Button color="contrast"><NavLink to="/register">Register</NavLink></Button>
            </Toolbar>
        </AppBar>
    }
}

export default TodoAppBar