const Employee = require("../models/employee");
var student = require("../models/employee");
module.exports.view = function (req, res, next) {
  Employee.find()
    .sort({ "name.lastName": 1 })
    .exec()
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.viewByEmployeeId = function (req, res, next) {
  const employeeId = req.params.employeeId;
  Employee.find({ employeeId: employeeId })
    .exec()
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({
          message: "Employee not found",
        });
      }
      res.json(employee);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.add = function (req, res, next) {
  Employee.create(req.body)
    .then((employee) => {
      res.send(employee);
      res.send("Employee Stored");
    })
    .catch((err) => {
      return err;
    });
};

module.exports.delete = function (req, res, next) {
  const employeeId = req.params.employeeId;
  Employee.deleteOne({ id: employeeId })
    .then((employee) => {
      res.send(employee);
      res.send("Deleting Employee");
    })
    .catch((err) => {
      return err;
    });
};

module.exports.update = function (req, res, next) {
  const employeeId = req.params.employeeId;
  Employee.updateMany(
    {
      employeeId: employeeId,
    },
    req.body
  )
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      return err;
    });
};
