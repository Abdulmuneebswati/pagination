const express = require("express")
const Controller = require("../controller/controller");

const route = express.Router();

route.get("/",Controller.addProduct);
// route.post("/",Controller.postaddProduct);
route.get("/products/:page",Controller.products);


module.exports = route;