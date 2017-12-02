import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  updatedAt: {
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
const user = mongoose.model("User", userSchema);

export default user;


// Allowed Schema Types:
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
