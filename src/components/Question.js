import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import QuestionToVote from "./QuestionToVote";
import QuestionToView from "./QuestionToView";

class Question extends Component {
  state = {
    didAnswered: false,
  };

  render() {
    const { authedUser, qid, user, author, question } = this.props;
    const didAnswered = Object.keys(user.answers).includes(qid);

    return (
      <Fragment>
        {didAnswered ? (
          <QuestionToView
            authedUser={authedUser}
            qid={qid}
            user={user}
            author={author}
            question={question}
          />
        ) : (
          <QuestionToVote
            authedUser={authedUser}
            qid={qid}
            user={user}
            author={author}
            question={question}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser, questions, users }, ownProps) => {
  const { qid } = ownProps.match.params;
  const question = questions[qid];
  const user = users[authedUser];
  const questionAuthor = users[question.author] ?? null;

  return {
    authedUser: authedUser,
    user: user,
    author: questionAuthor,
    qid: qid,
    question: question,
  };
};

export default connect(mapStateToProps)(Question);
