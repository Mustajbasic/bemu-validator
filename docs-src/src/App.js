import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import BemuValidatorPage from './pages/bemu-validator';
import BemuValidatorDocs from './pages/bemu-validator/docs';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <React.Fragment>
          <Header />
          <Route exact={true} path="/" component={BemuValidatorPage} />
          <Route exact={true} path="/docs" component={BemuValidatorDocs} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
