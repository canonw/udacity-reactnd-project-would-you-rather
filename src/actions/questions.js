import { saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";
export const REPLY_QUESTION = "REPLY_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVED_QUESTIONS,
    questions,
  };
}

function replyQuestion({ authedUser, qid, answer }) {
  return {
    type: REPLY_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleReplyQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(replyQuestion({ authedUser, qid, answer }));
      dispatch(hideLoading());
    });
  };
}
