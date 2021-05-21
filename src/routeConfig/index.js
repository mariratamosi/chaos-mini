import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "modules/component";
import { FeelingsList } from "modules/component";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/feelings" component={FeelingsList} />
    </Switch>
  );
}
export default Routes;
