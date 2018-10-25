import { connect } from 'react-redux';

import { logoutUser } from '../../util/session_api_util'; //we will make this eventually

import resultPage from './results_page.jsx';

const mstp = (state) => { //likely the results we want to render back
    return {
        
    }
}

const mdtp = (dispatch) => { 
    return{
        logout: () => dispatch(logoutUser)
    }
}

export default connect(mstp, mdtp)(resultPage);