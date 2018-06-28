/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const showMake =(cars) => {
  return cars.map((car, index) => {
    const year = car.get('make');
    return (
      <div key={index}>{year}</div>
    )
  });
};

const MakeEntry = ({cars}) => (
  <div>
    {showMake(cars)}
  </div>
);

MakeEntry.propTypes = {
  cars: PropTypes.object
};


export default MakeEntry;
