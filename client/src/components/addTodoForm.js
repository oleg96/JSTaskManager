import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import addTodo from '../actions/addTodo';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import setMessage from '../actions/setMessage';
import validate from '../validators/inputValidate';
import PropTypes from "prop-types";

class AddTodoForm extends Component {

    onSubmit(values) {
        this.props.addTodo(values.text.trim())
            .then(
                this.props.reset()
            )
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
            autoFocus
        />;

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="text"
                    component={this.renderTextField}
                    label="Text"
                />
                <Button raised color="primary" type="submit">Add todo</Button>
            </form>
        );
    }
}

const formData = {
    form: 'AddTodoForm',
    fields: ['text'],
    validate
};

const mapDispatchToProps = {
    addTodo: addTodo,
    setMessage: setMessage
};

AddTodoForm.propTypes = {
    setMessage: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(reduxForm(formData)(AddTodoForm));