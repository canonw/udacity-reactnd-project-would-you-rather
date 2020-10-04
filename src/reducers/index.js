import { combineReducers } from "redux";
// TODO: import users from './users'
import { loadingBarReducer } from "react-redux-loading-bar";

export default combineReducers({
  // users,
  loadingBar: loadingBarReducer,
});
