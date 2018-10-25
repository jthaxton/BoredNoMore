import { connect } from "react-redux";

import form2WatchPref from './form2_watchpref_container';

const mstp = (state) => {
    return {
        name: state.entities.users.name
        currentUser: state.entities.users[state.session.currentUserId]
    }
}


export default connect(mstp, null)(form2WatchPref);