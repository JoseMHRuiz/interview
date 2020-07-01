import { combineReducers } from 'redux';
import { showPhones, showPhone } from './phoneReducer';

const rootReducer = combineReducers({
  phones: showPhones,
  phone: showPhone
});

export default rootReducer;
