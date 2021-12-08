const mongoose = require("mongoose");

mongoose.connect(process.env.MOMGO_URL).then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
