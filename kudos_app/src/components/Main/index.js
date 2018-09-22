import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UserHome from "../UserHome";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/user" component={UserHome} />
        </Switch>
      </main>
    );
  }
}

export default Main;
