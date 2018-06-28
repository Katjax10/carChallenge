import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Col, Row, Nav, NavItem} from 'reactstrap';
import {Link, BrowserRouter} from 'react-router-dom';

const findEntry =(cars, searchState) => {
  console.log(searchState);

  const convertBack = JSON.stringify(cars);


  if(searchState.length){
    const getIt = _.find(convertBack, searchState);
    return (<div>{getIt}</div>)
  }

  return cars.map((car, index) => {
    const make = car.get('make');
    const model=car.get('model');
    const year = car.get('year');
    const mileage = car.get('mileage');
    const url= car.get('image_url');
    const created = car.get('created_at');
    return (
          <Row className="carRow">
            <Link className="carDetailLink"to={{pathname: '/carDetails/:year/:url/:make/:model/:mileages',
      state:{carYear: year, carMake:make, carModel: model, carMileage: mileage, pic: url} }}>
            <Col sm="2" xs="12">{year}</Col>
            <Col sm="3" xs="12">{make}</Col>
            <Col sm="2" xs="12">{model}</Col>
            <Col sm="2" xs="12">{mileage}</Col>
            <Col sm="3" xs="12">{created}</Col>
            </Link>
          </Row>

    )
  });
};
const CarEntry = ({cars, searchState}) => {
  debugger;
  return (
    <span>{findEntry(cars, searchState)}</span>
  );
}

CarEntry.propTypes = {
  cars: PropTypes.object
};


export default CarEntry;
