// import dependencies
const mongoose = require("mongoose");

// import model
const Message = require("../models/message");

// create message
export const createMessage = (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save((err, message) => {
    if(err) return res.send(err);

    return res.json({
      "success": "true",
      "message": "Successfully created message",
      message
    })
  })
}

// updateMessage

// deleteMessage
