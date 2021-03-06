import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import LoadingBar from "react-redux-loading-bar";

import NavBar from "./NavBar";
import Home from "./Home";
import Question from "./Question";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import LeaderBoard from "./LeaderBoard";
import Logout from "./Logout";

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
                <Route path="/add" exact component={NewQuestion} />
                <Route path="/questions/:qid" component={Question} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/logout" component={Logout} />
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
