// import dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

// import App
import App from "./app";
import ChatRoom from "./chatroom/chat_room";
import ChooseUser from "./pages/home";

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <BrowserRouter>
        <div>
          <Route path="/" component={App}/>
          <Route path="/get-started" component={ChooseUser}/>
          <Route exact path="/chat" component={ChatRoom}/>
          <Route exact path="/home" component={Home}/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;
