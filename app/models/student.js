var mongoose = require("mongoose");
var stSchema = new mongoose.Schema({
  name: {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
  },
  rollno: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("student", stSchema);
