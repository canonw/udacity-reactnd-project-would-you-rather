import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { BiHome, BiExit, BiQuestionMark, BiTrophy } from "react-icons/bi";

class NavBar extends Component {
  render() {
    const { userName, avatarURL } = this.props;

    return (
      <div className="ui inverted menu">
        <div className="ui container">
          <div className="item" />
          <NavLink
            to="/"
            exact
            className="header item"
            activeClassName="active"
          >
            <BiHome />
            &nbsp; Home
          </NavLink>
          <NavLink
            to="/newquestion"
            exact
            className="item"
            activeClassName="active"
          >
            <BiQuestionMark />
            &nbsp; New Question
          </NavLink>
          <NavLink
            to="/leaderboard"
            exact
            className="item"
            activeClassName="active"
          >
            <BiTrophy />
            &nbsp; Leaderboard
          </NavLink>
          <div className="ui right floated item">
            <span>Hello, {userName}</span>
            <img className="ui avatar image" src={avatarURL} alt="" />
          </div>
          <NavLink to="/logout" exact className="item" activeClassName="active">
            <BiExit />
            &nbsp; Logout
          </NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  let user = users ? users[authedUser] : null;

  return {
    userName: user ? user.name.split(" ")[0] : "",
    avatarURL: user ? user.avatarURL : "",
  };
}

export default connect(mapStateToProps)(NavBar);
