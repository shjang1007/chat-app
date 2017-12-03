// import dependencies
import React, { Component } from "react";

// import nested Component
import ChatHistory from "./chat_history";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <h3>Welcome to Chat Room</h3>
        <ChatHistory/>
      </section>
    )
  }
};

export default ChatRoom;
