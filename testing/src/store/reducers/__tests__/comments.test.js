import commentsReducer from '../comments';
import * as actionTypes from '../../actions/actionTypes';

it('handles action of type SAVE_COMMENT', () => {
  const action = {
    type: actionTypes.ADD_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer({ comments: [] }, action);

  expect(newState).toEqual({ comments: ['New Comment'] });
});

it('handles action with unknown type', () => {
  const newState = commentsReducer({ comments: [] }, {});

  expect(newState).toEqual({ comments: [] });
});
