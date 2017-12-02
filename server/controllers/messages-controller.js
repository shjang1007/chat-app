// import dependencies
import mongoose from "mongoose";

// import model
import Message from "../models/message";

// create message
export const createMessage = (req, res) => {
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

// updateMessage
export const updateMessage = (req, res) => {
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


// deleteMessage
export const deleteMessage = (req, res) => {
  Message.findByIdAndRemove(req.param.id, (err, message) => {
    if(err) res.send(err);

    return res.json({
      "success": true,
      "message": `Successfully deleted ${message.content}`
    });
  });
};
