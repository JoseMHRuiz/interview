import * as types from '../actions/actionTypes';

const initialState = {
  phones: [],
  phone: []
};

export const getPhones = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PHONES:
      return {
        ...state,
        ...action.payload
      };
    case types.LOAD_PHONE:
      return {
        ...state,
        phone: action.payload
      };
    case types.LOAD_PHONES_ERROR:
      return {
        ...state,
        phone: action.payload,
        error: 'No phone found'
      };
    default:
      return state;
  }
};
