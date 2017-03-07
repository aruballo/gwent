import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './Containers/MainContainer.jsx';
import store from './Store/Store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  	<MainContainer />
  </Provider>,
  document.getElementById('root')
);
