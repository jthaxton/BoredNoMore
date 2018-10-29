import { connect } from 'react-redux';

import { logoutUser } from '../../util/session_api_util'; //we will make this eventually

import resultPage from './results_page.jsx';

import openModal from 'react-modal';

import {
    getRestaurants,
    getActivities,
    getEvents,
} from '../../actions/result_actions.js';

import {
    selectRestaurant, 
    selectEvent
} from './result_selector';

const ticketMasterIds = require('../../util/api_ticket_master_ids');



const mstp = (state) => { //likely the results we want to render back
    const restaurantsArray = state.api_results.restaurants;
    const activitiesArray = state.api_results.activities;
    const eventsArray = state.api_results.events;

    return {
        // currentUser: state.entities.users[state.session.currentUserId]
        currentUser: {
            name: 'Tony',
            preferences: {
                activityType: ['active'],
                cuisine: ['chinese', 'icecream'],
                movieGenre: [],
                streamGenre: [],
                // liveEventType: ticketMasterIds['Miscellaneous'].id,
                // liveEventType: ticketMasterIds['Sports'].id,
                // liveEventType: ticketMasterIds['Music'].id,
                // liveEventType: ticketMasterIds['ArtsTheatre'].id,
                liveEventType: ticketMasterIds['Film'].id,
            }
        },

        selectRestaurant: selectRestaurant(restaurantsArray) || undefined,
        selectActivity: selectRestaurant(activitiesArray) || undefined,
        selectEvent: selectEvent(eventsArray) || undefined,
    }
}

const mdtp = (dispatch) => { 
    return{
        logout: () => dispatch(logoutUser()),
        openModal: () => dispatch(openModal()),
        getRestaurants: (searchOptions) => dispatch(getRestaurants(searchOptions)),
        getActivities: (searchOptions) => dispatch(getActivities(searchOptions)),
        getEvents: (searchOptions) => dispatch(getEvents(searchOptions))
    }
}

export default connect(mstp, mdtp)(resultPage);