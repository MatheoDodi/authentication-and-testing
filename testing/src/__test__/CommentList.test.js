import React from 'react';
import { shallow } from 'enzyme';
import Root from '../Root';
import CommentList from '../components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <Root>
      <CommentList comments={['hello']} />
    </Root>
  );
});

it('shows one li for each comment', () => {
  expect(wrapped.find('li').length).toEqual(1);
});
