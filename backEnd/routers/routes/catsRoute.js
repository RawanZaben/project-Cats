const express = require("express");
const catsRoute = express.Router();

const { getCats, postCats, deleteCats,getcard } = require("../controllers/cats");
const {authentication} = require("../middlewares/authentication")

catsRoute.get("/Cats",authentication, getCats);
catsRoute.post("/Cats",authentication, postCats);
catsRoute.delete("/cat/:id", authentication, deleteCats);
catsRoute.get("/card/:id",authentication, getcard);


module.exports = catsRoute;
