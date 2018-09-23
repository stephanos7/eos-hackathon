import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = theme => ({
  textField: {}
});

class RequestMortgage extends Component {
  state = {
    openModal: false
  };

  handleClickOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  render() {
    return (
      <main className="vertical-center">
        <h1>Mortgage Template</h1>
        <p>Choose the data you wanto to request</p>

        <FormGroup row>
          <FormControlLabel
            control={<Switch value="checkedA" />}
            label="Passport"
          />
          <FormControlLabel
            control={<Switch value="checkedB" />}
            label="Bank Statement"
          />
          <FormControlLabel
            control={<Switch value="checkedC" />}
            label="Employment Letter"
          />
          <FormControlLabel
            control={<Switch value="checkedD" />}
            label="Proof of Address"
          />
        </FormGroup>

        <TextField
          id="standard-bare"
          className={styles.textField}
          defaultValue="Account Name"
        />

        <br />
        <br />
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          className="buttons"
        >
          Request
        </Button>

        <Dialog
          open={this.state.openModal}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Request Sent"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Request has been sent, please wait until the user gives you
              permission
              <Button
                component={Link}
                to="/requestor"
                variant="contained"
                className="buttons"
              >
                Request
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </main>
    );
  }
}

export default RequestMortgage;
