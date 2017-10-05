var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DummySchema = new Schema({
  name: String
})

module.export = mongoose.model("Dummy", DummySchema);
