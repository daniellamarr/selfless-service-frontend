import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Volunteer from '../routes/Volunteer';
import ViewEvent from '../routes/ViewEvent';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/volunteer" component={Volunteer} />
    <Route exact path="/events/:id" component={ViewEvent} />
  </Switch>
);

export default Routes;
