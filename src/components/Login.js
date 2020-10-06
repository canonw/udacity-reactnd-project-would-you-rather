import React, { Component } from "react";
import { connect } from "react-redux";
import { BiLogIn } from "react-icons/bi";
import { Dropdown } from "semantic-ui-react";

import { handleLoginUser } from "../actions/shared";

class Login extends Component {
  state = {
    theAuthedUser: "",
    isLoginAllowed: false,
  };

  handleOnChangeUser = (event, data) => {
    this.setState({
      theAuthedUser: data.value,
      isLoginAllowed: data.value !== "",
    });
  };

  handleSubmit = () => {
    const { theAuthedUser } = this.state;
    const { dispatch } = this.props;

    dispatch(handleLoginUser(theAuthedUser));
  };

  render() {
    const { users } = this.props;

    const { isLoginAllowed } = this.state;

    // User data may not be available when this method invoked.
    if (!users) {
      return;
    }

    // Data format document URL - https://react.semantic-ui.com/modules/dropdown/#types-selection
    const userOptions = Object.keys(users).map((userId) => ({
      key: userId,
      value: users[userId].id,
      text: users[userId].name,
      image: { avatar: true, src: users[userId].avatarURL },
    }));

    let submitButtonClassName = "ui fluid submit button";
    // Disable submit button to inactive if needed.
    if (!isLoginAllowed) submitButtonClassName += " disabled";

    return (
      <div className="ui container">
        <div className="ui two column centered grid">
          <div className="row"></div>
          <div className="column">
            <div className="ui items">
              <div className="item">
                <div className="content">
                  <div className="header">
                    Welcome to the Would You Rather App!
                  </div>
                  <div className="meta">Please sign in to continue.</div>
                </div>
              </div>
            </div>

            <form className="ui large form">
              <div className="ui raised segment">
                <div className="field">
                  <Dropdown
                    placeholder="Select User"
                    fluid
                    selection
                    clearable
                    options={userOptions}
                    onChange={this.handleOnChangeUser}
                  />
                </div>
                <div
                  className={submitButtonClassName}
                  onClick={this.handleSubmit}
                >
                  <BiLogIn /> &nbsp; Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users: Object.values(users),
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(Login);
