import {
  FETCH_EVENTS
} from '../../actions/form_actions';

const eventsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
    
  switch (action.type) {

    case FETCH_EVENTS:
      return action.payload;

    default:
      return state;
  }
};

export default eventsReducer;