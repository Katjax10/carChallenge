import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CarDetails from './components/CarDetails';
import CarManager from './components/CarManager';

class App extends Component {
    render() {
        return (
          <Router>
            <div className="app">
                <Switch>
                    <Route path="/" component={CarManager} exact={true}/>
                    <Route path="/carDetails/:year/:url/:make/:model/:mileage" component={CarDetails}/>
                </Switch>
            </div>
          </Router>
        );
    }
}

export default App;