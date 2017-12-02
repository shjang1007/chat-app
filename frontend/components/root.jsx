// import dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import App
import App from "./app";
import ChatRoom from "./chatroom/chat_room";
import Home from "./pages/home";

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/chat" component={ChatRoom}/>
        <Route exact path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  )
}

export default Root;
