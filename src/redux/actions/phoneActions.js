import * as types from './actionTypes';
// import * as phoneApi from '../../api/phoneApi';
import axios from 'axios';

export function showPhones() {
  return (dispatch, getState) => {
    axios.get('http://localhost:3001/phones').then(response => {
      dispatch({ type: types.LOAD_PHONE_SUCCESS, payload: response.data });
    });
  };
}
