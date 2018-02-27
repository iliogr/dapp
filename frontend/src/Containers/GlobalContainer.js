import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../Actions';
import { getETHaccount } from '../Actions';
import { getWeb3 } from '../Actions';
import { bindActionCreators } from 'redux';
import App from '../Components/App';

import Web3 from "web3";

class GlobalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            web3: new Web3(window.web3.currentProvider)
        }
    }

    componentWillMount = () => {
        this.props.ETHaccount(this.state.web3).then( (response) => {
            if(response.account){
                // check if there is a password assigned
                if(localStorage.getItem(`${response.account}:password`)){
                    // this.props.history.push('/dashboard');
                }
                else{
                    localStorage.account = response.account;
                    this.props.history.push('/create');
                }
            }
        });
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
        account: state.web3Reducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: bindActionCreators(getUser, dispatch),
        ETHaccount: bindActionCreators(getETHaccount, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);
