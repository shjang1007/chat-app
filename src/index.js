// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

// Import components
import App from './app';

ReactDOM.render(
  <BrowserRouter url="http://localhost:4000/api/" pollInerval={2000}>
    <Route path="/" component={ App }></Route>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
