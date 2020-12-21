import { Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmailVerification from "./pages/EmailVerification";
import React from "react";
import Profile from "./pages/Profile";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/verify" component={EmailVerification} />
    <Route path="/profile/me" component={Profile} />
  </Switch>
);

export default Routes;
