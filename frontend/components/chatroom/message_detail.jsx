// import dependencies
import React from "react";

const MessageDetail = ({ message, user }) => {
  return(
    <li>
      <div>{ user.name} said: { message.content }</div>
    </li>
  )
};

export default MessageDetail;
