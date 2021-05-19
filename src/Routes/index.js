import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Modules/login/component/login";
import FeelingsList from "../Modules/feelingsDesc/component/feelingList";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/feelings" component={FeelingsList} />
    </Switch>
  );
}
export default Routes;
