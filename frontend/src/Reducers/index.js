import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';
import web3Reducer from './web3Reducer';

const counterApp = combineReducers({
    counterReducer,
    userReducer,
    web3Reducer
})

export default counterApp;
