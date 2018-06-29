// import initialState from './initialState';
// import { createReducer } from '../utils';
// import Immutable from 'immutable';
// import {FETCH_STUFF, RECEIVE_STUFF, SORT_CARS} from '../actions/allActions';
//
// export default function stuff(state = initialState.stuff, payload) {
//   let newState;
//   switch (payload.type) {
//     case FETCH_STUFF:
//       console.log('FETCH_STUFF Action');
//       return payload;
//     case RECEIVE_STUFF:
//       newState = Immutable.fromJS(payload.stuff);
//       console.log('RECEIVE_STUFF Action', payload.stuff);
//       return newState;
//     case SORT_CARS:
//
//     default:
//       return state;
//   }
// }


import { FETCH_STUFF, RECEIVE_STUFF, SORT_CARS, SEARCH_CARS } from '../actions/allActions';
import createReducer from './createReducer';
import Immutable from 'immutable';
const initialState ={
  stuff: [],
  sort: {}
  };

const cars = {
  [RECEIVE_STUFF]: (state, payload) => {
    const newState = Immutable.fromJS(payload);
    return state.stuff = newState;
  },

  [SEARCH_CARS]: (state, value) => {

    state.map((findSearch)=> {
      
    })

    console.log(state);
    console.log(value);
    return Immutable.fromJS(state);
  },

  [SORT_CARS]: (state, payload) => {
    console.log('wewewe', state.stuff);
    debugger;
    console.log(state.sort);

    return state.update('sort', Immutable.fromJS({}), (sort) => {
      if(sort.get('key') && sort.get('key').equals(Immutable.fromJS(payload))) {
        return sort.set('ascend', sort.get('ascend') * -1);
      }

      return Immutable.fromJS({
        key: payload,
        ascend: 1
      });
    });
  }


};

export default createReducer(initialState, cars);

// const stuff = {
//   cars: new Immutable.OrderedMap({})
// };
//
// const states = {
//   [RECEIVE_STUFF]: (state = initialState.stuff, payload) => {
//     return state.set('cars', payload);
//   }
// };
//
// export default createReducer(Immutable.fromJS(carList), states)
