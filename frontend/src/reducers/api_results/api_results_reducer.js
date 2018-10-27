import {
  combineReducers
} from 'redux';

import restaurantsReducer from './restaurants_reducer';
import eventsReducer from './events_reducer';

const apiResultsReducer = combineReducers({
  restaurants: restaurantsReducer,
  events: eventsReducer,
});

export default apiResultsReducer;
