// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// Import components
import App from './app';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }></Route >
  </Router>,
  document.getElementById('root')
);
// registerServiceWorker();
