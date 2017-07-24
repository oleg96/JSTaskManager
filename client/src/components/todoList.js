import React, {Component, PropTypes} from 'react';
import AddTodoForm from './addTodoForm';
import UpdateTodoForm from './updateTodoForm';
import Todo from './todo'
import Footer from './footer'
import Badge from 'material-ui/Badge';
import Assignment from 'material-ui-icons/Assignment'
import Auth from '../security/auth'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

class todoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todo: {},
            editing: false
        };
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

    onDeleteCompletedClick = (userId) => (event) => {
        this.props.onDeleteCompletedClick(userId)
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

    render() {
        switch (this.state.editing) {
            case false:
                return (
                    <div>
                        <Grid
                            container
                            align='center'
                            justify='center'
                            direction='column'
                        >
                            <Grid item>
                                <AddTodoForm />
                            </Grid>
                            <Grid item>
                                <Button raised color="accent"
                                        onClick={this.onDeleteCompletedClick(Auth.decodeToken()['_doc']['_id'])}>Delete
                                    completed todos</Button>
                            </Grid>
                        </Grid>
                        {
                            this.props.todos.map(todo => (
                                <Todo key={todo.id} {...todo} onClick={this.onTodoClick(todo.id)}
                                      onDoubleClick={this.onDoubleClick(todo)}
                                      onDeleteClick={this.onDeleteClick(todo.id)}
                                />
                            ))
                        }
                        <Footer />
                        <Grid
                            container
                            align='center'
                            justify='center'
                            direction='row'
                        >
                            <Grid item>
                                <Badge badgeContent={this.props.activeCount} color="primary">
                                    <Assignment />
                                </Badge>
                            </Grid>
                        </Grid>
                    </div>
                )
            case true:
                return (
                    <div>
                        <Grid
                            container
                            align='center'
                            justify='center'
                            direction='column'
                        >
                            <Grid item>
                                <UpdateTodoForm todoProp={this.state.todo} onSave={this.onSave}/>
                            </Grid>
                        </Grid>
                    </div>
                )
        }
    }
}

export default todoList;