import * as types from '../actions/actionTypes';

const initialState = {
  phones: [],
  phone: []
};

export function getPhones(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PHONES:
      console.log(state.phones);
      console.log(initialState);
      console.log(action);
      console.log(action.payload);
      return { ...state, ...action.payload };
    case types.LOAD_PHONE:
      console.log(state.phone);
      console.log(initialState);
      console.log(action);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
