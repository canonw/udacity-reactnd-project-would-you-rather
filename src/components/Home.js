import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Tab, Button, Card, Image } from "semantic-ui-react";

const renderCardsForUnansweredQuestions = (
  unansweredQids,
  users,
  questions
) => {
  return (
    <Card.Group className="centered">
      {unansweredQids.map((qid) => (
        <Card key={qid}>
          <Card.Content>
            <Image
              floated="left"
              size="mini"
              src={users[questions[qid].author].avatarURL}
            />
            <Card.Header>{users[questions[qid].author].name} asks</Card.Header>
            <Card.Header>would you rather...</Card.Header>
            <Card.Description>
              <ul>
                <li>{questions[qid].optionOne.text}</li>
                <li>{questions[qid].optionTwo.text}</li>
              </ul>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui one buttons">
              <Link to={`/questions/${qid}`}>
                <Button fluid>Answer</Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

const renderCardsForAnsweredQuestions = (answeredQids, users, questions) => {
  return (
    <Card.Group className="centered">
      {answeredQids.map((qid) => (
        <Card key={qid}>
          <Card.Content>
            <Image
              floated="left"
              size="mini"
              src={users[questions[qid].author].avatarURL}
            />
            <Card.Header>{users[questions[qid].author].name} asks</Card.Header>
            <Card.Header>would you rather...</Card.Header>
            <Card.Description>
              <ul>
                <li>{questions[qid].optionOne.text}</li>
                <li>{questions[qid].optionTwo.text}</li>
              </ul>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui one buttons">
              <Link to={`/questions/${qid}`}>
                <Button fluid>View Poll</Button>
              </Link>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

class Home extends Component {
  render() {
    const { users, questions, authedUser } = this.props;

    const answeredQids = Object.keys(questions).filter(
      (qid) =>
        questions[qid].optionOne.votes.includes(authedUser) ||
        questions[qid].optionTwo.votes.includes(authedUser)
    );
    const unansweredQids = Object.keys(questions).filter(
      (qid) =>
        !questions[qid].optionOne.votes.includes(authedUser) &&
        !questions[qid].optionTwo.votes.includes(authedUser)
    );

    const panes = [
      {
        menuItem: `Unanswered (${unansweredQids ? unansweredQids.length : 0})`,
        render: () => (
          <Tab.Pane>
            {renderCardsForUnansweredQuestions(
              unansweredQids,
              users,
              questions
            )}
          </Tab.Pane>
        ),
      },
      {
        menuItem: `Answered (${answeredQids ? answeredQids.length : 0})`,
        render: () => (
          <Tab.Pane>
            {renderCardsForAnsweredQuestions(answeredQids, users, questions)}
          </Tab.Pane>
        ),
      },
    ];

    return (
      <div className="ui two column centered grid">
        <div className="column">
          <Tab panes={panes} className="centered" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    questions: state.questions,
    authedUser: state.authedUser,
  };
};

export default connect(mapStateToProps)(Home);
