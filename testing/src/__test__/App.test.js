import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import CommentBox from '../components/CommentBox';

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
