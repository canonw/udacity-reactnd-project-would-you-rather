import React, { Component } from "react";
import { connect } from "react-redux";

import LoadingBar from "react-redux-loading-bar";

import NavBar from "./NavBar";
import Home from "./Home";

class Dashboard extends Component {
  render() {
    return (
      <div className="ui container">
        <NavBar />
        <LoadingBar />
        <div className="ui center container">
          <Home />
        </div>
      </div>
    );
  }
}

export default connect()(Dashboard);
