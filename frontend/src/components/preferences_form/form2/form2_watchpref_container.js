import { connect } from "react-redux";

import Form2 from './form2_watchpref';

const mstp = (state) => {
    return {
        // name: state.entities.users.name,
        // currentUser: state.entities.users[state.session.currentUserId]
    }
}


export default connect(mstp, null)(Form2);