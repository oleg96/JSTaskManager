import React, {Component, PropTypes} from 'react';
import AddTodoForm from './addTodoForm';
import UpdateTodoForm from './updateTodoForm';
import Todo from './todo'
import Footer from './footer'
import Badge from 'material-ui/Badge';
import Assignment from 'material-ui-icons/Assignment'
import Auth from '../security/auth'

class todoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: {},
            editing: false,
            activeCount: 0
        };
        this.onActive = this.onActive.bind(this);
    }

    componentDidMount() {
        this.props.getTodoList(Auth.decodeToken()['_doc']['_id'])
            .catch(error => {
                this.props.setMessage(error.message, true)
            });
    }

    onTodoClick = (id) => (event) => {
        this.props.onTodoClick(id)
            .catch(error => {
                this.props.setMessage(error.message, true)
            });
    }

    onDeleteClick = (id) => (event) => {
        this.props.onDeleteClick(id)
            .catch(error => {
                this.props.setMessage(error.message, true)
            });
    }

    onDoubleClick = (todo) => (event) => {
        this.setState({editing: true, todo: todo});
    }

    onSave = (event) => {
        event.preventDefault()
        this.setState({
            editing: false
        })
    }

    onActive(completed, event) {
        event.preventDefault()
        if (completed !== true) {
            this.setState({activeCount: this.state.activeCount + 1})
        }
    }

    render() {
        switch (this.state.editing) {
            case false:
                return (
                    <div>
                        <AddTodoForm />
                        <Badge badgeContent={this.state.activeCount} color="primary">
                            <Assignment />
                        </Badge>
                        {
                            this.props.todos.map(todo => (
                                <Todo key={todo.id} {...todo} onClick={this.onTodoClick(todo.id)}
                                      onDoubleClick={this.onDoubleClick(todo)}
                                      onDeleteClick={this.onDeleteClick(todo.id)}
                                />
                            ))
                        }
                        <Footer />
                    </div>
                )
            case true:
                return (
                    <div>
                        <UpdateTodoForm todoProp={this.state.todo} onSave={this.onSave}/>
                    </div>
                )
        }
    }
}

export default todoList;