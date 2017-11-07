// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import components
import App from './app';
import HomePage from "./homepage";

// Determine if browser router is indeed correct router to use here
// Also, further read on Switch to see if I can re-route without using Switch

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ App }/>
      <Route path="/homepage" component={ HomePage }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
