import immutableUpdate from 'immutable-update';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';


const initialState = {
  searchField: ""
};


export const searchRobots = (state=initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return immutableUpdate(
        state,
        {
          isPending: true
        });

    case REQUEST_ROBOTS_SUCCESS:
      return immutableUpdate(
        state,
        {
          robots: action.payload,
          isPending: false
        });

    case REQUEST_ROBOTS_FAILED:
      return immutableUpdate(
        state,
        {
          error: action.payload,
          isPending: false
        });

    default :
        return state
  }
}
