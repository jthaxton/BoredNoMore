import { connect } from "react-redux";
// import { registerUser } from '../../../actions/session_actions';
import { registerUser } from '../../../util/session_api_util';

import SignUp from './signup';

// const mstp = (state) => {
//     return {
//         name: state.entites.users.currentUserId.info.name,
//         currentUser: state.entities.users[state.session.currentUserId]
//     }
// }

const mdtp = (dispatch) => {
    return {
        signUp: (userData) => dispatch(registerUser(userData))
    }
}



export default connect(null, mdtp)(SignUp);