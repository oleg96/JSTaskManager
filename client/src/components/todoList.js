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
import Checkbox from 'material-ui/Checkbox';
import {FormControlLabel} from 'material-ui/Form';
import styles from '../stylesheets/main.css';

class todoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            editing: false
        };
    }

    componentDidMount() {
        this.props.getTodoList(Auth.decodeToken()['_doc']['_id'])
            .catch(error => {
                this.props.setMessage(error.message, true);
                if (error.message === "Failed to authenticate token." || error.message === "No token provided.") {
                    Auth.deauthenticateUser();
                    this.props.history.push("/login");
                }
            });
    }

    onTodoClick = (id) => (event) => {
        this.props.onTodoClick(id)
            .catch(error => {
                this.props.setMessage(error.message, true);
                if (error.message === "Failed to authenticate token." || error.message === "No token provided.") {
                    Auth.deauthenticateUser();
                    this.props.history.push("/login");
                }
            });
    };

    onDeleteClick = (id) => (event) => {
        this.props.onDeleteClick(id)
            .catch(error => {
                this.props.setMessage(error.message, true);
                if (error.message === "Failed to authenticate token." || error.message === "No token provided.") {
                    Auth.deauthenticateUser();
                    this.props.history.push("/login");
                }
            });
    };

    onDeleteCompletedClick = (userId) => (event) => {
        this.props.onDeleteCompletedClick(userId)
            .catch(error => {
                this.props.setMessage(error.message, true);
                if (error.message === "Failed to authenticate token." || error.message === "No token provided.") {
                    Auth.deauthenticateUser();
                    this.props.history.push("/login");
                }
            });
    };

    onCompletedAllClick = (complete, userId) => (event) => {
        event.preventDefault();
        this.props.onCompleteAllClick(complete, userId)
            .catch(error => {
                this.props.setMessage(error.message, true);
                if (error.message === "Failed to authenticate token." || error.message === "No token provided.") {
                    Auth.deauthenticateUser();
                    this.props.history.push("/login");
                }
            });
    };

    onDoubleClick = (todo) => (event) => {
        this.setState({editing: true, todo: todo});
    };

    onSave = (event) => {
        event.preventDefault();
        this.setState({
            editing: false
        })
    };

    render() {
        switch (this.state.editing) {
            case false:
                if (this.props.visibility) {
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
                            </Grid>
                            <Grid
                                container
                                align='center'
                                justify='center'
                                direction='row'
                            >
                                <Grid item>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={this.props.checkboxStatus}
                                                value="Complete all todos"
                                                onChange={this.onCompletedAllClick(this.props.checkboxStatus, Auth.decodeToken()['_doc']['_id'])}
                                            />
                                        }
                                        label="Complete all todos"
                                    />
                                </Grid>
                                {
                                    this.props.haveCompleted
                                        ? <Grid item>
                                        <Button raised color="accent"
                                                onClick={this.onDeleteCompletedClick(Auth.decodeToken()['_doc']['_id'])}>Delete
                                            completed todos</Button>
                                    </Grid>
                                        : null
                                }
                            </Grid>
                            {
                                this.props.todos.map(todo => (
                                    <Todo key={todo.id} {...todo} onClick={this.onTodoClick(todo.id)}
                                          onDoubleClick={this.onDoubleClick(todo)}
                                          onDeleteClick={this.onDeleteClick(todo.id)}
                                    />
                                ))
                            }
                            <Grid
                                container
                                align='center'
                                justify='center'
                                direction='row'
                            >
                                <Grid item>
                                    <Footer />
                                </Grid>
                                <Grid item>
                                    <Badge badgeContent={this.props.activeCount} color="primary">
                                        <Assignment />
                                    </Badge>
                                    {this.props.activeCount === 1 ? " item left" : " items left"}
                                </Grid>
                            </Grid>
                        </div>
                    )
                }
                else {
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
                            </Grid>
                        </div>
                    )
                }
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