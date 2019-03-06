import * as actionTypes from './actionTypes';

export const addComment = comment => ({
  type: actionTypes.ADD_COMMENT,
  payload: comment
});
