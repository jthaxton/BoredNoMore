import { connect } from "react-redux";

import form1Name from './form1_name';

const mstp = (state, ownProps) =>{
    return{
        step: state.step,
        nextStep: ownProps.nextStep
//         name: state.entites.users.currentUserId.info.name,
//         currentUser: state.entities.users[state.session.currentUserId]
    }
}

// const mdtp = (dispatch) => {
//     return{
//         nextStep: () => dispatch(nextStep())
//     }
// }



export default connect(mstp, null)(form1Name);