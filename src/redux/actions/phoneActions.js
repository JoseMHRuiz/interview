import * as types from './actionTypes';
// import * as phoneApi from '../../api/phoneApi';
import axios from 'axios';

// export function loadPhoneSuccess(phones) {
//   return { type: types.LOAD_PHONE_SUCCESS, phones };
// }

// export function loadPhones() {
//   return function(dispatch) {
//     return phoneApi
//       .getPhones()
//       .then(phones => {
//         dispatch(loadPhoneSuccess(phones));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }

export function showPhones() {
  return (dispatch, getState) => {
    axios.get('http://localhost:3001/phones').then(response => {
      dispatch({ type: types.LOAD_PHONE_SUCCESS, payload: response.data });
    });
  };
}
