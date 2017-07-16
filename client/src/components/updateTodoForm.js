import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import updateTodo from '../actions/updateTodo';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class UpdateTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: props.todoProp,
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        this.props.updateTodo(this.state.todo.id, this.state.todo.text);
        this.props.onSave(event);
    }

    onChange(event) {
        this.setState({errors: {}});
        const field = event.target.name;
        const todo = this.state.todo;
        todo[field] = event.target.value;
        this.setState({
            todo
        })
    }

    render() {
        const {fields: {todo}, onSubmit, onSave} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    name="text"
                    label="Text"
                    value={this.state.todo.text}
                    onChange={this.onChange}
                    ref={this.focusTextInputField}
                    onBlur={this.onSubmit}
                    autoFocus />
                <Button raised color="primary" type="submit">Update todo</Button>
            </form>
        );
    }
}

const formData = {
    form: 'UpdateTodoForm',
    fields: ['todo']
}

export default connect(null, {updateTodo})(reduxForm(formData)(UpdateTodoForm));