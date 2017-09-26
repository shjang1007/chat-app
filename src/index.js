// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

// Import components
import App from './app';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/hello" component={ App }></Route>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
