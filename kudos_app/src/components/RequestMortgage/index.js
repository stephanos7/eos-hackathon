import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

class RequestMortgage extends Component {
  render() {
    return (
      <main className="vertical-center">
        <h1>Mortgage Template</h1>
        <p>Choose the data you wanto to request</p>

        <FormGroup row>
          <FormControlLabel
            control={<Switch value="checkedA" />}
            label="Secondary"
          />
          <FormControlLabel
            control={<Switch value="checkedB" color="primary" />}
            label="Primary"
          />
          <FormControlLabel
            control={<Switch value="checkedC" />}
            label="Uncontrolled"
          />
          <FormControlLabel
            control={<Switch value="checkedD" />}
            label="Disabled"
          />
        </FormGroup>
      </main>
    );
  }
}

export default RequestMortgage;