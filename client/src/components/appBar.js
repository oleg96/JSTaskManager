import React from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class TodoAppBar extends React.Component {
    render() {
        return <AppBar position="static">
            <Toolbar>
                <Typography type="title" color="inherit">
                    Todo App
                </Typography>
                <Button color="contrast">Login</Button>
                <Button color="contrast">Register</Button>
            </Toolbar>
        </AppBar>
    }
}

export default TodoAppBar