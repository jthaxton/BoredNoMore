import {
  combineReducers
} from 'redux';

import restaurantsReducer from './restaurants_reducer';
import activitiesReducer from './activities_reducer';
import eventsReducer from './events_reducer';

const apiResultsReducer = combineReducers({
  restaurants: restaurantsReducer,
  activities: activitiesReducer,
  events: eventsReducer,
});

export default apiResultsReducer;
