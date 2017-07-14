import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import addTodo from '../actions/addTodo';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {
                id: '',
                text: ''
            },
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.todo.id, this.state.todo.text);
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
        const {fields: {todo}, handleSubmit} = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    name="id"
                    label="Id"
                    value={this.state.todo.id}
                    onChange={this.onChange}
                />
                <TextField
                    name="text"
                    label="Text"
                    value={this.state.todo.text}
                    onChange={this.onChange}
                    className="form-control"/>
                <Button raised color="primary" type="submit">Add todo</Button>
            </form>
        );
    }
}

const formData = {
    form: 'AddTodoForm',
    fields: ['todo']
}

export default connect(null, {addTodo})(reduxForm(formData)(AddTodoForm));