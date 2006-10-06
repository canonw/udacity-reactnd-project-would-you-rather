import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Form, Button, Radio, Item } from "semantic-ui-react";
import { handleReplyQuestion } from "../actions/questions";

// The value must match question object property name.
const VOTE_OPTION_ONE = "optionOne";
const VOTE_OPTION_TWO = "optionTwo";

class QuestionToVote extends Component {
  state = {
    voteOptionValue: "",
    isSubmitAllowed: false,
  };

  handleVoteOptionChange = (e, { value }) => {
    this.setState({
      voteOptionValue: value,
      isSubmitAllowed: value === VOTE_OPTION_ONE || value === VOTE_OPTION_TWO,
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
    const { isSubmitAllowed } = this.state;

    let submitButtonClassName = "button";
    // Disable submit button to inactive if needed.
    if (!isSubmitAllowed) submitButtonClassName += " disabled";

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
                    <Form>
                      <Form.Field>
                        <Radio
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
                        <Radio
                          label={question.optionTwo.text}
                          name="radioGroup"
                          value={VOTE_OPTION_TWO}
                          checked={
                            this.state.voteOptionValue === VOTE_OPTION_TWO
                          }
                          onChange={this.handleVoteOptionChange}
                        />
                      </Form.Field>
                    </Form>
                  </Item.Description>
                  <Item.Extra>
                    Select an option and press Submit button.
                    <div className="ui two buttons">
                      <Button
                        onClick={this.handleSubmit}
                        className={submitButtonClassName}
                      >
                        Submit
                      </Button>
                    </div>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect()(QuestionToVote);
