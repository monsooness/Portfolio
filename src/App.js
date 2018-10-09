import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Photography from './Components/Photography/Photography'
import Navigation from './Components/Navigation/Navigation';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <Switch>
            <Route exact path="/" component={Photography}/>
            {/* <Route path="/Mathart" component={Mathart}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Aboutme" component={Aboutme}/> */}
          </Switch>
          <Navigation />


            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

