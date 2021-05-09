import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import FormPage from '../pages/FormPage';
import ListMachines from '../pages/ListMachines';

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={ListMachines} />
      <Route exact path="/cadastrar" component={FormPage} />
      <Redirect to="/" />
    </Switch>
  );
}

export default routes;