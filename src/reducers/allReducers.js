import {combineReducers} from 'redux';
import carList from './carsReducer';

const rootReducer = combineReducers({
  carList
});

export default rootReducer;