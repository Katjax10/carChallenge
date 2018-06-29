import {
  RECEIVE_STUFF,
  SORT_CARS,
  SEARCH_CARS
} from './allActions';
import axios from 'axios';
export function receiveStuff(data) {
    return {
      type: RECEIVE_STUFF,
      payload: data
    };
}


export function fetchStuff() {
    return (dispatch) => {
      axios.get('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
        .then((res) => {
          console.log(res.data);
          dispatch(receiveStuff(res.data));
        })
        .catch((error) => {
          console.log('there was an error', error);
        })
    };
}

export function searchCars(value, payload) {
  console.log(value)
  console.log('payload', payload);
    return {
      type: SEARCH_CARS,
      payload: value
  }
}

export function sortCars(key) {
  return (dispatch) => {
    dispatch({
      type: SORT_CARS,
      payload: key
    })
  }
}

// export function getYear(data) {
//   data.map((cars) => {
//     return cars.year;
//   });
// }
