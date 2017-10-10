var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  token: String,
  name: String,
  username: { type: String,
              required: true,
              unique: true },
  password: { type: String,
              required: true
            },
  created_at: Date,
  updated_at: Date
})

// Add validations and any custom methods for user model
userSchema.methods.validate = () => {
  this.name = this.name + " validated";

  return this.name;
}

// Create model!
var user = mongoose.model("User", userSchema);

module.exports = user;

// Allowed Schema Types:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
