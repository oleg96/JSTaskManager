import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import register from '../actions/register';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

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
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        try {
            this.props.register(this.state.user.username, this.state.user.email, this.state.user.password);
            this.props.history.push("/todos");
        } catch(e) {
            this.setState({errors: {e}});
        }
    }

    onChange(event) {
        this.setState({errors: {}});
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
                <TextField
                    name="username"
                    label="User name"
                    value={this.state.user.username}
                    onChange={this.onChange}
                />
                <TextField
                    name="email"
                    label="Email"
                    value={this.state.user.email}
                    onChange={this.onChange}
                />
                <TextField
                    name="password"
                    label="Password"
                    value={this.state.user.password}
                    onChange={this.onChange}
                />
                <Button raised color="primary" type="submit">Register</Button>
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
