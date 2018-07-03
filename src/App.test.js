import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';
import CarManager from './components/CarManager';

describe('should render car list', () =>{
  const carList ={
    year: 2014,
    make: 'test',
    model:'test12',
    mileage: 1000
  };

  const actions = {
    fetchCars: () => {}
  };
  it('should render the carManager', () => {
    const manager = shallow(
      <CarManager

      />
    )
  });

  
  

});