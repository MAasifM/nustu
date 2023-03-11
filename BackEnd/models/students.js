//All Requirements
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

//All Constants
const Schema = mongoose.Schema;

//Students Schema
const StudentsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  cms_id: {
    type: Number,
    required: true,
    unique: true,
  },
});

StudentsSchema.plugin(passportLocalMongoose);

//Export Model
module.exports = mongoose.model("Student", StudentsSchema);
