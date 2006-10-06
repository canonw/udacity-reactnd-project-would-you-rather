import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { setAuthedUser } from "./authedUsers";
import { receiveUsers, userReplyQuestion } from "./users";
import { receiveQuestions, replyQuestion } from "./questions";
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

export function handleReplyQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => {
        dispatch(replyQuestion({ authedUser, qid, answer }));
        dispatch(userReplyQuestion({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}
