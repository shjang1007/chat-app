import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  content: {
    type: String,
    require: true
  },
  user: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Need to figure out how to setup foreign key relationship
// just create author value


// Create model!
const message = mongoose.model("Message", messageSchema);

export default message;

// Allowed Schema Types:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
