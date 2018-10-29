import { registerUser } from '../util/session_api_util';

export const SIGNUP_USER = "SIGNUP_USER";


export const registerTheUser = (userData) => dispatch => (
        registerUser(userData)
            .then( user => { dispatch(signupUser(user))
        })
    )


const signupUser = (user) => {
    return {
        type: SIGNUP_USER,
        user
    }
}