/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

const SingleCar = ({index, year, make, model, url, created, mileage, searchQuery}) => {

  return(
    <Row key={index} className="carRow">
      <Link className="carDetailLink"to={{pathname: '/carDetails/:year/:url/:make/:model/:mileages',
        state:{carYear: year, carMake:make, carModel: model, carMileage: mileage, pic: url} }}>
        <Col sm="2" xs="12">{year}</Col>
        <Col sm="3" xs="12">{make}</Col>
        <Col sm="2" xs="12">{model}</Col>
        <Col sm="2" xs="12">{mileage}</Col>
        <Col sm="3" xs="12">{created}</Col>
    </Link>
  </Row>
  );
};

SingleCar.propTypes = {
  year: PropTypes.integer,
  make: PropTypes.string,
  model: PropTypes.string,
  url: PropTypes.string,
  mileage: PropTypes.integer
};


export default SingleCar
