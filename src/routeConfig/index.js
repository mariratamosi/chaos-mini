import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "modules/components";
import { FeelingsList } from "modules/components";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/feelings" component={FeelingsList} />
    </Switch>
  );
}
export default Routes;
