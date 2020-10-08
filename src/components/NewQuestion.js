import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Segment, Form, Item } from "semantic-ui-react";

import { handleCreateQuestion } from "../actions/shared";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
  };

  handleOptionDescriptionChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, authedUser, history } = this.props;
    const author = authedUser;
    const { optionOneText, optionTwoText } = this.state;
    dispatch(
      handleCreateQuestion({ optionOneText, optionTwoText, author })
    ).then(() => {
      history.push("/");
    });
  };

  render() {
    const { optionOneText, optionTwoText } = this.state;
    const isSubmitAllowed = optionOneText !== "" && optionTwoText !== "";

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Item.Group>
                <Item>
                  <Item.Content>
                    <Item.Header>Create New Question</Item.Header>
                    <Item.Meta>Would You Rather...</Item.Meta>
                    <Item.Description>
                      <Form.Field>
                        <Form.Input
                          placeholder="Enter Description..."
                          label="First Option Description"
                          name="optionOneText"
                          onChange={this.handleOptionDescriptionChange}
                          value={optionOneText}
                          focus
                        />
                        <Form.Input
                          placeholder="Enter Description..."
                          label="Second Option Description"
                          name="optionTwoText"
                          onChange={this.handleOptionDescriptionChange}
                          value={optionTwoText}
                        />
                      </Form.Field>
                    </Item.Description>
                    <Segment>
                      <Item.Extra>
                        <p>Complete description and press Submit button.</p>
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
