import { connect } from "react-redux";

import form1Name from './form1_name';

const mstp = (state) =>{
    return{
        name: state.entites.users.currentUserId.info.name
        currentUser: state.entities.users[state.session.currentUserId]
    }
}


export default connect(mstp, null)(form1Name);