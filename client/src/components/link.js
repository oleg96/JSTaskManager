import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'material-ui/Checkbox';
import {FormControlLabel} from 'material-ui/Form';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <FormControlLabel
            control={
                <Checkbox
                    checked={true}
                    value={children}
                />
            }
            label={children}
        />
    }

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={false}
                    label={children}
                    onClick={e => {
                        e.preventDefault()
                        onClick()
                    }}
                />
            }
            label={children}
        />
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link