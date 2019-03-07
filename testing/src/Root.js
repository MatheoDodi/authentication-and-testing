import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default props => <Provider store={store}>{props.children}</Provider>;
