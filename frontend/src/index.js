import React from "react";
import ReactDOM from "react-dom";
import Index from "./pages/index";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
