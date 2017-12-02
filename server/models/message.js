var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Need to figure out how to setup foreign key relationship
// Will have author/user and chatroom this message belongs to


// Create model!
var message = mongoose.model("Message", messageSchema);

module.exports = message;

// Allowed Schema Types:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
