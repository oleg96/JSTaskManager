import React, {Component, PropTypes} from 'react';
import AddTodoForm from './addTodoForm';
import UpdateTodoForm from './updateTodoForm';
import Todo from './todo'
import Footer from './footer'

class todoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: {},
            editing: false,
            errors: {}
        };
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

    render() {
        switch (this.state.editing) {
            case false:
                return (
                    <div>
                        <AddTodoForm />
                        {
                            this.props.todos.map(todo => (
                                <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)}
                                      onDoubleClick={this.onDoubleClick(todo)}/>
                        ))
                        }
                        <Footer />
                    </div>
                )
            case true:
                return (
                    <div>
                        <UpdateTodoForm todoProp={this.state.todo} onSave={this.onSave} />
                    </div>
                )
        }
    }
}

export default todoList;