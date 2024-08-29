

const product_catagory_p1 = localStorage.getItem('product_catagory');


async function get_catagory(){

    const card = document.getElementById("product-container");
    product_catagory_D = await card.classList[1];


    console.log(product_catagory_p1);
    console.log(product_catagory_D);
    console.log(product_catagory_p1);

    if(product_catagory_p1 !== product_catagory_D){

        card.classList.add("hide");

    }
    else{
        card.classList.remove("hide");
    }
}


