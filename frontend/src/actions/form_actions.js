import * as FormUtil from '../actions/form_api_util';
import { apiYelp } from '../actions/api_yelp';

export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const FETCH_STREAMS = "FETCH_STREAMS";
export const FETCH_EVENTS = "FETCH_EVENTS";
export const FETCH_MOVIES = "FETCH_MOVIES";


export const getRestaurants = (searchOptions) => {
    return dispatch => {
        return apiYelp(searchOptions).then((restaurants) => {
            return dispatch(receiveRestaurants(restaurants))
        })
    }
}
//searchOptions: location, cuisine, # of results

const receiveRestaurants = (restaurants) => {
    return {
        type: FETCH_RESTAURANTS,
        restaurants
    }
}

