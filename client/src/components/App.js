import React, {Component} from 'react';
import TodoAppBar from '../components/appBar'
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import setMessage from '../actions/setMessage';
import styles from '../stylesheets/main.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
        this.handleClose = this.handleClose.bind(this);
    }

    render() {
        return (
            <div>
                <TodoAppBar />
                <div className="formContainer">
                    {this.props.children}
                </div>
                <Snackbar open={this.props.open} message={this.props.message} autoHideDuration={4000}
                          onRequestClose={this.handleClose}/>
            </div>
        )
    }

    handleClose() {
        this.props.setMessage("", false)
    }
}

function mapStateToProps(state) {
    return {
        message: state.message.message,
        open: state.message.open
    }
}

const mapDispatchToProps = {
    setMessage: setMessage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))