// import { createStore } from 'redux';
// import actionTypes from './actions/actionTypes';
// import { EventEmitter } from 'events';
// import Dispatcher from './appDispatcher';

// let _phones = [];

// class PhoneStore extends EventEmitter {
//   getPhones() {
//     return _phones;
//   }
//   getPhoneById(id) {
//     return _phones.find(phone => phone.id === id);
//   }
// }

// const store = new PhoneStore();

// Dispatcher.register(action => {
//   switch (action.actionTypes) {
//     case actionTypes.LOAD_PHONE_SUCCESS:
//       _phones = action.phones;
//       store.emitChange();
//       break;
//     default:
//   }
// });

// // const showPhones = (state = initialState, action) => {
// //   switch (action.type) {
// //     case actionTypes.LOAD_PHONE_SUCCESS:
// //       return Object.assign({}, state, { list: action.payload });
// //     default:
// //       return state;
// //   }
// // };

// export default store;
