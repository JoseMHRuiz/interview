import * as types from '../actions/actionTypes';

const initialState = {
  phones: [],
  phone: []
};

export function showPhones(state = initialState.phones, action) {
  switch (action.type) {
    case types.LOAD_PHONES:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}
export function showPhone(state = initialState.phone, action) {
  switch (action.type) {
    case types.LOAD_PHONE:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}
