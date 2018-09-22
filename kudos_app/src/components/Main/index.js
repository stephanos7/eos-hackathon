import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserHome from "../UserHome";
import Mortgage from "../Mortgage";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/user" component={UserHome} />
          <Route exact path="/apply/mortgage" component={Mortgage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
