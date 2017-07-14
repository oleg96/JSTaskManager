import React from "react";
import FilterLink from "../containers/filterLink";
import { FormGroup } from 'material-ui/Form';

class Footer extends React.Component {
    render() {
        return <FormGroup row>
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </FormGroup>
    }
}

export default Footer