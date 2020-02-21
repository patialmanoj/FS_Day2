const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const HouseModel = mongoose.model("house");


router.get("/",(req,res)=>{
    res.send("House Controller");
});


router.get("/list",(req,res)=>{

    HouseModel.find((err,docs) => {
        if(!err){
            console.log(docs);
            res.send(docs);
        }
        else{
            res.send("Error");
        }
    });
});

module.exports= router;