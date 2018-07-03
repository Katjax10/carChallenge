import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from '../actions/carActions';
import Immutable from 'immutable';
import PropTypes from 'prop-types';
import { Input, Container, Row, Col } from 'reactstrap';
import React from 'react';
import CarTable from './CarTable';

class CarManager extends React.Component {
    componentWillMount() {
      this.props.actions.fetchCars();
    }
  
    constructor(props){
      super(props);
      this.sortCars = this.sortCars.bind(this);
      this.searchCars = this.searchCars.bind(this);
      this.sortOrder = this.sortOrder.bind(this);
      this.setState = this.setState.bind(this);
      this.state = {
        search: '',
        sortCars: false,
        clicked: false,
        sortDirection: ''
      }
    }

    searchCars(event){
      const value = event.target.value;
      this.setState({
        search: value

      });
    }

  sortOrder(){
    let sortOrder;
    if(!this.state.clicked){
      return sortOrder = 'Sorted in No particular Order. Click on header in which you would like to sort';
    }
    return sortOrder = `Sorted By: ${this.state.sortKey} in ${this.state.sortDirection}`;
  }

    sortCars(key) {
        return () => {
          if(this.state.clicked && this.state.sortDirection === 'asc'){
            return this.setState({
              sortDirection: 'desc'
            });
          }
          return this.setState({
            sortKey:key,
            clicked: true,
            sortDirection: 'asc'
          });
        }
    };

    render() {
        return (
          <Container className="tableWrapper">
            <Row>
              <Col xs="12" sm="4">
                <Input placeholder="Search Cars" onChange={this.searchCars}/>
              </Col>
            </Row>
            <Row className="sortInfo">
              <Col xs="12" sm="12">
                {this.sortOrder()}
              </Col>
            </Row>
            <Row className="carHeader">
              <Col xs="12" sm="2" className='sortHeader' onClick={this.sortCars('year')}>Year</Col>
              <Col xs="12" sm="3" className='sortHeader' onClick={this.sortCars('make')}>Make</Col>
              <Col xs="12" sm="2" className='sortHeader' onClick={this.sortCars('model')}>Model</Col>
              <Col xs="12" sm="2" className='sortHeader' onClick={this.sortCars('mileage')}>Mileage</Col>
              <Col xs="12" sm="3" className='sortHeader' onClick={this.sortCars('created_at')}>Created Date</Col>
            </Row>
            <Row className="headerMobile">Cars</Row>
              <CarTable
                cars={this.props.carList}
                searchState={this.state.search}
                sortKey={this.state.sortKey}
                clicked={this.state.clicked}
                sortDirection={this.state.sortDirection}
              />
          </Container>

        )
    }
}

CarManager.propTypes = {
    carList: PropTypes.object
};

function mapStateToProps(state) {
    return {
        carList: Immutable.fromJS(state.carList)
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(carActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CarManager);