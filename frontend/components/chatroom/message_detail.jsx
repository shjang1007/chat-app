// import dependencies
import React from "react";

const MessageDetail = ({ message }) => {
  return(
    <li>
      <div>{ message.user}: { message.content }</div>
    </li>
  )
};

export default MessageDetail;
