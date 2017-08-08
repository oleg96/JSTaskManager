import React, {Component} from "react";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import AppBar from "material-ui/AppBar";
import Error from 'material-ui-icons/Error'

class NotFound extends Component {

    render() {
        return <AppBar position="static" color="default">
            <Toolbar>
                <Grid
                    container
                    align='center'
                    justify='center'
                    direction='row'
                    gutter={16}
                >
                    <Grid item>
                        <Error/>
                    </Grid>
                    <Grid item>
                        <Typography type="headline" color="accent">
                            Page not found
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    }
}


export default NotFound;