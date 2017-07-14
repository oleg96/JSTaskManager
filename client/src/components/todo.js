import React from 'react'
import PropTypes from 'prop-types'
import {ListItem, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';

const Todo = ({onClick, completed, text}) => (
    <div>
        <ListItem button onClick={onClick}
                  style={{
                      textDecoration: completed ? 'line-through' : 'none'
                  }}>
            <ListItemText primary={text}/>
        </ListItem>
        <Divider light/>
    </div>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo