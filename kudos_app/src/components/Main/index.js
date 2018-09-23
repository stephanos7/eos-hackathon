import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserHome from "../UserHome";
import Mortgage from "../Mortgage";
import UserUploadMortgage from "../UserUploadConfirmation";
import RequestorHome from "../RequestorHome";
import RequestMortgage from "../RequestMortgage";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/user" component={UserHome} />
          <Route exact path="/apply/mortgage" component={Mortgage} />
          <Route exact path="/apply/complete" component={UserUploadMortgage} />
          <Route exact path="/requestor" component={RequestorHome} />
          <Route exact path="/requestor" component={RequestorHome} />
          <Route exact path="/request/mortgage" component={RequestMortgage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
