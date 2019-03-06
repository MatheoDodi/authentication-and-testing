import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => (
  <div>
    {comments.length > 0 && comments.map(comment => <div>{comment}</div>)}
  </div>
);

const mapStateToProps = ({ comments }) => ({
  comments
});

export default connect(mapStateToProps)(CommentList);
