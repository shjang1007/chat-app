// import dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import App
import App from "./app";
import Chat from "./chat/chat";
import Home from "./pages/home";

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  )
}

export default Root;
