import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import updateTodo from '../actions/updateTodo';
import {connect} from "react-redux";
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import setMessage from '../actions/setMessage';

class UpdateTodoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: props.todoProp,
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        this.props.updateTodo(this.state.todo.id, this.state.todo.text)
            .then(
                this.setState({
                    todo: {
                        text: ''
                    }
                })
            )
            .then(
                this.props.onSave(event)
            )
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
                    onBlur={this.onSubmit}
                    autoFocus/>
                <Button raised color="primary" type="submit">Update todo</Button>
            </form>
        );
    }
}

const formData = {
    form: 'UpdateTodoForm',
    fields: ['todo']
}

const mapDispatchToProps = {
    updateTodo: updateTodo,
    setMessage: setMessage
}

export default connect(null, mapDispatchToProps)(reduxForm(formData)(UpdateTodoForm));