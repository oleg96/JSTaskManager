import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import addTodo from '../actions/addTodo';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import setMessage from '../actions/setMessage';

class AddTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {
                text: ''
            },
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.todo.text.trim())
            .then(
                this.setState({
                    todo: {
                        text: ''
                    }
                }))
            .catch(error => {
                this.props.setMessage(error.message, true)
            });
    }

    onChange(event) {
        this.props.setMessage("", false);
        const field = event.target.name;
        const todo = this.state.todo;
        todo[field] = event.target.value;
        this.setState({
            todo
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    name="text"
                    label="Text"
                    value={this.state.todo.text}
                    onChange={this.onChange}
                    autoFocus
                />
                <Button raised color="primary" type="submit">Add todo</Button>
            </form>
        );
    }
}

const formData = {
    form: 'AddTodoForm',
    fields: ['todo']
}

const mapDispatchToProps = {
    addTodo: addTodo,
    setMessage: setMessage
}

export default connect(null, mapDispatchToProps)(reduxForm(formData)(AddTodoForm));