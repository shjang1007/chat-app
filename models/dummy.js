var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dummySchema = new Schema({
  name: {
    type: String,
    unique: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("Dummy", dummySchema);
