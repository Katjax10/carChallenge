/**
 * Created by ujackk2 on 6/26/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Container, Row} from 'reactstrap';

const CarDetails = ({location}) => {
  return(
    <Container className="carDetails">
      <Row>
        <Col className="carImage" xs="12" sm="6" md="4" lg="3">
          <img className="carImage" src={`${location.state.pic}`} alt="car entry" />
        </Col>
        <Col xs="12" sm="3" className="carEntryDetails">
          <Row>Year: {location.state.carYear}</Row>
          <Row>Make: {location.state.carMake}</Row>
          <Row>Model: {location.state.carModel}</Row>
          <Row>Mileage: {location.state.carMileage}</Row>
        </Col>
      </Row>
    </Container>
  )
};

CarDetails.propTypes = {
  cars: PropTypes.object
};

export default CarDetails;