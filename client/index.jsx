import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// jquery configuration, possible webpack plugin
global.jQuery = require('jquery');

// utilizing bootstrap and compiled CSS
const bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('app'));
