import { apiYelp } from '../util/api_yelp.js';

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_STREAMS = "FETCH_STREAMS";
export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_MOVIES = "FETCH_MOVIES";


export const getRestaurants = (searchOptions) => dispatch => (
    apiYelp(searchOptions)
        // .then((restaurants) => {console.log(restaurants.data)})
        .then((restaurants) => dispatch(receiveRestaurants(restaurants.data)))
)

const receiveRestaurants = (restaurants) => ({
    type: FETCH_RESTAURANTS,
    payload: restaurants
})
