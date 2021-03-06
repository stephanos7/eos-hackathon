import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <main className="vertical-center">
        {/* <div className="splash-container">
          <div className="logo" />
        </div> */}
        <div className="welcome-user-container">
          <h2>Kudos</h2>
          <p>
            Welcome to KUDOS, where you hitave full control of your identity
            verification
          </p>
          <p>Tell me what authentication are you preparing for?</p>

          <div className="options-container">
            <Button
              component={Link}
              to="/apply/mortgage"
              variant="contained"
              className="buttons"
            >
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
