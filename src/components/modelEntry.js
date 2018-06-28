/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const showModel =(cars) => {
  return cars.map((car, index) => {
    const year = car.get('model');
    return (
      <div key={index}>{year}</div>
    )
  });
};

const ModelEntry = ({cars}) => (
  <div>
    {showModel(cars)}
  </div>
);

ModelEntry.propTypes = {
  cars: PropTypes.object
};


export default ModelEntry;
