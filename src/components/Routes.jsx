import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Volunteer from '../routes/Volunteer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/volunteer" component={Volunteer} />
  </Switch>
);

export default Routes;
