import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleLoginUser } from "../actions/shared";

const Logout = (props) => {
  const { dispatch } = props;

  dispatch(handleLoginUser(null));

  return <Redirect to="/" />;
};

export default connect()(Logout);
