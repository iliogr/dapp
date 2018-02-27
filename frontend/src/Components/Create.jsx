import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashPass } from '../Actions';

class Create extends Component {

    constructor(props) {
        super(props);
    }


    handleChange = (e) => {
        this.setState({ password: e.target.value });
    }


    createPass = () =>{
        if(this.state.password.length !== 12){
            // show error
        }
        else{
            this.props.hashPass(this.state.password)
            .then((result) => {
                localStorage.setItem(`${this.props.web3.account}:password`, JSON.stringify(result.hash));
                this.props.history.push('/dashboard')
            });
        }
    }

    render() {
        return (
            <div className="create">
                <h1>Create Account</h1>
                <p>Your Toshi wallet address<br/>will be your username.</p>
                <div className="fl-row">
                    <div className="fl-offset-10 fl-80">
                        <h4>Create Password</h4>
                        <input placeholder="Password (min 12 characters)" onChange={ this.handleChange } type="password" name="password" />
                    </div>
                </div>
                <center><button onClick={ this.createPass } className="create-account">CREATE ACCOUNT</button></center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        web3: state.web3Reducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        hashPass: bindActionCreators(hashPass, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
