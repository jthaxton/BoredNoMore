import {
  FETCH_ACTIVITIES
} from '../../actions/result_actions';

const activitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {

    case FETCH_ACTIVITIES:
      return action.payload;

    default:
      return state;
  }
};

export default activitiesReducer;