var mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/cui")
  .then((db) => {
    console.log("connected successfully");
    //schema
    var studentSchema = new mongoose.Schema({
      name: { type: String, required: true },
      rollNo: { type: String, required: true },
    });

    //model
    var Student = mongoose.model("Student", studentSchema);

    //creating an object that will be mapped as a document in the database
    //initially there will be no collection so it will automatically create one
    var student = new Student({ name: "Amna", rollNo: "SP21-BCS-009" });
    student
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("Error: {$err}");
      });
  })
  .catch((err) => {
    console.log("failed to connect");
  });
