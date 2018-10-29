import {
    SET_CURRENT_USER
} from '../util/session_api_util';

import {
    SIGNUP_USER

} from '../actions/session_actions';

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email
            };
        case SIGNUP_USER:
            return{
                currentUser: action.user
            }
        default:
            return state;
    }
};

export default sessionReducer;