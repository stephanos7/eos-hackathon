import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class UserUploadConfirmation extends Component {
  render() {
    return (
      <main>
        <div className="splash-container">
          <div className="logo" />
        </div>
        <div className="main-content-container">
          <h2>All Validated</h2>

          <Button
            component={Link}
            to="/user"
            variant="contained"
            className="buttons"
          >
            Home
          </Button>
        </div>
      </main>
    );
  }
}

export default UserUploadConfirmation;
