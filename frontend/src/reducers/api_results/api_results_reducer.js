import {
  combineReducers
} from 'redux';

import restaurantsReducer from './restaurants_reducer';

const apiResultsReducer = combineReducers({
  restaurants: restaurantsReducer
});

export default apiResultsReducer;
