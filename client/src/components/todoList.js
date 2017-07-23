import React, {Component, PropTypes} from 'react';
import AddTodoForm from './addTodoForm';
import UpdateTodoForm from './updateTodoForm';
import Todo from './todo'
import Footer from './footer'
import Badge from 'material-ui/Badge';
import Assignment from 'material-ui-icons/Assignment'
import auth from '../security/auth'

class todoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: {},
            editing: false,
            activeCount: 0,
            errors: {}
        };
        this.onActive = this.onActive.bind(this);
    }

    componentDidMount() {
        this.props.getTodoList(auth.decodeToken()['_doc']['_id']);
    }

    onDoubleClick = (todo) => (event) => {
        this.setState({errors: {}, editing: true, todo: todo});
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
                                <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)}
                                      onDoubleClick={this.onDoubleClick(todo)}
                                      onDeleteClick={() => this.props.onDeleteClick(todo.id)}
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