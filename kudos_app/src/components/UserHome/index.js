import React, { Component } from "react";
import "./styles.css";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

class Main extends Component {
  render() {
    return (
      <main>
        <div className="splash-container">
          <div className="logo" />
        </div>
        <div className="welcome-user-container">
          <h2>Kudos</h2>
          <p>
            Welcome to KUDOS, where you have full control of your identity
            verification
          </p>
          <p>Tell me what authentication are you preparing for?</p>

          <div className="options-container">
            <Button variant="contained" className="buttons">
              Mortgage
            </Button>

            <Button variant="contained" className="buttons">
              Rental
            </Button>

            <Button variant="contained" className="buttons">
              Job
            </Button>

            <Button variant="contained" className="buttons">
              Security
            </Button>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
