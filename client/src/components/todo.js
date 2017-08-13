import React, {Component} from "react";
import PropTypes from "prop-types";
import {ListItem, ListItemSecondaryAction, ListItemText} from "material-ui/List";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";
import Checkbox from 'material-ui/Checkbox';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseOver: false
        };
    }

    onMouseOver = () => {
        this.setState({mouseOver: true});
    };

    onMouseOut = () => {
        this.setState({mouseOver: false});
    };

    render() {
        return (
            <div>
                <ListItem button onDoubleClick={this.props.onDoubleClick} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>
                    <Checkbox
                        checked={this.props.completed}
                        onChange={this.props.onClick}
                    />
                    <ListItemText primary={this.props.text} style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }}/>
                    {this.state.mouseOver ?
                        <ListItemSecondaryAction>
                            <Button raised color="accent" onClick={this.props.onDeleteClick}>Delete
                                todo</Button>
                        </ListItemSecondaryAction>
                        : null
                    }
                </ListItem>
                <Divider light/>
            </div>
        );
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