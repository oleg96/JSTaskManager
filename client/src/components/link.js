import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox';
import {FormControlLabel} from 'material-ui/Form';

class Link extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.active) {
            case true: {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={true}
                                value={this.props.children}
                            />
                        }
                        label={this.props.children}
                    />
                )
            }
            case false: {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={false}
                                label={this.props.children}
                                onClick={e => {
                                    e.preventDefault()
                                    this.props.onClick()
                                }}
                            />
                        }
                        label={this.props.children}
                    />
                )
            }
        }
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;