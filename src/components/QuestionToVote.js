import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Form, Item } from "semantic-ui-react";
import { handleReplyQuestion } from "../actions/shared";

// The value must match question object property name.
const VOTE_OPTION_ONE = "optionOne";
const VOTE_OPTION_TWO = "optionTwo";

class QuestionToVote extends Component {
  state = {
    voteOptionValue: "",
  };

  handleVoteOptionChange = (e, { value }) => {
    this.setState({
      voteOptionValue: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, qid, authedUser } = this.props;
    const answer = this.state.voteOptionValue;

    dispatch(
      handleReplyQuestion({
        authedUser,
        qid,
        answer,
      })
    );
  };

  render() {
    const { question, author } = this.props;
    const { voteOptionValue } = this.state;

    const isSubmitAllowed =
      voteOptionValue === VOTE_OPTION_ONE ||
      voteOptionValue === VOTE_OPTION_TWO;

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" src={author.avatarURL} />
                  <Item.Content>
                    <Item.Header>{author.name} asks</Item.Header>
                    <Item.Meta>Would You Rather...</Item.Meta>
                    <Item.Description>
                      <Form.Field>
                        <Form.Radio
                          label={question.optionOne.text}
                          name="radioGroup"
                          value={VOTE_OPTION_ONE}
                          checked={
                            this.state.voteOptionValue === VOTE_OPTION_ONE
                          }
                          onChange={this.handleVoteOptionChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Form.Radio
                          label={question.optionTwo.text}
                          name="radioGroup"
                          value={VOTE_OPTION_TWO}
                          checked={
                            this.state.voteOptionValue === VOTE_OPTION_TWO
                          }
                          onChange={this.handleVoteOptionChange}
                        />
                      </Form.Field>
                    </Item.Description>
                    <Segment>
                      <Item.Extra>
                        <p> Select an option and press Submit button.</p>
                        <Form.Button type="submit" disabled={!isSubmitAllowed}>
                          Submit
                        </Form.Button>
                      </Item.Extra>
                    </Segment>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect()(QuestionToVote);
