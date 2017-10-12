var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String,
              required: true,
              unique: true },
  password: { type: String,
              required: true
            }
},{
  timestamps: true
});

// Add validations and any custom methods for user model
// userSchema.pre("save", (callback) => {
// });


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
