import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Main extends Component {
  state = {
    openModal: false,
    stop: false
  };

  handleClickOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  checkState = () => {
    console.log("checking the state");
    const requested = localStorage.getItem("requested");
    console.log({ requested });
    if (requested === true) {
      this.state.handleClickOpen();
      console.log("Opening the modalal");
    }
    this.setState({ stop: true });
  };

  componentDidMount() {
    let count = 0;
    setTimeout(() => {
      this.handleClickOpen();
    }, 10000);
  }

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

        <Dialog
          open={this.state.openModal}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Request Sent"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to share your details with this Bank -
              MyBankName
              <Button
                variant="contained"
                className="buttons"
                onClick={this.handleClose}
              >
                Yes
              </Button>
              <Button variant="contained" className="buttons">
                No
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </main>
    );
  }
}

export default Main;
