export const RECEIVED_USERS = "RECEIVED_USERS";
export const USER_REPLY_QUESTION = "USER_REPLY_QUESTION";
export const USER_CREATED_QUESTION = "USER_CREATED_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVED_USERS,
    users,
  };
}

export function userReplyQuestion({ authedUser, qid, answer }) {
  return {
    type: USER_REPLY_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function userCreateQuestion(question) {
  return {
    type: USER_CREATED_QUESTION,
    question,
  };
}
