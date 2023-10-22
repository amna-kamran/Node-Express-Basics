const Team = require("../models/team");
module.exports.view = function (req, res, next) {
  Team.find()
    .sort({ teamName: 1 })
    .exec()
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.add = function (req, res, next) {
  Team.create(req.body)
    .then((team) => {
      res.send(team);
      res.send("Team Stored");
    })
    .catch((err) => {
      return err;
    });
};

module.exports.delete = function (req, res, next) {
  const teamId = req.params.teamId;
  Team.findOneAndDelete({ teamId: teamId })
    .then((team) => {
      if (team) {
        res.json({
          message: "Team Deleted",
          deletedTeam: team,
        });
      } else {
        res.status(404).json({ message: "Team not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting team", error: err });
    });
};
