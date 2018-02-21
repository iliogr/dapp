import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../Actions';
import { bindActionCreators } from 'redux';
import App from '../Components/App';

class GlobalContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        // this.props.getUser();
    }

    render() {
        return (
            <App {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: bindActionCreators(getUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);
