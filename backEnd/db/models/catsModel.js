const mongoose = require("mongoose");

const catsModel = new mongoose.Schema({
  name: { type: String },
  age: { type: String },
  gender: { type: String },
  type: { type: String },
  description: { type: String },
  img: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
});

module.exports = mongoose.model("catsModel", catsModel);
