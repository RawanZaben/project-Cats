const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors());

require("./db/db");

///////////////////////////////

const catsRoute = require("./routers/routes/catsRoute");
const signUpRoute = require("./routers/routes/signUpRoute");
const loginRoute  = require("./routers/routes/loginRoute")

app.use(catsRoute);
app.use(signUpRoute);
app.use(loginRoute);



////////////////////

const Port = 5000;
app.listen(process.env.PORT || Port, () => {
  console.log("server run on 5000 port");
});
