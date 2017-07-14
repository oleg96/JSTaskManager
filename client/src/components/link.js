import React from 'react'
import PropTypes from 'prop-types'
import {LabelCheckbox} from 'material-ui/Checkbox';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <LabelCheckbox
            checked={true}
            label={children}
            value={children}
        />
    }

    return (
        <LabelCheckbox
            checked={false}
            label={children}
            value={children}
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        />
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link