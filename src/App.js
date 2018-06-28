import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CarDetails from './components/carDetails';
import StuffList from './components/stuffList';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="app">
                <Switch>
                    <Route path="/" component={StuffList} exact={true}/>
                    <Route path="/carDetails/:year/:url/:make/:model/:mileage" component={CarDetails}/>
                </Switch>
            </div>
          </Router>
        );
    }
}

export default App;