import React, {Component} from "react";
import PropTypes from "prop-types";
import {ListItem, ListItemSecondaryAction, ListItemText} from "material-ui/List";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseOver: false
        };
    }

    onMouseOver = (event) => {
        this.setState({mouseOver: true});
    };

    onMouseOut = (event) => {
        this.setState({mouseOver: false});
    };

    render() {
        switch (this.state.mouseOver) {
            case false:
                return (
                    <div onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>
                        <ListItem button onClick={this.props.onClick} onDoubleClick={this.props.onDoubleClick}>
                            <ListItemText primary={this.props.text} style={{
                                textDecoration: this.props.completed ? 'line-through' : 'none'
                            }}/>
                        </ListItem>
                        <Divider light/>
                    </div>
                );
            case true:
                return (
                    <div onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>
                        <ListItem button onClick={this.props.onClick} onDoubleClick={this.props.onDoubleClick}>
                            <ListItemText primary={this.props.text} style={{
                                textDecoration: this.props.completed ? 'line-through' : 'none'
                            }}/>
                            <ListItemSecondaryAction>
                                <Button raised color="accent" onClick={this.props.onDeleteClick}>Delete
                                    todo</Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider light/>
                    </div>
                )
        }
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;