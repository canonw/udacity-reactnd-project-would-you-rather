export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";
export const REPLY_QUESTION = "REPLY_QUESTION";
export const CREATED_QUESTION = "CREATED_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVED_QUESTIONS,
    questions,
  };
}

export function replyQuestion({ authedUser, qid, answer }) {
  return {
    type: REPLY_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function createQuestion(question) {
  return {
    type: CREATED_QUESTION,
    question,
  };
}
