import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import register from '../actions/register';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import setMessage from '../actions/setMessage';
import Paper from 'material-ui/Paper';
import styles from '../stylesheets/main.css';

class registerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: ''
            },
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        this.props.register(this.state.user.username, this.state.user.email, this.state.user.password)
            .then(response => {
                this.props.setMessage(response.message, true)
                this.props.history.push("/login")
            })
            .catch(error => {
                this.props.setMessage(error.message, true)
            });
    }

    onChange(event) {
        this.props.setMessage("", false)
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        })
    }

    render() {
        return (
            <Grid container direction='row' justify='center' align='stretch'>
                <Grid item xs={9} sm={7} md={5} lg={3}>
                    <Paper className="formPosition">
                        <form onSubmit={this.onSubmit}>
                            <Grid
                                container
                                align='center'
                                justify='center'
                                direction='column'
                                gutter={8}
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
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

const formData = {
    form: 'RegisterForm',
    fields: ['user']
}

const mapDispatchToProps = {
    register: register,
    setMessage: setMessage
}

export default connect(null, mapDispatchToProps)(reduxForm(formData)(registerForm));
