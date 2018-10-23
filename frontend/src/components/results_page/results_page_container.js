import { connect } from 'react-redux';

import { logout } from '../../actions/session_utils'; //we will make this eventually

import result_page from '/.result_page';

const mstp = (state) => { //likely the results we want to render back
    return {
        
    }
}

const mdtp = (dispatch) => { 
    return{
        logout: () => dispatch(logout)
    }
}

export default (mstp, mdtp)(result_page);