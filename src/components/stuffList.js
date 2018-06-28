import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../actions/stuffActions';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { Input, Container, Row, Col, Table } from 'reactstrap';
import React from 'react';
import CarEntry from './CarEntry';

class stuffList extends React.Component {
    componentWillMount() {
      this.props.actions.fetchStuff();
    }
  
    constructor(props){
      super(props);
      this.sortCars = this.sortCars.bind(this);
    }
  
    sortCars(key) {
      return () => {
        this.props.actions.sortCars(key)
      };
    }

    render() {
        return (
          <Container className="tableWrapper">
            <Row>
              <Col xs="12" sm="4">
                <Input placeholder="Search Cars"/>
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="2" onClick={this.sortCars('year')}>Year</Col>
              <Col xs="12" sm="3">Make</Col>
              <Col xs="12" sm="2">Model</Col>
              <Col xs="12" sm="2">Mileage</Col>
              <Col xs="12" sm="3">Created Date</Col>
            </Row>
              <CarEntry
                cars={this.props.stuff}
              />
          </Container>

        )
    }
}

stuffList.propTypes = {
    stuffActions: PropTypes.object,
    stuff: PropTypes.object
};

function mapStateToProps(state) {
    return {
        stuff: Immutable.fromJS(state.stuff)
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(stuffList);