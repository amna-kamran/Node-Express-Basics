var mongoose = require("mongoose");
var empSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
  },
  employeeId: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Employee", empSchema);
