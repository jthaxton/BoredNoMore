import {
  FETCH_RESTAURANTS
} from '../../actions/result_actions';

const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
    
  switch (action.type) {

    case FETCH_RESTAURANTS:
      return action.payload;

    default:
      return state;
  }
};

export default restaurantsReducer;