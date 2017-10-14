// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

// Import components
import App from './app';
import HomePage from "./homepage";

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={ App }>
      <Route path="/homepage" component={ HomePage }/>
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);
// registerServiceWorker();
