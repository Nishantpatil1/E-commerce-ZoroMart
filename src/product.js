const mongoose = require("mongoose");

const connect =mongoose.connect("mongodb://localhost:27017/login");

const productSchema = new mongoose.Schema({

    
    productID:{
        type: String,
        required:true
    },
    
    productCatogary:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    discription:{
        type: String,
        required:true
    },
    lol:{
        type: String,
        required:true
    }

});

const productCollection = mongoose.model("products",productSchema);

module.exports = productCollection;
