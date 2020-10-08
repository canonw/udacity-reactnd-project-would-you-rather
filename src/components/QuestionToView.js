import React from "react";
import { Grid, Segment, Progress, Item, Label } from "semantic-ui-react";
import { BiLike } from "react-icons/bi";

import { calculatePercent } from "../utils/helper.js";

export default function QuestionToView(props) {
  const { user, author, question } = props;
  const optionOneCount = question ? question.optionOne.votes.length : 0;
  const optionTwoCount = question ? question.optionTwo.votes.length : 0;
  const totalCount = optionOneCount + optionTwoCount;
  const selectedOption = user.answers[question.id];

  return (
    <Grid centered columns={2}>
      <Grid.Column>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" src={author.avatarURL} />

              <Item.Content>
                <Item.Header>{author.name} asks</Item.Header>
                <Item.Meta>Would You Rather...</Item.Meta>
                <Item.Description>
                  <Segment>
                    {selectedOption === "optionOne" && (
                      <Label color="teal" ribbon="right">
                        Your Vote
                      </Label>
                    )}
                    {question.optionOne.text}
                    <Progress
                      percent={calculatePercent(optionOneCount, totalCount)}
                      progress
                    >
                      {optionOneCount} out of {totalCount} users <BiLike /> this
                      option.
                    </Progress>
                  </Segment>
                </Item.Description>
                <Item.Description>
                  <Segment>
                    {selectedOption === "optionTwo" && (
                      <Label color="teal" ribbon="right">
                        Your Vote
                      </Label>
                    )}
                    {question.optionTwo.text}
                    <Progress
                      percent={calculatePercent(optionTwoCount, totalCount)}
                      progress
                    >
                      {optionTwoCount} out of {totalCount} users <BiLike /> this
                      option.
                    </Progress>
                  </Segment>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
