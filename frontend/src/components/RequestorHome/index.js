import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class RequestorHome extends Component {
  render() {
    return (
      <main className="vertical-center">
        <h1>Welcome to the Requestor Portal</h1>
        <p>What data would you like to request?</p>
        <div className="options-container">
          <Button
            component={Link}
            to="/request/mortgage"
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
      </main>
    );
  }
}

export default RequestorHome;
