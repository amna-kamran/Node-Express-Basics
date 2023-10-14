var http = require("http");
var mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/cui")
  .then((db) => {
    console.log("database connected successfuly");
    var studentSchema = mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      rollno: {
        type: String,
        required: true,
      },
    });
    var Student = mongoose.model("Student", studentSchema);

    http
      .createServer(function (req, res) {
        if (req.url === "/" && req.method === "GET") {
          res.writeHead(200, { "Content-type": "text/html" });
          res.write("<h1>Welcome to homescreen</h1><br>");
          res.write("<a href = '/show'>Show Record</a><br>");
          res.write("<a href = '/add'>Add Record</a><br>");
          res.write("<a href = '/edit'>Edit Record</a><br>");
          res.write("<a href = '/delete'>Delete Record</a>");

          res.end("");
        } else if (req.url === "/show" && req.method === "GET") {
          res.writeHead(200, { "Content-type": "text/html" });
          Student.find()
            .exec()
            .then((data) => {
              res.end(data.toString());
            })
            .catch((err) => {
              return err;
            });
        } else if (req.url === "/add" && req.method === "GET") {
          res.writeHead(200, { "Content-type": "text/html" });
          Student.create({ name: "amna", rollno: "SP21-BCS-009" })
            .then((data) => {
              res.write(
                "<h1>User has been created woth the following information</h1>"
              );
              res.end(data.toString());
            })
            .catch((err) => {
              return err;
            });
        } else if (req.url === "/edit" && req.method === "Get") {
          res.writeHead(200, { "Content-type": "text/html" });
          Student.findOneAndUpdate(
            { name: "Amna", rollno: "SP21-BCS-009" },
            { rollno: "BCS-09" }
          )
            .then((data) => {
              res.write("<h1>Updated</h1>");
              res.end(data.toString());
            })
            .catch((err) => {
              return err;
            });
        } else if (req.url === "/delete" && req.method === "GET") {
          Student.deleteOne({ name: "amna", rollno: "SP21-BCS-009" })
            .then((data) => {
              res.write("<h1>Deleted</h1>");
              res.end(data.toString());
            })
            .catch((err) => {
              return err;
            });
        } else {
          res.writeHead(400, { "Content-type": "text/html" });
        }
      })
      .listen(8000);
    console.log("Server is listening 8000");
  })
  .catch((err) => {
    return err;
  });
