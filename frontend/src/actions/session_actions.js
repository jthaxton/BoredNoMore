import { registerUser } from '../util/session_api_util';

export const SIGNUP_USER = "SIGNUP_USER";


export const registerTheUser = (userData) => dispatch => (
        registerUser(userData)
            .then( user => { dispatch(signupUser(user))
        })
    )
// export const registerTheUser = (userData) => {
//     return dispatch => {
//         return registerUser(userData).then( user => {
//             return dispatch(signupUser(user))
//         })
//     }
// }

const signupUser = (user) => {
    return {
        type: SIGNUP_USER,
        user
    }
}