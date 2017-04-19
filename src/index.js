import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './Containers/MainContainer.jsx';
import store from './Store/Store.js';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(

	<Provider store={store}>
		<HashRouter>
			<Route path="/" component={MainContainer}/>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
