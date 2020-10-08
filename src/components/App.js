import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

import Dashboard from "./Dashboard";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <Router>
        <Fragment>{isAuthenticated ? <Dashboard /> : <Login />}</Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isAuthenticated: authedUser !== null && authedUser !== "",
  };
}

export default connect(mapStateToProps)(App);
