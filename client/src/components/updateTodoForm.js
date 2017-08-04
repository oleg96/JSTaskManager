import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import updateTodo from '../actions/updateTodo';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import setMessage from '../actions/setMessage';
import removeTodo from '../actions/removeTodo';
import PropTypes from "prop-types";

class UpdateTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: props.todoProp
        };
    }

    componentDidMount() {
        this.handleInitialize();
    }

    onSubmit(values) {
        if (values.text.trim() === '' || values.text === null) {
            this.props.removeTodo(this.state.todo.id)
                .then(
                    this.props.reset()
                )
                .then(
                    this.props.onSave()
                )
                .catch(error => {
                    this.props.setMessage(error.message, true)
                });
        }
        else {
            this.props.updateTodo(this.state.todo.id, values.text.trim())
                .then(
                    this.props.reset()
                )
                .then(
                    this.props.onSave()
                )
                .catch(error => {
                    this.props.setMessage(error.message, true)
                });
        }
    };

    renderTextField = ({
                           input,
                           label,
                           meta: {touched, error},
                           ...custom

                       }) =>
        <TextField
            label={label}
            {...input}
            {...custom}
            autoFocus
            onBlur={this.props.handleSubmit(this.onSubmit.bind(this))}
            onKeyDown={this.handleKeyPress}
        />;

    handleKeyPress = (event) => {
        if (event.keyCode === 27) {
            this.props.onSave();
        }
    };

    handleInitialize() {
        const initData = {
            "text": this.props.todoProp.text
        };
        this.props.initialize(initData);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="text"
                    component={this.renderTextField}
                    label="Text"
                />
                <Button raised color="primary" type="submit">Update todo</Button>
            </form>
        );
    }
}

const formData = {
    form: 'UpdateTodoForm',
    fields: ['text']
};

const mapDispatchToProps = {
    updateTodo: updateTodo,
    removeTodo: removeTodo,
    setMessage: setMessage
};

UpdateTodoForm.propTypes = {
    updateTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    todoProp: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(reduxForm(formData)(UpdateTodoForm));