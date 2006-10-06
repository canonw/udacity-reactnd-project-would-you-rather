import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import LoadingBar from "react-redux-loading-bar";

import NavBar from "./NavBar";
import Home from "./Home";
import Question from "./Question";
import PageNotFound from "./PageNotFound";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <NavBar />
          <LoadingBar />
          {this.props.isAuthenticated !== true ? null : (
            <div className="ui center container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questions/:qid" component={Question} />
                <Route render={() => <PageNotFound />} />
              </Switch>
            </div>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isAuthenticated: authedUser !== null && authedUser !== "",
  };
}

export default connect(mapStateToProps)(Dashboard);
