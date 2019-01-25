import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth/Auth";
import StringMain from "./Components/String/StringMain";
import Mens from "./Components/Mens/Mens";
import Main from "./Components/Main/Main";
import Womens from "./Components/Womens/Womens";
import Cart from "./Components/Cart/Cart";
import User from "./Components/User/User"
// import Checkoutform from "./Components/Cart/injectStripe/Checkoutform";
export default (
  <Switch>
    <Route component={Auth} exact path="/Auth" />
    <Route component={StringMain} exact path="/StringMain" />
    <Route component={Mens} exact path="/Mens" />
    <Route component={Main} exact path="/" />
    <Route component={Womens} exact path="/Womens" />
    <Route component={Cart} exact path="/Cart" />
    <Route component={User} exact path="/User" />
  </Switch>
);
