

var quotes =["&ldquo; Mistakes are not shackels that halt one from stepping forward Rather, they are that which sustain and grow one's heart. &rdquo;",
    "&ldquo; Power comes in response to a need, not a desire. you have to create that need. &rdquo;",
    " &ldquo; If you don't like your destiny don't accept it instead have the courage to change it the way you want it to be.  &rdquo;",
    "&ldquo; Knowing what it feels to be in pain, is exactly why we try to be kind to others. &rdquo"

];

var quote_by =["MAVIS VERMEILLION (FAIRY TAIL)",
    "GOKU (DRAGON BALL Z)",
    "NARUTO UZUMAKI (NARUTO)",
    "JIRAIYA (NARUTO)"

];    
var counter = 0;
var element1 = document.getElementById("Quotes");
var element2 = document.getElementById("Quote_by");
var interval = setInterval(change,5000)

function change(){
    element1.innerHTML = quotes[counter];
    element2.innerHTML = quote_by[counter];
    counter++;
    if(counter>= quotes.length){
        counter = 0;
    }
}

function product_cat(namee){

    const product_catagory = namee.id.trim();
    console.log(product_catagory);

    localStorage.setItem('product_catagory',product_catagory);
    window.location.href="products.js";
}


