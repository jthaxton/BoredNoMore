import { connect } from 'react-redux';

import { logoutUser } from '../../util/session_api_util'; //we will make this eventually

import resultPage from './results_page.jsx';

import openModal from 'react-modal';

import {
    getRestaurants,
    getEvents
} from '../../actions/form_actions.js';

const mstp = (state) => { //likely the results we want to render back
    return {
        // currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mdtp = (dispatch) => { 
    return{
        logout: () => dispatch(logoutUser()),
        openModal: () => dispatch(openModal()),
        getRestaurants: (searchOptions) => dispatch(getRestaurants(searchOptions)),
        getEvents: (searchOptions) => dispatch(getEvents(searchOptions))
    }
}

export default connect(mstp, mdtp)(resultPage);