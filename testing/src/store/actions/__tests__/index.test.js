import { addComment } from '../index';
import * as actionTypes from '../actionTypes';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = addComment();

    expect(action.type).toEqual(actionTypes.ADD_COMMENT);
  });

  it('has the correct payload', () => {
    const action = addComment('New Comment');

    expect(action.payload).toEqual('New Comment');
  });
});
