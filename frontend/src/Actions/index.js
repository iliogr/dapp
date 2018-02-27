import * as actionType from './ActionType';
import axios from 'axios';
import Web3 from "web3";
import crypto from 'crypto';


export const getUserSuccess = (user) => {
    return {
        type: actionType.FETCH_USER_SUCCESS,
        user: user
    }
};

// ASYNC CALLS
export const getUser = () => {
    return (dispatch) => {
        return axios.get('http://localhost:5000/user')
        .then(response => {
            dispatch(getUserSuccess(response.data))
        })
        .catch(error => {
            throw(error);
        });
    }
};

export const getETHaccount = (web3) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            web3.eth.getAccounts((err, accounts) => {
                if(err) {
                    reject(dispatch(failETHaccount(err)))
                }
                else{
                    resolve(dispatch(successETHaccount(accounts[0])))
                }
            })
        })
    }
}
export const failETHaccount = (error) => {
    return {
        type: actionType.FETCH_ACCOUNT_FAIL,
        error: error
    }
};
export const successETHaccount = (account) => {
    return {
        type: actionType.FETCH_ACCOUNT_SUCCESS,
        account: account
    }
};


export const hashPass = (password) => {
    const salt = crypto.randomBytes(8);
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            crypto.pbkdf2(password, salt, 100000, 16, 'sha256', (err, pbkdf2Pass) => {
                if(err){
                    console.log(err);
                    reject(dispatch(failHashPass(err)))
                }
                else{
                    resolve(dispatch(successHashPass({hash: pbkdf2Pass.toString("hex"), salt: salt.toString("hex")})));
                }
            });
        });
    }
};
export const failHashPass = (error) => {
    return {
        type: actionType.HASH_PASS_FAIL,
        error: error
    }
};
export const successHashPass = (hashed) => {
    return {
        type: actionType.HASH_PASS_SUCCESS,
        hash: hashed
    }
};





export const setStep1 = (data) => {
    return {
        type: actionType.SET_STEP_1,
        address: data
    }
};
export const setStep2 = (data) => {
    return {
        type: actionType.SET_STEP_2,
        guardians: data
    }
};
export const setStep3 = (data) => {
    return {
        type: actionType.SET_STEP_1,
        address: data
    }
};
export const setStep4 = (data) => {
    return {
        type: actionType.SET_STEP_1,
        address: data
    }
};
