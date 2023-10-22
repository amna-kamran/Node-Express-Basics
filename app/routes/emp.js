var express = require("express");
const Student = require("../models/employee");
var router = express.Router();
var empCount = require("../controllers/emp");

router.get("/", function (req, res, next) {
  res.send(" of employee");
});

router.get("/display", empCount.view);
router.get("/display/:employeeId", empCount.viewByEmployeeId);

router.post("/add", empCount.add);

router.put("/update/:employeeId", empCount.update);

router.delete("/delete/:employeeId", empCount.delete);

module.exports = router;
