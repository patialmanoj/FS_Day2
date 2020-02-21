const mongoose = require('mongoose');

var  houseSchema = new mongoose.Schema({
    id : { type: Number , rewquired : true},
    address : { type:String , required : true},
    country : { type:String , required : true},
    description : { type:String , required : true},
    price : { type: Number, required: true},
    photo : { type: String , required: true}
});

mongoose.model("house",houseSchema);