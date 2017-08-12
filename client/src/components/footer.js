import React, {Component} from "react";
import FilterLink from "../containers/filterLink";
import {FormGroup} from 'material-ui/Form';

class Footer extends Component {

    render() {
        return <FormGroup row>
            <FilterLink filter="all">
                All
            </FilterLink>
            <FilterLink filter="active">
                Active
            </FilterLink>
            <FilterLink filter="completed">
                Completed
            </FilterLink>
        </FormGroup>
    }
}

export default Footer;