// import dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import App
import App from "./app";
import SignIn from "./session/sign_in";
import Home from "./pages/home";

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  )
}

export default Root;
