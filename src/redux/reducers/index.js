import { combineReducers } from 'redux';
import { showPhones } from './phoneReducer';

const rootReducer = combineReducers({
  phone: showPhones
});

export default rootReducer;
