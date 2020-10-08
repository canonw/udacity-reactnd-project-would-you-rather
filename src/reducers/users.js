import {
  RECEIVED_USERS,
  USER_REPLY_QUESTION,
  USER_CREATED_QUESTION,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      return {
        ...state,
        ...action.users,
      };
    case USER_REPLY_QUESTION:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case USER_CREATED_QUESTION:
      const user = action.question.author;
      const questionId = action.question.id;
      return {
        ...state,
        [user]: {
          ...state[user],
          questions: state[user].questions.concat([questionId]),
        },
      };
    default:
      return state;
  }
}
