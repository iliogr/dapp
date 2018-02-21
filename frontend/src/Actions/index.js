import * as actionType from './ActionType';
import axios from 'axios';


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

            console.log(response.data);
            dispatch(getUserSuccess(response.data))

        })
        .catch(error => {
            throw(error);
        });
    }
};
