/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'reactstrap';

const CarDetails = ({location}) => {
  console.log('location', location);
  return(
    <Container className="car-details">
      <Row>
        <Col className="carImage" xs="12" sm="3">
          <img className="carImage" src={`${location.state.pic}`} />
        </Col>
        <Col xs="12" sm="4">
          <Row>Year: {location.state.carYear}</Row>
          <Row>Make: {location.state.carMake}</Row>
          <Row>Model: {location.state.carModel}</Row>
          <Row>Mileage: {location.state.carMileage}</Row>
        </Col>
      </Row>
    </Container>
  )
}

CarDetails.propTypes = {
  cars: PropTypes.object
};


export default CarDetails;
