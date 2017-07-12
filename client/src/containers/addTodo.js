import React from 'react'
import {connect} from 'react-redux'
import addTodo from '../actions/addTodo'

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo('1', input.value));
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
};
AddTodo = connect()(AddTodo);

export default AddTodo