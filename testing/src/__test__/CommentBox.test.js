import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

it('has a text area and a button', () => {
  wrapped.dive().find('button');
  // wrapped.find('button');
  // wrapped.find('textarea');
});
