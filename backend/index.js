const connection = require("./model");

const express = require("express");
const cors = require('cors');
const application = express();
const path = require("path");
// const expressHandelbars = require("express-handlebars");
const bodyParser = require("body-parser");
const HouseController = require("./controllers/houses");

application.use(cors());
application.use(bodyParser.urlencoded({
    extended:true
}));
application.set('views',path.join(__dirname,"/views/"));
application.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});

application.use("/houses", HouseController); 

application.listen("3000",()=>{
    console.log("express sever started");
});

