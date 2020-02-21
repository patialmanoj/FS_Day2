
const mongoose = require("mongoose"); // connect nodejs enviornment with mongo db  server , just as a connector
mongoose.connect("mongodb://localhost:27017/realEstate",{ useNewUrlParser: true, useUnifiedTopology: true },(error)=>{
    if(!error){
        console.log("you are connected successfully!!");
    }
    else{
        console.log("Error to the database",`${error}`);
    }
});

const House = require("./house.model");