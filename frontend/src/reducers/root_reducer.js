
import { combineReducers } from 'redux';

import session_errors_reducer from './session_errors_reducer';
import session_reducer from './session_reducer';

const rootReducer = combineReducers({
    session: session_reducer,
    session_errors: session_errors_reducer
});

export default rootReducer;
