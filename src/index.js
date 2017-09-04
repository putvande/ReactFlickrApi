import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// Include CSS
require('./style/style.css');

ReactDOM.render((
	<BrowserRouter basename="/">
	  <App />
	</BrowserRouter>
  ), document.getElementById('root'));
