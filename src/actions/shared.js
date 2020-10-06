import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUsers";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleLoginUser(id) {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(id));
    dispatch(hideLoading());
  };
}
