import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'

// Include CSS
require('./style/style.css');
require('./vendor/test.js');

ReactDOM.render((
	<BrowserRouter>
	  <App />
	</BrowserRouter>
  ), document.getElementById('root'));
