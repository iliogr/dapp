import * as actionType from '../Actions/ActionType';

const userReducer = (state = null, action) => {
    let newState;
    switch (action.type) {
        case 'FETCH_USER_SUCCESS':
            newState = action.user;
            return newState;
        default:
            return state
    }
}

export default userReducer;
