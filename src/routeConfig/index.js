import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, FeelingsList, Exc } from "modules/components";
import { ProtectedRoute } from "routeConfig/ProtectedRoute";
import { useSelector } from "react-redux";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Exc} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/feelings" component={FeelingsList} />
    </Switch>
  );
}
export default Routes;
