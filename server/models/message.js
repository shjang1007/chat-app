var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  content: {
    type: String,
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});


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
