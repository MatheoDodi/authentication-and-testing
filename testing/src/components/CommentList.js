import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => (
  <ul>{comments.length > 0 && comments.map(comment => <li>{comment}</li>)}</ul>
);

const mapStateToProps = ({ comments }) => ({
  comments
});

export default connect(mapStateToProps)(CommentList);
