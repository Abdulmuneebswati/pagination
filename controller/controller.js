const Model = require("../db/conn");
const faker = require("faker");
class Controller{
    static addProduct = async (req,res)=>{
        res.render("index")
    }
    static products = async(req,res)=>{
        let page = req.params.page || 1 ;
        const show_data = 3;
        const skip = (page - 1)*show_data;
        const count = await Model.countDocuments();
        let totalPage =  Math.ceil(count/show_data);
        const findData = await Model.find().skip(skip).limit(show_data);
        res.render("products",{
            data:findData,
            page:page,
            totalPage:totalPage
        });
    }
    }
    
module.exports = Controller;