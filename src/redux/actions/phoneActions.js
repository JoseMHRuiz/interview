import * as types from './actionTypes';
import axios from 'axios';

export function showPhones() {
  return (dispatch, getState) => {
    axios.get('http://localhost:3001/phones').then(response => {
      dispatch({
        type: types.LOAD_PHONES,
        payload: response.data
      });
    });
  };
}

export function showPhone(id) {
  return (dispatch, getState) => {
    axios.get('http://localhost:3001/phones').then(response => {
      let _phone = response.data.phones;
      dispatch({
        type: types.LOAD_PHONE,
        payload: _phone.find(phone => phone.id === +id)
      });
    });
  };
}
