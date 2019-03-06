import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../store/actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    this.props.addComment(comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          name='comment'
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button>Submit Content</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment }
)(CommentBox);
