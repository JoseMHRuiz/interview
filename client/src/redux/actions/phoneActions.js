import * as types from './actionTypes';
import axios from 'axios';

export const showPhones = () => {
  return (dispatch, getState) => {
    return axios.get('http://localhost:3001/phones').then(response => {
      response.data && response.data.phones.length > 0
        ? dispatch({
            type: types.LOAD_PHONES,
            payload: response.data
          })
        : dispatch({ type: types.LOAD_PHONES_ERROR });
    });
  };
};

export const showPhone = id => {
  return (dispatch, getState) => {
    return axios.get('http://localhost:3001/phones').then(response => {
      let _phone = response.data.phones;
      response.data && response.data.phones.length > 0
        ? dispatch({
            type: types.LOAD_PHONE,
            payload: _phone.find(phone => phone.id === +id)
          })
        : dispatch({ type: types.LOAD_PHONES_ERROR });
    });
  };
};
