import { apiYelp } from '../util/api_yelp.js';
import { apiTicketMaster } from '../util/api_ticket_master';

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_STREAMS = "FETCH_STREAMS";
export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_MOVIES = "FETCH_MOVIES";


export const getRestaurants = (searchOptions) => dispatch => (
    apiYelp(searchOptions)
        .then((restaurants) => dispatch(receiveRestaurants(restaurants.data)))
)

const receiveRestaurants = (restaurants) => ({
    type: FETCH_RESTAURANTS,
    payload: restaurants
})



export const getEvents = (searchOptions) => dispatch => (
    apiTicketMaster(searchOptions)
        .then((events) => dispatch(receiveEvents(events.data._embedded.events)))
)

const receiveEvents = (events) => ({
    type: FETCH_EVENTS,
    payload: events
})
