
import { combineReducers } from 'redux';

import session_errors_reducer from './session_errors_reducer';
import session_reducer from './session_reducer';
import apiResultsReducer from './api_results/api_results_reducer';

const rootReducer = combineReducers({
    api_results: apiResultsReducer,
    session: session_reducer,
    session_errors: session_errors_reducer,
});

export default rootReducer;
