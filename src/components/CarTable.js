import React from 'react';
import PropTypes from 'prop-types';
import SingleCar from './SingleCar';
import Immutable from 'immutable';
import _ from 'lodash';

const findEntry =(cars, searchState, sortKey, clicked, sortDirection ) => {
  const searchQuery = _.toLower(searchState);

  if(sortKey && !searchQuery.length) {
    const findSort = _.sortBy(cars.toJS(), [sortKey]);
    if(sortDirection === 'desc'){
      return Immutable.fromJS(findSort).reverse().map((car, index) => {
        const make = car.get('make');
        const model = car.get('model');
        const year = car.get('year');
        const mileage = car.get('mileage');
        const url = car.get('image_url');
        const created = car.get('created_at');
        {
          return (
            <SingleCar
              year={year}
              make={make}
              model={model}
              index={index}
              mileage={mileage}
              created={created}
              url={url}
            />
          );
        }
      });
    }

    return Immutable.fromJS(findSort).map((car, index) => {
      const make = car.get('make');
      const model = car.get('model');
      const year = car.get('year');
      const mileage = car.get('mileage');
      const url = car.get('image_url');
      const created = car.get('created_at');

      {
        return (
          <SingleCar
            year={year}
            make={make}
            model={model}
            index={index}
            mileage={mileage}
            created={created}
            url={url}
          />
       );
      }
    });
  }

  return cars.map((car, index) => {

    const make = car.get('make');
    const model = car.get('model');
    const year = car.get('year');
    const mileage = car.get('mileage');
    const url = car.get('image_url');
    const created = car.get('created_at');
    const builtString1 = `${year} ${_.toLower(make)} ${_.toLower(model)}`;
    const builtString2 = `${year} ${_.toLower(model)} ${_.toLower(make)}`;
    const builtString3 = `${_.toLower(make)} ${year} ${_.toLower(model)}`;
    const builtString4 = `${_.toLower(make)} ${_.toLower(model)} ${year}`;
    const builtString5 = `${_.toLower(model)} ${_.toLower(make)}${year}`;
    const builtString6 = `${_.toLower(model)} ${year} ${_.toLower(make)}`;



    if (searchQuery.length) {
      if (_.includes(builtString1, searchQuery) ||
        _.includes(builtString2, searchQuery) ||
        _.includes(builtString3, searchQuery) ||
        _.includes(builtString4, searchQuery) ||
        _.includes(builtString5, searchQuery) ||
        _.includes(builtString6, searchQuery)

      ) {
        return (
          <SingleCar
            year={year}
            make={make}
            model={model}
            index={index}
            mileage={mileage}
            created={created}
            url={url}
            searchQuery={searchQuery}
          />
        );
      }
      return (<div className="noMatch">NoMatch :(((((((((</div>)
    }

    return (
      <div>
        <SingleCar
          year={year}
          make={make}
          model={model}
          index={index}
          mileage={mileage}
          created={created}
          url={url}
        />
      </div>

    )
  })
};
const CarTable = ({cars, searchState, sortKey, clicked, sortDirection}) => {
  return (
    findEntry(cars, searchState, sortKey, clicked, sortDirection)
  );
};

CarTable.propTypes = {
  cars: PropTypes.object
};


export default CarTable;
