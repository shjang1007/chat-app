// import dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

// import App
import App from "./app";
import ChatRoom from "./chat_room/chat_room";
import EnsureLoggedin from "./ensure_loggedin/ensure_loggedin";
// import ChooseUser from "./start_page/choose_user";

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route component={EnsureLoggedin}>
            <Route exact path="/chat" component={ChatRoom}/>
          </Route>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;
