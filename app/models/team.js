var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: true,
  },
  noOfMembers: {
    type: Number,
    required: true,
  },
  teamLead: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Team", teamSchema);
