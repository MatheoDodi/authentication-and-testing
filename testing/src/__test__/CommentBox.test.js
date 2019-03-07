import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../components/CommentBox';
import Root from '../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('has a text area and a button', () => {
  wrapped.find('button');
  wrapped.find('textarea');
});
