const express = require("express");
const app = new express();
app.set("view engine","ejs");

const route = require("./routes/route");

app.use(route);
app.listen(8000,(console.log("done")));