var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Each mongoose model allows developers to create statics methods for model
// Create static method to combine find one and crate methods
userSchema.statics.findOrCreate = (condition, doc, callback) => {
  const self = this;
  self.findOne(condition, (err, result) => {
    return result
      ? callback(err, result)
      : self.create(doc, (err, result) => {
        return callback(err, result);
      });
  });
};

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
