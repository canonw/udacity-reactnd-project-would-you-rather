import React from "react";
import { connect } from "react-redux";
import { Grid, Image, Label, Header, Menu } from "semantic-ui-react";

const LeaderBoard = (props) => {
  const { users } = props;

  const scoreboard = Object.keys(users)
    .map((uid) => {
      const user = users[uid];
      const questionAnswered = user ? Object.keys(user.answers).length : 0;
      const questionCreated = user ? Object.keys(user.questions).length : 0;
      return {
        id: uid,
        userName: user ? user.name : "",
        avatarURL: user ? user.avatarURL : "",
        questionAnswered: questionAnswered,
        questionCreated: questionCreated,
        totalScore: questionAnswered + questionCreated,
      };
    })
    .sort((a, b) => b.totalScore - a.totalScore);

  return (
    <div className="ui two column centered grid">
      <div className="column">
        <Grid celled>
          {scoreboard.map((score, index) => (
            <Grid.Row key={score.id}>
              <Grid.Column width={8}>
                <Header as="h2">
                  <Image src={score.avatarURL} /> {score.userName}
                </Header>
                <Menu compact>
                  <Menu.Item as="a">
                    Question Answered
                    <Label floating>{score.questionAnswered}</Label>
                  </Menu.Item>
                  <Menu.Item as="a">
                    Created
                    <Label floating>{score.questionCreated}</Label>
                  </Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column width={4}>
                <Menu vertical>
                  <Menu.Item as="a">
                    Rank
                    <Label color="teal">{index + 1}</Label>
                  </Menu.Item>
                  <Menu.Item as="a" position="right">
                    Total Score
                    <Label>{score.totalScore}</Label>
                  </Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users: users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
