// import dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

// import nested Component
import ChatHistory from "./chat_history";
import MessageForm from "./message_form";

class ChatRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;

    return(
      <section>
        <h3>Welcome to Chat Room</h3>
        <ChatHistory user={ user }/>
        <MessageForm/>
      </section>
    )
  }
};
