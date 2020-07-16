import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../components/profile";
import { Home } from "../components/Home";
import FirstLogin from "../components/firstLogin";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/profile" component={Profile} />
      <Route path="/firstLogin" component={FirstLogin} />
    </Switch>
  );
};
export default Routes;
