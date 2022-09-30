const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pagination").then(()=>console.log("succes")).catch((err)=>console.log(err));

const myschema = mongoose.Schema({
    name:String,
    description:String,
    category:String,
    price:String,
    image:String
});
const Model = new mongoose.model("data",myschema);
module.exports = Model;