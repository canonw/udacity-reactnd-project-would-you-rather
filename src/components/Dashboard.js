import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default connect()(Dashboard);
