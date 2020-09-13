import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import List from './pages/list'
import LoginPage from './pages/login'

const App = (props) => {
  return (
    <Router>
    <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/users" exact>
          <List />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;