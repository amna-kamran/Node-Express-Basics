var student = require("../models/student");
module.exports.view = function (req, res, next) {
  student
    .find()
    .exec()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      return err;
    });
};

module.exports.add = function (req, res, next) {
  student
    .create(req.body)
    .then((students) => {
      res.send(students);
      res.send("stored");
    })
    .catch((err) => {
      return err;
    });
};

module.exports.delete = function (req, res, next) {
  student
    .deleteOne({ name: "amna" })
    .then((students) => {
      res.send(students);
      res.send("Deleting student");
    })
    .catch((err) => {
      return err;
    });
};

module.exports.update = function (req, res, next) {
  const query = { rollno: req.body.rollno };
  student
    .updateMany(query, req.body)
    .then((students) => {
      res.send(students);
    })
    .catch((err) => {
      return err;
    });
};
