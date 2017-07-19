import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import register from '../actions/register';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: ''
            },
            isLoading: false,
            errors: '',
            open: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        this.props.register(this.state.user.username, this.state.user.email, this.state.user.password)
            .then(response => this.props.history.push("/todos"))
            .catch(error => {
                let newError = error.message;
                this.setState({
                    errors: newError,
                    open: true
                })
            });
    }

    onChange(event) {
        this.setState({
            errors: '',
            open: false
        });
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <AppBar position="static" color="default">
                    <Grid
                        container
                        align='center'
                        justify='center'
                        direction='column'
                    >
                        <Grid item>
                            <Toolbar>
                                <Typography type="title" color="inherit">
                                    Registration
                                </Typography>
                            </Toolbar>
                        </Grid>
                        <Grid item>
                            <TextField
                                name="username"
                                label="User name"
                                value={this.state.user.username}
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="email"
                                label="Email"
                                value={this.state.user.email}
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                name="password"
                                label="Password"
                                value={this.state.user.password}
                                onChange={this.onChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button raised color="primary" type="submit">Register</Button>
                        </Grid>
                    </Grid>
                </AppBar>
                <Snackbar open={this.state.open} message={this.state.errors}/>
            </form>
        );
    }
}

const formData = {
    form: 'RegisterForm',
    fields: ['user']
}

const mapDispatchToProps = {
    register: register,
}

export default connect(null, mapDispatchToProps)(reduxForm(formData)(AddTodoForm));
