const mongoose = require("mongoose");
const connect =mongoose.connect("mongodb://localhost:27017/login");

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
});


const loginschema = new mongoose.Schema({

    username:{
        type: String,
        required:true
    },

    password:{
        type: String,
        required:true
    }

});

const collection = new mongoose.model("user",loginschema);

module.exports = collection;