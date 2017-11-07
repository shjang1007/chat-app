// Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import components
import App from './app';
import HomePage from "./homepage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ App }/>
      <Route path="/homepage" component={ HomePage }/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
