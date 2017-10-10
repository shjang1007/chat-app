var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dummySchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  created_at: Date,
  updated_at: Date
})

// dummySchema.pre("save", (next) =>{
//   const date = new Date();
//
//   this.updated_at = date;
//
//   if(!this.created_at) {
//     this.created_at = date;
//   }
//
//   next();
// });



module.exports = mongoose.model("Dummy", dummySchema);
