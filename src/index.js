const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const productCollection = require("./product");
const session = require("express-session");



const app = express();


// MIDDLEWARE


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine','ejs');
app.use(express.static("Public"));
app.use(session({secret:"secret"}));





// FUNCTIONS



function isproductincart(cart,id){

    for(let i=0 ; i<cart.length(); i++){
        if(cart[i].id == id){
            return true;
        }
    }

    return false;

};

function calculateTotal(cart,req){

};



app.get("/", (req,res) =>{
    res.render("Index");
});


app.get("/login", (req,res) =>{
    res.render("login");
});


app.get("/sigin",(req,res) =>{
    res.render("sigin");
});



app.get("/products",async (req,res) =>{
    
    dataa = await productCollection.find({});
    res.render("products",{title : 'products from database', action:'list' , dataa:dataa});

});
 


app.post("/add_to_cart" , (req,res) =>{

    var id = req.body.product.productid;
    var name = req.body.product.name;
    var price = req.body.product.price;
    var quantity = req.body.product.quantity;

    var product = {id:id, name:name, price:price, quantity:quantity};

    if(req.session.cart){
        var cart = req.session.cart;

        if(!isproductincart){
            cart.push(product);
        }
    }else{

        req.session.cart = [product];
        var cart = req.session.cart;

    }

    calculateTotal(cart,req);
    
    res.redirect("/cart");
});


app.post("/sigin",async (req,res)=>{

    
    const data={
        username: req.body.username,
        password: req.body.password
    }

    const exintinguser = await collection.findOne({username: data.username})

    if(exintinguser){
        res.send("username already exist plese choose different name")
    }else{

        const saltround = 10;
        const hashpassword = await bcrypt.hash(data.password,saltround);
        data.password = hashpassword;


        const userdata =await collection.insertMany(data);
        console.log(userdata);
    }
});



app.post("/login", async (req,res) => {
    try{
        const check = await collection.findOne({username: req.body.username});

        if(!check){
            res.send("username connot be found");
            console.log(req.body.username);
        }

        const ispassword = await bcrypt.compare(req.body.password, check.password);

        if(ispassword){
            res.render("Index")
        }
        else{
            res.send("wrong password");
        }

    }catch{
        res.send("wrond details");
    }
});

  

const port = 8000;
app.listen(port,() => console.log(`Server started at port ${port}`));
