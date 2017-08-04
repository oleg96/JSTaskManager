import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import setMessage from '../actions/setMessage';
import Paper from 'material-ui/Paper';
import validate from '../validators/inputValidate';
import styles from '../stylesheets/main.css';
import register from '../actions/register';
import Button from 'material-ui/Button';
import PropTypes from "prop-types";

class registerForm extends Component {

    onSubmit(values) {
        this.props.register(values.username, values.email, values.password)
            .then(response => {
                this.props.setMessage(response.message, true)
                this.props.history.push("/login");
            })
            .catch(error => {
                this.props.setMessage(error.message, true)
            });
    };

    renderTextField = ({
                           input,
                           label,
                           meta: {touched, error},
                           ...custom
                       }) =>
        <TextField
            error={Boolean(error)}
            label={label}
            helperText={error}
            {...input}
            {...custom}
        />;

    renderPasswordTextField = ({
                                   input,
                                   label,
                                   meta: {touched, error},
                                   ...custom
                               }) =>
        <TextField
            type="password"
            error={Boolean(error)}
            label={label}
            helperText={error}
            {...input}
            {...custom}
        />;

    render() {
        return (
            <Grid container direction='row' justify='center' align='stretch'>
                <Grid item xs={9} sm={7} md={5} lg={3}>
                    <Paper className="formPosition">
                        <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
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
                                    <Field
                                        name="username"
                                        component={this.renderTextField}
                                        label="Username"
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        name="email"
                                        component={this.renderTextField}
                                        label="Email"
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        name="password"
                                        component={this.renderPasswordTextField}
                                        label="Password"
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
    fields: ['username', 'email', 'password'],
    validate
};

const mapDispatchToProps = {
    setMessage: setMessage,
    register: register
};

registerForm.propTypes = {
    setMessage: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(reduxForm(formData)(registerForm));
