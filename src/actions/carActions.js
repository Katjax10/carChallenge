import {
  RECEIVE_CARS,
} from './allActions';
import axios from 'axios';
export function receiveCars(data) {
    return {
      type: RECEIVE_CARS,
      payload: data
    };
}


export function fetchCars() {
    return (dispatch) => {
      axios.get('https://gist.githubusercontent.com/creatifyme/2a334c00a117097bfdb47f031edf292c/raw/efb52ecf1cf92e2261f504ec7639c68b5ff390bd/cars.json')
        .then((res) => {
          dispatch(receiveCars(res.data));
        })
        .catch((error) => {
          console.log('there was an error', error);
        })
    };
}
