import { getInitialData } from "../utils/api";
// TODO: import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users }) => {
      // TODO: dispatch(receiveUsers(users))
      dispatch(hideLoading());
    });
  };
}