import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Include CSS
require('./style/style.css');
require('./vendor/test.js');

ReactDOM.render(<App />, document.getElementById('root'));
