import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  submitButton: {
    margin: theme.spacing.unit
  }
});

class Mortgage extends Component {
  render() {
    return (
      <main className="container">
        <h2>Upload Passport</h2>
        <input
          className={styles.input}
          accept="image/*"
          id="flat-button-file"
          multiple
          type="file"
        />

        <h2>Upload Bank Statement</h2>
        <input
          className={styles.input}
          accept="image/*"
          id="flat-button-file"
          multiple
          type="file"
        />

        <h2>Upload Employment Letter</h2>
        <input
          className={styles.input}
          accept="image/*"
          id="flat-button-file"
          multiple
          type="file"
        />
        <div className="submit-button">
          <Button
            component={Link}
            to="/apply/complete"
            variant="contained"
            className={styles.submitButton}
          >
            Submit
          </Button>
        </div>
      </main>
    );
  }
}

export default Mortgage;
