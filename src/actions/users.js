export const RECEIVED_USERS = "RECEIVED_USERS";
export const USER_REPLY_QUESTION = "USER_REPLY_QUESTION";

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
