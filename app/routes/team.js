var express = require("express");
const Student = require("../models/employee");
var router = express.Router();
var team = require("../controllers/team");

router.get("/", function (req, res, next) {
  res.send("Teams");
});

router.get("/display", team.view);

router.post("/add", team.add);

router.delete("/delete/:teamId", team.delete);

module.exports = router;
