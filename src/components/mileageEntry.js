/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const showMileage =(cars) => {
  return cars.map((car, index) => {
    const year = car.get('mileage');
    return (
      <div key={index}>{year}</div>
    )
  });
};

const MileageEntry = ({cars}) => (
  <div>
    {showMileage(cars)}
  </div>
);

MileageEntry.propTypes = {
  cars: PropTypes.object
};


export default MileageEntry;
