import { RECEIVED_QUESTIONS, REPLY_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVED_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case REPLY_QUESTION:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser],
          },
        },
      };
    default:
      return state;
  }
}
