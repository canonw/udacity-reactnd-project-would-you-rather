import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUsers";
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
