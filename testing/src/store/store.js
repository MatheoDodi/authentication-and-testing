import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import commentsReducer from './reducers/comments';

export const store = createStore(commentsReducer, devToolsEnhancer());
