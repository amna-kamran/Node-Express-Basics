var express = require("express");
const Student = require("../models/student");
var router = express.Router();
var empCount = require("../controllers/emp");

router.get("/", function (req, res, next) {
  res.send(" of employee");
});

router.get("/show", empCount.view);

router.post("/add", empCount.add);

router.put("/update", empCount.update);

router.delete("/delete", empCount.delete);

module.exports = router;
