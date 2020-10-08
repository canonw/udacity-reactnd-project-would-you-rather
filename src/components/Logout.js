import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleLoginUser } from "../actions/shared";

class Logout extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleLoginUser(null));
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect()(Logout);
