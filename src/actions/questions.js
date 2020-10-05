export const RECEIVED_QUESTIONS = "RECEIVED_QUESTIONS";

export function receiveQuestions(questions) {
  return {
    type: RECEIVED_QUESTIONS,
    questions,
  };
}
