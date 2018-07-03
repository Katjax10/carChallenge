import { RECEIVE_CARS} from '../actions/allActions';
import createReducer from './createReducer';
import Immutable from 'immutable';
const initialState = {};

const cars = {
  [RECEIVE_CARS]: (state, payload) => {
    const newState = Immutable.fromJS(payload);
    return state.carList = newState;
   }

};

export default createReducer(initialState, cars);
