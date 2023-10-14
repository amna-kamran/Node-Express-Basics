var mongoose = require("mongoose");
var stSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  rollno: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("student", stSchema);
