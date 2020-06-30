import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function showPhones(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PHONE_SUCCESS:
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
}
