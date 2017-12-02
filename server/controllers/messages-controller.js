// import dependencies
const mongoose = require("mongoose");

// import model
const Message = require("../models/message");

// create message
const createMessage = (req, res) => {
  const newMessage = new Message(req.body);
  newMessage.save((err, message) => {
    if(err) return res.send(err);

    return res.json({
      "success": true,
      "message": "Successfully created message",
      message
    });
  });
};

module.exports = createMessage

// updateMessage
const updateMessage = (req, res) => {
  // first param is to lookup, second param is to provide content to update, third param is to return the updated obj.
  Message.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true },
    (err, message) => {
      if(err) res.send(err);

      return res.json({
        "success": true,
        "message": "Successfully upated message",
        message
      });
    });
};

module.exports = updateMessage


// deleteMessage
const deleteMessage = (req, res) => {
  Message.findByIdAndRemove(req.param.id, (err, message) => {
    if(err) res.send(err);

    return res.json({
      "success": true,
      "message": `Successfully deleted ${message.content}`
    });
  });
};

module.exports = deleteMessage
