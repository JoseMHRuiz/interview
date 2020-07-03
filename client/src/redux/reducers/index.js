import { combineReducers } from 'redux';
import { getPhones } from './phoneReducer';

const rootReducer = combineReducers({
  data: getPhones
});

export default rootReducer;
