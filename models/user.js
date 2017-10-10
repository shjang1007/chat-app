var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  token: String,
  name: String
})

module.export = mongoose.model("User", UserSchema);
