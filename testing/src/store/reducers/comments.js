import * as actionTypes from '../actions/actionTypes';

const initialState = {
  comments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
