import React from "react";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { users } = props;

  const score = Object.keys(users)
    .map((uid) => {
      const user = users[uid];
      const answeredCount = user ? Object.keys(user.answers).length : 0;
      const createdCount = user ? Object.keys(user.questions).length : 0;
      return {
        id: uid,
        name: user ? user.name : "",
        answeredCount: answeredCount,
        createdCount: createdCount,
        totalCount: answeredCount + createdCount,
      };
    })
    .sort((a, b) => b.totalCount - a.totalCount);

  console.log(score);
  return <p>Hello LeaderBoard</p>;
};

function mapStateToProps({ users }) {
  return {
    users: users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
