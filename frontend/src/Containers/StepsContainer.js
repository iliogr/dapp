import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddKey from '../Components/AddKey';

import * as actions from '../Actions';

import bip39 from 'bip39';
import crypto from 'crypto';
import secrets from 'secrets.js-next';

import KeySplit from '../Keysplit/KeySplit';


const mnemonic = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about";

class StepsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ks: new KeySplit({account: localStorage.account, password: localStorage.getItem(`${this.account}:password`), localStorage: localStorage})
        }
    }

    changeStep = (data, step) =>{
        console.log(data, step)

        if(step === 1){
            this.props.step1(data);
            this.props.history.push('/add-key/step2');
        }
        else if(step === 2){
            localStorage.setItem(`${localStorage.account}:shards`, "[]");
            return this.state.ks.mnemonicToSSS(mnemonic, 5, 3)
            .then((mnemonicShards) => {
                var shards = [];
                for(var shard of mnemonicShards){
                    shards.push( this.state.ks.uploadShard(shard) );
                }
                return Promise.all(shards);
            })
            .then((results) => {
                var urls = [];
                for(let x = 0; x < results.length; x++){
                    let url = `${window.location.origin}${window.location.pathname}#${results[x].objectid.objectid}:${results[x].key.toString("base64")}`;
                    urls.push(url);
                    data.guardians[x].url = url;
                }
                this.props.step2(data.guardians);
                this.props.history.push('/add-key/step3');
                return urls;
            })
            this.props.step2(data);
            this.props.history.push('/add-key/step3')
        }
        else if(step === 3){

        }
        else if(step === 4){

        }


    }

    render() {
        return (
            <AddKey {...this.props} changeStep={this.changeStep} />
        )
    }

}


const mapStateToProps = (state) => {
    return {
        data: state.web3Reducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        step1: bindActionCreators(actions.setStep1, dispatch),
        step2: bindActionCreators(actions.setStep2, dispatch),
        // getUser: bindActionCreators(getUser, dispatch),
        // ETHaccount: bindActionCreators(getETHaccount, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(StepsContainer);
